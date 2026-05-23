import TornTag from '@/components/TornTag';
import Bubble from '@/components/Bubble';

/**
 * S10 Kết — Cửa thoát — 1440×720 at y=8273.
 * S10 Closing Text (732, 0) 708×720.
 */
export default function CBKet() {
  return (
    <section className="relative w-[1440px] h-[720px] overflow-hidden">
      {/* Twilight gradient — looking up from below */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(225deg, #1A4847 0%, #0F2E2C 50%, #082624 100%)',
        }}
      />

      {/* Surface sun light */}
      <div
        className="absolute"
        style={{
          left: 270,
          top: -150,
          width: 900,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(245,237,216,0.18), transparent 70%)',
        }}
      />

      {/* Sun rays */}
      <div className="absolute" style={{ left: 300, top: -200, width: 140, height: 1000, background: 'rgba(245,237,216,0.07)', transform: 'rotate(-12deg)' }} />
      <div className="absolute" style={{ left: 700, top: -250, width: 160, height: 1100, background: 'rgba(245,237,216,0.07)', transform: 'rotate(8deg)' }} />
      <div className="absolute" style={{ left: 1000, top: -180, width: 130, height: 950, background: 'rgba(245,237,216,0.07)', transform: 'rotate(-6deg)' }} />

      {/* Rising bubbles */}
      <Bubble size={24} className="absolute" style={{ left: 140, top: 540 }} />
      <Bubble size={16} className="absolute" style={{ left: 220, top: 480 }} />
      <Bubble size={20} className="absolute" style={{ left: 320, top: 580 }} />
      <Bubble size={28} className="absolute" style={{ left: 1180, top: 500 }} />
      <Bubble size={16} className="absolute" style={{ left: 1280, top: 560 }} />
      <Bubble size={22} className="absolute" style={{ left: 920, top: 620 }} />
      <Bubble size={18} className="absolute" style={{ left: 480, top: 640 }} />

      {/* Silhouette of person on surface */}
      <div
        className="absolute rounded-full"
        style={{ left: 660, top: 40, width: 120, height: 60, background: 'rgba(10,31,30,0.55)' }}
      />

      {/* Centered closing text at right side per Figma (732, 0) 708x720 */}
      <div className="absolute flex flex-col items-center justify-start" style={{ left: 366, top: 180, width: 708 }}>
        <TornTag bg="bg-ocean-primary">KẾT · TỪ TÔI ĐẾN BẠN</TornTag>

        <p className="font-quote text-sand-light text-center mt-9" style={{ fontSize: 22, lineHeight: '148%', opacity: 0.88 }}>
          Rồi sẽ đến lúc bạn quay lại bến cảng.<br />
          Tàu rời đảo khi mặt trời đã lên cao.<br />
          Những mái nhà nhỏ lùi dần phía sau.
        </p>

        <div className="mt-7" style={{ width: 56, height: 2, background: 'rgba(125,211,208,0.5)' }} />

        <p className="font-body text-sand-mid text-center mt-7" style={{ fontSize: 16, lineHeight: '172%', opacity: 0.85 }}>
          Tôi vẫn tiếp tục nuôi những sự sống rất nhỏ dưới mặt nước, để rồi một ngày nào đó, chúng lớn lên thành đàn cá ngoài khơi, thành những bữa ăn trên bàn, thành sinh kế của người dân đảo, và thành một phần trong trải nghiệm mà bạn vừa mang về.
        </p>

        <p className="font-quote text-ocean-light text-center mt-9" style={{ fontSize: 26, lineHeight: '142%' }}>
          Những điều ấy không tự nhiên mà còn lại.<br />
          Trong đó có cả bạn.
        </p>
      </div>
    </section>
  );
}
