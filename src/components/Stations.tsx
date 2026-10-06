import { useState, useMemo } from 'react';
import { RESCUE_STATIONS } from '../data/mockData';
import { Search, MapPin, Phone, ExternalLink, Filter, RotateCcw, CreditCard, Mail } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { PawScatterBackground } from './PawPattern';

export function Stations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  // Collect unique district categories
  const districts = useMemo(() => {
    const list = Array.from(new Set(RESCUE_STATIONS.map((s) => s.district)));
    return ['all', ...list];
  }, []);

  // Filtered station list
  const filteredStations = useMemo(() => {
    return RESCUE_STATIONS.filter((station) => {
      const matchDistrict = selectedDistrict === 'all' || station.district.includes(selectedDistrict);
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        station.name.toLowerCase().includes(q) ||
        station.address.toLowerCase().includes(q) ||
        station.district.toLowerCase().includes(q) ||
        (station.contact && station.contact.toLowerCase().includes(q));
      return matchDistrict && matchQuery;
    });
  }, [searchQuery, selectedDistrict]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('all');
  };

  return (
    <section
      className="relative bg-[#FBE8C2] text-[#1E2B3C] border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="stations"
    >
      {/* var(--purple) header strip */}
      <div className="bg-[#7A3B9E] text-white py-14 px-6 border-b-[4px] border-[#1E2B3C] text-center relative">
        <PawScatterBackground />
        <div className="max-w-[700px] mx-auto relative z-10">
          {/* Bigger Title Pill: Mạng Lưới Tiếp Nhận */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#1E2B3C] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] font-sub font-black text-sm sm:text-base uppercase tracking-wider mb-4">
            <Sparkle color="orange" size={18} />
            <span>Mạng Lưới Tiếp Nhận</span>
            <Sparkle color="pink" size={18} />
          </div>

          <h2 className="font-poster text-3xl sm:text-5xl font-black text-white drop-shadow-[2px_2px_0px_#1E2B3C] mb-3 leading-normal">
            GỬI TẶNG NỆM <SparkleCluster />
          </h2>
          <p className="font-body text-base sm:text-lg font-bold text-[#FBE8C2] leading-relaxed">
            Tìm trạm cứu hộ gần bạn tại TP. Hồ Chí Minh để gửi tặng nệm handmade.
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-20 max-w-[1150px] mx-auto px-6 relative z-10">
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C] mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-[#1E2B3C]/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên trạm, khu vực, số điện thoại..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] placeholder-[#1E2B3C]/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#7A3B9E]"
              />
            </div>

            {/* District Filter Dropdown */}
            <div className="relative w-full sm:w-64">
              <Filter className="w-4 h-4 text-[#1E2B3C]/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full pl-10 pr-8 py-3.5 rounded-full bg-[#FBE8C2]/40 border-2 border-[#1E2B3C] font-body text-sm font-bold text-[#1E2B3C] focus:outline-none focus:bg-white cursor-pointer appearance-none"
              >
                <option value="all">Tất cả khu vực ({RESCUE_STATIONS.length})</option>
                {districts
                  .filter((d) => d !== 'all')
                  .map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs font-black text-[#1E2B3C]">
                ▼
              </span>
            </div>

            {/* Reset Filter Button */}
            {(searchQuery || selectedDistrict !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="flat-btn flat-btn-white px-4 py-3 text-xs uppercase"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đặt lại</span>
              </button>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#1E2B3C]/70 px-2">
            <span>
              Tìm thấy <strong className="text-[#7A3B9E] font-black">{filteredStations.length}</strong> trạm cứu trợ
            </span>
            <span className="italic">Ưu tiên gọi điện hoặc nhắn tin fanpage trước khi gửi nệm</span>
          </div>
        </div>

        {/* Stations Grid */}
        {filteredStations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredStations.map((station) => {
              const hasPhysicalAddress =
                station.address &&
                station.address !== 'liên hệ để biết thêm chi tiết';

              return (
                <div
                  key={station.id}
                  className="bg-white rounded-3xl p-7 border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C] flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    {/* District Pill Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#3FC7C2] text-white border-2 border-[#1E2B3C] font-sub font-black text-xs uppercase tracking-wide shadow-[2px_2px_0px_#1E2B3C]">
                        {station.district}
                      </span>
                    </div>

                    {/* Station Name */}
                    <h3 className="font-poster text-xl sm:text-2xl text-[#1E2B3C] mb-4 leading-snug">
                      {station.name}
                    </h3>

                    {/* Details list */}
                    <div className="space-y-3 font-body text-sm font-medium text-[#1E2B3C] mb-6">
                      {/* Address */}
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#E54BA0] shrink-0 mt-1 stroke-[2.5]" />
                        <div className="whitespace-pre-line leading-relaxed">
                          <strong className="font-extrabold">Địa chỉ: </strong>
                          {hasPhysicalAddress ? (
                            <span>{station.address}</span>
                          ) : (
                            <span className="font-bold italic text-[#7A3B9E]">
                              {station.address}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Contact */}
                      {station.contact && (
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-[#3FC7C2] shrink-0 stroke-[2.5]" />
                          <div>
                            <strong className="font-extrabold">Liên hệ: </strong>
                            {station.contact === 'liên hệ để biết thêm chi tiết' ? (
                              <span className="font-bold italic text-[#7A3B9E]">
                                liên hệ để biết thêm chi tiết
                              </span>
                            ) : station.contact.includes('@') ? (
                              <a
                                href={`mailto:${station.contact}`}
                                className="underline font-bold hover:text-[#7A3B9E]"
                              >
                                {station.contact}
                              </a>
                            ) : (
                              <a
                                href={`tel:${station.contact.replace(/[^\d+]/g, '')}`}
                                className="underline font-bold hover:text-[#7A3B9E]"
                              >
                                {station.contact}
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Email if separate */}
                      {station.email && station.email !== station.contact && (
                        <div className="flex items-center gap-2.5">
                          <Mail className="w-4 h-4 text-[#F2984A] shrink-0 stroke-[2.5]" />
                          <div>
                            <strong className="font-extrabold">Email: </strong>
                            <a
                              href={`mailto:${station.email}`}
                              className="underline font-bold hover:text-[#7A3B9E]"
                            >
                              {station.email}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Banking / Momo for SGT */}
                      {station.bankingInfo && (
                        <div className="p-3.5 rounded-2xl bg-[#FBE8C2]/60 border-2 border-[#1E2B3C] text-xs space-y-1 mt-2">
                          <div className="font-poster text-[#7A3B9E] flex items-center gap-1.5">
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>ỦNG HỘ KINH PHÍ CỨU TRỢ:</span>
                          </div>
                          {station.bankingInfo.vcb && (
                            <div>• VCB: <strong>{station.bankingInfo.vcb}</strong></div>
                          )}
                          {station.bankingInfo.sacombank && (
                            <div>• Sacombank: <strong>{station.bankingInfo.sacombank}</strong></div>
                          )}
                          {station.bankingInfo.momo && (
                            <div>• Momo: <strong>{station.bankingInfo.momo}</strong></div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons: Google Maps, Website, FB */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t-2 border-dashed border-[#1E2B3C]/20">
                    {hasPhysicalAddress && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${station.name} ${station.address.split('\n')[0]}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flat-btn flat-btn-white px-3.5 py-2 text-xs"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#E54BA0]" />
                        <span>Bản Đồ</span>
                      </a>
                    )}

                    {station.website && (
                      <a
                        href={station.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flat-btn flat-btn-purple px-3.5 py-2 text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Website</span>
                      </a>
                    )}

                    {station.facebook && (
                      <a
                        href={station.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flat-btn flat-btn-pink px-3.5 py-2 text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Facebook</span>
                      </a>
                    )}

                    {station.instagram && (
                      <a
                        href={station.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flat-btn flat-btn-orange px-3.5 py-2 text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Instagram</span>
                      </a>
                    )}

                    {station.contact &&
                      !station.contact.includes('@') &&
                      station.contact !== 'liên hệ để biết thêm chi tiết' && (
                        <a
                          href={`tel:${station.contact.replace(/[^\d+]/g, '')}`}
                          className="flat-btn flat-btn-orange px-3.5 py-2 text-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Gọi Điện</span>
                        </a>
                      )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-white rounded-3xl border-[3.5px] border-[#1E2B3C] shadow-[6px_6px_0px_#1E2B3C]">
            <div className="text-5xl mb-4">🐾</div>
            <h4 className="font-poster text-2xl text-[#1E2B3C] mb-2">
              Không tìm thấy trạm phù hợp
            </h4>
            <p className="font-body text-sm font-medium text-[#1E2B3C]/80 mb-6">
              Bạn có thể thử tìm với từ khóa khác hoặc đặt lại bộ lọc khu vực.
            </p>
            <button
              onClick={handleResetFilters}
              className="flat-btn flat-btn-purple px-6 py-3 text-sm uppercase"
            >
              Xem Lại Tất Cả Trạm
            </button>
          </div>
        )}
      </div>

      {/* Solid Bottom Stripe before Team Members */}
      <div className="h-4 bg-[#3FC7C2] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
