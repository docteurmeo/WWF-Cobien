import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import Creature from '@/components/Creature';
import Bubble from '@/components/Bubble';
import WaveDivider from '@/components/WaveDivider';
import SeagrassField from '@/components/SeagrassField';

/**
 * Hero — 1440×920 at y=100. Collage moment.
 * Background: warm sand → ocean light gradient.
 * Photo right (553×504 at 764,89), text left (588×337 at 120,200).
 * Turtle silhouette (290×182 at 50,668), Fish (245×107 at 620,107).
 * CO₂ Bubble cluster (738×394 at 200,80). Seagrass field bottom (1440×211 at 0,709).
 * Wave divider at y=840 (1440×80). Scroll hint at (650, 886).
 */
export default function HeroSection() {
  return (
    <section className="relative w-[1440px] h-[920px] overflow-hidden">
      {/* Warm gradient bg: sand → ocean light at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #F5EDD8 0%, #E8D5B0 45%, #7DD3D0 100%)',
        }}
      />

      {/* CO₂ Bubble cluster at (200,80) 738×394 */}
      <div className="absolute" style={{ left: 200, top: 80, width: 738, height: 394 }}>
        <Bubble size={24} fill="#7DD3D0" style={{ position: 'absolute', left: 0, top: 180 }} />
        <Bubble size={16} fill="#7DD3D0" style={{ position: 'absolute', left: 140, top: 100 }} />
        <Bubble size={20} fill="#7DD3D0" style={{ position: 'absolute', left: 80, top: 320 }} />
        <Bubble size={28} fill="#7DD3D0" style={{ position: 'absolute', left: 480, top: 120 }} />
        <Bubble size={14} fill="#7DD3D0" style={{ position: 'absolute', left: 440, top: 380 }} />
        <Bubble size={18} fill="#7DD3D0" style={{ position: 'absolute', left: 720, top: 0 }} />
      </div>

      {/* 📷 Photo at (764,89) 553×504 — Ocean view from boat */}
      <PhotoFrame
        width={553}
        height={504}
        rotate={1.5}
        bg="bg-ocean-mid"
        label="Photo: Ocean view from boat — cinematic morning light"
        shadow="lg"
        className="absolute"
        style={{ left: 764, top: 89 }}
      />

      {/* Turtle silhouette at (50, 668) 290×182 */}
      <div className="absolute" style={{ left: 50, top: 668 }}>
        <Creature type="turtle" width={290} height={182} fill="#1A7F7C" rotate={-8} />
      </div>

      {/* Fish at (620, 107) 245×107 */}
      <div className="absolute" style={{ left: 620, top: 107 }}>
        <Creature type="fish" width={245} height={107} fill="#E86B35" rotate={12} />
      </div>

      {/* Hero Content at (120, 200) 588×337 */}
      <div className="absolute" style={{ left: 120, top: 200, width: 588, height: 337 }}>
        {/* Label torn tag */}
        <TornTag bg="bg-coral" className="absolute" style={{ top: 0, left: 0 }}>
          Cẩm nang du lịch Cù Lao Chàm
        </TornTag>

        {/* H1 — 341×164 at y=53 */}
        <h1
          className="absolute font-display font-black text-ink-main"
          style={{ left: 0, top: 53, width: 540, fontSize: 76, lineHeight: '82px', letterSpacing: '-2px' }}
        >
          Theo dấu <span className="text-ocean-deep">Cỏ biển</span>
        </h1>

        {/* Subhead 417×34 at y=237 */}
        <p
          className="absolute font-quote text-ink-muted"
          style={{ left: 0, top: 237, width: 540, fontSize: 19, lineHeight: '155%' }}
        >
          Khám phá Cù Lao Chàm, từ Nhà của biển.
        </p>

        {/* CTA at y=291 (217×46) */}
        <button
          className="absolute bg-ocean-primary rounded-[2px] shadow-btn-teal hover:bg-ocean-deep transition-colors flex items-center justify-between"
          style={{ left: 0, top: 291, width: 217, height: 46, paddingLeft: 28, paddingRight: 28 }}
        >
          <span className="text-cta-btn text-ink-white">Khám phá hòn đảo</span>
          <span className="text-cta-btn text-ink-white text-lg">↓</span>
        </button>
      </div>

      {/* Seagrass field at bottom (0, 709) 1440×211 */}
      <SeagrassField width={1440} height={211} className="absolute" style={{ left: 0, top: 709 }} />

      {/* Wave divider at y=840 */}
      <WaveDivider fill="#F5EDD8" className="absolute" style={{ left: 0, top: 840 }} />

      {/* Scroll hint at (650, 886) */}
      <div
        className="absolute text-body-meta text-ink-main opacity-55"
        style={{ left: 650, top: 886, letterSpacing: '2px' }}
      >
        ↓ cuộn để khám phá
      </div>
    </section>
  );
}
