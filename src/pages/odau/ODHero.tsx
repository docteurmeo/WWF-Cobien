import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import Creature from '@/components/Creature';
import Bubble from '@/components/Bubble';

/**
 * Hero — Người mở cửa — 1440×888 at y=100. Warm light.
 * Photo Frame at (600, 120) 778×720 — homestay porch.
 * Hero Content at (120, 179) 451×442.
 * Layer_1 at (155, 715) 131×101.
 */
export default function ODHero() {
  return (
    <section className="relative w-[1440px] h-[888px] overflow-hidden">
      {/* Warm gradient bg */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(225deg, #F5EDD8 0%, #E8D5B0 50%, #C9B48A 100%)' }}
      />

      {/* Large photo (600, 120) 778×720 */}
      <PhotoFrame
        width={778}
        height={720}
        rotate={1.5}
        bg="bg-sand-dark"
        label="Hiên nhà homestay buổi chiều · võng · lưới phơi · ánh nắng nghiêng"
        shadow="lg"
        className="absolute"
        style={{ left: 600, top: 120 }}
      />

      {/* Hero Content (120, 179) 451×442 */}
      <div className="absolute" style={{ left: 120, top: 179, width: 540 }}>
        <TornTag bg="bg-coral">HOMESTAY · CÙ LAO CHÀM</TornTag>

        <h1
          className="font-display font-black text-ink-main mt-9"
          style={{ fontSize: 64, lineHeight: '104%', letterSpacing: '-1.5px' }}
        >
          Người mở cửa đón bạn<br />
          không phải lễ tân.<br />
          <span className="text-coral">Mà là chính chủ nhà.</span>
        </h1>

        <p
          className="font-quote text-ink-muted mt-7"
          style={{ fontSize: 19, lineHeight: '155%', opacity: 0.88 }}
        >
          Ở Cù Lao Chàm, chỗ ở không phải điểm kết thúc của một ngày.<br />
          Đó là nơi câu chuyện thật về hòn đảo bắt đầu.
        </p>

        <button
          className="mt-9 inline-flex items-center justify-between bg-ocean-primary rounded-[2px] shadow-btn-teal hover:bg-ocean-deep transition-colors"
          style={{ width: 220, height: 46, paddingLeft: 28, paddingRight: 28 }}
        >
          <span className="text-cta-btn text-ink-white">Khám phá cách ở lại</span>
          <span className="text-cta-btn text-ink-white text-lg">↓</span>
        </button>
      </div>

      {/* Layer_1 — small creature at (155, 715) 131×101 */}
      <div className="absolute" style={{ left: 155, top: 715 }}>
        <Creature type="crab" width={131} height={101} fill="#E86B35" rotate={-15} />
      </div>

      {/* Bubble accents bottom-left */}
      <Bubble size={28} className="absolute" style={{ left: 120, top: 640 }} />
      <Bubble size={16} className="absolute" style={{ left: 200, top: 690 }} />
      <Bubble size={12} className="absolute" style={{ left: 80, top: 760 }} />
    </section>
  );
}
