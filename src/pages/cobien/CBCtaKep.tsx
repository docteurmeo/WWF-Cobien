import FrameSection from '@/components/FrameSection';
import { Link } from 'react-router-dom';

/**
 * CTA Kép — 1440×440 at y=8993. Figma node 129:1425.
 * Very dark navy gradient. 2 panels side-by-side: TIẾP THEO (coral tag) + TÀI NGUYÊN (teal tag).
 */
const A = '/WWF-Cobien/assets/cobien/cta';
const CTA_H = 440;

export default function CBCtaKep() {
  return (
    <FrameSection
      height={CTA_H}
      background="linear-gradient(90deg, #082624 0%, #0F2E2C 100%)"
    >
      {/* CTA LEFT — Khám phá (120, 40) 588×360 */}
      <Link
        to="/kham-pha/o-dau/"
        className="absolute flex flex-col panel-hover-group"
        style={{ left: 120, top: 40, width: 588, height: 360, gap: 20, paddingTop: 40, textDecoration: 'none', zIndex: 4 }}
      >
        <div className="relative" style={{ width: 97, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label-left.svg`} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
            >
              TIẾP THEO
            </p>
          </div>
        </div>

        <div
          className="font-display font-bold text-white"
          style={{ fontSize: 44, letterSpacing: '-0.8px' }}
        >
          <p style={{ lineHeight: 1.08, margin: 0, whiteSpace: 'pre' }}>Khám phá</p>
          <p style={{ lineHeight: 1.08, margin: 0, whiteSpace: 'pre' }}>{'Cù Lao Chàm  →'}</p>
        </div>

        <div
          className="font-display font-normal"
          style={{ color: '#E8D5B0', fontSize: 16, opacity: 0.85 }}
        >
          <p style={{ lineHeight: '24px', margin: 0 }}>Ăn gì, ở đâu, đi đâu —</p>
          <p style={{ lineHeight: '24px', margin: 0 }}>và tại sao nên ở lại lâu hơn một ngày.</p>
        </div>
      </Link>

      {/* CTA RIGHT — Tài nguyên (732, 40) 587×360 */}
      <Link
        to="/tai-nguyen/"
        className="absolute flex flex-col panel-hover-group"
        style={{ left: 732, top: 40, width: 587, height: 360, gap: 20, paddingTop: 40, textDecoration: 'none', zIndex: 4 }}
      >
        <div className="relative" style={{ width: 107, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label-right.svg`} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
            >
              TÀI NGUYÊN
            </p>
          </div>
        </div>

        <div
          className="font-display font-bold text-white"
          style={{ fontSize: 44, letterSpacing: '-0.8px' }}
        >
          <p style={{ lineHeight: 1.08, margin: 0, whiteSpace: 'pre' }}>Xem nguồn</p>
          <p style={{ lineHeight: 1.08, margin: 0, whiteSpace: 'pre' }}>{'tham khảo  →'}</p>
        </div>

        <div
          className="font-display font-normal"
          style={{ color: '#E8D5B0', fontSize: 16, opacity: 0.85 }}
        >
          <p style={{ lineHeight: '24px', margin: 0 }}>Báo cáo khoa học,</p>
          <p style={{ lineHeight: '24px', margin: 0 }}>hướng dẫn bảo tồn, tài liệu tải về.</p>
        </div>
      </Link>
    </FrameSection>
  );
}
