---
created: 2026-03-18
updated: 2026-03-18
---
# KDE Plasma

## 调优

在2026年，KDE Plasma（目前最新稳定版为6.6系列）虽然已经比几年前更加轻量，但默认安装仍然包含许多为了“美观”和“功能全面”而设计的组件。

以下是针对当前版本（Plasma 6.x）的具体优化指南：

- 关闭视觉特效（最立竿见影的手段）
- KDE的资源占用大户通常是合成器（KWin）的动画和模糊效果。

禁用桌面特效：

- 进入 系统设置 -> 窗口管理 -> 桌面特效。
- 全部取消勾选，或者只保留最基础的“窗口移动/调整大小”辅助功能。
- 重点关闭：模糊 (Blur)、背景对比度降低、淡入淡出、魔法灯 (Magic Lamp)、立方体/翻转桌面。
- 效果：这能显著降低GPU负载和内存占用，使老旧显卡也能流畅运行。

关闭动画：

- 进入 系统设置 -> 工作区行为 -> 常规行为。
- 将“动画速度”调整为 “立即” 或关闭所有动画选项。

精简开机启动项和服务，很多KDE组件默认随系统启动，即使你并不需要它们。管理自启动程序：

- 进入 系统设置 -> 开机与关机 -> 自动启动。
- 禁用以下非必需项（根据你的需求）：
    - KDE Connect（如果你不用手机连接电脑）。
    - Print Manager（如果没有打印机）。
    - Discover Notifier（如果不希望后台自动检查更新，可改为手动运行Discover）。
    - Baloo File Indexer（关键：这是文件搜索索引服务，常占用大量CPU和磁盘IO。如果你不需要全文搜索，建议在“搜索”设置中直接禁用Baloo，或在终端运行 balooctl disable）。
    - Akregator, KMail, KOrganizer 等相关守护进程（如果不用PIM套件）。
- 禁用不必要的Plasma小部件：
    - 右键点击桌面或面板，移除所有不用的小部件 (Widgets)。
    - 特别是“新闻摘要”、“天气”、“股票”等需要联网刷新的小部件，它们会持续占用内存和CPU。

深度系统级优化

- 禁用 Baloo 文件索引（再次强调）这是KDE最容易被忽视的性能杀手。
    - `balooctl disable`
    - `balooctl purge`  # 清除已建立的索引数据库，释放磁盘空间
- 调整 Swappiness：
    - 如果内存很小（如4GB或更少），调整内核交换倾向可以减少卡顿。
    - 编辑 /etc/sysctl.conf，添加或修改： vm.swappiness=10
    - 然后运行 sudo sysctl -p。
- 安装最小化版本的KDE：
    - 如果你还没安装完成，或者愿意重装，不要安装 kde-full 或 plasma-desktop 的完整元数据包。
    - Arch Linux: 安装 plasma-desktop 而不是 plasma。
    - Debian/Ubuntu: 安装 kde-plasma-desktop 而不是 kde-standard 或 kde-full。
    - Fedora: 选择 "KDE Minimal Install" 组。

总结检查清单

- [ ] Baloo 已禁用 (balooctl status 应显示 disabled)。
- [ ] 桌面特效 已全部关闭。
- [ ] 自启动项 已清理至只剩必要项。
- [ ] 小部件 已移除。
- [ ] 确认使用的是 Plasma 6.6+（利用最新的性能优化）。

经过上述调整，KDE Plasma 在空闲时的内存占用通常可以控制在 400MB - 600MB 左右（取决于具体发行版和预装软件），足以在4GB内存的机器上流畅运行。
