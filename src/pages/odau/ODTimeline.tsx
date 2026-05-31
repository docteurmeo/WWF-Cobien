import FrameSection from '@/components/FrameSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * S3 — Nhịp ngày khi ở lại · 1440×2181 · Figma 129:1607 (largest section)
 *
 * Vertical timeline alternating L/R:
 *   - Vertical line: x=719, top=327, h=1854, w=2, bg rgba(201,180,138,0.6)
 *   - 7 dots at x=711, size=18, spaced 264px apart (top: 387→651→915→1179→1443→1707→1971)
 *   - Cards alternate LEFT (steps 1,3,5,7) / RIGHT (steps 2,4,6), w=560 h≈220–285
 *   - Card layout: photo 220px wide LEFT inside card + text content RIGHT (250+ left offset)
 *   - Time labels (Geologica SemiBold 13 letter-spacing 2):
 *       Coral #e86b35 (morning/evening/dinner) · Teal #2a9b97 (daytime/night) · Green #3d8b3d (next day)
 *
 * Bg: #f8f5ef
 */
const A = '/WWF-Cobien/assets/odau';
const SECTION_H = 2181;
const LINE_X = 719;

type Step = {
  side: 'L' | 'R';
  dotTop: number;
  dotImg: string;
  cardTop: number;
  cardH: number;
  photoH: number;
  rotate: number;
  cardWrapperLeft: number;
  cardWrapperW: number;
  cardWrapperH: number;
  timeLabel: string;
  timeColor: string;
  stepLabel: string;
  stepLabelColor: string;
  photo: string | null; // null = placeholder teal box (designer chưa fill)
  body: React.ReactNode;
};

