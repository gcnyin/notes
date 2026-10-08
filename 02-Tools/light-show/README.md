# 光之变换 · Luminous Flux

一个纯 three.js 的光线变换场景：固定远景机位，像壁纸一样静静流动。

## 运行

依赖已全部本地化在 `vendor/` 下，**无需联网**。但 ES Module 需要通过 HTTP 打开：

```bash
cd 02-Tools/light-show
python3 -m http.server 8734
# 浏览器打开 http://127.0.0.1:8734/index.html
```

（直接双击 `index.html` 走 `file://` 协议会被浏览器的模块跨域策略拦截。）

## 场景构成

| 元素 | 实现 |
| --- | --- |
| 极光天幕 | 内翻球体 + fbm 流动光幕，绿→青→紫三色叠层 |
| 星云 / 星空 | 双频 fbm 彩雾 + 三层哈希星点，带闪烁 |
| 流动光带 | 4 条 TorusKnot，顶点单纯形噪声形变 + 菲涅尔虹彩着色，加色混合 |
| 能量光环 | 4 条细环，扫描光 + 虹彩，缓慢公转 |
| 星尘粒子 | 5200 个 GPU 点精灵，球壳分布、呼吸闪烁 |
| 中心光核 | 菲涅尔辉光球，低频脉动 |
| 后期 | UnrealBloom 辉光 → 径向色散 / 指数色调映射 / 暗角 / 细颗粒 |
| 全屏按钮 | 右下角胶囊按钮，鼠标动一下浮现，闲置 3 秒自动隐藏（隐藏时指针也隐去） |

## 可调参数（index.html 内）

- `ribbonSpecs` / `ringSpecs`：光带与光环的尺寸、色相、转速、噪声形变幅度（`warp`）
- `UnrealBloomPass(strength, radius, threshold)`：辉光强度 / 半径 / 起亮阈值
- `finalPass` 中 `exp(-col * 1.15)` 的 `1.15`：整体曝光
- `camera.position.set(0, 1.15, 12.8)`：机位距离（当前为固定远景）
- 全屏按钮：`hideUi` 中的 `3000` 为闲置隐藏延时；`.visible` 控制浮现动画

## 性能

1600×900 / 设备像素比 2 下约 61 FPS（Mac + Chrome）。窗口尺寸变化会自动适配。
