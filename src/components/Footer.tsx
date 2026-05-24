import Logo from './Logo';

/**
 * Footer — light sand bg, 3 rows: brand+partners / nav / tagline.
 * Match Figma design (node trong homepage frame 51:2).
 * Partner logos: text placeholder (user thay ảnh thật sau).
 */
type FooterProps = { height?: number };

const PARTNERS = ['WWF', 'UKAID', 'GEF', 'HUE UNI', 'MCA CLC'];
const NAV = ['Cỏ Biển', 'Cù Lao Chàm', 'Khám Phá', 'Ở Đâu', 'Ăn Gì', 'Hành Động'];

export default function Footer({ height = 339 }: FooterProps) {
  return (
    <footer
      className="relative w-full flex flex-col items-center"
      style={{
        height,
        minWidth: 1440,
        background: '#f8f5ef',
        color: '#1a2e2d',
        paddingTop: 48,
        paddingBottom: 32,
        paddingLeft: 'max(120px, calc((100% - 1200px) / 2))',
        paddingRight: 'max(120px, calc((100% - 1200px) / 2))',
      }}
    >
      {/* Row 1: Brand left + "THỰC HIỆN BỞI" + partner logos right */}
      <div className="w-[1200px] flex items-center justify-between" style={{ paddingBottom: 32, borderBottom: '1px solid rgba(26,46,45,0.12)' }}>
        {/* Brand block */}
        <div className="flex items-center gap-3">
          <Logo width={56} height={60} />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-extrabold uppercase" style={{ color: '#1a7f7c', fontSize: 13, letterSpacing: 1.2 }}>CỎ BIỂN</span>
            <span className="font-display font-medium uppercase" style={{ color: '#5a7370', fontSize: 9, letterSpacing: 0.8, marginTop: 3 }}>theo dấu cỏ biển</span>
            <span className="font-display font-medium uppercase" style={{ color: '#5a7370', fontSize: 9, letterSpacing: 0.8 }}>Cù Lao Chàm</span>
          </div>
        </div>

        {/* Partner block */}
        <div className="flex items-center gap-6">
          <span className="font-display font-semibold uppercase" style={{ color: '#5a7370', fontSize: 10, letterSpacing: 1.4, marginRight: 8 }}>thực hiện bởi</span>
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center"
              style={{
                minWidth: 64,
                height: 44,
                padding: '6px 12px',
                background: '#fff',
                border: '1px solid rgba(26,46,45,0.08)',
                borderRadius: 2,
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 800,
                fontSize: 11,
                color: '#1a2e2d',
                letterSpacing: 0.8,
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Nav links centered */}
      <div className="w-[1200px] flex justify-center gap-9" style={{ marginTop: 26 }}>
        {NAV.map((link) => (
          <a key={link} href="#" className="link-draw-hover font-display font-semibold" style={{ color: '#1a2e2d', fontSize: 14, letterSpacing: 0.4 }}>
            {link}
          </a>
        ))}
      </div>

      {/* Row 3: Tagline centered small */}
      <p
        className="font-display text-center"
        style={{
          maxWidth: 980,
          marginTop: 22,
          color: 'rgba(26,46,45,0.55)',
          fontSize: 11,
          lineHeight: 1.6,
          letterSpacing: 0.2,
        }}
      >
        Dự án thuộc chương trình bảo tồn cỏ biển tại Cù Lao Chàm · Phối hợp giữa WWF Việt Nam và Ban Quản Lý Khu Bảo Tồn Thiên Nhiên Cù Lao Chàm
      </p>
    </footer>
  );
}
