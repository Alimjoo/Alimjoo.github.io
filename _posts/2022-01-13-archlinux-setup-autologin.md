---
title: Archliunux setup auto login (with lightdm)
author:
    name: Piyazon
    link: https://piyazon.top
date: 2022-01-07 12:10:00 +0800
categories: [Blogging, Tutorial]
tags: [archlinux, linux]
---

## Create a group called `autologin`

```sh
sudo groupadd -r autologin
```

## Add the user that you want to autologin to that group

```sh
sudo gpasswd -a username autologin
```
<p class="alert alert-primary">
Replace the <code>username</code> with you username.
</p>

## add or uncomment line <code> autologin-user = username </code> to `/etc/lightdm/lightdm.conf`
```sh
sudo echo "autologin-user=username" >> /etc/lightdm/lightdm.conf
```

<p class="alert alert-primary">
Replace the <code>username</code> with you username.
</p>

Restart you system, hopefully it will work.
