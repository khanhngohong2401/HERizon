import { Heart, ExternalLink, MessageCircle } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { FACEBOOK_PAGE_URL } from '../data/mockData';
import { PawScatterBackground } from './PawPattern';

export function Contact() {
  return (
    <section
      className="relative bg-[#7A3B9E] text-white py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="contact"
    >
      <PawScatterBackground />

      <div className="max-w-[1150px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Facebook Fanpage Invitation */}
          <div className="lg:col-span-12 max-w-[640px] mx-auto w-full space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#1E2B3C] border-[3px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C] mb-4">
                <Sparkle color="pink" size={14} />
                <span className="font-sub font-black text-xs uppercase tracking-wider text-[#E54BA0]">
                  Cùng chung tay
                </span>
              </div>

              <h2 className="font-poster text-3xl sm:text-5xl font-black text-white drop-shadow-[3px_3px_0px_#1E2B3C] mb-4">
                LIÊN HỆ EM ẤM <SparkleCluster />
              </h2>
              <p className="font-body text-base font-medium text-[#FBE8C2] leading-relaxed">
                Bạn có vải cũ muốn quyên góp, hoặc muốn đồng hành cùng chúng mình trao gửi nệm ấm cho các trạm cứu hộ?
              </p>
            </div>

            {/* Official Facebook Fanpage Box */}
            <div className="bg-white text-[#1E2B3C] p-6 rounded-3xl border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E54BA0] text-white flex items-center justify-center border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                  <MessageCircle className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-poster text-lg text-[#1E2B3C]">FANPAGE FACEBOOK</div>
                  <div className="font-body text-xs font-bold text-[#7A3B9E]">Em Ấm - Đệm Êm Trao Em</div>
                </div>
              </div>
              <p className="font-body text-xs font-medium text-[#1E2B3C]/80 mb-4">
                Nhắn tin trực tiếp qua trang Facebook để được hướng dẫn gửi vải hoặc giải đáp thắc mắc nhanh nhất nhé!
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flat-btn flat-btn-pink w-full py-3 text-xs uppercase tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ghé Thăm Fanpage Facebook</span>
              </a>
            </div>

            {/* Fabric donation guide note */}
            <div className="bg-[#FBE8C2] text-[#1E2B3C] p-6 rounded-3xl border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C]">
              <div className="flex items-center gap-2 mb-2 font-poster text-base text-[#1E2B3C]">
                <Heart className="w-4 h-4 text-[#E54BA0] fill-current" />
                <span>QUY CÁCH VẢI QUYÊN GÓP:</span>
              </div>
              <p className="font-body text-xs font-medium text-[#1E2B3C]/85 leading-relaxed">
                Vải và quần áo cũ xin vui lòng <strong>giặt sạch, phơi khô ráo</strong> trước khi đóng gói gửi về cho dự án. Chúng mình nhận vải thun cotton, quần jeans cũ và áo khoác vải dù.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
