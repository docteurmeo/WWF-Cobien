import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import Creature from '@/components/Creature';
import SeagrassField from '@/components/SeagrassField';

/**
 * S5 Seagrass Narrator — 1440×820 at y=3686.
 * DARK collage moment.
 * Container left (120, 70) 486×750 — oval photo of seagrass macro.
 * S5 Text Content (732, 70) 588×586.
 * 🐢 Fish at (571, 535) 90×71.
 * Layer_1 illustration at (1211, 108) 104×94.
 * Cỏ biển dài/tròn psd at (288,236)/(70,118).
 * Co bien seagrass at (0, 656) 1440×211.
 * 4 stat callouts in grid.
 */

const stats = [
  { num: '35×', label: 'hấp thụ CO₂ nhanh hơn rừng trên cạn', color: '#E86B35' },
  { num: '80%', label: 'loài hải sản thương mại phụ thuộc vào cỏ biển', color: '#7DD3D0' },
  { num: '800T', label: 'carbon lưu giữ trên mỗi hecta', color: '#6BAE6B' },
  { num: '17 ha', label: 'còn lại tại Cù Lao Chàm — đang thu hẹp', color: '#E86B35' },
];

export default function SeagrassNarrator() {
  return (
    <section className="relative w-[1440px] h-[820px] overflow-hidden">
      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0A1E1D 0%, #102F2D 50%, #122A28 100%)' }}
      />

      {/* Subtle wave silhouettes */}
      <div
        className="absolute rounded-full"
        style={{ left: -130, top: 50, width: 1700, height: 280, background: 'rgba(26,127,124,0.25)', border: '3px solid rgba(255,255,255,0.30)' }}
      />
      <div
        className="absolute rounded-full"
        style={{ left: -30, top: 140, width: 1500, height: 240, background: 'rgba(58,172,168,0.30)', border: '3px solid rgba(255,255,255,0.30)' }}
      />

      {/* LEFT — Container (120, 70) 486×750 — oval photo of seagrass */}
      <div className="absolute" style={{ left: 120, top: 70, width: 486, height: 680 }}>
        {/* Oval photo */}
        <div
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: 460,
            height: 540,
            transform: 'rotate(-2.5deg)',
          }}
        >
          <PhotoFrame
            width={460}
            height={540}
            bg="bg-green-deep"
            label="Macro cỏ biển — lá, gân, cá con ẩn trong lá"
            shadow="lg"
            style={{ borderRadius: 900 }}
          />
        </div>

        {/* "Cỏ biển dài.psd" placeholder at (70, 118) 155×171 — psuedoseagrass leaf */}
        <div className="absolute" style={{ left: 70, top: 118 }}>
          <Creature type="leaf" width={155} height={171} fill="#3D8B3D" rotate={-15} />
        </div>

        {/* "Cỏ biển trònpsd.psd" at (288, 236) 233x233 - cluster */}
        <div className="absolute" style={{ left: 288, top: 236, width: 233, height: 233 }}>
          <svg viewBox="0 0 233 233" width="233" height="233">
            {[
              { x: 80, y: 10, rot: -15 },
              { x: 120, y: 20, rot: 5 },
              { x: 60, y: 40, rot: -25 },
              { x: 150, y: 30, rot: 18 },
              { x: 90, y: 60, rot: -8 },
              { x: 130, y: 70, rot: 12 },
            ].map((b, i) => (
              <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
                <path
                  d="M 8 0 Q 20 30 14 80 Q 10 130 8 170 Q 6 130 2 80 Q -4 30 8 0 Z"
                  fill="#3D8B3D"
                  stroke="#fff"
                  strokeWidth="3"
                  opacity="0.9"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Fish at (571, 535) 90×71 */}
      <div className="absolute" style={{ left: 571, top: 535 }}>
        <Creature type="fish" width={90} height={71} fill="#E86B35" rotate={18} />
      </div>

      {/* Layer_1 small leaf at (1211, 108) 104×94 */}
      <div className="absolute" style={{ left: 1211, top: 108 }}>
        <Creature type="leaf" width={50} height={94} fill="#6BAE6B" rotate={20} />
      </div>

      {/* === RIGHT — S5 Text Content (732, 70) 588×586 === */}
      <div className="absolute" style={{ left: 732, top: 70, width: 588 }}>
        {/* Tag */}
        <div className="flex items-center gap-3 mb-3">
          <TornTag bg="bg-green-mid">Cỏ biển · Seagrass</TornTag>
          <span className="text-tag-up uppercase text-sand-mid opacity-60">Độ sâu 3–5m · Bãi Hương</span>
        </div>

        {/* H2 */}
        <h2
          className="font-display font-bold text-ink-white mt-4"
          style={{ fontSize: 56, lineHeight: '108%', letterSpacing: '-1.5px' }}
        >
          Tôi là cỏ biển.<br />
          <span className="text-ocean-light">Không phải rong.</span>
        </h2>

        {/* Body */}
        <p
          className="font-body text-sand-mid mt-8"
          style={{ fontSize: 17, lineHeight: '170%', opacity: 0.88 }}
        >
          Nhiều người lần đầu nhìn thấy thường nghĩ tôi là rong. Nhưng tôi có rễ, có thân ngầm, có lá. Và tôi ra hoa.
        </p>

        {/* 4 STAT GRID 2×2 */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-8">
          {stats.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="font-display font-black flex-shrink-0" style={{ color: s.color, fontSize: 32, letterSpacing: '-1px', lineHeight: '100%' }}>
                {s.num}
              </div>
              <div className="font-body text-sand-light" style={{ fontSize: 13, lineHeight: '150%', opacity: 0.82 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="mt-8 inline-flex items-center justify-center bg-ocean-primary rounded-[2px] hover:bg-ocean-deep transition-colors"
          style={{ width: 216, height: 46 }}
        >
          <span className="text-cta-btn text-ink-white">Câu chuyện của tôi  →</span>
        </button>
      </div>

      {/* Seagrass field at bottom (0, 656) 1440×211 */}
      <SeagrassField width={1440} height={164} baseColor="#1E5C1E" className="absolute" style={{ left: 0, top: 656 }} />
    </section>
  );
}
