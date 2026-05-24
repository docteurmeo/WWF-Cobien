/**
 * S7 Community — 1440×1018 at y=4506. Pixel-perfect from Figma node 56:22.
 * Bg: Sand/02 Mid (#E8D5B0). 3 portrait cards + Anh Vũ pull quote block.
 */
import FrameSection from '@/components/FrameSection';

const A = '/WWF-Cobien/assets/s7';

type PortraitProps = {
  imgSrc: string;
  labelImg: string;
  labelText: string;
  labelW: number;
  quote: string;
  x: number;
  y: number;
  containerW: number;
  containerH: number;
  cardW: number;
  cardH: number;
  rotate: number;
  labelRotate?: number;
  labelLeft: number;
  labelTop: number;
};

function Portrait({ imgSrc, labelImg, labelText, labelW, quote, x, y, containerW, containerH, cardW, cardH, rotate, labelRotate = 0, labelLeft, labelTop }: PortraitProps) {
  const photoH = cardH === 440 ? 320 : 280;
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: x, top: y, width: containerW, height: containerH }}
    >
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <div
          className="bg-white relative overflow-clip rounded-[2px]"
          style={{ width: cardW, height: cardH, boxShadow: '0px 16px 36px 0px rgba(13,38,33,0.14)' }}
        >
          {/* Photo */}
          <div className="absolute" style={{ left: 8, top: 8, width: cardW - 16, height: photoH, background: '#b8ccba' }}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSrc} />
          </div>

          {/* Torn-tag Label */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: labelLeft,
              top: labelTop,
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

          {/* Quote */}
          <p
            className="absolute font-display font-normal"
            style={{ left: 16, top: cardH === 440 ? 370 : 330, width: cardW - 32, color: '#5a7370', fontSize: 16, lineHeight: '24px' }}
          >
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <FrameSection height={1018} background="#e8d5b0">
      {/* Section label at (120, 83) */}
      <div className="absolute" style={{ left: 120, top: 83, width: 206, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel4.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
        >
          <p className="font-display font-semibold text-white uppercase whitespace-nowrap" style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}>
            Con người Cù Lao Chàm
          </p>
        </div>
      </div>

      {/* Section H2 at (120, 124) */}
      <div
        className="absolute font-display font-bold whitespace-nowrap"
        style={{ left: 120, top: 124, color: '#1a2e2d', fontSize: 52, letterSpacing: '-0.8px', lineHeight: 0 }}
      >
        <p style={{ lineHeight: 1.08, marginBottom: 0 }}>Những người sống</p>
        <p style={{ lineHeight: 1.08 }}>cùng biển.</p>
      </div>

      {/* Lead paragraph (right side, right-aligned) at (732, 88) 588w */}
      <div
        className="absolute font-quote italic text-right whitespace-pre-wrap"
        style={{ left: 732, top: 88, width: 588, color: '#1a2e2d', fontSize: 18, opacity: 0.92, lineHeight: 0 }}
      >
        <p style={{ lineHeight: 'normal', marginBottom: 0 }}>
          Ở Cù Lao Chàm, biển không đứng ngoài đời sống. Nó đi vào nhịp ngày của con người một cách tự nhiên, đến mức nhiều khi rất khó phân biệt đâu là công việc, đâu là lối sống đã hình thành qua nhiều năm.
        </p>
        <p style={{ lineHeight: 'normal', marginBottom: 0 }}>{'​'}</p>
        <p style={{ lineHeight: 'normal' }}>
          {`Họ đã sống cùng biển và gìn giữ nó từ trước khi khái niệm "bảo tồn" được đặt tên.`}
        </p>
      </div>

      {/* 3 Portraits */}
      <Portrait
        imgSrc={`${A}/imgFisher.jpg`}
        labelImg={`${A}/imgLabel.svg`}
        labelText="Ngư dân"
        labelW={88}
        quote={`"Biển mà không còn cỏ, thì tôm cá cũng không còn chỗ lớn."`}
        x={126.11}
        y={311.85}
        containerW={313.777}
        containerH={410.226}
        cardW={300}
        cardH={400}
        rotate={2}
        labelLeft={18}
        labelTop={271.03}
      />

      <Portrait
        imgSrc={`${A}/imgHost.jpg`}
        labelImg={`${A}/imgLabel1.svg`}
        labelText="Chủ nhà"
        labelW={88}
        quote={`"Khách ở lại qua đêm hiểu đảo hơn nhiều. Họ trân trọng hơn."`}
        x={540}
        y={289}
        containerW={343.827}
        containerH={442.95}
        cardW={340}
        cardH={440}
        rotate={-0.5}
        labelRotate={0.5}
        labelLeft={15}
        labelTop={311.18}
      />

      <Portrait
        imgSrc={`${A}/imgGuard.jpg`}
        labelImg={`${A}/imgLabel2.svg`}
        labelText="Người giữ biển"
        labelW={143}
        quote={`"17 ha cỏ biển — đó là con số chúng tôi phải bảo vệ từng ngày."`}
        x={990.11}
        y={311.85}
        containerW={313.777}
        containerH={410.226}
        cardW={300}
        cardH={400}
        rotate={-2}
        labelLeft={18}
        labelTop={271.03}
      />

      {/* Pull Quote Block at (120, 801) 1200×180 */}
      <div
        className="absolute flex flex-col items-center overflow-clip"
        style={{ left: 120, top: 801, width: 1200, height: 180, gap: 20 }}
      >
        <div
          className="font-quote italic font-medium text-center whitespace-nowrap"
          style={{ color: '#1a7f7c', fontSize: 26, lineHeight: 0 }}
        >
          <p style={{ lineHeight: 1.42, marginBottom: 0 }}>{`"Từ khi có bảo tồn là nhận thức cũng như thu nhập của người dân cao lên.`}</p>
          <p style={{ lineHeight: 1.42 }}>{`Hồi trước khách đâu có ra đây. Dân với bảo tồn rất là khăng khít với nhau."`}</p>
        </div>

        {/* Anh Vũ torn-tag */}
        <div className="relative" style={{ width: 272, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/imgLabel3.svg`} />
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '50%', top: 'calc(50% + 0.5px)', transform: 'translate(-50%, -50%)', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
          >
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px' }}
            >
              ANH VŨ · BQL KBTTN CÙ LAO CHÀM
            </p>
          </div>
        </div>

        <p
          className="font-display font-semibold text-center whitespace-pre"
          style={{ color: '#2a9b97', fontSize: 15, lineHeight: 1, letterSpacing: '0.5px' }}
        >
          {'Gặp người dân đảo  →'}
        </p>
      </div>
    </FrameSection>
  );
}
