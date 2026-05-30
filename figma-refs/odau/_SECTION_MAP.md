# SECTION MAP — Trang Ở Đâu
## Frame: `🏡 Ở Đâu — 1440px` · Node `129:1534` · 1440×9340px
## Figma file: `xaM2OJR8pw8OJOf4nnAAYq` · Page: `01 Homepage`
## Extracted: 30/05/2026

---

## Tổng quan sections (top → bottom)

| # | Section name | Node | y_start | Height | Tone | Bg color |
|---|---|---|---|---|---|---|
| 0 | 🧭 Nav Bar | 129:1831 | 0 | 100 | LIGHT | `#f5edd8` (Sand/01) |
| 1 | Hero — Người mở cửa | 129:1546 | 100 | 888 | LIGHT WARM | `bg-gradient-to-b from-[#f5edd8] via-[#e8d5b0] to-[rgba(201,180,138,0.85)]` |
| 2 | S1 Định nghĩa lại chỗ ở | 129:1564 | 988 | 745 | LIGHT | `#f8f5ef` (Neutral/02 Off-White) |
| 3 | S2 Hai vùng để ở | 129:1583 | 1733 | 860 | LIGHT SAND | `#f5edd8` (Sand/01) |
| 4 | S3 Nhịp ngày khi ở lại | 129:1607 | 2593 | 2181 | LIGHT ← TALLEST | `#f8f5ef` |
| 5 | S4 Giọng của người đã ở lại | 129:1657 | 4774 | 720 | LIGHT (photo bg) | `#f5edd8` + full-width photo overlay |
| 6 | S5 Vì sao ở lại lâu hơn | 129:1679 | 5494 | 1109 | LIGHT→TEAL fade | `bg-gradient-to-r from-[#f8f5ef] via-[#eaf4f1] to-[rgba(125,211,208,0.45)]` |
| 7 | S6 Thực tiễn — trước khi đặt chỗ | 129:1714 | 6603 | 997 | WHITE | `white` |
| 8 | S7 Quanh chỗ ở | 129:1760 | 7600 | 880 | LIGHT SAND | `#f5edd8` |
| 9 | S8 Dual CTA — Light Split | 129:1789 | 8480 | 560 | DARK (photo) | Two photo panels, dark overlays |
| 10 | 🦶 Footer | 129:1810 | 9040 | 300 | DARK | `#0f2524` (Neutral/05 BG Dark) |

**Tổng height:** 9340px ✅ (khớp frame size)

**Tone toàn trang:** 90%+ LIGHT/WARM SAND — chỉ S8 CTA photos dark, Footer dark. Ngược hoàn toàn với Cỏ Biển (alternating dark/light).

---

## Assets inventory (57 total)

### Photos (cần compress bằng sharp nếu > 500KB)
| Const name | Section | Mô tả |
|---|---|---|
| `imgHeroHienNhaHomestayBuiChiuVongLiPhiAnhNngNghieng` | Hero | Hiên nhà homestay buổi chiều, võng, lưới phơi, ánh nắng nghiêng |
| `imgPhongNgNhCaSNhinRaCayXanh` | S1 | Phòng ngủ nhỏ, cửa sổ nhìn ra cây xanh |
| `imgLang` | S2 | Bãi Làng — ảnh card |
| `imgHuong` | S2 | Bãi Hương — ảnh card |
| `imgBuiSangSm` | S3 Step1 | Buổi sáng sớm (thumbnail nhỏ) |
| `imgBuiSang` | S3 Step2 | Buổi sáng |
| `imgBuiChiu` | S3 Step4 | Buổi chiều |
| `imgBaTi` | S3 Step5 | Bữa tối |
| `imgDemTuyChn` | S3 Step6 | Đêm — tùy chọn |
| `imgSangHomSau` | S3 Step7 | Sáng hôm sau |
| `imgImage1` | S4 | Full-width bg photo (testimonials backdrop) |
| `imgWell` | S7 | Giếng cổ Chăm Pa |
| `imgTemple` | S7 | Chùa Hải Tạng |
| `imgMarket` | S7 | Chợ Tân Hiệp |
| `imgCoBien15868375331` | S8 | CTA Left panel bg (photo) |
| `imgCoBien15868375332` | S8 | CTA Right panel bg (photo) |
| `imgImageWithFallback` | S5? | Check khi extract |
| `imgImageWithFallback1` | S5? | Check khi extract |
| `imgImageWithFallback2` | S5? | Check khi extract |

