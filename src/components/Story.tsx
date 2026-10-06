import { Sparkle, SparkleCluster } from './Sparkle';
import { PawScatterBackground } from './PawPattern';
import {
  DogOnBedIllustration,
  HandsSewingIllustration,
  DonationBoxIllustration,
} from './FlatIllustrations';
import { Recycle } from 'lucide-react';

export function Story() {
  return (
    <section
      className="relative bg-[#FBE8C2] text-[#1E2B3C] py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="story"
    >
      {/* Scattered Paw Prints */}
      <PawScatterBackground />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          {/* Bigger Title Pill: Khởi nguồn dự án */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] mb-5">
            <Sparkle color="purple" size={18} />
            <span className="font-sub font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#7A3B9E]">
              Khởi nguồn dự án
            </span>
            <Sparkle color="pink" size={18} />
          </div>

          <h2 className="font-poster text-3xl sm:text-5xl font-black text-[#1E2B3C] mb-4 leading-normal">
            CÂU CHUYỆN EM ẤM <SparkleCluster />
          </h2>
          <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C]/85 leading-relaxed">
            Từ những trăn trở bình dị thường ngày, đến một hành trình kết nối vải thừa và tình thương cho động vật.
          </p>
        </div>

        {/* Narrative Flow - 3 Cards */}
        <div className="space-y-8 mb-20">
          {/* Milestone 1 */}
          <div className="flat-box p-8 sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Flat Vector Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-[#3FC7C2] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex items-center justify-center p-2">
                <DogOnBedIllustration size={92} />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="font-poster text-2xl sm:text-3xl text-[#E54BA0]">
                    1.
                  </span>
                  <span className="font-sub font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FBE8C2] border-2 border-[#1E2B3C] text-[#1E2B3C]">
                    Khởi đầu
                  </span>
                </div>

                <h3 className="font-poster text-2xl sm:text-3xl text-[#1E2B3C] mb-3 leading-snug">
                  TỪ NHỮNG ĐIỀU GẦN GŨI NHẤT
                </h3>

                <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C]/90 leading-relaxed mb-6">
                  Mỗi ngày, quần áo cũ và vải vụn từ gia đình hoặc xưởng may thường bị bỏ đi, trong khi nhiều chú chó, chú mèo tại các trạm cứu hộ vẫn cần những chiếc nệm cơ bản để nghỉ ngơi ấm áp.
                </p>

                {/* Cloud Callout Shape */}
                <div className="cloud-callout max-w-[620px] mx-auto sm:mx-0 my-3">
                  <p className="font-body text-base sm:text-lg font-extrabold italic text-[#7A3B9E] text-center sm:text-left leading-relaxed">
                    “Liệu những thứ được xem là rác thải có thể trở thành điều hữu ích cho những sinh mệnh khác?”
                  </p>
                </div>

                <p className="font-body text-sm font-bold text-[#1E2B3C]/75 mt-3">
                  Câu hỏi ấy đã trở thành nguồn cảm hứng để <strong className="text-[#1E2B3C] font-black">Em Ấm</strong> ra đời.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="flat-box p-8 sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Flat Vector Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-[#F2984A] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex items-center justify-center p-2">
                <HandsSewingIllustration size={92} />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="font-poster text-2xl sm:text-3xl text-[#7A3B9E]">
                    2.
                  </span>
                  <span className="font-sub font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FBE8C2] border-2 border-[#1E2B3C] text-[#1E2B3C]">
                    Vấn đề
                  </span>
                </div>

                <h3 className="font-poster text-2xl sm:text-3xl text-[#1E2B3C] mb-3 leading-snug">
                  MỘT BÊN DƯ THỪA, MỘT BÊN CÒN THIẾU
                </h3>

                <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C]/90 leading-relaxed mb-4">
                  Quần áo cũ và vải vụn vẫn có khả năng tái sử dụng nhưng thường bị bỏ đi. Trong khi đó, nhiều trạm cứu hộ phải chăm sóc động vật với nguồn lực và kinh phí vô cùng hạn chế.
                </p>

                <p className="font-body text-base sm:text-lg font-bold text-[#7A3B9E] leading-relaxed">
                  Em Ấm kết nối hai vấn đề này bằng cách biến vật liệu không còn được sử dụng thành những sản phẩm nệm nằm thiết thực cho các bạn nhỏ bốn chân.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="flat-box p-8 sm:p-10 transition-transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Flat Vector Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-[#E54BA0] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex items-center justify-center p-2">
                <DonationBoxIllustration size={92} />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="font-poster text-2xl sm:text-3xl text-[#F2984A]">
                    3.
                  </span>
                  <span className="font-sub font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FBE8C2] border-2 border-[#1E2B3C] text-[#1E2B3C]">
                    Ý tưởng
                  </span>
                </div>

                <h3 className="font-poster text-2xl sm:text-3xl text-[#1E2B3C] mb-3 leading-snug">
                  TRAO CHO VẢI CŨ MỘT VÒNG ĐỜI MỚI
                </h3>

                <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C]/90 leading-relaxed mb-5">
                  Thay vì xem vải cũ là rác thải, Em Ấm muốn nhìn thấy giá trị tiềm ẩn bên trong chúng và trao tặng hơi ấm cho động vật.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 font-sub font-extrabold text-xs sm:text-sm">
                  <span className="px-4 py-2 rounded-full bg-[#3FC7C2] text-white border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                    Tái sử dụng
                  </span>
                  <span className="text-[#1E2B3C] text-lg font-black">→</span>
                  <span className="px-4 py-2 rounded-full bg-[#7A3B9E] text-white border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                    Sáng tạo
                  </span>
                  <span className="text-[#1E2B3C] text-lg font-black">→</span>
                  <span className="px-4 py-2 rounded-full bg-[#F2984A] text-white border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                    Trao tặng
                  </span>
                  <span className="text-[#1E2B3C] text-lg font-black">→</span>
                  <span className="px-4 py-2 rounded-full bg-[#E54BA0] text-white border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                    Lan tỏa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IPO Journey Block */}
        <div className="flat-box-teal p-8 sm:p-12 relative">
          <div className="text-center max-w-[620px] mx-auto mb-10">
            {/* Bigger Title Pill: Hành trình IPO */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#1E2B3C] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] font-sub font-black text-sm sm:text-base uppercase tracking-wider mb-4">
              <Recycle className="w-4 h-4 text-[#7A3B9E] stroke-[2.5]" />
              <span>Hành Trình IPO</span>
            </div>

            <h3 className="font-poster text-2xl sm:text-4xl text-[#1E2B3C] leading-normal">
              CÁCH EM ẤM TẠO RA GIÁ TRỊ
            </h3>
            <p className="font-body text-sm sm:text-base font-bold text-[#1E2B3C]/85 mt-1 leading-relaxed">
              Mô hình khép kín đưa vải cũ đến những chiếc nệm trao tặng trạm cứu trợ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Input */}
            <div className="bg-white rounded-2xl p-6 border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex flex-col justify-between">
              <div>
                <div className="font-sub font-black text-xs uppercase tracking-widest text-[#7A3B9E] mb-2">
                  01 · ĐẦU VÀO
                </div>
                <h4 className="font-poster text-xl text-[#1E2B3C] mb-3 leading-snug">
                  VẬT LIỆU & THỜI GIAN
                </h4>
                <p className="font-body text-sm font-medium text-[#1E2B3C]/85 leading-relaxed">
                  Quần áo quyên góp + Vải vụn sạch từ các gia đình và tiệm may + Tấm lòng nhiệt thành của các bạn trẻ.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-dashed border-[#1E2B3C]/20 text-xs font-bold text-[#7A3B9E]">
                Tiếp nhận quyên góp liên tục
              </div>
            </div>

            {/* Step 2: Process */}
            <div className="bg-white rounded-2xl p-6 border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex flex-col justify-between">
              <div>
                <div className="font-sub font-black text-xs uppercase tracking-widest text-[#F2984A] mb-2">
                  02 · QUY TRÌNH
                </div>
                <h4 className="font-poster text-xl text-[#1E2B3C] mb-3 leading-snug">
                  CHẾ TÁC NỆM ÊM
                </h4>
                <p className="font-body text-sm font-medium text-[#1E2B3C]/85 leading-relaxed">
                  Thu gom → Phân loại chất liệu → Làm sạch & khử khuẩn → Thiết kế kích thước rập → Cắt tỉa → May ghép hoàn thiện.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-dashed border-[#1E2B3C]/20 text-xs font-bold text-[#F2984A]">
                Tỉ mỉ từng đường kim mũi chỉ
              </div>
            </div>

            {/* Step 3: Output */}
            <div className="bg-white rounded-2xl p-6 border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] flex flex-col justify-between">
              <div>
                <div className="font-sub font-black text-xs uppercase tracking-widest text-[#E54BA0] mb-2">
                  03 · ĐẦU RA & TÁC ĐỘNG
                </div>
                <h4 className="font-poster text-xl text-[#1E2B3C] mb-3 leading-snug">
                  GIẢM RÁC & TRAO ẤM
                </h4>
                <p className="font-body text-sm font-medium text-[#1E2B3C]/85 leading-relaxed">
                  Giảm lượng lớn rác thải dệt may, hỗ trợ nệm nằm êm ái cho chó mèo được cứu hộ, và lan tỏa nhận thức cộng đồng.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-dashed border-[#1E2B3C]/20 text-xs font-bold text-[#E54BA0]">
                Trao trực tiếp đến các trạm cứu trợ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Bottom Stripe before next section (Guide: white) */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#3FC7C2] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
