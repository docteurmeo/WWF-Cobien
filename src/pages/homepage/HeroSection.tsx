/**
 * S1 Hero — 1440×920 at y=100. Pixel-perfect from Figma node 51:14.
 * Real assets in /public/assets/heros1/
 */
const A = '/WWF-Cobien/assets/heros1';

export default function HeroSection() {
  return (
    <section
      className="relative size-full"
      style={{
        width: 1440,
        height: 920,
        background: 'linear-gradient(180deg, #f5edd8 0%, #e8d5b0 45%, #7dd3d0 100%)',
      }}
      data-name="S1 Hero — Collage Moment"
    >
      {/* Co bien field — bottom 211px */}
      <div className="absolute" style={{ left: 0, top: 709, width: 1440, height: 211 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgCoBien.png`} />
      </div>

      {/* Turtle silhouette at (50, 668) 290×182 */}
      <div className="absolute" style={{ left: 50, top: 668, width: 290, height: 182 }}>
        <img alt="" className="block w-full h-full object-cover" src={`${A}/img202605211045051.png`} />
      </div>

      {/* CO₂ Bubble cluster at (200, 80) 738×394 */}
      <div className="absolute" style={{ left: 200, top: 80, width: 738, height: 394 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgCoBubble.png`} />
      </div>

      {/* Big photo at (764, 75) 540×490 rotated -1.5° */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 764, top: 75, width: 552.642, height: 503.968 }}
      >
        <div style={{ transform: 'rotate(-1.5deg)' }}>
          <div
            className="flex flex-col items-start bg-white"
            style={{
              width: 540,
              height: 490,
              filter: 'drop-shadow(4px 8px 18px rgba(28,43,26,0.28))',
            }}
          >
            <div
              className="flex flex-col gap-3 bg-white"
              style={{ width: 540, height: 490, paddingTop: 5.812, paddingLeft: 6, paddingRight: 6 }}
            >
              <div style={{ width: '100%', height: 440, position: 'relative', background: '#b8ccba' }}>
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${A}/imgImageThuynDanhCaTrenVungBinXanhNgcCuLaoChamNhinTTrenCao.png`}
                />
              </div>
              <p
                className="font-mono text-center"
                style={{ width: '100%', fontSize: 12, color: '#6b5c3e', lineHeight: '12.375px' }}
              >
                Bãi Hương · Cù Lao Chàm · Hội An · Quảng Nam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small photo at (621, 437) 220×210 rotated +3° */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 621, top: 437, width: 230.689, height: 221.226 }}
      >
        <div style={{ transform: 'rotate(3deg)' }}>
          <div
            className="flex flex-col items-start bg-white"
            style={{
              width: 220,
              height: 210,
              filter: 'drop-shadow(4px 8px 18px rgba(28,43,26,0.28))',
            }}
          >
            <div
              className="flex flex-col gap-3 bg-white"
              style={{ width: 220, height: 210, paddingTop: 5.813, paddingLeft: 6, paddingRight: 6 }}
            >
              <div style={{ width: '100%', height: 160, position: 'relative', background: '#b8ccba' }}>
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`${A}/imgImageDiThuynDanhCaTrongVungNcXanhLa.png`}
                />
              </div>
              <p
                className="font-mono text-center"
                style={{ width: '100%', fontSize: 9, color: '#6b5c3e', lineHeight: '12.375px' }}
              >
                Ra khơi · Bình minh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fish at (620, 107) 245×107 */}
      <div className="absolute" style={{ left: 620, top: 107, width: 245, height: 107 }}>
        <img alt="" className="block w-full h-full object-cover" src={`${A}/img202605211044401.png`} />
      </div>

      {/* Hero Content at (120, 200) 588×337 */}
      <div
        className="absolute flex flex-col items-start overflow-clip"
        style={{ left: 120, top: 200, width: 588, gap: 20 }}
      >
        {/* Label torn tag — SVG image from Figma */}
        <div className="relative" style={{ width: 266, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel.png`} />
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: '50%',
              top: 'calc(50% + 0.5px)',
              transform: 'translate(-50%, -50%)',
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
            >
              Cẩm nang du lịch Cù Lao Chàm
            </p>
          </div>
        </div>

        {/* H1: Theo dấu / Cỏ biển */}
        <div
          className="font-display font-black whitespace-nowrap"
          style={{ color: '#1a2e2d', fontSize: 76, letterSpacing: '-2px', lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.08, marginBottom: 0 }}>Theo dấu</p>
          <p style={{ lineHeight: 1.08 }}>Cỏ biển</p>
        </div>

        {/* Subhead — Lora Italic 22px */}
        <p className="font-quote italic whitespace-nowrap" style={{ color: '#5a7370', fontSize: 22, lineHeight: 1.55 }}>
          Khám phá Cù Lao Chàm, từ Nhà của biển.
        </p>

        {/* CTA Button */}
        <div
          className="flex items-center font-display font-medium text-white whitespace-nowrap rounded-[2px] overflow-clip"
          style={{
            background: '#e86b35',
            gap: 8,
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 16,
            paddingBottom: 16,
            fontSize: 14,
            lineHeight: 1,
            letterSpacing: '0.5px',
            boxShadow: '0px 8px 20px 0px rgba(41,153,150,0.35)',
          }}
        >
          <p>Khám phá hòn đảo</p>
          <p> ↓</p>
        </div>
      </div>

      {/* WaveDivider at bottom — 1440×80 */}
      <div className="absolute flex flex-col items-start" style={{ left: 0, bottom: 0, width: 1440, height: 80 }}>
        <div className="relative overflow-clip" style={{ width: '100%', height: 80 }}>
          <div className="absolute" style={{ left: 0, right: 0, bottom: 0, top: '31.77%' }}>
            <img alt="" className="block w-full h-full" src={`${A}/imgVector.png`} />
          </div>
        </div>
      </div>

      {/* Scroll hint centered at top 886 */}
      <p
        className="absolute font-display font-normal uppercase text-center whitespace-pre"
        style={{
          left: '50%',
          top: 886,
          transform: 'translateX(-50%)',
          color: '#225322',
          fontSize: 12,
          opacity: 0.55,
        }}
      >{'↓  cuộn để khám phá'}</p>
    </section>
  );
}
