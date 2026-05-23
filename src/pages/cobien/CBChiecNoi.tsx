import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import Bubble from '@/components/Bubble';
import WaveDivider from '@/components/WaveDivider';

/**
 * S2 Chiếc nôi — 1440×800 at y=1780.
 * Light/sand bg.
 * S2 Text Content (733, 130) 587×549.
 * 📷 Photo at (96, 54) 557×509.
 * Container (382, 466) 267×260.
 * Isolation_Mode (76, 376) 133×88.
 * WaveDivider y=720.
 */
export default function CBChiecNoi() {
  return (
    <section className="relative w-[1440px] h-[800px] bg-sand-light overflow-hidden">
      {/* Bubble cluster (180, 180) 1082×418 */}
      <Bubble size={20} className="absolute" style={{ left: 200, top: 220 }} />
      <Bubble size={14} className="absolute" style={{ left: 280, top: 380 }} />
      <Bubble size={18} className="absolute" style={{ left: 80, top: 480 }} />

      {/* LEFT Photo (96, 54) 557×509 */}
      <PhotoFrame
        width={557}
        height={509}
        bg="bg-ocean-mid"
        label="Cá con ẩn giữa lá cỏ biển — đàn dày, ánh sáng dịu"
        rotate={-1.5}
        shadow="lg"
        className="absolute"
        style={{ left: 96, top: 54 }}
      />

      {/* Container (382, 466) 267×260 — additional creature cluster */}
      <div className="absolute" style={{ left: 382, top: 466, width: 267, height: 260 }}>
        <svg viewBox="0 0 267 260" width="267" height="260">
          {/* Cluster of tiny fish silhouettes hiding in leaves */}
          {[
            { x: 30, y: 60, w: 26, h: 14, rot: 15, c: '#E86B35' },
            { x: 70, y: 90, w: 22, h: 12, rot: -10, c: '#F5A07A' },
            { x: 120, y: 50, w: 24, h: 13, rot: 20, c: '#E86B35' },
            { x: 160, y: 110, w: 20, h: 11, rot: -15, c: '#F5A07A' },
            { x: 200, y: 70, w: 22, h: 12, rot: 8, c: '#E86B35' },
            { x: 50, y: 150, w: 24, h: 13, rot: -20, c: '#F5A07A' },
            { x: 110, y: 180, w: 22, h: 12, rot: 12, c: '#E86B35' },
            { x: 170, y: 160, w: 20, h: 11, rot: -8, c: '#F5A07A' },
          ].map((f, i) => (
            <g key={i} transform={`translate(${f.x} ${f.y}) rotate(${f.rot})`}>
              <ellipse cx={f.w / 2} cy={f.h / 2} rx={f.w * 0.42} ry={f.h * 0.4} fill={f.c} stroke="#fff" strokeWidth="1.5" opacity="0.8" />
              <path d={`M ${f.w * 0.7} ${f.h / 2} L ${f.w} ${f.h * 0.15} L ${f.w} ${f.h * 0.85} Z`} fill={f.c} stroke="#fff" strokeWidth="1.5" opacity="0.8" />
            </g>
          ))}
        </svg>
      </div>

      {/* Isolation_Mode (76, 376) 133×88 - small fish illustration */}
      <div className="absolute" style={{ left: 76, top: 376 }}>
        <svg viewBox="0 0 133 88" width="133" height="88">
          <ellipse cx="55" cy="44" rx="40" ry="22" fill="#1A7F7C" stroke="#fff" strokeWidth="4" />
          <path d="M 90 44 L 120 22 L 120 66 Z" fill="#1A7F7C" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="35" cy="38" r="3.5" fill="#fff" />
        </svg>
      </div>

      {/* RIGHT S2 Text Content (733, 130) 587×549 */}
      <div className="absolute" style={{ left: 733, top: 130, width: 587 }}>
        <TornTag bg="bg-coral">VAI TRÒ 01 · VƯỜN ƯƠM</TornTag>

        <h2
          className="font-display font-bold text-ink-main mt-7"
          style={{ fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
        >
          Chiếc nôi dưới mặt nước.
        </h2>

        <p
          className="font-quote text-ocean-deep mt-9"
          style={{ fontSize: 22, lineHeight: '155%' }}
        >
          "Người ta thường gọi những thảm cỏ biển là chiếc nôi của đa dạng sinh học ven bờ."
        </p>

        <p
          className="font-body text-ink-muted mt-9"
          style={{ fontSize: 17, lineHeight: '172%', opacity: 0.88 }}
        >
          Giữa những lá cỏ mảnh và mềm là nơi cá con tìm chỗ trú, tôm nhỏ ẩn mình, cua non kiếm ăn, ốc, hải sâm, cầu gai và nhiều sinh vật nhỏ khác cũng tìm đến đây trong những giai đoạn đầu của vòng đời. Ở những vùng có cỏ biển, số lượng loài cá có thể cao gấp nhiều lần so với những nền đáy trống chỉ có cát hoặc bùn.
        </p>
      </div>

      {/* Wave divider y=720 → next section dark */}
      <WaveDivider fill="#F8F5EF" className="absolute" style={{ left: 0, top: 720 }} />
    </section>
  );
}
