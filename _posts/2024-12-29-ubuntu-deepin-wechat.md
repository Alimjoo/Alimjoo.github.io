---
title: Ubuntu install wechat (Ubuntu 安装微信)
author:
  name: Piyazon
  link: https://piyazon.top
date: 2024-12-29 11:10:00 +0800
categories: [Blogging, Tutorial]
tags: [ubuntu, wechat, deepin]
---

# deepin-wine

> deepin-wine环境与应用在Debian/Ubuntu上的移植仓库
>
> 使用deepin官方原版软件包
>
> 安装QQ/微信只需要两条命令


## 快速开始

1. 添加仓库

   首次使用时，你需要运行如下一条命令将移植仓库添加到系统中。

   ```sh
   wget -O- https://deepin-wine.i-m.dev/setup.sh | sh
   ```

2. 应用安装

   自此以后，你可以像对待普通的软件包一样，使用`apt-get`系列命令进行各种应用安装、更新和卸载清理了。

   比如安装微信只需要运行下面的命令，

   ```sh
   sudo apt-get install com.qq.weixin.deepin
   ```

   将`com.qq.weixin.deepin`替换为下列包名，可以继续安装其他应用：

   |   应用   |            包名            |
   | :------: | :------------------------: |
   |   微信   |    com.qq.weixin.deepin    |
   |    QQ    |      com.qq.im.deepin      |
   |   TIM    |    com.qq.office.deepin    |
   |   钉钉   |    com.dingtalk.deepin     |
   | 阿里旺旺 | com.taobao.wangwang.deepin |
   |  QQ音乐  |    com.qq.music.deepin     |
   |  QQ视频  |    com.qq.video.deepin     |
   |  爱奇艺  |      com.iqiyi.deepin      |

   **完整列表参见[https://deepin-wine.i-m.dev](https://deepin-wine.i-m.dev)。**





