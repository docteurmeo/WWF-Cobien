import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaterFilters from '@/components/WaterFilters';
import HeroSection from './homepage/HeroSection';
import IslandMap from './homepage/IslandMap';
import ThreeCards from './homepage/ThreeCards';
import Bridge from './homepage/Bridge';
import SeagrassNarrator from './homepage/SeagrassNarrator';
import Community from './homepage/Community';
import DualCTA from './homepage/DualCTA';

/**
 * 🏠 Homepage — 1440×6423px
 * Matches Figma frame "🏠 Homepage — 1440px" pixel-perfect.
 */
export default function Homepage() {
  return (
    <div className="page-frame bg-sand-light">
      <WaterFilters />
      <Nav />
      <HeroSection />
      <IslandMap />
      <ThreeCards />
      <Bridge />
      <SeagrassNarrator />
      <Community />
      <DualCTA />
      <Footer height={339} />
    </div>
  );
}
