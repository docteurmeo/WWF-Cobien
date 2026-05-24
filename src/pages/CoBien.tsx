import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaterFilters from '@/components/WaterFilters';
import CBHero from './cobien/CBHero';
import CBToiLa from './cobien/CBToiLa';
import CBChiecNoi from './cobien/CBChiecNoi';
import CBMatXich from './cobien/CBMatXich';
import CBGiuCat from './cobien/CBGiuCat';
import CBCarbon from './cobien/CBCarbon';
import CBSoLieu from './cobien/CBSoLieu';
import CBNguyenNhan from './cobien/CBNguyenNhan';
import CBBaoTon from './cobien/CBBaoTon';
import CBKet from './cobien/CBKet';
import CBCtaKep from './cobien/CBCtaKep';

/**
 * 🌿 Cỏ Biển — 1440×9772px
 * Matches Figma frame "🌿 Cỏ Biển — 1440px" pixel-perfect.
 */
export default function CoBien() {
  return (
    <div className="page-frame bg-sand-light">
      <WaterFilters />
      <Nav />
      <CBHero />
      <CBToiLa />
      <CBChiecNoi />
      <CBMatXich />
      <CBGiuCat />
      <CBCarbon />
      <CBSoLieu />
      <CBNguyenNhan />
      <CBBaoTon />
      <CBKet />
      <CBCtaKep />
      <Footer height={339} />
    </div>
  );
}
