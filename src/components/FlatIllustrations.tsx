interface IllustrationProps {
  className?: string;
  size?: number;
}

// 1. Dog and Cat snuggling together happily on a patchwork mattress
export function DogAndCatOnBedIllustration({ className = '', size = 160 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Soft Glow Shadow Under Bed */}
      <ellipse cx="70" cy="108" rx="58" ry="10" fill="#1E2B3C" opacity="0.15" />

      {/* Quilted Patchwork Mattress Cushion */}
      <rect
        x="12"
        y="58"
        width="116"
        height="46"
        rx="22"
        fill="#FBE8C2"
        stroke="#1E2B3C"
        strokeWidth="3.5"
      />

      {/* Mattress Patch 1 (Teal #3FC7C2) */}
      <path
        d="M14 80C14 69.5 22.5 61 33 61H52V101H33C22.5 101 14 92.5 14 82V80Z"
        fill="#3FC7C2"
        stroke="#1E2B3C"
        strokeWidth="3"
      />
      {/* Mattress Patch 2 (Purple #7A3B9E) */}
      <rect x="52" y="61" width="36" height="40" fill="#7A3B9E" stroke="#1E2B3C" strokeWidth="3" />
      {/* Mattress Patch 3 (Pink #E54BA0) */}
      <path
        d="M88 61H107C117.5 61 126 69.5 126 80V82C126 92.5 117.5 101 107 101H88V61Z"
        fill="#E54BA0"
        stroke="#1E2B3C"
        strokeWidth="3"
      />

      {/* Decorative Quilt Stitch Dashes */}
      <line x1="52" y1="64" x2="52" y2="98" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 3" />
      <line x1="88" y1="64" x2="88" y2="98" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 3" />

      {/* Quilted Button Tufting Details */}
      <circle cx="34" cy="81" r="3" fill="#FBD449" stroke="#1E2B3C" strokeWidth="2" />
      <circle cx="70" cy="81" r="3" fill="#FBD449" stroke="#1E2B3C" strokeWidth="2" />
      <circle cx="106" cy="81" r="3" fill="#FBD449" stroke="#1E2B3C" strokeWidth="2" />

      {/* --- SLEEPING PUPPY (LEFT/CENTER) --- */}
      {/* Dog Body */}
      <ellipse cx="50" cy="54" rx="26" ry="17" fill="#F2984A" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Dog Head */}
      <circle cx="38" cy="42" r="14" fill="#F2984A" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Floppy Dog Ear */}
      <ellipse cx="28" cy="42" rx="5.5" ry="11" fill="#7A3B9E" stroke="#1E2B3C" strokeWidth="3" />
      {/* Dog Snout */}
      <ellipse cx="43" cy="45" rx="5" ry="4" fill="#FBE8C2" stroke="#1E2B3C" strokeWidth="2.5" />
      <circle cx="44.5" cy="44" r="2" fill="#1E2B3C" />
      {/* Dog Sleepy Eye (^_^) */}
      <path d="M34 38C35.5 36 37.5 36 39 38" stroke="#1E2B3C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Dog Front Paw resting forward */}
      <ellipse cx="48" cy="62" rx="5" ry="3.5" fill="#F2984A" stroke="#1E2B3C" strokeWidth="2.5" />

      {/* --- SLEEPING KITTEN (RIGHT, SNUGGLING NEXT TO PUPPY) --- */}
      {/* Cat Body curled around */}
      <ellipse cx="88" cy="53" rx="22" ry="16" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Cat Tabby Patch on back */}
      <path
        d="M84 41C90 41 96 44 98 48C94 50 88 48 84 41Z"
        fill="#3FC7C2"
        stroke="#1E2B3C"
        strokeWidth="2"
      />
      {/* Cat Head */}
      <circle cx="76" cy="43" r="13" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Cat Left Ear (Pointed Triangle) */}
      <polygon points="68,34 71,24 78,32" fill="#E54BA0" stroke="#1E2B3C" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Cat Right Ear */}
      <polygon points="78,32 83,23 86,34" fill="#E54BA0" stroke="#1E2B3C" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Cat Snout / Nose */}
      <polygon points="73,45 77,45 75,47" fill="#E54BA0" stroke="#1E2B3C" strokeWidth="1.5" />
      {/* Cat Sleepy Smile */}
      <path d="M73 48C74 50 76 50 77 48" stroke="#1E2B3C" strokeWidth="2" strokeLinecap="round" />
      {/* Cat Closed Eyes */}
      <path d="M70 41C71.5 39.5 73.5 39.5 75 41" stroke="#1E2B3C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M78 41C79.5 39.5 81.5 39.5 83 41" stroke="#1E2B3C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cute Whiskers */}
      <line x1="66" y1="44" x2="61" y2="43" stroke="#1E2B3C" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="66" y1="47" x2="62" y2="48" stroke="#1E2B3C" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="84" y1="44" x2="89" y2="43" stroke="#1E2B3C" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="84" y1="47" x2="88" y2="48" stroke="#1E2B3C" strokeWidth="1.8" strokeLinecap="round" />
      {/* Cat Curled Tail */}
      <path
        d="M106 56C112 52 116 57 114 63C112 68 105 68 103 63"
        stroke="#1E2B3C"
        strokeWidth="3.5"
        fill="#FFFFFF"
        strokeLinecap="round"
      />

      {/* Floating Pink Heart between them */}
      <path
        d="M60 22C60 22 55 17 55 13C55 10.5 57 8.5 59.5 8.5C61 8.5 62 9.5 62.5 10.5C63 9.5 64 8.5 65.5 8.5C68 8.5 70 10.5 70 13C70 17 65 22 65 22H60Z"
        fill="#E54BA0"
        stroke="#1E2B3C"
        strokeWidth="2"
      />

      {/* Sleepy Zzz */}
      <path d="M96 24H101L96 30H101" stroke="#7A3B9E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M104 15H108L104 20H108" stroke="#F2984A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 2. Dog curled up on a fabric-scrap bed (single)
