---
title: Dual Booting Windows and Arch Linux on MBR/BIOS
author:
    name: Piyazon
    link: https://piyazon.top
date: 2022-01-07 12:10:00 +0800
categories: [Blogging, Tutorial]
tags: [archlinux, linux]
---


## Keymap

list keymap using:
```sh
localectl list-keymaps
```
and set key using 
```sh
loadkeys us
```

## internet

- WiFi-authenticate to the wireless network using [iwctl](https://wiki.archlinux.org/title/Iwd#iwctl)
- time: 
```sh
timedatectl set-ntp true
```

## Mirrors

We should have the fastest mirror.

- Synchronizing packages: 
```sh
pacman -Syyy
pacman -S reflector
```
- I am in China, so:
```sh
reflector -c China -a 6 --sort rate --save /etc/pacman.d/mirrorlist
```
- Once again
```sh
pacman -Syyy
```

## Partitioning

`lsblk` to see the partitions on drive

Use `cfdisk` to partition the disk you want, my case is <code>/dev/sda</code> , so using the command 
```sh
cfdisk /dev/sda
```
We need a *swap* partition and a *root* partition.

<p class="alert alert-info">
the swap partition should be two times of the computer memory. The remaining is root partition.
</p>


- swap : Primary partition; Type is `Linux swap / Soaris` or number is 82;
- root : Primary partition; Type is `Linux` or number is 83.

and then write the changes and quit.
type again `lsblk` to see the disk partitions.

## Formatting

- swap 
```sh
mkswap /dev/sda3
swapon /dev/sda3
```

- root
```sh
mkfs.ext4 /dev/sda4
```

## Mounting
```sh
mount /dev/sda4 /mnt
```
And then mount the windows partition.
```sh
mkdir /mnt/windows
mount /dev/sda2 /mnt/windows
```

## Base Install
Install essential packages:
```sh
pacstrap /mnt base linux linux-firmware vim intel-ucode
```

## Fstab
generate the file system table:
```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## Chroot
Change root into the new system:
```sh
arch-chroot /mnt
```

## Locales

Timezones:
```sh
timedatectl list-timezones
timedatectl list-timezones | grep Shanghai
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
hwclock --systohc
```

Edit `locale.gen` file.
```sh
vim /etc/locale.gen
```
uncomment the langage you want to use. My case is `en_US.UTF-8 UTF-8`.

Then generate the locale, and edit locale.conf, and vconsole.conf
```sh
locale-gen
echo "LANG=en_US.UTF-8" >> /etc/locale.conf
echo "KEYMAP=us" >> /etc/vconsole.conf
```

## Hostname

```sh
vim /etc/hostname
```
set the nameof you computer(hostname)

Then 
```sh
vim /etc/hosts
```
put these code to that file:
```
127.0.0.1       localhost
::1             localhost
127.0.1.1       piyazon.localdomain     piyazon
```
save and exit.

## Password
gie a passwd to root user:
```sh
passwd
```

## Grub
```sh
pacman -S grub ntfs-3g networkmanager network-manager-applet wireless_tools wpa_supplicant os-prober mtools dosfstools base-devel linux-headers bluez bluez-utils pulseaudio-bluetooth cups reflector xdg-utils xdg-user-dirs
```
istalling grub:
```sh
grub-install --ratget=i386-pc /dev/sda
```
generate grub configuration file:
<p class="alert alert-primary">
before preceed, make sure you uncomment the line GRUB_DISABLE_OS_PROBER=false inside <code>/etc/default/grub</code> 
</p>

```sh
grub-mkconfig -o /boot/grub/grub.cfg
```

## Enable Services
```sh
systemctl enable NetworkManager
systemctl enable bluetooth
systemctl enable cups
```

## New user
```sh
useradd -mG wheel pi
passwd pi
EDITOR=vim visudo
```

uncomment the line `%wheel ALL=(ALL) ALL`, save and exit.

## Reboot

exit the installation,
```sh
exit
umount -a
reboot
```

## Install iwd
```sh
pacman -S iwd
systemctl enable iwd.service
systemctl start iwd.service
systemctl enable systemd-resolved.service
systemctl start systemd-resolved.service
```
edit a file:
```sh
vim /etc/iwd/main.conf
```
and put this in here.
```sh
[General]
EnableNetworkConfiguration=true

[Network]
NameResolvingService=systemd
```

## Internet

After reboot, connect the internet using `nmtui` command(is you want to use WiFi).

## Graphics Driver
```sh
sudo pacman -S  xf86-video-intel
```

## Display Server
```sh
sudo pacman -S xorg
```


## Display Manager

```sh
sudo pacman -S lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm
```

## Desktop

```sh
sudo pacman -S xfce4 xfce4-goodies chromium networkmanager-openvpn 
```

## Yay

```sh
pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

# Done

Reboot the system and it will enter xfce4 Desktop automatically.