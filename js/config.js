// Single place to edit project facts, links and utility modules.
export const config = {
  contract: '0x4b4483db86ad0598b5e882bd0cc0e61af56d0bc9',
  chain: 'ink',
  supply: 802,
  revealAt: '2026-10-19T08:02:00+08:00',
  revealLabel: 'Reveal: Oct 19, 08:02 GMT+8',
  links: {
    opensea: 'https://opensea.io/collection/robed-605592105',
    discord: 'https://discord.gg/79TTmBpHK',
    x: 'https://x.com/TommySusan1313', // founder's X; no official project account yet
  },
  // When the owner announces utility, change status to 'live' and fill in text.
  modules: [
    { title: 'Module 01', text: 'Not announced yet', status: 'locked' },
    { title: 'Module 02', text: 'Not announced yet', status: 'locked' },
    { title: 'Module 03', text: 'Not announced yet', status: 'locked' },
  ],
};
