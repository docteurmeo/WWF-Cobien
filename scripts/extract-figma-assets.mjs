#!/usr/bin/env node
/**
 * Extract Figma assets from a saved get_design_context response.
 * - Parses const declarations → downloads all images to /public/assets/
 * - Generates a React TSX component using local paths
 *
 * Usage:
 *   node scripts/extract-figma-assets.mjs <response-file.txt> <output-component-name>
 */
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const [responseFile, outputName] = process.argv.slice(2);
if (!responseFile || !outputName) {
  console.error('Usage: node extract-figma-assets.mjs <response-file.txt> <output-component-name>');
  process.exit(1);
}

const raw = fs.readFileSync(responseFile, 'utf-8');
const json = JSON.parse(raw);
const text = json[0].text;

// Strip docs trailer
const trailerIdx = text.indexOf('SUPER CRITICAL:');
const code = trailerIdx > 0 ? text.substring(0, trailerIdx) : text;

// Extract all const declarations: const imgX = "URL";
const constRe = /const (img\w+|svg\w+) = "(https:\/\/www\.figma\.com\/api\/mcp\/asset\/[\w-]+)";/g;
const assets = {};
let m;
while ((m = constRe.exec(code))) assets[m[1]] = m[2];

console.log(`Found ${Object.keys(assets).length} assets.`);

// Sanitize component name → file name prefix
const prefix = outputName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const assetsDir = path.join('public', 'assets', prefix);
fs.mkdirSync(assetsDir, { recursive: true });

// Download function
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

// Map var → local path
const localMap = {};
const downloadTasks = [];
for (const [varName, url] of Object.entries(assets)) {
  // Sniff extension: most are PNG, some SVG. We'll detect after download.
  const fname = `${varName}.png`;
  localMap[varName] = `/WWF-Cobien/assets/${prefix}/${fname}`;
  downloadTasks.push({ varName, url, dest: path.join(assetsDir, fname) });
}

console.log(`Downloading ${downloadTasks.length} files to ${assetsDir}...`);

const chunks = [];
for (let i = 0; i < downloadTasks.length; i += 8) chunks.push(downloadTasks.slice(i, i + 8));

let done = 0;
for (const chunk of chunks) {
  await Promise.all(chunk.map(async (t) => {
    try {
      await download(t.url, t.dest);
      done++;
    } catch (e) {
      console.error(`FAIL ${t.varName}: ${e.message}`);
    }
  }));
  process.stdout.write(`\rDownloaded ${done}/${downloadTasks.length}`);
}
console.log('');

// Now transform the code:
// 1. Remove const declarations
// 2. Replace src={imgVar} with src="<localpath>"
// 3. Wrap in our TS module export

let transformed = code;
// Strip const declarations
transformed = transformed.replace(constRe, '');
// Replace usage: src={imgVar}
for (const [varName, localPath] of Object.entries(localMap)) {
  const re = new RegExp(`\\{${varName}\\}`, 'g');
  transformed = transformed.replace(re, `"${localPath}"`);
}

// Strip stray empty lines from removed consts
transformed = transformed.replace(/^[\s]*\n/gm, '\n').replace(/\n{3,}/g, '\n\n');

// Fix font references: Figma exports invalid CSS like "font-['Geologica:Bold',sans-serif]"
const fontMap = {
  "font-\\['Geologica:Black',sans-serif\\] font-black": 'font-display font-black',
  "font-\\['Geologica:Bold',sans-serif\\] font-bold": 'font-display font-bold',
  "font-\\['Geologica:SemiBold',sans-serif\\] font-semibold": 'font-display font-semibold',
  "font-\\['Geologica:Medium',sans-serif\\] font-medium": 'font-display font-medium',
  "font-\\['Geologica:Regular',sans-serif\\] font-normal": 'font-display font-normal',
  "font-\\['Geologica:Light',sans-serif\\] font-light": 'font-display font-light',
  "font-\\['Lora:Italic',sans-serif\\] font-normal italic": 'font-quote italic',
  "font-\\['Lora:MediumItalic',sans-serif\\] font-medium italic": 'font-quote italic font-medium',
  "font-\\['Lora:BoldItalic',sans-serif\\] font-bold italic": 'font-quote italic font-bold',
  "font-\\['Space_Mono:Regular',sans-serif\\]": 'font-mono',
};
for (const [pat, replacement] of Object.entries(fontMap)) {
  transformed = transformed.replace(new RegExp(pat, 'g'), replacement);
}
// Also strip fontVariationSettings inline styles (cosmetic, not needed)
transformed = transformed.replace(/\s*style=\{\{\s*fontVariationSettings:[^}]+\}\}/g, '');

// The output is `export default function Name() { return (...) }`. Wrap pretty.
const componentFile = `// AUTO-GENERATED from Figma node — DO NOT manually edit assets.
// Source: get_design_context response → transformed with scripts/extract-figma-assets.mjs
// All Figma asset URLs replaced with local paths under /public/assets/${prefix}/
${transformed.trim()}
`;

const outFile = path.join('src', 'pages', 'figma-generated', `${outputName}.tsx`);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, componentFile, 'utf-8');

console.log(`Component written: ${outFile}`);
console.log(`Assets: ${assetsDir}`);
