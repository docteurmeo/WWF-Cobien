import FrameSection from '@/components/FrameSection';

/**
 * 🏡 Hero — Người mở cửa · 1440×888 · Figma node 129:1546
 *
 * Layout:
 *   - LEFT (120, 179, w=451): label + headline + subhead + CTA button (flex-col gap-24)
 *   - RIGHT (600, 100.11, w=778, h=720): large photo frame rotate(-1.5deg)
 *   - Bottom-left: 3 bubbles decorative + Layer_1 illustration
 *
 * Bg gradient warm sand (top → bottom): #f5edd8 → #e8d5b0 → rgba(201,180,138,0.85)
 *
 * Real assets in /public/assets/odau/.
 */
const A = '/WWF-Cobien/assets/odau';
const HERO_H = 888;

export default function ODHero() {
  return (
    <FrameSection
      height={HERO_H}
      background="linear-gradient(180deg, #f5edd8 0%, #e8d5b0 50%, rgba(201,180,138,0.85) 100%)"
    >
      {/* Large photo frame — homestay porch chiều, võng + lưới phơi.
          Figma: wrapper 778×720 flex-centered → inner rotate(-1.5deg), card 760×700 white bg + heavy shadow */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 600, top: 100.11, width: 778.063, height: 719.655 }}
      >
        <div className="flex-none" style={{ transform: 'rotate(-1.5deg)' }}>
          <div
            className="bg-white relative overflow-hidden"
            style={{
              width: 760,
              height: 700,
              boxShadow: '0px 20px 60px 0px rgba(13,38,33,0.18)',
            }}
          >
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ left: 8, top: 8, width: 744, height: 684, position: 'absolute' }}
              src={`${A}/imgHeroHienNhaHomestayBuiChiuVongLiPhiAnhNngNghieng.jpg`}
            />
          </div>
        </div>
      </div>

      {/* Hero Content — LEFT column at (120, 179) w=451 */}
      <div
        className="absolute flex flex-col items-start"
        style={{ left: 120, top: 179, width: 451, gap: 24 }}
      >
        {/* Label torn tag — imgLabel.svg behind, white text overlay */}
        <div className="relative" style={{ width: 224, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel.svg`} />
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
              HOMESTAY · CÙ LAO CHÀM
            </p>
          </div>
        </div>

        {/* Headline — Geologica Bold 52 tracking-[-0.8] line 1.08 */}
        <h1
          className="font-display font-bold text-[#1a2e2d] w-full"
          style={{ fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.8px' }}
        >
          <span>Người mở cửa đón bạn không phải lễ tân. </span>
          <span>Mà là chính chủ nhà.</span>
        </h1>

        {/* Subhead — Lora Italic 18 muted opacity-88 */}
        <div
          className="font-quote italic text-[#5a7370] w-full"
          style={{ fontSize: 18, opacity: 0.88 }}
        >
          <p style={{ margin: 0 }}>Ở Cù Lao Chàm, chỗ ở không phải điểm kết thúc của một ngày.</p>
          <p style={{ margin: 0 }}>Đó là nơi câu chuyện thật về hòn đảo bắt đầu.</p>
        </div>

        {/* CTA button — bg #2a9b97, padding 28/15, rounded-2, teal shadow */}
        <a
          href="#s1"
          className="btn-primary-hover arrow-down inline-flex items-center font-display font-medium text-white whitespace-nowrap"
          style={{
            background: '#2a9b97',
            padding: '15px 28px',
            borderRadius: 2,
            fontSize: 14,
            letterSpacing: '0.5px',
            lineHeight: 1,
            gap: 10,
            boxShadow: '0px 8px 20px 0px rgba(41,153,150,0.35)',
          }}
        >
          <span>Khám phá cách ở lại</span>
          <span className="arrow-nudge"> ↓</span>
        </a>
      </div>

      {/* Bubble decorations bottom-left — gentle breathe via .bubble-cluster */}
      <div
        className="absolute bubble-cluster"
        style={{ left: 120, top: 640, width: 64, height: 64, ['--bub-dur' as any]: '6.8s', ['--bub-delay' as any]: '0s' }}
      >
        <img alt="" className="block w-full h-full" src={`${A}/imgBubble1.svg`} />
      </div>
      <div
        className="absolute bubble-cluster"
        style={{ left: 200, top: 700, width: 36, height: 36, ['--bub-dur' as any]: '5.4s', ['--bub-delay' as any]: '-1.6s' }}
      >
        <img alt="" className="block w-full h-full" src={`${A}/imgBubble2.svg`} />
      </div>
      <div
        className="absolute bubble-cluster"
        style={{ left: 80, top: 760, width: 24, height: 24, ['--bub-dur' as any]: '4.2s', ['--bub-delay' as any]: '-0.8s' }}
      >
        <img alt="" className="block w-full h-full" src={`${A}/imgBubble3.svg`} />
      </div>

      {/* Layer_1 small illustration — bottom-left at bottom:72, left:155, 131×101 */}
      <div className="absolute" style={{ left: 155, bottom: 72, width: 131, height: 101 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgLayer1.svg`} />
      </div>
    </FrameSection>
  );
}
