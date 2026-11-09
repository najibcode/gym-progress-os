import React from 'react';
import { Check, ShieldCheck, Zap, Download, Lock, FileSpreadsheet, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const ProductPricing: React.FC = () => {
  const inclusions = [
    "GYM PROGRESS OS Ultimate Edition (.xlsx workbook)",
    "Executive Analytics Dashboard (Volume & 8-lift strength radar)",
    "Set-by-Set Workout Log with automatic volume math",
    "Automated Progressive Overload Engine & Load Suggester",
    "All-Time Personal Records (PR) Scoreboard & e1RM detector",
    "Weekly Workout Split & 4-Week Mesocycle Planner",
    "Plate & 5-Stage Warm-Up Ramp Calculator",
    "Pre-Configured Exercise Library (Compound & Isolation)",
    "Bodyweight, Circumference & BMI Tracker",
    "Nutrition & Dynamic Protein Scaling Tracker",
    "Recovery & Readiness Scorecard (0–100 daily index)",
    "Weekly AI Analysis Prompt (for ChatGPT & Claude)",
    "Full compatibility with Microsoft Excel & Google Sheets",
    "Lifetime personal license with 100% offline privacy",
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080A0D] relative border-t border-[#28312C]" id="pricing">
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B7FF35]/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            EVERYTHING INSIDE <span className="text-[#B7FF35]">GYM PROGRESS OS.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-xl mx-auto">
            Zero hidden fees. Zero recurring monthly charges. Own the complete 15-worksheet fitness architecture for less than the price of a single protein shake.
          </p>
        </div>

        {/* Pricing & Inclusion Main Container */}
        <div className="max-w-5xl mx-auto bg-[#101419] border border-[#28312C] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: What's Included Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs font-semibold text-[#B7FF35] uppercase tracking-wider">
                  COMPLETE BUNDLE OVERVIEW
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F7F2] mt-1">
                  15 Worksheets. Fully Automated.
                </h3>
                <p className="text-sm text-[#A1AAA3] mt-2 leading-relaxed">
                  Every formula is pre-built and cross-referenced. You get immediate access to the full, unlocked spreadsheet file with zero restrictions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]">
                    <div className="w-4 h-4 rounded-full bg-[#B7FF35]/15 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[#A1AAA3] leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#28312C] flex items-center gap-3 text-xs text-[#737D76]">
                <FileSpreadsheet className="w-4 h-4 text-[#B7FF35]" />
                <span>Format: .xlsx (Excel 2016+, Microsoft 365, Google Sheets, Excel for iOS/Android)</span>
              </div>
            </div>

            {/* Right Column: Prominent Price Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#151B21] border-2 border-[#B7FF35]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(183,255,53,0.15)] flex flex-col justify-between text-center">
                
                {/* One-Time Purchase Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 bg-[#B7FF35] text-[#080A0D] font-heading font-extrabold text-xs uppercase tracking-wider py-1 px-3.5 rounded-full mx-auto mb-6 shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>ONE-TIME PURCHASE</span>
                </div>

                {/* Product Name */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-[#A1AAA3] uppercase tracking-wider font-semibold">
                    {PRODUCT.brand}
                  </div>
                  <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F5F7F2] mt-0.5">
                    {PRODUCT.name}
                  </h4>
                  <div className="text-xs font-mono text-[#B7FF35] mt-1">
                    {PRODUCT.edition}
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-4 py-4 border-y border-[#28312C]/80 bg-[#101419]/60 rounded-xl">
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="font-heading font-black text-5xl text-[#F5F7F2] tracking-tight">
                      ₹{PRODUCT.price}
                    </span>
                    <span className="text-lg line-through text-[#737D76] font-mono">
                      ₹{PRODUCT.referencePrice}
                    </span>
                  </div>
                  <span className="block text-[11px] font-mono text-[#45D483] mt-1.5 font-medium">
                    Save ₹300 • Genuine Promotional Pricing
                  </span>
                </div>

                {/* Primary Purchase CTA */}
                <button
                  onClick={() => handleCheckoutRedirect('pricing_card_cta')}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(183,255,53,0.3)] mb-4"
                >
                  <Lock className="w-4 h-4 text-[#080A0D]" />
                  <span>UNLOCK GYM PROGRESS OS</span>
                  <ArrowRight className="w-4 h-4 text-[#080A0D]" />
                </button>

                {/* Supporting Security & Delivery Notes */}
                <div className="space-y-2 text-[11px] text-[#737D76]">
                  <div className="flex items-center justify-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#B7FF35]" />
                    <span>Instant Digital Download Access</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#45D483]" />
                    <span>Secure 256-Bit Razorpay Checkout (UPI, Cards, NetBanking)</span>
                  </div>
                  <p className="text-[10px] text-[#A1AAA3]/70 pt-1">
                    Digital product. No physical item will be shipped.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
