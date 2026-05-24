import { useEffect, useRef, useState } from 'react';

type WaveProps = {
  fill: string;              // wave + base fill color
  height?: number;           // total height (default 80)
  amplitude?: number;        // wave bump height in px (default 12)
  wavelength?: number;       // distance between humps in px (default 360)
  phase?: number;            // radians, 0=normal, Math.PI=offset half
  flip?: boolean;            // vertical flip (for top-of-section waves)
  animate?: boolean;         // gentle drift animation
  speedSeconds?: number;     // animation period (one wavelength shift)
  baseFillRatio?: number;    // how much of height is solid fill below curve (0..1, default 0.5)
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Code-generated wave divider.
 * - Width responsive (100%) — extends to viewport edges
 * - Height FIXED (no proportional scaling) — won't grow on wider screens
 * - Wavelength fixed — viewport scales by adding/removing humps, not stretching them
 * - Gentle CSS animation drifts horizontally; loops seamlessly because path
 *   extends from -wavelength to width+wavelength and shifts exactly one period.
 *
 * Senior-FE pattern: ResizeObserver re-generates path on viewport change.
 */
export default function Wave({
  fill,
  height = 80,
  amplitude = 12,
  wavelength = 360,
  phase = 0,
  flip = false,
  animate = true,
  speedSeconds = 14,
  baseFillRatio = 0.5,
  className = '',
  style,
}: WaveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver((entries) => {
      const w = Math.ceil(entries[0].contentRect.width);
      if (w > 0) setWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Path extends [-wavelength .. W+wavelength] so we can translate by one
  // full wavelength without revealing edges (seamless loop).
  const W = width;
  const H = height;
  const baseY = H * baseFillRatio + amplitude; // wave center y (curve oscillates around this)
  const samples = Math.max(40, Math.floor((W + 2 * wavelength) / 6));

  const points: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const x = -wavelength + (i / samples) * (W + 2 * wavelength);
    const y = baseY + amplitude * Math.sin((2 * Math.PI * x) / wavelength + phase);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  const d =
    `M ${-wavelength} ${H} ` +
    `L ${-wavelength} ${baseY} ` +
    `L ${points.join(' L ')} ` +
    `L ${W + wavelength} ${H} Z`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: '100%',
        height,
        overflow: 'hidden',
        transform: flip ? 'scaleY(-1)' : undefined,
        ...style,
      }}
    >
      <svg
        width={W + 2 * wavelength}
        height={H}
        viewBox={`${-wavelength} 0 ${W + 2 * wavelength} ${H}`}
        style={{
          display: 'block',
          marginLeft: -wavelength,
          animation: animate ? `wave-drift-${wavelength} ${speedSeconds}s linear infinite` : undefined,
        }}
      >
        <path d={d} fill={fill} />
      </svg>

      {animate && (
        <style>{`
          @keyframes wave-drift-${wavelength} {
            from { transform: translateX(0); }
            to   { transform: translateX(-${wavelength}px); }
          }
        `}</style>
      )}
    </div>
  );
}
