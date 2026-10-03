const fs = require('fs');
const sharp = require('sharp');

const svg = `
<svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="eloqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#003492"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <!-- Modern stylized emblem -->
  <rect x="10" y="20" width="80" height="80" rx="20" fill="url(#eloqGrad)"/>
  <path d="M32 42 L68 42 M32 60 L58 60 M32 78 L68 78" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
  <circle cx="68" cy="60" r="5.5" fill="#dc2626"/>
  <!-- Brand text -->
  <text x="108" y="72" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="900" fill="#021842" letter-spacing="-1">Eloq<tspan fill="#dc2626">-</tspan>One</text>
  <text x="110" y="96" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="800" fill="#003492" letter-spacing="3">FORMATION</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/logo-eloqone.png')
  .then(() => console.log('Successfully created public/logo-eloqone.png'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
