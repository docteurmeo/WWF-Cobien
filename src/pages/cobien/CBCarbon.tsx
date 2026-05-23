import TornTag from '@/components/TornTag';
import HexBadge from '@/components/HexBadge';
import RippleCircles from '@/components/RippleCircles';
import WaveDivider from '@/components/WaveDivider';
import Bubble from '@/components/Bubble';

/**
 * S5 Một kho carbon xanh — 1440×750 at y=4448. DARK collage moment.
 * ⬡ Hex 35× at (285, 287) 187×187.
 * 🏷 HIỆU SUẤT CARBON at (261, 469) 187×38.
 * S5 Text Content (732, 80) 588×555.
 * WaveDivider at y=670.
 */
export default function CBCarbon() {
  return (
    <section className="relative w-[1440px] h-[750px] overflow-hidden">
      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #061B19 0%, #102E2B 55%, #1A4A47 100%)',
        }}
      />

      {/* Light shafts */}
      <div
        className="absolute"
        style={{ left: 200, top: -100, width: 160, height: 1000, background: 'rgba(255,255,255,0.05)', transform: 'rotate(-15deg)' }}
      />
      <div
        className="absolute"
        style={{ left: 700, top: -150, width: 180, height: 1100, background: 'rgba(255,255,255,0.05)', transform: 'rotate(8deg)' }}
      />

      {/* Wave silhouettes */}
      <div className="absolute rounded-full" style={{ left: -130, top: 0, width: 1700, height: 200, background: 'rgba(26,127,124,0.20)', border: '2px solid rgba(255,255,255,0.30)' }} />
      <div className="absolute rounded-full" style={{ left: -155, top: 580, width: 1750, height: 240, background: 'rgba(58,172,168,0.30)', border: '3px solid rgba(255,255,255,0.30)' }} />

      {/* Ripple circles around hex */}
      <RippleCircles centerX={285 + 93} centerY={287 + 93} radii={[110, 165, 225]} color="#E86B35" />

      {/* Hex 35× badge (285, 287) 187×187 */}
      <div className="absolute" style={{ left: 285, top: 287 }}>
        <HexBadge size={187} number="35×" caption="CARBON" fill="#E86B35" rotate={-6} />
      </div>

      {/* CO₂ bubbles rising from hex */}
      <Bubble size={20} fillOpacity={0.35} className="absolute" style={{ left: 330, top: 220 }} />
      <Bubble size={14} fillOpacity={0.35} className="absolute" style={{ left: 400, top: 180 }} />
      <Bubble size={16} fillOpacity={0.35} className="absolute" style={{ left: 260, top: 160 }} />

      {/* HIỆU SUẤT CARBON tag at (261, 469) */}
      <div className="absolute" style={{ left: 261, top: 469 }}>
        <TornTag bg="bg-ocean-primary">HIỆU SUẤT CARBON</TornTag>
      </div>
      <p
        className="absolute font-body text-sand-mid"
        style={{ left: 290, top: 506, width: 280, fontSize: 14, lineHeight: '150%', opacity: 0.85 }}
      >
        so với rừng nhiệt đới<br />trên cùng diện tích ⚠️
      </p>

      {/* RIGHT — S5 Text Content (732, 80) 588×555 */}
      <div className="absolute" style={{ left: 732, top: 80, width: 588 }}>
        <TornTag bg="bg-coral">VAI TRÒ 04 · KHO CARBON XANH</TornTag>

        <h2
          className="font-display font-bold text-ink-white mt-7"
          style={{ fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
        >
          Bể chứa carbon xanh<br />
          của đại dương.
        </h2>

        <p className="font-quote text-ocean-light mt-9" style={{ fontSize: 20, lineHeight: '150%' }}>
          "Có một điều ít ai biết qua những chuyến đi ngắn."
        </p>

        <p className="font-body text-sand-mid mt-9" style={{ fontSize: 16, lineHeight: '170%', opacity: 0.90 }}>
          Những thảm cỏ biển cũng là một trong những "bể chứa carbon xanh" quan trọng của đại dương. Trong quá trình quang hợp, tôi hấp thụ CO₂ từ khí quyển. Một phần carbon ấy được giữ lại trong lá, trong thân ngầm, và đặc biệt trong lớp trầm tích nằm bên dưới — nơi nó có thể được lưu giữ trong hàng nghìn năm.
        </p>

        <div className="mt-7 mx-0" style={{ width: 48, height: 2, background: 'rgba(232,107,53,0.55)' }} />

        <p className="font-quote text-ocean-light mt-7" style={{ fontSize: 22, lineHeight: '142%' }}>
          Tôi là một phần nhỏ trong bức tranh rất lớn.<br />
          Nhưng nếu mất đi, không dễ có thứ gì thay thế.
        </p>
      </div>

      <WaveDivider fill="#FFFFFF" className="absolute" style={{ left: 0, top: 670 }} />
    </section>
  );
}
