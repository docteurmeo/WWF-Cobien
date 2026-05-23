import Bubble from '@/components/Bubble';
import WaveDivider from '@/components/WaveDivider';

/**
 * S4 Bridge — 1440×650 at y=3036.
 * Gradient sand → ocean (diving down feel).
 * S4 Text at (330, 140) 780×316.
 * 3 intro lines + divider line + big closing text.
 * Diving bubbles scattered.
 * Wave dividers top (1440x80 at y=80) and bottom (1440x80 at y=570).
 */
export default function Bridge() {
  return (
    <section className="relative w-[1440px] h-[650px] overflow-hidden">
      {/* Gradient bg: light sand → teal light */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #F8F5EF 0%, #E8D5B0 50%, #7DD3D0 100%)',
        }}
      />

      {/* Wave divider top (transitioning from S3 off-white) */}
      <WaveDivider fill="#F8F5EF" flip className="absolute" style={{ left: 0, top: 80 }} />

      {/* Diving bubbles */}
      <Bubble size={24} className="absolute" style={{ left: 180, top: 200 }} />
      <Bubble size={16} className="absolute" style={{ left: 280, top: 300 }} />
      <Bubble size={28} className="absolute" style={{ left: 1180, top: 160 }} />
      <Bubble size={20} className="absolute" style={{ left: 1280, top: 260 }} />
      <Bubble size={14} className="absolute" style={{ left: 820, top: 380 }} />
      <Bubble size={22} className="absolute" style={{ left: 480, top: 420 }} />

      {/* S4 Text at (330, 140) 780×316 */}
      <div className="absolute" style={{ left: 330, top: 140, width: 780, height: 316 }}>
        <p className="font-quote text-ink-main opacity-78 text-center" style={{ fontSize: 18, lineHeight: '148%' }}>
          Bữa ăn bạn vừa thưởng thức.
        </p>
        <p className="font-quote text-ink-main opacity-78 text-center mt-4" style={{ fontSize: 18, lineHeight: '148%' }}>
          Mặt nước trong xanh bạn đang bơi.
        </p>
        <p className="font-quote text-ink-main opacity-78 text-center mt-4" style={{ fontSize: 18, lineHeight: '148%' }}>
          Bãi biển chưa bị xói lở.
        </p>

        {/* Divider line at y=117 (56×0) */}
        <div className="mx-auto my-6" style={{ width: 56, height: 2, background: '#1A7F7C', opacity: 0.5 }} />

        {/* Big closing text */}
        <p
          className="font-display font-bold text-ink-main text-center"
          style={{ fontSize: 48, lineHeight: '118%', letterSpacing: '-0.8px' }}
        >
          Tất cả những điều đó<br />
          được giữ lại bởi thứ bạn<br />
          chưa bao giờ nhìn thấy.
        </p>
      </div>

      {/* Wave divider bottom (transitioning to S5 dark) */}
      <WaveDivider fill="#0F2524" className="absolute" style={{ left: 0, top: 570 }} />
    </section>
  );
}
