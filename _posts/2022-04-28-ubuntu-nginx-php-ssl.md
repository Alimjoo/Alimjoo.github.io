---
title: Ubuntu 20.04 Nginx(1.8) PHP(7.4) SSL(https) 修改php-fpm和nginx运行用户
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-04-04 12:10:00 +0800
categories: [Blogging, Tutorial]
tags: [php, ubuntu, nginx, ssl]
---
# 准备工作
<div class="alert alert-primary">已在实例所属的安全组的入方向添加安全组规格并放行22、80、443端口。</div>

- 关闭系统内部防火墙。
```sh
sudo ufw disable
```
# 安装 Nginx
- 运行以下命令，更新Ubuntu系统内的软件包。
```sh
sudo apt-get update
```
- 运行以下命令，安装Nginx。
```sh
sudo apt-get install nginx
```

- 运行以下命令，查看Nginx版本。
```sh
sudo nginx -v
```

# 安装 PHP
- 运行以下命令，安装PHP
```sh
sudo apt-get install php-fpm
```
- 运行以下命令，查看PHP版本。
```sh
sudo php -v
```
返回结果如下所示，查看到PHP版本为7.4.3。同时也表示PHP已成功安装。
```sh
PHP 7.4.3 (cli) (built: Nov 25 2021 23:16:22) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with Zend OPcache v7.4.3, Copyright (c), by Zend Technologies
```
# 配置 Nginx

- 打开Nginx默认的配置文件
```sh
sudo vim /etc/nginx/sites-enabled/default
```
    -  在 `server{}` 内，找到 `index` 开头的配置行，在该行中添加 `index.php` 。
    ```sh
    # Add index.php to the list if you are using PHP
    index index.php index.html index.htm index.nginx-debian.html;
    ```
    - 在 `server{}` 内找到 `location ~ \.php$ {}` ，去除以下配置行的注释符号。
    ```sh
    location ~ \.php$ {
                include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
                fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        }
    ```
    - 保存并退出文件.
- 运行以下命令，重启Nginx服务。
```sh
sudo systemctl restart nginx.service
```

# 配置 PHP
- 运行以下命令，在Nginx网站根目录中，新建phpinfo.php文件。
```sh
sudo vim /var/www/html/phpinfo.php
```
- 按 `i` 进入编辑模式，添加以下配置信息。 phpinfo()函数会展示PHP的所有配置信息。
```sh
<?php 
    echo phpinfo(); 
?>
```
- 保存并退出文件. 运行以下命令，启动PHP.
```sh
sudo systemctl start php7.4-fpm
```

# 测试访问PHP配置信息页面

一切顺利可以通过公网ip访问网站了.

# 配置SSL

- 下载好申请的ssl证书(nginx),放至 `/etc/nginx/ssl`
- 编辑域名配置文件
```sh
vim /etc/nginx/sites-enabled/default
```
- 添加 `443` 端口
```sh
server {
        listen 443 ssl;
        server_name cloud.tencent.com;
        root /var/www/html;
        index index index.php index.html index.htm index.nginx-debian.html;
        #证书文件名称
        ssl_certificate cloud.tencent.com_bundle.crt; 
        #私钥文件名称
        ssl_certificate_key cloud.tencent.com.key; 
        ssl_session_timeout 5m;
        #请按照以下协议配置
        ssl_protocols TLSv1.2 TLSv1.3; 
        #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
        ssl_prefer_server_ciphers on;
        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
```

- 检验编写是否有误
```sh
nginx -t
```
- 重启 `nginx`
```sh
nginx -s reload
```

# HTTP 自动跳转 HTTPS 的安全配置

编辑域名配置文件
```sh
vim /etc/nginx/sites-enabled/default
```
再添加一个 `server`:

```sh
server {
        listen 443 ssl;
        server_name cloud.tencent.com;
        root /var/www/html;
        index index index.php index.html index.htm index.nginx-debian.html;
        #证书文件名称
        ssl_certificate cloud.tencent.com_bundle.crt; 
        #私钥文件名称
        ssl_certificate_key cloud.tencent.com.key; 
        ssl_session_timeout 5m;
        #请按照以下协议配置
        ssl_protocols TLSv1.2 TLSv1.3; 
        #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
        ssl_prefer_server_ciphers on;
        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
server {
    listen 80;
    #填写绑定证书的域名
    server_name cloud.tencent.com; 
    #把http的域名请求转成https
    return 301 https://$host$request_uri; 
}
```
- 检验编写是否有误
```sh
nginx -t
```
- 重启 `nginx`
```sh
nginx -s reload
```


# 修改php-fpm和nginx运行用户

nginx和php-fpm是www-data用户运行, 想要修改为 www 用户运行
## 修改Nginx
```sh
cd /etc/nginx
sudo vim nginx.conf
```
-  头部是这样
```sh
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;
```

-  修改为
```sh
user www;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;
```

-  重启nginx
```sh
sudo service nginx restart
```

## 修改php-fpm
```sh
cd /etc/php/7.4/fpm/pool.d/
sudo vi www.conf
```
-  找到 
```sh
www-data
```

- 都改为 `www` 应该有4个地方
```sh
www
```
- 修改一下文件的权限
```sh
cd /run/php/
ls -al
```
-  这个目录下面有两个文件
-  php7.4-fpm.pid和php7.4-fpm.sock
-  修改这两个文件的权限
```sh
sudo chown www:www php7.4-fpm.pid
sudo chown www:www php7.4-fpm.sock
```

## 重启php-fpm
```sh
sudo service php7.4-fpm restart
```
