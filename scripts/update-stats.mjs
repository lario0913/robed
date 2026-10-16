// Fetches collection stats from OpenSea and writes data/stats.json.
import { writeFile } from 'node:fs/promises';
const key = process.env.OPENSEA_API_KEY;
if (!key) throw new Error('Set OPENSEA_API_KEY');
const res = await fetch('https://api.opensea.io/api/v2/collections/robed-605592105/stats', {
  headers: { 'x-api-key': key, accept: 'application/json' },
});
if (!res.ok) throw new Error(`OpenSea responded ${res.status}`);
const { total } = await res.json();
const out = { floorPrice: total.floor_price, floorSymbol: total.floor_price_symbol, owners: total.num_owners, updatedAt: new Date().toISOString() };
await writeFile(new URL('../data/stats.json', import.meta.url), JSON.stringify(out) + '\n');
console.log(out);
