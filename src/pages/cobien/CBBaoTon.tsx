import FrameSection from '@/components/FrameSection';

/**
 * S8 Câu chuyện bảo tồn Cù Lao Chàm — 1440×1430 at y=6843. Figma node 129:1389.
 * Off-White bg #F8F5EF. Longest section. 2 column body + 2 portrait cards staggered.
 */
const A = '/WWF-Cobien/assets/cobien/s8';
const S8_H = 1430;

export default function CBBaoTon() {
  return (
    <FrameSection height={S8_H} background="#F8F5EF">
      {/* 2 Bubble accents top-right (Figma node 129:1391 + 129:1392).
          Render thẳng inline (không cần SVG) vì là 2 ellipse solid color teal #3AACA8
          opacity 0.26. Apply .bubble-cluster (breathe + drift gentle) — 2 phase khác nhau
          để không sync. */}
      <div
        className="absolute pointer-events-none bubble-cluster"
        style={{
          left: 1280,
          top: 80,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(58,172,168,0.26)',
          zIndex: 2,
          ['--bub-dur' as string]: '9s',
        } as React.CSSProperties}
      />
      <div
        className="absolute pointer-events-none bubble-cluster"
        style={{
          left: 1340,
          top: 140,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'rgba(58,172,168,0.26)',
          zIndex: 2,
          ['--bub-dur' as string]: '7s',
          ['--bub-delay' as string]: '-2.5s',
        } as React.CSSProperties}
      />

      {/* Tag (120, 83) 210×33 */}
      <div className="absolute" style={{ left: 120, top: 83, width: 210, height: 33, zIndex: 4 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label-main.svg`} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
          <p
            className="font-display font-semibold text-white uppercase whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
          >
            BẢO TỒN · CÙ LAO CHÀM
          </p>
        </div>
      </div>

      {/* Headline (120, 128) */}
      <div
        className="absolute font-display font-bold"
        style={{ left: 120, top: 128, color: '#1A2E2D', fontSize: 52, letterSpacing: '-0.8px', zIndex: 4 }}
      >
        <p style={{ lineHeight: 1.08, margin: 0 }}>Bảo tồn không phải là</p>
        <p style={{ lineHeight: 1.08, margin: 0 }}>công việc của riêng ai.</p>
      </div>

      {/* Body LEFT (120, 292) 588w */}
      <div
        className="absolute font-display font-normal"
        style={{ left: 120, top: 292, width: 588, color: '#5A7370', opacity: 0.88, zIndex: 4 }}
      >
        <p style={{ fontSize: 16, lineHeight: '24px', margin: 0 }}>
          Khi dành thời gian ở lại Cù Lao Chàm, bạn sẽ dần nhận ra rằng mặt biển vẫn trong xanh và nhịp sống vẫn chậm rãi, bình yên.
        </p>
        <p style={{ height: 24, margin: 0 }}>&nbsp;</p>
        <p className="font-quote italic" style={{ color: '#3D8B3D', fontSize: 26, lineHeight: 1.42, margin: 0 }}>
          Điều đó không phải điều tự nhiên mà có.
        </p>
        <p style={{ height: 24, margin: 0 }}>&nbsp;</p>
        <p style={{ fontSize: 16, lineHeight: '24px', margin: 0 }}>
          Trong nhiều năm, Cù Lao Chàm cũng từng đứng trước áp lực lớn từ du lịch, từ tàu thuyền, từ khai thác quá mức và những thay đổi diễn ra rất nhanh quanh vùng biển ven bờ. Có thời điểm, những thảm cỏ biển bị xáo trộn mạnh bởi chân vịt ca nô, bởi mỏ neo, bởi lớp bùn cát bị khuấy lên liên tục. Những khoảng cỏ từng rất dày bắt đầu mỏng đi.
        </p>
        <p style={{ height: 24, margin: 0 }}>&nbsp;</p>
        <p style={{ fontSize: 16, lineHeight: '24px', margin: 0 }}>
          Người dân ở đây nhận ra điều đó từ khá sớm bằng quan sát hằng ngày của chính mình. Họ thấy mùa cá thay đổi, thấy nước có lúc đục hơn, thấy những bãi quen thuộc không còn như trước. Và chính từ những thay đổi nhỏ ấy, lối sống bảo tồn bắt đầu hình thành.
        </p>
      </div>

      {/* Body RIGHT (731, 838) 588w */}
      <div
        className="absolute font-display font-normal"
        style={{ left: 731, top: 838, width: 588, color: '#5A7370', opacity: 0.88, zIndex: 4 }}
      >
        <p style={{ fontSize: 16, lineHeight: '24px', margin: 0 }}>
          Ở nhiều nơi, bảo tồn thường được hình dung như công việc của các nhà khoa học hay những chương trình lớn. Nhưng ở Cù Lao Chàm, nó trước hết đến từ những người sống cùng biển. Họ không nhất thiết phải quen với những thuật ngữ như "đa dạng sinh học" hay "carbon xanh", nhưng lại tâm niệm rằng: khi biển thay đổi, cuộc sống trên đảo cũng thay đổi theo.
        </p>
        <p style={{ height: 24, margin: 0 }}>&nbsp;</p>
        <p style={{ fontSize: 16, lineHeight: '24px', margin: 0 }}>
          Ở Cù Lao Chàm, người dân đã quen với việc hạn chế túi nilon từ nhiều năm trước. Người ta mang giỏ đi chợ, dùng lại những thứ còn dùng được, hạn chế để rác trôi ra biển. Ngoài khơi, có những mùa cần dừng đánh bắt để cá tôm sinh sản và quay trở lại. Có những vùng nước được ngư dân nhắc nhau giữ gìn hiện trạng tự nhiên. Có những nhóm cộng đồng cùng dọn biển, đi kiểm tra, hoặc báo lại khi thấy điều bất thường xảy ra dưới nước.
        </p>
        <p style={{ height: 24, margin: 0 }}>&nbsp;</p>
        <p className="font-quote italic" style={{ color: '#3D8B3D', fontSize: 26, lineHeight: 1.42, margin: 0 }}>
          Bảo tồn ở Cù Lao Chàm không tách rời cuộc sống. Nó đi vào thói quen, nhịp sống và cách người ta ứng xử với vùng biển đã nuôi lớn mình qua nhiều thế hệ.
        </p>
      </div>

      {/* Portrait 1: top-right (815.63, 281.88) rotate -3° — 340×459.495 */}
      <div className="absolute" style={{ left: 815.63, top: 281.88, width: 363.582, height: 476.66, zIndex: 5 }}>
        <div className="card-lift-hover flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(-3deg)',
              width: 340,
              height: 459.495,
              background: '#FFFFFF',
              borderRadius: 2,
              boxShadow: '0 16px 36px rgba(13,38,33,0.14)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', left: 8, top: 8, width: 324, height: 320, overflow: 'hidden', background: '#b8ccba' }}>
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={`${A}/photo1.jpg`} />
            </div>
            {/* Label tag on photo bottom edge */}
            <div className="absolute" style={{ left: 15, top: 311.18, width: 234.863, height: 35.046 }}>
              <div className="flex items-center justify-center w-full h-full">
                <div style={{ transform: 'rotate(0.5deg)', width: 234.584, height: 33, position: 'relative' }}>
                  <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label-card1.svg`} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
                    <p
                      className="font-display font-semibold text-white uppercase whitespace-nowrap"
                      style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
                    >
                      Phân vùng &amp; kiểm soát tàu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="absolute font-display font-normal"
              style={{ left: 16, top: 370, width: 308, color: '#5A7370', fontSize: 16, lineHeight: '24px', margin: 0 }}
            >
              Khu vực cỏ biển và san hô nhạy cảm được khoanh vùng, hạn chế tàu cập. Bãi Bắc — khu thí điểm phục hồi.
            </p>
          </div>
        </div>
      </div>

      {/* Portrait 2: bottom-left (231.02, 833.88) rotate 3° — 340×470.804 */}
      <div className="absolute" style={{ left: 231.02, top: 833.88, width: 364.174, height: 487.953, zIndex: 5 }}>
        <div className="card-lift-hover flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(3deg)',
              width: 340,
              height: 470.804,
              background: '#FFFFFF',
              borderRadius: 2,
              boxShadow: '0 16px 36px rgba(13,38,33,0.14)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', left: 8, top: 8, width: 324, height: 320, overflow: 'hidden', background: '#b8ccba' }}>
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={`${A}/photo2.jpg`} />
            </div>
            <div className="absolute" style={{ left: 15, top: 311.18, width: 206.264, height: 34.796 }}>
              <div className="flex items-center justify-center w-full h-full">
                <div style={{ transform: 'rotate(0.5deg)', width: 205.984, height: 33, position: 'relative' }}>
                  <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label-card2.svg`} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
                    <p
                      className="font-display font-semibold text-white uppercase whitespace-nowrap"
                      style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
                    >
                      Nói không với túi nilon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="absolute font-display font-normal"
              style={{ left: 16, top: 370, width: 308, color: '#5A7370', fontSize: 16, lineHeight: '24px', margin: 0 }}
            >
              Người dân Cù Lao Chàm đã quen với việc hạn chế túi nilon từ nhiều năm trước — thành thói quen của cả cộng đồng.
            </p>
          </div>
        </div>
      </div>
    </FrameSection>
  );
}
