import { config } from './config.js';
export function initGallery() {
  const track = document.getElementById('slider-track');
  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');
  const count = document.getElementById('slider-count');
  const items = config.gallery;
  items.forEach((a, i) => {
    const li = document.createElement('li');
    li.className = 'slide';
    const fig = document.createElement('figure');
    fig.className = 'slide';
    fig.style.margin = '0';
    const img = new Image();
    img.src = a.src;
    img.alt = a.alt || `ROBED art ${i + 1}`;
    img.loading = i < 2 ? 'eager' : 'lazy';
    img.width = 600; img.height = 600;
    if (a.token) {
      const link = document.createElement('a');
      link.href = `https://opensea.io/item/${config.chain}/${config.contract}/${a.token}`;
      link.target = '_blank'; link.rel = 'noopener';
      link.append(img);
      const cap = document.createElement('figcaption');
      cap.textContent = `ROBED #${a.token}`;
      fig.append(link, cap);
    } else fig.append(img);
    li.append(fig);
    track.append(li);
  });
  const slides = [...track.children];
  slides.forEach((s) => { s.className = 'slide'; s.firstChild.className = ''; });
  function update() {
    const left = track.scrollLeft;
    let idx = 0, best = Infinity;
    slides.forEach((s, i) => { const d = Math.abs(s.offsetLeft - track.offsetLeft - 20 - left); if (d < best) { best = d; idx = i; } });
    count.textContent = `${idx + 1} / ${slides.length}`;
    prev.disabled = left <= 2;
    next.disabled = left + track.clientWidth >= track.scrollWidth - 2;
  }
  const slideBy = (dir) => track.scrollBy({ left: dir * (slides[0].offsetWidth + 12), behavior: 'smooth' });
  prev.addEventListener('click', () => slideBy(-1));
  next.addEventListener('click', () => slideBy(1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); slideBy(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); slideBy(-1); }
  });
  let raf; track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
  update();
}
