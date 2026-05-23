/**
 * S8 Dual CTA — 1440×560 at y=5524. Pixel-perfect from Figma node 57:2.
 * Bg: 2 photo halves of co bien (real photos with dark overlay) + text + CTAs.
 */
const A = '/WWF-Cobien/assets/s8';

export default function DualCTA() {
  return (
    <section className="relative" style={{ width: 1440, height: 560, background: '#e8d5b0', overflow: 'hidden' }}>
      {/* LEFT bg photo (0,0) 720x560 with 0.4 dark overlay */}
      <div className="absolute" style={{ left: 0, top: 0, width: 720, height: 560 }}>
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={`${A}/imgCoBien15868375331.png`} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
      </div>

      {/* RIGHT bg photo (720,0) 720x560 with 0.27 dark overlay */}
      <div className="absolute" style={{ left: 720, top: 0, width: 720, height: 560 }}>
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={`${A}/imgCoBien15868375332.png`} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.27)' }} />
      </div>

      {/* LEFT Conservation Block (120, 70) 588×440 */}
      <div
        className="absolute flex flex-col items-start overflow-clip"
        style={{ left: 120, top: 70, width: 588, height: 440, paddingTop: 30, gap: 24 }}
      >
        {/* Label */}
        <div className="relative" style={{ width: 186, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel.png`} />
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

        {/* CTA Left */}
        <div
          className="flex items-center overflow-clip rounded-[2px]"
          style={{
            background: '#1a7f7c',
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 15,
            paddingBottom: 15,
            boxShadow: '0px 8px 16px 0px rgba(26,128,125,0.35)',
          }}
        >
          <p
            className="font-display font-medium text-white whitespace-pre"
            style={{ fontSize: 14, lineHeight: 1, letterSpacing: '0.5px' }}
          >
            {'Đọc câu chuyện cỏ biển  →'}
          </p>
        </div>
      </div>

      {/* RIGHT Tourism Block (770, 70) 588×440 */}
      <div
        className="absolute flex flex-col items-start overflow-clip"
        style={{ left: 770, top: 70, width: 588, height: 440, paddingTop: 30, gap: 24 }}
      >
        {/* Label */}
        <div className="relative" style={{ width: 144, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel1.png`} />
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

        {/* CTA Right */}
        <div
          className="flex items-center overflow-clip rounded-[2px]"
          style={{
            background: '#e86b35',
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 15,
            paddingBottom: 15,
            boxShadow: '0px 8px 16px 0px rgba(232,107,54,0.35)',
          }}
        >
          <p
            className="font-display font-medium text-white whitespace-pre"
            style={{ fontSize: 14, lineHeight: 1, letterSpacing: '0.5px' }}
          >
            {'Khám phá Cù Lao Chàm  →'}
          </p>
        </div>
      </div>
    </section>
  );
}
