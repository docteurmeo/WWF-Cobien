import Logo from './Logo';

/**
 * Footer — 1440x300 (or 339 with thicker version).
 * Dark bg, logo + partner + nav + tagline.
 */
type FooterProps = {
  height?: number;
};

export default function Footer({ height = 300 }: FooterProps) {
  return (
    <footer
      className="relative w-full bg-ink-bgdark text-ink-white pt-[56px] pb-[56px] flex flex-col items-center"
      style={{ height, minWidth: 1440, paddingLeft: 'max(120px, calc((100% - 1200px) / 2))', paddingRight: 'max(120px, calc((100% - 1200px) / 2))' }}
    >
      {/* Top Row: Logo + Partners */}
      <div className="w-[1200px] flex items-start justify-between">
        {/* Site name */}
        <div className="flex flex-col gap-[6px] w-[320px]">
          <div className="flex items-center gap-3">
            <Logo width={50} height={54} variant="light" />
            <div className="flex flex-col">
              <div className="text-h4-sub text-ink-white">Theo Dấu</div>
              <div className="text-h4-sub text-ocean-light" style={{ letterSpacing: '1px' }}>CỎ BIỂN</div>
            </div>
          </div>
          <div className="text-body-meta text-ocean-light opacity-55 mt-1">theosaudacobien.vn</div>
        </div>

        {/* Partners */}
        <div className="flex flex-col items-end gap-2 w-[380px]">
          <div className="text-tag-up uppercase text-sand-mid opacity-60">THỰC HIỆN BỞI</div>
          <div className="text-h4-sub text-ink-white opacity-95">WWF Việt Nam</div>
          <div className="text-body-default text-sand-mid opacity-75">× BQL KBTTN Cù Lao Chàm</div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[1200px] h-px bg-white/10 mt-7" />

      {/* Footer Nav Links */}
      <div className="w-[1200px] flex justify-center gap-9 mt-7">
        {['Cỏ Biển', 'Cù Lao Chàm', 'Khám Phá', 'Ở Đâu', 'Ăn Gì', 'Hành Động', 'Tài Nguyên'].map((link) => (
          <a key={link} href="#" className="text-nav-link text-ink-white opacity-50 hover:opacity-90">
            {link}
          </a>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-body-caption text-ink-white opacity-35 text-center mt-7 w-[860px]">
        Dự án thuộc chương trình bảo tồn cỏ biển tại Cù Lao Chàm · Phối hợp giữa WWF Việt Nam và Ban Quản lý Khu Bảo Tồn Thiên Nhiên Cù Lao Chàm
      </div>
    </footer>
  );
}
