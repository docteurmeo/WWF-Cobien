type WaveDividerProps = {
  width?: number;
  height?: number;
  fill: string; // bottom color (the color of next section)
  className?: string;
  flip?: boolean; // flip vertically (use when transitioning from dark to light)
  style?: React.CSSProperties;
};

/**
 * Wave divider — curved transition between sections.
 * Match Figma WaveDivider frames (1440x80).
 */
export default function WaveDivider({
  width = 1440,
  height = 80,
  fill,
  className = '',
  flip = false,
  style,
}: WaveDividerProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 1440 80`}
      preserveAspectRatio="none"
      className={className}
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : undefined, ...style }}
    >
      <path
        d="M 0 0 C 240 60, 480 80, 720 40 C 960 0, 1200 40, 1440 30 L 1440 80 L 0 80 Z"
        fill={fill}
      />
    </svg>
  );
}
