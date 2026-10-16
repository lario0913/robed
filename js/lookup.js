import { config } from './config.js';
export function initLookup() {
  document.getElementById('lookup').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Number(document.getElementById('tid').value);
    if (!Number.isInteger(id) || id < 1 || id > config.supply) return;
    window.open(`https://opensea.io/item/${config.chain}/${config.contract}/${id}`, '_blank', 'noopener');
  });
}
