/**
 * Global SVG filters — render once ở App root.
 * Áp dụng vào elements qua CSS `filter: url(#water-sway)`.
 *
 * Kỹ thuật: feTurbulence sinh noise pattern, feDisplacementMap đẩy pixel
 * theo noise → mô phỏng refraction của ánh sáng qua nước thật. Animate
 * `baseFrequency` + `seed` qua time → noise "trôi" → cỏ uốn theo dòng.
 *
 * Performance: filter chỉ apply cho 2 vùng seagrass nhỏ ở S1+S5 (không
 * phải full page). GPU accelerated trên modern browsers.
 */
export default function WaterFilters() {
  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      <defs>
        {/* Cỏ biển sway — turbulence chậm, displacement vừa phải.
            baseFrequency thấp (0.008-0.014) → noise "wave" lớn, mượt.
            scale=8 → displacement đủ thấy mềm mại, không méo dị dạng. */}
        <filter id="water-sway" x="-6%" y="-2%" width="112%" height="108%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.022" numOctaves="2" seed="3" result="noise">
            <animate
              attributeName="baseFrequency"
              dur="14s"
              values="0.012 0.022; 0.016 0.026; 0.011 0.020; 0.012 0.022"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Variant chậm hơn + displacement lớn hơn cho cỏ S5 (cảm giác sâu hơn) */}
        <filter id="water-sway-deep" x="-8%" y="-3%" width="116%" height="110%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.018" numOctaves="2" seed="7" result="noise">
            <animate
              attributeName="baseFrequency"
              dur="18s"
              values="0.009 0.018; 0.013 0.022; 0.008 0.016; 0.009 0.018"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
