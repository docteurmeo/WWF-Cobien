/**
 * S2 Island Positioning — 1440×990 at y=1020.
 * Custom illustrated map of Cù Lao Chàm with PSD landmark icons.
 * In Figma: Map frame 1200x676 with Đảo.psd, Eo gió, Tháp đèn, Miếu tổ nghề yến,
 * Hang yến, Bãi biển, Cây đa di sản, Chim ens, Cỏ biển trònpsd, plus many trees/grass.
 *
 * Pixel positions extracted from Figma:
 * Hero text "Tôi là cỏ biển..." at S2 Content (340, 50) 760×170
 * Map at (120, 267) 1200×676
 * - Đảo (island shape): 12,-62 w=1098 h=908 (clipped to map)
 * - Eo gió.psd: 447, 25 (200×199)
 * - Tháp đèn.psd: 721, 122 (156×155)
 * - Hang yến.psd: 969, 395 (156×155)
 * - Miếu tổ nghề yến.psd: 853, 303 (124×124)
 * - Cây đa di sản.psd: 614, 155 (187×186)
 * - Chim ens.psd: 1008, 297 (181×181)
 * - Cỏ biển trònpsd: 423, 443 (156×155)
 * - Bãi biển.psd x2: 657,444 + 389,389
 * - Trees + grass scattered
 */
export default function IslandMap() {
  return (
    <section className="relative w-[1440px] h-[990px] bg-sand-light overflow-hidden">
      {/* S2 Content text (340, 50) 760×170 */}
      <div className="absolute" style={{ left: 340, top: 50, width: 760 }}>
        <h2
          className="font-display font-bold text-ink-main text-center"
          style={{ fontSize: 28, lineHeight: '120%', letterSpacing: '-0.3px' }}
        >
          Tôi là cỏ biển, cư dân đã chứng kiến<br />
          bao mùa nắng mưa nơi hòn đảo thú vị này.
        </h2>
        <p
          className="font-quote text-ink-muted text-center mt-6"
          style={{ fontSize: 18, lineHeight: '160%' }}
        >
          Nếu bạn thấy hứng thú với câu chuyện tôi kể,<br />
          hãy để tôi làm người dẫn đường, đưa bạn khám phá những góc nhỏ trên đảo.
        </p>
      </div>

      {/* Group 2 - small accent at (110,480) 48×56 */}
      <div className="absolute" style={{ left: 110, top: 480, width: 48, height: 56 }}>
        <svg viewBox="0 0 48 56" width="48" height="56">
          <path
            d="M 24 4 Q 38 18 32 32 Q 28 44 24 52 Q 20 44 16 32 Q 10 18 24 4 Z"
            fill="#3D8B3D"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* === MAP at (120, 267) 1200×676 — Illustrated Cù Lao Chàm === */}
      <div className="absolute" style={{ left: 120, top: 267, width: 1200, height: 676 }}>
        {/* Island silhouette base */}
        <svg width="1200" height="676" viewBox="0 0 1200 676" className="absolute inset-0">
          <defs>
            <radialGradient id="islandGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#E8D5B0" />
              <stop offset="100%" stopColor="#C9B48A" />
            </radialGradient>
          </defs>
          {/* Stylized island shape — main Hòn Lao */}
          <path
            d="M 200 200 Q 280 130 420 140 Q 580 100 720 130 Q 880 110 980 180 Q 1080 220 1050 340 Q 1100 460 980 520 Q 850 580 700 560 Q 540 600 380 540 Q 220 510 180 380 Q 140 280 200 200 Z"
            fill="url(#islandGrad)"
            stroke="#fff"
            strokeWidth="3"
            opacity="0.95"
          />
          {/* Coastline highlight */}
          <path
            d="M 200 200 Q 280 130 420 140 Q 580 100 720 130 Q 880 110 980 180 Q 1080 220 1050 340 Q 1100 460 980 520 Q 850 580 700 560 Q 540 600 380 540 Q 220 510 180 380 Q 140 280 200 200 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            opacity="0.4"
          />
        </svg>

        {/* === LANDMARK ICONS (positioned per Figma) === */}
        {/* Eo gió — 447, 25 — 200×199 */}
        <LandmarkIcon label="Eo Gió" x={447} y={25} w={200} h={199} icon="cliff" />
        {/* Tháp đèn — 721, 122 — 156×155 */}
        <LandmarkIcon label="Tháp đèn" x={721} y={122} w={156} h={155} icon="lighthouse" />
        {/* Cây đa di sản — 614, 155 — 187×186 */}
        <LandmarkIcon label="Cây đa di sản" x={614} y={155} w={187} h={186} icon="tree-big" />
        {/* Miếu tổ nghề yến — 853, 303 — 124×124 */}
        <LandmarkIcon label="Miếu tổ nghề Yến" x={853} y={303} w={124} h={124} icon="shrine" />
        {/* Chim ens — 1008, 297 — 181×181 */}
        <LandmarkIcon label="Chim én biển" x={1008} y={297} w={181} h={181} icon="bird" />
        {/* Hang yến — 969, 395 — 156×155 */}
        <LandmarkIcon label="Hang Yến" x={969} y={395} w={156} h={155} icon="cave" />
        {/* Cỏ biển — 423, 443 — 156×155 */}
        <LandmarkIcon label="Cỏ biển" x={423} y={443} w={156} h={155} icon="seagrass" />
        {/* Bãi biển #1 — 657, 444 — 62×62 */}
        <LandmarkIcon label="Bãi" x={657} y={444} w={62} h={62} icon="beach" />
        {/* Bãi biển #2 — 389, 389 — 62×62 */}
        <LandmarkIcon label="Bãi" x={389} y={389} w={62} h={62} icon="beach" />

        {/* Decorative trees/grass scattered — simplified */}
        {[
          { x: 211, y: 184, type: 'tree' },
          { x: 879, y: 248, type: 'tree' },
          { x: 281, y: 165, type: 'tree-small' },
          { x: 941, y: 359, type: 'tree-small' },
          { x: 308, y: 400, type: 'tree-small' },
          { x: 459, y: 259, type: 'tree-small' },
          { x: 781, y: 274, type: 'sprig' },
          { x: 819, y: 366, type: 'sprig' },
          { x: 711, y: 292, type: 'sprig' },
          { x: 269, y: 359, type: 'grass' },
          { x: 850, y: 363, type: 'grass' },
          { x: 706, y: 304, type: 'grass' },
          { x: 503, y: 197, type: 'sprig' },
          { x: 777, y: 283, type: 'sprig' },
          { x: 206, y: 304, type: 'sprig' },
          { x: 517, y: 193, type: 'grass' },
        ].map((d, i) => (
          <TreeIcon key={i} x={d.x} y={d.y} type={d.type as any} />
        ))}
      </div>
    </section>
  );
}

