import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';

/**
 * S7 Community — 1440×1018 at y=4506.
 * Label at (120, 83) 206×33: "Con người Cù Lao Chàm"
 * Title at (120, 124) 469×112: "Những người sống cùng biển."
 * Lead paragraph 588 wide.
 * 3 portraits with rotations:
 * - FISHER: (140, 312) 314×410
 * - HOST: (540, 292) 344×443 (middle, bigger)
 * - GUARD: (990, 322) 314×410
 * Pull Quote Block: (120, 801) 1200×180
 */
const portraits = [
  {
    id: 'FISHER',
    label: 'Ngư dân',
    tagBg: 'bg-ocean-primary',
    photoLbl: 'Ngư dân vá lưới / ra khơi',
    photoBg: 'bg-ocean-deep',
    quote: '"Biển mà không còn cỏ, thì tôm cá cũng không còn chỗ lớn."',
    x: 140,
    y: 312,
    w: 314,
    h: 410,
    rot: -2,
  },
  {
    id: 'HOST',
    label: 'Chủ nhà',
    tagBg: 'bg-coral',
    photoLbl: 'Chủ homestay đón khách',
    photoBg: 'bg-sand-dark',
    quote: '"Khách ở lại qua đêm hiểu đảo hơn nhiều. Họ trân trọng hơn."',
    x: 540,
    y: 292,
    w: 344,
    h: 443,
    rot: 0.5,
  },
  {
    id: 'GUARD',
    label: 'Người giữ biển',
    tagBg: 'bg-green-mid',
    photoLbl: 'Cán bộ BQL kiểm tra cỏ biển',
    photoBg: 'bg-green-deep',
    quote: '"17 ha cỏ biển — đó là con số chúng tôi phải bảo vệ từng ngày."',
    x: 990,
    y: 322,
    w: 314,
    h: 410,
    rot: 2,
  },
];

export default function Community() {
  return (
    <section className="relative w-[1440px] h-[1018px] bg-ink-offwhite overflow-hidden">
      {/* Section label at (120, 83) */}
      <div className="absolute" style={{ left: 120, top: 83 }}>
        <TornTag bg="bg-green-mid">Con người Cù Lao Chàm</TornTag>
      </div>

      {/* Title at (120, 124) */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 124, width: 588, fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
      >
        Những người sống cùng biển.
      </h2>

      {/* Lead paragraph */}
      <p
        className="absolute font-body text-ink-muted"
        style={{ left: 740, top: 130, width: 588, fontSize: 15, lineHeight: '172%', opacity: 0.88 }}
      >
        Ở Cù Lao Chàm, biển không đứng ngoài đời sống. Nó đi vào nhịp ngày của con người một cách tự nhiên, đến mức nhiều khi rất khó phân biệt đâu là công việc, đâu là lối sống đã hình thành qua nhiều năm. Họ đã sống cùng biển và gìn giữ nó từ trước khi khái niệm "bảo tồn" được đặt tên.
      </p>

      {/* 3 Portrait cards */}
      {portraits.map((p) => (
        <div
          key={p.id}
          className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
          style={{
            left: p.x,
            top: p.y,
            width: p.w,
            height: p.h,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          {/* Photo top — covers most of card */}
          <div className="relative w-full p-[8px] bg-white" style={{ height: p.h - 110 }}>
            <div className={`relative w-full h-full ${p.photoBg} flex items-center justify-center`}>
              <span className="text-body-caption text-ink-white opacity-55 text-center px-3">[ {p.photoLbl} ]</span>
            </div>
          </div>

          {/* Torn label overlap photo bottom */}
          <div className="absolute" style={{ left: 18, top: p.h - 137 }}>
            <TornTag bg={p.tagBg}>{p.label}</TornTag>
          </div>

          {/* Quote */}
          <p
            className="absolute font-quote text-ink-main"
            style={{
              left: 16,
              top: p.h - 86,
              width: p.w - 32,
              fontSize: 15,
              lineHeight: '155%',
            }}
          >
            {p.quote}
          </p>
        </div>
      ))}

      {/* Pull Quote Block at (120, 801) 1200×180 — Anh Vũ */}
      <div className="absolute flex flex-col items-center" style={{ left: 120, top: 801, width: 1200, height: 180 }}>
        <TornTag bg="bg-green-mid">ANH VŨ · BQL KBTTN CÙ LAO CHÀM</TornTag>
        <p
          className="font-quote text-ocean-deep text-center mt-5"
          style={{ fontSize: 24, lineHeight: '158%' }}
        >
          "Từ khi có bảo tồn là nhận thức cũng như thu nhập của người dân cao lên. Hồi trước khách đâu có ra đây.<br />
          Dân với bảo tồn rất là khăng khít với nhau."
        </p>
        <div className="text-cta-arrow text-ocean-primary mt-4">
          Gặp người dân đảo  →
        </div>
      </div>
    </section>
  );
}
