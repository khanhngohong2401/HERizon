import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Mail, Heart, Sparkles, ExternalLink, MessageCircle } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { DonationBoxIllustration } from './FlatIllustrations';
import { FACEBOOK_PAGE_URL } from '../data/mockData';
import { PawScatterBackground } from './PawPattern';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'donate_fabric',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'donate_fabric',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    }, 700);
  };

  return (
    <section
      className="relative bg-[#7A3B9E] text-white py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="contact"
    >
      <PawScatterBackground />

      <div className="max-w-[1150px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Facebook Fanpage Invitation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white text-[#1E2B3C] p-8 sm:p-10 rounded-3xl border-[4px] border-[#1E2B3C] shadow-[8px_8px_0px_#1E2B3C]">
            <h3 className="font-poster text-2xl sm:text-3xl text-[#1E2B3C] mb-2">
              GỬI LỜI NHẮN CHO EM ẤM
            </h3>
            <p className="font-body text-xs sm:text-sm font-medium text-[#1E2B3C]/80 mb-6">
              Điền thông tin bên dưới, tụi mình sẽ phản hồi bạn trong thời gian sớm nhất!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-sub font-bold text-xs uppercase text-[#1E2B3C] mb-1.5">
                    Họ và tên *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] placeholder-[#1E2B3C]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7A3B9E]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sub font-bold text-xs uppercase text-[#1E2B3C] mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] placeholder-[#1E2B3C]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7A3B9E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block font-sub font-bold text-xs uppercase text-[#1E2B3C] mb-1.5">
                    Số điện thoại / Zalo
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="09xx xxx xxx"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] placeholder-[#1E2B3C]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7A3B9E]"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block font-sub font-bold text-xs uppercase text-[#1E2B3C] mb-1.5">
                    Mục đích liên hệ
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] focus:outline-none focus:bg-white cursor-pointer"
                  >
                    <option value="donate_fabric">Quyên góp vải vụn / quần áo cũ</option>
                    <option value="volunteer">Đăng ký may nệm tình nguyện</option>
                    <option value="station_request">Trạm cứu hộ đăng ký nhận nệm</option>
                    <option value="collaboration">Hợp tác & Đồng hành khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-sub font-bold text-xs uppercase text-[#1E2B3C] mb-1.5">
                  Nội dung lời nhắn *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Chia sẻ số lượng vải, địa chỉ gửi hoặc câu hỏi của bạn nhé..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] placeholder-[#1E2B3C]/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7A3B9E] resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-[#3FC7C2]/20 border-2 border-[#3FC7C2] text-[#1E2B3C] font-bold text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 text-[#3FC7C2] shrink-0 stroke-[3]" />
                  <span>
                    Cảm ơn bạn thật nhiều! Lời nhắn đã được gửi tới đội ngũ Em Ấm. Tụi mình sẽ liên hệ lại sớm nhất nhé.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flat-btn flat-btn-purple px-8 py-3.5 text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                {status === 'submitting' ? (
                  <span>Đang gửi...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi Lời Nhắn</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
