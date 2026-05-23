import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';
import WaveDivider from '@/components/WaveDivider';
import Creature from '@/components/Creature';

/**
 * S1 Tôi là cỏ biển — 1440×760 at y=1020.
 * IMG full bg (1440×760) — dark underwater photo.
 * S1 Text at (120, 120) 588×349.
 * Factoid Callout at (126, 560) 354×208.
 * Container right (907, 132) 417×399 — circular seagrass cluster.
 * Cỏ biển trònpsd at (684, 136) 362×372, Cỏ biển dài at (1201, 377) 233×233.
 * WaveDivider at y=680.
 */
export default function CBToiLa() {
  return (
    <section className="relative w-[1440px] h-[760px] overflow-hidden">
      {/* Full-frame dark photo IMG (1440×760) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A1F1D 0%, #0F2E2B 45%, #143F3C 100%)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center text-body-caption text-ink-white opacity-30">
          [ Underwater seagrass field photo ]
        </div>
      </div>

      {/* S1 Text (120, 120) 588×349 */}
      <div className="absolute" style={{ left: 120, top: 120, width: 588 }}>
        <TornTag bg="bg-green-mid">VAI TRÒ · TÔI LÀ AI?</TornTag>

        <h2
          className="font-display font-bold text-ink-white mt-7"
          style={{ fontSize: 56, lineHeight: '108%', letterSpacing: '-1.5px' }}
        >
          Tôi là cỏ biển
        </h2>

        <p
          className="font-body text-sand-mid mt-7"
          style={{ fontSize: 17, lineHeight: '170%', opacity: 0.88 }}
        >
          Ở những vùng nước nông — nơi dòng chảy không quá mạnh và ánh sáng mặt trời còn chạm tới đáy — tôi lớn thành những thảm cỏ trải dài theo nền cát. Tôi là cỏ biển. Một loài thực vật có hoa, sống hoàn toàn dưới nước mặn. Tôi có rễ, có thân ngầm, có lá.
        </p>
      </div>

      {/* Factoid Callout (126, 560) 354×208 */}
      <div
        className="absolute bg-ink-white rounded-[2px] shadow-card"
        style={{ left: 126, top: 560, width: 354, height: 208, transform: 'rotate(-1.5deg)', padding: '18px 22px' }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-coral" />
          <span className="text-tag-up uppercase text-coral">CỎ BIỂN ≠ RONG BIỂN</span>
        </div>
        <p
          className="font-body text-ink-main mt-3"
          style={{ fontSize: 14, lineHeight: '158%' }}
        >
          Rong biển không có rễ, không có mạch dẫn nhựa, không ra hoa. Cỏ biển là thực vật có hoa thật sự — gần với cỏ trên bờ hơn là với rong.
        </p>
      </div>

      {/* RIGHT — Container with circular seagrass cluster (907, 132) 417×399 */}
      <div className="absolute" style={{ left: 907, top: 132, width: 417, height: 399 }}>
        <PhotoFrame
          width={417}
          height={399}
          bg="bg-green-deep"
          label="Thảm cỏ biển ở độ sâu 4-5m, Cù Lao Chàm"
          shadow="lg"
          style={{ borderRadius: 999 }}
        />
      </div>

      {/* Cỏ biển trònpsd (684, 136) 362×372 — illustrated seagrass cluster overlay */}
      <div className="absolute" style={{ left: 684, top: 136, width: 362, height: 372 }}>
        <svg viewBox="0 0 362 372" width="362" height="372">
          {[
            { x: 100, y: 30, w: 50, h: 200, rot: -15 },
            { x: 160, y: 40, w: 60, h: 230, rot: 5 },
            { x: 230, y: 50, w: 55, h: 210, rot: 15 },
            { x: 80, y: 100, w: 45, h: 180, rot: -25 },
            { x: 130, y: 130, w: 50, h: 200, rot: -5 },
            { x: 200, y: 120, w: 55, h: 210, rot: 10 },
            { x: 260, y: 140, w: 48, h: 185, rot: 20 },
            { x: 60, y: 180, w: 42, h: 160, rot: -30 },
            { x: 290, y: 200, w: 40, h: 150, rot: 25 },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
              <path
                d={`M ${b.w / 2} 0 Q ${b.w * 0.95} ${b.h * 0.3} ${b.w * 0.78} ${b.h * 0.5} Q ${b.w * 0.55} ${b.h * 0.75} ${b.w / 2} ${b.h} Q ${b.w * 0.45} ${b.h * 0.75} ${b.w * 0.22} ${b.h * 0.5} Q ${b.w * 0.05} ${b.h * 0.3} ${b.w / 2} 0 Z`}
                fill="#3D8B3D"
                stroke="#fff"
                strokeWidth="3"
                opacity="0.85"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Cỏ biển dài.psd (1201, 377) 233×233 - single tall blade */}
      <div className="absolute" style={{ left: 1201, top: 377 }}>
        <Creature type="leaf" width={233} height={233} fill="#3D8B3D" rotate={-8} />
      </div>

      {/* Wave divider at y=680 (transitioning to S2 light) */}
      <WaveDivider fill="#F5EDD8" className="absolute" style={{ left: 0, top: 680 }} />
    </section>
  );
}
