import MapFigma from '@/pages/figma-generated/Map';

/**
 * S2 Island Positioning — 1440×990 at y=1020.
 * Section bg sand light + intro text + illustrated map (96 assets from Figma).
 */
export default function IslandMap() {
  return (
    <section
      className="relative"
      style={{ width: 1440, height: 990, background: '#F5EDD8', overflow: 'hidden' }}
    >
      {/* S2 Content — intro narrator text at (340, 50) */}
      <div className="absolute flex flex-col items-center text-center" style={{ left: 340, top: 50, width: 760, gap: 28 }}>
        <h2
          className="font-display font-bold"
          style={{ color: '#1a2e2d', fontSize: 28, lineHeight: '120%', letterSpacing: '-0.3px' }}
        >
          Tôi là cỏ biển, cư dân đã chứng kiến<br />
          bao mùa nắng mưa nơi hòn đảo thú vị này.
        </h2>
        <p
          className="font-quote italic"
          style={{ color: '#5a7370', fontSize: 18, lineHeight: '160%' }}
        >
          Nếu bạn thấy hứng thú với câu chuyện tôi kể,<br />
          hãy để tôi làm người dẫn đường, đưa bạn khám phá những góc nhỏ trên đảo.
        </p>
      </div>

      {/* Illustrated Map at (120, 267) 1200×676 */}
      <div className="absolute" style={{ left: 120, top: 267, width: 1200, height: 676 }}>
        <MapFigma />
      </div>
    </section>
  );
}
