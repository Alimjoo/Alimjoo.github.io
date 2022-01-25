---
title: Change Microsoft Office language on macOS
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-01-25 13:32:00 +0800
categories: [Blogging, Tutorial]
tags: [office, macOS]
---

![office english](/jekyll/posts/office/office-en.png)

We can do this by using terminal:

```bash
defaults write com.microsoft.Excel AppleLanguages '("zh-CN")'
defaults write com.microsoft.Word AppleLanguages '("zh-CN")'
defaults write com.microsoft.Powerpoint AppleLanguages '("zh-CN")'
```

<p class="alert alert-primary">
Change <code>zh-CN</code> to your Target language。
</p>

![office Chinese](/jekyll/posts/office/office-cn.png)