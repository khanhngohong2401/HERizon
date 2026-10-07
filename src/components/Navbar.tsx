import { useState } from 'react';
import { Menu, X, Heart, ExternalLink } from 'lucide-react';
import { FACEBOOK_PAGE_URL } from '../data/mockData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: 'Câu chuyện', href: '#story' },
    { label: 'Cách làm nệm', href: '#guide' },
    { label: 'Điểm tiếp nhận', href: '#stations' },
    { label: 'Thành viên nhóm', href: '#team' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1E2B3C] text-[#FBE8C2] border-b-[4px] border-[#1E2B3C] shadow-[0_4px_0px_rgba(0,0,0,0.15)] transition-all">
      {/* Accent Top Decorative Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#F2984A] via-[#E54BA0] to-[#3FC7C2]" />

      <div className="max-w-[1360px] mx-auto px-3 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-2">
        {/* Nút Home: logo cố định (public/images/logo.png) */}
        <a
          href="#top"
          className="shrink-0 flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white border-2 border-[#1E2B3C] shadow-[2.5px_2.5px_0px_#F2984A] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          aria-label="Về đầu trang Em Ấm"
        >
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Em Ấm" className="h-9 sm:h-11 w-auto object-contain" />
        </a>

        {/* Desktop Navigation - Compact & Single-Line (Never Wraps) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-sub font-bold text-xs xl:text-sm whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 xl:px-3.5 py-1.5 rounded-full text-[#FBE8C2] hover:bg-[#FBE8C2] hover:text-[#1E2B3C] hover:border-2 hover:border-[#1E2B3C] transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Facebook Fanpage link */}
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flat-btn flat-btn-pink px-3 xl:px-4 py-1.5 text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Fanpage Facebook</span>
          </a>

          {/* Quick Donate CTA */}
          <a
            href="#contact"
            className="flat-btn flat-btn-orange px-3 xl:px-4 py-1.5 text-xs uppercase tracking-wider shrink-0 whitespace-nowrap"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Góp Vải Cũ</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#FBE8C2] text-[#1E2B3C] border-2 border-[#1E2B3C] shadow-[2px_2px_0px_#F2984A] focus:outline-none shrink-0"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 stroke-[3]" /> : <Menu className="w-5 h-5 stroke-[3]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#FBE8C2]/20 bg-[#1E2B3C] px-6 py-5 flex flex-col gap-2.5 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 text-base font-sub font-bold text-[#FBE8C2] hover:bg-[#FBE8C2] hover:text-[#1E2B3C] rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#FBE8C2]/20 flex flex-col gap-2">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flat-btn flat-btn-pink py-3 text-sm text-center"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Facebook: Em Ấm - Đệm Êm Trao Em</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flat-btn flat-btn-orange py-3 text-sm text-center"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Góp Vải Cũ Ngay</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
