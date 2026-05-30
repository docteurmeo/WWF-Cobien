import FrameSection from '@/components/FrameSection';
import BubbleField from '@/components/BubbleField';

/**
 * S3 Một mắt xích trong chuỗi sống — 1440×1016 at y=2580. Figma node 129:1170.
 * Sand Light bg #F5EDD8. Layout: tag + headline + pull quote + body, food chain infographic 3-stage.
 * No wave at bottom — direct transition to S4 light sand.
 */
const A = '/WWF-Cobien/assets/cobien/s3';
const S3_H = 1016;

type Stage = {
  bg: string;
  illu?: { src: string; left: number; top: number; w: number; h: number; creature?: string };
  label: string;
  caption: string;
  cx: number; // center x of stage circle
};

const STAGES: Stage[] = [
  { bg: 'stage1-bg.svg', label: 'CỎ BIỂN', caption: 'quang hợp', cx: 324, illu: { src: 'co-bien-dai.png', left: -36, top: -55, w: 240, h: 240, creature: 'creature-kelp' } },
  { bg: 'stage2-bg.svg', label: 'SINH VẬT NHỎ', caption: 'ấu trùng, tôm con', cx: 600, illu: { src: 'stage2-shrimp.svg', left: -16, top: -9, w: 115, h: 101, creature: 'creature-shrimp' } },
  { bg: 'stage3-bg.svg', label: 'CÁ LỚN', caption: 'đàn cá khơi', cx: 876, illu: { src: 'stage3-fish.svg', left: -9, top: 28, w: 166, h: 80, creature: 'creature-fish-big' } },
];

export default function CBMatXich() {
  return (
    <FrameSection height={S3_H} background="#F5EDD8">
      <BubbleField
        width={1082}
        height={418}
        count={8}
        sizeRange={[10, 22]}
        durationRange={[12, 20]}
        fill="#1A7F7C"
        seed={91}
        style={{ left: 180, top: 410, opacity: 0.15, zIndex: 1 }}
      />

      {/* Label tag (120, 67) */}
      <div className="absolute" style={{ left: 120, top: 67, width: 198, height: 33, zIndex: 4 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
          <p
            className="font-display font-semibold text-white uppercase whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
          >
            VAI TRÒ 02 · MẮT XÍCH
          </p>
        </div>
      </div>

      {/* Headline (120, 112) */}
      <div
        className="absolute font-display font-bold"
        style={{ left: 120, top: 112, color: '#1A2E2D', fontSize: 52, letterSpacing: '-0.8px', zIndex: 4 }}
      >
        <p style={{ lineHeight: 1.08, margin: 0 }}>Một mắt xích</p>
        <p style={{ lineHeight: 1.08, margin: 0 }}>trong chuỗi sống.</p>
      </div>

      {/* Pull quote left (120, 264) 383w */}
      <p
        className="absolute font-quote italic"
        style={{ left: 120, top: 264, width: 383, color: '#1A7F7C', fontSize: 22, lineHeight: 1.55, margin: 0, zIndex: 4 }}
      >
        Không chỉ là nơi trú ẩn của những sinh vật nhỏ, cỏ biển còn là một phần quan trọng trong chuỗi sống của cả vùng biển ven bờ.
      </p>

      {/* Body right (528, 264) 790w */}
      <p
        className="absolute font-display font-normal"
        style={{ left: 528, top: 264, width: 790, color: '#5A7370', fontSize: 16, lineHeight: '24px', opacity: 0.85, margin: 0, zIndex: 4 }}
      >
        Mỗi ngày, nhờ quang hợp, tôi tạo ra vật chất hữu cơ là nguồn dinh dưỡng nuôi các sinh vật nhỏ sống quanh nền đáy. Những sinh vật nhỏ ấy lại trở thành thức ăn của những loài lớn hơn. Từ đó, một mạng lưới sự sống âm thầm được nối dài từ đáy biển ra những vùng nước rộng hơn. Nhiều loài hải sản quen thuộc với người dân đảo như cá, tôm, các loài thân mềm,... đều gắn với những thảm cỏ biển ở một giai đoạn nào đó của vòng đời. Có loài tìm đến khi còn là ấu trùng. Có loài lớn lên trong những khoảng cỏ ấy trước khi di chuyển ra xa hơn. Cũng có những loài quay trở lại vào mùa sinh sản.
      </p>

      {/* Food Chain Container (120, 539) 1200×220 */}
      <div className="absolute" style={{ left: 120, top: 539, width: 1200, height: 220, zIndex: 4 }}>
        {STAGES.map((s, i) => (
          <div key={i}>
            {/* Stage circle bg 140×140 */}
            <div className="absolute" style={{ left: s.cx - 70, top: 8, width: 140, height: 140 }}>
              <img alt="" className="block w-full h-full" src={`${A}/${s.bg}`} />
            </div>
            {/* Illustration overlay — apply creature motion class per stage type:
                kelp sway for seagrass, shrimp drift, fish-big glide */}
            {s.illu && (
              <div
                className={`absolute pointer-events-none ${s.illu.creature ?? ''}`}
                style={{ left: s.cx - 70 + s.illu.left, top: 8 + s.illu.top, width: s.illu.w, height: s.illu.h }}
              >
                <img alt="" className="block w-full h-full object-contain" src={`${A}/${s.illu.src}`} />
              </div>
            )}
            {/* Label below circle */}
            <p
              className="absolute font-display font-semibold uppercase text-center"
              style={{ left: s.cx - 120, top: 160, width: 240, color: '#1A2E2D', fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
            >
              {s.label}
            </p>
            <p
              className="absolute font-display font-normal text-center"
              style={{ left: s.cx - 120, top: 182, width: 240, color: '#5A7370', fontSize: 12, lineHeight: 1.5, letterSpacing: '0.2px', margin: 0 }}
            >
              {s.caption}
            </p>
            {/* Arrow → between stages (skip after last) */}
            {i < STAGES.length - 1 && (
              <p
                className="absolute font-display font-semibold text-center"
                style={{
                  left: STAGES[i].cx + 138,
                  top: 60,
                  width: 36,
                  height: 40,
                  color: '#C9B48A',
                  fontSize: 28,
                  lineHeight: 1.25,
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                →
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Closing pull quote (center, 828) */}
      <p
        className="absolute font-quote italic text-center"
        style={{
          left: '50%',
          top: 828,
          transform: 'translateX(-50%)',
          width: 984,
          color: '#1A7F7C',
          fontSize: 22,
          lineHeight: 1.55,
          opacity: 0.85,
          margin: 0,
          zIndex: 4,
        }}
      >
        Điều đó có nghĩa là, khi một thảm cỏ mỏng đi, tác động không chỉ dừng lại ở chính nơi ấy. Một mắt xích trong chuỗi sống cũng bắt đầu yếu đi, và rồi sự thay đổi ấy sẽ dần hiện ra trong số lượng cá ngoài khơi, trong những sinh vật ven bờ, và cả trong những gì con người nhận lại từ biển.
      </p>
    </FrameSection>
  );
}
