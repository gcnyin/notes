---
created: 2026-03-05
updated: 2026-03-05
---

# Wine

使用 Lubuntu(Ubuntu+LXQT) ，想要通过 Wine 运行 QQ 游戏大厅，应该要安装 32 位的 wine prefix。

```shell
sudo apt update
# 安装 wine 本体
sudo apt install -y wine
sudo apt install -y winetricks
# 使用 winetricks 安装 VC6 运行库 (包含 MFC42.dll)，这一步会从国外服务器下载，一定要事先打开网络代理
winetricks vcrun6
# 安装基础西文和中文字体
winetricks corefonts
winetricks cjkfonts
# 伪造中文字体映射（有时比直接安装更有效）
winetricks fakechinese
```
