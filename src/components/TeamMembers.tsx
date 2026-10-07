import { useState } from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { User } from 'lucide-react';
import { Sparkle, SparkleCluster } from './Sparkle';
import { PawScatterBackground } from './PawPattern';

export function TeamMembers() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      className="relative bg-white text-[#1E2B3C] py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="team"
    >
      <PawScatterBackground />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FBE8C2] border-[3px] border-[#1E2B3C] shadow-[4px_4px_0px_#1E2B3C] mb-4">
            <Sparkle color="pink" size={16} />
            <span className="font-sub font-black text-sm uppercase tracking-wider text-[#E54BA0]">
              Nhóm Tác Giả Dự Án
            </span>
            <Sparkle color="purple" size={16} />
          </div>

          <h2 className="font-poster text-3xl sm:text-5xl text-[#1E2B3C] mb-4 leading-normal">
            THÀNH VIÊN NHÓM <SparkleCluster />
          </h2>
          <p className="font-body text-base sm:text-lg font-bold text-[#1E2B3C]/80 leading-relaxed">
            5 thành viên thực hiện dự án <span className="text-[#7A3B9E] font-black">Em Ấm</span> — Gom chút cũ, may thành chút thương.
          </p>
        </div>

        {/* 5 Member Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7">
          {TEAM_MEMBERS.map((member) => {
            // Tự động ghép đúng base URL /HERizon/ vào trước tên ảnh để khớp tuyệt đối
            const cleanPath = member.imageSrc.startsWith('/') ? member.imageSrc : `/${member.imageSrc}`;
            const imagePath = `${import.meta.env.BASE_URL}${cleanPath.replace(/^\//, '')}`;
            const isFailed = failedImages[member.id];

            return (
              <div
                key={member.id}
                className="bg-[#FBE8C2] rounded-3xl p-5 border-[3.5px] border-[#1E2B3C] shadow-[5px_5px_0px_#1E2B3C] flex flex-col justify-between text-center"
              >
                <div>
                  {/* Photo Frame cố định, đúng ảnh từng thành viên */}
                  <div className="relative aspect-square w-full rounded-2xl bg-white border-[3px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C] overflow-hidden mb-4 flex items-center justify-center">
                    {!isFailed ? (
                      <img
                        src={imagePath}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={() => {
                          setFailedImages((prev) => ({ ...prev, [member.id]: true }));
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-3 text-[#1E2B3C]/70">
                        <div className="w-14 h-14 rounded-full bg-[#FBE8C2] border-2 border-[#1E2B3C] flex items-center justify-center mb-1 shadow-[2px_2px_0px_#1E2B3C]">
                          <User className="w-7 h-7 text-[#1E2B3C]" />
                        </div>
                        <span className="font-sub font-bold text-[10px] text-red-600 bg-[#FBE8C2] px-2 py-0.5 rounded-full border border-[#1E2B3C] mt-1">
                          Lỗi tải ảnh
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Student ID (MSSV) */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white border-2 border-[#1E2B3C] font-body text-xs font-black text-[#7A3B9E] shadow-[2px_2px_0px_#1E2B3C] mb-2">
                    MSSV: {member.studentId}
                  </div>

                  {/* Student Name */}
                  <h3 className="font-body text-base sm:text-lg font-black text-[#1E2B3C] leading-snug">
                    {member.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solid Bottom Stripe before Contact */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#F2984A] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
