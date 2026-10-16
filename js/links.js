import { config } from './config.js';
export function initLinks() {
  document.querySelectorAll('[data-link]').forEach((a) => { a.href = config.links[a.dataset.link]; });
  document.getElementById('contract').textContent = config.contract;
}
