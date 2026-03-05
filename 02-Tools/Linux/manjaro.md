---
created: 2025-01-17
updated: 2025-01-17
---
# manjaro

## Pacman 常用命令

- 安装软件（同时更新软件包列表）：`pacman -Syu pkg`
- 仅安装软件（不更新软件包列表）：`pacman -S pkg`
- 卸载软件（包括配置文件和依赖）：`pacman -Rsc pkg`
- 搜索软件：`pacman -Ss keywords`
- 升级所有软件：`pacman -Syu`
- 国内镜像：`pacman-mirrors -i -c China -m rank`

## 输入法

安装依赖

```
sudo pacman -S fcitx5 fcitx5-qt fcitx5-gtk fcitx5-configtool fcitx5-rime
```

下载五笔(可选的)

下载 https://github.com/rime/rime-wubi ，将所有.yaml文件移动到/usr/share/rime-data。

并在`default.yaml`里添加：

```yaml
schema_list:
  - schema: wubi86
```

添加启动配置

在`~/.xprofile`里添加：

```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

开机时启动fcitx5，仅限KDE

System Settings -> Workspace -> Startup and Shutdown -> Autostart -> Add -> Add Application，搜索`Fcitx5`并添加。

## 命令行下连接蓝牙鼠标

```
bluetoothctl
```
