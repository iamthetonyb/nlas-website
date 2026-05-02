// Generates raster OG + favicon assets from SVG sources.
// Run: node scripts/gen-assets.mjs
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const pub = resolve(root, 'public');
mkdirSync(pub, { recursive: true });

// ---------- OG image (1200x630) ----------
// Inline SVG — editorial dark navy card w/ NLAS striped mark + wordmark + script accent.
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A1628"/>
      <stop offset="55%" stop-color="#102849"/>
      <stop offset="100%" stop-color="#1A3E7C"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#3D78C9" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#3D78C9" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B6C7D9"/>
      <stop offset="45%" stop-color="#3D78C9"/>
      <stop offset="100%" stop-color="#0A3A7A"/>
    </linearGradient>
    <pattern id="stripes" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="14" stroke="#0A1628" stroke-width="3"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Striped blue mark -->
  <g transform="translate(90,110)">
    <rect x="0" y="0" width="290" height="410" rx="6" fill="url(#mark)"/>
    <rect x="0" y="0" width="290" height="410" rx="6" fill="url(#stripes)" opacity="0.5"/>
  </g>

  <!-- Eyebrow -->
  <g transform="translate(430,150)">
    <circle cx="7" cy="8" r="7" fill="#E8B547"/>
    <text x="26" y="14" font-family="Archivo, Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#E8B547" letter-spacing="4">NEVADA-BASED · FOR STUDENTS</text>
  </g>

  <!-- Wordmark -->
  <g font-family="Archivo, Inter, Arial, sans-serif" fill="#FFFFFF" font-weight="900" letter-spacing="-2">
    <text x="430" y="240" font-size="72">NEVADA</text>
    <text x="430" y="315" font-size="72">LEADERSHIP &amp;</text>
    <text x="430" y="390" font-size="72">ACCOUNTABILITY</text>
  </g>

  <!-- "Series" script accent -->
  <text x="430" y="480" font-family="Caveat, Brush Script MT, cursive" font-size="96" fill="#E8B547" font-style="italic">Series</text>

  <!-- Bottom tagline + domain -->
  <line x1="430" y1="520" x2="1110" y2="520" stroke="#E8B547" stroke-width="1" opacity="0.4"/>
  <text x="430" y="560" font-family="Inter, Arial, sans-serif" font-size="22" fill="#C6D3E6" letter-spacing="1">Real Nevada leaders. Real conversations.</text>
  <text x="430" y="590" font-family="Inter, Arial, sans-serif" font-size="18" fill="#8B9BB4" letter-spacing="2">LEADERSHIPSERIES.ORG</text>
</svg>`.trim();

// ---------- Square share card (1080x1080) — great 4 iMessage/IG ----------
const squareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A1628"/>
      <stop offset="100%" stop-color="#1A3E7C"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B6C7D9"/>
      <stop offset="45%" stop-color="#3D78C9"/>
      <stop offset="100%" stop-color="#0A3A7A"/>
    </linearGradient>
    <pattern id="stripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="16" stroke="#0A1628" stroke-width="3.5"/>
    </pattern>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg)"/>
  <g transform="translate(150,140)">
    <rect x="0" y="0" width="330" height="460" rx="6" fill="url(#mark)"/>
    <rect x="0" y="0" width="330" height="460" rx="6" fill="url(#stripes)" opacity="0.5"/>
  </g>
  <g font-family="Archivo, Inter, Arial, sans-serif" fill="#FFFFFF" font-weight="900" letter-spacing="-2">
    <text x="150" y="700" font-size="84">NEVADA</text>
    <text x="150" y="790" font-size="84">LEADERSHIP</text>
    <text x="150" y="880" font-size="84">&amp; ACCOUNTABILITY</text>
  </g>
  <text x="150" y="990" font-family="Caveat, cursive" font-size="104" fill="#E8B547" font-style="italic">Series</text>
</svg>`.trim();

// ---------- Favicon / app icons — square stripe mark ----------
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B6C7D9"/>
      <stop offset="45%" stop-color="#3D78C9"/>
      <stop offset="100%" stop-color="#0A3A7A"/>
    </linearGradient>
    <pattern id="d" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="30" stroke="#0A1628" stroke-width="6"/>
    </pattern>
  </defs>
  <rect width="512" height="512" rx="96" fill="#0A1628"/>
  <rect x="60" y="32" width="392" height="448" rx="18" fill="url(#g)"/>
  <rect x="60" y="32" width="392" height="448" rx="18" fill="url(#d)" opacity="0.5"/>
</svg>`.trim();

async function renderPng(svg, size, out) {
  await sharp(Buffer.from(svg))
    .resize(size.width, size.height, { fit: 'cover' })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(resolve(pub, out));
  console.log(`✓ ${out}  (${size.width}×${size.height})`);
}

// OG
await renderPng(ogSvg, { width: 1200, height: 630 }, 'og-image.png');
await renderPng(squareSvg, { width: 1080, height: 1080 }, 'og-square.png');

// Favicons + apple touch
await renderPng(iconSvg, { width: 32, height: 32 }, 'favicon-32.png');
await renderPng(iconSvg, { width: 192, height: 192 }, 'icon-192.png');
await renderPng(iconSvg, { width: 512, height: 512 }, 'icon-512.png');
await renderPng(iconSvg, { width: 180, height: 180 }, 'apple-touch-icon.png');

// Write the SVG source 4 the favicon too (overrides existing)
writeFileSync(resolve(pub, 'favicon.svg'), iconSvg);

console.log('\nAll share + icon assets generated → /public');
