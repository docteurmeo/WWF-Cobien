# Theo Dấu Cỏ Biển — Website

**WWF Vietnam × RIO Creative**
Website bảo tồn cỏ biển kết hợp du lịch bền vững tại Cù Lao Chàm.

🌐 Live: https://docteurmeo.github.io/WWF-Cobien/

---

## Stack

- **Vite 5** + **React 18** + **TypeScript 5.5**
- **Tailwind CSS 3** với design tokens trích từ Figma
- **React Router 6** (HashRouter — required cho GitHub Pages SPA)
- **Fonts:** Geologica (display + body) + Lora Italic (quote/note)

## 3 trang demo

| Route | Page | Frame Figma | Trạng thái assets |
|---|---|---|---|
| `/#/` | Homepage | 🏠 Homepage — 1440px (6423px) | ✅ Real assets (137 files) |
| `/#/co-bien/` | Cỏ Biển | 🌿 Cỏ Biển — 1440px (9772px) | ⏳ Vẫn dùng SVG draft |
| `/#/kham-pha/o-dau/` | Ở Đâu | 🏡 Ở Đâu — 1440px (9340px) | ⏳ Vẫn dùng SVG draft |

## Pixel-perfect 1440px desktop

Thiết kế bám sát Figma từng pixel ở viewport 1440px. Responsive (mobile/tablet) sẽ làm trong v2.

## Setup

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → dist/
```

## Deploy GitHub Pages

Đã setup workflow tự động:
1. Push lên `main` → GitHub Actions tự build + deploy
2. Settings → Pages → Source: **GitHub Actions** (KHÔNG phải "Deploy from a branch")
3. Vite config có `base: '/WWF-Cobien/'` để asset paths khớp subpath
4. `public/.nojekyll` để bypass Jekyll xử lý
5. HashRouter (URL có `#/...`) thay vì BrowserRouter — GH Pages không hỗ trợ SPA fallback

## Cấu trúc

```
src/
├── components/         Shared: Nav, Footer, Logo, TornTag, Bubble, Creature, ...
├── pages/
│   ├── Homepage.tsx + homepage/    (Hero, IslandMap, ThreeCards, Bridge, SeagrassNarrator, Community, DualCTA)
│   ├── CoBien.tsx + cobien/        (Hero, ToiLa, ChiecNoi, MatXich, GiuCat, Carbon, SoLieu, NguyenNhan, BaoTon, Ket, CtaKep)
│   ├── ODau.tsx + odau/             (Hero, DinhNghia, HaiVung, Timeline, Testimonials, YNghia, ThucTien, QuanhCho, DualCTA)
│   └── figma-generated/             Auto-generated TSX từ Figma get_design_context
├── styles/             (none — tailwind only)
├── main.tsx            HashRouter setup
└── index.css           Tailwind + base reset

public/
├── assets/             SVG + JPG + PNG từ Figma (137+ files)
│   ├── heros1/, map/, s3cards/, s4/, s5/, s7/, s8/
│   └── logo-group-1.svg, logo-group-2.svg
└── .nojekyll          Bypass Jekyll on GH Pages

scripts/
├── extract-figma-assets.mjs    Parse get_design_context response → download + generate TSX
├── fix-asset-extensions.mjs    Detect magic bytes → rename to correct extension (.svg/.jpg/.png)
└── fix-code-refs.mjs            Update code references after rename
```

## Workflow extract Figma → code

```bash
# 1. Call MCP tool get_design_context(nodeId="55:2") trong chat agent
# 2. Save response inline vào .figma-responses/sX.json
# 3. Run extract script
node scripts/extract-figma-assets.mjs .figma-responses/s4.json "S4"
# 4. Run fix-extensions (vì Figma trả SVG/JPEG nhưng URL ko nói)
node scripts/fix-asset-extensions.mjs
# 5. Run fix-code-refs để update code references
node scripts/fix-code-refs.mjs
```

## Design Tokens (Tailwind config)

### Colors — Semantic mapping với ecosystem
- **Ocean** (Teal): `ocean.light` `mid` `deep` `primary` — water, conservation, primary actions
- **Sand** (Beige): `sand.light` `mid` `dark` — base bg, editorial calm, island ground
- **Green** (Seagrass): `green.light` `mid` `deep` — community, protection
- **Coral** (Orange): `coral` `coral.light` — data moments, stats, warnings
- **Ink** (Neutrals): `ink.white` `offwhite` `main` `muted` `bgdark`

### Typography
- **Display:** Geologica Black/Bold (Hero, H2, H3, big stats)
- **Body:** Geologica Regular/Light/Medium
- **Quote:** Lora Italic + Medium Italic (signature narrator voice)

### Collage DNA
- **Torn-edge labels:** SVG vector polygons exported từ Figma (`imgLabel.svg`, etc.) — không phải `clip-path` tự vẽ
- **Photo frames:** white border 6px + drop shadow + rotation ±1.5°
- **Cut-paper illustrations:** SVG với white stroke (turtle, fish, crab, leaves, bubbles)
- **Hexagon badge:** Coral hex với "35×" cho data signature
- **Wave dividers:** SVG vectors thật từ Figma

---

## ⚠️ Lessons learned (cho dev sau)

### 1. Đừng shortcut khi user paid pixel-perfect
Nếu Figma có 100+ asset custom, **phải extract đủ 100+**. Không tự vẽ inline SVG thay thế "cho nhanh".

### 2. Magic bytes > URL extension
Figma serve qua URL `/api/mcp/asset/{uuid}` không tiết lộ content type. Phải đọc magic bytes:
- `89 50 4E 47` → PNG
- `FF D8 FF` → JPEG
- `<?xml` / `<svg` → SVG markup
- `52 49 46 46` ... `57 45 42 50` → WebP

Save đúng extension để browser decode được.

### 3. SVG `<img>` luôn cần explicit height
SVG có intrinsic dimensions không predictable. Một file `.svg` 56×2px có thể render thành 150×150 nếu không set height. Always wrap:
```jsx
<div style={{ height: 2 }}>
  <img className="h-full w-full" src="line.svg" />
</div>
```

### 4. Extract FIGMA TRƯỚC khi code
Đừng đoán colors/gradients/positions. `get_design_context` trả về exact Tailwind classes (`bg-gradient-to-r`, `text-[#2a9b97]`, `top-[140px]`) — copy nguyên.

### 5. GitHub Pages SPA setup từ đầu project
- Vite `base: '/{repo}/'`
- HashRouter (không BrowserRouter)
- Workflow `actions/deploy-pages` upload `dist/`
- `public/.nojekyll`
- Settings → Pages → Source: **GitHub Actions**

---

## Design Reference

- Figma: https://www.figma.com/design/xaM2OJR8pw8OJOf4nnAAYq/WWF_Cu-Lao-Cham
- Content briefs: `/Website/01_Homepage_Content.md`, `02_CoBien_Content.md`, `03_ODau_Content.md`
- Art brief: `/Website/00_Creative-Art-Brief.md`
- Make extract: `/Website/04_Make-Art-Direction-Extract.md`
