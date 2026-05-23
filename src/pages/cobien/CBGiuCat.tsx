import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';

/**
 * S4 Giữ cát — 1440×852 at y=3596.
 * Light off-white bg.
 * Label at (120, 67) — "VAI TRÒ 03 · KỸ SƯ BỜ BIỂN"
 * Title at (120, 120) 452×112 — "Giữ cát. Giữ nước. Giữ bờ."
 * Left S4 Text (120, 258) 588×470.
 * Right Diagram: Cross-section roots (760, 120) 574×574.
 */
export default function CBGiuCat() {
  return (
    <section className="relative w-[1440px] h-[852px] bg-ink-offwhite overflow-hidden">
      {/* Label */}
      <div className="absolute" style={{ left: 120, top: 67 }}>
        <TornTag bg="bg-green-mid">VAI TRÒ 03 · KỸ SƯ BỜ BIỂN</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 120, width: 600, fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
      >
        Giữ cát.<br />
        Giữ nước.<br />
        Giữ bờ.
      </h2>

      {/* === LEFT S4 Text (120, 258) 588×470 === */}
      <div className="absolute" style={{ left: 120, top: 258, width: 588 }}>
        <p className="font-quote text-ocean-deep" style={{ fontSize: 20, lineHeight: '150%' }}>
          "Dưới lớp lá mềm bạn nhìn thấy là một hệ rễ bám chặt vào nền cát."
        </p>
        <p className="font-body text-ink-muted mt-7" style={{ fontSize: 16, lineHeight: '172%' }}>
          Chính cấu trúc ấy khiến cỏ biển được xem như một "kỹ sư hệ sinh thái" của vùng ven bờ. Những bộ rễ nhỏ đó giữ lại trầm tích, làm chậm dòng chảy, giảm bớt năng lượng của sóng trước khi chúng tác động vào bờ. Nền đáy ổn định hơn. Cát ít bị cuốn đi hơn. Với những đảo nhỏ như Cù Lao Chàm — đó là một lớp bảo vệ tự nhiên trước nguy cơ xói lở mà không có công trình nào thay thế được.
        </p>
        <p className="font-body text-ink-main mt-7" style={{ fontSize: 16, lineHeight: '170%', opacity: 0.85 }}>
          Những điều ấy âm thầm diễn ra mỗi ngày. Chính vì lặng lẽ nên đôi khi người ta quên mất rằng có một phần của hòn đảo đang được giữ lại từ dưới đáy biển.
        </p>
      </div>

      {/* === RIGHT Diagram: Cross-section roots (760, 120) 574×574 === */}
      <div
        className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
        style={{ left: 760, top: 120, width: 574, height: 574, transform: 'rotate(1.5deg)' }}
      >
        {/* Top half — water/leaves */}
        <div className="absolute bg-ocean-mid" style={{ left: 12, top: 12, width: 550, height: 290 }}>
          {/* Annotation top */}
          <div className="absolute z-10 text-tag-up uppercase text-ink-white" style={{ left: 24, top: 24 }}>LÁ — quang hợp</div>

          {/* Leaves silhouette */}
          <svg viewBox="0 0 550 290" width="550" height="290" className="absolute inset-0">
            {[
              { x: 80, y: 50, w: 40, h: 200, rot: -8 },
              { x: 160, y: 40, w: 42, h: 220, rot: 12 },
              { x: 260, y: 50, w: 38, h: 200, rot: -6 },
              { x: 360, y: 45, w: 44, h: 215, rot: 8 },
              { x: 460, y: 55, w: 40, h: 195, rot: -10 },
            ].map((b, i) => (
              <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
                <path
                  d={`M ${b.w / 2} 0 Q ${b.w} ${b.h * 0.3} ${b.w * 0.75} ${b.h * 0.55} Q ${b.w * 0.5} ${b.h * 0.8} ${b.w / 2} ${b.h} Q ${b.w * 0.4} ${b.h * 0.8} ${b.w * 0.25} ${b.h * 0.55} Q 0 ${b.h * 0.3} ${b.w / 2} 0 Z`}
                  fill="#3D8B3D"
                  stroke="#fff"
                  strokeWidth="3"
                  opacity="0.8"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Water/Sand separator line */}
        <div className="absolute" style={{ left: 12, top: 302, width: 550, height: 2, background: '#C9B48A' }} />

        {/* Bottom half — sand + roots */}
        <div className="absolute bg-sand-dark" style={{ left: 12, top: 304, width: 550, height: 258 }}>
          {/* Vertical roots */}
          {[80, 170, 280, 380, 470].map((x, i) => (
            <div
              key={i}
              className="absolute bg-green-deep opacity-85 rounded-sm"
              style={{ left: x, top: 8, width: 4, height: 140 + (i % 3) * 30 }}
            />
          ))}
          {/* Annotation bottom */}
          <div className="absolute text-tag-up uppercase text-green-deep" style={{ left: 25, top: 218 }}>
            RỄ — giữ cát, chống xói lở
          </div>
        </div>
      </div>
    </section>
  );
}
