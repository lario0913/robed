import { initLinks } from './links.js';
import { initCountdown } from './countdown.js';
import { initStats } from './stats.js';
import { initCopy } from './copy.js';
import { initLookup } from './lookup.js';
import { initModules } from './modules.js';
import { initGallery } from './gallery.js';
[initLinks, initCountdown, initStats, initCopy, initLookup, initModules, initGallery].forEach((f) => f());
