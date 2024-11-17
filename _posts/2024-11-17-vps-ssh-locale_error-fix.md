---
title: Fix Locale warning when ssh in to server
author:
  name: Piyazon
  link: https://piyazon.top
date: 2024-11-17 11:10:00 +0800
categories: [Blogging, Tutorial]
tags: [ubuntu, vps, locale, en_US.UTF-8]
---


When we ssh in to the VPS server or other linux system, some times our local machine language do not match target server language, and we get warning some thing like below, it is very common warning that very bothering. Here is how to fix it.

```bash
locale: Cannot set LC_ALL to default locale: No such file or directory
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
	LANGUAGE = (unset),
	LC_ALL = (unset),
	LC_TIME = "es_ES.UTF-8",
	LC_MONETARY = "es_ES.UTF-8",
	LC_ADDRESS = "es_ES.UTF-8",
	LC_TELEPHONE = "es_ES.UTF-8",
	LC_NAME = "es_ES.UTF-8",
	LC_MEASUREMENT = "es_ES.UTF-8",
	LC_IDENTIFICATION = "es_ES.UTF-8",
	LC_NUMERIC = "es_ES.UTF-8",
	LC_PAPER = "es_ES.UTF-8",
	LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to a fallback locale ("en_US.UTF-8").
```

1. First run following command to regenerate locale on server:
```bash
sudo locale-gen en_US.UTF-8
sudo update-locale
```

2. Set the Default Locale
```bash
sudo update-locale LANG=en_US.UTF-8 LANGUAGE=en_US.UTF-8 LC_ALL=en_US.UTF-8
```

3. Also configure the `/etc/default/locale`
```bash
sudo vim /etc/default/locale
```
add these lines, if there already have `xxx.UTF-8` change it all to `en_US.UTF-8`
```bash
LANG=en_US.UTF-8
LANGUAGE=en_US.UTF-8
LC_ALL=en_US.UTF-8
```

4. Finally reboot the system
```bash
sudo reboot
```

Hopefully after reboot that ugly warning will disapear.



