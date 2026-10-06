interface SparkleProps {
  color?: 'purple' | 'orange' | 'pink' | 'yellow' | 'teal';
  size?: number;
  className?: string;
}

export function Sparkle({ color = 'orange', size = 20, className = '' }: SparkleProps) {
  const colorMap = {
    purple: '#7A3B9E',
    orange: '#F2984A',
    pink: '#E54BA0',
    yellow: '#FBD449',
    teal: '#3FC7C2',
  };

  const fill = colorMap[color] || '#F2984A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block animate-pulse duration-700 ${className}`}
      style={{ filter: 'drop-shadow(1px 1px 0px #1E2B3C)' }}
    >
      <path
        d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"
        fill={fill}
        stroke="#1E2B3C"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleCluster({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 align-middle select-none pointer-events-none ${className}`}>
      <Sparkle color="orange" size={20} className="-translate-y-1" />
      <Sparkle color="pink" size={14} className="translate-y-1.5" />
      <Sparkle color="purple" size={16} />
    </span>
  );
}
