type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'default' | 'light';
};

/**
 * Logo_CoBien — circular emblem with seagrass leaves inside.
 * Matches Figma Logo_CoBien (74x80 in nav, 120x130 in footer).
 */
export default function Logo({
  width = 74,
  height = 80,
  className = '',
  variant = 'default',
}: LogoProps) {
  const isLight = variant === 'light';
  const teal = isLight ? '#7DD3D0' : '#2A9B97';
  const green = isLight ? '#6BAE6B' : '#3D8B3D';
  const text = isLight ? '#FFFFFF' : '#1A2E2D';

  return (
    <div className={`flex flex-col items-center ${className}`} style={{ width, height }}>
      <svg width={width} height={width} viewBox="0 0 80 80">
        {/* Circle */}
        <circle cx="40" cy="40" r="36" fill="none" stroke={teal} strokeWidth="2.5" />
        {/* Inner seagrass blades */}
        <g transform="translate(40 40)">
          <path
            d="M -3 -22 Q 4 -12 -1 0 Q -5 12 -2 22 Q 1 12 5 0 Q 9 -12 -3 -22 Z"
            fill={green}
            stroke="#fff"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <path
            d="M -15 -18 Q -8 -10 -12 2 Q -16 14 -14 22 Q -10 14 -6 2 Q -2 -10 -15 -18 Z"
            fill={green}
            stroke="#fff"
            strokeWidth="1.5"
            opacity="0.8"
            transform="rotate(-20)"
          />
          <path
            d="M 10 -18 Q 18 -10 14 2 Q 10 14 12 22 Q 16 14 20 2 Q 24 -10 10 -18 Z"
            fill={green}
            stroke="#fff"
            strokeWidth="1.5"
            opacity="0.8"
            transform="rotate(20)"
          />
        </g>
        {/* Small bubbles */}
        <circle cx="20" cy="20" r="2" fill={teal} opacity="0.6" />
        <circle cx="58" cy="22" r="1.5" fill={teal} opacity="0.6" />
        <circle cx="60" cy="58" r="2.5" fill={teal} opacity="0.5" />
      </svg>
    </div>
  );
}
