import { useEffect, useState } from 'react';
import Map from '@/pages/figma-generated/Map';

/**
 * MapInteractive — wrap quanh Map figma-generated, không sửa file gốc.
 * - Render 13 location pins overlay (% positions tính từ inset Figma)
 * - Click pin → mở popover info dạng polaroid (collage DNA)
 * - Cảnh quan (Cây/Cỏ/Dừa/Chim/Songs/Thuyền) animate qua CSS attribute
 *   selectors trên data-name trong index.css — không touch Map.tsx.
 */

type Loc = {
  id: string;
  name: string;
  kind: string;       // torn-tag label
  desc: string;
  x: number;          // % position từ left
  y: number;          // % position từ top
  tone: string;       // pin + accent color
  cta?: string;
};

// Tính từ inset Figma (center của bbox mỗi địa điểm)
const LOCATIONS: Loc[] = [
  { id: 'hang-yen',     name: 'Hang Yến',           kind: 'Hang động',  desc: 'Hang đá tự nhiên ở Bãi Hương, nơi yến sào được khai thác từ thời nhà Nguyễn. Tour kayak vào hang khi thủy triều xuống.',                       x: 87.2, y: 70,   tone: '#1a7f7c' },
  { id: 'thap-den',     name: 'Tháp Đèn',           kind: 'Hải đăng',   desc: 'Hải đăng cao trên đỉnh đảo, view 360° toàn quần đảo và biển khơi. Lối lên qua đường mòn rừng, ~30 phút trekking.',                            x: 66.5, y: 29.5, tone: '#1a7f7c' },
  { id: 'eo-gio',       name: 'Eo Gió',             kind: 'Cảnh quan',  desc: 'Vách đá hẹp giữa hai mỏm đảo, gió mạnh quanh năm. Hoàng hôn ở Eo Gió là khoảnh khắc đẹp nhất Cù Lao Chàm.',                                    x: 45.6, y: 18.4, tone: '#1a7f7c' },
  { id: 'mieu-to',      name: 'Miếu Tổ Nghề Yến',   kind: 'Di tích',    desc: 'Miếu cổ thờ tổ nghề khai thác yến sào ở Bãi Hương. Lễ chính 9-10/3 ÂL — tế lễ, rước kiệu dọc bờ biển.',                                       x: 76.3, y: 54,   tone: '#1a7f7c' },
  { id: 'cay-da',       name: 'Cây Đa Di Sản',      kind: 'Di sản',     desc: 'Cây đa hơn 200 tuổi, công nhận di sản thiên nhiên Việt Nam. Bóng rợp một góc làng, điểm dừng quen của dân đảo.',                              x: 59,   y: 36.7, tone: '#3d8b3d' },
  { id: 'chua',         name: 'Chùa Hải Tạng',      kind: 'Chùa cổ',    desc: 'Chùa cổ hơn 200 tuổi nằm giữa các con đường nhỏ ở Bãi Làng. Kiến trúc giản dị, không cầu kỳ.',                                                x: 46.5, y: 39.4, tone: '#1a7f7c' },
  { id: 'gieng-co',     name: 'Giếng Cổ Chăm Pa',   kind: 'Di tích',    desc: 'Giếng nước ngọt của người Chăm cổ, vẫn còn nước trong giữa biển mặn. Một trong những giếng cổ hiếm hoi còn nguyên vẹn.',                       x: 55.6, y: 51.5, tone: '#1a7f7c' },
  { id: 'bai-lang',     name: 'Bãi Làng',           kind: 'Bãi biển',   desc: 'Bãi chính của đảo, nơi tàu khách cập bến. Có chợ cá sáng sớm, quán ăn dân địa phương và phần lớn homestay.',                                   x: 50.2, y: 59.8, tone: '#e86b35' },
  { id: 'bai-huong',    name: 'Bãi Hương',          kind: 'Bãi biển',   desc: 'Làng chài 400 năm tuổi ở phía Nam đảo. Yên tĩnh, đậm chất bản địa. Khách quốc tế thường ở lại 2-7 đêm.',                                       x: 66.6, y: 68.6, tone: '#e86b35' },
  { id: 'bai-bac',      name: 'Bãi Bắc',            kind: 'Khu bảo tồn',desc: 'Khu vực phục hồi cỏ biển, cấm tàu du lịch. Nơi câu chuyện bảo tồn hiện rõ nhất — chỉ tham quan bằng kayak hoặc đi bộ.',                        x: 35,   y: 62.2, tone: '#e86b35' },
  { id: 'bai-bim',      name: 'Bãi biển nhỏ',       kind: 'Bãi biển',   desc: 'Bãi nhỏ, ít người, nước trong. Đi bộ ~20 phút từ Bãi Làng theo lối mòn ven biển.',                                                              x: 57.4, y: 70.2, tone: '#e86b35' },
  { id: 'homestay-a',   name: 'Homestay khu A',     kind: 'Lưu trú',    desc: 'Cụm homestay khu Bãi Làng. Chủ nhà thường là ngư dân — có bữa ăn cùng gia đình, đi biển sáng cùng chủ.',                                       x: 37,   y: 46,   tone: '#e53a1f' },
  { id: 'homestay-b',   name: 'Homestay khu B',     kind: 'Lưu trú',    desc: 'Cụm homestay khu Bãi Hương. Yên tĩnh, view biển, thường khách ở 2 đêm trở lên — đủ để hiểu nhịp sống đảo.',                                    x: 71.9, y: 64.7, tone: '#ffc239' },
];

function LocationPin({ loc, active, onClick }: { loc: Loc; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={`location-pin ${active ? 'is-active' : ''}`}
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, ['--pin-tone' as string]: loc.tone } as React.CSSProperties}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      aria-label={loc.name}
    >
      <span className="pin-ring" aria-hidden="true" />
      <span className="pin-ring pin-ring-2" aria-hidden="true" />
      <span className="pin-dot" aria-hidden="true" />
      <span className="pin-tooltip">{loc.name}</span>
    </button>
  );
}

function LocationInfoCard({ loc, onClose }: { loc: Loc; onClose: () => void }) {
  const flipH = loc.x > 60;  // card sang trái nếu pin ở nửa phải map
  const flipV = loc.y > 70 ? 'bottom' : loc.y < 25 ? 'top' : 'middle';
  return (
    <div
      className={`location-card ${flipH ? 'flip-h' : ''} flip-v-${flipV}`}
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, ['--card-tone' as string]: loc.tone } as React.CSSProperties}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-label={loc.name}
    >
      <button type="button" className="location-card-close" onClick={onClose} aria-label="Đóng">×</button>
      <span className="location-card-tag" style={{ background: loc.tone }}>{loc.kind}</span>
      <h4 className="location-card-name">{loc.name}</h4>
      <p className="location-card-desc">{loc.desc}</p>
      <button type="button" className="location-card-cta link-draw-hover" style={{ color: loc.tone }}>
        Tìm hiểu thêm <span className="arrow-nudge">→</span>
      </button>
    </div>
  );
}

export default function MapInteractive() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = LOCATIONS.find((l) => l.id === activeId) ?? null;

  // ESC để đóng + click ra ngoài
  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveId(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeId]);

  return (
    <div className="relative size-full" onClick={() => setActiveId(null)}>
      <Map />
      {LOCATIONS.map((loc) => (
        <LocationPin
          key={loc.id}
          loc={loc}
          active={loc.id === activeId}
          onClick={() => setActiveId((curr) => (curr === loc.id ? null : loc.id))}
        />
      ))}
      {active && <LocationInfoCard loc={active} onClose={() => setActiveId(null)} />}
    </div>
  );
}
