import FrameSection from '@/components/FrameSection';

/**
 * S6 Số liệu căng thẳng — 1440×733 at y=5198. Figma node 129:1263.
 * Sand Mid bg #E8D5B0. Center tag + headline + 2× 5×5 grid (50ha vs 17ha) with → arrow.
 */
const A = '/WWF-Cobien/assets/cobien/s6';
const S6_H = 733;

const GRID = (filledCount: number) => (
  <div
    className="grid"
    style={{
      gridTemplateColumns: 'repeat(5, 32px)',
      gridTemplateRows: 'repeat(5, 32px)',
      columnGap: 10,
      rowGap: 8,
    }}
  >
    {Array.from({ length: 25 }).map((_, i) => {
      const row = Math.floor(i / 5);
      const col = i % 5;
      // Diagonal wave: delay tăng theo (row + col) → wave breathe lan từ top-left
      const delay = (row + col) * 0.18;
      return (
        <div
          key={i}
          className="grid-breathe"
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            background: i < filledCount ? '#4A7C59' : '#F5EDD8',
            ['--grid-delay' as string]: `${delay}s`,
          } as React.CSSProperties}
        />
      );
    })}
  </div>
);

export default function CBSoLieu() {
  return (
    <FrameSection height={S6_H} background="#E8D5B0">
      {/* HIỆN TRẠNG label tag center (50%, 59) 114×33 */}
      <div
        className="absolute"
        style={{ left: '50%', top: 59, width: 114, height: 33, transform: 'translateX(-50%)', zIndex: 4 }}
      >
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
          <p
            className="font-display font-semibold text-white uppercase whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
          >
            HIỆN TRẠNG
          </p>
        </div>
      </div>

      {/* Headline center (720, 104) */}
      <p
        className="absolute font-display font-bold text-center"
        style={{
          left: '50%',
          top: 104,
          transform: 'translateX(-50%)',
          width: 1200,
          color: '#1A2E2D',
          fontSize: 52,
          lineHeight: 1.08,
          letterSpacing: '-0.8px',
          margin: 0,
          zIndex: 4,
        }}
      >
        Đây là những gì đang xảy ra.
      </p>

      {/* Past stat (200, 240) 380w */}
      <div
        className="absolute flex flex-col items-center"
        style={{ left: 200, top: 240, width: 380, gap: 10, zIndex: 4 }}
      >
        <p
          className="font-display font-semibold uppercase text-center"
          style={{ color: '#1A7F7C', fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
        >
          TRƯỚC ĐÂY
        </p>
        <p
          className="font-display font-black text-center whitespace-nowrap stat-attention"
          style={{ color: '#225322', fontSize: 88, lineHeight: 0.95, letterSpacing: '-2.5px', margin: 0 }}
        >
          ~50 ha
        </p>
        <p
          className="font-display font-normal text-center whitespace-nowrap"
          style={{ color: '#1A7F7C', fontSize: 16, lineHeight: 1.55, opacity: 0.75, margin: 0 }}
        >
          diện tích cỏ biển ghi nhận trước đây
        </p>
        {GRID(25)}
      </div>

      {/* Arrow → (600, 247) 240×140 center — pulse translateX ngang gợi flow "trước → nay" */}
      <p
        className="absolute font-display font-black text-center arrow-x-nudge"
        style={{
          left: 600,
          top: 247,
          width: 240,
          height: 140,
          color: '#F5EDD8',
          fontSize: 120,
          lineHeight: 1,
          letterSpacing: '-2px',
          margin: 0,
          zIndex: 4,
        }}
      >
        →
      </p>

      {/* Now stat (860, 240) 380w */}
      <div
        className="absolute flex flex-col items-center"
        style={{ left: 860, top: 240, width: 380, gap: 10, zIndex: 4 }}
      >
        <p
          className="font-display font-semibold uppercase text-center"
          style={{ color: '#E86B35', fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
        >
          HIỆN NAY
        </p>
        <p
          className="font-display font-black text-center whitespace-nowrap stat-attention"
          style={{
            color: '#E86B35', fontSize: 88, lineHeight: 0.95, letterSpacing: '-2.5px', margin: 0,
            ['--stat-delay' as string]: '-1.9s', // offset phase với ~50 ha
          } as React.CSSProperties}
        >
          ~17 ha
        </p>
        <p
          className="font-display font-normal text-center whitespace-nowrap"
          style={{ color: '#E86B35', fontSize: 16, lineHeight: 1.55, margin: 0 }}
        >
          diện tích cỏ biển còn lại hiện nay
        </p>
        {GRID(8)}
      </div>

      {/* Quote bottom (center, 643) */}
      <p
        className="absolute font-quote italic text-center"
        style={{
          left: '50%',
          top: 643,
          transform: 'translateX(-50%)',
          width: 1200,
          color: '#1A2E2D',
          fontSize: 22,
          lineHeight: 1.42,
          margin: 0,
          zIndex: 4,
        }}
      >
        "Hơn hai phần ba đã mất. Và quá trình đó vẫn đang tiếp tục."
      </p>
    </FrameSection>
  );
}
