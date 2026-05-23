type RippleCirclesProps = {
  radii?: number[];
  color?: string;
  centerX: number;
  centerY: number;
  className?: string;
};

/**
 * Concentric dashed ripple circles — data moment signature.
 * Used around hexagon badge and stat callouts.
 */
export default function RippleCircles({
  radii = [80, 140, 200],
  color = '#E86B35',
  centerX,
  centerY,
  className = '',
}: RippleCirclesProps) {
  return (
    <>
      {radii.map((r, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none ${className}`}
          style={{
            left: centerX - r,
            top: centerY - r,
            width: r * 2,
            height: r * 2,
            border: `1.5px ${i === 0 ? 'solid' : 'dashed'} ${color}`,
            opacity: 0.4 - i * 0.1,
          }}
        />
      ))}
    </>
  );
}
