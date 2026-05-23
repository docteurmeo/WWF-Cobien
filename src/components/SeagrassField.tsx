/**
 * Seagrass field at bottom of section — replicates Figma "Co bien" frame (1440x211).
 * A row of varied seagrass blades (vectors) along the bottom edge.
 */
type SeagrassFieldProps = {
  width?: number;
  height?: number;
  density?: number; // number of blades
  className?: string;
  style?: React.CSSProperties;
  baseColor?: string;
};

export default function SeagrassField({
  width = 1440,
  height = 211,
  density = 32,
  className = '',
  style,
  baseColor = '#3D8B3D',
}: SeagrassFieldProps) {
  // Pre-defined positions matching Figma layout (irregular natural placement)
  const blades = [
    { x: 0, y: 70, w: 12, h: 117, rot: -3, c: baseColor, o: 0.85 },
    { x: 30, y: 55, w: 42, h: 125, rot: 5, c: baseColor, o: 0.92 },
    { x: 75, y: 80, w: 18, h: 105, rot: -8, c: '#2E6E2E', o: 0.78 },
    { x: 100, y: 70, w: 14, h: 115, rot: 2, c: baseColor, o: 0.82 },
    { x: 140, y: 78, w: 11, h: 92, rot: -5, c: baseColor, o: 0.88 },
    { x: 165, y: 60, w: 22, h: 130, rot: 4, c: '#3D8B3D', o: 0.92 },
    { x: 190, y: 70, w: 18, h: 119, rot: -3, c: baseColor, o: 0.85 },
    { x: 210, y: 80, w: 25, h: 109, rot: 6, c: '#2E6E2E', o: 0.80 },
    { x: 240, y: 90, w: 38, h: 108, rot: -4, c: baseColor, o: 0.88 },
    { x: 248, y: 70, w: 60, h: 122, rot: 3, c: '#3D8B3D', o: 0.95 },
    { x: 318, y: 100, w: 33, h: 102, rot: -7, c: baseColor, o: 0.82 },
    { x: 357, y: 110, w: 21, h: 97, rot: 5, c: '#2E6E2E', o: 0.78 },
    { x: 395, y: 95, w: 25, h: 108, rot: -2, c: baseColor, o: 0.88 },
    { x: 441, y: 110, w: 25, h: 97, rot: 4, c: '#3D8B3D', o: 0.85 },
    { x: 490, y: 70, w: 36, h: 130, rot: -5, c: baseColor, o: 0.92 },
    { x: 555, y: 90, w: 28, h: 115, rot: 6, c: '#2E6E2E', o: 0.82 },
    { x: 605, y: 80, w: 32, h: 122, rot: -3, c: baseColor, o: 0.88 },
    { x: 665, y: 95, w: 24, h: 105, rot: 2, c: '#3D8B3D', o: 0.85 },
    { x: 720, y: 70, w: 40, h: 130, rot: -6, c: baseColor, o: 0.92 },
    { x: 790, y: 90, w: 28, h: 115, rot: 5, c: '#2E6E2E', o: 0.82 },
    { x: 845, y: 80, w: 32, h: 120, rot: -4, c: baseColor, o: 0.88 },
    { x: 905, y: 95, w: 22, h: 108, rot: 4, c: '#3D8B3D', o: 0.85 },
    { x: 960, y: 70, w: 38, h: 130, rot: -3, c: baseColor, o: 0.92 },
    { x: 1025, y: 90, w: 28, h: 115, rot: 5, c: '#2E6E2E', o: 0.82 },
    { x: 1080, y: 80, w: 32, h: 120, rot: -5, c: baseColor, o: 0.88 },
    { x: 1140, y: 95, w: 24, h: 108, rot: 3, c: '#3D8B3D', o: 0.85 },
    { x: 1195, y: 70, w: 38, h: 130, rot: -4, c: baseColor, o: 0.92 },
    { x: 1255, y: 90, w: 28, h: 112, rot: 6, c: '#2E6E2E', o: 0.82 },
    { x: 1310, y: 85, w: 32, h: 117, rot: -3, c: baseColor, o: 0.88 },
    { x: 1370, y: 95, w: 22, h: 105, rot: 4, c: '#3D8B3D', o: 0.85 },
    { x: 1410, y: 80, w: 30, h: 120, rot: -2, c: baseColor, o: 0.88 },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ display: 'block', ...style }}
    >
      {blades.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rot} ${b.w / 2} ${b.h / 2})`}>
          <path
            d={`M ${b.w / 2} 0 Q ${b.w} ${b.h * 0.25} ${b.w * 0.78} ${b.h * 0.5} Q ${b.w * 0.55} ${b.h * 0.75} ${b.w / 2} ${b.h} Q ${b.w * 0.45} ${b.h * 0.75} ${b.w * 0.22} ${b.h * 0.5} Q 0 ${b.h * 0.25} ${b.w / 2} 0 Z`}
            fill={b.c}
            opacity={b.o}
            stroke="#fff"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}
