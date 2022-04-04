---
title: MacBook 安装 windows11 (使用 Boot Camp Assistant)
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-04-04 12:10:00 +0800
categories: [Blogging, Tutorial]
tags: [macbook, windows, windows11]
---

<p class="alert alert-success">
这是我目前找到的最简单并最安全的方式. 苹果 Boot Camp Assistant 还没有正式支持Windows11, 但这个方法可以通过 Boot Camp Assistant 安装 Windows11, 相对其他先安装 Windows10 再升级到 Windows11 方便且干净.
</p>

# 准备事项

- 要保证好你的 MacBook 能上网.
- 使用以下命令安装 [HomeBrew](https://brew.sh):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 使用 brew 命令安装 [wimlib](https://formulae.brew.sh/formula/wimlib#default):

```sh
brew install wimlib
```

- 下载好 window10 和 window11 的镜像文件.

# 步骤

- 首先在桌面上创建一个叫 `win11` 的目录.
- 然后双击打开 Windows10 的镜像文件, 把里面的全部文件复制到刚创建的 `win11` 目录里.
- 复制完以后打开 `win11/sources/` 目录, 把里面的 `install.wim` 文件删除.
- 然后双击打开 window11 的镜像文件, 把 `sources` 目录里的 `install.wim` 文件提取到<em style="color:red;">桌面上!!!<em>.
- 打开 Terminal , 运行以下的命令把 `install.wim` 文件分成两个 `install.swm` 文件:

```sh
cd ~/Desktop
wimlib-imagex split install.wim install.swm 3500
```

- 如果命令顺利进行, 会在桌面上生成两个文件, 分别叫: `install.swm` 和 `install2.swm`. 把这两个文件移动到我们创建的 `win11/sources/` 目录底下.
- 然后打开 `Disk Utility` , 按一下的选项 `文件 -> 新建镜像 -> 文件到镜像` 选择 `win11`, 并且, 把镜像格式调整到 `DVD/CD master`. 开始创建.
- 成功创建好以后, 桌面上会生成一个叫 `win11.cdr` 的文件. 我们使用以下的命令, 把这个文件转换到 `iso` 格式:

```sh
hdiutil makehybrid -iso -joliet -o win11.iso win11.cdr
```

- 完成以后, 桌面上会生成一个 `win11.iso` 的镜像文件, 这就是我们所需要的. 其他的东西可以删除了.

# 安装

刚创建的 `win11.iso` 文件跟其他的镜像文件没有设么区别, 我们只是为了 MacBook 对 Windows11 局限性而创建了这么个文件, 这个镜像文件的用法和其他 windows 的镜像文件用法一样, 你可以做一个启动盘再安装, 或直接使用 MacBook 自带的 Boot Camp Assistant 安装. 建议使用 Boot Camp Assistant , 它把所需要的驱动都会给你装上.
