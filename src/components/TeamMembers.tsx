import { TEAM_MEMBERS } from '../data/mockData';
import { Sparkle, SparkleCluster } from './Sparkle';
import { PawScatterBackground } from './PawPattern';

export function TeamMembers() {
  return (
    <section
      className="relative bg-white text-[#1E2B3C] py-20 sm:py-28 border-b-[4px] border-[#1E2B3C] overflow-hidden"
      id="team"
    >
      <PawScatterBackground />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FBE8C2] border-[3px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C] mb-4">
            <Sparkle color="pink" size={14} />
            <span className="font-sub font-bold text-xs uppercase tracking-wider text-[#E54BA0]">
              Nhóm Tác Giả Dự Án
            </span>
          </div>

          <h2 className="font-poster text-3xl sm:text-5xl text-[#1E2B3C] mb-4">
            THÀNH VIÊN NHÓM <SparkleCluster />
          </h2>
          <p className="font-body text-base sm:text-lg font-bold text-[#1E2B3C]/80">
            5 thành viên thực hiện dự án <span className="text-[#7A3B9E] font-black">Em Ấm</span> — Gom chút cũ, may thành chút thương.
          </p>
        </div>

        {/* Ảnh cố định: lấy từ avatarUrl trong data/mockData.ts (thư mục public/images/team) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FBE8C2] rounded-3xl p-5 border-[3.5px] border-[#1E2B3C] shadow-[5px_5px_0px_#1E2B3C] flex flex-col justify-between hover:-translate-y-1.5 transition-all text-center"
            >
              <div>
                <div className="relative aspect-square w-full rounded-2xl bg-white border-[3px] border-[#1E2B3C] shadow-[3px_3px_0px_#1E2B3C] overflow-hidden mb-4">
                  <img
                    src={`${import.meta.env.BASE_URL}${member.avatarUrl}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="font-body text-base sm:text-lg font-black text-[#1E2B3C] leading-snug">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#F2984A] border-t-2 border-[#1E2B3C]" />
    </section>
  );
}
