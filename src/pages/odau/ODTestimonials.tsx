import FrameSection from '@/components/FrameSection';

/**
 * S4 — Giọng của người đã ở lại · 1440×720 · Figma 129:1657
 *
 * Layout:
 *   - Full-bleed bg photo (imgImage1, w=1440 h=961, vertically centered offset)
 *     ⚠️ imgImage1 is a 2.8KB placeholder — figma intent: subtle texture. Keep as-is.
 *   - Top label "review" centered (left=720, top=75, w=86)
 *   - Headline "Những người đã ở lại nói gì." centered 52px Bold top=120
 *   - 3 testimonial cards (bg #f5edd8, w=380, h=280-300, padding 24):
 *       Card 1 — teal accent  · left=112.67, top=280, rotate(1.5deg)
 *       Card 2 — coral accent · left=540,    top=254.69, rotate(-0.8deg)
 *       Card 3 — green accent · left=960,    top=276.74, rotate(-2deg)
 *
 *   Each card:
 *     - Giant quote mark `"` at top-left (96px Black, opacity-30, color = accent)
 *     - Quote text Lora Medium Italic 18px center area
 *     - Short line divider (40×2) — ⚠️ wrap img in fixed-height container
 *     - "— KHÁCH LƯU TRÚ" attribution SemiBold 12 letter-spacing 1 uppercase, accent color
 *
 * Bg: #f5edd8
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 720;

type TCard = {
  left: number; top: number; wrapperW: number; wrapperH: number;
  rotate: number;
  cardH: number;
  accent: string;
  quoteTop: number; // top px of quote `"` (always 8)
  textTop: number;  // top of italic body (100)
  lineTop: number;
  attribTop: number;
  lineImg: string;
  body: React.ReactNode;
};

const CARDS: TCard[] = [
  {
    left: 112.67, top: 280, wrapperW: 387.199, wrapperH: 289.851,
    rotate: 1.5, cardH: 280, accent: '#2a9b97',
    quoteTop: 8, textTop: 100, lineTop: 230, attribTop: 248,
    lineImg: 'imgLine.svg',
    body: (
      <p style={{ margin: 0, lineHeight: 1.52 }}>{`"Trải nghiệm tuyệt vời đến nỗi chúng tôi quyết định thay đổi kế hoạch và ở lại thêm một đêm nữa."`}</p>
    ),
  },
  {
    left: 540, top: 254.69, wrapperW: 384.152, wrapperH: 305.276,
    rotate: -0.8, cardH: 300, accent: '#e86b35',
    quoteTop: 8, textTop: 100, lineTop: 250, attribTop: 268,
    lineImg: 'imgLine1.svg',
    body: (
      <p style={{ margin: 0, lineHeight: 1.52 }}>{`"Điều làm nên sự đặc biệt và đáng yêu của nơi này chính là chủ nhà, người hết lòng quan tâm và chăm sóc mọi thứ."`}</p>
    ),
  },
  {
    left: 960, top: 276.74, wrapperW: 389.54, wrapperH: 293.091,
    rotate: -2, cardH: 280, accent: '#3d8b3d',
    quoteTop: 8, textTop: 100, lineTop: 230, attribTop: 248,
    lineImg: 'imgLine2.svg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.52 }}>{`"Một chốn bình yên đích thực.`}</p>
        <p style={{ margin: 0, lineHeight: 1.52 }}>{`Tôi đã hoàn toàn hòa mình vào cuộc sống địa phương."`}</p>
      </>
    ),
  },
];

export default function ODTestimonials() {
  return (
    <FrameSection
      height={SECTION_H}
      background="#f5edd8"
      fullBleed={
        // Backdrop photo — sunset over the bay from a homestay balcony.
        // Re-extracted via Figma render endpoint (raw asset endpoint returns an empty placeholder).
        // Full-bleed: stretches viewport edge to edge (≥1440 → up to 1920+), object-cover scales
        // the 1440×720 photo to fill width without leaving side gaps.
        <div
          className="absolute"
          style={{ left: 0, right: 0, top: 0, height: 720, zIndex: 1, overflow: 'hidden' }}
        >
          {/* Slow Ken Burns drift — 30s loop, gợi "câu chuyện đang sống" thay vì backdrop tĩnh.
              overflow:hidden trên wrapper để scale 1.08 không tràn ra ngoài section. */}
          <img
            alt=""
            className="block w-full h-full object-cover ken-burns"
            src={`${A}/imgImage1.jpg`}
          />
        </div>
      }
    >
      {/* Top label "review" centered */}
      <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: 75, width: 86, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel5.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: '50%',
            top: 'calc(50% + 0.5px)',
            transform: 'translate(-50%, -50%)',
            padding: '10px 16px',
          }}
        >
          <p
            className="font-display font-semibold text-white whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
          >
            review
          </p>
        </div>
      </div>

      {/* Centered headline */}
      <p
        className="absolute font-display font-bold text-[#1a2e2d] text-center"
        style={{
          left: 720,
          top: 120,
          width: 1200,
          fontSize: 52,
          lineHeight: 1.08,
          letterSpacing: '-0.8px',
          transform: 'translateX(-50%)',
        }}
      >
        Những người đã ở lại nói gì.
      </p>

      {CARDS.map((c, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left: c.left, top: c.top, width: c.wrapperW, height: c.wrapperH }}
        >
          <div className="flex-none" style={{ transform: `rotate(${c.rotate}deg)` }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: 380,
                height: c.cardH,
                background: '#f5edd8',
                borderRadius: 2,
                boxShadow: '0px 16px 36px 0px rgba(13,38,33,0.12)',
              }}
            >
              {/* Big quote mark */}
              <p
                className="absolute font-display font-black whitespace-nowrap"
                style={{
                  left: 24, top: c.quoteTop, color: c.accent, opacity: 0.3,
                  fontSize: 96, lineHeight: 1, letterSpacing: '-2px',
                }}
              >
                {`"`}
              </p>
              {/* Quote body */}
              <div
                className="absolute font-quote italic font-medium text-[#1a2e2d]"
                style={{ left: 24, top: c.textTop, width: 332, fontSize: 18, lineHeight: 1.52 }}
              >
                {c.body}
              </div>
              {/* Line divider — wrap in explicit height to avoid SVG intrinsic 150px bug */}
              <div className="absolute" style={{ left: 24, top: c.lineTop, width: 40, height: 2 }}>
                <img alt="" className="block w-full h-full" src={`${A}/${c.lineImg}`} />
              </div>
              {/* Attribution */}
              <p
                className="absolute font-display font-semibold whitespace-nowrap"
                style={{
                  left: 24, top: c.attribTop, color: c.accent,
                  fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase',
                }}
              >
                — KHÁCH LƯU TRÚ
              </p>
            </div>
          </div>
        </div>
      ))}
    </FrameSection>
  );
}
