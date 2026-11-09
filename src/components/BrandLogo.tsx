import React from 'react';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Geometric Progress Mark (P + Ascending Overload Bars) */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#1B232B] to-[#101419] border border-[#28312C] flex items-center justify-center p-2 shadow-lg shadow-black/50 group-hover:border-[#B7FF35]/60 transition-all duration-300 relative overflow-hidden`}
      >
        {/* Subtle radial inner glow */}
        <div className="absolute inset-0 bg-[#B7FF35]/10 rounded-xl pointer-events-none" />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          {/* Ascending Stepped Progress Bars */}
          <rect x="4" y="19" width="4" height="9" rx="1.5" fill="#28312C" />
          <rect x="10" y="13" width="4" height="15" rx="1.5" fill="#45D483" />
          <rect x="16" y="8" width="4" height="20" rx="1.5" fill="#8DDB25" />
          
          {/* Bold Geometric "P" Monogram Cap */}
          <path
            d="M4 5C4 3.89543 4.89543 3 6 3H19C22.866 3 26 6.13401 26 10C26 13.866 22.866 17 19 17H10V27C10 28.1046 9.10457 29 8 29H6C4.89543 29 4 28.1046 4 27V5Z"
            fill="#B7FF35"
          />
          <path
            d="M10 8H18C19.6569 8 21 9.34315 21 11C21 12.6569 19.6569 14 18 14H10V8Z"
            fill="#080A0D"
          />
          {/* Performance Dot Accent */}
          <circle cx="26" cy="6" r="2" fill="#B7FF35" className="animate-pulse" />
        </svg>
      </div>

      {/* Brand & System Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-extrabold ${titleSizes[size]} tracking-wider text-[#F5F7F2] uppercase leading-none`}
          >
            PROGRESS LAB
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF35] shadow-[0_0_6px_#B7FF35]" />
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] tracking-widest text-[#B7FF35] uppercase font-mono font-bold">
              PROGRESS CLUB
            </span>
            <span className="text-[10px] text-[#737D76] font-mono">•</span>
            <span className="text-[10px] tracking-wider text-[#A1AAA3] uppercase font-mono">
              GYM PROGRESS OS
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