const STEPS: Step[] = [
  {
    side: 'L', dotTop: 387, dotImg: 'imgTimeDot1.svg',
    cardTop: 297, cardH: 250.014, photoH: 225.607, rotate: 0.5,
    cardWrapperLeft: 117.82, cardWrapperW: 562.16, cardWrapperH: 254.891,
    timeLabel: '5:30 – 7:00', timeColor: '#e86b35',
    stepLabel: 'BUỔI SÁNG SỚM', stepLabelColor: '#e86b35',
    photo: 'imgBuiSangSm.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Khi bạn còn đang say giấc, cuộc sống trên đảo đã bắt đầu.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Hãy dậy sớm, ra cầu cảng Bãi Làng. Khi mặt trời còn chưa lên hẳn, cả bến đã có người qua lại. Những chiếc thuyền thúng cập bờ.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Vài ghe cá vừa trở về sau chuyến biển sớm.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Mặt nước buổi sớm yên ả. Ánh nắng vàng dịu.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Mùi muối, mùi rong biển, và cả mùi cà phê từ vài quán nhỏ vừa mở cửa.</p>
      </>
    ),
  },
  {
    side: 'R', dotTop: 651, dotImg: 'imgTimeDot1.svg',
    cardTop: 556.11, cardH: 220, photoH: 200, rotate: -0.5,
    cardWrapperLeft: 760, cardWrapperW: 561.899, cardWrapperH: 224.878,
    timeLabel: '7:00 – 9:00', timeColor: '#e86b35',
    stepLabel: 'BUỔI SÁNG', stepLabelColor: '#e86b35',
    photo: 'imgBuiSang.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Buổi sáng, bạn có thể bắt đầu bằng một tô mỳ,</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>một ổ bánh mì, hay đơn giản là ly cà phê nhìn ra biển.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Không cần đặt trước. Không cần chờ thực đơn.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Chủ nhà sẽ hỏi bạn muốn gì rồi tự xử lý.</p>
      </>
    ),
  },
  {
    side: 'L', dotTop: 915, dotImg: 'imgTimeDot3.svg',
    cardTop: 825, cardH: 220, photoH: 200, rotate: 0.5,
    cardWrapperLeft: 118.08, cardWrapperW: 561.899, cardWrapperH: 224.878,
    timeLabel: '9:00 – 17:00', timeColor: '#2a9b97',
    stepLabel: 'BAN NGÀY', stepLabelColor: '#2a9b97',
    photo: null, // ⚠️ designer chưa fill — placeholder teal box
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Biển, rừng, hoặc chỉ đơn giản là đi bộ dọc đảo.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Không có lịch cứng. Không có hướng dẫn viên cầm cờ.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Chủ nhà thường sẵn sàng gợi ý bãi nào đang đẹp,</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>hay chỗ nào nên tránh hôm nay vì sóng.</p>
      </>
    ),
  },
  {
    side: 'R', dotTop: 1179, dotImg: 'imgTimeDot1.svg',
    cardTop: 1084.11, cardH: 280.56, photoH: 259.438, rotate: -0.5,
    cardWrapperLeft: 760, cardWrapperW: 562.427, cardWrapperH: 285.436,
    timeLabel: '17:00 – 19:00', timeColor: '#e86b35',
    stepLabel: 'BUỔI CHIỀU', stepLabelColor: '#e86b35',
    photo: 'imgBuiChiu.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Khi chiều xuống, đảo chậm lại.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Khách ngoài bãi thưa dần. Mặt nước đổi màu từ xanh sang gam trầm hơn.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Dưới rặng dừa, vài người ngồi vá lưới. Trẻ con vẫn chơi đùa trên cát.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Người dân ở đây đôi khi vẫn nói vui:</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>{`"Ở lại bửa ni bửa mai rồi về."`}</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Nghe thật đơn giản. Nhưng khi chiều xuống kiểu này, bạn sẽ hiểu tại sao.</p>
      </>
    ),
  },
  {
    side: 'L', dotTop: 1443, dotImg: 'imgTimeDot1.svg',
    cardTop: 1353, cardH: 237.47, photoH: 216.309, rotate: 0.5,
    cardWrapperLeft: 117.93, cardWrapperW: 562.051, cardWrapperH: 242.348,
    timeLabel: '19:00 – 21:00', timeColor: '#e86b35',
    stepLabel: 'BỮA TỐI', stepLabelColor: '#e86b35',
    photo: 'imgBaTi.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Bữa tối ở đây không cần đặt bàn.</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>{`Chủ nhà sẽ hỏi buổi sáng: "Tối ni ăn gì?"`}</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Rồi ghé chợ, hoặc hỏi người quen vừa đi biển về.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Nhà hàng của họ phục vụ cà phê ngon và các bữa tối kết hợp nướng BBQ tuyệt vời. Thực đơn thay đổi theo ngày — theo những gì biển vừa mang lên.</p>
      </>
    ),
  },
  {
    side: 'R', dotTop: 1707, dotImg: 'imgTimeDot3.svg',
    cardTop: 1612.11, cardH: 284.135, photoH: 261.123, rotate: -0.5,
    cardWrapperLeft: 760, cardWrapperW: 562.458, cardWrapperH: 289.011,
    timeLabel: '21:00+', timeColor: '#2a9b97',
    stepLabel: 'ĐÊM — TÙY CHỌN', stepLabelColor: '#2a9b97',
    photo: 'imgDemTuyChn.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Nếu may mắn, bạn còn có thể theo thuyền của ngư dân ra biển câu mực đêm.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Khi thuyền rời bãi, mặt nước gần như tối hẳn, chỉ còn những bóng đèn vàng treo dọc mạn ghe hắt xuống biển. Mực kéo lên vẫn còn ánh bạc lấp lánh, bỏ ngay lên bếp than nhỏ.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Nếu chỉ đi trong ngày, gần như bạn sẽ bỏ qua khoảnh khắc này.</p>
      </>
    ),
  },
  {
    side: 'L', dotTop: 1971, dotImg: 'imgTimeDot7.svg',
    cardTop: 1881, cardH: 220, photoH: 200, rotate: 0.5,
    cardWrapperLeft: 118.08, cardWrapperW: 561.899, cardWrapperH: 224.878,
    timeLabel: 'NGÀY HÔM SAU', timeColor: '#3d8b3d',
    stepLabel: 'SÁNG HÔM SAU', stepLabelColor: '#3d8b3d',
    photo: 'imgSangHomSau.jpg',
    body: (
      <>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Sáng hôm sau, bạn nhìn mặt biển</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>bằng một ánh mắt khác.</p>
        <p style={{ margin: 0, lineHeight: 1.65, height: '1em' }}>&nbsp;</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>Không phải vì biển thay đổi. Mà vì bạn đã có thêm</p>
        <p style={{ margin: 0, lineHeight: 1.65 }}>một buổi tối, một bữa ăn, và một đêm ngủ với tiếng sóng.</p>
      </>
    ),
  },
];

