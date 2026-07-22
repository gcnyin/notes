---
created: 2026-03-15
updated: 2026-07-23
---
# Fedora 装机脚本

## 使用最快的镜像源

编辑 `/etc/dnf/dnf.conf`：

```
[main]
fastestmirror=true
```

更新系统：

```shell
sudo dnf update
```

## 基础依赖

```shell
sudo dnf install -y zsh vim git tig tmux fzf ncdu htop proxychains-ng

# 搜索工具：rg 首选，ag/ack 备选
sudo dnf install -y ripgrep the_silver_searcher ack
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
# 通过第三方 COPR 源
sudo dnf copr enable pgdev/ghostty
sudo dnf install ghostty

# 或从 GitHub releases 下载 rpm
# https://github.com/ghostty-org/ghostty/releases
```

换主题：

```shell
ghostty +list-themes
```

## vscodium

```shell
# 通过 rpm 源
sudo rpmkeys --import https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/-/raw/master/pub.gpg
printf "[gitlab.com_paulcarroty_vscodium_repo]\nname=download.vscodium.com\nbaseurl=https://download.vscodium.com/rpms/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/-/raw/master/pub.gpg\nmetadata_expire=1h" | sudo tee -a /etc/yum.repos.d/vscodium.repo
sudo dnf install -y codium
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
sudo dnf install -y jetbrains-mono-fonts-all
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
sudo dnf install -y google-noto-cjk-fonts
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
