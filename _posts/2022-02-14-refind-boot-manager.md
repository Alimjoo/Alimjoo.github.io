---
title: rEFInd Boot Manager Installation and Custumization (macOS)
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-02-14 13:32:00 +0800
categories: [Blogging, Tutorial]
tags: [rEFInd, macOS]
image:
    src: /jekyll/posts/refind.png
    alt: rEFInd Boot Manager
---

# Installaion
1. Download the [binary zip file](https://sourceforge.net/projects/refind/files/0.13.2/refind-bin-0.13.2.zip/download) from the link, and upzip the file, store it in a USB.

2. 
- Restart you computer with holding `Command + R` and inter recovery mode. From there open Terminal and type command `csrutil disable` to disable boot protection.
- Then inter rEFInd folder that you upziped previews step with `cd /Volume/xxx`, run the command `./refind-install`, wait to finish.

3. Restart your computer with typing on Terminal `restart`. You will see rEFInd booting screen if you succeed.
![refind](/jekyll/posts/refind-1.png) 

<p class="alert alert-primary">
You can delete unwanted Boot options using `delete` key or `-` key.
</p>

# Custumization (Themeing)

Download a theme from Github. I will download [this](https://github.com/evanpurkhiser/rEFInd-minimal).
## Usage
1. Mount Boot partiton `mkdir mnt; sudo mount -t msdos /dev/disk0s1 mnt`. Locate your refind EFI directory. This is commonly `mnt/EFI/refind`.

2. Create a folder called `themes` inside it, if it doesn't already exist

3. Clone this repository into the `themes` directory.

4. To enable the theme add `include themes/rEFInd-minimal/theme.conf` at the end of
  `refind.conf`.
