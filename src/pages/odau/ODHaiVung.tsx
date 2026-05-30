import FrameSection from '@/components/FrameSection';

/**
 * S2 — Hai vùng để ở · 1440×860 · Figma 129:1583
 *
 * Layout:
 *   - Label "Lựa chọn điểm đến" at (120, 67) 224×33
 *   - Headline "Hai vùng để ở. Bạn chọn đâu?" at (120, 112) 52px
 *   - Card LANG  wrapper (111.04, 248.9, 605.929×544.202) inner rotate(2deg)  card 588×524
 *   - Card HUONG wrapper (723.04, 208.92, 604.93×544.167) inner rotate(-2deg) card 587×524
 *   - LANG label "BÃI LÀNG" (teal hint), HUONG label "BÃI HƯƠNG" (coral hint)
 *
 * Bg: #f5edd8
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 860;

type CardProps = {
  wrapperLeft: number; wrapperTop: number; wrapperW: number; wrapperH: number;
  rotate: number;
  cardW: number;
  photo: string;
  photoW: number;
  headline: string;
  body: React.ReactNode;
  hintColor: string;
  hint: string;
  labelSvg: string;
  labelW: number;
  labelText: string;
};

function Card(p: CardProps) {
  return (
    <div
      className="absolute flex items-center justify-center card-lift-hover"
      style={{ left: p.wrapperLeft, top: p.wrapperTop, width: p.wrapperW, height: p.wrapperH }}
    >
      <div
        className="flex-none card-lift-inner"
        style={{ ['--rot' as any]: `${p.rotate}deg`, ['--lift' as any]: '-8px' }}
      >
        <div
          className="bg-white relative overflow-hidden"
          style={{
            width: p.cardW,
            height: 524,
            borderRadius: 2,
            boxShadow: '0px 20px 48px 0px rgba(13,38,33,0.16)',
          }}
        >
          {/* Photo — outer frame clips so Ken Burns scale stays inside the 8px white border */}
          <div className="absolute overflow-hidden" style={{ left: 8, top: 8, width: p.photoW, height: 280 }}>
            <div className="card-lift-photo absolute inset-0">
              <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={p.photo} />
            </div>
          </div>

          {/* Headline */}
          <p
            className="absolute font-display font-bold text-[#1a2e2d] whitespace-nowrap"
            style={{ left: 24, top: 336, fontSize: 36, lineHeight: 1.1, letterSpacing: '-0.8px' }}
          >
            {p.headline}
          </p>

          {/* Body */}
          <div
            className="absolute font-display text-[#5a7370]"
            style={{ left: 24, top: 392, width: 552, fontSize: 14, opacity: 0.85 }}
          >
            {p.body}
          </div>

          {/* Hint at bottom */}
          <p
            className="absolute font-display font-semibold whitespace-nowrap"
            style={{
              left: 24,
              bottom: -16, // bottom-32 + translateY(100%) ≈ bottom: -16 visually (12px high text shifted +100% from bottom: 32)
              color: p.hintColor,
              fontSize: 12,
              lineHeight: 1,
              letterSpacing: 1,
              textTransform: 'uppercase',
              transform: 'translateY(0)', // visible at card bottom area
            }}
          >
            {p.hint}
          </p>

          {/* Label tag overlay on photo (bottom of photo area, top=271 inside card) */}
          <div className="absolute card-lift-tag" style={{ left: 28, top: 271, width: p.labelW, height: 33 }}>
            <img alt="" className="absolute inset-0 w-full h-full block" src={p.labelSvg} />
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: '50%',
                top: 'calc(50% + 0.5px)',
                transform: 'translate(-50%, -50%)',
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
        </div>
      </div>
    </div>
  );
}

export default function ODHaiVung() {
  return (
    <FrameSection height={SECTION_H} background="#f5edd8">
      {/* Top label tag */}
      <div className="absolute" style={{ left: 120, top: 67, width: 224, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel4.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: '50%',
            top: 'calc(50% + 0.5px)',
            transform: 'translate(-50%, -50%)',
            padding: '10px 16px',
          }}
        >
          <p
            className="font-display font-semibold text-white whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
          >
            Lựa chọn điểm đến
          </p>
        </div>
      </div>

      {/* Headline */}
      <p
        className="absolute font-display font-bold text-[#1a2e2d] whitespace-nowrap"
        style={{ left: 120, top: 112, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.8px' }}
      >
        Hai vùng để ở. Bạn chọn đâu?
      </p>

      {/* Card LANG */}
      <Card
        wrapperLeft={111.04}
        wrapperTop={248.9}
        wrapperW={605.929}
        wrapperH={544.202}
        rotate={2}
        cardW={588}
        photo={`${A}/imgLang.jpg`}
        photoW={572}
        headline="Nơi mọi thứ bắt đầu."
        body={
          <>
            <p style={{ margin: 0, lineHeight: 1.7 }}>Bãi Làng là nơi tàu cập bến.</p>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Nhưng cũng là nơi cuộc sống đảo diễn ra rõ nhất — chợ cá sáng sớm, chùa Hải Tạng, giếng cổ Chăm Pa, tiếng xe máy chạy qua, mùi cà phê quán vừa mở cửa.
            </p>
          </>
        }
        hintColor="#2a9b97"
        hint="GỢI Ý CHO · KHÁCH MUỐN GẦN TRUNG TÂM"
        labelSvg={`${A}/imgLabel2.svg`}
        labelW={80}
        labelText="BÃI LÀNG"
      />

      {/* Card HUONG */}
      <Card
        wrapperLeft={723.04}
        wrapperTop={208.92}
        wrapperW={604.93}
        wrapperH={544.167}
        rotate={-2}
        cardW={587}
        photo={`${A}/imgHuong.jpg`}
        photoW={571}
        headline="Làng chài 400 năm tuổi."
        body={
          <>
            <p style={{ margin: 0, lineHeight: 1.7 }}>Bãi Hương nằm ở phía Nam đảo — xa hơn, chậm hơn, và yên tĩnh hơn.</p>
            <p style={{ margin: 0, lineHeight: 1.7 }}>Làng chài ở đây có lịch sử gần 400 năm. Nghề khai thác yến, đan võng ngô đồng.</p>
          </>
        }
        hintColor="#e86b35"
        hint="GỢI Ý CHO · KHÁCH QUỐC TẾ · 2–7 ĐÊM"
        labelSvg={`${A}/imgLabel3.svg`}
        labelW={96}
        labelText="BÃI HƯƠNG"
      />
    </FrameSection>
  );
}