export function DogOnBedIllustration({ className = '', size = 96 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Mattress Base - Quilted Patchwork Bed */}
      <rect
        x="8"
        y="50"
        width="84"
        height="38"
        rx="16"
        fill="#FBE8C2"
        stroke="#1E2B3C"
        strokeWidth="3.5"
      />
      {/* Mattress Patch 1 (Teal) */}
      <path
        d="M10 65C10 56.7157 16.7157 50 25 50H45V88H25C16.7157 88 10 81.2843 10 73V65Z"
        fill="#3FC7C2"
        stroke="#1E2B3C"
        strokeWidth="3"
      />
      {/* Mattress Patch 2 (Purple) */}
      <rect x="45" y="50" width="24" height="38" fill="#7A3B9E" stroke="#1E2B3C" strokeWidth="3" />
      {/* Mattress Patch 3 (Pink) */}
      <path
        d="M69 50H75C83.2843 50 90 56.7157 90 65V73C90 81.2843 83.2843 88 75 88H69V50Z"
        fill="#E54BA0"
        stroke="#1E2B3C"
        strokeWidth="3"
      />
      {/* Stitching dashes */}
      <line x1="45" y1="52" x2="45" y2="86" stroke="#1E2B3C" strokeWidth="2.5" strokeDasharray="3 3" />
      <line x1="69" y1="52" x2="69" y2="86" stroke="#1E2B3C" strokeWidth="2.5" strokeDasharray="3 3" />

      {/* Sleeping Dog Body */}
      <ellipse cx="50" cy="46" rx="26" ry="17" fill="#F2984A" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Dog Head */}
      <circle cx="34" cy="38" r="14" fill="#F2984A" stroke="#1E2B3C" strokeWidth="3.5" />
      {/* Dog Floppy Ear */}
      <ellipse cx="26" cy="38" rx="6" ry="11" fill="#7A3B9E" stroke="#1E2B3C" strokeWidth="3" />
      {/* Snout */}
      <ellipse cx="40" cy="41" rx="5" ry="4" fill="#FBE8C2" stroke="#1E2B3C" strokeWidth="2.5" />
      <circle cx="41" cy="40" r="2" fill="#1E2B3C" />
      {/* Sleeping Eyes ^_^ */}
      <path d="M30 35C31 33 33 33 34 35" stroke="#1E2B3C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Curled Tail */}
      <path
        d="M72 44C76 40 80 43 78 48C76 52 70 52 70 48"
        stroke="#1E2B3C"
        strokeWidth="3.5"
        fill="#F2984A"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3. Hands Sewing with needle, scissors, and thread
