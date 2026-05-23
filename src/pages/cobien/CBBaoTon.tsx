import TornTag from '@/components/TornTag';
import PhotoFrame from '@/components/PhotoFrame';

/**
 * S8 Câu chuyện bảo tồn Cù Lao Chàm — 1440×1430 at y=6843.
 * Label (120, 83) — "BẢO TỒN · CÙ LAO CHÀM"
 * Title (120, 128) 548×112 — "Bảo tồn không phải là công việc của riêng ai."
 * Lead text (120, 292) 588×373.
 * 2 portrait cards: HOST at (816, 300) 364×477 and (256, 834) 364×488.
 * Long text right bottom (731, 838) 588×463.
 * Group 2 small accent (1280, 80) 84×84.
 */
export default function CBBaoTon() {
  return (
    <section className="relative w-[1440px] h-[1430px] bg-sand-light overflow-hidden">
      {/* Top-right accent */}
      <div className="absolute" style={{ left: 1280, top: 80, width: 84, height: 84 }}>
        <svg viewBox="0 0 84 84" width="84" height="84">
          <circle cx="42" cy="42" r="38" fill="none" stroke="#3D8B3D" strokeWidth="3" opacity="0.5" strokeDasharray="6 8" />
          <path d="M 42 18 Q 56 32 50 44 Q 46 60 42 70 Q 38 60 34 44 Q 28 32 42 18 Z" fill="#3D8B3D" stroke="#fff" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Label */}
      <div className="absolute" style={{ left: 120, top: 83 }}>
        <TornTag bg="bg-green-mid">BẢO TỒN · CÙ LAO CHÀM</TornTag>
      </div>

      {/* Title */}
      <h2
        className="absolute font-display font-bold text-ink-main"
        style={{ left: 120, top: 128, width: 720, fontSize: 52, lineHeight: '108%', letterSpacing: '-0.8px' }}
      >
        Bảo tồn không phải là<br />
        công việc của riêng ai.
      </h2>

      {/* Lead text (120, 292) 588×373 */}
      <p
        className="absolute font-body text-ink-muted"
        style={{ left: 120, top: 292, width: 588, fontSize: 16, lineHeight: '172%', opacity: 0.88 }}
      >
        Khi dành thời gian ở lại Cù Lao Chàm, bạn sẽ dần nhận ra rằng mặt biển vẫn trong xanh và nhịp sống vẫn bình yên. Điều đó không phải điều tự nhiên mà có.
        <br /><br />
        Trong nhiều năm, đảo cũng từng đứng trước áp lực lớn từ du lịch, từ tàu thuyền, từ khai thác quá mức. Người dân ở đây nhận ra điều đó từ khá sớm — không phải từ số liệu, mà từ quan sát hằng ngày của chính mình. Họ thấy mùa cá thay đổi. Thấy nước có lúc đục hơn.
        <br /><br />
        Và chính từ những thay đổi nhỏ ấy, lối sống bảo tồn bắt đầu hình thành.
      </p>

      {/* === Action Card 1 — Nói không với túi nilon (816, 300) 364×477 === */}
      <div
        className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
        style={{ left: 816, top: 300, width: 364, height: 477, transform: 'rotate(0.5deg)' }}
      >
        {/* Color band top */}
        <div className="absolute top-0 left-0 w-full h-2 bg-ocean-primary" />

        {/* Photo */}
        <div className="p-2 mt-2 bg-white" style={{ marginTop: 12 }}>
          <div className="w-full h-[200px] bg-ocean-deep flex items-center justify-center">
            <span className="text-body-caption text-ink-white opacity-55">[ 🛍 Không túi nilon - 2009 ]</span>
          </div>
        </div>

        {/* Year tag */}
        <div className="px-6 mt-4">
          <TornTag bg="bg-ocean-primary">2009</TornTag>
        </div>

        {/* Content */}
        <div className="px-6 mt-3">
          <h3 className="font-display font-bold text-ink-main" style={{ fontSize: 22 }}>Nói không với túi nilon</h3>
          <p className="font-body text-ink-muted mt-3" style={{ fontSize: 14, lineHeight: '168%', opacity: 0.82 }}>
            Cùng năm UNESCO công nhận, người dân đảo tự nguyện bỏ túi nilon. Hơn 95% đồng thuận. Nay đã thành "thương hiệu" của đảo.
          </p>
        </div>
      </div>

      {/* === Action Card 2 — Phân vùng & kiểm soát tàu (256, 834) 364×488 === */}
      <div
        className="absolute bg-ink-white rounded-[2px] shadow-card overflow-hidden"
        style={{ left: 256, top: 834, width: 364, height: 488, transform: 'rotate(-1.2deg)' }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-coral" />
        <div className="p-2 bg-white" style={{ marginTop: 12 }}>
          <div className="w-full h-[200px] bg-coral flex items-center justify-center">
            <span className="text-body-caption text-ink-white opacity-55">[ ⚓ Bãi Bắc phục hồi ]</span>
          </div>
        </div>
        <div className="px-6 mt-4">
          <TornTag bg="bg-coral">BÃI BẮC</TornTag>
        </div>
        <div className="px-6 mt-3">
          <h3 className="font-display font-bold text-ink-main" style={{ fontSize: 22 }}>Phân vùng &amp; kiểm soát tàu</h3>
          <p className="font-body text-ink-muted mt-3" style={{ fontSize: 14, lineHeight: '168%', opacity: 0.82 }}>
            Khu vực cỏ biển và san hô nhạy cảm được khoanh vùng, hạn chế tàu cập. Bãi Bắc — khu thí điểm phục hồi cỏ biển, không phát triển du lịch.
          </p>
        </div>
      </div>

      {/* Long narrative right bottom (731, 838) 588×463 */}
      <div className="absolute" style={{ left: 731, top: 838, width: 588 }}>
        <p className="font-body text-ink-main" style={{ fontSize: 16, lineHeight: '175%', opacity: 0.85 }}>
          Ở nhiều nơi, bảo tồn thường được hình dung như công việc của các nhà khoa học hay những chương trình lớn. Nhưng ở Cù Lao Chàm, nó trước hết đến từ những người sống cùng biển.
          <br /><br />
          Khu Bảo Tồn Thiên Nhiên Cù Lao Chàm phối hợp cùng các cơ sở nghiên cứu thực hiện hoạt động nhân giống và trồng phục hồi cỏ biển tại Bãi Bắc. Đó không chỉ là một chương trình kỹ thuật — đó là cam kết của một cộng đồng đã chọn giữ lại điều gì đó cho thế hệ sau.
        </p>
        <div className="mt-9 inline-block">
          <TornTag bg="bg-green-mid">ANH VŨ · BQL KBTTN CÙ LAO CHÀM</TornTag>
        </div>
        <p className="font-quote text-ocean-deep mt-5" style={{ fontSize: 20, lineHeight: '155%' }}>
          "Từ khi có bảo tồn là nhận thức cũng như thu nhập của người dân cao lên. Dân với bảo tồn rất là khăng khít với nhau."
        </p>
      </div>
    </section>
  );
}
