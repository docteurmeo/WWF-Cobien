import TornTag from '@/components/TornTag';

/**
 * S2 Hai vùng để ở — 1440×860 at y=1733.
 * Label (120, 67) — "Lựa chọn điểm đến"
 * Title (120, 112) 729×56 — "Hai vùng để ở. Bạn chọn đâu?"
 * Card LANG (129, 249) 606×544.
 * Card HUONG (723, 229) 605×544.
 */
const cards = [
  {
    id: 'LANG',
    label: 'BÃI LÀNG',
    labelBg: 'bg-ocean-primary',
    photoBg: 'bg-ocean-deep',
    photoLbl: 'Cầu cảng Bãi Làng — sáng sớm, thuyền cập bờ',
    headline: 'Nơi mọi thứ bắt đầu.',
    body: 'Bãi Làng là nơi tàu cập bến. Nhưng cũng là nơi cuộc sống đảo diễn ra rõ nhất — chợ cá sáng sớm, chùa Hải Tạng, giếng cổ Chăm Pa, tiếng xe máy chạy qua, mùi cà phê quán vừa mở cửa.',
    forWho: 'GỢI Ý CHO · KHÁCH MUỐN GẦN TRUNG TÂM',
    x: 129,
    rot: -0.5,
  },
  {
    id: 'HUONG',
    label: 'BÃI HƯƠNG',
    labelBg: 'bg-coral',
    photoBg: 'bg-sand-dark',
    photoLbl: 'Bãi Hương từ xa — làng chài nhỏ, dừa thấp',
    headline: 'Làng chài 400 năm tuổi.',
    body: 'Bãi Hương nằm ở phía Nam đảo — xa hơn, chậm hơn, và yên tĩnh hơn. Làng chài ở đây có lịch sử gần 400 năm. Nghề khai thác yến, đan võng ngô đồng.',
    forWho: 'GỢI Ý CHO · KHÁCH QUỐC TẾ · 2–7 ĐÊM',
    x: 723,
    rot: 1.2,
  },
];

export default function ODHaiVung() {
  return (
    <section className="relative w-[1440px] h-[860px] bg-sand-light overflow-hidden">
      {/* Section label */}
      <div className="absolute" style={{ left: 120, top: 67 }}>
        <TornTag bg="bg-ocean-primary">Lựa chọn điểm đến</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 112, width: 800, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Hai vùng để ở. Bạn chọn đâu?
      </h2>

      {/* 2 large cards */}
      {cards.map((c) => (
        <div
          key={c.id}
          className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
          style={{
            left: c.x,
            top: c.id === 'LANG' ? 249 : 229,
            width: 606,
            height: 544,
            transform: `rotate(${c.rot}deg)`,
          }}
        >
          {/* Photo top */}
          <div className="p-2 bg-white">
            <div className={`w-full ${c.photoBg} flex items-center justify-center`} style={{ height: 280 }}>
              <span className="text-body-caption text-ink-white opacity-55 px-4 text-center">[ {c.photoLbl} ]</span>
            </div>
          </div>

          {/* Torn label overlap */}
          <div className="absolute" style={{ left: 24, top: 278 }}>
            <TornTag bg={c.labelBg}>{c.label}</TornTag>
          </div>

          {/* Headline */}
          <h3 className="absolute font-display font-bold text-ink-main" style={{ left: 24, top: 336, width: 558, fontSize: 36, lineHeight: '110%', letterSpacing: '-0.5px' }}>
            {c.headline}
          </h3>

          {/* Body */}
          <p className="absolute font-body text-ink-muted" style={{ left: 24, top: 392, width: 558, fontSize: 14, lineHeight: '170%', opacity: 0.85 }}>
            {c.body}
          </p>

          {/* Footer label */}
          <div className="absolute font-display font-medium text-ink-main" style={{ left: 24, top: 492, fontSize: 13, letterSpacing: '0.5px', opacity: 0.7 }}>
            {c.forWho}
          </div>
        </div>
      ))}
    </section>
  );
}
