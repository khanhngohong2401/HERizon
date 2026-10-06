import { useEffect, useRef } from 'react';
import { StudioLogo } from './StudioLogo';

// Exact 70-sample gaze mapping table from the Creative Studio specification
const GAZE_FRAMES: [number, number][] = [
  [0.037186, 2.54167],
  [0.130722, 2.58333],
  [0.234912, 2.625],
  [0.321399, 2.66667],
  [0.419378, 2.70833],
  [0.493296, 2.75],
  [0.597784, 2.79167],
  [0.763067, 2.83333],
  [0.778708, 2.875],
  [0.878749, 2.91667],
  [0.993308, 2.95833],
  [1.262791, 3.0],
  [1.388902, 3.04167],
  [1.466609, 0.25],
  [1.473318, 0.29167],
  [1.520011, 3.08333],
  [1.53824, 0.33333],
  [1.6056, 0.375],
  [1.640696, 3.125],
  [1.691747, 0.41667],
  [1.779194, 0.45833],
  [1.869867, 0.5],
  [1.984485, 0.54167],
  [2.07265, 0.58333],
  [2.183915, 0.625],
  [2.267155, 0.66667],
  [2.36138, 0.70833],
  [2.44749, 0.75],
  [2.517676, 0.79167],
  [2.605329, 0.83333],
  [2.670889, 0.875],
  [2.809991, 0.91667],
  [2.918365, 0.95833],
  [3.134177, 1.0],
  [3.240289, 1.04167],
  [3.35949, 1.08333],
  [3.464119, 1.125],
  [3.549317, 1.16667],
  [3.663539, 1.20833],
  [3.78152, 1.25],
  [3.878742, 1.29167],
  [3.989446, 1.33333],
  [4.066996, 1.375],
  [4.225574, 1.45833],
  [4.260255, 1.41667],
  [4.276468, 1.5],
  [4.404025, 1.54167],
  [4.487075, 1.58333],
  [4.552949, 1.625],
  [4.628837, 1.66667],
  [4.701131, 1.70833],
  [4.773675, 1.75],
  [4.833089, 1.79167],
  [4.894145, 1.83333],
  [4.962593, 1.875],
  [5.028737, 1.91667],
  [5.090028, 1.95833],
  [5.212041, 2.0],
  [5.28302, 2.04167],
  [5.349352, 2.08333],
  [5.412121, 2.125],
  [5.473636, 2.16667],
  [5.573871, 2.20833],
  [5.656364, 2.25],
  [5.759153, 2.29167],
  [5.85261, 2.33333],
  [5.938647, 2.375],
  [6.048453, 2.41667],
  [6.153327, 2.45833],
  [6.222603, 2.5],
];

const TAU = Math.PI * 2;
const wrappedAngle = (angle: number) => ((angle % TAU) + TAU) % TAU;

function timeForAngle(angle: number) {
  const target = wrappedAngle(angle);
  let nearestTime = GAZE_FRAMES[0][1];
  let nearestDistance = Infinity;

  for (const [sampleAngle, time] of GAZE_FRAMES) {
    const diff = Math.abs(target - sampleAngle);
    const dist = Math.min(diff, TAU - diff);
    if (dist < nearestDistance) {
      nearestDistance = dist;
      nearestTime = time;
    }
  }

  return nearestTime + 1 / 240;
}