⚠️ **S3 chỉ có 6 photos (Step 1-2, 4-7).** Step 3 BAN NGÀY không thấy imgBuiNgay trong danh sách — cần verify khi extract.

### SVG / Decorative
| Const name | Dùng ở | Mô tả |
|---|---|---|
| `imgGroup` | Nav/Logo | Logo top group |
| `imgGroup1` | Nav/Logo | Logo bottom group |
| `imgVuesaxBoldArrowDown` | Hero | Arrow down icon |
| `imgBubble1/2/3` | Hero | Bubble decorations |
| `imgLabel` | Hero | Torn tag label |
| `imgLayer1` | Hero | Layer 1 decoration |
| `imgEllipse` | S1 | Small dot (factoid header) |
| `imgLabel1-5` | S2/S3 | Torn tags for cards |
| `imgTimeDot1` | S3 | Time dot SVG (dùng cho dots 1, 2 — cần check 3,7) |
| `imgTimeDot3` | S3 | Time dot variant |
| `imgTimeDot7` | S3 | Time dot variant |
| `imgLine` | S4 | Short horizontal line divider (trong testimonial card) |
| `imgLine1/2/3/4` | S4/S6/S8 | Divider lines |
| `imgLabel5-14` | S3/S5/S6/S7/S8 | Torn tag labels các section |
| `imgGroup2` | S5 | Background illustration (w=1116 h=146) |
| `imgRipple1/2/3` | S5 | Ripple rings concentric (stat animation) |
| `imgTornPolygon` | S7 | Torn polygon label "LANG THANG · QUANH ĐÂY" |
| `imgLabel15/16` | S8 | CTA torn tags |
| `imgLine4` | S8 | Final divider |

---

## Chi tiết từng section

### 🧭 NAV BAR (node 129:1831)
- **REUSE:** `<Nav>` component y hệt Homepage + Cỏ Biển, không sửa gì

---

### 🏡 HERO (node 129:1546, h=888)
- **Layout:** Asymmetric — headline LEFT, photo RIGHT large (collage style)
- **Bg:** `bg-gradient-to-b from-[#f5edd8] via-[#e8d5b0] to-[rgba(201,180,138,0.85)]`
- **Hero photo:** `imgHeroHienNhaHomestayBuiChiuVongLiPhiAnhNngNghieng` — hiên nhà homestay warm
- **Bubbles:** `imgBubble1/2/3` — decorative
- **Label:** `imgLabel` — torn tag
- **Arrow:** `imgVuesaxBoldArrowDown` — CTA scroll
- **Layer:** `imgLayer1` — decoration
- **Logo:** `imgGroup` + `imgGroup1` (trong Nav, không trong Hero)
- **Headline:** "Người mở cửa đón bạn / không phải lễ tân. / Mà là chính chủ nhà."
- **Typography:** Geologica Bold 52px `#1a2e2d` + Lora Italic subheadline
- **CTA:** "Khám phá cách ở lại ↓" — `.btn-primary-hover`

---

### S1 ĐỊNH NGHĨA LẠI CHỖ Ở (node 129:1564, h=745)
- **Bg:** `#f8f5ef`
- **Layout:** LEFT = text copy long | RIGHT = photo frame + factoid card
- **Photo:** `imgPhongNgNhCaSNhinRaCayXanh` — 480×360 frame, rotate(1.5deg), white border, shadow
- **Factoid card:** `rotate(-2deg)`, bg=white, shadow
  - Header: orange dot (`imgEllipse`) + "KHÁCH QUA ĐÊM" label
  - Stat: `5–10%` Geologica Black 56px coral `#e86b35`
  - Body text: muted teal caption
- **Copy:** 3 đoạn về homestay, chủ nhà, ngư dân
- **⚠️ Stacking:** Photo (rotate wrapper) + Factoid card phải đúng z-order. Photo trước (bottom), Factoid sau (top).

---

