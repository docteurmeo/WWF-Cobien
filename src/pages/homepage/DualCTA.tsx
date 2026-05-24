import FrameSection from '@/components/FrameSection';

/**
 * S8 Dual CTA — 1440×560 at y=5524. Pixel-perfect from Figma node 57:2.
 * Bg: 2 photo halves of co bien (real photos with dark overlay) + text + CTAs.
 *
 * Responsive: 2 photo halves go in fullBleed slot, each at 50vw width with
 * `background-size: cover` — preserves photo ratio while filling viewport edge-to-edge.
 * Text/CTA stay in centered 1440 grid.
 */
const A = '/WWF-Cobien/assets/s8';

export default function DualCTA() {
  return (
    <FrameSection
      height={560}
      background="#e8d5b0"
      fullBleed={
        <>
          {/* LEFT half — group hover: ảnh sáng lên khi hover (overlay 0.4→0.22) */}
          <div
            className="absolute top-0 bottom-0 panel-hover-group"
            style={{
              left: 0,
              width: '50%',
              backgroundImage: `url(${A}/imgCoBien15868375331.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 panel-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
          </div>
          {/* RIGHT half — group hover lighter (0.27→0.13) */}
          <div
            className="absolute top-0 bottom-0 panel-hover-group"
            style={{
              left: '50%',
              width: '50%',
              backgroundImage: `url(${A}/imgCoBien15868375332.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 panel-overlay panel-overlay-light" style={{ background: 'rgba(0,0,0,0.27)' }} />
          </div>
        </>
      }
    >
      {/* LEFT Conservation Block (120, 70) 588×440 */}
      <div
        className="absolute flex flex-col items-start overflow-clip"
        style={{ left: 120, top: 70, width: 588, height: 440, paddingTop: 30, gap: 24, zIndex: 2 }}
      >
        {/* Label */}
        <div className="relative" style={{ width: 186, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
          >
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
            >
              tìm hiểu về Bảo tồn
            </p>
          </div>
        </div>

        {/* H3 */}
        <div
          className="font-display font-bold text-white whitespace-nowrap"
          style={{ fontSize: 42, letterSpacing: '-0.8px', lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Cỏ biển là gì.</p>
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Tại sao đang mất dần.</p>
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Điều gì đang được làm</p>
          <p style={{ lineHeight: 1.15 }}>để giữ lại.</p>
        </div>

        {/* CTA Left — teal primary */}
        <button
          className="flex items-center overflow-clip rounded-[2px] btn-primary-hover cursor-pointer"
          style={{
            background: '#1a7f7c',
            gap: 8,
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 15,
            paddingBottom: 15,
            boxShadow: '0px 8px 16px 0px rgba(26,128,125,0.35)',
            border: 0,
          }}
        >
          <p
            className="font-display font-medium text-white whitespace-pre"
            style={{ fontSize: 14, lineHeight: 1, letterSpacing: '0.5px' }}
          >
            Đọc câu chuyện cỏ biển
          </p>
          <span className="arrow-nudge text-white" style={{ fontSize: 14 }}>→</span>
        </button>
      </div>

      {/* RIGHT Tourism Block (770, 70) 588×440 */}
      <div
        className="absolute flex flex-col items-start overflow-clip"
        style={{ left: 770, top: 70, width: 588, height: 440, paddingTop: 30, gap: 24, zIndex: 2 }}
      >
        {/* Label */}
        <div className="relative" style={{ width: 144, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel1.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
          >
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
            >
              LÊN KẾ HOẠCH
            </p>
          </div>
        </div>

        {/* H3 */}
        <div
          className="font-display font-bold text-white whitespace-nowrap"
          style={{ fontSize: 42, letterSpacing: '-0.8px', lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Cách ra đảo.</p>
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Ở đâu, ăn gì, đi đâu.</p>
          <p style={{ lineHeight: 1.15, marginBottom: 0 }}>Vì sao nên ở lại</p>
          <p style={{ lineHeight: 1.15 }}>lâu hơn một ngày.</p>
        </div>

        {/* CTA Right — orange primary */}
        <button
          className="flex items-center overflow-clip rounded-[2px] btn-primary-hover cursor-pointer"
          style={{
            background: '#e86b35',
            gap: 8,
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 15,
            paddingBottom: 15,
            boxShadow: '0px 8px 16px 0px rgba(232,107,54,0.35)',
            border: 0,
          }}
        >
          <p
            className="font-display font-medium text-white whitespace-pre"
            style={{ fontSize: 14, lineHeight: 1, letterSpacing: '0.5px' }}
          >
            Khám phá Cù Lao Chàm
          </p>
          <span className="arrow-nudge text-white" style={{ fontSize: 14 }}>→</span>
        </button>
      </div>
    </FrameSection>
  );
}