function LandmarkIcon({ label, x, y, w, h, icon }: { label: string; x: number; y: number; w: number; h: number; icon: string }) {
  return (
    <div className="absolute flex flex-col items-center" style={{ left: x, top: y, width: w, height: h }}>
      {/* Icon illustration */}
      <div className="relative flex items-center justify-center" style={{ width: w, height: h - 20 }}>
        {icon === 'cliff' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <path d="M 10 80 L 30 30 L 50 50 L 70 20 L 90 70 L 90 90 L 10 90 Z" fill="#3D8B3D" stroke="#fff" strokeWidth="3" />
            <path d="M 30 30 L 35 25 L 32 35 Z" fill="#1E5C1E" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'lighthouse' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <rect x="42" y="20" width="16" height="60" fill="#E86B35" stroke="#fff" strokeWidth="3" />
            <rect x="38" y="14" width="24" height="10" fill="#1A2E2D" stroke="#fff" strokeWidth="3" />
            <polygon points="50,4 38,16 62,16" fill="#E86B35" stroke="#fff" strokeWidth="3" />
            <rect x="36" y="78" width="28" height="8" fill="#C9B48A" stroke="#fff" strokeWidth="2" />
            <path d="M 35 86 L 65 86 L 60 95 L 40 95 Z" fill="#3D8B3D" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'tree-big' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <ellipse cx="50" cy="35" rx="38" ry="32" fill="#3D8B3D" stroke="#fff" strokeWidth="3" />
            <ellipse cx="35" cy="40" rx="20" ry="22" fill="#2E6E2E" stroke="#fff" strokeWidth="2.5" opacity="0.85" />
            <ellipse cx="65" cy="42" rx="22" ry="24" fill="#2E6E2E" stroke="#fff" strokeWidth="2.5" opacity="0.85" />
            <rect x="46" y="62" width="8" height="28" fill="#6B3F2A" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'shrine' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <polygon points="50,15 20,40 80,40" fill="#E86B35" stroke="#fff" strokeWidth="3" />
            <rect x="25" y="40" width="50" height="40" fill="#C9B48A" stroke="#fff" strokeWidth="3" />
            <rect x="42" y="55" width="16" height="25" fill="#6B3F2A" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'bird' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <path d="M 10 50 Q 30 30 50 45 Q 70 30 90 50 Q 70 55 50 52 Q 30 55 10 50 Z" fill="#3AACA8" stroke="#fff" strokeWidth="3" />
            <circle cx="50" cy="45" r="6" fill="#0F2524" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'cave' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <path d="M 15 75 Q 15 30 50 25 Q 85 30 85 75 Z" fill="#1A2E2D" stroke="#fff" strokeWidth="3" />
            <path d="M 30 75 Q 30 50 50 47 Q 70 50 70 75 Z" fill="#5A7370" stroke="#fff" strokeWidth="2" />
          </svg>
        )}
        {icon === 'seagrass' && (
          <svg viewBox="0 0 100 100" width={w * 0.85} height={(h - 20) * 0.85}>
            <ellipse cx="50" cy="85" rx="42" ry="8" fill="#C9B48A" stroke="#fff" strokeWidth="2" opacity="0.6" />
            <path d="M 30 85 Q 35 60 28 25" stroke="#3D8B3D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 50 85 Q 55 55 48 15" stroke="#3D8B3D" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M 70 85 Q 75 60 68 28" stroke="#3D8B3D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 40 85 Q 42 70 38 50" stroke="#6BAE6B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 60 85 Q 62 70 58 50" stroke="#6BAE6B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </svg>
        )}
        {icon === 'beach' && (
          <svg viewBox="0 0 60 60" width={w} height={h - 20}>
            <path d="M 4 40 Q 18 28 30 36 Q 42 28 56 40 L 56 56 L 4 56 Z" fill="#F5EDD8" stroke="#fff" strokeWidth="2.5" />
            <path d="M 4 40 Q 18 32 30 38 Q 42 32 56 40" stroke="#7DD3D0" strokeWidth="2" fill="none" />
          </svg>
        )}
      </div>
      {/* Label */}
      <div className="text-body-meta text-ink-main font-medium mt-1 text-center whitespace-nowrap">{label}</div>
    </div>
  );
}