### S2 HAI VÙNG ĐỂ Ở (node 129:1583, h=860)
- **Bg:** `#f5edd8`
- **Headline:** "Hai vùng để ở. Bạn chọn đâu?" — Geologica Bold 52px
- **Card LANG (Bãi Làng):**
  - `left=111.04 top=248.9 w=605.929 h=544.202`
  - Inner card: `rotate(2deg)`, bg=white, w=588 h=524, shadow heavy
  - Photo top: `imgLang` 572×280px
  - Headline: "Nơi mọi thứ bắt đầu." 36px Bold
  - Body + "Gợi ý cho" text
- **Card HUONG (Bãi Hương):**
  - Positioned RIGHT, likely negative rotation
  - Photo: `imgHuong`, same pattern
  - Headline: "Làng chài 400 năm tuổi."
- **Labels:** torn tag labels (`imgLabel1` etc.) trên mỗi card

---

### S3 NHỊP NGÀY KHI Ở LẠI (node 129:1607, h=2181) ← PHỨC TẠP NHẤT

**Headline:** "Một ngày ở lại trông không giống một ngày tour." — Geologica Bold 52px, left=120, top=117

**Vertical timeline line:**
- `left=719, top=327, h=1854, w=2, bg=rgba(201,180,138,0.6)`

**7 Time dots** (all at left=711, size=18×18):
| Dot | top | Time label | Card side | Card top |
|---|---|---|---|---|
| 1 | 387 | "5:30 – 7:00" (RIGHT of line) | LEFT | 297 |
| 2 | 651 | "7:00 – 9:00" (LEFT of line, right-aligned) | RIGHT | 556.11 |
| 3 | 915 | (need confirm) | LEFT | 825 |
| 4 | 1179 | "17:00 – 19:00" (LEFT of line) | RIGHT | 1084.11 |
| 5 | 1443 | "19:00 – 21:00" (RIGHT of line) | LEFT | 1353 |
| 6 | 1707 | (need confirm) | RIGHT | 1612.11 |
| 7 | 1971 | (need confirm) | LEFT | 1881 |

**Dot spacing:** 264px đều (387 → 651 → 915 → 1179 → 1443 → 1707 → 1971)

**Card pattern (all cards):**
- w≈560, h≈250 (slight variation)
- White bg, rounded-[2px], shadow
- Photo LEFT portion (w=220, h≈225) — absolute positioned
- Label (uppercase, coral) + Body text RIGHT portion
- Cards on LEFT: `left≈118`, offset above dot by ~90px
- Cards on RIGHT: `left=760`, offset above dot by ~95px

**7 Steps và photos:**
| Step | Name | Photo const | Side |
|---|---|---|---|
| 1 | BUỔI SÁNG SỚM | `imgBuiSangSm` | LEFT |
| 2 | BUỔI SÁNG | `imgBuiSang` | RIGHT |
| 3 | BAN NGÀY | ⚠️ NOT FOUND in assets — may be placeholder or multi-photo | LEFT |
| 4 | BUỔI CHIỀU | `imgBuiChiu` | RIGHT |
| 5 | BỮA TỐI | `imgBaTi` | LEFT |
| 6 | ĐÊM — TÙY CHỌN | `imgDemTuyChn` | RIGHT |
| 7 | SÁNG HÔM SAU | `imgSangHomSau` | LEFT |

⚠️ **Step 3 BAN NGÀY**: không có const riêng trong danh sách. Khi extract cần verify — có thể là `imgImageWithFallback` hoặc card dùng text-only không photo.

**Time label positioning:**
- Dots 1,3,5,7 (LEFT cards): time label ở RIGHT của line (`left=750, w=180`)
- Dots 2,4,6 (RIGHT cards): time label ở LEFT của line (`-translate-x-full, left=690, text-right`)

---

### S4 GIỌNG CỦA NGƯỜI ĐÃ Ở LẠI — TESTIMONIALS (node 129:1657, h=720)
- **Bg:** `#f5edd8` + `imgImage1` full-width backdrop photo (`-translate-x-1/2 -translate-y-1/2 left-1/2`, h=961)
- **Headline:** "Những người đã ở lại nói gì." — centered, 52px Bold
- **3 Testimonial cards** (bg=`#f5edd8`, w=380, h=280, shadow):
  - Card 1: `left=112.67, top=280, rotate(1.5deg)`
  - Card 2: center position (need confirm position)
  - Card 3: right position (need confirm)
