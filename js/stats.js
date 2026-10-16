// Reads data/stats.json, which a daily job refreshes (see README).
export async function initStats() {
  try {
    const res = await fetch('data/stats.json', { cache: 'no-cache' });
    const s = await res.json();
    document.querySelector('[data-stat="owners"]').textContent = s.owners;
    document.querySelector('[data-stat="floor"]').textContent = `${s.floorPrice} ${s.floorSymbol}`;
    document.getElementById('stats-updated').textContent = `Updated daily. Last update: ${new Date(s.updatedAt).toDateString()}.`;
  } catch {
    document.getElementById('stats-updated').textContent = 'Live figures are temporarily unavailable.';
  }
}
