import TornTag from '@/components/TornTag';

/**
 * S6 Thực tiễn — 1440×997 at y=6603.
 * Label (124, 67) — "CHUẨN BỊ · THỰC DỤNG"
 * Title (120, 112) 529×112.
 * 4 info cards 2×2 grid.
 */
const cards = [
  {
    icon: '📅',
    label: 'MÙA & THỜI ĐIỂM',
    title: 'Tháng 2 – tháng 9',
    sub: 'Mùa du lịch chính',
    body: 'Biển calmer, tàu chạy đều, homestay đầy nhanh trong mùa hè. T10–T1: mùa gió bấc — tàu có thể hoãn, một số dịch vụ đóng. Đảo yên tĩnh hơn nhiều.',
    color: 'ocean-primary',
    hex: '#2A9B97',
    x: 120,
    y: 320,
  },
  {
    icon: '⛵',
    label: 'CÁCH ĐI',
    title: '8h40 sáng',
    sub: 'từ cảng Cửa Đại ⚠️',
    body: 'Chỉ có 1 chuyến tàu gỗ ra đảo buổi sáng. Ca nô nhanh hơn nhưng chỉ theo tour. Gợi ý: đặt homestay trước rồi hỏi chủ nhà về lịch tàu hiện tại.',
    color: 'coral',
    hex: '#E86B35',
    x: 720,
    y: 320,
  },
  {
    icon: '🎒',
    label: 'CHUẨN BỊ',
    title: 'Không có ATM',
    sub: 'mang tiền mặt',
    body: 'Sóng điện thoại — không mạnh ở mọi nơi. Đảo đã nói không với túi nilon từ 2009. Mang túi vải, bình nước cá nhân. Kem chống nắng reef-safe nếu được.',
    color: 'green-mid',
    hex: '#3D8B3D',
    x: 120,
    y: 640,
  },
  {
    icon: '🎉',
    label: 'LỄ HỘI ĐÁNG THAM GIA',
    title: 'Mùng 9–10/3 ÂL',
    sub: 'Giỗ Tổ nghề Yến sào',
    body: 'Tại Miếu Tổ nghề Yến, Bãi Hương. Lễ tế, rước kiệu dọc bờ biển. Mùng 3–4/4 ÂL: Lễ hội Cầu Ngư tại Lăng Ông, Bãi Làng.',
    color: 'sand-dark',
    hex: '#C9B48A',
    x: 720,
    y: 640,
  },
];

export default function ODThucTien() {
  return (
    <section className="relative w-[1440px] h-[997px] bg-ink-white overflow-hidden">
      <div className="absolute" style={{ left: 124, top: 67 }}>
        <TornTag bg="bg-ocean-primary">CHUẨN BỊ · THỰC DỤNG</TornTag>
      </div>

      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 112, width: 700, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Một vài điều nên biết<br />trước khi đặt chỗ.
      </h2>

      {cards.map((c, i) => {
        const colorBg = `bg-${c.color}`;
        return (
          <div
            key={i}
            className="absolute bg-ink-offwhite rounded-[2px] shadow-card-sm overflow-hidden"
            style={{
              left: c.x,
              top: c.y,
              width: 562,
              height: 285,
              transform: i % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
            }}
          >
            {/* Color band left */}
            <div className={`absolute left-0 top-0 h-full ${colorBg}`} style={{ width: 4 }} />

            {/* Icon */}
            <div className="absolute" style={{ left: 24, top: 20, fontSize: 44 }}>{c.icon}</div>

            {/* Label top-right */}
            <div className="absolute" style={{ right: 24, top: 24 }}>
              <TornTag bg={colorBg}>{c.label}</TornTag>
            </div>

            {/* Title */}
            <h3 className="absolute font-display font-bold text-ink-main" style={{ left: 24, top: 90, fontSize: 24, lineHeight: '125%' }}>
              {c.title}
            </h3>

            {/* Sub */}
            <p className={`absolute font-quote text-${c.color}`} style={{ left: 24, top: 120, fontSize: 15, lineHeight: '173%' }}>
              {c.sub}
            </p>

            {/* Body */}
            <p className="absolute font-body text-ink-muted" style={{ left: 24, top: 160, width: 513, fontSize: 13, lineHeight: '165%', opacity: 0.85 }}>
              {c.body}
            </p>
          </div>
        );
      })}
    </section>
  );
}
