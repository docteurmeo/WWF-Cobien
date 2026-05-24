/**
 * S3 Three Cards — 1440×1026 at y=2010. Pixel-perfect from Figma node 54:17.
 * Real assets in /public/assets/s3cards/
 */
import FrameSection from '@/components/FrameSection';

const A = '/WWF-Cobien/assets/s3cards';

type CardProps = {
  imgSrc: string;
  labelImg: string;
  labelText: string;
  title: string;
  body: string;
  cta: string;
  ctaColor: string;
  x: number;
  y: number;
  rotate: number;
  labelW: number;
  labelLeft: number;
  labelRotate?: number;
};

function Card({ imgSrc, labelImg, labelText, title, body, cta, ctaColor, x, y, rotate, labelW, labelLeft, labelRotate = 0 }: CardProps) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: x, top: y, width: rotate < 0 ? 373.489 : rotate < 1 ? 364.524 : 376.156, height: 530 }}
    >
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <div
          className="bg-white relative overflow-clip rounded-[2px]"
          style={{ width: 360, height: 520, boxShadow: '0px 18px 40px 0px rgba(13,38,33,0.13)' }}
        >
          {/* Photo Frame */}
          <div className="absolute bg-white overflow-clip" style={{ left: 6, top: 6, width: 348, height: 252 }}>
            <div className="absolute" style={{ left: 4, top: 4, width: 340, height: 244, background: '#b8ccba' }}>
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSrc} />
            </div>
          </div>

          {/* Torn-tag Label */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: labelLeft,
              top: 238,
              width: labelW,
              height: 33,
              transform: labelRotate ? `rotate(${labelRotate}deg)` : undefined,
            }}
          >
            <div className="relative" style={{ width: labelW, height: 33 }}>
              <img alt="" className="absolute inset-0 w-full h-full" src={labelImg} />
              <div
                className="absolute flex items-center justify-center"
                style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
              >
                <p
                  className="font-display font-semibold text-white uppercase whitespace-nowrap"
                  style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
                >
                  {labelText}
                </p>
              </div>
            </div>
          </div>

          {/* Content text block */}
          <div className="absolute flex flex-col items-start" style={{ left: 24, top: 298, width: 312, gap: 16 }}>
            <p
              className="font-display font-bold"
              style={{ color: '#1a2e2d', fontSize: 28, lineHeight: 'normal', letterSpacing: '-0.3px' }}
            >
              {title}
            </p>
            <p
              className="font-display font-normal whitespace-pre-wrap"
              style={{ color: '#5a7370', fontSize: 12, lineHeight: 1.5, letterSpacing: '0.2px' }}
            >
              {body}
            </p>
            <p
              className="font-display font-semibold whitespace-pre-wrap"
              style={{ color: ctaColor, fontSize: 15, lineHeight: 1, letterSpacing: '0.5px' }}
            >
              {cta}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThreeCards() {
  return (
    <FrameSection height={1026} background="#f8f5ef">
      {/* Section title at (120, 128) */}
      <div
        className="absolute font-display font-bold whitespace-nowrap"
        style={{ left: 120, top: 128, color: '#1a2e2d', fontSize: 52, letterSpacing: '-0.8px', lineHeight: 0 }}
      >
        <p style={{ lineHeight: 1.08, marginBottom: 0 }}>Đây là nơi để sống —</p>
        <p style={{ lineHeight: 1.08 }}>không chỉ để ghé qua.</p>
      </div>

      {/* Cua at (1128, 108) 165×129 */}
      <div className="absolute" style={{ left: 1128, top: 108, width: 165, height: 129 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgCua.svg`} />
      </div>

      {/* Group 1 bubble cluster at (920, 140) 428×148 */}
      <div className="absolute" style={{ left: 920, top: 140, width: 428, height: 148 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgGroup1.svg`} />
      </div>

      {/* Section Label "Khám phá cù lao chàm" at (120, 83) */}
      <div className="absolute" style={{ left: 120, top: 83, width: 206, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel3.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
        >
          <p
            className="font-display font-semibold text-white uppercase whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
          >
            Khám phá cù lao chàm
          </p>
        </div>
      </div>

      {/* Card — EAT at (106.26, 350.38) rotated +1.5° */}
      <Card
        imgSrc={`${A}/imgEat.jpg`}
        labelImg={`${A}/imgLabel.svg`}
        labelText="Ăn gì?"
        title="Từ biển lên bàn ăn."
        body={`Bữa trưa, thay vì đưa ra thực đơn, dân làng sẽ hỏi bạn: "Bữa ni ăn cá tôm hầy? Mới lên sáng ni!"\nChính điều ấy làm bữa ăn ở đây khác đi. Bạn không thể đoán trước bữa ăn sắp tới có gì, nhưng có thể chắc chắn rằng mỗi nguyên liệu đều ở độ tươi ngon nhất.`}
        cta={'Từ biển lên bàn ăn  →'}
        ctaColor="#e86b35"
        x={106.26}
        y={350.38}
        rotate={1.5}
        labelW={82}
        labelLeft={20}
      />

      {/* Card — STAY at (540, 322.86) rotated -0.5° */}
      <Card
        imgSrc={`${A}/imgStay.jpg`}
        labelImg={`${A}/imgLabel1.svg`}
        labelText="Ở đâu"
        title="Sống cùng người địa phương."
        body="Ở Cù Lao Chàm, bạn sẽ không thấy nhiều khách sạn lớn. Thay vào đó là những ngôi nhà nhỏ, nằm dọc theo Bãi Làng, Bãi Hương. Người mở cửa đón bạn không phải là lễ tân, mà là chính chủ nhà."
        cta={'Sống cùng người đảo  →'}
        ctaColor="#2a9b97"
        x={540}
        y={322.86}
        rotate={-0.5}
        labelW={64}
        labelLeft={17.63}
        labelRotate={0.5}
      />

      {/* Card — EXPLORE at (960, 350.69) rotated -1.8° */}
      <Card
        imgSrc={`${A}/imgExplore.jpg`}
        labelImg={`${A}/imgLabel2.svg`}
        labelText="đi đâu"
        title="Lên rừng - Xuống biển"
        body="Ở Cù Lao Chàm, dưới mặt nước là nhiều lớp sự sống khác nhau. Rời biển một chút, bạn sẽ bước vào một không gian hoàn toàn khác. Rừng ở Cù Lao Chàm không quá dày đặc, nhưng đủ để bạn cảm nhận sự thay đổi."
        cta={'Bãi nào, làm gì  →'}
        ctaColor="#3d8b3d"
        x={960}
        y={350.69}
        rotate={-1.8}
        labelW={72}
        labelLeft={19.92}
      />

      {/* Layer_1 decoration at (493, 824) 184×163 */}
      <div className="absolute" style={{ left: 493, top: 824, width: 184, height: 163 }}>
        <img alt="" className="block w-full h-full" src={`${A}/imgLayer1.svg`} />
      </div>
    </FrameSection>
  );
}
