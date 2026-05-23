import TornTag from '@/components/TornTag';

/**
 * S7 Quanh chỗ ở — 1440×880 at y=7600.
 * Tag (120, 72).
 * Title (120, 112) 755×168.
 * 3 places: WELL (114, 345), TEMPLE (532, 322), MARKET (946, 335).
 */
const places = [
  {
    id: 'WELL',
    icon: '🏛',
    label: 'GIẾNG CỔ CHĂM PA',
    title: 'Nước ngọt giữa biển',
    body: 'Một chiếc giếng cổ người Chăm nằm giữa những con đường nhỏ ở Bãi Làng. Nước ngọt, dù bốn phía đều là biển. Vào mùa khô, vẫn hiếm khi cạn. Có người tin uống nước giếng sẽ đỡ say sóng.',
    color: 'sand-dark',
    photoBg: 'bg-sand-dark',
    photoLbl: 'Giếng đá, rêu xanh, ánh sáng tán cây',
    x: 114,
    y: 345,
    rot: -1.5,
  },
  {
    id: 'TEMPLE',
    icon: '🛕',
    label: 'CHÙA HẢI TẠNG',
    title: '200 năm tuổi',
    body: 'Chùa Hải Tạng đã ngự trên đảo hơn 200 năm. Không lớn, không cầu kỳ. Nhưng ngư dân vẫn ghé trước mỗi chuyến ra khơi. Giữa biển và núi, đây là nơi người ta tìm đến để bình yên.',
    color: 'ocean-deep',
    photoBg: 'bg-ocean-deep',
    photoLbl: 'Cổng chùa giản dị, cây cổ thụ',
    x: 532,
    y: 322,
    rot: 0.5,
  },
  {
    id: 'MARKET',
    icon: '🛒',
    label: 'CHỢ TÂN HIỆP',
    title: 'Mùi của đảo',
    body: 'Chợ nhỏ, nhưng thứ gì cũng có. Cá vừa đi biển về, cua đá buộc dây trong rổ, bánh ít còn nóng, rau rừng vừa hái từ núi xuống. Rau rừng có mùi rất riêng — vừa hăng vừa mằn mặn vì lớn lên giữa gió biển.',
    color: 'green-mid',
    photoBg: 'bg-green-mid',
    photoLbl: 'Rổ cá tươi, rau rừng, người qua lại',
    x: 946,
    y: 335,
    rot: 1.5,
  },
];

export default function ODQuanhCho() {
  return (
    <section className="relative w-[1440px] h-[880px] bg-sand-light overflow-hidden">
      <div className="absolute" style={{ left: 120, top: 72 }}>
        <TornTag bg="bg-coral">LANG THANG · QUANH ĐÂY</TornTag>
      </div>

      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 112, width: 900, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Không cần lịch trình.<br />
        Nhưng nếu muốn đi bộ ra đây, cũng không xa.
      </h2>

      {places.map((p) => (
        <div
          key={p.id}
          className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
          style={{
            left: p.x,
            top: p.id === 'TEMPLE' ? p.y - 16 : p.y,
            width: 380,
            height: 460,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          {/* Photo top */}
          <div className={`p-2 bg-white`}>
            <div className={`w-full ${p.photoBg} flex items-center justify-center`} style={{ height: 180 }}>
              <span className="text-body-caption text-ink-white opacity-55 text-center px-3">[ {p.photoLbl} ]</span>
            </div>
          </div>

          {/* Icon over photo edge */}
          <div className="absolute" style={{ right: 24, top: 130, fontSize: 48 }}>{p.icon}</div>

          {/* Label */}
          <div className="absolute" style={{ left: 20, top: 204 }}>
            <TornTag bg={`bg-${p.color}`}>{p.label}</TornTag>
          </div>

          {/* Title */}
          <h3 className="absolute font-display font-bold text-ink-main" style={{ left: 20, top: 246, fontSize: 22 }}>
            {p.title}
          </h3>

          {/* Body */}
          <p className="absolute font-body text-ink-muted" style={{ left: 20, top: 288, width: 340, fontSize: 13, lineHeight: '168%', opacity: 0.85 }}>
            {p.body}
          </p>
        </div>
      ))}
    </section>
  );
}
