---
title: Set Up NextCloud and Coturn on Ubuntu 22 Server
author:
  name: Piyazon
  link: https://piyazon.top
date: 2024-11-16 15:10:00 +0800
categories: [Blogging, Tutorial]
tags: [php, ubuntu, nextcloud, coturn, ssl, certbot]
---

> In this post, I will setup nextcloud from source on ubuntu 22 server, also set up *coturn* to enable video call from different IPs. Before start, these are the requirements:
> - a Server(SVN) with ubuntu 22 installed
> - create a non-root user on the server
> - a domain name that forwarding to server's IP, below I use `nc.example.com` for example, you need to use your own.


# Configure the host name
1. edit `/etc/hostname`, and change the value to `nc.example.com`
```bash
sudo vim /etc/hostname
```
2. edit `/etc/hosts` and add this line `127.0.1.1 nc.example.com` below the localhost.
make it looks like this:
```config
127.0.0.1 localhost
127.0.1.1 nc.example.com
# The following lines are desirable for IPv6 capable hosts
```
> if `127.0.1.1` already exists, change it to `nc.example.com`

# Update the Server and reboot
```bash
sudo apt update
sudo apt upgrade
sudo reboot
```
after rebooting try to ping your domain name:
```bash
ping nc.example.com
```
if ping through, follow the next step.

# Setting Up MariaDB Database
first install MariaDB
```bash
sudo apt install mariadb-server
```
and secure install mysql
```bash 
sudo mysql_secure_installation
```
if this is your first time installing mysql, you dont have a passwd, so when a passwd promt came up just hit `Enter`, and set the passwd in follow steps. you can say `Yes` to all answers.
next open MariaDB Database,
```bash
sudo mariadb
```
and create nextcloud database and a user by executing below sql commands:
```sql
CREATE DATABASE nextcloud;
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nextcloud'@'localhost' IDENTIFIED BY 'YOUR_PASSWD_THAT_YOU_SET_IN_PREVIEWS_STEP';
FLUSH PRIVILEGES;
```
after finish executing these commands, exit MaraiDB by typing `ctrl+d`.

# Installing Apache and PHP
```bash
sudo apt install php php-apcu php-bcmath php-cli php-common php-curl php-gd php-gmp php-imagick php-intl php-mbstring php-mysql php-zip php-xml
```
after installing enable and start apache2:
```bash
sudo systemctl enable apache2
sudo systemctl start apache2
```
after that, verify the apache2 is correctly running by visit you domain `nc.example.com` from your browser, you will see **Apache2 Default Page**, then you can follow the next step, if not make sure previews step are done correctly.

# Download and Install NextCloud files
download the nextcloud zip file by running:
```bash
wget https://download.nextcloud.com/server/releases/latest.zip
```
and then, install `unzip' and unzip the latest.zip file by runnig:
```bash
sudo apt install unzip
unzip latest.zip
```
after unzipping, you will see a nextcloud folder in current directory, and then we cp this folder to `/var/www/` as name of you domain `nc.example.com` by running:
```bash
sudo cp -r nextcloud /var/www/nc.example.com
```
and change the ownership to `www-data` by runnig:
```bash
sudo chown www-data:www-data -R /var/www/nc.example.com
```
> Remenber change all `nc.example.com` to your own domain name!!!!

# Setting up Apache
first disable the default apache page by runnig:
```bash
sudo a2dissite 000-default
```
create and edit our nextcloud server's apache config file by runnig:
```bash
sudo vim /etc/apache2/sites-available/nc.example.com.conf
```
and pase these lines inside it and change the  `nc.example.com` to you own domain.
```config
<VirtualHost *:80>
    DocumentRoot "/var/www/nc.example.com"
    ServerName nc.example.com

    <Directory "/var/www/nc.example.com/">
        Options MultiViews FollowSymlinks
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>

    TransferLog /var/log/apache2/nc.example.com_access.log
    ErrorLog /var/log/apache2/nc.example.com_error.log
</VirtualHost>
```
and then enable it on apache by runnig:
```bash
sudo a2ensite nc.example.com.conf 
```

# Setting up PHP
you may have different version of PHP than mine, so change the php version to your own in following steps. edit the php init file by runnig:
```bash
sudo vim /etc/php/8.1/apache2/php.ini
```
in this file, search and change the arguments to correct value as below, if it is commented, uncomment it.
> - Do not directly add, you must search and edit it !!!!!!
> - For `date.timezone`, look it up and change to your own region's time zone

```config
memory_limit = 512M
upload_max_filesize = 200M
max_execution_time = 360
post_max_size = 200M
date.timezone = Asia/Hong_Kong
opcache.enable=1
opcache.memory_consumption=128
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=10000
opcache.revalidate_freq=1
opcache.save_comments=1
```
after making changes, save and exit. And run the following command:
```bash
sudo a2enmod dir env headers mime rewrite ssl
sudo systemctl restart apache2
```
check apache2 status for verify the changes it correct:
```bash
sudo systemctl status apache2
```
if apache2 running, then go to your browser and visit you domain name, for example `nc.example.com`, if everything is correct you will see nextcloud login page, and then you good to go next step.

# Setting up a Let's Encript certificate via certbot
Install snapd
```bash
sudo apt install snapd
sudo snap install core
sudo snap refresh core
```
install certbot via snap
```bash
sudo snap install --classic certbot
```
maek a soft link
```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```
finally make the certificate
```bash
sudo certbot --apache
```
inter you email and follow the answers and select the domain and finish.

Now revisit you domain name in your browser, your domain name will automatically secured as `https://`.

# Navigating the Nextcloud Setup Wizard
