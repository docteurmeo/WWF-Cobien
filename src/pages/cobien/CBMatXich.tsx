import TornTag from '@/components/TornTag';
import Bubble from '@/components/Bubble';

/**
 * S3 Một mắt xích — 1440×1016 at y=2580.
 * Off-white bg. Food chain infographic.
 * Label (120, 67) — "VAI TRÒ 02 · MẮT XÍCH"
 * Title (120, 112) 439×112 — "Một mắt xích trong chuỗi sống."
 * Body (120, 264) 383×136 lead text.
 * Right side text (528, 264) 790×144 — narrator quote
 * Food Chain Container (120, 539) 1200×220 — 3 stages with arrows
 * Bottom text (228, 828) 984×102.
 */
const stages = [
  { x: 204, label: 'CỎ BIỂN', sub: 'quang hợp', icon: '🌿', color: '#3D8B3D' },
  { x: 480, label: 'SINH VẬT NHỎ', sub: 'ấu trùng, tôm con', icon: '🦐', color: '#F5A07A' },
  { x: 756, label: 'Cá lớn', sub: 'đàn cá khơi', icon: '🐟', color: '#2A9B97' },
];

export default function CBMatXich() {
  return (
    <section className="relative w-[1440px] h-[1016px] bg-ink-offwhite overflow-hidden">
      {/* Bubble accents */}
      <Bubble size={20} className="absolute" style={{ left: 200, top: 450 }} />
      <Bubble size={14} className="absolute" style={{ left: 1180, top: 480 }} />

      {/* Label (120, 67) */}
      <div className="absolute" style={{ left: 120, top: 67 }}>
        <TornTag bg="bg-coral">VAI TRÒ 02 · MẮT XÍCH</TornTag>
      </div>

      {/* Title (120, 112) */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 112, width: 600, fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
      >
        Một mắt xích<br />
        trong chuỗi sống.
      </h2>

      {/* Body left (120, 264) 383×136 */}
      <p
        className="absolute font-body text-ink-muted"
        style={{ left: 120, top: 264, width: 383, fontSize: 15, lineHeight: '172%', opacity: 0.88 }}
      >
        Không chỉ là nơi trú ẩn của những sinh vật nhỏ, cỏ biển còn là một phần quan trọng trong chuỗi sống ven bờ — nguồn thức ăn nuôi cá lớn ngoài khơi.
      </p>

      {/* Right narrator quote (528, 264) 790×144 */}
      <p
        className="absolute font-quote text-ocean-deep"
        style={{ left: 528, top: 264, width: 790, fontSize: 18, lineHeight: '155%' }}
      >
        Mỗi ngày, nhờ quang hợp, tôi tạo ra vật chất hữu cơ là nguồn dinh dưỡng nuôi các sinh vật nhỏ sống quanh nền đáy. Chúng trở thành thức ăn của những loài lớn hơn — và cứ thế, một mạng lưới sự sống âm thầm được nối dài từ đáy biển ra những vùng nước rộng hơn.
      </p>

      {/* === FOOD CHAIN CONTAINER (120, 539) 1200×220 === */}
      <div className="absolute" style={{ left: 120, top: 539, width: 1200, height: 220 }}>
        {stages.map((s, i) => (
          <div key={i} className="absolute" style={{ left: s.x - 120, top: 0, width: 240 }}>
            {/* Circle background */}
            <div
              className="mx-auto rounded-full flex items-center justify-center text-5xl"
              style={{
                width: 140,
                height: 140,
                background: s.color,
                border: '5px solid white',
                opacity: 0.92,
              }}
            >
              {s.icon}
            </div>
            <div className="text-tag-up uppercase text-ink-main text-center mt-5">{s.label}</div>
            <div className="text-body-caption text-ink-muted text-center mt-1">{s.sub}</div>
          </div>
        ))}

        {/* Arrows between */}
        <div className="absolute font-display text-sand-dark opacity-70" style={{ left: 324, top: 50, fontSize: 36 }}>→</div>
        <div className="absolute font-display text-sand-dark opacity-70" style={{ left: 600, top: 50, fontSize: 36 }}>→</div>
      </div>

      {/* Bottom narrator copy (228, 828) 984×102 */}
      <p
        className="absolute font-body text-ink-muted text-center"
        style={{ left: 228, top: 828, width: 984, fontSize: 17, lineHeight: '170%', opacity: 0.85 }}
      >
        Điều đó có nghĩa là, khi một thảm cỏ mỏng đi, tác động không chỉ dừng lại ở chính nơi ấy. Một mắt xích yếu đi — và rồi sự thay đổi sẽ hiện ra trong số lượng cá ngoài khơi, trong những sinh vật ven bờ, và cả trong những gì người dân nhận lại từ biển.
      </p>
    </section>
  );
}
