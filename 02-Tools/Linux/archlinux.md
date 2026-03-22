# ArchLinux

## Pacman 常用命令

- 安装软件（同时更新软件包列表）：`pacman -Syu pkg`
- 仅安装软件（不更新软件包列表）：`pacman -S pkg`
- 卸载软件（包括配置文件和依赖）：`pacman -Rsc pkg`
- 搜索软件：`pacman -Ss keywords`
- 升级所有软件：`pacman -Syu`
- 国内镜像：`pacman-mirrors -i -c China -m rank`

## 安装

使用 reflector 更新 mirror 地址

```
pacman -Sy reflector
reflector --country China --protocol https --age 12 --sort rate --save /etc/pacman.d/mirrorlist
```