function TreeIcon({ x, y, type }: { x: number; y: number; type: 'tree' | 'tree-small' | 'sprig' | 'grass' }) {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {type === 'tree' && (
        <svg viewBox="0 0 60 73" width={60} height={73}>
          <ellipse cx="30" cy="25" rx="22" ry="20" fill="#3D8B3D" stroke="#fff" strokeWidth="2.5" />
          <rect x="27" y="40" width="6" height="28" fill="#6B3F2A" stroke="#fff" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'tree-small' && (
        <svg viewBox="0 0 41 56" width={41} height={56}>
          <ellipse cx="20" cy="20" rx="16" ry="16" fill="#3D8B3D" stroke="#fff" strokeWidth="2" />
          <rect x="17" y="32" width="6" height="22" fill="#6B3F2A" stroke="#fff" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'sprig' && (
        <svg viewBox="0 0 33 27" width={33} height={27}>
          <path d="M 6 23 Q 16 6 28 22" stroke="#3D8B3D" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 12 16 Q 16 10 20 14" stroke="#6BAE6B" strokeWidth="2.5" fill="none" />
        </svg>
      )}
      {type === 'grass' && (
        <svg viewBox="0 0 47 47" width={47} height={47}>
          <path d="M 12 42 Q 15 22 18 8" stroke="#3D8B3D" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 24 42 Q 27 18 30 4" stroke="#3D8B3D" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 36 42 Q 39 22 42 12" stroke="#3D8B3D" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
