import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ODHero from './odau/ODHero';
import ODDinhNghia from './odau/ODDinhNghia';
import ODHaiVung from './odau/ODHaiVung';
import ODTimeline from './odau/ODTimeline';
import ODTestimonials from './odau/ODTestimonials';
import ODYNghia from './odau/ODYNghia';
import ODThucTien from './odau/ODThucTien';
import ODQuanhCho from './odau/ODQuanhCho';
import ODDualCTA from './odau/ODDualCTA';

/**
 * 🏡 Ở Đâu — 1440×9340px
 */
export default function ODau() {
  return (
    <div className="page-frame bg-sand-light">
      <Nav />
      <ODHero />
      <ODDinhNghia />
      <ODHaiVung />
      <ODTimeline />
      <ODTestimonials />
      <ODYNghia />
      <ODThucTien />
      <ODQuanhCho />
      <ODDualCTA />
      <Footer height={300} />
    </div>
  );
}
