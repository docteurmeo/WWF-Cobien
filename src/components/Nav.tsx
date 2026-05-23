import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

/**
 * Top navigation — 1440x100, sand bg, sticky-style.
 * Matches Figma Nav Bar frame exactly (100px height, 120px margins).
 */
export default function Nav() {
  const { pathname } = useLocation();

  // Determine active link based on route
  const activeFor = (link: string) => {
    if (link === 'cobien' && pathname.startsWith('/co-bien')) return true;
    if (link === 'khampha' && pathname.startsWith('/kham-pha')) return true;
    if (link === 'culao' && pathname.startsWith('/cu-lao-cham')) return true;
    if (link === 'hanhdong' && pathname.startsWith('/hanh-dong')) return true;
    return false;
  };

  return (
    <nav className="relative w-[1440px] h-[100px] bg-sand-light shadow-nav z-50">
      {/* Logo at x=120, y=10, 74x80 */}
      <Link to="/" className="absolute left-[120px] top-[10px]">
        <Logo width={74} height={80} />
      </Link>

      {/* Nav Links at x=409, y=38, w=519, h=24 */}
      <div className="absolute left-[409px] top-[38px] w-[519px] h-[24px] flex items-center justify-between font-display">
        <Link
          to="/co-bien/"
          className={`text-[15px] leading-[23px] ${activeFor('cobien') ? 'text-ocean-primary font-semibold' : 'text-ink-main opacity-80'}`}
        >
          Cỏ Biển
        </Link>
        <Link
          to="/cu-lao-cham/"
          className={`text-[15px] leading-[23px] ${activeFor('culao') ? 'text-ocean-primary font-semibold' : 'text-ink-main opacity-80'}`}
        >
          Cù Lao Chàm
        </Link>
        <div className="flex items-center gap-[6px]">
          <Link
            to="/kham-pha/o-dau/"
            className={`text-[15px] leading-[23px] ${activeFor('khampha') ? 'text-ocean-primary font-semibold' : 'text-ink-main opacity-80'}`}
          >
            Khám Phá
          </Link>
          <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60">
            <path d="M 6 9 L 12 15 L 18 9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Link
          to="/hanh-dong/"
          className={`text-[15px] leading-[23px] ${activeFor('hanhdong') ? 'text-ocean-primary font-semibold' : 'text-ink-main opacity-80'}`}
        >
          Hành Động
        </Link>
      </div>

      {/* Nav CTA at x=1143, y=31, w=177, h=38 */}
      <button className="absolute left-[1143px] top-[31px] w-[177px] h-[38px] bg-ocean-primary rounded-[2px] flex items-center justify-center hover:bg-ocean-deep transition-colors">
        <span className="text-cta-btn text-ink-white">Khám phá ngay  →</span>
      </button>
    </nav>
  );
}
