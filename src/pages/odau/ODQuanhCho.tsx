import FrameSection from '@/components/FrameSection';

/**
 * S7 — Quanh chỗ ở · 1440×880 · Figma 129:1760
 *
 * Layout:
 *   - Torn polygon header (120, 72, 243×28) "LANG THANG · QUANH ĐÂY"
 *   - Headline 3 lines 52px Bold (120, 112)
 *   - 3 place cards w=380, h=460, white bg, rounded-2, shadow:
 *       WELL   (113.91, 344.89) · "GIẾNG CỔ CHĂM PA" — Nước ngọt giữa biển
 *       TEMPLE (532, 322.33)    · "CHÙA HẢI TẠNG"   — 200 năm tuổi      ← lifted (-22px)
 *       MARKET (945.96, 334.95) · "CHỢ TÂN HIỆP"    — Mùi của đảo
 *
 *   Each card:
 *     - Photo top 364×180 at (8, 8)
 *     - Label torn tag at top:201, left=20, w=158/149
 *     - Title 22px Bold at top=246
 *     - Body 13px regular muted at top=288, w=340
 *
 * Bg: #f5edd8 · Apply `.card-lift-hover` for interaction
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 880;

type Place = {
  left: number; top: number;
  photo: string;
  labelImg: string; labelW: number; labelText: string;
  title: string;
  body: React.ReactNode;
};

const PLACES: Place[] = [
  {
    left: 113.91, top: 344.89,
    photo: 'imgWell.jpg',
    labelImg: 'imgLabel12.svg', labelW: 158, labelText: 'GIẾNG CỔ CHĂM PA',
    title: 'Nước ngọt giữa biển',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Một chiếc giếng cổ người Chăm nằm giữa những con đường nhỏ ở Bãi Làng. Nước ngọt, dù bốn phía đều là biển. Vào mùa khô, vẫn hiếm khi cạn.</p>
        <p style={{ margin: 0, lineHeight: 1.68, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Có người tin rằng uống nước giếng sẽ đỡ say sóng. Có người bảo ai đang lẻ loi thì uống vài ngụm sẽ sớm gặp duyên lành.</p>
      </>
    ),
  },
  {
    left: 532, top: 322.33,
    photo: 'imgTemple.jpg',
    labelImg: 'imgLabel13.svg', labelW: 149, labelText: 'CHÙA HẢI TẠNG',
    title: '200 năm tuổi',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Chùa Hải Tạng đã ngự trên đảo hơn 200 năm. Không lớn, không cầu kỳ. Nhưng ngư dân vẫn ghé trước mỗi chuyến ra khơi.</p>
        <p style={{ margin: 0, lineHeight: 1.68, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Giữa biển và núi, đây là nơi người ta tìm đến để bình yên — tạm lánh những lo toan.</p>
      </>
    ),
  },
  {
    left: 945.96, top: 334.95,
    photo: 'imgMarket.jpg',
    labelImg: 'imgLabel14.svg', labelW: 149, labelText: 'CHỢ TÂN HIỆP',
    title: 'Mùi của đảo',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Chợ nhỏ, nhưng thứ gì cũng có.</p>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Cá vừa đi biển về, cua đá buộc dây trong rổ, bánh ít còn nóng, rau rừng vừa hái từ núi xuống.</p>
        <p style={{ margin: 0, lineHeight: 1.68, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.68 }}>Rau rừng ở đây có mùi rất riêng — vừa hăng nhẹ vừa mằn mặn vì lớn lên giữa gió biển.</p>
      </>
    ),
  },
];

export default function ODQuanhCho() {
  return (
    <FrameSection height={SECTION_H} background="#f5edd8">
      {/* Torn polygon header */}
      <div className="absolute" style={{ left: 120, top: 72, width: 243, height: 28 }}>
        <div className="absolute" style={{ left: 0, top: 0, width: 243, height: 28 }}>
          <img alt="" className="block max-w-none" style={{ width: '100.46%', height: '103.59%', marginLeft: '-0.25%', marginTop: '-1.8%' }} src={`${A}/imgTornPolygon.svg`} />
        </div>
        <p
          className="absolute font-display font-semibold text-white whitespace-nowrap"
          style={{ left: 18, top: 9, fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
        >
          LANG THANG · QUANH ĐÂY
        </p>
      </div>

      {/* Headline */}
      <div
        className="absolute font-display font-bold text-[#1a2e2d] whitespace-nowrap"
        style={{ left: 120, top: 112, fontSize: 52, letterSpacing: '-0.8px' }}
      >
        <p style={{ margin: 0, lineHeight: 1.08 }}>Không cần lịch trình.</p>
        <p style={{ margin: 0, lineHeight: 1.08 }}>Nhưng nếu muốn đi bộ ra đây,</p>
        <p style={{ margin: 0, lineHeight: 1.08 }}>cũng không xa.</p>
      </div>

      {PLACES.map((p, i) => (
        <div
          key={i}
          className="absolute card-lift-hover"
          style={{ left: p.left, top: p.top, width: 380, height: 460 }}
        >
          <div
            className="bg-white relative overflow-hidden card-lift-inner"
            style={{
              width: 380,
              height: 460,
              borderRadius: 2,
              boxShadow: '0px 14px 32px 0px rgba(13,38,33,0.12)',
              ['--rot' as any]: '0deg',
              ['--lift' as any]: '-8px',
            }}
          >
            {/* Photo — outer frame clips so Ken Burns scale stays inside the 8px white border */}
            <div className="absolute overflow-hidden" style={{ left: 8, top: 8, width: 364, height: 180 }}>
              <div className="card-lift-photo absolute inset-0">
                <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={`${A}/${p.photo}`} />
              </div>
            </div>

            {/* Label torn tag */}
            <div className="absolute card-lift-tag" style={{ left: 20, top: 201, width: p.labelW, height: 33 }}>
              <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/${p.labelImg}`} />
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
                  {p.labelText}
                </p>
              </div>
            </div>

            {/* Title */}
            <p
              className="absolute font-display font-bold text-[#1a2e2d]"
              style={{ left: 20, top: 246, width: 340, fontSize: 22, lineHeight: 1.16, letterSpacing: '-0.3px' }}
            >
              {p.title}
            </p>

            {/* Body */}
            <div
              className="absolute font-display text-[#5a7370]"
              style={{ left: 20, top: 288, width: 340, fontSize: 13, opacity: 0.85 }}
            >
              {p.body}
            </div>
          </div>
        </div>
      ))}
    </FrameSection>
  );
}
