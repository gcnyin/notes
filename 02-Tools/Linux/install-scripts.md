---
created: 2026-01-16
updated: 2026-01-16
---
# unix-like装机脚本

## 主要依赖

依赖列表

```
zsh vim git tig tmux fzf ncdu htop

silversearcher-ag(ag)

proxychains-ng
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

## diff-so-fancy

```shell
# install via apt
sudo add-apt-repository ppa:aos1/diff-so-fancy
sudo apt install diff-so-fancy
# install via npm
npm i -g diff-so-fancy

git config --global core.pager "diff-so-fancy | less --tabs=4 -RF"
git config --global interactive.diffFilter "diff-so-fancy --patch"
```

## neovim 配置

https://www.lazyvim.org/

先备份（如果卸载也就是把这些文件夹回滚）

```
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

Clone the starter

```
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

Remove the .git folder, so you can add it to your own repo later

```
rm -rf ~/.config/nvim/.git
```

然后就可以开始了，会下载各类插件，最好打开网络代理

```
nvim
```