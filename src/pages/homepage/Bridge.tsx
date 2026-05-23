/**
 * S4 Bridge — 1440×650 at y=3036. Pixel-perfect from Figma node 55:2.
 * Background: horizontal gradient L→R (off-white → sand → light-teal).
 * 2 wave dividers (top flipped, bottom normal). 6 diving bubbles. Text in teal.
 */
const A = '/WWF-Cobien/assets/s4';

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
    <section
      className="relative"
      style={{
        width: 1440,
        height: 650,
        // CRITICAL: gradient is LEFT→RIGHT not top→bottom (Figma uses bg-gradient-to-r)
        background: 'linear-gradient(to right, #f8f5ef 0%, #e8d5b0 50%, rgba(125,211,208,0.85) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Top WaveDivider (rotated 180°) — at y=0, 1440×80 */}
      <div className="absolute" style={{ left: 0, top: 0, width: 1440, height: 80 }}>
        <div className="flex items-center justify-center w-full h-full">
          <div style={{ transform: 'rotate(180deg)', width: 1440, height: 80 }}>
            <div className="relative w-full h-full overflow-clip">
              <div className="absolute" style={{ left: 0, right: 0, top: '31.77%', bottom: 0 }}>
                <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgVector1.svg`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Diving Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.src}
          className="absolute"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
        >
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/${b.src}.svg`} />
        </div>
      ))}

      {/* S4 Text Content at (330, 140) 780w, items-center */}
      <div
        className="absolute flex flex-col items-center overflow-clip"
        style={{ left: 330, top: 140, width: 780, gap: 16 }}
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

        {/* Divider Line 56×0 */}
        <div className="relative" style={{ width: 56, height: 0 }}>
          <img alt="" className="block w-full" src={`${A}/imgLine.svg`} style={{ position: 'absolute', top: -2 }} />
        </div>

        {/* Big closing text — color is OCEAN PRIMARY teal, not dark ink */}
        <div
          className="font-display font-bold text-center whitespace-nowrap"
          style={{ color: '#2a9b97', fontSize: 52, letterSpacing: '-0.8px', lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.18, marginBottom: 0 }}>Tất cả những điều đó</p>
          <p style={{ lineHeight: 1.18, marginBottom: 0 }}>được giữ lại bởi thứ bạn</p>
          <p style={{ lineHeight: 1.18 }}>chưa bao giờ nhìn thấy.</p>
        </div>
      </div>

      {/* Bottom WaveDivider — at bottom, 1440×80, fills with S5 dark green color */}
      <div className="absolute flex flex-col" style={{ left: 0, bottom: 0, width: 1440, height: 80 }}>
        <div className="relative w-full h-full overflow-clip">
          <div className="absolute" style={{ left: 0, right: 0, top: '31.77%', bottom: 0 }}>
            <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgVector.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
}
