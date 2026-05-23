import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';

/**
 * S1 Định nghĩa lại chỗ ở — 1440×745 at y=988.
 * Off-white bg.
 * Frame text (120, 143) 588×459.
 * Photo (840, 120) 489×372.
 * Factoid 5-10% (839, 493) 403×206.
 */
export default function ODDinhNghia() {
  return (
    <section className="relative w-[1440px] h-[745px] bg-ink-offwhite overflow-hidden">
      {/* Left text content (120, 143) 588×459 */}
      <div className="absolute" style={{ left: 120, top: 143, width: 588 }}>
        <TornTag bg="bg-ocean-primary">KHÔNG GIỐNG KHÁCH SẠN</TornTag>

        <h2
          className="font-display font-bold text-ink-main mt-9"
          style={{ fontSize: 44, lineHeight: '115%', letterSpacing: '-0.5px' }}
        >
          Ở Cù Lao Chàm, bạn không thấy nhiều khách sạn lớn.
        </h2>

        <p className="font-body text-ink-main mt-9" style={{ fontSize: 18, lineHeight: '170%' }}>
          Thay vào đó là những ngôi nhà nhỏ xinh xắn, nằm dọc theo Bãi Làng, Bãi Hương.
        </p>

        <p className="font-quote text-ocean-deep mt-6" style={{ fontSize: 18, lineHeight: '155%' }}>
          Họ có thể là ngư dân. Có thể là người lái tàu. Có thể sáng đi biển, chiều về đón khách.
        </p>

        <p className="font-body text-ink-muted mt-6" style={{ fontSize: 15, lineHeight: '172%', opacity: 0.88 }}>
          Bạn ở lại trong chính không gian sống của họ. Ăn cùng họ. Trò chuyện với họ. Và đôi khi, đó là lúc bạn hiểu nơi này rõ nhất.
        </p>
      </div>

      {/* Right Photo (840, 120) 489×372 */}
      <PhotoFrame
        width={489}
        height={372}
        rotate={-1.5}
        bg="bg-green-light"
        label="Phòng ngủ · cửa sổ nhìn ra cây xanh"
        shadow="md"
        className="absolute"
        style={{ left: 840, top: 120 }}
      />

      {/* Factoid 5-10% (839, 493) 403×206 */}
      <div
        className="absolute bg-ink-white rounded-[2px] shadow-card"
        style={{ left: 839, top: 493, width: 403, height: 206, padding: '22px', transform: 'rotate(1deg)' }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-coral" />
          <span className="text-tag-up uppercase text-coral">KHÁCH QUA ĐÊM</span>
        </div>
        <div
          className="font-display font-black text-coral mt-1"
          style={{ fontSize: 56, lineHeight: '100%', letterSpacing: '-1px' }}
        >
          5–10%
        </div>
        <p className="font-body text-ink-muted mt-3" style={{ fontSize: 13, lineHeight: '158%', opacity: 0.85 }}>
          Phần lớn đến và về trong ngày. Nhưng những người ở lại thường là người hiểu đảo nhất — và thường là người muốn quay lại.
        </p>
      </div>
    </section>
  );
}
