import { config } from './config.js';
const pad = (n) => String(n).padStart(2, '0');
export function initCountdown() {
  const target = Date.parse(config.revealAt);
  const cells = Object.fromEntries([...document.querySelectorAll('[data-cd]')].map((e) => [e.dataset.cd, e]));
  const label = document.getElementById('reveal-label');
  label.textContent = config.revealLabel;
  function tick() {
    const left = target - Date.now();
    if (left <= 0) {
      document.body.dataset.state = 'revealed';
      label.textContent = 'Revealed. Check your portfolio on OpenSea.';
      document.getElementById('gallery-note').textContent = 'The reveal is live. Look up your token below.';
      Object.values(cells).forEach((c) => { c.textContent = '00'; });
      return clearInterval(timer);
    }
    const s = Math.floor(left / 1000);
    cells.d.textContent = pad(Math.floor(s / 86400));
    cells.h.textContent = pad(Math.floor((s % 86400) / 3600));
    cells.m.textContent = pad(Math.floor((s % 3600) / 60));
    cells.s.textContent = pad(s % 60);
  }
  const timer = setInterval(tick, 1000);
  tick();
}
