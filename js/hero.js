// Respect reduced-motion settings: show the still poster instead of playing the loop.
export function initHero() {
  const v = document.querySelector('video.hero__logo');
  if (!v) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); }
  else v.play().catch(() => {});
}
