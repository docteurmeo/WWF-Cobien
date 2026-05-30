import FrameSection from '@/components/FrameSection';
import Wave from '@/components/Wave';

/**
 * S7 Những gì khiến tôi biến mất — 1440×912 at y=5931. Figma node 129:1332.
 * Dark warm bg gradient. Photo underlay opacity 0.21 + overlay seagrass illustration.
 * Layout: tag + headline + body left + 3 cause cards stacked right.
 * Wave bottom transitions into S8 sand-light.
 */
const A = '/WWF-Cobien/assets/cobien/s7';
const S7_H = 912;
const S8_BG = '#F8F5EF';

type Card = {
  top: number;
  outerH: number;
  innerH: number;
  rot: number;
  tagSvg: string;
  tagW: number;
  tagLabel: string;
  title: string;
  body: string[];
};

const CARDS: Card[] = [
  {
    top: 231, outerH: 183.239, innerH: 179.848, rot: 0.5,
    tagSvg: 'torn-poly-cao.svg', tagW: 101, tagLabel: 'MỨC CAO',
    title: 'Tàu, ca nô, mỏ neo',
    body: ['Chân vịt khuấy trầm tích.', 'Mỏ neo cày xới đáy.', 'Bùn mịn phủ lên lá.'],
  },
  {
    top: 440.68, outerH: 155.225, innerH: 151.846, rot: -0.5,
    tagSvg: 'torn-poly-cao.svg', tagW: 101, tagLabel: 'MỨC CAO',
    title: 'Thời tiết cực đoan',
    body: ['Bão lớn, dòng chảy mạnh.', 'Biến động ngày càng khó lường.'],
  },
  {
    top: 624, outerH: 166.081, innerH: 162.704, rot: 0.5,
    tagSvg: 'torn-poly-tb.svg', tagW: 167, tagLabel: 'MỨC TRUNG BÌNH',
    title: 'Rác nhựa, dầu máy, nước thải',
    body: ['Tác động chậm nhưng tích lũy.', 'Khó nhìn thấy ngay.'],
  },
];

export default function CBNguyenNhan() {
  return (
    <FrameSection
      height={S7_H}
      background="linear-gradient(90deg, #0F2524 0%, #1A2E2D 50%, #0F2524 100%)"
      fullBleed={
        <>
          {/* Underwater photo backdrop opacity 0.21 + ken-burns slow zoom 30s.
              Cảm giác câu chuyện đang diễn ra — chuyển động chậm như tâm trạng narrative
              "biển đang đổi", không gấp gáp. */}
          <img
            alt=""
            src={`${A}/bg-photo.jpg`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none ken-burns"
            style={{ opacity: 0.21, zIndex: 0 }}
          />
          {/* Wave bottom → S8 light sand */}
          <div className="absolute left-0 right-0 bottom-0" style={{ zIndex: 6 }}>
            <Wave fill={S8_BG} height={80} amplitude={14} wavelength={420} speedSeconds={18} />
          </div>
        </>
      }
    >
      {/* Overlay illustration group (95.15, 229.98) 1310×465.
          SVG chứa 25 sediment particles (bùn lơ lửng) — .bubble-cluster breathe+sway gentle
          gợi cảm giác trầm tích float trong nước đục (nội dung section nói về "bùn mịn",
          "nước đục", "trầm tích bị khuấy"). */}
      <div
        className="absolute pointer-events-none bubble-cluster"
        style={{
          left: 95.15,
          top: 229.98,
          width: 1310.072,
          height: 465.074,
          opacity: 0.6,
          zIndex: 1,
          ['--bub-dur' as string]: '11s',
        } as React.CSSProperties}
      >
        <img alt="" className="block w-full h-full" src={`${A}/overlay-group.svg`} />
      </div>

      {/* Tag (120, 79) 124×33 — text dark on coral */}
      <div className="absolute" style={{ left: 120, top: 79, width: 124, height: 33, zIndex: 4 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
          <p
            className="font-display font-semibold uppercase whitespace-nowrap"
            style={{ color: '#1A2E2D', fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
          >
            NGUYÊN NHÂN
          </p>
        </div>
      </div>

      {/* Headline (120, 124) coral light */}
      <p
        className="absolute font-display font-bold whitespace-nowrap"
        style={{ left: 120, top: 124, color: '#F5A07A', fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.8px', margin: 0, zIndex: 4 }}
      >
        Những gì khiến tôi biến mất?
      </p>

      {/* Body left (120, 310) 587w */}
      <div className="absolute flex flex-col" style={{ left: 120, top: 310, width: 587, gap: 18, zIndex: 4 }}>
        <p
          className="font-quote italic"
          style={{ color: '#F5A07A', fontSize: 18, lineHeight: 1.48, margin: 0 }}
        >
          Cỏ biển không biến mất trong ngày một ngày hai.
        </p>
        <div
          className="font-display font-normal"
          style={{ color: '#F5EDD8', fontSize: 16, lineHeight: 1.7, opacity: 0.88 }}
        >
          <p style={{ margin: 0 }}>
            Trong những năm du lịch phát triển nhanh, lượng tàu thuyền ra vào đảo tăng mạnh. Chân vịt công suất lớn khuấy động nền cát, làm bùn mịn phủ lên lá cỏ. Mỏ neo cày xới đáy biển. Ở một số nơi, những công trình ven bờ cũng từng khiến một phần thảm cỏ bị san lấp hoặc chôn vùi. Khi nước đục hơn, ánh sáng xuống đáy ít hơn. Khi nền cát bị xáo trộn liên tục, rễ bám yếu dần. Những khoảng cỏ từng dày bắt đầu thưa đi. Bên cạnh đó còn có rác nhựa, dầu máy, nước thải, và những biến động thời tiết ngày càng khó lường hơn.
          </p>
          <p style={{ margin: 0, height: 16 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Phần lớn những tác động ấy đến từ con người. Và cũng chính vì vậy, phần lớn những điều có thể giữ lại cỏ biển cũng bắt đầu từ cách con người lựa chọn sống cùng biển.
          </p>
        </div>
      </div>

      {/* 3 Cause cards right */}
      {CARDS.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: 927, top: c.top, width: 390, height: c.outerH, zIndex: 5 }}
        >
          <div className="card-lift-hover flex items-center justify-center w-full h-full">
            <div
              style={{
                transform: `rotate(${c.rot}deg)`,
                width: 388,
                height: c.innerH,
                background: '#1A7F7C',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Severity tag */}
              <div
                className="absolute"
                style={{ left: 19, top: 17, width: c.tagW, height: 28 }}
              >
                <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/${c.tagSvg}`} />
                <p
                  className="absolute font-display font-semibold text-white uppercase whitespace-nowrap"
                  style={{ left: 18, top: 9, fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
                >
                  {c.tagLabel}
                </p>
              </div>
              {/* Title */}
              <p
                className="absolute font-display font-bold text-white whitespace-nowrap"
                style={{ left: 19, top: 55, fontSize: 22, lineHeight: 1.16, letterSpacing: '-0.3px', margin: 0 }}
              >
                {c.title}
              </p>
              {/* Body lines */}
              <div
                className="absolute font-display font-light"
                style={{ left: 19, top: 89, color: '#F5EDD8', fontSize: 14, opacity: 0.78 }}
              >
                {c.body.map((line, j) => (
                  <p key={j} style={{ lineHeight: 1.7, margin: 0 }}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </FrameSection>
  );
}
