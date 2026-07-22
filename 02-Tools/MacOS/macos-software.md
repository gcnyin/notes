---
created: 2026-03-18
updated: 2026-07-23
---
# macOS 装机脚本

## 通用软件

- Alfred5
- Rectangle
- Chrome
- Pearcleaner
- Xnip
- KeepingYouAwake

## 开发工具

- zed（主力编辑器）
- vscodium（vscode 替代）
- iTerm2

## AI 工具

- pi coding agent. `npm install -g @earendil-works/pi-coding-agent`
- codex. `npm install -g @anthropic/codex`

## 命令行工具

### homebrew

```shell
# 官方
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 镜像
git clone --depth=1 http://mirrors.tuna.tsinghua.edu.cn/git/homebrew/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install
```

Homebrew Bottles 镜像加速：

```shell
echo 'export HOMEBREW_API_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"' >> ~/.zprofile
echo 'export HOMEBREW_BOTTLE_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"' >> ~/.zprofile
export HOMEBREW_API_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
```

### 基础依赖

```shell
brew install zsh git neovim htop wget tree ripgrep btop fzf tmux tig diff-so-fancy ncdu proxychains-ng

# 搜索工具：rg 首选，ag/ack 备选
brew install the_silver_searcher ack
```

### oh-my-zsh

```shell
# 安装
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 下载 powerlevel10k 主题
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

# 下载插件
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

编辑 `~/.zshrc`：

```shell
ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(... zsh-autosuggestions zsh-syntax-highlighting z)
```

应用配置：

```shell
source ~/.zshrc
```

### tmux 配置

```shell
cd ~
git clone https://github.com/gpakosz/.tmux.git
ln -s -f .tmux/.tmux.conf
cp .tmux/.tmux.conf.local .
```

tmux-resurrect - 持久化 session：

```shell
git clone https://github.com/tmux-plugins/tmux-resurrect ~/.tmux-resurrect
```

编辑 `~/.tmux.conf`，添加：

```
run-shell ~/.tmux-resurrect/resurrect.tmux
```

设置默认 shell，在 `~/.tmux.conf` 或 `/etc/tmux.conf` 中：

```
set-option -g default-shell /usr/bin/zsh
```

### jenv

```shell
git clone https://github.com/jenv/jenv.git ~/.jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

### zed（主力编辑器）

```shell
# 通过官方脚本安装
curl -f https://zed.dev/install.sh | sh

# 或通过 homebrew
brew install --cask zed
```

### ghostty（终端）

```shell
brew install --cask ghostty
```

换主题：

```shell
ghostty +list-themes
```

### vscodium

```shell
brew install --cask vscodium
```

### 字体

#### Sarasa Mono（主力编程字体）

```shell
brew install --cask font-sarasa-gothic
```

#### Jetbrains Mono

```shell
brew install --cask font-jetbrains-mono
```

#### Cascadia Mono（搭配 Windows Terminal）

```shell
brew install --cask font-cascadia-code

# 也可以下载 Nerd Font 变体：CaskaydiaCove Nerd Font
# https://www.nerdfonts.com/font-downloads
```

#### Noto Sans CJK

```shell
brew install --cask font-noto-sans-cjk
```

### pi coding agent

```shell
npm install -g @earendil-works/pi-coding-agent

# 启动
pi
```

### codex

```shell
npm install -g @anthropic/codex

# 启动（yolo 模式直接一把梭）
codex
```

### diff-so-fancy

```shell
npm install -g diff-so-fancy

git config --global core.pager "diff-so-fancy | less --tabs=4 -RF"
git config --global interactive.diffFilter "diff-so-fancy --patch"
```

## neovim 配置

> 主力使用 lazyvim，仅用于编辑单个文件（如 .zshrc）。项目级别使用 zed。

https://www.lazyvim.org/

先备份：

```shell
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

Clone the starter：

```shell
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

Remove the .git folder：

```shell
rm -rf ~/.config/nvim/.git
```

启动 neovim，会自动下载插件（最好打开网络代理）：

```shell
nvim
```
