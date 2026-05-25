import FrameSection from '@/components/FrameSection';
import Wave from '@/components/Wave';

/**
 * S1 Tôi là cỏ biển — 1440×760 at y=1020. Figma node 129:1102.
 * Dark teal narrator section. Background: solid #0F4A47 + underwater photo overlay opacity 0.29
 * + gradient teal top→transparent bottom.
 * Layout: text left, polaroid photo right rotate 2.5°, factoid coral box bottom-left rotate 5°.
 * Wave bottom transitions into S2 light sand.
 */
const A = '/WWF-Cobien/assets/cobien/s1';
const S1_H = 760;
const S2_BG = '#DEFAF7'; // S2 Ocean Light cyan (confirmed via get_design_context)

export default function CBToiLa() {
  return (
    <FrameSection
      height={S1_H}
      background="#0F4A47"
      fullBleed={
        <>
          {/* Underwater photo backdrop — opacity 0.29, full cover */}
          <img
            alt=""
            src={`${A}/gopr-bg.png`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: 0.29, zIndex: 0 }}
          />
          {/* Top→bottom gradient: solid teal at top, transparent at bottom — blends with Hero wave above */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #1A7F7C 0%, rgba(26,127,124,0) 100%)',
              zIndex: 1,
            }}
          />
          {/* Wave at bottom — fill = next section bg (S2 sand-light).
              zIndex: 11 để render TRÊN grid wrapper (z:10) — đè factoid coral box ở dưới
              theo Figma DOM order. */}
          <div className="absolute left-0 right-0 bottom-0" style={{ zIndex: 11 }}>
            <Wave fill={S2_BG} height={80} amplitude={14} wavelength={420} speedSeconds={18} />
          </div>
        </>
      }
    >
      {/* S1 Text — left (120, 120) 588w. Bottom of grid stack (z:1) */}
      <div
        className="absolute flex flex-col"
        style={{ left: 120, top: 120, width: 588, gap: 22, zIndex: 1 }}
      >
        {/* Torn-tag label — green */}
        <div className="relative" style={{ width: 154, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ paddingLeft: 16, paddingRight: 16 }}
          >
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', marginTop: 0.5 }}
            >
              VAI TRÒ · TÔI LÀ AI?
            </p>
          </div>
        </div>

        {/* H2 — Geologica Bold 52 / 1.08 / -0.8px white */}
        <p
          className="font-display font-bold text-white"
          style={{
            fontSize: 52,
            lineHeight: 1.08,
            letterSpacing: '-0.8px',
            margin: 0,
          }}
        >
          Tôi là cỏ biển
        </p>

        {/* Body 5 paragraphs — Geologica Regular 16/24, color sand-mid opacity 0.88 */}
        <div
          className="font-display font-normal"
          style={{
            color: '#E8D5B0',
            fontSize: 16,
            lineHeight: '24px',
            opacity: 0.88,
          }}
        >
          <p style={{ margin: 0 }}>
            Ở những vùng nước nông — nơi dòng chảy không quá mạnh và ánh sáng mặt trời còn chạm tới đáy — tôi lớn thành những thảm cỏ trải dài theo nền cát.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Tôi là cỏ biển. Một loài thực vật có hoa, sống hoàn toàn dưới nước mặn. Tôi có rễ, có thân ngầm, có lá. Tôi bám xuống nền cát, hút dinh dưỡng từ trầm tích. Và tôi cần ánh sáng để quang hợp — giống như mọi cây xanh trên cạn.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Từ trên mặt nước nhìn xuống, có khi tôi chỉ là những vệt xanh nhạt. Nhưng từ dưới này — đó là một thế giới ngập tràn sự sống.
          </p>
        </div>
      </div>

      {/* Polaroid photo right (890.48, 132) rotate 2.5° — 400.519×382.314 frame. z:3 */}
      <div
        className="absolute"
        style={{ left: 890, top: 132, width: 417, height: 399, zIndex: 3 }}
      >
        <div
          className="card-lift-hover"
          style={{
            transform: 'rotate(2.5deg)',
            transformOrigin: 'center center',
            width: 400.519,
            height: 382.314,
            background: '#FFFFFF',
            filter: 'drop-shadow(7px 14px 28px rgba(28,43,26,0.32))',
            paddingTop: 10.582,
            paddingLeft: 10.923,
            paddingRight: 10.923,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div style={{ width: '100%', height: 291.287, background: '#0F4A47', overflow: 'hidden' }}>
            <img
              alt=""
              className="block w-full h-full object-cover"
              src={`${A}/photo-anh-sang-day-bien.jpg`}
            />
          </div>
          <p
            className="text-center"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: 14,
              lineHeight: '22.5px',
              color: '#6B5C3E',
              margin: 0,
              width: '100%',
            }}
          >
            Thảm cỏ biển ở độ sâu 4–5m,<br />Cù Lao Chàm
          </p>
        </div>
      </div>

      {/* Decorative seagrass — Cỏ biển tròn (top center, flipped + rotated, subtle).
          z:4 — TRÊN polaroid (z:3) theo Figma DOM order */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 684,
          top: 30,
          width: 362,
          height: 162,
          transform: 'scaleX(-1) rotate(-24deg)',
          opacity: 0.5,
          zIndex: 4,
        }}
      >
        <img alt="" className="block w-full h-full object-contain" src={`${A}/co-bien-tron.png`} />
      </div>

      {/* Decorative seagrass — Cỏ biển dài (right side mid-bottom). z:5 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 1201,
          top: 377,
          width: 233,
          height: 233,
          opacity: 0.85,
          zIndex: 5,
        }}
      >
        <img alt="" className="block w-full h-full object-contain" src={`${A}/co-bien-dai.png`} />
      </div>

      {/* Factoid Callout coral box (110.11, 559.92) rotate 5° — 340×178.995.
          z:2 (dưới polaroid và seagrass illustrations) để wave bottom (z:11 fullBleed) đè được */}
      <div
        className="absolute"
        style={{ left: 110.11, top: 559.92, width: 354.307, height: 207.947, zIndex: 2 }}
      >
        <div
          className="card-lift-hover"
          style={{
            transform: 'rotate(5deg)',
            transformOrigin: 'center center',
            width: 340,
            height: 178.995,
            background: '#E86B35',
            borderRadius: 2,
            padding: 18,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            boxShadow: '0 16px 32px rgba(0,0,0,0.3)',
          }}
        >
          {/* Header: ellipse + uppercase label */}
          <div className="flex items-center" style={{ gap: 6 }}>
            <img src={`${A}/ellipse.svg`} alt="" style={{ width: 10, height: 10 }} />
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
            >
              CỎ BIỂN ≠ RONG BIỂN
            </p>
          </div>
          {/* Body 2 paragraphs */}
          <div
            className="font-display text-white"
            style={{ fontSize: 14, lineHeight: 1.58, width: 298.352 }}
          >
            <p style={{ margin: 0 }}>
              Rong biển không có rễ, không có mạch dẫn nhựa, không ra hoa.
            </p>
            <p style={{ margin: 0 }}>
              Cỏ biển là thực vật có hoa thật sự — gần với cỏ trên bờ hơn là với rong.
            </p>
          </div>
        </div>
      </div>
    </FrameSection>
  );
}
