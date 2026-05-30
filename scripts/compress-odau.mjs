#!/usr/bin/env node
/**
 * Compress large photos in public/assets/odau/.
 * - PNG photos (no alpha needed) → JPEG quality 75
 * - PNG with alpha → keep PNG but compress
 * - JPEG → re-encode at quality 78
 * Skip SVG (already small) and tiny photos (<60KB).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIR = 'public/assets/odau';
const MIN_SIZE = 60 * 1024;

const photoPngs = [
  'imgLang.png', 'imgHuong.png', 'imgPhongNgNhCaSNhinRaCayXanh.png',
  'imgWell.png', 'imgTemple.png', 'imgMarket.png',
  'imgCoBien15868375331.png', 'imgDemTuyChn.png',
];

const jpegs = [
  'imgCoBien15868375332.jpg', 'imgImageWithFallback.jpg', 'imgImageWithFallback1.jpg',
  'imgImageWithFallback2.jpg', 'imgSangHomSau.jpg',
  'imgHeroHienNhaHomestayBuiChiuVongLiPhiAnhNngNghieng.jpg',
  'imgBuiSang.jpg', 'imgBaTi.jpg', 'imgBuiChiu.jpg', 'imgBuiSangSm.jpg',
];

async function compressPngToJpeg(file) {
  const full = path.join(DIR, file);
  if (!fs.existsSync(full)) return;
  const before = fs.statSync(full).size;
  if (before < MIN_SIZE) return;
  const jpegPath = full.replace(/\.png$/i, '.jpg');
  await sharp(full).jpeg({ quality: 75, mozjpeg: true }).toFile(jpegPath);
  const after = fs.statSync(jpegPath).size;
  fs.unlinkSync(full);
  console.log(`PNG→JPG ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
}

async function recompressJpeg(file) {
  const full = path.join(DIR, file);
  if (!fs.existsSync(full)) return;
  const before = fs.statSync(full).size;
  if (before < MIN_SIZE) return;
  const tmp = full + '.tmp';
  await sharp(full).jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before) {
    fs.renameSync(tmp, full);
    console.log(`JPG ${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
  } else {
    fs.unlinkSync(tmp);
    console.log(`JPG ${file}: no benefit, kept original`);
  }
}

for (const f of photoPngs) await compressPngToJpeg(f);
for (const f of jpegs)     await recompressJpeg(f);
console.log('Done.');
