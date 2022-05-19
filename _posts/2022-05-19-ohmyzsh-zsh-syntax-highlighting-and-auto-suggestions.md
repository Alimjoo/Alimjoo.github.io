---
title: Customize Oh My Zsh with Syntax Highlighting and Auto-Suggestions
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-05-19 11:24:00 +0800
categories: [Blogging, Tutorial]
tags: [ohmyzsh, zsh]
---

> As a developer, we spend a lot of time working on the terminal and having personalized shell makes the working environment perfect, decreases frustration and also, increases productivity.

In this blog, we will discuss how to quickly install plugins `Auto-Suggestions` and `Syntax Highlighting` in the `oh-my-zsh` theme.

# Install Oh-My-Zsh using Curl:
```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Let’s take a look at how to install plugins, and configure Zsh:

# Install zsh-autosuggestions by running:
```sh
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

# Install zsh-syntax-highlighting by running:
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

Now, open .zshrc file with your favourite editor:

```sh
vim ~/.zshrc
```

And simply add `zsh-autosuggestions` & `zsh-syntax-highlighting` to plugins() section, it will do the magic for you:

```sh
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

And then source the `.zshrc` file using:
```sh
source ~/.zshrc
```