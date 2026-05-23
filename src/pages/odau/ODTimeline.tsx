import TornTag from '@/components/TornTag';

/**
 * S3 Nhịp ngày — 1440×2181 at y=2593.
 * Label (120, 67) — "MỘT NGÀY KHI Ở LẠI"
 * Title (120, 117) 791×112.
 * 7 timeline steps alternating left/right.
 */
const steps = [
  {
    time: '5:30 – 7:00',
    label: 'BUỔI SÁNG SỚM',
    body: 'Khi bạn còn đang say giấc, cuộc sống trên đảo đã bắt đầu. Hãy dậy sớm, ra cầu cảng Bãi Làng. Khi mặt trời còn chưa lên hẳn, cả bến đã có người qua lại. Những chiếc thuyền thúng cập bờ. Mặt nước buổi sớm yên ả. Ánh nắng vàng dịu.',
    photoLbl: 'Cầu cảng Bãi Làng bình minh — thuyền cập bờ',
    photoBg: 'bg-sand-mid',
    color: 'text-coral',
    timeColor: 'text-coral',
    x: 120,
    y: 297,
    h: 255,
  },
  {
    time: '7:00 – 9:00',
    label: 'BUỔI SÁNG',
    body: 'Buổi sáng, bạn có thể bắt đầu bằng một tô mỳ, một ổ bánh mì, hay đơn giản là ly cà phê nhìn ra biển. Không cần đặt trước. Chủ nhà sẽ hỏi bạn muốn gì rồi tự xử lý.',
    photoLbl: 'Bàn ăn ngoài hiên — tô mỳ, cà phê, biển xa',
    photoBg: 'bg-coral-light',
    color: 'text-coral',
    timeColor: 'text-coral',
    x: 760,
    y: 561,
    h: 225,
  },
  {
    time: '9:00 – 17:00',
    label: 'BAN NGÀY',
    body: 'Biển, rừng, hoặc chỉ đơn giản là đi bộ dọc đảo. Không có lịch cứng. Không có hướng dẫn viên cầm cờ. Chủ nhà thường sẵn sàng gợi ý bãi nào đang đẹp, hay chỗ nào nên tránh hôm nay vì sóng.',
    photoLbl: 'Đa ảnh — người lặn / đường rừng / bàn ăn trưa',
    photoBg: 'bg-ocean-mid',
    color: 'text-ocean-primary',
    timeColor: 'text-ocean-primary',
    x: 120,
    y: 825,
    h: 225,
  },
  {
    time: '17:00 – 19:00',
    label: 'BUỔI CHIỀU',
    body: 'Khi chiều xuống, đảo chậm lại. Khách ngoài bãi thưa dần. Mặt nước đổi màu từ xanh sang gam trầm hơn. Dưới rặng dừa, vài người ngồi vá lưới. Người dân đôi khi vẫn nói vui: "Ở lại bửa ni bửa mai rồi về."',
    photoLbl: 'Bóng chiều trên bãi cát — ánh nắng dài',
    photoBg: 'bg-sand-dark',
    color: 'text-coral',
    timeColor: 'text-coral',
    x: 760,
    y: 1089,
    h: 285,
  },
  {
    time: '19:00 – 21:00',
    label: 'BỮA TỐI',
    body: 'Bữa tối ở đây không cần đặt bàn. Chủ nhà sẽ hỏi buổi sáng: "Tối ni ăn gì?" Rồi ghé chợ, hoặc hỏi người quen vừa đi biển về. Thực đơn thay đổi theo ngày — theo những gì biển vừa mang lên.',
    photoLbl: 'Bàn ăn tối ngoài trời — đèn vàng, mực nướng',
    photoBg: 'bg-coral',
    color: 'text-coral',
    timeColor: 'text-coral',
    x: 120,
    y: 1353,
    h: 242,
  },
  {
    time: '21:00+',
    label: 'ĐÊM — TÙY CHỌN',
    body: 'Nếu may mắn, bạn còn có thể theo thuyền của ngư dân ra biển câu mực đêm. Khi thuyền rời bãi, mặt nước gần như tối hẳn, chỉ còn những bóng đèn vàng treo dọc mạn ghe hắt xuống biển. Mực kéo lên vẫn còn ánh bạc lấp lánh.',
    photoLbl: 'Mực nướng trên ghe đêm — đèn vàng',
    photoBg: 'bg-ink-bgdark',
    color: 'text-ocean-primary',
    timeColor: 'text-ocean-primary',
    x: 760,
    y: 1617,
    h: 289,
  },
  {
    time: 'NGÀY HÔM SAU',
    label: 'SÁNG HÔM SAU',
    body: 'Sáng hôm sau, bạn nhìn mặt biển bằng một ánh mắt khác. Không phải vì biển thay đổi. Mà vì bạn đã có thêm một buổi tối, một bữa ăn, và một đêm ngủ với tiếng sóng.',
    photoLbl: 'Hiên homestay sáng sớm — ánh sáng vàng mới',
    photoBg: 'bg-ocean-light',
    color: 'text-green-mid',
    timeColor: 'text-green-mid',
    x: 120,
    y: 1881,
    h: 225,
  },
];

export default function ODTimeline() {
  return (
    <section className="relative w-[1440px] h-[2181px] bg-ink-offwhite overflow-hidden">
      {/* Label */}
      <div className="absolute" style={{ left: 120, top: 67 }}>
        <TornTag bg="bg-coral">MỘT NGÀY KHI Ở LẠI</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 117, width: 900, fontSize: 48, lineHeight: '116%', letterSpacing: '-0.5px' }}
      >
        Một ngày ở lại trông không<br />
        giống một ngày tour.
      </h2>

      {/* Vertical timeline line */}
      <div
        className="absolute"
        style={{ left: 719, top: 327, width: 2, height: 1820, background: 'rgba(201,180,138,0.6)' }}
      />

      {steps.map((s, i) => {
        const isLeft = s.x === 120;
        return (
          <div key={i}>
            {/* Center dot on timeline */}
            <div
              className="absolute rounded-full border-[4px] border-ink-white"
              style={{ left: 711, top: s.y + 90, width: 18, height: 18, background: s.color.includes('coral') ? '#E86B35' : s.color.includes('ocean') ? '#2A9B97' : '#3D8B3D' }}
            />

            {/* Time label opposite content */}
            <div
              className={`absolute text-tag-up uppercase ${s.timeColor}`}
              style={{
                left: isLeft ? 750 : 540,
                top: s.y + 86,
                width: 180,
                textAlign: isLeft ? 'left' : 'right',
                fontSize: 13,
              }}
            >
              {s.time}
            </div>

            {/* Content card */}
            <div
              className="absolute bg-ink-white rounded-[2px] shadow-card-sm overflow-hidden"
              style={{
                left: s.x,
                top: s.y,
                width: 562,
                height: s.h - 20,
                transform: isLeft ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
              }}
            >
              {/* Photo left half */}
              <div className={`absolute ${s.photoBg} flex items-center justify-center`} style={{ left: 10, top: 10, width: 220, height: s.h - 40 }}>
                <span className="text-body-caption text-ink-white opacity-55 text-center px-2">[ {s.photoLbl} ]</span>
              </div>

              {/* Text right */}
              <div className="absolute" style={{ left: 250, top: 20, width: 300 }}>
                <div className={`text-tag-up uppercase ${s.color}`}>{s.label}</div>
                <p className="font-body text-ink-main mt-3" style={{ fontSize: 13, lineHeight: '165%', opacity: 0.85 }}>
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
