/**
 * S5 Seagrass Narrator (DARK collage moment) — 1440×820 at y=3686.
 * Pixel-perfect from Figma node 55:17.
 */
import FrameSection from '@/components/FrameSection';

const A = '/WWF-Cobien/assets/s5';

const stats = [
  { num: '35×', label: 'hấp thụ CO₂ nhanh hơn rừng trên cạn' },
  { num: '80%', label: 'loài hải sản thương mại phụ thuộc vào cỏ biển' },
  { num: '800T', label: 'carbon lưu giữ trên mỗi hecta' },
  { num: '17 ha', label: 'còn lại tại Cù Lao Chàm — đang thu hẹp' },
];

export default function SeagrassNarrator() {
  return (
    <FrameSection
      height={820}
      background="#225322"
      fullBleed={
        <div
          className="seagrass-field"
          style={{
            bottom: 0,
            height: 164,
            backgroundSize: '1440px 164px',
            backgroundImage: `url(${A}/imgCoBien.svg)`,
            zIndex: 1,
          }}
        />
      }
    >
      {/* LEFT — Container with big photo at (120, 70) 486×750 */}
      <div className="absolute overflow-clip" style={{ left: 120, top: 70, width: 486, height: 750 }}>
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`${A}/imgImageThmCBinDiLongDiDngTiCuLaoCham.jpg`}
        />

        {/* Inner small photo card at (38, 132) 220×210 rotated +2.5° */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: 38, top: 132, width: 228.951, height: 219.396 }}
        >
          <div style={{ transform: 'rotate(2.5deg)' }}>
            <div
              className="flex flex-col items-start bg-white relative"
              style={{ width: 220, height: 210, filter: 'drop-shadow(4px 8px 18px rgba(28,43,26,0.28))' }}
            >
              <div
                className="flex flex-col gap-4 bg-white items-start"
                style={{ width: 220, height: 210, paddingTop: 5.812, paddingLeft: 6, paddingRight: 6 }}
              >
                <div className="relative" style={{ width: '100%', height: 160, background: '#b8ccba' }}>
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`${A}/imgImageAnhSangLcQuaDayBinNiThmCBinSinhSng.jpg`}
                  />
                </div>
                <p
                  className="font-mono text-center"
                  style={{ width: '100%', fontSize: 9, color: '#6b5c3e', lineHeight: '12.375px' }}
                >
                  Độ sâu 3–5m · Bãi Hương
                </p>
              </div>
              {/* Subtle dark overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to right, rgba(26,61,43,0.13), rgba(26,61,43,0.44))' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cỏ biển dài background illustration at ~28.78% inset */}
      <div className="absolute" style={{ left: 288, top: 236, width: 233, height: 233 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgCBinDai.png`} />
      </div>

      {/* Cỏ biển trònpsd at ~14.35% inset (mirrored, rotated 5.57°) */}
      <div
        className="absolute"
        style={{ left: 70, top: 118, width: 155, height: 171, transform: 'scaleX(-1) rotate(5.57deg)' }}
      >
        <img alt="" className="block w-full h-full" src={`${A}/imgCBinTronpsd.png`} />
      </div>

      {/* Fish at (557.62, 534.66) rotated 15° */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 557.62, top: 534.66, width: 89.767, height: 70.675 }}
      >
        <div style={{ transform: 'rotate(15deg)' }}>
          <div className="relative" style={{ width: 79, height: 52 }}>
            <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLayer1.svg`} />
          </div>
        </div>
      </div>

      {/* Layer_1 small at (1211, 108) 103.67×94.34 */}
      <div className="absolute" style={{ left: 1211, top: 108, width: 103.67, height: 94.34 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgLayer2.svg`} />
      </div>

      {/* === RIGHT — S5 Text Content (732, 70) 588×... === */}
      <div className="absolute flex flex-col items-start overflow-clip" style={{ left: 732, top: 70, width: 588, gap: 24 }}>
        {/* Label torn-tag */}
        <div className="relative" style={{ width: 173, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: 'calc(50% + 0.5px)',
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
              Cỏ biển · Seagrass
            </p>
          </div>
        </div>

        {/* H2 */}
        <div
          className="font-display font-bold"
          style={{ color: '#fff', fontSize: 52, letterSpacing: '-0.8px', lineHeight: 0, width: '100%' }}
        >
          <p style={{ lineHeight: 1.08, marginBottom: 0 }}>Tôi là cỏ biển.</p>
          <p style={{ lineHeight: 1.08, color: '#6bae6b' }}>Không phải rong.</p>
        </div>

        {/* Subhead Lora Italic */}
        <div
          className="font-quote italic"
          style={{ color: '#e8d5b0', fontSize: 18, opacity: 0.92, lineHeight: 0, width: '100%' }}
        >
          <p style={{ lineHeight: 'normal', marginBottom: 0 }}>Nhiều người lần đầu nhìn thấy thường nghĩ tôi là rong.</p>
          <p style={{ lineHeight: 'normal', marginBottom: 0 }}>Nhưng tôi có rễ, có thân ngầm, có lá. Và tôi ra hoa.</p>
          <p style={{ lineHeight: 'normal' }}>Và tôi đang làm rất nhiều việc mà bạn không hay biết.</p>
        </div>

        {/* Divider Line — explicit height to prevent SVG intrinsic size expansion */}
        <div className="relative" style={{ width: 48, height: 0 }}>
          <div className="absolute" style={{ top: -1, left: 0, right: 0, height: 2 }}>
            <img alt="" className="block w-full h-full" src={`${A}/imgLine.svg`} />
          </div>
        </div>

        {/* 4 Stat grid 2×2 */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 items-start relative"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: 17,
                height: 97,
              }}
            >
              <p
                className="font-mono font-bold whitespace-nowrap"
                style={{ color: '#f5a07a', fontSize: 24, lineHeight: '24px' }}
              >
                {s.num}
              </p>
              <p
                className="font-display font-medium"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, letterSpacing: '0.8px', width: 180 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center font-display font-medium text-white rounded-[2px] overflow-clip"
          style={{
            background: '#e86b35',
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
          <p className="whitespace-pre">{'Câu chuyện của tôi  →'}</p>
        </div>
      </div>
    </FrameSection>
  );
}
