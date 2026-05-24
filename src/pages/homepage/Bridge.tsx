import FrameSection from '@/components/FrameSection';
import Wave from '@/components/Wave';

/**
 * S4 Bridge — 1440×650 at y=3036. Pixel-perfect from Figma node 55:2.
 * Background: horizontal gradient L→R (off-white → sand → light-teal).
 * 2 code-generated wave dividers (top flipped fills with prev section #f8f5ef,
 * bottom fills with next section #225322). 6 diving bubbles. Text in teal.
 *
 * Responsive: bg gradient + waves extend to viewport edges. Waves keep FIXED
 * 80px height — no proportional scaling at 1920px.
 */
const A = '/WWF-Cobien/assets/s4';
const PREV_BG = '#f8f5ef'; // ThreeCards bg
const NEXT_BG = '#225322'; // SeagrassNarrator bg

const bubbles = [
  { src: 'imgDivingBubble1', x: 180, y: 200, size: 24 },
  { src: 'imgDivingBubble2', x: 280, y: 300, size: 16 },
  { src: 'imgDivingBubble3', x: 1180, y: 160, size: 28 },
  { src: 'imgDivingBubble4', x: 1280, y: 260, size: 20 },
  { src: 'imgDivingBubble5', x: 820, y: 380, size: 14 },
  { src: 'imgDivingBubble6', x: 480, y: 420, size: 22 },
];

export default function Bridge() {
  return (
    <FrameSection
      height={650}
      background="linear-gradient(to right, #f8f5ef 0%, #e8d5b0 50%, rgba(125,211,208,0.85) 100%)"
      fullBleed={
        <>
          {/* Top wave (flipped) — prev section color dips down into bridge */}
          <div className="absolute left-0 right-0 top-0" style={{ zIndex: 2 }}>
            <Wave fill={PREV_BG} flip height={80} amplitude={14} wavelength={420} speedSeconds={18} phase={Math.PI / 2} />
          </div>
          {/* Bottom wave — next section dark green rises up into bridge */}
          <div className="absolute left-0 right-0 bottom-0" style={{ zIndex: 2 }}>
            <Wave fill={NEXT_BG} height={80} amplitude={14} wavelength={420} speedSeconds={16} />
          </div>
        </>
      }
    >
      {/* 6 Diving Bubbles — staggered ascend, lặp lại tạo cảm giác bọt liên tục */}
      {bubbles.map((b, i) => (
        <div
          key={b.src}
          className="absolute bubble-rise"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            zIndex: 3,
            ['--bub-dur' as string]: `${6 + (i % 3) * 1.4}s`,
            ['--bub-delay' as string]: `${i * 0.9}s`,
            ['--bub-op' as string]: 0.85 + (i % 2) * 0.1,
          } as React.CSSProperties}
        >
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/${b.src}.svg`} />
        </div>
      ))}

      {/* S4 Text Content at (330, 140) 780w, items-center */}
      <div
        className="absolute flex flex-col items-center overflow-clip"
        style={{ left: 330, top: 140, width: 780, gap: 16, zIndex: 3 }}
      >
        <p
          className="font-quote italic text-center whitespace-nowrap"
          style={{ color: '#1a2e2d', fontSize: 18, opacity: 0.78, lineHeight: 'normal' }}
        >
          Bữa ăn bạn vừa thưởng thức.
        </p>
        <p
          className="font-quote italic text-center whitespace-nowrap"
          style={{ color: '#1a2e2d', fontSize: 18, opacity: 0.78, lineHeight: 'normal' }}
        >
          Mặt nước trong xanh bạn đang bơi.
        </p>
        <p
          className="font-quote italic text-center whitespace-nowrap"
          style={{ color: '#1a2e2d', fontSize: 18, opacity: 0.78, lineHeight: 'normal' }}
        >
          Bãi biển chưa bị xói lở.
        </p>

        {/* Divider Line */}
        <div className="relative" style={{ width: 56, height: 0 }}>
          <div className="absolute" style={{ top: -2, left: 0, right: 0, bottom: 0, height: 2 }}>
            <img alt="" className="block w-full h-full" src={`${A}/imgLine.svg`} />
          </div>
        </div>

        {/* Big closing text */}
        <div
          className="font-display font-bold text-center whitespace-nowrap"
          style={{ color: '#2a9b97', fontSize: 52, letterSpacing: '-0.8px', lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.18, marginBottom: 0 }}>Tất cả những điều đó</p>
          <p style={{ lineHeight: 1.18, marginBottom: 0 }}>được giữ lại bởi thứ bạn</p>
          <p style={{ lineHeight: 1.18 }}>chưa bao giờ nhìn thấy.</p>
        </div>
      </div>
    </FrameSection>
  );
}
