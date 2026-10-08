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
await page.waitForTimeout(4000);
await page.screenshot({ path: outDir + '/frame1.png' });
await page.waitForTimeout(4500);
await page.screenshot({ path: outDir + '/frame2.png' });
await page.waitForTimeout(4500);
await page.screenshot({ path: outDir + '/frame3.png' });

const fps = await page.evaluate(() => new Promise((res) => {
  let n = 0; const t0 = performance.now();
  (function loop() {
    n++;
    if (performance.now() - t0 >= 2000) res(Math.round((n * 1000) / (performance.now() - t0)));
    else requestAnimationFrame(loop);
  })();
}));

console.log('FPS ~', fps);
console.log('console errors:', errors.length ? errors : 'none');
await browser.close();
