# Theo Dấu Cỏ Biển — Website

**WWF Vietnam × RIO Creative**
Website bảo tồn cỏ biển kết hợp du lịch bền vững tại Cù Lao Chàm.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** với design tokens trích từ Figma
- **React Router** cho 3 trang demo
- **Fonts:** Geologica (display + body) + Lora Italic (quote/note)

## 3 Trang Demo

| Route | Page | Frame Figma |
|---|---|---|
| `/` | Homepage | 🏠 Homepage — 1440px (6423px height) |
| `/co-bien/` | Cỏ Biển | 🌿 Cỏ Biển — 1440px (9772px height) |
| `/kham-pha/o-dau/` | Ở Đâu | 🏡 Ở Đâu — 1440px (9340px height) |

## Pixel-perfect 1440px desktop

Thiết kế bám sát Figma từng pixel ở viewport 1440px. Responsive sẽ làm trong v2.

## Setup

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Cấu trúc

```
src/
├── components/         # Shared: Nav, Footer, TornTag, PhotoFrame, ...
├── pages/              # Homepage, CoBien, ODau
├── assets/             # SVG illustrations + photos
├── styles/             # Design tokens helpers
├── main.tsx            # Router setup
└── index.css           # Tailwind + base

public/
└── svg/                # Static SVG (logo, seagrass, creatures)
```

## Design Reference

- Figma: https://www.figma.com/design/xaM2OJR8pw8OJOf4nnAAYq/WWF_Cu-Lao-Cham
- Content briefs: `/Website/01_Homepage_Content.md`, `02_CoBien_Content.md`, `03_ODau_Content.md`
- Art brief: `/Website/00_Creative-Art-Brief.md`
- Make extract: `/Website/04_Make-Art-Direction-Extract.md`

## Design Tokens

### Colors (semantic — map onto ecosystem)
- **Ocean** (Teal): water, conservation, primary actions
- **Sand** (Beige): base bg, editorial calm, island ground
- **Green** (Seagrass): community, protection
- **Coral** (Orange): data moments, stats, warnings

### Typography
- **Display:** Geologica Black/Bold (Hero, H2, H3)
- **Body:** Geologica Regular/Light
- **Quote:** Lora Italic (signature for narrator/factoid voice)

### Collage DNA
- Torn-edge labels (vector polygons, not rounded rects)
- Photo frames with white border + drop shadow + ±1.5° rotation
- White stroke on all illustrations (waves, leaves, creatures)
- Hexagon badge for 35× carbon data signature
- Ripple circles around key data moments
