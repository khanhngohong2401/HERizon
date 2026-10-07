import { useState } from 'react';

interface EmAmLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export function EmAmLogo({ className = '', size = 'md', showSubtitle = true }: EmAmLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const heightClasses = {
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16 md:h-18',
    lg: 'h-24 sm:h-32',
  };

  // If the PNG file is accessible directly, load it
  if (!imgFailed) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Em Ấm — Gom chút cũ, may thành chút thương"
          className={`${heightClasses[size]} w-auto object-contain transition-transform hover:scale-105`}
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // Exact Vector Graphic Artwork of the user's uploaded "Em Ấm" logo
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 240"
        className={`${heightClasses[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue-Purple Gingham Pattern for "e" */}
          <pattern id="ginghamPurple" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#5B50A0" />
            <rect width="8" height="8" fill="#3D3080" />
            <rect x="8" y="8" width="8" height="8" fill="#3D3080" />
            <line x1="0" y1="8" x2="16" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="8" y1="0" x2="8" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
          </pattern>

          {/* Pink Polka Dot Pattern for first "m" */}
          <pattern id="pinkPolka" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#E86C98" />
            <circle cx="7" cy="7" r="2.5" fill="#B83A6D" />
            <circle cx="0" cy="0" r="1.5" fill="#B83A6D" />
            <circle cx="14" cy="0" r="1.5" fill="#B83A6D" />
            <circle cx="0" cy="14" r="1.5" fill="#B83A6D" />
            <circle cx="14" cy="14" r="1.5" fill="#B83A6D" />
          </pattern>

          {/* Yellow Polka Dots for "â" */}
          <pattern id="yellowPolka" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#F4D348" />
            <circle cx="6" cy="6" r="2" fill="#FFFFFF" opacity="0.8" />
          </pattern>

          {/* Green Gingham Pattern for second "m" */}
          <pattern id="greenGingham" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#5BB063" />
            <rect width="8" height="8" fill="#3D8B45" />
            <rect x="8" y="8" width="8" height="8" fill="#3D8B45" />
            <line x1="0" y1="8" x2="16" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="8" y1="0" x2="8" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* 1. Curved "HERiZON" pink ribbon on top left */}
        <g transform="translate(68, 62) rotate(-14)">
          <text
            x="0"
            y="0"
            fontFamily="'Baloo 2', 'Montserrat', sans-serif"
            fontWeight="800"
            fontSize="18"
            fill="#E54BA0"
            stroke="#FFFFFF"
            strokeWidth="2"
            paintOrder="stroke fill"
          >
            HERiZON
          </text>
        </g>

        {/* 3 Hanging Stars */}
        <g id="hangingStars">
          <line x1="195" y1="56" x2="195" y2="88" stroke="#C9A042" strokeWidth="1.5" />
          <polygon points="195,88 198,95 205,96 200,101 201,108 195,104 189,108 190,101 185,96 192,95" fill="#F7D358" stroke="#8E6A1B" strokeWidth="1" />

          <line x1="228" y1="56" x2="228" y2="92" stroke="#C9A042" strokeWidth="1.5" />
          <polygon points="228,92 230,98 236,99 231,103 232,109 228,106 224,109 225,103 220,99 226,98" fill="#F2A582" stroke="#A85A36" strokeWidth="1" />

          <line x1="264" y1="56" x2="264" y2="86" stroke="#C9A042" strokeWidth="1.5" />
          <polygon points="264,86 267,93 274,94 269,99 270,106 264,102 258,106 259,99 254,94 261,93" fill="#F7D358" stroke="#8E6A1B" strokeWidth="1" />
        </g>

        {/* 2. Letter "e" (Blue/Purple Gingham Plaid) */}
        <g id="letter-e">
          <path
            d="M80 128C80 96 102 78 132 78C162 78 178 98 178 128V134H106C107 148 116 156 130 156C140 156 148 152 153 145H176C168 163 150 176 128 176C98 176 80 156 80 128ZM106 120H152C151 108 143 96 130 96C117 96 108 108 106 120Z"
            fill="url(#ginghamPurple)"
            stroke="#271C5A"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Decorative Stitching around "e" */}
          <path
            d="M84 128C84 99 104 82 132 82C159 82 174 100 174 128V131H109C110 145 118 153 130 153C139 153 146 149 150 143"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />

          {/* Siamese Cat curled at bottom of "e" */}
          <g transform="translate(68, 142)">
            <ellipse cx="28" cy="22" rx="14" ry="10" fill="#E6D3B3" stroke="#1E2B3C" strokeWidth="2.5" />
            <circle cx="40" cy="18" r="8" fill="#755239" stroke="#1E2B3C" strokeWidth="2.5" />
            <polygon points="36,12 38,7 42,12" fill="#42291A" stroke="#1E2B3C" strokeWidth="1.5" />
            <polygon points="42,12 46,7 47,13" fill="#42291A" stroke="#1E2B3C" strokeWidth="1.5" />
            {/* Sleeping Cat Eyes */}
            <path d="M37 18C38 17 40 17 41 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            {/* Front paws */}
            <ellipse cx="22" cy="30" rx="3" ry="5" fill="#42291A" stroke="#1E2B3C" strokeWidth="1.5" />
            {/* Tail looping back */}
            <path d="M14 26C8 28 4 22 8 16" stroke="#42291A" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        </g>

        {/* 3. Letter "m" (Pink Polka-Dot Cushion) */}
        <g id="letter-m1" transform="translate(170, 92)">
          <path
            d="M8 82V28H28V36C34 29 44 26 54 26C66 26 74 32 78 40C84 31 96 26 108 26C124 26 134 36 134 54V82H112V56C112 47 107 43 99 43C91 43 85 49 85 58V82H63V56C63 47 58 43 50 43C42 43 36 49 36 58V82H8Z"
            fill="url(#pinkPolka)"
            stroke="#922554"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Stitching on "m" */}
          <path
            d="M12 80V32H24V40C32 32 42 29 52 29C64 29 72 35 76 43"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />

          {/* 4 Sleeping Kittens atop the "m" curves */}
          {/* Kitten 1 (Grey) */}
          <g transform="translate(24, 14)">
            <ellipse cx="10" cy="12" rx="9" ry="7" fill="#C5C7CC" stroke="#1E2B3C" strokeWidth="2" />
            <polygon points="4,7 7,2 10,7" fill="#888B94" stroke="#1E2B3C" strokeWidth="1.5" />
            <polygon points="10,7 13,2 16,7" fill="#888B94" stroke="#1E2B3C" strokeWidth="1.5" />
            <path d="M8 12C9 11 11 11 12 12" stroke="#1E2B3C" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Kitten 2 (Black) */}
          <g transform="translate(44, 14)">
            <ellipse cx="10" cy="12" rx="9" ry="7" fill="#3D3A3F" stroke="#1E2B3C" strokeWidth="2" />
            <polygon points="4,7 7,2 10,7" fill="#252327" stroke="#1E2B3C" strokeWidth="1.5" />
            <polygon points="10,7 13,2 16,7" fill="#252327" stroke="#1E2B3C" strokeWidth="1.5" />
            <path d="M8 12C9 11 11 11 12 12" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Kitten 3 (Orange Tabby) */}
          <g transform="translate(64, 14)">
            <ellipse cx="10" cy="12" rx="9" ry="7" fill="#F49E42" stroke="#1E2B3C" strokeWidth="2" />
            <polygon points="4,7 7,2 10,7" fill="#D3751A" stroke="#1E2B3C" strokeWidth="1.5" />
            <polygon points="10,7 13,2 16,7" fill="#D3751A" stroke="#1E2B3C" strokeWidth="1.5" />
            <path d="M8 12C9 11 11 11 12 12" stroke="#1E2B3C" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Kitten 4 (White) */}
          <g transform="translate(84, 16)">
            <ellipse cx="10" cy="12" rx="9" ry="7" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="2" />
            <polygon points="4,7 7,2 10,7" fill="#F7A7BA" stroke="#1E2B3C" strokeWidth="1.5" />
            <polygon points="10,7 13,2 16,7" fill="#F7A7BA" stroke="#1E2B3C" strokeWidth="1.5" />
            <path d="M8 12C9 11 11 11 12 12" stroke="#1E2B3C" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        </g>

        {/* 4. Letter "â" (Yellow Quilted Fabric with Pink Chevron Hat) */}
        <g id="letter-a" transform="translate(316, 78)">
          {/* Puffy Pink Stitched Chevron Accent (^) */}
          <g transform="translate(24, 0)">
            <path
              d="M10 28L30 8L50 28L42 34L30 20L18 34L10 28Z"
              fill="#E86C98"
              stroke="#8A2352"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M14 26L30 13L46 26"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              fill="none"
            />
          </g>

          {/* Blue plaid fabric ribbon tape on top right */}
          <rect
            x="76"
            y="-4"
            width="36"
            height="16"
            rx="2"
            transform="rotate(22 76 -4)"
            fill="url(#ginghamPurple)"
            stroke="#271C5A"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Main "a" Body */}
          <path
            d="M12 96C12 68 34 50 62 50C76 50 86 56 92 64V52H114V146H92V136C86 144 76 150 62 150C34 150 12 132 12 96ZM92 98C92 84 82 72 66 72C50 72 40 84 40 98C40 114 50 126 66 126C82 126 92 114 92 98Z"
            fill="url(#yellowPolka)"
            stroke="#A37C12"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Stitch details around "a" */}
          <circle cx="66" cy="98" r="28" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </g>

        {/* 5. Letter "m" (Green Gingham with Poodle Puppy) */}
        <g id="letter-m2" transform="translate(422, 118)">
          <path
            d="M8 82V28H28V36C34 29 44 26 54 26C66 26 74 32 78 40C84 31 96 26 108 26C124 26 134 36 134 54V82H112V56C112 47 107 43 99 43C91 43 85 49 85 58V82H63V56C63 47 58 43 50 43C42 43 36 49 36 58V82H8Z"
            fill="url(#greenGingham)"
            stroke="#1D5E24"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* 3 Little Puppies peeking inside the "m" arches */}
          <g transform="translate(4, 28)">
            <ellipse cx="6" cy="10" rx="6" ry="5" fill="#F4EADB" stroke="#1E2B3C" strokeWidth="1.5" />
            <circle cx="4" cy="9" r="0.8" fill="#1E2B3C" />
            <circle cx="8" cy="9" r="0.8" fill="#1E2B3C" />

            <ellipse cx="6" cy="24" rx="6" ry="5" fill="#D3A87D" stroke="#1E2B3C" strokeWidth="1.5" />
            <circle cx="4" cy="23" r="0.8" fill="#1E2B3C" />
            <circle cx="8" cy="23" r="0.8" fill="#1E2B3C" />

            <ellipse cx="6" cy="38" rx="6" ry="5" fill="#F4EADB" stroke="#1E2B3C" strokeWidth="1.5" />
            <circle cx="4" cy="37" r="0.8" fill="#1E2B3C" />
            <circle cx="8" cy="37" r="0.8" fill="#1E2B3C" />
          </g>

          {/* Fluffy Beige Poodle Puppy peeking over the right of "m" */}
          <g transform="translate(108, -12)">
            {/* Poodle Fluffy Head */}
            <circle cx="34" cy="36" r="24" fill="#F5D6B5" stroke="#1E2B3C" strokeWidth="3" />
            {/* Floppy Left Ear */}
            <ellipse cx="12" cy="32" rx="10" ry="18" fill="#E8BD92" stroke="#1E2B3C" strokeWidth="2.5" />
            {/* Floppy Right Ear */}
            <ellipse cx="56" cy="34" rx="10" ry="18" fill="#E8BD92" stroke="#1E2B3C" strokeWidth="2.5" />
            {/* Poodle Eyes */}
            <ellipse cx="26" cy="32" rx="3" ry="4" fill="#1E2B3C" />
            <ellipse cx="42" cy="32" rx="3" ry="4" fill="#1E2B3C" />
            <circle cx="27" cy="30" r="1.2" fill="#FFFFFF" />
            <circle cx="43" cy="30" r="1.2" fill="#FFFFFF" />
            {/* Snout & Nose */}
            <ellipse cx="34" cy="42" rx="8" ry="6" fill="#FFFFFF" stroke="#1E2B3C" strokeWidth="1.5" />
            <ellipse cx="34" cy="40" rx="3" ry="2" fill="#1E2B3C" />
            <path d="M34 42V45M32 45C33 46 35 46 36 45" stroke="#1E2B3C" strokeWidth="1.5" strokeLinecap="round" />
            {/* Poodle Front Paws resting on letter */}
            <ellipse cx="16" cy="54" rx="7" ry="6" fill="#F5D6B5" stroke="#1E2B3C" strokeWidth="2" />
            <ellipse cx="36" cy="56" rx="7" ry="6" fill="#F5D6B5" stroke="#1E2B3C" strokeWidth="2" />
          </g>

          {/* Sparklers & Stars bursting on top right */}
          <g transform="translate(102, -50)">
            <polygon points="12,18 14,23 20,24 16,28 17,34 12,31 7,34 8,28 4,24 10,23" fill="#E86C98" stroke="#8A2352" strokeWidth="1" />
            <polygon points="46,14 48,18 53,19 49,22 50,27 46,24 42,27 43,22 39,19 44,18" fill="#F7D358" stroke="#8E6A1B" strokeWidth="1" />
            <line x1="28" y1="42" x2="18" y2="28" stroke="#E54BA0" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="32" y1="42" x2="32" y2="18" stroke="#3FC7C2" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="36" y1="42" x2="46" y2="24" stroke="#FBD449" strokeWidth="1.5" strokeDasharray="2 2" />
          </g>
        </g>

        {/* 6. Subtitle at bottom: “GOM CHÚT CŨ, MAY THÀNH CHÚT THƯƠNG” with soft paw prints */}
        {showSubtitle && (
          <g transform="translate(270, 218)">
            {/* Subtle pastel paw prints */}
            <circle cx="-40" cy="-6" r="4" fill="#FBE8C2" opacity="0.6" />
            <circle cx="40" cy="-6" r="4" fill="#FBE8C2" opacity="0.6" />

            <text
              x="0"
              y="0"
              textAnchor="middle"
              fontFamily="'Be Vietnam Pro', 'Montserrat', sans-serif"
              fontWeight="900"
              fontSize="16"
              letterSpacing="3.5"
              fill="#1E2B3C"
            >
              “GOM CHÚT CŨ, MAY THÀNH CHÚT THƯƠNG”
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
