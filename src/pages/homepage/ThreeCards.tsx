import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import Creature from '@/components/Creature';

/**
 * S3 Three Cards — 1440×1026 at y=2010.
 * Section title left + asymmetric 3 cards (EAT/STAY/EXPLORE).
 * Card positions per Figma:
 * - EAT: (120, 350) 373×529 rotation -1.5°
 * - STAY: (540, 326) 365×523 rotation +0.5°
 * - EXPLORE: (960, 362) 376×531 rotation +1.8°
 * Floating Cua creature at (1128, 108) 165×129.
 * Group 1 (CO₂ bubble cluster) at (920, 140) 428×148.
 * Label "Khám phá cù lao chàm" at (120, 83) 206×33.
 */
const cards = [
  {
    id: 'EAT',
    tag: 'Ăn gì?',
    tagBg: 'bg-coral',
    photoBg: 'bg-coral-light',
    photoLbl: 'Bàn ăn gỗ ngoài trời — hải sản tươi',
    title: 'Từ biển lên bàn ăn.',
    body: 'Bữa trưa, thay vì đưa ra thực đơn, dân làng sẽ hỏi bạn: "Bữa ni ăn cá tôm hầy? Mới lên sáng ni."',
    cta: 'Từ biển lên bàn ăn  →',
    ctaColor: 'text-coral',
    x: 120,
    y: 350,
    rotate: -1.5,
  },
  {
    id: 'STAY',
    tag: 'Ở đâu',
    tagBg: 'bg-ocean-primary',
    photoBg: 'bg-ocean-light',
    photoLbl: 'Hiên homestay — võng, ánh chiều nghiêng',
    title: 'Sống cùng người địa phương.',
    body: 'Ở Cù Lao Chàm, bạn sẽ không thấy nhiều khách sạn lớn. Thay vào đó là những ngôi nhà nhỏ, nằm dọc theo Bãi Làng, Bãi Hương.',
    cta: 'Sống cùng người đảo  →',
    ctaColor: 'text-ocean-primary',
    x: 540,
    y: 326,
    rotate: 0.5,
  },
  {
    id: 'EXPLORE',
    tag: 'đi đâu',
    tagBg: 'bg-green-mid',
    photoBg: 'bg-green-light',
    photoLbl: 'San hô, đàn cá, ánh sáng dưới nước',
    title: 'Lên rừng — Xuống biển.',
    body: 'Ở Cù Lao Chàm, dưới mặt nước là nhiều lớp sự sống khác nhau. Rời biển một chút, bạn sẽ bước vào rừng nguyên sinh.',
    cta: 'Bãi nào, làm gì  →',
    ctaColor: 'text-green-mid',
    x: 960,
    y: 362,
    rotate: 1.8,
  },
];

export default function ThreeCards() {
  return (
    <section className="relative w-[1440px] h-[1026px] bg-ink-offwhite overflow-hidden">
      {/* Section label (120, 83) */}
      <div className="absolute" style={{ left: 120, top: 83 }}>
        <TornTag bg="bg-ocean-primary">Khám phá Cù Lao Chàm</TornTag>
      </div>

      {/* Title at (120, 128) 549×112 */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 128, width: 720, fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
      >
        Đây là nơi để sống —<br />
        không chỉ để ghé qua.
      </h2>

      {/* Floating Cua at (1128, 108) 165×129 */}
      <div className="absolute" style={{ left: 1128, top: 108 }}>
        <Creature type="crab" width={165} height={129} fill="#E86B35" rotate={-12} />
      </div>

      {/* Group 1 (CO₂ bubbles) at (920, 140) 428×148 */}
      <div className="absolute" style={{ left: 920, top: 140, width: 428, height: 148 }}>
        <div className="absolute" style={{ left: 0, top: 0 }}>
          <svg width="24" height="24"><circle cx="12" cy="12" r="10" fill="#7DD3D0" fillOpacity="0.22" stroke="#fff" strokeWidth="1.5" /></svg>
        </div>
        <div className="absolute" style={{ left: 160, top: 60 }}>
          <svg width="16" height="16"><circle cx="8" cy="8" r="7" fill="#7DD3D0" fillOpacity="0.22" stroke="#fff" strokeWidth="1.5" /></svg>
        </div>
        <div className="absolute" style={{ left: 400, top: 120 }}>
          <svg width="28" height="28"><circle cx="14" cy="14" r="13" fill="#7DD3D0" fillOpacity="0.22" stroke="#fff" strokeWidth="1.5" /></svg>
        </div>
      </div>

      {/* Cards */}
      {cards.map((c) => (
        <div
          key={c.id}
          className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
          style={{
            left: c.x,
            top: c.y,
            width: c.id === 'STAY' ? 365 : c.id === 'EXPLORE' ? 376 : 373,
            height: c.id === 'STAY' ? 523 : c.id === 'EXPLORE' ? 531 : 529,
            transform: `rotate(${c.rotate}deg)`,
          }}
        >
          {/* Photo top — full width, 248h */}
          <div className="relative w-full h-[252px] p-[6px] bg-white">
            <div className={`relative w-full h-full ${c.photoBg} flex items-center justify-center`}>
              <span className="text-body-caption text-ink-white opacity-55 text-center px-3">[ {c.photoLbl} ]</span>
            </div>
          </div>

          {/* Torn tag overlapping photo bottom */}
          <div className="absolute" style={{ left: 22, top: 240 }}>
            <TornTag bg={c.tagBg}>{c.tag}</TornTag>
          </div>

          {/* Content area */}
          <div className="px-6 pt-[48px]">
            <h3
              className="font-display font-bold text-ink-main"
              style={{ fontSize: 26, lineHeight: '116%', letterSpacing: '-0.3px' }}
            >
              {c.title}
            </h3>
            <p
              className="font-body text-ink-muted mt-3"
              style={{ fontSize: 14, lineHeight: '168%' }}
            >
              {c.body}
            </p>
            <div className={`mt-5 font-display font-semibold ${c.ctaColor}`} style={{ fontSize: 14, letterSpacing: '0.5px' }}>
              {c.cta}
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Layer_1 deco at (493, 824) 184×163 */}
      <div className="absolute" style={{ left: 493, top: 824, width: 184, height: 163 }}>
        <svg viewBox="0 0 184 163" width="184" height="163">
          {/* Cut-paper coral/seagrass cluster */}
          <path
            d="M 20 130 Q 30 90 25 50 Q 40 80 45 130 Z"
            fill="#3D8B3D"
            stroke="#fff"
            strokeWidth="3"
          />
          <path
            d="M 60 140 Q 75 100 70 40 Q 90 90 95 140 Z"
            fill="#6BAE6B"
            stroke="#fff"
            strokeWidth="3"
          />
          <path
            d="M 110 145 Q 120 100 115 50 Q 135 90 140 145 Z"
            fill="#3D8B3D"
            stroke="#fff"
            strokeWidth="3"
          />
          <path
            d="M 155 140 Q 165 100 160 60 Q 178 95 180 140 Z"
            fill="#6BAE6B"
            stroke="#fff"
            strokeWidth="3"
          />
        </svg>
      </div>
    </section>
  );
}
