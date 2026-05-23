#!/usr/bin/env node
/**
 * Build basename→actualExt map from current asset filesystem, then update
 * code references that point to wrong extension.
 */
import fs from 'node:fs';
import path from 'node:path';

const ASSETS_ROOT = 'public/assets';
const SRC_ROOT = 'src';

// Map: basename (no ext) -> actualExt
const basenameToExt = new Map();

function walkAssets(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAssets(full);
    else {
      const m = entry.name.match(/^(.+)\.(png|jpg|jpeg|svg|webp)$/i);
      if (!m) continue;
      const base = m[1];
      const ext = m[2].toLowerCase();
      basenameToExt.set(base, ext);
    }
  }
}
walkAssets(ASSETS_ROOT);
console.log(`Built ${basenameToExt.size} basename→ext mappings.`);

function walkCode(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkCode(full, cb);
    else if (/\.(tsx|ts|jsx|js|css)$/.test(entry.name)) cb(full);
  }
}

let totalSwaps = 0;
let touchedFiles = 0;
walkCode(SRC_ROOT, (file) => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  // Match patterns like: basename.png|jpg|jpeg|svg
  // Use a regex finding identifier-like basename followed by .ext
  content = content.replace(/([a-zA-Z0-9_-]+)\.(png|jpg|jpeg|svg|webp)/g, (match, base, ext) => {
    const actual = basenameToExt.get(base);
    if (!actual) return match;
    if (actual === ext.toLowerCase() || (actual === 'jpg' && ext.toLowerCase() === 'jpeg')) return match;
    totalSwaps++;
    return `${base}.${actual}`;
  });
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    touchedFiles++;
    console.log('UPDATED:', file);
  }
});
console.log(`\n${totalSwaps} extension swaps across ${touchedFiles} files.`);