export default function ODTimeline() {
  return (
    <FrameSection height={SECTION_H} background="#f8f5ef">
      {/* Top label tag */}
      <div className="absolute" style={{ left: 120, top: 67, width: 224, height: 33 }}>
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/imgLabel.svg`} />
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: '50%',
            top: 'calc(50% + 0.5px)',
            transform: 'translate(-50%, -50%)',
            padding: '10px 16px',
          }}
        >
          <p
            className="font-display font-semibold text-white whitespace-nowrap"
            style={{ fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}
          >
            MỘT NGÀY KHI Ở LẠI
          </p>
        </div>
      </div>

      {/* Headline */}
      <p
        className="absolute font-display font-bold text-[#1a2e2d]"
        style={{ left: 120, top: 117, fontSize: 52, lineHeight: 1.08, letterSpacing: '-0.8px', width: 791 }}
      >
        Một ngày ở lại trông không giống một ngày tour.
      </p>

      {/* Vertical timeline line */}
      <div
        className="absolute"
        style={{ left: LINE_X, top: 327, width: 2, height: 1854, background: 'rgba(201,180,138,0.6)' }}
      />

      {STEPS.map((s, i) => (
        <TimelineStep key={i} step={s} index={i} />
      ))}
    </FrameSection>
  );
}

/**
 * TimelineStep — renders a single timeline beat (dot + time label + card).
 *
 * Each step owns its own IntersectionObserver via useScrollReveal. When the
 * card wrapper enters viewport, all 3 elements share the `.is-revealed` state
 * and animate into place with a paper-drop feel.
 *
 * The ref is attached to the card wrapper (largest hit-target, drives reveal
 * for the whole group). Dot + label sit slightly below and ride along.
 */
function TimelineStep({ step: s, index: i }: { step: Step; index: number }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();
  const reveal = revealed ? 'scroll-reveal-paper is-revealed' : 'scroll-reveal-paper';

  return (
    <>
      {/* Time dot — low-amplitude pulse to suggest the passage of time.
          Stagger each dot by -0.5s so the 7 dots breathe out of sync. */}
      <div
        className={`absolute stat-attention ${reveal}`}
        style={{ left: 711, top: s.dotTop, width: 18, height: 18, ['--stat-delay' as any]: `${-i * 0.5}s` }}
      >
        <img alt="" className="absolute inset-0 w-full h-full block" src={`${A}/${s.dotImg}`} />
      </div>

      {/* Time label — LEFT cards: label right of line; RIGHT cards: label left of line */}
      {s.side === 'L' ? (
        <p
          className={`absolute font-display font-semibold whitespace-nowrap ${reveal}`}
          style={{
            left: 750,
            top: s.dotTop - 4,
            width: 180,
            color: s.timeColor,
            fontSize: 13,
            lineHeight: 1,
            letterSpacing: 2,
          }}
        >
          {s.timeLabel}
        </p>
      ) : (
        <p
          className={`absolute font-display font-semibold whitespace-nowrap ${reveal}`}
          style={{
            left: 690,
            top: s.dotTop - 4,
            width: 180,
            color: s.timeColor,
            fontSize: 13,
            lineHeight: 1,
            letterSpacing: 2,
            textAlign: 'right',
            transform: 'translateX(-100%)',
          }}
        >
          {s.timeLabel}
        </p>
      )}

      {/* Card wrapper — attach scroll-reveal ref here (largest element, drives the group) */}
      <div
        ref={ref}
        className={`absolute flex items-center justify-center ${reveal}`}
            style={{
              left: s.cardWrapperLeft,
              top: s.cardTop,
              width: s.cardWrapperW,
              height: s.cardWrapperH,
            }}
          >
            <div className="flex-none" style={{ transform: `rotate(${s.rotate}deg)` }}>
              <div
                className="bg-white relative overflow-hidden"
                style={{
                  width: 560,
                  height: s.cardH,
                  borderRadius: 2,
                  boxShadow: '0px 14px 32px 0px rgba(13,38,33,0.1)',
                }}
              >
                {/* Photo (or teal placeholder for Step 3) — overflow-hidden frame to keep image inside the 10px white border */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    left: 10, top: 10, width: 220, height: s.photoH,
                    background: s.photo ? undefined : '#1aadb4',
                  }}
                >
                  {s.photo ? (
                    <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={`${A}/${s.photo}`} />
                  ) : (
                    <p
                      className="absolute text-white"
                      style={{
                        left: 20, top: 170, width: 200, fontSize: 12, lineHeight: 1.5, letterSpacing: '0.2px', opacity: 0.55,
                      }}
                    >
                      [ Đa ảnh — người lặn / đường rừng / bàn ăn trưa tươi ]
                    </p>
                  )}
                </div>

                {/* Step label */}
                <p
                  className="absolute font-display font-semibold whitespace-nowrap"
                  style={{
                    left: 250, top: 20, color: s.stepLabelColor, fontSize: 12, lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase',
                  }}
                >
                  {s.stepLabel}
                </p>

                {/* Body */}
                <div
                  className="absolute font-display text-[#1a2e2d]"
                  style={{ left: 250, top: 48, width: 300, fontSize: 13, opacity: 0.85 }}
                >
                  {s.body}
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
