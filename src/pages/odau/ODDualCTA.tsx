import FrameSection from '@/components/FrameSection';

/**
 * S8 — Dual CTA Light Split · 1440×560 · Figma 129:1789
 *
 * Layout: 2 photo panels (each 720×560) side-by-side with dark overlay:
 *   - LEFT  photo imgCoBien15868375331.jpg + bg-[rgba(0,0,0,0.54)] overlay
 *   - RIGHT photo imgCoBien15868375332.jpg + bg-[rgba(0,0,0,0.4)] overlay
 *
 *   LEFT content (120, 70, 507) gap-24: label TIẾP THEO · ĂN GÌ + 42px headline + body + teal CTA
 *   RIGHT content (770, 70, 588) gap-24: label VÌ SAO · ĐẰNG SAU + 42px headline + body + coral CTA
 *
 *   Photos must be full-bleed (stretch viewport on ≥1440). Use FrameSection fullBleed slot
 *   so panels widen with the viewport instead of staying locked to a 1440 grid.
 *
 * Bg: #e8d5b0 (visible behind if photos fail to load)
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 560;

export default function ODDualCTA() {
  return (
    <FrameSection
      height={SECTION_H}
      background="#e8d5b0"
      fullBleed={
        <>
          {/* LEFT half photo + overlay — full-bleed from viewport left edge to center.
              Ken Burns slow drift trên img + overflow:hidden trên panel để scale 1.08 không lộ ra. */}
          <div
            className="absolute panel-hover-group"
            style={{ left: 0, top: 0, width: '50%', height: SECTION_H, zIndex: 1, overflow: 'hidden' }}
          >
            <img alt="" className="absolute inset-0 w-full h-full object-cover ken-burns" src={`${A}/imgCoBien15868375331.jpg`} />
            <div className="absolute inset-0 panel-overlay" style={{ background: 'rgba(0,0,0,0.54)' }} />
          </div>

          {/* RIGHT half photo + overlay — full-bleed from center to viewport right edge.
              Ken Burns lệch pha 15s (half cycle) để 2 panel không zoom đồng bộ. */}
          <div
            className="absolute panel-hover-group"
            style={{ left: '50%', top: 0, width: '50%', height: SECTION_H, zIndex: 1, overflow: 'hidden' }}
          >
            <img alt="" className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ animationDelay: '-15s' }} src={`${A}/imgCoBien15868375332.jpg`} />
            <div className="absolute inset-0 panel-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
          </div>
        </>
      }
    >
      {/* LEFT — Conservation (CTA → Ăn gì) */}
      <div
        className="absolute flex flex-col items-start overflow-hidden"
        style={{ left: 120, top: 70, width: 507, height: 440, paddingTop: 30, gap: 24 }}
      >
        <div className="relative" style={{ width: 186, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel15.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)',
              padding: '10px 16px',
            }}
          >
            <p
              className="font-display font-semibold text-white whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
            >
              TIẾP THEO · ĂN GÌ
            </p>
          </div>
        </div>

        <p
          className="font-display font-bold text-white"
          style={{ width: 507, fontSize: 42, lineHeight: 1.15, letterSpacing: '-0.8px' }}
        >
          Từ chuyến ghe sáng sớm đến bàn ăn — chỉ cách vài giờ.
        </p>

        <div
          className="font-display text-white whitespace-nowrap"
          style={{ fontSize: 16, opacity: 0.85 }}
        >
          <p style={{ margin: 0, lineHeight: '24px' }}>Mùa nào thức nấy. Hỏi chủ nhà ăn gì trước —</p>
          <p style={{ margin: 0, lineHeight: '24px' }}>rồi cứ thế biển sẽ trả lời.</p>
        </div>

        <a
          href="#/kham-pha/an-gi/"
          className="btn-primary-hover inline-flex items-center font-display font-medium text-white whitespace-pre"
          style={{
            background: '#1a7f7c',
            padding: '15px 28px',
            borderRadius: 2,
            fontSize: 14,
            letterSpacing: '0.5px',
            lineHeight: 1,
            boxShadow: '0px 8px 16px 0px rgba(26,128,125,0.35)',
          }}
        >
          {`Khám phá ăn gì  `}<span className="arrow-nudge">→</span>
        </a>
      </div>

      {/* RIGHT — Tourism (CTA → Cỏ biển) */}
      <div
        className="absolute flex flex-col items-start overflow-hidden"
        style={{ left: 770, top: 70, width: 588, height: 440, paddingTop: 30, gap: 24 }}
      >
        <div className="relative" style={{ width: 153, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel16.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 'calc(50% + 0.5px)', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)',
              padding: '10px 16px',
            }}
          >
            <p
              className="font-display font-semibold text-white whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
            >
              VÌ SAO · ĐẰNG SAU
            </p>
          </div>
        </div>

        <div
          className="font-display font-bold text-white whitespace-nowrap"
          style={{ fontSize: 42, letterSpacing: '-0.8px' }}
        >
          <p style={{ margin: 0, lineHeight: 1.15 }}>Tại sao nơi này</p>
          <p style={{ margin: 0, lineHeight: 1.15 }}>vẫn còn nguyên vẹn.</p>
        </div>

        <div
          className="font-display text-white whitespace-nowrap"
          style={{ fontSize: 16, opacity: 0.85 }}
        >
          <p style={{ margin: 0, lineHeight: '24px' }}>Câu chuyện về thứ đang giữ cho</p>
          <p style={{ margin: 0, lineHeight: '24px' }}>bữa ăn và mặt nước này tiếp tục tồn tại.</p>
        </div>

        <a
          href="#/co-bien/"
          className="btn-primary-hover inline-flex items-center font-display font-medium text-white whitespace-pre"
          style={{
            background: '#e86b35',
            padding: '15px 28px',
            borderRadius: 2,
            fontSize: 14,
            letterSpacing: '0.5px',
            lineHeight: 1,
            boxShadow: '0px 8px 16px 0px rgba(232,107,54,0.35)',
          }}
        >
          {`Về Cỏ biển  `}<span className="arrow-nudge">→</span>
        </a>
      </div>
    </FrameSection>
  );
}
