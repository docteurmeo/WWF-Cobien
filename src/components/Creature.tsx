import { CSSProperties } from 'react';

type CreatureProps = {
  type: 'turtle' | 'fish' | 'crab' | 'leaf' | 'shrimp';
  width: number;
  height: number;
  fill?: string; // hex
  rotate?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Cut-paper marine creature SVG with white stroke 5-6px.
 * Matches Figma "cut-paper illustration with white stroke" DNA.
 */
export default function Creature({
  type,
  width,
  height,
  fill = '#1A7F7C',
  rotate = 0,
  className = '',
  style,
}: CreatureProps) {
  const transform = rotate ? `rotate(${rotate}deg)` : undefined;

  const sw = 5;
  if (type === 'turtle') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 100"
        className={className}
        style={{ transform, ...style }}
      >
        {/* Head */}
        <ellipse cx="118" cy="50" rx="14" ry="11" fill={fill} stroke="#fff" strokeWidth={sw} />
        {/* Shell */}
        <ellipse cx="65" cy="50" rx="50" ry="36" fill={fill} stroke="#fff" strokeWidth={sw} />
        {/* Shell pattern */}
        <path
          d="M 35 50 Q 50 30 65 50 Q 80 70 95 50"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />
        {/* Front fin */}
        <ellipse cx="35" cy="22" rx="14" ry="8" fill={fill} stroke="#fff" strokeWidth={sw} transform="rotate(-30 35 22)" />
        {/* Back fin */}
        <ellipse cx="20" cy="75" rx="12" ry="7" fill={fill} stroke="#fff" strokeWidth={sw} transform="rotate(30 20 75)" />
      </svg>
    );
  }

  if (type === 'fish') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 50"
        className={className}
        style={{ transform, ...style }}
      >
        {/* Body */}
        <ellipse cx="42" cy="25" rx="32" ry="18" fill={fill} stroke="#fff" strokeWidth={sw} />
        {/* Tail */}
        <path d="M 72 25 L 95 8 L 95 42 Z" fill={fill} stroke="#fff" strokeWidth={sw} strokeLinejoin="round" />
        {/* Eye */}
        <circle cx="28" cy="22" r="3" fill="#fff" />
        <circle cx="28" cy="22" r="1.5" fill="#0F2524" />
      </svg>
    );
  }

  if (type === 'crab') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 90"
        className={className}
        style={{ transform, ...style }}
      >
        {/* Body */}
        <ellipse cx="60" cy="55" rx="38" ry="26" fill={fill} stroke="#fff" strokeWidth={sw} />
        {/* Left claw */}
        <ellipse cx="18" cy="40" rx="14" ry="10" fill={fill} stroke="#fff" strokeWidth={sw} transform="rotate(-25 18 40)" />
        {/* Right claw */}
        <ellipse cx="102" cy="40" rx="14" ry="10" fill={fill} stroke="#fff" strokeWidth={sw} transform="rotate(25 102 40)" />
        {/* Legs */}
        {[28, 92].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="75" x2={x - 8 + i * 16} y2="88" stroke={fill} strokeWidth="6" strokeLinecap="round" />
          </g>
        ))}
        {/* Eyes */}
        <circle cx="48" cy="42" r="3.5" fill="#fff" stroke={fill} strokeWidth="1.5" />
        <circle cx="72" cy="42" r="3.5" fill="#fff" stroke={fill} strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === 'shrimp') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 110 50"
        className={className}
        style={{ transform, ...style }}
      >
        <path
          d="M 8 25 Q 30 5 60 22 Q 80 30 92 16 L 100 25 L 92 34 Q 80 22 60 30 Q 30 45 8 25 Z"
          fill={fill}
          stroke="#fff"
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <circle cx="22" cy="22" r="2.5" fill="#fff" />
      </svg>
    );
  }

  // leaf (seagrass blade)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 120"
      className={className}
      style={{ transform, ...style }}
    >
      <path
        d="M 20 5 Q 35 30 28 60 Q 22 90 20 115 Q 18 90 12 60 Q 5 30 20 5 Z"
        fill={fill}
        stroke="#fff"
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      {/* Center vein */}
      <line x1="20" y1="10" x2="20" y2="110" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}
