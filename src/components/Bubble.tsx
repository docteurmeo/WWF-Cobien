import { CSSProperties } from 'react';

type BubbleProps = {
  size: number;
  fill?: string;
  fillOpacity?: number;
  strokeOpacity?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * CO₂ bubble — translucent fill + white stroke (cut-paper DNA).
 */
export default function Bubble({
  size,
  fill = '#7DD3D0',
  fillOpacity = 0.25,
  strokeOpacity = 0.8,
  className = '',
  style,
}: BubbleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="10" fill={fill} fillOpacity={fillOpacity} stroke="#fff" strokeWidth="1.5" strokeOpacity={strokeOpacity} />
    </svg>
  );
}
