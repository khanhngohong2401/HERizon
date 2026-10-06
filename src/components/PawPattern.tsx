export function PawIcon({ size = 24, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main pad */}
      <path
        d="M16 14C11.5 14 9 17.5 9 21.5C9 25 12 28 16 28C20 28 23 25 23 21.5C23 17.5 20.5 14 16 14Z"
        stroke="#1E2B3C"
        strokeWidth="2"
      />
      {/* Toe 1 */}
      <ellipse cx="8.5" cy="11.5" rx="3" ry="4" stroke="#1E2B3C" strokeWidth="2" />
      {/* Toe 2 */}
      <ellipse cx="13.5" cy="8.5" rx="3" ry="4" stroke="#1E2B3C" strokeWidth="2" />
      {/* Toe 3 */}
      <ellipse cx="18.5" cy="8.5" rx="3" ry="4" stroke="#1E2B3C" strokeWidth="2" />
      {/* Toe 4 */}
      <ellipse cx="23.5" cy="11.5" rx="3" ry="4" stroke="#1E2B3C" strokeWidth="2" />
    </svg>
  );
}

export function PawScatterBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10" aria-hidden="true">
      <PawIcon size={38} className="absolute top-6 left-12 rotate-[-20deg]" color="#1E2B3C" />
      <PawIcon size={28} className="absolute top-20 right-20 rotate-[35deg]" color="#1E2B3C" />
      <PawIcon size={44} className="absolute bottom-12 left-1/4 rotate-[15deg]" color="#1E2B3C" />
      <PawIcon size={32} className="absolute top-1/3 right-1/4 rotate-[-12deg]" color="#1E2B3C" />
      <PawIcon size={36} className="absolute bottom-8 right-16 rotate-[-45deg]" color="#1E2B3C" />
      <PawIcon size={24} className="absolute top-12 left-1/2 rotate-[25deg]" color="#1E2B3C" />
    </div>
  );
}
