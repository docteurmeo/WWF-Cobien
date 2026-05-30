import FrameSection from '@/components/FrameSection';

/**
 * S1 — Định nghĩa lại chỗ ở · 1440×745 · Figma 129:1564
 *
 * Layout (vertical centered, left col + right col):
 *   - LEFT (120, vertical-center, w=588) gap-36: label + 52px headline 3 lines + body block
 *   - RIGHT photo (830.58, 120, w=480 h=360) rotate(1.5deg) + heavy shadow
 *   - RIGHT factoid 5-10% (838.63, 479.66, w=396 h=192) rotate(-2deg) white card with shadow
 *
 * Bg: #f8f5ef
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 745;

export default function ODDinhNghia() {
  return (
    <FrameSection height={SECTION_H} background="#f8f5ef">
      {/* RIGHT — Photo frame at (830.58, 120) 489×372 wrapper, inner card 480×360 rotate(1.5deg) */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 830.58, top: 120, width: 489.259, height: 372.442 }}
      >
        <div className="flex-none" style={{ transform: 'rotate(1.5deg)' }}>
          <div
            className="bg-white relative overflow-hidden"
            style={{ width: 480, height: 360, boxShadow: '0px 16px 40px 0px rgba(13,38,33,0.16)' }}
          >
            <img
              alt=""
              className="absolute object-cover pointer-events-none"
              style={{ left: 8, top: 8, width: 464, height: 344 }}
              src={`${A}/imgPhongNgNhCaSNhinRaCayXanh.jpg`}
            />
          </div>
        </div>
      </div>

      {/* RIGHT — Factoid 5–10% at (838.63, 479.66) wrapper 402×205, inner rotate(-2deg) */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 838.63, top: 479.66, width: 402.864, height: 205.751 }}
      >
        <div className="flex-none" style={{ transform: 'rotate(-2deg)' }}>
          <div
            className="bg-white relative overflow-hidden flex flex-col items-start"
            style={{
              width: 396.403,
              height: 192.034,
              padding: '18px 22px',
              borderRadius: 2,
              gap: 8,
              boxShadow: '0px 14px 32px 0px rgba(13,38,33,0.12)',
            }}
          >
            <div className="flex items-center" style={{ gap: 8 }}>
              <div className="relative" style={{ width: 10, height: 10 }}>
                <img alt="" className="block w-full h-full" src={`${A}/imgEllipse.svg`} />
              </div>
              <p
                className="font-display font-semibold text-[#e86b35] whitespace-nowrap"
                style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
              >
                KHÁCH QUA ĐÊM
              </p>
            </div>
            <p
              className="font-display font-black text-[#e86b35] whitespace-nowrap"
              style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-1px' }}
            >
              5–10%
            </p>
            <div
              className="font-display text-[#5a7370] whitespace-nowrap"
              style={{ fontSize: 14, opacity: 0.82, lineHeight: 1.58 }}
            >
              <p style={{ margin: 0 }}>Phần lớn đến và về trong ngày.</p>
              <p style={{ margin: 0 }}>Nhưng những người ở lại thường là người</p>
              <p style={{ margin: 0 }}>hiểu đảo nhất — và thường là người muốn quay lại.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LEFT — Content column (120, vertical-center, w=588) gap-36 */}
      <div
        className="absolute flex flex-col items-start"
        style={{ left: 120, top: '50%', transform: 'translateY(-50%)', width: 588, gap: 36 }}
      >
        <div className="relative" style={{ width: 224, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel1.svg`} />
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
              KHÔNG GIỐNG KHÁCH SẠN
            </p>
          </div>
        </div>

        <div
          className="font-display font-bold text-[#1a2e2d] w-full"
          style={{ fontSize: 52, letterSpacing: '-0.8px' }}
        >
          <p style={{ margin: 0, lineHeight: 1.08 }}>Ở Cù Lao Chàm,</p>
          <p style={{ margin: 0, lineHeight: 1.08 }}>bạn không thấy nhiều</p>
          <p style={{ margin: 0, lineHeight: 1.08 }}>khách sạn lớn.</p>
        </div>

        <div className="flex flex-col w-full" style={{ gap: 8 }}>
          <p
            className="font-display font-medium text-[#1a2e2d] w-full"
            style={{ fontSize: 19, lineHeight: 1.62 }}
          >
            Thay vào đó là những ngôi nhà nhỏ xinh xắn, nằm dọc theo Bãi Làng, Bãi Hương.
          </p>
          <p
            className="font-quote italic font-medium text-[#1a7f7c] w-full"
            style={{ fontSize: 18, lineHeight: 1.42 }}
          >
            Họ có thể là ngư dân. Có thể là người lái tàu. Có thể sáng đi biển, chiều về đón khách.
          </p>
          <div
            className="font-display text-[#5a7370] w-full"
            style={{ fontSize: 16, opacity: 0.88 }}
          >
            <p style={{ margin: 0, lineHeight: 1.72 }}>Bạn ở lại trong chính không gian sống của họ. Ăn cùng họ. Trò chuyện với họ.</p>
            <p style={{ margin: 0, lineHeight: 1.72 }}>Và đôi khi, đó là lúc bạn hiểu nơi này rõ nhất.</p>
          </div>
        </div>
      </div>
    </FrameSection>
  );
}
