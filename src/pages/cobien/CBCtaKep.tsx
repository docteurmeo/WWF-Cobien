import TornTag from '@/components/TornTag';

/**
 * CTA Kép — 1440×440 at y=8993.
 * Left: TIẾP THEO — Khám phá Cù Lao Chàm
 * Right: TÀI NGUYÊN — Xem nguồn tham khảo
 */
export default function CBCtaKep() {
  return (
    <section className="relative w-[1440px] h-[440px] overflow-hidden">
      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #082624 0%, #0F2E2C 100%)' }}
      />

      {/* Diagonal wave divider between halves */}
      <div
        className="absolute rounded-full"
        style={{
          left: 290,
          top: -120,
          width: 900,
          height: 700,
          background: 'rgba(16,46,44,0.6)',
          border: '2px solid rgba(255,255,255,0.30)',
          transform: 'rotate(12deg)',
        }}
      />

      {/* LEFT — Khám phá Cù Lao Chàm (120, 40) 588×360 */}
      <div className="absolute" style={{ left: 120, top: 40, width: 588 }}>
        <div style={{ marginTop: 30 }}>
          <TornTag bg="bg-coral">TIẾP THEO</TornTag>
        </div>
        <h3
          className="font-display font-bold text-ink-white mt-6"
          style={{ fontSize: 44, lineHeight: '108%' }}
        >
          Khám phá<br />
          Cù Lao Chàm  →
        </h3>
        <p className="font-body text-sand-mid mt-6" style={{ fontSize: 15, opacity: 0.85, lineHeight: '170%' }}>
          Ăn gì, ở đâu, đi đâu —<br />và tại sao nên ở lại lâu hơn một ngày.
        </p>
        <div className="font-body text-ocean-light mt-4 opacity-65" style={{ fontSize: 12, letterSpacing: '0.5px' }}>
          /kham-pha/
        </div>
      </div>

      {/* RIGHT — Tài nguyên (732, 40) 587×360 */}
      <div className="absolute" style={{ left: 732, top: 60, width: 587 }}>
        <div style={{ marginTop: 30 }}>
          <TornTag bg="bg-ocean-primary">TÀI NGUYÊN</TornTag>
        </div>
        <h3
          className="font-display font-bold text-ink-white mt-6"
          style={{ fontSize: 44, lineHeight: '108%' }}
        >
          Xem nguồn<br />
          tham khảo  →
        </h3>
        <p className="font-body text-sand-mid mt-6" style={{ fontSize: 15, opacity: 0.85, lineHeight: '170%' }}>
          Báo cáo khoa học,<br />hướng dẫn bảo tồn, tài liệu tải về.
        </p>
        <div className="font-body text-ocean-light mt-4 opacity-65" style={{ fontSize: 12, letterSpacing: '0.5px' }}>
          /tai-nguyen/
        </div>
      </div>
    </section>
  );
}