- **Card anatomy:**
  - Quote mark `"` : Geologica Black 96px, `#2a9b97` opacity-30, top-left
  - Quote text: Lora Medium Italic 18px, `#1a2e2d`, top=100
  - Line divider: `imgLine` (explicit height=0 div needed! ⚠️)
  - Attribution: "— KHÁCH LƯU TRÚ" Geologica SemiBold 12px `#2a9b97` uppercase tracking-[1px]

---

### S5 VÌ SAO Ở LẠI LÂU HƠN (node 129:1679, h=1109)
- **Bg:** `bg-gradient-to-r from-[#f8f5ef] via-[#eaf4f1] to-[rgba(125,211,208,0.45)]` via-1/2
- **Background illus:** `imgGroup2` (left=200, top=180, w=1116, h=146) — decorative
- **Content column:** centered (left=270, w=900), flex-col gap-24
  - Torn tag label: `imgLabel6` — "Ý NGHĨA · BẢO TỒN GẮN SINH KẾ"
  - Headline: "Mỗi đêm bạn ở lại / không chỉ là một đêm ngủ." — 52px Bold centered
  - Body: Geologica Medium 17px `#5a7370` opacity-88, centered
  - Italic quote: Lora Medium Italic 22px `#1a7f7c`, centered
- **Ripple rings:** `imgRipple1/2/3` — concentric rings, apply `.ripple-echo` staggered
  - Also check `imgImageWithFallback/1/2` — could be S5 photo or stat
- **Stat callout:** `5–10%` stat with ripple visual

---

### S6 THỰC TIỄN — TRƯỚC KHI ĐẶT CHỖ (node 129:1714, h=997)
- **Bg:** white
- **Headline:** "Một vài điều nên biết / trước khi đặt chỗ." — 52px Bold left=120 top=112
- **4 Info cards** (layout: 2×2 grid):
  - All cards: bg=`#f8f5ef`, border teal left band (w=4px `#2a9b97`), border `rgba(42,155,151,0.2)`, shadow, rounded-[2px]
  - Card anatomy: emoji icon (44px Black) + title (24px Bold) + italic subtitle (Lora 15px teal) + body (13px muted)
  - **Info SEASON:** `left=117.56, top=320, rotate(0.5deg)` — 📅 "Tháng 2 – tháng 9"
  - **Info GOTHERE:** positioned right row1 — 🚢 "từ cảng Cửa Đại ⚠️"
  - **Info PREP:** left row2 — 🎒 Chuẩn bị
  - **Info FEST:** right row2 — 🎉 Lễ hội

---

### S7 QUANH CHỖ Ở (node 129:1760, h=880)
- **Bg:** `#f5edd8`
- **Torn tag header:** `imgTornPolygon` (left=120, top=72, w=243, h=28) + "LANG THANG · QUANH ĐÂY"
- **Headline:** "Không cần lịch trình. / Nhưng nếu muốn đi bộ ra đây, / cũng không xa." — 52px Bold left=120 top=112
- **3 Place cards** (all bg=white, h=460, w=380, shadow):
  | Card | Node | Left | Top | Lifted? |
  |---|---|---|---|---|
  | WELL (Giếng cổ) | 129:1765 | 113.91 | 344.89 | baseline |
  | TEMPLE (Chùa) | 129:1769 | 532 | 322.33 | lifted (22.56px higher) |
  | MARKET (Chợ) | 129:1773 | 945.96 | 334.95 | middle |
  - Photo top: h=180, `8px` inset, object-cover
  - Headline: 24px Bold
  - Body: 14px Regular muted
  - Apply `.card-lift-hover` ✅

---

### S8 DUAL CTA — LIGHT SPLIT (node 129:1789, h=560)
- **No dark full bg** — two photo panels side by side
- **Left panel** (w=720, h=560): `imgCoBien15868375331` + `bg-[rgba(0,0,0,0.54)]` overlay
  - Label torn tag: `imgLabel15` — "TIẾP THEO · ĂN GÌ"
  - Headline + description + CTA button
  - Links to `/kham-pha/an-gi/`
