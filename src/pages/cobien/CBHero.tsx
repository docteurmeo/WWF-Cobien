import FrameSection from '@/components/FrameSection';
import BubbleField from '@/components/BubbleField';

/**
 * Hero Cỏ Biển — 1440×920 at y=100. Pixel-perfect from Figma node 129:957.
 * Background gradient top→bottom: cyan #1AADB4 → teal #1A7F7C (32.7%) → deep #0F4A47.
 * Real SVG assets in /public/assets/cobien/hero/.
 * Wave bottom transitions into S1 (Ocean Deep #1A7F7C).
 */
const A = '/WWF-Cobien/assets/cobien/hero';
const HERO_H = 920;

export default function CBHero() {
  return (
    <FrameSection
      height={HERO_H}
      background="linear-gradient(180deg, #1AADB4 0%, #1A7F7C 32.692%, #0F4A47 100%)"
      fullBleed={
        <>
          {/* Seagrass + fish field — baked SVG illustration, tiles horizontally.
              Original Figma image is 7681px wide; we tile via CSS background-repeat. */}
          <div
            className="seagrass-field deep"
            style={{
              bottom: 0,
              height: 480,
              backgroundImage: `url(${A}/co-bien-field.svg)`,
              backgroundSize: '1440px 480px',
              zIndex: 1,
            }}
          />
          {/* Bottom wave divider — transitions into S1 dark teal narrator section.
              SVG wave fill defaults #1A7F7C (Ocean Deep) which matches S1 bg. */}
          <div
            className="absolute left-0 right-0"
            style={{ bottom: 0, height: 80, zIndex: 2 }}
          >
            <img
              alt=""
              src={`${A}/wave-divider.svg`}
              className="absolute left-0 w-full"
              style={{ top: '31.77%', height: '68.23%' }}
            />
          </div>
        </>
      }
    >
      {/* CO₂ Bubble field — animated code-gen, replacing static SVG bubbles.
          Same position/size as Figma node 129:1070 at (180,180) 1082×418. */}
      <BubbleField
        width={1082}
        height={418}
        count={14}
        sizeRange={[14, 32]}
        durationRange={[9, 17]}
        fill="#FFFFFF"
        seed={29}
        style={{ left: 180, top: 180, opacity: 0.55, zIndex: 3 }}
      />

      {/* Layer_1 left: small grass/leaves cluster (253×93 at 223,460) */}
      <div
        className="absolute"
        style={{ left: 223, top: 460, width: 253, height: 93, zIndex: 4 }}
      >
        <img alt="" className="block w-full h-full" src={`${A}/layer1-left.svg`} />
      </div>

      {/* Layer_1 right: 2 nested groups in 214×134 container at (1058,369) */}
      <div
        className="absolute overflow-hidden"
        style={{ left: 1058, top: 369, width: 214, height: 134, zIndex: 4 }}
      >
        {/* Group top-right half — inset[-0.01% 0 48.6% 51.53%] of 214×134 */}
        <div
          className="absolute"
          style={{
            top: 0,
            right: 0,
            bottom: `${48.6}%`,
            left: `${51.53}%`,
          }}
        >
          <img alt="" className="block w-full h-full" src={`${A}/group-top.svg`} />
        </div>
        {/* Group bottom-left half — inset[47.89% 50.54% 0.02% 0.01%] */}
        <div
          className="absolute"
          style={{
            top: `${47.89}%`,
            right: `${50.54}%`,
            bottom: 0,
            left: 0,
          }}
        >
          <img alt="" className="block w-full h-full" src={`${A}/group-bottom.svg`} />
        </div>
      </div>

      {/* Hero Content — centered at top 240, 900px wide */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left: '50%',
          top: 240,
          transform: 'translateX(-50%)',
          width: 900,
          gap: 24,
          zIndex: 5,
        }}
      >
        {/* H1 — Geologica Black 76 / 1.08 / -2px */}
        <p
          className="font-display font-black text-white text-center"
          style={{
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            margin: 0,
            width: '100%',
          }}
        >
          Câu chuyện bắt đầu từ nơi bạn chưa bao giờ nhìn thấy.
        </p>

        {/* Subhead — Lora Medium Italic 26 / 1.42, color sand-mid opacity 0.92 */}
        <div
          className="font-quote italic text-center"
          style={{
            color: '#E8D5B0',
            fontSize: 26,
            lineHeight: 1.42,
            opacity: 0.92,
            width: '100%',
          }}
        >
          <p style={{ margin: 0 }}>Tôi là cỏ biển.</p>
          <p style={{ margin: 0 }}>Tôi ở ngay dưới làn nước bạn đang bơi —</p>
          <p style={{ margin: 0 }}>nhưng ít ai biết tôi là ai.</p>
        </div>

        {/* CTA outline button — border ocean-light, text ocean-light */}
        <button
          className="inline-flex items-center font-display font-medium rounded-[2px] btn-primary-hover arrow-down cursor-pointer"
          style={{
            border: '1.5px solid #7DD3D0',
            color: '#DEFAF7',
            gap: 10,
            paddingLeft: 28,
            paddingRight: 28,
            paddingTop: 15,
            paddingBottom: 15,
            fontSize: 14,
            lineHeight: 1,
            letterSpacing: '0.5px',
            background: 'transparent',
          }}
        >
          <span>Cuộn xuống để gặp tôi</span>
          <span className="arrow-nudge">↓</span>
        </button>
      </div>

      {/* Scroll hint at (695, 880) — 11px Geologica Regular opacity 0.5 letter-spacing 2px */}
      <p
        className="absolute font-display font-normal uppercase whitespace-pre"
        style={{
          left: 695,
          top: 880,
          color: '#DEFAF7',
          fontSize: 11,
          opacity: 0.5,
          letterSpacing: '2px',
          margin: 0,
          zIndex: 5,
        }}
      >
        ↓ scroll
      </p>
    </FrameSection>
  );
}
