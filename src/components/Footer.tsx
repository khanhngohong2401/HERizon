import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { EmAmLogo } from './EmAmLogo';
import { FACEBOOK_PAGE_URL } from '../data/mockData';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { getStoredImage, saveStoredImage } from '../utils/imageStore';

export function Footer() {
  const [footerImg, setFooterImg] = useState<string>(() =>
    getStoredImage('em_am_footer_logo', '/HERizon - FACEBOOK.png')
  );
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = getStoredImage('em_am_footer_logo');
    if (stored) {
      setFooterImg(stored);
      setImgError(false);
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setFooterImg(result);
          setImgError(false);
          saveStoredImage('em_am_footer_logo', 'HERizon - FACEBOOK.png', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#1E2B3C] text-[#FBE8C2] border-t-[4px] border-[#1E2B3C] relative overflow-hidden"
      aria-label="Footer"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Accent Top Decorative Stripe */}
      <div className="h-2 w-full bg-gradient-to-r from-[#F2984A] via-[#E54BA0] to-[#3FC7C2]" />

      <div className="max-w-[1240px] mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b-2 border-[#FBE8C2]/15">
          {/* Left: Fixed "HERizon - FACEBOOK.png" Image & Project Description */}
          <div className="md:col-span-7 flex flex-col items-start gap-3">
            {/* Permanent Fixed Image Frame */}
            <div
              onClick={() => {
                if (imgError) fileInputRef.current?.click();
              }}
              className="p-2 sm:p-2.5 bg-white rounded-2xl border-2 border-[#FBE8C2] shadow-[4px_4px_0px_#F2984A] overflow-hidden max-w-full cursor-pointer"
              title={imgError ? 'Bấm để chọn file HERizon - FACEBOOK.png' : 'HERizon Facebook'}
            >
              {!imgError && footerImg ? (
                <img
                  src={footerImg}
                  alt="HERizon Facebook Em Ấm"
                  className="max-h-24 sm:max-h-32 w-auto max-w-full object-contain rounded-xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center">
                  <EmAmLogo size="md" showSubtitle={true} />
                  <span className="font-sub font-bold text-[10px] text-[#7A3B9E] mt-1 bg-[#FBE8C2] px-2 py-0.5 rounded-full border border-[#1E2B3C]">
                    Bấm để chọn file HERizon - FACEBOOK.png
                  </span>
                </div>
              )}
            </div>

            <p className="font-body text-xs sm:text-sm font-medium text-[#FBE8C2]/85 max-w-[460px] mt-2 leading-relaxed">
              Dự án cộng đồng phi lợi nhuận hướng tới việc tái chế vải thừa thành những chiếc nệm ấm êm ái cho chó mèo được cứu hộ tại TP.HCM.
            </p>
          </div>

          {/* Right: Quick Navigation & Social */}
          <div className="md:col-span-5 flex flex-col md:items-end gap-4">
            <div className="flex flex-wrap gap-2 font-sub font-bold text-xs uppercase">
              <a href="#story" className="px-3 py-1.5 rounded-full bg-[#FBE8C2]/10 hover:bg-[#FBE8C2] hover:text-[#1E2B3C] transition-all">
                Câu chuyện
              </a>
              <a href="#guide" className="px-3 py-1.5 rounded-full bg-[#FBE8C2]/10 hover:bg-[#FBE8C2] hover:text-[#1E2B3C] transition-all">
                Cách làm nệm
              </a>
              <a href="#stations" className="px-3 py-1.5 rounded-full bg-[#FBE8C2]/10 hover:bg-[#FBE8C2] hover:text-[#1E2B3C] transition-all">
                Trạm cứu hộ
              </a>
              <a href="#team" className="px-3 py-1.5 rounded-full bg-[#FBE8C2]/10 hover:bg-[#FBE8C2] hover:text-[#1E2B3C] transition-all">
                Thành viên
              </a>
              <a href="#contact" className="px-3 py-1.5 rounded-full bg-[#FBE8C2]/10 hover:bg-[#FBE8C2] hover:text-[#1E2B3C] transition-all">
                Liên hệ
              </a>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flat-btn flat-btn-pink px-4 py-2 text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Facebook Em Ấm</span>
              </a>

              <button
                onClick={scrollToTop}
                className="flat-btn flat-btn-white w-9 h-9 p-0 rounded-full"
                title="Về đầu trang"
                aria-label="Về đầu trang"
              >
                <ArrowUp className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & 5 Student Authors */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#FBE8C2]/70 font-body text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-black">Em Ấm</strong>. Tất cả vì những người bạn bốn chân.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="font-bold text-[#F2984A]">Dự án thực hiện bởi:</span>
            <span>2452498 Khánh</span>
            <span>·</span>
            <span>2453021 Phương</span>
            <span>·</span>
            <span>2452673 Linh</span>
            <span>·</span>
            <span>2453270 Trang</span>
            <span>·</span>
            <span>2453241 Tiên</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
