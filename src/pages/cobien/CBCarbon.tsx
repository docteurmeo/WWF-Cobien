import FrameSection from '@/components/FrameSection';
import Wave from '@/components/Wave';

/**
 * S5 Một kho carbon xanh — 1440×750 at y=4448. Figma node 129:1232.
 * Very dark navy left → deep teal right (LEFT-RIGHT gradient).
 * Carbon signature: hexagon 35× rotate 6° + 4 concentric ripples + 6 CO₂ particles + photo underlay.
 * Wave bottom transitions into S6 light cream.
 */
const A = '/WWF-Cobien/assets/cobien/s5';
const S5_H = 750;
const S6_BG = '#E8D5B0'; // S6 Sand Mid (confirmed get_design_context)

const CO2 = [
  { src: 'co2-1.svg', left: 330, top: 260, size: 32 },
  { src: 'co2-2.svg', left: 400, top: 240, size: 24 },
  { src: 'co2-3.svg', left: 440, top: 280, size: 20 },
  { src: 'co2-4.svg', left: 290, top: 210, size: 28 },
  { src: 'co2-5.svg', left: 480, top: 200, size: 16 },
  { src: 'co2-3.svg', left: 260, top: 280, size: 20 },
];

export default function CBCarbon() {
  return (
    <FrameSection
      height={S5_H}
      background="linear-gradient(90deg, #061B19 0%, #102E2B 55%, #1A4A47 100%)"
      fullBleed={
        <div className="absolute left-0 right-0 bottom-0" style={{ zIndex: 6 }}>
          <Wave fill={S6_BG} height={80} amplitude={14} wavelength={420} speedSeconds={18} />
        </div>
      }
    >
      {/* Background photo underlay (172, 181) 436×408.
          PNG transparent (tách nền) — KHÔNG convert sang JPEG kẻo mất alpha → vùng trong suốt thành đen.
          Figma node 129:1233 opacity-29 nhưng PNG đã có alpha sẵn → render full opacity 1 cũng OK. */}
      <div className="absolute" style={{ left: 172, top: 181, width: 436, height: 408, zIndex: 1 }}>
        <img alt="" className="block w-full h-full" src={`${A}/bg-photo.png`} style={{ objectFit: 'contain' }} />
      </div>

      {/* Ripples — 4 concentric rings, opacity descending */}
      <div className="absolute" style={{ left: 70, top: 90, width: 580, height: 580, opacity: 0.15, zIndex: 2 }}>
        <img alt="" className="block w-full h-full" src={`${A}/ripple4.png`} />
      </div>
      <div className="absolute" style={{ left: 135, top: 155, width: 450, height: 450, opacity: 0.25, zIndex: 2 }}>
        <img alt="" className="block w-full h-full" src={`${A}/ripple3.png`} />
      </div>
      <div className="absolute" style={{ left: 195, top: 215, width: 330, height: 330, opacity: 0.35, zIndex: 2 }}>
        <img alt="" className="block w-full h-full" src={`${A}/ripple2.png`} />
      </div>
      <div className="absolute" style={{ left: 250, top: 270, width: 220, height: 220, zIndex: 2 }}>
        <img alt="" className="block w-full h-full" src={`${A}/ripple1.svg`} />
      </div>

      {/* CO₂ particles */}
      {CO2.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: c.left, top: c.top, width: c.size, height: c.size, zIndex: 3 }}
        >
          <img alt="" className="block w-full h-full" src={`${A}/${c.src}`} />
        </div>
      ))}

      {/* Hexagon 35× CARBON badge (267, 287) 170×170 rotate 6° */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 267, top: 287, width: 186.839, height: 186.839, zIndex: 4 }}
      >
        <div
          className="card-lift-hover"
          style={{ transform: 'rotate(6deg)', width: 170, height: 170, position: 'relative' }}
        >
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/hexagon.svg`} />
          <p
            className="absolute font-display font-black text-white text-center"
            style={{ left: 0, top: 48.5, width: '100%', fontSize: 64, lineHeight: 0.95, letterSpacing: '-2.5px', margin: 0 }}
          >
            35×
          </p>
          <p
            className="absolute font-display font-semibold text-white uppercase text-center"
            style={{ left: 0, top: 115, width: '100%', fontSize: 12, lineHeight: 1, letterSpacing: '1px', opacity: 0.85, margin: 0 }}
          >
            CARBON
          </p>
        </div>
      </div>

      {/* HIỆU SUẤT CARBON torn polygon tag (260, 469) 186×28 rotate 3° */}
      <div className="absolute" style={{ left: 260, top: 469, width: 187.21, height: 37.696, zIndex: 5 }}>
        <div
          className="flex items-center justify-center w-full h-full"
        >
          <div style={{ transform: 'rotate(3deg)', width: 186, height: 28, position: 'relative' }}>
            <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/torn-polygon.svg`} />
            <p
              className="absolute font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ left: 18, top: 9, fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0 }}
            >
              HIỆU SUẤT CARBON
            </p>
          </div>
        </div>
      </div>

      {/* Sub caption (288.47, 506) rotate 3° */}
      <div className="absolute" style={{ left: 288.47, top: 506, width: 123.717, height: 42.336, zIndex: 5 }}>
        <div className="flex items-center justify-center w-full h-full">
          <div
            style={{
              transform: 'rotate(3deg)',
              color: '#E8D5B0',
              fontFamily: 'Geologica, sans-serif',
              fontSize: 12,
              letterSpacing: '0.2px',
              opacity: 0.85,
            }}
          >
            <p style={{ lineHeight: 1.5, margin: 0 }}>so với rừng nhiệt đới</p>
            <p style={{ lineHeight: 1.5, margin: 0 }}>trên cùng diện tích</p>
          </div>
        </div>
      </div>

      {/* Text right (732, 80) 588w */}
      <div className="absolute flex flex-col" style={{ left: 732, top: 80, width: 588, gap: 22, zIndex: 5 }}>
        <div className="relative" style={{ width: 252, height: 33 }}>
          <img alt="" className="absolute inset-0 w-full h-full" src={`${A}/label.svg`} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <p
              className="font-display font-semibold text-white uppercase whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: 1, letterSpacing: '1px', margin: 0, marginTop: 0.5 }}
            >
              VAI TRÒ 04 · KHO CARBON XANH
            </p>
          </div>
        </div>

        <div
          className="font-display font-bold text-white"
          style={{ fontSize: 52, letterSpacing: '-0.8px' }}
        >
          <p style={{ lineHeight: 1.08, margin: 0 }}>Bể chứa carbon xanh</p>
          <p style={{ lineHeight: 1.08, margin: 0 }}>của đại dương.</p>
        </div>

        <div
          className="font-quote italic"
          style={{ color: '#DEFAF7', fontSize: 20 }}
        >
          <p style={{ lineHeight: 1.42, margin: 0 }}>"Có một điều ít ai biết</p>
          <p style={{ lineHeight: 1.42, margin: 0 }}>qua những chuyến đi ngắn."</p>
        </div>

        <div
          className="font-display font-normal"
          style={{ color: '#E8D5B0', fontSize: 16, lineHeight: '24px', opacity: 0.9 }}
        >
          <p style={{ margin: 0 }}>
            Những thảm cỏ biển cũng là một trong những "bể chứa carbon xanh" quan trọng của đại dương. Trong quá trình quang hợp, cỏ biển hấp thụ CO2 từ khí quyển. Một phần carbon ấy được giữ lại trong lá, trong thân ngầm, và đặc biệt là trong lớp trầm tích nằm bên dưới. Khi những lớp trầm tích ấy ổn định trong thời gian dài, lượng carbon cũng được lưu giữ lại lâu dài.
          </p>
          <p style={{ margin: 0, height: 24 }}>&nbsp;</p>
          <p style={{ margin: 0 }}>
            Dù chỉ chiếm một phần nhỏ diện tích đại dương, các hệ sinh thái cỏ biển có khả năng lưu trữ carbon rất hiệu quả. Theo nhiều nghiên cứu, nếu so trên cùng diện tích, hiệu suất hấp thụ carbon của chúng có thể cao hơn nhiều hệ sinh thái trên cạn. Điều đó có nghĩa là một thảm cỏ biển còn khỏe có thể góp phần làm dịu đi những biến đổi lớn hơn của khí hậu, tác động tuần hoàn tới đời sống của những cộng đồng ven biển.
          </p>
        </div>
      </div>
    </FrameSection>
  );
}
