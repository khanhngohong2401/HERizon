import { useState, useEffect } from 'react';
import { GUIDES } from '../data/mockData';
import { GuideItem } from '../types';
import { Play, AlertTriangle, X } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { MaterialBadge } from './FlatIllustrations';
import { PawScatterBackground } from './PawPattern';

export function Guide() {
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedGuide(null);
      }
    };
    if (selectedGuide) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGuide]);

  return (
    <section
      className="relative bg-white text-[#1E2B3C] py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="guide"
    >
      <PawScatterBackground />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          {/* Bigger Title Pill: Hướng dẫn tự may */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FBE8C2] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] mb-5">
            <Sparkle color="orange" size={18} />
            <span className="font-sub font-black text-sm sm:text-base uppercase tracking-wider text-[#1E2B3C]">
              Hướng dẫn tự may
            </span>
            <Sparkle color="purple" size={18} />
          </div>

          <h2 className="font-poster text-3xl sm:text-5xl font-black text-[#1E2B3C] mb-4 leading-normal">
            CÁCH LÀM NỆM ÊM <SparkleCluster />
          </h2>
          <p className="font-body text-base sm:text-lg font-medium text-[#1E2B3C]/85 leading-relaxed">
            Chọn loại vải bạn có sẵn và xem video hướng dẫn chi tiết phù hợp nhé!
          </p>
        </div>

        {/* 3 Material Cards with var(--teal) card thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-[#FBE8C2] rounded-3xl p-7 border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C] flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* var(--teal) card thumbnail */}
                <div className="h-28 bg-[#3FC7C2] border-[3px] border-[#1E2B3C] rounded-2xl flex items-center justify-center mb-6 shadow-[3px_3px_0px_#1E2B3C]">
                  <MaterialBadge type={guide.id} size={70} />
                </div>

                <h3 className="font-poster text-2xl text-[#1E2B3C] mb-1 leading-snug">
                  {guide.id === 'cotton' ? 'COTTON' : guide.id === 'jeans' ? 'JEANS' : 'ÁO KHOÁC VẢI DÙ'}
                </h3>
                <div className="font-body text-xs sm:text-sm font-bold italic text-[#7A3B9E] mb-3">
                  {guide.subtitle}
                </div>

                <p className="font-body text-sm font-medium text-[#1E2B3C]/90 leading-relaxed mb-5">
                  {guide.description}
                </p>

                {/* Warning Box */}
                <div className="bg-white rounded-2xl p-4 border-[2.5px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C] text-xs font-medium text-[#1E2B3C] mb-6 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-[#F2984A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold text-[#E54BA0]">⚠️ Lưu ý: </strong>
                    <span>{guide.warning}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedGuide(guide)}
                className="flat-btn flat-btn-purple w-full py-3.5 text-sm uppercase tracking-wider"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Xem Video Hướng Dẫn {guide.isShorts && '(Shorts)'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal with 2D Comic Style */}
      {selectedGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E2B3C]/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedGuide(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`bg-[#FBE8C2] text-[#1E2B3C] border-[4px] border-[#1E2B3C] rounded-3xl p-6 sm:p-8 w-full max-h-[92vh] overflow-y-auto relative shadow-[10px_10px_0px_#1E2B3C] ${
              selectedGuide.isShorts ? 'max-w-[420px]' : 'max-w-[760px]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white border-2 border-[#1E2B3C] font-sub font-black text-xs text-[#7A3B9E] mb-1 shadow-[2px_2px_0px_#1E2B3C]">
                  Video Hướng Dẫn
                </span>
                <h3 id="modal-title" className="font-poster text-2xl sm:text-3xl text-[#1E2B3C] leading-snug">
                  {selectedGuide.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGuide(null)}
                className="w-10 h-10 rounded-full bg-white border-2 border-[#1E2B3C] text-[#1E2B3C] flex items-center justify-center hover:bg-[#F2984A] hover:text-white shadow-[2px_2px_0px_#1E2B3C] transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            {/* Video Frame */}
            <div
              className={`rounded-2xl overflow-hidden border-[3.5px] border-[#1E2B3C] bg-black mb-5 shadow-[4px_4px_0px_#1E2B3C] ${
                selectedGuide.isShorts ? 'aspect-[9/16] max-h-[60vh] mx-auto' : 'aspect-video'
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedGuide.youtubeId}?autoplay=1&rel=0`}
                title={selectedGuide.name}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Tips & Safety */}
            <div className="bg-white rounded-2xl p-5 border-[2.5px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C]">
              <h4 className="font-poster text-base text-[#1E2B3C] mb-2">
                MẸO HAY KHI TỰ MAY:
              </h4>
              <ul className="font-body text-xs sm:text-sm font-medium text-[#1E2B3C]/90 space-y-1.5 list-disc list-inside">
                {selectedGuide.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Solid Bottom Stripe before Rescue Stations (cream) */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#7A3B9E] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
