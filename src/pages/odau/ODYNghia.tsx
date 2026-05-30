import FrameSection from '@/components/FrameSection';

/**
 * S5 — Vì sao ở lại lâu hơn · 1440×1109 · Figma 129:1679
 *
 * Layout:
 *   - Bg: gradient-to-r #f8f5ef → #eaf4f1 → rgba(125,211,208,0.45)
 *   - Background SVG illus (Group 2) at (200, 180) 1116×146 — decorative
 *   - Content column centered (270, 100, w=900) gap-24:
 *       label + 52px headline (2 lines) + body + italic teal quote + 56×2 line + final body
 *   - RIGHT stat 5–10% with 3 ripple rings (top=313–408, right edge)
 *       Apply `.ripple-echo` motion class staggered
 *   - 3 polaroid cards (sinh kế) at top=578: "Bữa ăn = Sinh kế" / "Chuyến đi biển = Sinh kế" / "Chuyến thuyền = Sinh kế"
 *       Wrapper container: (1440-1060)/2=190, top=578, w=1060 h=323
 *       Card 1: left=-1.4   rotate(0.5deg)
 *       Card 2: left=363.16 rotate(-0.3deg)
 *       Card 3: left=726.88 rotate(0.4deg)
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 1109;

type Polaroid = {
  wrapperLeft: number; wrapperTop: number; wrapperW: number; wrapperH: number;
  rotate: number;
  photo: string;
  caption: string;
};

const POLAROIDS: Polaroid[] = [
  { wrapperLeft: -1.4,   wrapperTop: -1.44, wrapperW: 334.806, wrapperH: 325.885, rotate: 0.5,  photo: 'imgImageWithFallback.jpg',  caption: 'Bữa ăn = Sinh kế' },
  { wrapperLeft: 363.16, wrapperTop: -0.87, wrapperW: 333.687, wrapperH: 324.734, rotate: -0.3, photo: 'imgImageWithFallback1.jpg', caption: 'Chuyến đi biển = Sinh kế' },
  { wrapperLeft: 726.88, wrapperTop: -1.15, wrapperW: 334.247, wrapperH: 325.31,  rotate: 0.4,  photo: 'imgImageWithFallback2.jpg', caption: 'Chuyến thuyền = Sinh kế' },
];

export default function ODYNghia() {
  return (
    <FrameSection
      height={SECTION_H}
      background="linear-gradient(to right, #f8f5ef 0%, #eaf4f1 50%, rgba(125,211,208,0.45) 100%)"
    >
      {/* Background illustration */}
      <div className="absolute" style={{ left: 200, top: 180, width: 1116, height: 146 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgGroup2.svg`} />
      </div>

      {/* Content column centered (270, 100, 900) gap-24 */}
      <div
        className="absolute flex flex-col items-center"
        style={{ left: 270, top: 100, width: 900, gap: 24 }}
      >
        {/* Label */}
        <div className="relative" style={{ width: 256, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel6.svg`} />
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
              Ý NGHĨA · BẢO TỒN GẮN SINH KẾ
            </p>
          </div>
        </div>

        {/* Headline 52px centered, 2 lines */}
        <div
          className="font-display font-bold text-[#1a2e2d] text-center whitespace-nowrap"
          style={{ fontSize: 52, letterSpacing: '-0.8px' }}
        >
          <p style={{ margin: 0, lineHeight: 1.12 }}>Mỗi đêm bạn ở lại</p>
          <p style={{ margin: 0, lineHeight: 1.12 }}>không chỉ là một đêm ngủ.</p>
        </div>

        {/* Body — medium 17 muted opacity-88 */}
        <p
          className="font-display font-medium text-[#5a7370] text-center"
          style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.88, width: '100%' }}
        >
          Bữa ăn tối bạn đặt tại nhà chủ là thu nhập của một gia đình ngư dân — người sáng đánh cá, chiều đón khách, tối nấu cơm. Chuyến đi biển đêm bạn tham gia là sinh kế trực tiếp của người lái thuyền.
        </p>

        {/* Italic teal quote — 22px Lora */}
        <p
          className="font-quote italic font-medium text-[#1a7f7c] text-center"
          style={{ fontSize: 22, lineHeight: 1.42, width: '100%' }}
        >
          Và khi người dân sống được từ những điều ấy, họ có lý do để tiếp tục giữ biển.
        </p>

        {/* Line divider 56×2 — explicit height wrap */}
        <div style={{ width: 56, height: 2 }}>
          <img alt="" className="block w-full h-full" src={`${A}/imgLine3.svg`} />
        </div>

        {/* Final body */}
        <div
          className="font-display text-[#1a2e2d] text-center"
          style={{ fontSize: 16, opacity: 0.9, width: '100%' }}
        >
          <p style={{ margin: 0, lineHeight: 1.72 }}>Bảo tồn không chỉ xảy ra ở Bãi Bắc hay trong văn phòng khu bảo tồn.</p>
          <p style={{ margin: 0, lineHeight: 1.72 }}>Nó xảy ra ở mỗi bữa cơm, mỗi đêm ở lại, mỗi lần bạn chọn ở lại lâu hơn một ngày.</p>
        </div>
      </div>

      {/* Stat 5-10% with ripple rings (right side) */}
      <div
        className="absolute ripple-echo"
        style={{ left: 1086, top: 313, width: 330, height: 330, ['--ring-delay' as any]: '0s' }}
      >
        <img alt="" className="absolute inset-0 w-full h-full block" style={{ opacity: 0.2 }} src={`${A}/imgRipple3.png`} />
      </div>
      <div
        className="absolute ripple-echo"
        style={{ left: 1137, top: 364, width: 228, height: 228, ['--ring-delay' as any]: '-1.6s' }}
      >
        <img alt="" className="absolute inset-0 w-full h-full block" style={{ opacity: 0.3 }} src={`${A}/imgRipple2.png`} />
      </div>
      <div
        className="absolute ripple-echo"
        style={{ left: 1181, top: 408, width: 140, height: 140, ['--ring-delay' as any]: '-3.2s' }}
      >
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgRipple1.svg`} />
      </div>

      {/* Stat text 5-10% */}
      <div
        className="absolute flex flex-col items-end text-right"
        style={{ left: 1102, top: 439, width: 260, gap: 4 }}
      >
        <p
          className="font-display font-black text-[#e86b35] whitespace-nowrap"
          style={{ fontSize: 72, lineHeight: 0.95, letterSpacing: '-2.5px' }}
        >
          5–10%
        </p>
        <div
          className="font-display text-[#5a7370] whitespace-nowrap"
          style={{ fontSize: 12, letterSpacing: '0.2px' }}
        >
          <p style={{ margin: 0, lineHeight: 1.55 }}>khách ở lại qua đêm</p>
          <p style={{ margin: 0, lineHeight: 1.55 }}>nhưng tạo phần lớn sinh kế bền vững</p>
        </div>
      </div>

      {/* 3 polaroid cards container — centered (1440-1060)/2=190, top=578, w=1060 */}
      <div
        className="absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: 578,
          width: 1060,
          height: 323,
        }}
      >
        {POLAROIDS.map((p, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: p.wrapperLeft, top: p.wrapperTop, width: p.wrapperW, height: p.wrapperH }}
          >
            <div className="flex-none" style={{ transform: `rotate(${p.rotate}deg)` }}>
              <div
                className="bg-white flex flex-col items-start relative"
                style={{
                  width: 332,
                  height: 323,
                  padding: '10px 10px 0',
                  gap: 8,
                  filter: 'drop-shadow(0px 20px 12.5px rgba(0,0,0,0.1)) drop-shadow(0px 8px 5px rgba(0,0,0,0.1))',
                }}
              >
                <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
                  <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={`${A}/${p.photo}`} />
                </div>
                {/* Caption strip — `relative` so the absolute <p> anchors here, not the card root */}
                <div className="relative w-full" style={{ height: 15, opacity: 0.5 }}>
                  <p
                    className="absolute font-quote italic text-[#1a2e2d] whitespace-nowrap"
                    style={{ left: 0, top: 0, fontSize: 10, lineHeight: '15px' }}
                  >
                    {p.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FrameSection>
  );
}
