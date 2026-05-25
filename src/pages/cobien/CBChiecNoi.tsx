import FrameSection from '@/components/FrameSection';
import BubbleField from '@/components/BubbleField';
import Wave from '@/components/Wave';

/**
 * S2 Chiếc nôi dưới mặt nước — 1440×800 at y=1780. Figma node 129:1131.
 * Light cyan bg #DEFAF7. Layout: 2 polaroid stacked left + headline/body right + crab + grass cluster.
 * Wave bottom transitions into S3 Sand Light #F5EDD8.
 */
const A = '/WWF-Cobien/assets/cobien/s2';
const S2_H = 800;
const S3_BG = '#F5EDD8';

export default function CBChiecNoi() {
  return (
    <FrameSection
      height={S2_H}
      background="#DEFAF7"
      fullBleed={
        <div className="absolute left-0 right-0 bottom-0" style={{ zIndex: 2 }}>
          <Wave fill={S3_BG} height={80} amplitude={14} wavelength={420} speedSeconds={18} />
        </div>
      }
    >
      <BubbleField
        width={1082}
        height={418}
        count={10}
        sizeRange={[10, 22]}
        durationRange={[10, 18]}
        fill="#1A7F7C"
        seed={73}
        style={{ left: 180, top: 180, opacity: 0.18, zIndex: 1 }}
      />

      {/* Big polaroid left (96, 34.71) rotate -2° */}
      <div className="absolute" style={{ left: 96, top: 34.71, width: 556.772, height: 508.547, zIndex: 4 }}>
        <div className="card-lift-hover flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(-2deg)',
              width: 540,
              height: 490,
              background: '#FFFFFF',
              filter: 'drop-shadow(4px 8px 18px rgba(28,43,26,0.28))',
              paddingTop: 5.812,
              paddingLeft: 6,
              paddingRight: 6,
            }}
          >
            <div style={{ width: '100%', height: 440, background: '#b8ccba', overflow: 'hidden' }}>
              <img alt="" className="block w-full h-full object-cover" src={`${A}/photo-big.jpg`} />
            </div>
          </div>
        </div>
      </div>

      {/* Small polaroid (328, 466) rotate 15° — 220×210.
          "Đội thuyền đánh cá trong vùng nước xanh lá" — Figma node 129:1157 serve PNG
          blank, nhưng ảnh thật đã có sẵn trong assets/heros1 từ Homepage Hero
          (cùng tên file, cùng nội dung — designer copy node cũ vào S2). */}
      <div className="absolute" style={{ left: 328, top: 466, width: 266.856, height: 259.785, zIndex: 5 }}>
        <div className="card-lift-hover flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(15deg)',
              width: 220,
              height: 210,
              background: '#FFFFFF',
              filter: 'drop-shadow(4px 8px 18px rgba(28,43,26,0.28))',
              paddingTop: 5.813,
              paddingLeft: 6,
              paddingRight: 6,
            }}
          >
            <div style={{ width: '100%', height: 160, background: '#b8ccba', overflow: 'hidden' }}>
              <img alt="" className="block w-full h-full object-cover" src={`${A}/photo-small.jpg`} />
            </div>
          </div>
        </div>
      </div>

      {/* Crab decoration (76, 376) */}
      <div className="absolute pointer-events-none" style={{ left: 76, top: 376, width: 133, height: 88, zIndex: 6 }}>
        <img alt="" className="block w-full h-full" src={`${A}/crab.svg`} />
      </div>

      {/* Grass cluster bottom (472, bottom) */}
      <div className="absolute pointer-events-none" style={{ left: 472, bottom: 0, width: 131, height: 101, zIndex: 3 }}>
        <img alt="" className="block w-full h-full" src={`${A}/grass-cluster.svg`} />
      </div>

      {/* Text right (733, 130) 587w */}
      <div className="absolute flex flex-col" style={{ left: 733, top: 130, width: 587, gap: 24, zIndex: 5 }}>
        <div className="relative" style={{ width: 198, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <p
              className="font-display font-semibold uppercase whitespace-nowrap"
              style={{ color: '#1A2E2D', fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
            >
              VAI TRÒ 01 · VƯỜN ƯƠM
            </p>
          </div>
        </div>

        <p className="font-display font-bold" style={{ color: '#1A2E2D', fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.8px', margin: 0 }}>
          Chiếc nôi dưới mặt nước.
        </p>

        <p className="font-quote italic" style={{ color: '#1A7F7C', fontSize: 22, lineHeight: 1.55, margin: 0 }}>
          Người ta thường gọi những thảm cỏ biển là chiếc nôi của đa dạng sinh học ven bờ.
        </p>

        <div style={{ width: 56, height: 2 }}>
          <img alt="" className="block w-full h-full" src={`${A}/line.svg`} />
        </div>

        <div className="font-display font-normal" style={{ color: '#1A2E2D', fontSize: 16, lineHeight: '24px', opacity: 0.92 }}>
          <p style={{ margin: 0 }}>
            Giữa những lá cỏ mảnh và mềm là nơi cá con tìm chỗ trú, tôm nhỏ ẩn mình, cua non kiếm ăn, ốc, hải sâm, cầu gai và nhiều sinh vật nhỏ khác cũng tìm đến đây trong những giai đoạn đầu của vòng đời.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Ở những vùng có cỏ biển, số lượng loài cá có thể cao gấp nhiều lần so với những nền đáy trống chỉ có cát hoặc bùn.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Điều đó cũng có nghĩa là rất nhiều thứ bạn sẽ gặp trên đảo - từ những đàn cá ngoài bãi lặn cho đến những món ăn trên bàn - đôi khi bắt đầu từ một khoảng đáy biển tưởng như rất bình thường.
          </p>
        </div>
      </div>
    </FrameSection>
  );
}
