import { config } from './config.js';
export function initCopy() {
  const btn = document.getElementById('copy-btn');
  btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(config.contract); btn.textContent = 'Copied'; }
    catch { btn.textContent = 'Press and hold the address to copy'; }
    setTimeout(() => { btn.textContent = 'Copy address'; }, 2000);
  });
}