export function HandsSewingIllustration({ className = '', size = 96 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fabric Swatch being sewn */}
      <rect
        x="18"
        y="42"
        width="64"
        height="44"
        rx="10"
        fill="#3FC7C2"
        stroke="#1E2B3C"
        strokeWidth="3.5"
      />
      {/* Second fabric overlay (Pink) */}
      <path
        d="M48 42H72C77.5228 42 82 46.4772 82 52V76C82 81.5228 77.5228 86 72 86H48V42Z"
        fill="#E54BA0"
        stroke="#1E2B3C"
        strokeWidth="3"
      />
      {/* Hand Stitch line */}
      <line x1="48" y1="44" x2="48" y2="84" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 4" />

      {/* Sewing Needle */}
      <line x1="38" y1="20" x2="52" y2="52" stroke="#1E2B3C" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="39" cy="22" r="2.5" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="1.5" />

      {/* Golden Thread Looping */}
      <path
        d="M39 22C42 12 55 12 58 24C60 34 46 36 52 50"
        stroke="#F2984A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Scissors on top right */}
      <circle cx="75" cy="22" r="6" fill="#FBD449" stroke="#1E2B3C" strokeWidth="2.5" />
      <circle cx="85" cy="28" r="6" fill="#FBD449" stroke="#1E2B3C" strokeWidth="2.5" />
      <line x1="72" y1="26" x2="60" y2="40" stroke="#1E2B3C" strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="32" x2="58" y2="38" stroke="#1E2B3C" strokeWidth="3" strokeLinecap="round" />

      {/* Cute Button */}
      <circle cx="32" cy="64" r="8" fill="#FBD449" stroke="#1E2B3C" strokeWidth="3" />
      <circle cx="30" cy="62" r="1.5" fill="#1E2B3C" />
      <circle cx="34" cy="62" r="1.5" fill="#1E2B3C" />
      <circle cx="30" cy="66" r="1.5" fill="#1E2B3C" />
      <circle cx="34" cy="66" r="1.5" fill="#1E2B3C" />
    </svg>
  );
}

// 4. Donation Box full of folded fabric & hearts
export function DonationBoxIllustration({ className = '', size = 96 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Box Back */}
      <rect
        x="16"
        y="42"
        width="68"
        height="48"
        rx="8"
        fill="#F2984A"
        stroke="#1E2B3C"
        strokeWidth="3.5"
      />
      {/* Folded Shirts inside box */}
      <rect x="24" y="28" width="52" height="18" rx="6" fill="#3FC7C2" stroke="#1E2B3C" strokeWidth="3" />
      <rect x="28" y="20" width="44" height="14" rx="5" fill="#E54BA0" stroke="#1E2B3C" strokeWidth="3" />
      <rect x="34" y="14" width="32" height="12" rx="4" fill="#FBD449" stroke="#1E2B3C" strokeWidth="3" />

      {/* Box Front Flap */}
      <rect
        x="12"
        y="46"
        width="76"
        height="46"
        rx="8"
        fill="#FBE8C2"
        stroke="#1E2B3C"
        strokeWidth="3.5"
      />
      {/* Box Label / Heart */}
      <rect x="30" y="58" width="40" height="24" rx="6" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="2.5" />
      {/* Red/Pink Heart */}
      <path
        d="M50 75C50 75 42 69 42 64C42 61 44.5 59 47 59C48.5 59 49.5 60 50 61C50.5 60 51.5 59 53 59C55.5 59 58 61 58 64C58 69 50 75 50 75Z"
        fill="#E54BA0"
        stroke="#1E2B3C"
        strokeWidth="2"
      />
    </svg>
  );
}

// 5. Fabric Material Badges for Guide Cards (Cotton, Denim, Parachute)
export function MaterialBadge({ type, size = 64 }: { type: 'cotton' | 'jeans' | 'parachute'; size?: number }) {
  if (type === 'cotton') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="52" height="52" rx="14" fill="#3FC7C2" stroke="#1E2B3C" strokeWidth="3" />
        <path
          d="M20 18L14 26L20 30L22 26V46H42V26L44 30L50 26L44 18H37C37 21 34 23 32 23C30 23 27 21 27 18H20Z"
          fill="#FFFFFF"
          stroke="#1E2B3C"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="1.5" fill="#1E2B3C" />
        <circle cx="32" cy="38" r="1.5" fill="#1E2B3C" />
      </svg>
    );
  }
  if (type === 'jeans') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="52" height="52" rx="14" fill="#7A3B9E" stroke="#1E2B3C" strokeWidth="3" />
        <path
          d="M20 18H44V26L41 46H34L32 28L30 46H23L20 26V18Z"
          fill="#3FC7C2"
          stroke="#1E2B3C"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M26 23H38" stroke="#FBD449" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="32" cy="20" r="1.5" fill="#FBD449" stroke="#1E2B3C" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#E54BA0" stroke="#1E2B3C" strokeWidth="3" />
      <path
        d="M22 18L14 26L20 30L22 26V46H42V26L44 30L50 26L42 18H22Z"
        fill="#FBD449"
        stroke="#1E2B3C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M32 22V46" stroke="#1E2B3C" strokeWidth="2.5" />
    </svg>
  );
}