- **Right panel** (w=720, h=560): `imgCoBien15868375332` + `bg-[rgba(0,0,0,0.4)]` overlay (lighter)
  - Label torn tag: `imgLabel16` — link to `/co-bien/`
  - "Tại sao nơi này vẫn còn nguyên vẹn"
- Apply `.panel-hover-group` ✅

---

### 🦶 FOOTER (node 129:1810, h=300)
- **REUSE:** `<Footer>` component y hệt Homepage + Cỏ Biển, không sửa gì

---

## Component plan

### REUSE 100% (không sửa)
- `<Nav>` — shared
- `<Footer>` — shared
- `<FrameSection>` — tất cả sections
- `<TornTag>` — torn tag labels
- `<WaterFilters>` — nếu có seagrass (Hero hoặc không dùng)

### Motion classes REUSE (từ Homepage/Cỏ Biển)
- `.ripple-echo` → S5 ripple rings
- `.card-lift-hover` → S7 place cards
- `.btn-primary-hover` → Hero CTA + S8 CTA buttons
- `.link-draw-hover` → text links
- `.panel-hover-group` → S8 dual panels
- `.bubble-cluster` → S1 factoid, bubbles nếu có

### BUILD MỚI (inline, không tách component nhỏ)
- `ODau.tsx` — page root
- `odau/HeroSection.tsx`
- `odau/DefinitionSection.tsx` (S1)
- `odau/TwoZonesSection.tsx` (S2)
- `odau/DayRhythm.tsx` (S3 — phức tạp nhất)
- `odau/TestimonialsSection.tsx` (S4)
- `odau/WhyStaySection.tsx` (S5)
- `odau/PracticalSection.tsx` (S6)
- `odau/NearbySection.tsx` (S7)
- `odau/DualCTA.tsx` (S8)

### KHÔNG CẦN `<Wave>` component
Trang Ở Đâu không có wave dividers giữa sections — transitions qua bg color change + gradient. Chỉ có line dividers ngắn trong testimonial cards.

---

## Asset folders
```
public/assets/odau/
├── hero/           imgHeroHienNha..., imgBubble1/2/3, imgLabel, imgLayer1, imgVuesaxBoldArrowDown
├── s1/             imgPhongNgNhCa..., imgEllipse
├── s2/             imgLang, imgHuong, imgLabel1-2 (card torn tags)
├── s3/             imgBuiSangSm, imgBuiSang, imgBuiChiu, imgBaTi, imgDemTuyChn, imgSangHomSau
│                   imgTimeDot1/3/7, imgLine (vertical), imgLabel3-5 (card labels)
├── s4/             imgImage1, imgLine1/2/3 (short dividers)
├── s5/             imgGroup2, imgRipple1/2/3, imgLabel6, imgImageWithFallback/1/2
├── s6/             imgLabel7-14 (card labels), imgLine4
├── s7/             imgWell, imgTemple, imgMarket, imgTornPolygon
└── s8/             imgCoBien15868375331/2, imgLabel15/16
```

---

## ⚠️ Items cần verify khi extract

1. **S3 Step 3 BAN NGÀY** — không thấy photo const. Scan assets khi download, có thể là `imgImageWithFallback` hoặc text-only card.
2. **S3 time labels cho dot 3, 6, 7** — chưa lấy được (cần `get_design_context` riêng cho S3 nếu cần confirm).
3. **S2 Card HUONG rotation** — chưa extract exact value (Card LANG = rotate(2deg), HUONG có thể negative).
4. **S4 Testimonial cards 2 & 3 positions** — chỉ có card 1 (left=112.67). Cards 2,3 cần confirm.
5. **S5 imgImageWithFallback/1/2** — unclear which section they belong to.
6. **Magic bytes** — mọi asset phải detect khi download, không assume extension.

---

## Checklist Bước 0 → Done ✅

- [x] Screenshot full frame lưu `figma-refs/odau/_full.png`
- [x] Section map tổng thể (11 sections, heights, tones, bg colors)
- [x] Asset inventory (57 assets, categorized by section)
- [x] Timeline S3 structure (7 steps, L/R alternating, dot positions, 264px spacing)
- [x] Component plan (reuse vs build new)
- [x] ⚠️ flags cho items cần verify khi extract

**Tiếp theo:** Bước 1 — Extract toàn bộ assets, detect magic bytes, verify load.
