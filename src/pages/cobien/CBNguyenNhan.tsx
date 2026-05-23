import TornTag from '@/components/TornTag';
import WaveDivider from '@/components/WaveDivider';

/**
 * S7 Những gì khiến tôi biến mất — 1440×912 at y=5931. DARK warm.
 * Label (120, 79) — "Nguyên nhân"
 * Title (120, 124) 727×56 — "Những gì khiến tôi biến mất?"
 * S7 Text (120, 310) 587×342.
 * 3 cause cards on right:
 * - BOATS (929, 231) 391×183
 * - WEATHER (929, 444) 389×155
 * - POLLUTION (929, 624) 389×166
 * WaveDivider y=832.
 */
const causes = [
  {
    id: 'BOATS',
    level: 'MỨC CAO',
    levelBg: 'bg-coral',
    title: 'Tàu, ca nô, mỏ neo',
    body: 'Chân vịt khuấy trầm tích. Mỏ neo cày xới đáy. Bùn mịn phủ lên lá.',
    y: 231,
    h: 183,
  },
  {
    id: 'WEATHER',
    level: 'MỨC CAO',
    levelBg: 'bg-coral',
    title: 'Thời tiết cực đoan',
    body: 'Bão lớn, dòng chảy mạnh. Biến động ngày càng khó lường.',
    y: 444,
    h: 155,
  },
  {
    id: 'POLLUTION',
    level: 'MỨC TRUNG BÌNH',
    levelBg: 'bg-sand-dark',
    title: 'Rác nhựa, dầu máy, nước thải',
    body: 'Tác động chậm nhưng tích lũy. Khó nhìn thấy ngay.',
    y: 624,
    h: 166,
  },
];

export default function CBNguyenNhan() {
  return (
    <section className="relative w-[1440px] h-[912px] overflow-hidden">
      {/* Dark warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0F2524 0%, #1A2E2D 50%, #0F2524 100%)',
        }}
      />

      {/* Sediment particles */}
      {Array.from({ length: 25 }).map((_, i) => {
        const x = (i * 67) % 1440;
        const y = 200 + (i * 47) % 500;
        const r = 2 + (i % 4);
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{ left: x, top: y, width: r * 2, height: r * 2, background: 'rgba(201,180,138,0.35)' }}
          />
        );
      })}

      {/* Label */}
      <div className="absolute" style={{ left: 120, top: 79 }}>
        <TornTag bg="bg-coral">Nguyên nhân</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-white"
        style={{ left: 120, top: 124, width: 727, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Những gì khiến tôi biến mất?
      </h2>

      {/* Left S7 Text (120, 310) 587×342 */}
      <div className="absolute" style={{ left: 120, top: 310, width: 587 }}>
        <p className="font-quote text-ocean-light" style={{ fontSize: 18, lineHeight: '150%' }}>
          Cỏ biển không biến mất trong ngày một ngày hai.
        </p>
        <p className="font-body text-sand-mid mt-6" style={{ fontSize: 15, lineHeight: '172%', opacity: 0.88 }}>
          Trong những năm du lịch phát triển nhanh, lượng tàu thuyền ra vào đảo tăng mạnh. Chân vịt công suất lớn khuấy động nền cát — bùn mịn phủ lên lá tôi. Mỏ neo cày xới đáy biển. Khi nước đục hơn, ánh sáng không còn chạm được xuống đáy. Khi nền cát bị xáo trộn liên tục, rễ bám yếu dần.
        </p>
        <p className="font-quote text-ocean-light mt-7" style={{ fontSize: 17, lineHeight: '148%' }}>
          "Phần lớn những tác động ấy đến từ con người.<br />
          Và cũng chính vì vậy, phần lớn những điều có thể giữ lại tôi cũng bắt đầu từ cách con người lựa chọn."
        </p>
      </div>

      {/* 3 Cause cards right */}
      {causes.map((c) => (
        <div
          key={c.id}
          className="absolute bg-[#0A1C1B] rounded-[2px] border border-white/10"
          style={{
            left: 929,
            top: c.y,
            width: 391,
            height: c.h,
            padding: '20px 22px',
            transform: c.id === 'WEATHER' ? 'rotate(0.5deg)' : 'rotate(-0.5deg)',
          }}
        >
          <div className="absolute" style={{ top: 14, right: 22 }}>
            <TornTag bg={c.levelBg}>{c.level}</TornTag>
          </div>
          <h3 className="font-display font-bold text-ink-white" style={{ fontSize: 22, marginTop: 28 }}>
            {c.title}
          </h3>
          <p className="font-body text-sand-light mt-3" style={{ fontSize: 14, lineHeight: '170%', opacity: 0.78 }}>
            {c.body}
          </p>
        </div>
      ))}

      <WaveDivider fill="#F5EDD8" className="absolute" style={{ left: 0, top: 832 }} />
    </section>
  );
}
