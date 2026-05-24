import { useMemo } from 'react';

type BubbleFieldProps = {
  /** Số bubble render (mặc định theo density × area). */
  count?: number;
  /** Width vùng field — bubble rải ngẫu nhiên trong width này. */
  width: number;
  /** Height vùng field — bubble nổi lên hết height này thì fade out. */
  height: number;
  /** Range size px [min, max]. Mặc định [8, 26]. */
  sizeRange?: [number, number];
  /** Range duration giây [min, max] — bubble nhỏ rise nhanh hơn lớn. Mặc định [6, 14]. */
  durationRange?: [number, number];
  /** Màu fill bubble. Mặc định teal #7DD3D0 (match CO₂ tone). */
  fill?: string;
  /** Seed cho pseudo-random (cho phép deterministic SSR). Mặc định 1. */
  seed?: number;
  className?: string;
  style?: React.CSSProperties;
};

// Mulberry32 PRNG — deterministic, fast, đủ tốt cho visual.
function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Code-generated bubble field — nổi lên từ đáy + lắc lư sine.
 *
 * 2-layer animation pattern (compose mà không conflict):
 *   outer wrapper: animation `bubble-up` translateY(0 → -height) + opacity + scale
 *   inner element: animation `bubble-sway` translateX(±amp) sine
 *
 * Mỗi bubble dùng CSS vars (--x, --size, --dur, --delay, --sway, --sway-dur)
 * → 1 cặp keyframes duy nhất, scale ra N instance.
 *
 * SSR-safe: seed-based PRNG nên render server và client giống hệt.
 */
export default function BubbleField({
  count,
  width,
  height,
  sizeRange = [8, 26],
  durationRange = [6, 14],
  fill = '#7DD3D0',
  seed = 1,
  className = '',
  style,
}: BubbleFieldProps) {
  const bubbles = useMemo(() => {
    // Density tự động nếu không truyền count: ~1 bubble per 6000 px²
    const N = count ?? Math.max(6, Math.round((width * height) / 6000));
    const rng = mulberry32(seed);
    const [smin, smax] = sizeRange;
    const [dmin, dmax] = durationRange;
    return Array.from({ length: N }, (_, i) => {
      const size = smin + rng() * (smax - smin);
      // Bubble lớn nổi chậm hơn → cảm giác physics thật
      const sizeNorm = (size - smin) / Math.max(1, smax - smin);
      const dur = dmin + sizeNorm * (dmax - dmin) + rng() * 1.5;
      return {
        i,
        x: rng() * width,         // start X (px from left)
        size,
        dur,                      // rise duration (s)
        delay: -rng() * dur,      // negative delay → bubble đã đang nổi sẵn lúc mount
        sway: 12 + rng() * 22,    // sway amplitude (px)
        swayDur: 2.4 + rng() * 2.6,
        swayDelay: -rng() * 5,    // lệch pha sine, dùng số đã seed
        opacity: 0.45 + rng() * 0.45,
      };
    });
  }, [count, width, height, sizeRange, durationRange, seed]);

  return (
    <div
      className={`bubble-field ${className}`}
      style={{
        position: 'absolute',
        width,
        height,
        pointerEvents: 'none',
        overflow: 'hidden',
        ...style,
      }}
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <span
          key={b.i}
          className="bubble-up"
          style={{
            position: 'absolute',
            left: b.x,
            bottom: 0,
            width: b.size,
            height: b.size,
            ['--bf-dur' as string]: `${b.dur}s`,
            ['--bf-delay' as string]: `${b.delay}s`,
            ['--bf-rise' as string]: `${height + b.size + 20}px`,
            ['--bf-op' as string]: b.opacity,
          } as React.CSSProperties}
        >
          <span
            className="bubble-sway"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              ['--bf-sway' as string]: `${b.sway}px`,
              ['--bf-sway-dur' as string]: `${b.swayDur}s`,
              ['--bf-sway-delay' as string]: `${b.swayDelay}s`,
            } as React.CSSProperties}
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24" style={{ display: 'block' }}>
              <circle cx="12" cy="12" r="11" fill={fill} />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
