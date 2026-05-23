#!/usr/bin/env node
/**
 * Detect actual file type by magic bytes and rename + update code references.
 * SVG → .svg, JPEG → .jpg, PNG → .png (unchanged).
 */
import fs from 'node:fs';
import path from 'node:path';

const ASSETS_ROOT = 'public/assets';
const SRC_ROOT = 'src';

function detectType(filepath) {
  const buf = fs.readFileSync(filepath);
  if (buf.length < 8) return null;
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) return 'png';
  // JPEG: FF D8 FF
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpg';
  // SVG: starts with <?xml or <svg
  const start = buf.slice(0, 200).toString('utf8').trim();
  if (start.startsWith('<?xml') || start.startsWith('<svg')) return 'svg';
  // WebP: 52 49 46 46 ... 57 45 42 50
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[8] === 0x57) return 'webp';
  return null;
}

const renames = []; // [{oldRel, newRel}]

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    if (!/\.(png|jpg|jpeg|svg|webp)$/i.test(entry.name)) continue;
    const detected = detectType(full);
    if (!detected) { console.log('UNKNOWN:', full); continue; }
    const currentExt = path.extname(entry.name).slice(1).toLowerCase();
    const normalizedCurrent = currentExt === 'jpeg' ? 'jpg' : currentExt;
    if (normalizedCurrent === detected) continue;
    const newName = entry.name.replace(/\.[^.]+$/, '.' + detected);
    const newFull = path.join(dir, newName);
    fs.renameSync(full, newFull);
    renames.push({
      oldName: entry.name,
      newName,
      relDir: path.relative(ASSETS_ROOT, dir).replace(/\\/g, '/'),
    });
    console.log('RENAMED:', full, '->', newFull);
  }
}

console.log('=== Detecting + renaming ===');
walk(ASSETS_ROOT);
console.log(`\nRenamed ${renames.length} files.`);

// Update code references
console.log('\n=== Updating code references ===');
function walkCode(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkCode(full, callback);
    else if (/\.(tsx|ts|jsx|js|css)$/.test(entry.name)) callback(full);
  }
}

let edits = 0;
walkCode(SRC_ROOT, (file) => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const r of renames) {
    // Match the bare filename (catches template literal usage like `${A}/imgEat.png`)
    content = content.split(r.oldName).join(r.newName);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('UPDATED:', file);
    edits++;
  }
});

console.log(`\nDone. ${edits} code file(s) updated.`);
