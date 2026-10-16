import { config } from './config.js';
export function initModules() {
  const box = document.getElementById('modules');
  config.modules.forEach((m) => {
    const d = document.createElement('div');
    d.className = m.status === 'live' ? 'module module--live' : 'module';
    d.textContent = `${m.title}: ${m.status === 'live' ? '' : 'Locked. '}${m.text}`;
    box.append(d);
  });
}
