// usage: SC=<scene-id> node sfxscan.js <v|h> <out.json>
// Finds every moment something pops in on screen (popS start times) so sfx.py can put a sound on it.
const { chromium } = require('playwright');
(async () => {
  const [a, out] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: a === 'v' ? 1080 : 1920, height: a === 'v' ? 1920 : 1080 } });
  await p.goto('http://127.0.0.1:8765/scene.html?a=' + a + '&s=' + process.env.SC);
  await p.waitForFunction('window.READY===true');
  const ev = await p.evaluate(() => {
    const seen = new Set(); const orig = window.popS;
    window.popS = function (t, t0, d) { if (t >= t0 && isFinite(t0)) seen.add(Math.round(t0 * 100) / 100); return orig.apply(this, arguments); };
    const end = Math.max(...S.map(s => s.t1));
    for (let t = 0.1; t < end; t += 0.2) draw(t);
    window.popS = orig; return [...seen].sort((x, y) => x - y);
  });
  require('fs').writeFileSync(out, JSON.stringify(ev)); console.log(ev.length, 'pop events'); await b.close();
})();
