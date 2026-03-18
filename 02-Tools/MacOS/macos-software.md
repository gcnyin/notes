# MacOS 软件

## 通用

- Alfred5
- Rectangle
- Chrome
- Pearcleaner
- Xnip
- KeepingYouAwake

## 开发工具

- Visual Studio Code
- iTerm2

## AI工具

- Codex. `npm i -g @openai/codex`
- Codex App. https://chatgpt.com/codex

## 字体

- 更纱黑体. https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Sarasa-Gothic/

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

Homebrew Bottles

```shell
echo 'export HOMEBREW_API_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"' >> ~/.zprofile
echo 'export HOMEBREW_BOTTLE_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"' >> ~/.zprofile
export HOMEBREW_API_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="http://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
```

安装命令

```shell
brew install zsh git neovim htop wget tree ripgrep go btop fzf tmux tig diff-so-fancy ncdu
```

### oh-my-zsh

```shell
# 安装
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# 下载powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
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


### tmux 配置

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
