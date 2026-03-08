---
created: 2025-01-17
updated: 2025-01-17
---
# manjaro

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
