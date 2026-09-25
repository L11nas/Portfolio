// Sugeneruoja src/icons.js tik su svetainėje naudojamomis boxicons ikonomis (SVG),
// kad nereikėtų krauti viso boxicons šrifto ir ~80 KB CSS.
// Pridėjus naują ikoną: įrašykite jos pavadinimą į NAMES ir paleiskite `node scripts/build-icons.cjs`.
const fs = require('fs');
const path = require('path');

const NAMES = [
  'bx-check', 'bx-check-shield', 'bx-conversation', 'bx-cookie', 'bx-envelope', 'bx-key',
  'bx-map', 'bx-map-pin', 'bx-menu', 'bx-phone', 'bx-phone-call', 'bx-plus', 'bx-receipt',
  'bx-refresh', 'bx-right-arrow-alt', 'bx-search-alt', 'bx-spa', 'bx-target-lock', 'bx-x',
  'bxl-facebook', 'bxl-google', 'bxl-linkedin',
];

const dir = path.join(__dirname, '../node_modules/boxicons/svg');
const icons = {};
for (const name of NAMES) {
  const folder = name.startsWith('bxl-') ? 'logos' : name.startsWith('bxs-') ? 'solid' : 'regular';
  const svg = fs.readFileSync(path.join(dir, folder, `${name}.svg`), 'utf8');
  icons[name] = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').trim();
}

const out =
  '// Sugeneruota: node scripts/build-icons.cjs (boxicons SVG, MIT licencija)\n' +
  'export const icons = ' + JSON.stringify(icons, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '../src/icons.js'), out);
console.log(`${NAMES.length} ikonos, ${out.length} B`);
