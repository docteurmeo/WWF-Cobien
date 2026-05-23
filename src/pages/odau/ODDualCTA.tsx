import TornTag from '@/components/TornTag';
import Creature from '@/components/Creature';

/**
 * S8 Dual CTA — 1440×560 at y=8480.
 * Same structure as Homepage DualCTA but content differs.
 */
export default function ODDualCTA() {
  return (
    <section className="relative w-[1440px] h-[560px] overflow-hidden bg-ink-bgdark">
      <div className="absolute bg-ocean-deep" style={{ left: 0, top: 0, width: 720, height: 560 }}>
        <div className="w-full h-full flex items-center justify-center text-body-caption text-ink-white opacity-40">
          [ Underwater seagrass photo bg ]
        </div>
      </div>
      <div className="absolute bg-sand-dark" style={{ left: 720, top: 0, width: 720, height: 560 }}>
        <div className="w-full h-full flex items-center justify-center text-body-caption text-ink-white opacity-40">
          [ Island/harbor photo bg ]
        </div>
      </div>

      <div className="absolute inset-0" style={{ background: 'rgba(15, 37, 36, 0.55)' }} />

      {/* LEFT */}
      <div className="absolute" style={{ left: 120, top: 70, width: 507, height: 440 }}>
        <div style={{ marginTop: 30 }}>
          <TornTag bg="bg-ocean-deep">tìm hiểu về Bảo tồn</TornTag>
        </div>
        <h3
          className="font-display font-bold text-ink-white mt-6"
          style={{ fontSize: 42, lineHeight: '115%', letterSpacing: '-0.5px' }}
        >
          Cỏ biển là gì.<br />
          Tại sao đang mất dần.<br />
          Điều gì đang được làm<br />
          để giữ lại.
        </h3>
        <button
          className="mt-8 bg-ocean-deep rounded-[2px] hover:bg-ocean-primary transition-colors flex items-center justify-center shadow-btn-teal"
          style={{ width: 246, height: 44, paddingLeft: 28, paddingRight: 28 }}
        >
          <span className="text-cta-btn text-ink-white">Đọc câu chuyện cỏ biển  →</span>
        </button>
      </div>

      <div className="absolute" style={{ left: 540, top: 460 }}>
        <Creature type="leaf" width={50} height={90} fill="#3D8B3D" rotate={-12} />
      </div>

      {/* RIGHT */}
      <div className="absolute" style={{ left: 770, top: 70, width: 588, height: 440 }}>
        <div style={{ marginTop: 30 }}>
          <TornTag bg="bg-coral">LÊN KẾ HOẠCH</TornTag>
        </div>
        <h3
          className="font-display font-bold text-ink-white mt-6"
          style={{ fontSize: 42, lineHeight: '115%', letterSpacing: '-0.5px' }}
        >
          Cách ra đảo.<br />
          Ở đâu, ăn gì, đi đâu.<br />
          Vì sao nên ở lại<br />
          lâu hơn một ngày.
        </h3>
        <button
          className="mt-8 bg-coral rounded-[2px] hover:opacity-90 transition-opacity flex items-center justify-center shadow-btn-coral"
          style={{ width: 246, height: 44, paddingLeft: 28, paddingRight: 28 }}
        >
          <span className="text-cta-btn text-ink-white">Khám phá Cù Lao Chàm  →</span>
        </button>
      </div>

      <div className="absolute" style={{ left: 1280, top: 470 }}>
        <Creature type="crab" width={80} height={60} fill="#E86B35" rotate={15} />
      </div>
    </section>
  );
}
