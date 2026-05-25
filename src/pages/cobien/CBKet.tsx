import FrameSection from '@/components/FrameSection';

/**
 * S10 Kết — Cửa thoát — 1440×720 at y=8273. Figma node 129:1414.
 * Dark teal gradient bg + photo overlay top half + translucent closing panel right.
 *
 * Responsive ≥1440: photo trải full viewport width, panel right phủ NỬA PHẢI viewport
 * (left:50% right:0) thay vì cố định 708px — không còn khoảng hở 2 bên ở 1920+.
 * Content panel center-aligned trong toàn nửa phải nên text vẫn đọc tốt.
 */
const A = '/WWF-Cobien/assets/cobien/s10';
const S10_H = 720;

export default function CBKet() {
  return (
    <FrameSection
      height={S10_H}
      background="linear-gradient(180deg, #1A4847 0%, #0F2E2C 50%, #082624 100%)"
      fullBleed={
        <>
          {/* Photo full viewport width — extends -230 above section */}
          <div
            className="absolute"
            style={{ left: 0, right: 0, top: -230, height: 950, zIndex: 1 }}
          >
            <img alt="" className="block w-full h-full object-cover" src={`${A}/photo-bg.jpg`} />
          </div>

          {/* Translucent closing panel — RIGHT half of viewport (50% → right edge).
              backdrop-blur + bg rgba teal. zIndex:11 cao hơn grid wrapper (z:10) để
              hiện trên photo và bất kỳ content nào. Content centered inside extended panel. */}
          <div
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: '50%',
              right: 0,
              top: 0,
              height: 720,
              background: 'rgba(26,173,180,0.7)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              padding: 24,
              gap: 22,
              overflow: 'hidden',
              zIndex: 11,
            }}
          >
            {/* Label tag */}
            <div className="relative" style={{ width: 210, height: 33 }}>
              <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ paddingLeft: 16, paddingRight: 16 }}
              >
                <p
                  className="font-display font-semibold text-white uppercase whitespace-nowrap"
                  style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
                >
                  KẾT · TỪ TÔI ĐẾN BẠN
                </p>
              </div>
            </div>

            {/* Italic intro */}
            <div
              className="font-quote italic text-center"
              style={{ color: '#F5EDD8', fontSize: 22, opacity: 0.88 }}
            >
              <p style={{ lineHeight: 1.42, margin: 0 }}>Rồi sẽ đến lúc bạn quay lại bến cảng.</p>
              <p style={{ lineHeight: 1.42, margin: 0 }}>Tàu rời đảo khi mặt trời đã lên cao.</p>
              <p style={{ lineHeight: 1.42, margin: 0 }}>Những mái nhà nhỏ lùi dần phía sau.</p>
            </div>

            {/* Line divider */}
            <div style={{ width: 56, height: 2 }}>
              <img alt="" className="block w-full h-full" src={`${A}/line.svg`} />
            </div>

            {/* Body 4 lines */}
            <div
              className="font-display font-normal text-center"
              style={{ color: '#DEFAF7', fontSize: 16, opacity: 0.85 }}
            >
              <p style={{ lineHeight: 1.72, margin: 0 }}>Tôi vẫn tiếp tục nuôi những sự sống rất nhỏ dưới mặt nước,</p>
              <p style={{ lineHeight: 1.72, margin: 0 }}>để rồi một ngày nào đó, chúng lớn lên thành đàn cá ngoài khơi,</p>
              <p style={{ lineHeight: 1.72, margin: 0 }}>thành những bữa ăn trên bàn, thành sinh kế của người dân đảo,</p>
              <p style={{ lineHeight: 1.72, margin: 0 }}>và thành một phần trong trải nghiệm mà bạn vừa mang về.</p>
            </div>

            {/* Closing italic */}
            <div
              className="font-quote italic text-center"
              style={{ color: '#DEFAF7', fontSize: 26 }}
            >
              <p style={{ lineHeight: 1.42, margin: 0 }}>Những điều ấy không tự nhiên mà còn lại.</p>
              <p style={{ lineHeight: 1.42, margin: 0 }}>Trong đó có cả bạn.</p>
            </div>
          </div>
        </>
      }
    >
      {/* Grid wrapper trống — toàn content đã chuyển vào fullBleed để full-width responsive */}
      <></>
    </FrameSection>
  );
}
