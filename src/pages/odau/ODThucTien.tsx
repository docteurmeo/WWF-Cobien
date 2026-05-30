import FrameSection from '@/components/FrameSection';

/**
 * S6 — Thực tiễn · 1440×997 · Figma 129:1714
 *
 * Layout: 2×2 grid of info cards, each w=560 h=280 with color band on left edge (4px).
 *   - Headline "Một vài điều nên biết / trước khi đặt chỗ." (120, 112) 52px Bold
 *   - Top label "CHUẨN BỊ · THỰC DỤNG" (124, 67) 224×33
 *   - Card SEASON   (117.56, 320, rotate 0.5)  · teal band   · 📅 · "Tháng 2 – tháng 9" · "MÙA & THỜI ĐIỂM" label top-right
 *   - Card GOTHERE  (720,    315.11, rotate -0.5) · coral band · ⛵ · "8h40 sáng" · "CÁCH ĐI" label top-right ⚠️
 *   - Card PREP     (117.56, 640, rotate 0.5)  · green band  · 🎒 · "Không có ATM" · "CHUẨN BỊ" label top-right
 *   - Card FEST     (720,    635.11, rotate -0.5) · sand band  · 🎉 · "Mùng 9–10/3 ÂL" · "LỄ HỘI ĐÁNG THAM GIA" label top-right
 *
 * Bg: white
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 997;

type InfoCard = {
  left: number; top: number; rotate: number;
  bandColor: string;
  borderColor: string;
  italicColor: string;
  emoji: string;
  title: string;
  italicLabel: string;
  body: React.ReactNode;
  labelImg: string;
  labelLeft: number; labelTop: number; labelWrapW: number; labelW: number; labelText: string;
  labelRotate: number;
};

const CARDS: InfoCard[] = [
  {
    left: 117.56, top: 320, rotate: 0.5,
    bandColor: '#2a9b97', borderColor: 'rgba(42,155,151,0.2)', italicColor: '#2a9b97',
    emoji: '📅', title: 'Tháng 2 – tháng 9', italicLabel: 'Mùa du lịch chính',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Biển calmer, tàu chạy đều,</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>homestay đầy nhanh trong mùa hè.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>T10–T1: mùa gió bấc — tàu có thể hoãn,</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>một số dịch vụ đóng. Đảo yên tĩnh hơn nhiều.</p>
      </>
    ),
    labelImg: 'imgLabel7.svg',
    labelLeft: 370.21, labelTop: 20.33, labelWrapW: 164.282, labelW: 164,
    labelText: 'MÙA & THỜI ĐIỂM', labelRotate: -0.5,
  },
  {
    left: 720, top: 315.11, rotate: -0.5,
    bandColor: '#e86b35', borderColor: 'rgba(232,107,53,0.2)', italicColor: '#e86b35',
    emoji: '⛵', title: '8h40 sáng', italicLabel: 'từ cảng Cửa Đại ⚠️',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Chỉ có 1 chuyến tàu gỗ ra đảo buổi sáng.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Ca nô nhanh hơn nhưng chỉ theo tour.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Gợi ý: đặt homestay trước rồi hỏi</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>chủ nhà về lịch tàu hiện tại.</p>
      </>
    ),
    labelImg: 'imgLabel8.svg',
    labelLeft: 452.51, labelTop: 23.96, labelWrapW: 83.285, labelW: 83,
    labelText: 'CÁCH ĐI', labelRotate: 0.5,
  },
  {
    left: 117.56, top: 640, rotate: 0.5,
    bandColor: '#3d8b3d', borderColor: 'rgba(61,139,61,0.2)', italicColor: '#3d8b3d',
    emoji: '🎒', title: 'Không có ATM', italicLabel: 'mang tiền mặt',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Sóng điện thoại — không mạnh ở mọi nơi.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Đảo đã nói không với túi nilon từ 2009.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Mang túi vải, bình nước cá nhân.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Kem chống nắng reef-safe nếu được.</p>
      </>
    ),
    labelImg: 'imgLabel9.svg',
    labelLeft: 438.21, labelTop: 20.33, labelWrapW: 96.284, labelW: 96,
    labelText: 'CHUẨN BỊ', labelRotate: -0.5,
  },
  {
    left: 720, top: 635.11, rotate: -0.5,
    bandColor: '#c9b48a', borderColor: 'rgba(201,180,138,0.2)', italicColor: '#c9b48a',
    emoji: '🎉', title: 'Mùng 9–10/3 ÂL', italicLabel: 'Giỗ Tổ nghề Yến sào',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Tại Miếu Tổ nghề Yến, Bãi Hương.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Lễ tế, rước kiệu dọc bờ biển.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Mùng 3–4/4 ÂL: Lễ hội Cầu Ngư</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>tại Lăng Ông, Bãi Làng.</p>
      </>
    ),
    labelImg: 'imgLabel10.svg',
    labelLeft: 343.52, labelTop: 23.01, labelWrapW: 192.281, labelW: 192,
    labelText: 'LỄ HỘI ĐÁNG THAM GIA', labelRotate: 0.5,
  },
];

export default function ODThucTien() {
  return (
    <FrameSection height={SECTION_H} background="white">
      {/* Top label */}
      <div className="absolute" style={{ left: 124, top: 67, width: 224, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel11.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)',
            padding: '10px 16px',
          }}
        >
          <p
            className="font-display font-semibold text-white whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
          >
            CHUẨN BỊ · THỰC DỤNG
          </p>
        </div>
      </div>

      {/* Headline */}
      <div
        className="absolute font-display font-bold text-[#1a2e2d] whitespace-nowrap"
        style={{ left: 120, top: 112, fontSize: 52, letterSpacing: '-0.8px' }}
      >
        <p style={{ margin: 0, lineHeight: 1.08 }}>Một vài điều nên biết</p>
        <p style={{ margin: 0, lineHeight: 1.08 }}>trước khi đặt chỗ.</p>
      </div>

      {CARDS.map((c, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left: c.left, top: c.top, width: 562.422, height: 284.876 }}
        >
          <div className="flex-none" style={{ transform: `rotate(${c.rotate}deg)` }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: 560, height: 280,
                background: '#f8f5ef',
                border: `1px solid ${c.borderColor}`,
                borderRadius: 2,
                boxShadow: '0px 10px 24px 0px rgba(13,38,33,0.08)',
              }}
            >
              {/* Color band left edge */}
              <div className="absolute" style={{ left: -1, top: -1, width: 4, height: 280, background: c.bandColor }} />

              {/* Emoji */}
              <p
                className="absolute font-display font-black text-[#1a2e2d] whitespace-nowrap"
                style={{ left: 23, top: 19, fontSize: 44, lineHeight: 1, letterSpacing: '-2px' }}
              >
                {c.emoji}
              </p>

              {/* Title */}
              <p
                className="absolute font-display font-bold text-[#1a2e2d] whitespace-nowrap"
                style={{ left: 23, top: 89, fontSize: 24, lineHeight: 1.16, letterSpacing: '-0.3px' }}
              >
                {c.title}
              </p>

              {/* Italic label */}
              <p
                className="absolute font-quote italic whitespace-nowrap"
                style={{ left: 23, top: 119, color: c.italicColor, fontSize: 15, lineHeight: 1.65 }}
              >
                {c.italicLabel}
              </p>

              {/* Body */}
              <div
                className="absolute font-display text-[#5a7370]"
                style={{ left: 23, top: 159, width: 512, fontSize: 13, opacity: 0.85 }}
              >
                {c.body}
              </div>

              {/* Top-right torn label */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: c.labelLeft, top: c.labelTop, width: c.labelWrapW, height: 34 }}
              >
                <div className="flex-none" style={{ transform: `rotate(${c.labelRotate}deg)` }}>
                  <div className="relative" style={{ width: c.labelW, height: 33 }}>
                    <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/${c.labelImg}`} />
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)',
                        padding: '10px 16px',
                      }}
                    >
                      <p
                        className="font-display font-semibold text-white whitespace-nowrap"
                        style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
                      >
                        {c.labelText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </FrameSection>
  );
}
