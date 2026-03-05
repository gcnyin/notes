# Flatpak

最近(2026-03-02)在折腾给老机器装Lubuntu，然后想到用 flatpak 添加一些常用的软件。

官网 https://flatpak.org/

参考 https://zhuanlan.zhihu.com/p/55299546

## 安装

```shell
// arch: sudo pacman -S flatpak
// debian: sudo apt install flatpak
```

## 添加软件仓库

```shell
sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## 镜像推荐

上海交通大学镜像（推荐） https://mirror.sjtu.edu.cn/flathub

中国科学技术大学镜像 https://mirrors.ustc.edu.cn/flathub

## 常用软件

Flatseal. Flatseal is a graphical utility to review and modify permissions from your Flatpak applications.

```shell
flatpak install flathub com.github.tchx84.Flatseal
```
