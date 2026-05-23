type HexBadgeProps = {
  size?: number;
  number: string;
  caption?: string;
  fill?: string;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Hexagon data badge — coral with white stroke + number inside + small caption.
 * Signature element for 35× carbon and similar data moments.
 */
export default function HexBadge({
  size = 187,
  number,
  caption = 'CARBON',
  fill = '#E86B35',
  rotate = 0,
  className = '',
  style,
}: HexBadgeProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size, transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" className="absolute inset-0">
        <polygon
          points="100,8 184,54 184,146 100,192 16,146 16,54"
          fill={fill}
          stroke="#fff"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative flex flex-col items-center justify-center text-ink-white text-center" style={{ paddingTop: size * 0.06 }}>
        <div className="font-display font-black leading-none" style={{ fontSize: size * 0.42, letterSpacing: '-2px' }}>
          {number}
        </div>
        <div className="text-tag-up uppercase mt-2 opacity-90">{caption}</div>
      </div>
    </div>
  );
}