export function StudioFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackingFrameRef = useRef<number>(0);
  const desiredTimeRef = useRef<number>(0);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileMedia = window.matchMedia('(max-width: 700px)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const seek = () => {
      trackingFrameRef.current = 0;
      if (mobileMedia.matches || video.readyState < 2 || video.seeking) return;
      if (Math.abs(video.currentTime - desiredTimeRef.current) > 1 / 48) {
        video.currentTime = Math.min(desiredTimeRef.current, (video.duration || 3.5) - 1 / 24);
      }
    };

    const schedule = () => {
      if (!trackingFrameRef.current) {
        trackingFrameRef.current = requestAnimationFrame(seek);
      }
    };

    const updateTarget = () => {
      if (mobileMedia.matches || !pointerRef.current) return;
      const rect = video.getBoundingClientRect();
      const scale = Math.max(rect.width / 1920, rect.height / 1080);
      const eyeX = rect.left + rect.width / 2 + (948 - 960) * scale;
      const eyeY = rect.top + rect.height / 2 + (418 - 540) * scale;
      const dx = pointerRef.current.x - eyeX;
      const dy = pointerRef.current.y - eyeY;

      if (Math.hypot(dx, dy) > 8) {
        desiredTimeRef.current = timeForAngle(Math.atan2(dy, dx));
        schedule();
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      updateTarget();
    };

    const handleReady = () => {
      video.loop = mobileMedia.matches;
      if (mobileMedia.matches && !reducedMotionMedia.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
        if (!mobileMedia.matches) {
          updateTarget();
          schedule();
        }
      }
    };

    video.addEventListener('seeked', schedule);
    video.addEventListener('loadeddata', handleReady);
    mobileMedia.addEventListener('change', handleReady);
    reducedMotionMedia.addEventListener('change', handleReady);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', updateTarget);
    window.addEventListener('scroll', updateTarget, { passive: true });

    if (video.readyState >= 2) {
      handleReady();
    }

    return () => {
      video.removeEventListener('seeked', schedule);
      video.removeEventListener('loadeddata', handleReady);
      mobileMedia.removeEventListener('change', handleReady);
      reducedMotionMedia.removeEventListener('change', handleReady);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateTarget);
      window.removeEventListener('scroll', updateTarget);
      if (trackingFrameRef.current) {
        cancelAnimationFrame(trackingFrameRef.current);
      }
    };
  }, []);

  return (
    <footer
      className="relative min-h-screen pt-[6.54vw] isolate overflow-hidden max-[700px]:flex max-[700px]:flex-col max-[700px]:gap-9 max-[700px]:min-h-[100svh] max-[700px]:pt-10 max-[700px]:px-6 max-[700px]:pb-0"
      aria-label="Footer"
    >
      {/* Video Background with Eye Gaze Tracking */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none max-[700px]:relative max-[700px]:inset-auto max-[700px]:order-4 max-[700px]:z-auto max-[700px]:shrink-0 max-[700px]:self-center max-[700px]:w-[calc(100%+48px)] max-[700px]:aspect-[4/3] max-[700px]:-mt-4"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260908_073327_03643c0a-db33-417a-ae8f-4a39259c7f9c.mp4"
          className="absolute inset-0 block w-full h-full object-cover object-center"
        />
      </div>

      {/* Left Column: Jobs / Fresh Ideas */}
      <div className="ml-[8.65vw] w-[25vw] max-[700px]:order-2 max-[700px]:ml-0 max-[700px]:w-full">
        <span className="inline-flex items-center rounded-full bg-[#f7f8fa] px-[0.61vw] py-[0.39vw] text-[0.88vw] leading-tight h-[1.9vw] whitespace-nowrap text-[#080909] font-body max-[700px]:h-[30px] max-[700px]:px-[11px] max-[700px]:py-[6px] max-[700px]:text-[14px]">
          have a fresh idea?
        </span>
        <span className="block mt-[1.45vw] font-head font-black text-[1.66vw] leading-[1.2] tracking-normal text-[#080909] max-[700px]:text-[clamp(22px,6.3vw,30px)] max-[700px]:leading-[1.25] max-[700px]:mt-[19px]">
          imagination
          <br />
          meets craft
        </span>
        <div className="flex flex-col items-start gap-[0.93vw] mt-[1.3vw] text-[1.075vw] leading-[1.35] text-[#080909] font-body max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:gap-x-6 max-[700px]:gap-y-0 max-[700px]:mt-5 max-[700px]:text-[17px] max-[700px]:leading-[1.4]">
          <a href="#guide" className="hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:min-h-[44px]">
            Made
          </a>
          <a href="#story" className="hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:min-h-[44px]">
            Story
          </a>
          <a href="#stations" className="hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:min-h-[44px]">
            In the lab
          </a>
          <a href="#contact" className="hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:min-h-[44px]">
            Say hey
          </a>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute left-[40.33vw] top-[7.7vw] w-[17vw] text-[#080909] max-[700px]:static max-[700px]:order-1 max-[700px]:self-start max-[700px]:w-[210px] max-[700px]:max-w-[75%] max-[700px]:mb-1">
        <StudioLogo className="block w-full h-auto" />
      </div>

      {/* Right Column: Contact / Socials */}
      <div className="absolute left-[74.3vw] top-[6.54vw] text-[#080909] max-[700px]:static max-[700px]:order-3 max-[700px]:w-full">
        <span className="inline-flex items-center rounded-full bg-[#f7f8fa] px-[0.61vw] py-[0.39vw] text-[0.88vw] leading-tight h-[1.9vw] whitespace-nowrap text-[#080909] font-body max-[700px]:h-[30px] max-[700px]:px-[11px] max-[700px]:py-[6px] max-[700px]:text-[14px]">
          say hey
        </span>
        <div className="flex flex-col items-start mt-[1.45vw] whitespace-nowrap font-head font-black text-[1.66vw] leading-[1.2] tracking-normal text-[#080909] max-[700px]:mt-[19px] max-[700px]:text-[clamp(22px,6.3vw,30px)] max-[700px]:leading-[1.25] max-[700px]:gap-1 max-[700px]:whitespace-normal">
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            let’s team up!
          </a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">
            bring us your idea*
          </a>
        </div>
        <p className="mt-[1.05vw] mb-0 text-[0.733vw] leading-[1.4] whitespace-nowrap font-body text-[#080909]/80 max-[700px]:max-w-[34ch] max-[700px]:mt-4 max-[700px]:text-[14px] max-[700px]:leading-[1.5] max-[700px]:whitespace-normal">
          *good things start with one spark. let’s make yours.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-[1.43vw] mt-[1.61vw] max-[700px]:gap-[18px] max-[700px]:mt-5">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="block text-[#080909] hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:justify-center max-[700px]:w-[44px] max-[700px]:h-[44px] max-[700px]:-ml-[7px]"
          >
            <svg
              className="w-[1.71vw] h-[1.71vw] max-[700px]:w-[30px] max-[700px]:h-[30px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="block text-[#080909] hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:justify-center max-[700px]:w-[44px] max-[700px]:h-[44px]"
          >
            <svg
              className="w-[1.71vw] h-[1.71vw] max-[700px]:w-[30px] max-[700px]:h-[30px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="block text-[#080909] hover:opacity-75 transition-opacity max-[700px]:flex max-[700px]:items-center max-[700px]:justify-center max-[700px]:w-[44px] max-[700px]:h-[44px]"
          >
            <svg
              className="w-[1.71vw] h-[1.71vw] max-[700px]:w-[30px] max-[700px]:h-[30px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.94-5.26 3.02-6.79 1.62-1.2 3.73-1.6 5.67-1.12.01 1.45.02 2.91.01 4.36-1.22-.38-2.6-.2-3.64.44-.99.6-1.64 1.67-1.65 2.84-.02 1.15.52 2.3 1.39 3.03 1.15.96 2.87 1.22 4.29.62 1.25-.53 2.12-1.72 2.22-3.07.03-3.03.01-6.06.01-9.09v-8.48z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
