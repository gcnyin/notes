---
created: 2026-01-16
updated: 2026-07-23
---
# unix-like 装机脚本

> 各平台独立文档：
> - [Debian / Ubuntu](./debian.md)
> - [Arch / Manjaro](./archlinux.md)
> - [Fedora](./fedora.md)
> - [macOS](../MacOS/macos-software.md)

---

## 通用脚本

以下为不依赖特定包管理器的通用配置。

## oh-my-zsh

```shell
# 安装
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 下载powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

编辑 `~/.zshrc`

```shell
ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(... zsh-autosuggestions zsh-syntax-highlighting z)
```

重启zsh

```shell
source ~/.zshrc
```

## 主要依赖

依赖列表

```
zsh vim git tig tmux fzf ncdu htop

# 搜索工具：rg 首选，ag/ack 备选
ripgrep(rg) silversearcher-ag(ag) ack

proxychains-ng
```

```shell
# Debian/Ubuntu
sudo apt install zsh vim git tig tmux fzf ncdu htop ripgrep silversearcher-ag ack proxychains-ng

# Arch/Manjaro
sudo pacman -S zsh vim git tig tmux fzf ncdu htop ripgrep the_silver_searcher ack proxychains-ng

# Fedora
sudo dnf install zsh vim git tig tmux fzf ncdu htop ripgrep the_silver_searcher ack proxychains-ng

# macOS (Homebrew)
brew install zsh vim git tig tmux fzf ncdu htop ripgrep the_silver_searcher ack proxychains-ng
```

## tmux配置

```shell
cd ~
git clone https://github.com/gpakosz/.tmux.git
ln -s -f .tmux/.tmux.conf
cp .tmux/.tmux.conf.local .
```

tmux-resurrect: 持久化session

```shell
git clone https://github.com/tmux-plugins/tmux-resurrect ~/.tmux-resurrect
```

编辑`.tmux.conf`，添加一行

```
run-shell ~/.tmux-resurrect/resurrect.tmux
```

设置默认shell，在 `~/.tmux.conf` 或 `/etc/tmux.conf` 中

```
set-option -g default-shell /usr/bin/zsh
```

## jenv

```shell
# jenv
git clone https://github.com/jenv/jenv.git ~/.jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

## zed（主力编辑器）

```shell
# macOS / Linux
curl -f https://zed.dev/install.sh | sh

# Arch
sudo pacman -S zed

# 通过包管理器安装后的版本可能更新不及时，推荐用官方脚本
```

## ghostty（终端）

```shell
# Arch/Manjaro
sudo pacman -S ghostty

# macOS
brew install --cask ghostty

# Ubuntu/Debian - 通过官方源
# 参见 https://ghostty.org/docs/install/binary
```

换主题：

```shell
ghostty +list-themes
```

## vscodium

```shell
# Arch/Manjaro
sudo pacman -S vscodium-bin

# macOS
brew install --cask vscodium

# Debian/Ubuntu - 通过 snap 或直接下载
snap install codium --classic
```

## 字体

### Sarasa Mono（主力编程字体）

```shell
# Arch/Manjaro
sudo pacman -S ttf-sarasa-gothic

# macOS
brew install --cask font-sarasa-gothic

# Debian/Ubuntu - 从 GitHub releases 下载
# https://github.com/be5invis/Sarasa-Gothic/releases
```

### Jetbrains Mono

```shell
# Arch/Manjaro
sudo pacman -S ttf-jetbrains-mono

# macOS
brew install --cask font-jetbrains-mono

# Debian/Ubuntu
# https://www.jetbrains.com/lp/mono/
```

### Cascadia Mono（搭配 Windows Terminal）

```shell
# Arch (AUR)
yay -S ttf-cascadia-code

# macOS
brew install --cask font-cascadia-code

# 也可以下载 Nerd Font 变体：CaskaydiaCove Nerd Font
# https://www.nerdfonts.com/font-downloads
```

### Noto Sans CJK

```shell
# Arch/Manjaro
sudo pacman -S noto-fonts-cjk

# Debian/Ubuntu
sudo apt install fonts-noto-cjk

# macOS - 通过 homebrew 或直接下载
# https://github.com/googlefonts/noto-cjk
```

## pi coding agent

```shell
# 通过 npm 全局安装
npm install -g @earendil-works/pi-coding-agent

# 启动
pi
```

## codex

```shell
# 通过 npm 全局安装
npm install -g @anthropic/codex

# 启动（yolo 模式直接一把梭）
codex
```

## diff-so-fancy

```shell
# install via npm
npm i -g diff-so-fancy

git config --global core.pager "diff-so-fancy | less --tabs=4 -RF"
git config --global interactive.diffFilter "diff-so-fancy --patch"
```

## neovim 配置

> 主力使用 lazyvim，仅用于编辑单个文件（如 .zshrc）。项目级别使用 zed。

https://www.lazyvim.org/

先备份（如果卸载也就是把这些文件夹回滚）

```shell
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

Clone the starter

```shell
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

Remove the .git folder, so you can add it to your own repo later

```shell
rm -rf ~/.config/nvim/.git
```

然后就可以开始了，会下载各类插件，最好打开网络代理

```shell
nvim
```
