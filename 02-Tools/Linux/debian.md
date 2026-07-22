---
created: 2026-07-23
updated: 2026-07-23
---
# Debian / Ubuntu 装机脚本

## 基础依赖

```shell
sudo apt update
sudo apt install -y zsh vim git tig tmux fzf ncdu htop proxychains-ng

# 搜索工具：rg 首选，ag/ack 备选
sudo apt install -y ripgrep silversearcher-ag ack
```

## oh-my-zsh

```shell
# 安装
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 下载 powerlevel10k 主题
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

# 下载插件
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
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

## tmux 配置

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

## jenv

```shell
git clone https://github.com/jenv/jenv.git ~/.jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

## zed（主力编辑器）

```shell
curl -f https://zed.dev/install.sh | sh
```

## ghostty（终端）

```shell
# 通过官方二进制包安装，参见 https://ghostty.org/docs/install/binary
# 以 Ubuntu 24.04 为例：
source /etc/os-release
curl -fsSL "https://github.com/ghostty-org/ghostty/releases/latest/download/ghostty_${VERSION_ID}_amd64.deb" -o /tmp/ghostty.deb
sudo dpkg -i /tmp/ghostty.deb
```

换主题：

```shell
ghostty +list-themes
```

## vscodium

```shell
# 通过 snap
snap install codium --classic

# 或通过 GPG 源安装：
wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | gpg --dearmor | sudo dd of=/usr/share/keyrings/vscodium-archive-keyring.gpg
echo 'deb [ signed-by=/usr/share/keyrings/vscodium-archive-keyring.gpg ] https://download.vscodium.com/debs vscodium main' | sudo tee /etc/apt/sources.list.d/vscodium.list
sudo apt update
sudo apt install -y codium
```

## 字体

### Sarasa Mono（主力编程字体）

```shell
# 从 GitHub releases 下载
wget https://github.com/be5invis/Sarasa-Gothic/releases/latest/download/Sarasa-TTF.tar.gz
sudo mkdir -p /usr/share/fonts/truetype/sarasa
sudo tar -xzf Sarasa-TTF.tar.gz -C /usr/share/fonts/truetype/sarasa
sudo fc-cache -fv
```

### Jetbrains Mono

```shell
# 从 Jetbrains 官网下载
# https://www.jetbrains.com/lp/mono/

# 或者通过 nerd font patched 版本
wget https://github.com/ryanoasis/nerd-fonts/releases/latest/download/JetBrainsMono.tar.xz
sudo mkdir -p /usr/share/fonts/truetype/jetbrains-mono
sudo tar -xf JetBrainsMono.tar.xz -C /usr/share/fonts/truetype/jetbrains-mono
sudo fc-cache -fv
```

### Cascadia Mono（搭配 Windows Terminal）

```shell
# 下载 Nerd Font 变体
wget https://github.com/ryanoasis/nerd-fonts/releases/latest/download/CascadiaCode.tar.xz
sudo mkdir -p /usr/share/fonts/truetype/cascadia-code
sudo tar -xf CascadiaCode.tar.xz -C /usr/share/fonts/truetype/cascadia-code
sudo fc-cache -fv
```

### Noto Sans CJK

```shell
sudo apt install -y fonts-noto-cjk
```

## pi coding agent

```shell
npm install -g @earendil-works/pi-coding-agent

# 启动
pi
```

## codex

```shell
npm install -g @anthropic/codex

# 启动（yolo 模式直接一把梭）
codex
```

## diff-so-fancy

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
