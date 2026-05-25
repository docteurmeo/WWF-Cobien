import FrameSection from '@/components/FrameSection';

/**
 * S4 Giữ cát, giữ nước, giữ bờ — 1440×852 at y=3596. Figma node 129:1218.
 * Gradient bg sand-light → white. Text left + cross-section diagram card right rotate -1.5°.
 */
const A = '/WWF-Cobien/assets/cobien/s4';
const S4_H = 852;

export default function CBGiuCat() {
  return (
    <FrameSection
      height={S4_H}
      background="linear-gradient(180deg, #F5EDD8 0%, #FFFFFF 100%)"
    >
      {/* Label tag (120, 67) 210×33 */}
      <div className="absolute" style={{ left: 120, top: 67, width: 210, height: 33, zIndex: 4 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
          <p
            className="font-display font-semibold text-white uppercase whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
          >
            VAI TRÒ 03 · KỸ SƯ BỜ BIỂN
          </p>
        </div>
      </div>

      {/* Headline (120, 120) */}
      <div
        className="absolute font-display font-bold"
        style={{ left: 120, top: 120, color: '#1A2E2D', fontSize: 52, letterSpacing: '-0.8px', zIndex: 4 }}
      >
        <p style={{ lineHeight: 1.08, margin: 0 }}>Giữ cát. Giữ nước.</p>
        <p style={{ lineHeight: 1.08, margin: 0 }}>Giữ bờ.</p>
      </div>

      {/* Text block (120, 258) 588w */}
      <div className="absolute flex flex-col" style={{ left: 120, top: 258, width: 588, gap: 18, zIndex: 4 }}>
        <p className="font-quote italic" style={{ color: '#1A7F7C', fontSize: 22, lineHeight: 1.55, margin: 0 }}>
          "Dưới lớp lá mềm bạn nhìn thấy là một hệ rễ bám chặt vào nền cát."
        </p>
        <div className="font-display font-normal" style={{ color: '#5A7370', fontSize: 16, lineHeight: '24px' }}>
          <p style={{ margin: 0 }}>
            Chính cấu trúc ấy khiến cỏ biển được xem như một "kỹ sư hệ sinh thái" của vùng ven bờ. Những bộ rễ nhỏ giữ lại trầm tích, làm chậm dòng chảy và giảm bớt năng lượng của sóng trước khi chúng tác động vào bờ. Nhờ vậy, nền đáy ổn định hơn, cát ít bị cuốn đi hơn. Với những đảo nhỏ như Cù Lao Chàm, đó là một lớp bảo vệ tự nhiên rất quan trọng trước nguy cơ xói lở.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Cỏ biển cũng góp phần làm cho nước biển trong hơn. Khi dòng nước đi qua thảm cỏ, các hạt bùn mịn lắng xuống đáy. Một phần dinh dưỡng dư thừa như nitơ hay phốt-pho cũng được hấp thụ bớt. Nước trong hơn, ánh sáng xuống được sâu hơn, và nhiều hệ sinh thái khác dưới biển cũng nhờ đó mà được hưởng lợi.
          </p>
        </div>
        <p className="font-quote italic" style={{ color: '#1A7F7C', fontSize: 22, lineHeight: 1.55, margin: 0 }}>
          Những điều ấy âm thầm diễn ra mỗi ngày. Chính vì lặng lẽ nên đôi khi người ta quên mất rằng có một phần của hòn đảo đang được giữ lại từ dưới đáy biển.
        </p>
      </div>

      {/* Diagram card right (760, 105.34) 560×560 rotate -1.5° */}
      <div className="absolute" style={{ left: 760, top: 105.34, width: 574.467, height: 574.467, zIndex: 5 }}>
        <div className="card-lift-hover flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(-1.5deg)',
              width: 560,
              height: 560,
              background: '#FFFFFF',
              borderRadius: 2,
              boxShadow: '0 18px 40px rgba(13,38,33,0.16)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Cross-section photo — exact crop từ Figma:
                img kích thước 252.18% × 168.5% container, offset -50.84% / -67.84%.
                Cho phép xem 1 phần specific (mid-bottom) của ảnh diagram đầy đủ. */}
            <div style={{ position: 'absolute', left: 12, top: 12, width: 536, height: 534.796, overflow: 'hidden' }}>
              <img
                alt=""
                src={`${A}/diagram-cross-section.jpg`}
                style={{
                  position: 'absolute',
                  width: '252.18%',
                  height: '168.5%',
                  left: '-50.84%',
                  top: '-67.84%',
                  maxWidth: 'none',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* Top label LÁ — quang hợp (green) */}
            <p
              className="absolute font-display font-semibold uppercase whitespace-nowrap"
              style={{ left: 24, top: 24, color: '#3D8B3D', fontSize: 12, lineHeight: 1, letterSpacing: '1px', opacity: 0.92, margin: 0 }}
            >
              LÁ — quang hợp
            </p>
            {/* Bottom label RỄ — giữ cát (white) */}
            <p
              className="absolute font-display font-semibold uppercase text-white whitespace-nowrap"
              style={{ left: 25.44, top: 518.16, fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
            >
              RỄ — giữ cát, chống xói lở
            </p>
          </div>
        </div>
      </div>
    </FrameSection>
  );
}
