import TornTag from '@/components/TornTag';

/**
 * S6 Số liệu căng thẳng — 1440×733 at y=5198. White break.
 * Label (663, 59) — "Hiện trạng"
 * Title (120, 104) 1200×56 — "Đây là những gì đang xảy ra."
 * Past stat (200, 240) 380×343 — ~50 ha (faded)
 * Transform arrow (600, 247) 240×140
 * Now stat (860, 240) 380×343 — ~17 ha (Coral)
 * Bottom (120, 643) 1200×31 — quote italic
 */
export default function CBSoLieu() {
  return (
    <section className="relative w-[1440px] h-[733px] bg-ink-white overflow-hidden">
      {/* Centered label */}
      <div className="absolute" style={{ left: 663, top: 59 }}>
        <TornTag bg="bg-coral">Hiện trạng</TornTag>
      </div>

      {/* Title centered */}
      <h2
        className="absolute font-display font-bold text-ink-main text-center"
        style={{ left: 120, top: 104, width: 1200, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Đây là những gì đang xảy ra.
      </h2>

      {/* PAST stat (200, 240) 380×343 */}
      <div className="absolute flex flex-col items-center" style={{ left: 200, top: 240, width: 380 }}>
        <div className="text-tag-up uppercase text-ink-muted opacity-60">TRƯỚC ĐÂY</div>
        <div className="font-display font-black text-sand-dark mt-3" style={{ fontSize: 88, lineHeight: '95%', letterSpacing: '-2.5px', opacity: 0.55 }}>
          ~50 ha
        </div>
        <div className="font-body text-ink-muted text-center mt-3" style={{ fontSize: 15, lineHeight: '155%', opacity: 0.75 }}>
          diện tích cỏ biển<br />ghi nhận trước đây
        </div>
      </div>

      {/* Transform arrow center (600, 247) 240×140 */}
      <div className="absolute flex flex-col items-center" style={{ left: 600, top: 247, width: 240 }}>
        <div className="font-display text-coral" style={{ fontSize: 120, lineHeight: '100%' }}>→</div>
        <div className="font-quote text-coral text-center mt-2" style={{ fontSize: 14 }}>
          hơn 2/3 đã mất
        </div>
      </div>

      {/* NOW stat (860, 240) 380×343 */}
      <div className="absolute flex flex-col items-center" style={{ left: 860, top: 240, width: 380 }}>
        <div className="text-tag-up uppercase text-coral">HIỆN NAY</div>
        <div className="font-display font-black text-coral mt-3" style={{ fontSize: 88, lineHeight: '95%', letterSpacing: '-2.5px' }}>
          ~17 ha
        </div>
        <div className="font-body text-ink-main text-center mt-3" style={{ fontSize: 15, lineHeight: '155%' }}>
          diện tích cỏ biển<br />còn lại hiện nay ⚠️
        </div>
      </div>

      {/* Bottom italic quote (120, 643) 1200×31 */}
      <p
        className="absolute font-quote text-ocean-deep text-center"
        style={{ left: 120, top: 643, width: 1200, fontSize: 22, lineHeight: '155%' }}
      >
        "Hơn hai phần ba đã mất. Và quá trình đó vẫn đang tiếp tục."
      </p>
    </section>
  );
}
