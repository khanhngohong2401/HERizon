/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Guide } from './components/Guide';
import { Stations } from './components/Stations';
import { TeamMembers } from './components/TeamMembers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Intersection Observer for scroll reveal
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FBE8C2] text-[#1E2B3C] font-body selection:bg-[#7A3B9E] selection:text-white">
      {/* Top Command Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (var(--teal)) */}
        <div className="fade-up visible">
          <Hero />
        </div>

        {/* 2. Story / About Section (var(--cream)) */}
        <div className="fade-up">
          <Story />
        </div>

        {/* 3. Guide Section (var(--white)) */}
        <div className="fade-up">
          <Guide />
        </div>

        {/* 4. Rescue Stations Section (var(--cream) + var(--purple) header) */}
        <div className="fade-up">
          <Stations />
        </div>

        {/* 5. Team Members (5 student photo frames) */}
        <div className="fade-up">
          <TeamMembers />
        </div>

        {/* 6. Contact Section (var(--purple)) */}
        <div className="fade-up">
          <Contact />
        </div>
      </main>

      {/* 7. Bottom Info & Command Footer */}
      <Footer />
    </div>
  );
}
