import TornTag from '@/components/TornTag';
import RippleCircles from '@/components/RippleCircles';
import Bubble from '@/components/Bubble';

/**
 * S5 Vì sao ở lại lâu hơn — 1440×1109 at y=5494. Light teal transition.
 * S5 Content (270, 100) 900×414.
 * Stat 5-10 (1102, 439) 260×110.
 * 3 bottom cards (190, 578) 1060×323.
 */
const cards = [
  { label: 'Bữa ăn = Sinh kế', body: 'Mỗi bữa cơm ở nhà chủ là thu nhập của một gia đình ngư dân.', icon: '🍽' },
  { label: 'Chuyến đi biển = Sinh kế', body: 'Chuyến câu mực đêm bạn tham gia là thu nhập trực tiếp của người lái thuyền.', icon: '⛵' },
  { label: 'Chuyến thuyền = Sinh kế', body: 'Khi người dân sống được từ những điều ấy, họ có lý do để tiếp tục giữ biển.', icon: '🛶' },
];

export default function ODYNghia() {
  return (
    <section className="relative w-[1440px] h-[1109px] overflow-hidden">
      {/* Gradient: light → teal */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F8F5EF 0%, #EAF4F1 50%, rgba(125,211,208,0.45) 100%)' }}
      />

      {/* Bubble accents */}
      <Bubble size={28} className="absolute" style={{ left: 200, top: 180 }} />
      <Bubble size={16} className="absolute" style={{ left: 300, top: 250 }} />
      <Bubble size={24} className="absolute" style={{ left: 1180, top: 200 }} />
      <Bubble size={36} className="absolute" style={{ left: 1280, top: 290 }} />

      {/* S5 Content centered (270, 100) 900×414 */}
      <div className="absolute flex flex-col items-center" style={{ left: 270, top: 100, width: 900 }}>
        <TornTag bg="bg-ocean-deep">Ý NGHĨA · BẢO TỒN GẮN SINH KẾ</TornTag>

        <h2
          className="font-display font-bold text-ink-main text-center mt-9"
          style={{ fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
        >
          Mỗi đêm bạn ở lại<br />
          không chỉ là một đêm ngủ.
        </h2>

        <p className="font-body text-ink-muted text-center mt-8" style={{ fontSize: 17, lineHeight: '170%', opacity: 0.88 }}>
          Bữa ăn tối bạn đặt tại nhà chủ là thu nhập của một gia đình ngư dân — người sáng đánh cá, chiều đón khách, tối nấu cơm.<br />
          Chuyến đi biển đêm bạn tham gia là sinh kế trực tiếp của người lái thuyền.
        </p>

        <p className="font-quote text-ocean-deep text-center mt-8" style={{ fontSize: 22, lineHeight: '155%' }}>
          Và khi người dân sống được từ những điều ấy, họ có lý do để tiếp tục giữ biển.
        </p>

        <div className="mt-7" style={{ width: 56, height: 2, background: 'rgba(26,127,124,0.5)' }} />

        <p className="font-body text-ink-main text-center mt-7" style={{ fontSize: 15, lineHeight: '172%', opacity: 0.90 }}>
          Bảo tồn không chỉ xảy ra ở Bãi Bắc hay trong văn phòng khu bảo tồn.<br />
          Nó xảy ra ở mỗi bữa cơm, mỗi đêm ở lại, mỗi lần bạn chọn ở lại lâu hơn một ngày.
        </p>
      </div>

      {/* Ripple circles around stat (1102, 439) */}
      <RippleCircles centerX={1232} centerY={490} radii={[60, 100, 150]} color="#E86B35" />

      {/* Stat 5-10 (1102, 439) 260×110 */}
      <div className="absolute flex flex-col items-end" style={{ left: 1102, top: 439, width: 260 }}>
        <div className="font-display font-black text-coral text-right" style={{ fontSize: 72, lineHeight: '95%', letterSpacing: '-2.5px' }}>
          5–10%
        </div>
        <p className="font-body text-ink-muted text-right mt-2" style={{ fontSize: 12, lineHeight: '155%' }}>
          khách ở lại qua đêm<br />nhưng tạo phần lớn sinh kế bền vững
        </p>
      </div>

      {/* 3 bottom cards (190, 578) 1060×323 */}
      <div className="absolute flex gap-9" style={{ left: 190, top: 578, width: 1060 }}>
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-ink-white rounded-[2px] shadow-card-sm"
            style={{ width: 334, padding: 28 }}
          >
            <div className="text-5xl">{c.icon}</div>
            <div className="text-tag-up uppercase text-ocean-deep mt-3">{c.label}</div>
            <p className="font-body text-ink-muted mt-3" style={{ fontSize: 14, lineHeight: '168%', opacity: 0.85 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
