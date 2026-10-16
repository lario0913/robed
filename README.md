# ROBED site

Static site, no build step. ES modules need a web server (not file://): run `npx serve .` locally.

| To change | Edit |
|---|---|
| Links, contract, reveal time, utility modules | js/config.js |
| Page content | index.html |
| Colors and fonts | css/base.css (variables at top) |
| Spacing and grids | css/layout.css |
| Buttons, tiles, cards | css/components.css |
| Daily floor and holders | scripts/update-stats.mjs, .github/workflows/update-stats.yml |

## Daily stats
Put this folder in a GitHub repo, add a repo secret named OPENSEA_API_KEY (free key from OpenSea developer settings), and host the repo on Netlify, Vercel or GitHub Pages so each daily commit redeploys. Run the workflow once manually to confirm the OpenSea response fields match.

## After reveal
The countdown flips to Revealed automatically. Replace assets/placeholder.jpg and the gallery images in index.html with real art, and update modules in js/config.js when utility is announced.
