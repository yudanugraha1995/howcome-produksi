// usage: node render.js <a:v|h> <outdir> <startFrame> <endFrame> [times comma list for stills]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [a, out, sf, ef, stills] = process.argv.slice(2);
  const W = a === 'v' ? 1080 : 1920, H = a === 'v' ? 1920 : 1080;
  const b = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const p = await b.newPage({ viewport: { width: W, height: H } });
  p.on('pageerror',e=>console.log('ERR',e.message));await p.goto('http://127.0.0.1:8766/scene.html?a=' + a + '&s=' + (process.env.SC||'airdingin'));
  await p.waitForFunction('window.READY===true');
  const fs = require('fs'); fs.mkdirSync(out, { recursive: true });
  if (stills) {
    for (const s of stills.split(',')) { await p.evaluate(t => draw(t), +s); await p.screenshot({ path: `${out}/still_${a}_${s}.png` }); }
  } else {
    for (let f = +sf; f < +ef; f++) {
      await p.evaluate(t => draw(t), f / 30);
      await p.screenshot({ path: `${out}/f${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
    }
  }
  await b.close();
})();
