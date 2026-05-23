import TornTag from '@/components/TornTag';
import Creature from '@/components/Creature';
import Bubble from '@/components/Bubble';
import SeagrassField from '@/components/SeagrassField';
import WaveDivider from '@/components/WaveDivider';

/**
 * Hero — 1440×920 at y=100. Dark underwater.
 * Hero Content at (270, 240) 900×449.
 * Co bien field at (-3121, 41) 7681x1125 (extreme wide — clipped to viewport).
 * CO₂ Bubble cluster at (180, 180) 1082×418.
 * Layer_1 at (223, 460) 253×93 + (1058, 369) 214×134.
 * WaveDivider at y=840 (1440×80).
 * Scroll hint at (695, 880).
 */
export default function CBHero() {
  return (
    <section className="relative w-[1440px] h-[920px] overflow-hidden">
      {/* Dark underwater gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #061411 0%, #0F3330 45%, #175F5C 78%, #3AACA8 100%)',
        }}
      />

      {/* CO₂ Bubble cluster (180,180) 1082×418 */}
      <div className="absolute" style={{ left: 180, top: 180, width: 1082, height: 418 }}>
        <Bubble size={24} fillOpacity={0.30} style={{ position: 'absolute', left: 0, top: 80 }} />
        <Bubble size={16} fillOpacity={0.25} style={{ position: 'absolute', left: 130, top: 200 }} />
        <Bubble size={20} fillOpacity={0.30} style={{ position: 'absolute', left: 280, top: 60 }} />
        <Bubble size={28} fillOpacity={0.35} style={{ position: 'absolute', left: 670, top: 120 }} />
        <Bubble size={14} fillOpacity={0.25} style={{ position: 'absolute', left: 760, top: 340 }} />
        <Bubble size={22} fillOpacity={0.30} style={{ position: 'absolute', left: 940, top: 30 }} />
        <Bubble size={18} fillOpacity={0.25} style={{ position: 'absolute', left: 1060, top: 380 }} />
      </div>

      {/* Layer_1 cut-paper illustrations */}
      <div className="absolute" style={{ left: 223, top: 460 }}>
        <Creature type="leaf" width={120} height={93} fill="#3D8B3D" rotate={-15} />
      </div>
      <div className="absolute" style={{ left: 1058, top: 369 }}>
        <svg viewBox="0 0 214 134" width="214" height="134">
          {[
            { x: 20, y: 50, w: 30, h: 80, rot: -10 },
            { x: 70, y: 30, w: 35, h: 90, rot: 5 },
            { x: 130, y: 60, w: 28, h: 70, rot: -15 },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
              <path
                d={`M ${b.w / 2} 0 Q ${b.w} ${b.h * 0.3} ${b.w * 0.75} ${b.h * 0.55} Q ${b.w * 0.5} ${b.h * 0.8} ${b.w / 2} ${b.h} Q ${b.w * 0.4} ${b.h * 0.8} ${b.w * 0.25} ${b.h * 0.55} Q 0 ${b.h * 0.3} ${b.w / 2} 0 Z`}
                fill="#6BAE6B"
                stroke="#fff"
                strokeWidth="3"
                opacity="0.85"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Hero Content (270, 240) 900×449 */}
      <div className="absolute text-center" style={{ left: 270, top: 240, width: 900 }}>
        {/* Tag */}
        <div className="flex justify-center">
          <TornTag bg="bg-ocean-primary">CỎ BIỂN · CÂU CHUYỆN TỪ DƯỚI ĐÁY</TornTag>
        </div>

        {/* H1 */}
        <h1
          className="font-display font-black text-ink-white mt-8"
          style={{ fontSize: 72, lineHeight: '105%', letterSpacing: '-2px' }}
        >
          Câu chuyện bắt đầu từ nơi<br />
          <span className="text-ocean-light">bạn chưa bao giờ nhìn thấy.</span>
        </h1>

        {/* Sub */}
        <p
          className="font-quote text-sand-mid mt-7"
          style={{ fontSize: 22, lineHeight: '150%', opacity: 0.92 }}
        >
          Tôi là cỏ biển.<br />
          Tôi ở ngay dưới làn nước bạn đang bơi — nhưng ít ai biết tôi là ai.
        </p>

        {/* CTA — outline light */}
        <button
          className="mt-9 inline-flex items-center justify-center rounded-[2px] border-[1.5px] border-ocean-light hover:bg-white/10 transition-colors gap-3"
          style={{ paddingLeft: 28, paddingRight: 28, height: 46 }}
        >
          <span className="text-cta-btn text-ocean-light">Cuộn xuống để gặp tôi</span>
          <span className="text-ocean-light text-lg">↓</span>
        </button>
      </div>

      {/* Wave silhouettes */}
      <div className="absolute rounded-full" style={{ left: -155, top: 600, width: 1750, height: 380, background: 'rgba(125,211,208,0.10)', border: '5px solid rgba(255,255,255,0.50)' }} />
      <div className="absolute rounded-full" style={{ left: -90, top: 680, width: 1620, height: 340, background: 'rgba(58,172,168,0.18)', border: '5px solid rgba(255,255,255,0.50)' }} />
      <div className="absolute rounded-full" style={{ left: -30, top: 760, width: 1500, height: 300, background: 'rgba(26,127,124,0.30)', border: '5px solid rgba(255,255,255,0.55)' }} />

      {/* Scroll hint at (695, 880) */}
      <div
        className="absolute text-body-meta text-ocean-light opacity-50"
        style={{ left: 695, top: 880, letterSpacing: '2px' }}
      >
        ↓ scroll
      </div>

      {/* Wave divider at y=840 — transitioning to S1 dark */}
      <WaveDivider fill="#0F2524" className="absolute" style={{ left: 0, top: 840 }} />
    </section>
  );
}
