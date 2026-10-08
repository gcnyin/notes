import { createRequire } from 'node:module';
const require = createRequire('/Users/smith/.nvm/versions/node/v22.22.2/lib/node_modules/@playwright/cli/package.json');
const { chromium } = require('playwright');

const outDir = process.argv[2] || '/tmp/light-show-shots';
const url = 'http://127.0.0.1:8734/index.html';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

await page.goto(url, { waitUntil: 'networkidle' });

const state = () => page.evaluate(() => ({
  visible: document.getElementById('fsBtn').classList.contains('visible'),
  cursorHidden: document.body.classList.contains('ui-hidden'),
  fullscreen: Boolean(document.fullscreenElement)
}));

await page.waitForTimeout(1500);
console.log('1. 加载后未动鼠标(1.5s):', JSON.stringify(await state()));   // 期望 visible:false

await page.mouse.move(800, 450);
await page.waitForTimeout(300);
console.log('2. 窗口模式鼠标移动:', JSON.stringify(await state()));        // 期望 visible:true

await page.waitForTimeout(3400);
console.log('3. 窗口模式闲置3.4s:', JSON.stringify(await state()));        // 期望 visible:false

await page.mouse.move(820, 460);
await page.waitForTimeout(300);
await page.click('#fsBtn');
await page.waitForTimeout(700);
console.log('4. 进入全屏:', JSON.stringify(await state()));                // 期望 fullscreen:true

await page.mouse.move(400, 300);   // 移开鼠标（离开按钮 hover）
await page.waitForTimeout(3400);
console.log('5. 全屏模式闲置3.4s:', JSON.stringify(await state()));        // 期望 visible:false

await page.mouse.move(820, 460);
await page.waitForTimeout(300);
await page.click('#fsBtn');
await page.waitForTimeout(600);
console.log('6. 退出全屏:', JSON.stringify(await state()));                // 期望 fullscreen:false

console.log('console errors:', errors.length ? errors : 'none');
await browser.close();
