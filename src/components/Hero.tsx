import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { ArrowRight, MapPin, Scissors, Heart, Camera } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { DogAndCatOnBedIllustration } from './FlatIllustrations';
import { PawScatterBackground } from './PawPattern';
import { getStoredImage, saveStoredImage } from '../utils/imageStore';

export function Hero() {
  const [bedPhoto, setBedPhoto] = useState<string>(() =>
    getStoredImage('em_am_bed_card_photo', '/may.jpg')
  );
  const [loadError, setLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if bedPhoto changed or if stored
    const stored = getStoredImage('em_am_bed_card_photo');
    if (stored) {
      setBedPhoto(stored);
      setLoadError(false);
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setBedPhoto(result);
          setLoadError(false);
          saveStoredImage('em_am_bed_card_photo', 'may.jpg', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      className="relative bg-[#3FC7C2] text-[#1E2B3C] pt-12 sm:pt-16 pb-20 sm:pb-24 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="top"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Low-opacity scattered paw-print pattern */}
      <PawScatterBackground />

      <div className="max-w-[1150px] mx-auto px-6 relative z-10">
        {/* Top Header Pill - Larger Size */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C]">
            <Sparkle color="purple" size={18} />
            <span className="font-sub font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#7A3B9E]">
              Dự án cộng đồng vì thú cưng
            </span>
            <span className="text-[#1E2B3C]/40">·</span>
            <span className="font-body text-sm sm:text-base font-black text-[#1E2B3C]">
              Em Ấm
            </span>
            <Sparkle color="orange" size={18} />
          </div>
        </div>

        {/* Hero Central Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-poster text-3xl sm:text-5xl lg:text-[54px] leading-[1.2] text-[#1E2B3C] mb-6">
              BIẾN VẢI VỤN THÀNH <br />
              {/* Enlarged Purple Box completely embracing "NỆM ẤM" */}
              <span className="relative inline-flex items-center justify-center text-white drop-shadow-[2px_2px_0px_#1E2B3C] px-7 py-2 sm:px-9 sm:py-3.5 bg-[#7A3B9E] rounded-2xl sm:rounded-3xl border-[4px] border-[#1E2B3C] shadow-[5px_5px_0px_#1E2B3C] my-2 -rotate-1 align-middle">
                NỆM ẤM
              </span>{' '}
              <SparkleCluster className="hidden sm:inline-flex ml-2" />
              <br />
              CHO BẠN NHỎ
            </h1>

            {/* Subhead with balanced line-height and Be Vietnam Pro font */}
            <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C] max-w-[600px] leading-relaxed mb-8">
              Mỗi mảnh vải cũ bạn góp lại có thể trở thành một chiếc nệm êm ái, giúp một chú chó, chú mèo vô gia cư có một giấc ngủ ấm lành.{' '}
              <strong className="font-extrabold text-[#7A3B9E]">Cùng tái chế</strong>,{' '}
              <span className="italic font-bold text-[#E54BA0]">cùng sẻ chia yêu thương</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#guide"
                className="flat-btn flat-btn-purple px-7 py-3.5 text-base sm:text-lg"
              >
                <Scissors className="w-5 h-5 stroke-[2.5]" />
                <span>Bắt Đầu Tự May Nệm</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#stations"
                className="flat-btn flat-btn-white px-6 py-3.5 text-base sm:text-lg"
              >
                <MapPin className="w-5 h-5 text-[#E54BA0] stroke-[2.5]" />
                <span>Tìm Trạm Gửi Nệm</span>
              </a>
            </div>
          </div>

          {/* Right Card: Fixed "may.jpg" image for "Gom chút cũ, may thành chút thương" */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-7 bg-white border-[3.5px] border-[#1E2B3C] rounded-3xl shadow-[7px_7px_0px_#1E2B3C] text-center max-w-[380px] w-full transform hover:-rotate-1 transition-transform group">
              {/* Cute top corner badge */}
              <div className="absolute -top-3.5 -right-2 bg-[#F2984A] text-white font-sub font-bold text-xs px-3.5 py-1 rounded-full border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#1E2B3C]">
                100% Phi lợi nhuận
              </div>

              {/* Permanent Bed Photo Frame using "may.jpg" */}
              <div
                onClick={() => {
                  if (loadError) fileInputRef.current?.click();
                }}
                className="relative rounded-2xl bg-[#FBE8C2]/40 border-[2.5px] border-[#1E2B3C] overflow-hidden min-h-[200px] flex items-center justify-center shadow-inner cursor-pointer"
                title={loadError ? 'Bấm để nạp ảnh may.jpg' : 'Ảnh nệm may'}
              >
                {!loadError && bedPhoto ? (
                  <img
                    src={bedPhoto}
                    alt="Gom chút cũ, may thành chút thương"
                    className="w-full h-[220px] object-cover"
                    onError={() => setLoadError(true)}
                  />
                ) : (
                  <div className="pt-2 pb-1 flex flex-col items-center justify-center">
                    <DogAndCatOnBedIllustration size={190} />
                    <span className="font-sub font-bold text-[11px] text-[#7A3B9E] mt-1 bg-white px-2.5 py-0.5 rounded-full border border-[#1E2B3C]">
                      Bấm để chọn file may.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Label */}
              <div className="mt-3.5 pt-3 border-t-2 border-dashed border-[#1E2B3C]/20 flex items-center justify-center gap-1.5 text-xs font-bold text-[#7A3B9E]">
                <Heart className="w-3.5 h-3.5 text-[#E54BA0] fill-current" />
                <span>Gom chút cũ, may thành chút thương</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Bottom Stripe before next section (Story) */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#7A3B9E] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
