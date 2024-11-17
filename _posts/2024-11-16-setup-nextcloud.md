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
2. edit `/etc/hosts` 
```bash
sudo vim /etc/hosts
```
and add this line `127.0.1.1 nc.example.com` below the localhost.
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
sudo systemctl enable mariadb
sudo systemctl start mariadb
sudo systemctl status mariadb
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
sudo systemctl status apache2
```
after that, verify the apache2 is correctly running by visit you domain `nc.example.com` from your browser, you will see **Apache2 Default Page**, then you can follow the next step, if not make sure previews step are done correctly.

# Download and Install NextCloud files
download the nextcloud zip file by running:
```bash
wget https://download.nextcloud.com/server/releases/latest.zip
```
and then, install `unzip` and unzip the latest.zip file by runnig:
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
1. Inter those values and hit Install.
![nextcloud navigate](/nextcloud/nextcloud_navigate.png)

2. Choose Recommended apps as you like and hit Install
![Recommended apps](/nextcloud/recommended_apps.png)

# Resoving Nextcloud Warnings & Errors
Nevigate to the `User Icon` -> `Administration settings`:
![Administration settings](/nextcloud/admin_settings.png)

You will some error & warnings, No we trying to fix them as much as possible
![Security & setup warnings](/nextcloud/security_setup_warnings.png)

### Fix: Some headers are not set correctly on your instance - The *Strict-Transport-Security* HTTP header is not set (should be at least *15552000* seconds). For enhanced security, it is recommended to enable HSTS.`
edit `/etc/apache2/sites-available/nc.example.com-le-ssl.conf
```bash
sudo vim /etc/apache2/sites-available/nc.example.com-le-ssl.conf
```
add these lines below `ServerName`:

```config
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains"
</IfModule>
```
it will looks like this:
```config
<IfModule mod_ssl.c>
<VirtualHost *:443>
    DocumentRoot "/var/www/nc.example.com"
    ServerName nc.example.com

    <IfModule mod_headers.c>
      Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains"
    </IfModule>

    <Directory "/var/www/nc.example.com/">
        Options MultiViews FollowSymlinks
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>

    TransferLog /var/log/apache2/nc.example.com_access.log
    ErrorLog /var/log/apache2/nc.example.com_error.log

SSLCertificateFile /etc/letsencrypt/live/nc.example.com/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/nc.example.com/privkey.pem
Include /etc/letsencrypt/options-ssl-apache.conf
</VirtualHost>
</IfModule>
```
save & exit and restart apache2:
```bash
sudo systemctl restart apache2
sudo systemctl status apache2
```

### Fix: Detected some missing optional indices. Occasionally new indices are added (by Nextcloud or installed applications) to improve database performance. Adding indices can sometimes take awhile and temporarily hurt performance so this is not done automatically during upgrades. Once the indices are added, queries to those tables should be faster. Use the command *occ db:add-missing-indices* to add them. Missing indices: "mail_messages_strucanalyz_idx" in table "mail_messages", "mail_class_creat_idx" in table "mail_classifiers", "mail_acc_prov_idx" in table "mail_accounts", "mail_alias_accid_idx" in table "mail_aliases", "systag_by_objectid" in table "systemtag_object_mapping", "mail_messages_mb_id_uid_uidx" in table "mail_messages", "mail_smime_certs_uid_email_idx" in table "mail_smime_certificates", "mail_trusted_senders_idx" in table "mail_trusted_senders", "mail_coll_idx" in table "mail_coll_addresses".

edit `/etc/php/8.1/mods-available/apcu.ini` to enable apc cli:
```bash
sudo vim /etc/php/8.1/mods-available/apcu.ini
```
add this line to the end of file:
```config
apc.enable_cli=1
```
it will somewhat looks like this:
```config
extension=apcu.so
apc.enable_cli=1
```

make `occ` executable, and fix the issue by rinnig:
```bash
sudo chmod +x /var/www/nc.example.com/occ
sudo -u www-data /var/www/nc.example.com/occ db:add-missing-indices
sudo systemctl restart apache2
sudo systemctl status apache2
```

### Fix:One or more mimetype migrations are available. Occasionally new mimetypes are added to better handle certain file types. Migrating the mimetypes take a long time on larger instances so this is not done automatically during upgrades. Use the command `occ maintenance:repair --include-expensive` to perform the migrations.
run the following command to fix it:
```bash
sudo -u www-data /var/www/nc.example.com/occ maintenance:repair --include-expensive
```

### Fix: You are currently running PHP 8.1.2-1ubuntu2.19. PHP 8.1 is now deprecated in Nextcloud 30. Nextcloud 31 may require at least PHP 8.2. Please upgrade to one of the officially supported PHP versions provided by the PHP Group as soon as possible.

I will not gonna fix this, if you want to fix, upgrade the php version to 8.2 or higher and reconfigure the previews steps.

### Fix: Server has no maintenance window start time configured. This means resource intensive daily background jobs will also be executed during your main usage time. We recommend to set it to a time of low usage, so users are less impacted by the load caused from these heavy tasks. 

No solution for now.

# Install `coturn` and enable video calling from different IPs
1. install `coturn`:
```bash
sudo apt install coturn
sudo systemctl enable coturn
sudo systemctl start coturn
sudo systemctl status coturn
```
2. enable coturn by editing `/etc/default/coturn`
```bash 
sudo vim /etc/default/coturn
```
uncomment or add `TURNSERVER_ENABLED=1`

3. Create Auth-Secret for static-auth-secret by runnig:
```bash
openssl rand -hex 32
```

4. Back up `/etc/turnserver.conf` and edit new one as follow:
```bash
sudo mv /etc/turnserver.conf /etc/turnserver.conf.original
sudo vim /etc/turnserver.conf
```
add following lines to it, replace `YOUR_AUTH_SECRET` with your static-auth-secret that created in previews step, replace `nc.example.com` with your own domain:
```config
listening-port=3478
fingerprint
use-auth-secret
static-auth-secret=YOUR_AUTH_SECRET
realm=nc.example.com
total-quota=100
bps-capacity=0
stale-nonce=600
no-multicast-peers
```

5. now we restart `coturn` and check it's status to make sure everything is working:
```bash
sudo systemctl restart coturn 
sudo systemctl status coturn 
```

6. enable `ufw` firewall and open `http`, `https`, `ssh`, `3478` ports:
```bash
sudo ufw enable
sudo ufw allow http
sudo ufw allow https
sudo ufw allow ssh
sudo ufw allow 3478
sudo ufw status
```
restart apache and coturn again by runnig:
```bash
sudo systemctl restart coturn
sudo systemctl restart apache2
```

7. Nevigate to you brwoser window, `NextCloud` -> `User Icon` -> `Administration settings` -> `Talk`, add new TURN server
![TURN server](/nextcloud/tune_server.png)
fill these parts and you will see success icon on right side like this:
![TURN server success](/nextcloud/tune_server_success.png)
That is it, all set and done!