import TornTag from '@/components/TornTag';

/**
 * S4 Giọng — 1440×720 at y=4774.
 * Label (677, 75) — "review"
 * Title (120, 120) 1200×56.
 * 3 testimonial cards.
 */
const quotes = [
  {
    q: '"Trải nghiệm tuyệt vời đến nỗi chúng tôi quyết định thay đổi kế hoạch và ở lại thêm một đêm nữa."',
    author: '— KHÁCH LƯU TRÚ',
    accent: '#2A9B97',
    accentClass: 'text-ocean-primary',
    x: 120,
    y: 280,
    h: 290,
    rot: -1.5,
  },
  {
    q: '"Điều làm nên sự đặc biệt và đáng yêu của nơi này chính là chủ nhà, người hết lòng quan tâm và chăm sóc mọi thứ."',
    author: '— KHÁCH LƯU TRÚ',
    accent: '#E86B35',
    accentClass: 'text-coral',
    x: 540,
    y: 260,
    h: 305,
    rot: 0.8,
  },
  {
    q: '"Một chốn bình yên đích thực. Tôi đã hoàn toàn hòa mình vào cuộc sống địa phương."',
    author: '— KHÁCH LƯU TRÚ',
    accent: '#3D8B3D',
    accentClass: 'text-green-mid',
    x: 960,
    y: 290,
    h: 293,
    rot: 2,
  },
];

export default function ODTestimonials() {
  return (
    <section className="relative w-[1440px] h-[720px] bg-sand-light overflow-hidden">
      {/* Label */}
      <div className="absolute" style={{ left: 677, top: 75 }}>
        <TornTag bg="bg-coral">review</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-main text-center"
        style={{ left: 120, top: 120, width: 1200, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Những người đã ở lại nói gì.
      </h2>

      {/* 3 testimonial cards */}
      {quotes.map((q, i) => (
        <div
          key={i}
          className="absolute bg-ink-white rounded-[2px] shadow-card-sm"
          style={{
            left: q.x,
            top: q.y,
            width: 387,
            height: q.h,
            transform: `rotate(${q.rot}deg)`,
            padding: 24,
          }}
        >
          {/* Large quote mark */}
          <div className="font-display font-black" style={{ fontSize: 96, lineHeight: '60%', color: q.accent, opacity: 0.30 }}>
            "
          </div>

          {/* Quote text */}
          <p className="font-quote text-ink-main mt-4" style={{ fontSize: 18, lineHeight: '152%' }}>
            {q.q}
          </p>

          {/* Divider */}
          <div className="mt-6" style={{ width: 40, height: 2, background: q.accent }} />

          {/* Author */}
          <div className={`text-tag-up uppercase mt-3 ${q.accentClass}`}>{q.author}</div>
        </div>
      ))}
    </section>
  );
}
