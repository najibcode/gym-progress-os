import React from 'react';
import { X, Check, ArrowRight, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const TransformationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#101419] relative border-t border-b border-[#28312C]">
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B7FF35]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>THE REALITY OF GYM PROGRESS</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            WHY MOST PEOPLE <span className="text-[#B7FF35]">PLATEAU.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1AAA3]">
            Effort without measurement leads to wasted months. See what happens when you replace scattered notes with a quantifiable tracking system.
          </p>
        </div>

        {/* Side-by-Side High Impact Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Card 1: The Old Way (Random Notes) */}
          <div className="bg-[#151B21] border border-[#28312C] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#28312C]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5F56]/10 border border-[#FF5F56]/30 flex items-center justify-center text-[#FF5F56]">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#F5F7F2]">
                    Random Notes & Memory
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#FF5F56] bg-[#FF5F56]/10 px-2.5 py-0.5 rounded border border-[#FF5F56]/20 font-bold">
                  Stalled Gains
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#A1AAA3]">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                  <span><strong>Guessing last week’s weights:</strong> You forget what you lifted, resulting in zero progressive overload.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                  <span><strong>Scattered logs:</strong> Workout details are lost across Apple Notes, paper scraps, or text messages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                  <span><strong>No volume or 1RM math:</strong> You train hard but have no idea if your total weekly volume is increasing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                  <span><strong>Subscription trap:</strong> Generic fitness apps demand ₹800+/month just to log basic sets.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#28312C]/60 text-[11px] font-mono text-[#737D76]">
              Result: Inconsistent progress and wasted gym effort.
            </div>
          </div>

          {/* Card 2: The New Way (GYM PROGRESS OS) */}
          <div className="relative bg-gradient-to-b from-[#151B21] to-[#1B232B] border-2 border-[#B7FF35]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(183,255,53,0.12)]">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#B7FF35] text-[#080A0D] text-[10px] font-heading font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              THE PROVEN SYSTEM
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#28312C]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#B7FF35]/15 border border-[#B7FF35]/40 flex items-center justify-center text-[#B7FF35]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#F5F7F2]">
                    GYM PROGRESS OS
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#B7FF35] bg-[#B7FF35]/10 px-2.5 py-0.5 rounded border border-[#B7FF35]/20 font-bold">
                  Predictable Results
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#F5F7F2]">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#B7FF35]/20 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Automated progressive overload:</strong> Instantly compares your baseline to current lifts with suggested next loads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#B7FF35]/20 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>One clean workbook:</strong> 15 automated worksheets interlinked in one offline `.xlsx` spreadsheet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#B7FF35]/20 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Live PR leaderboard:</strong> Automatic estimated 1-Rep Max (e1RM) and volume tracking for every set.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#B7FF35]/20 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>₹199 one-time investment:</strong> No monthly subscription fees. Keep and use it on your devices forever.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#28312C]/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#45D483] font-medium">
                ✓ Full Microsoft Excel & Google Sheets support
              </span>
              <span className="text-xs font-mono font-bold text-[#B7FF35]">
                ₹{PRODUCT.price} Only
              </span>
            </div>

          </div>

        </div>

        {/* Minimal Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('transformation_section_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>SWITCH TO STRUCTURED TRACKING — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
