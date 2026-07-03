import { chromium } from '/Users/elijahdesent/.npm/_npx/705bc6b22212b352/node_modules/playwright/index.mjs';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
await page.goto('http://localhost:3488/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, document.querySelector('#contact').offsetTop - 30));
await page.waitForTimeout(2000);
await page.screenshot({ path: 'visit-tall.png' });
await browser.close();
