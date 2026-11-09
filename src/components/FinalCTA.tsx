import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Database, Download } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#080A0D] relative overflow-hidden border-t border-[#28312C]">
      {/* Intense Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#B7FF35]/10 rounded-full blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#B7FF35_1px,transparent_1px)] [background-size:24px_24px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-b from-[#151B21] to-[#101419] border-2 border-[#B7FF35]/30 rounded-3xl p-8 sm:p-14 text-center shadow-[0_0_60px_rgba(183,255,53,0.12)] overflow-hidden">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B232B] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>INSTANT DOWNLOAD ACCESS</span>
          </div>

          {/* Large Main Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#F5F7F2] uppercase tracking-tight leading-[1.08] max-w-3xl mx-auto mb-6">
            YOUR NEXT WORKOUT <br className="hidden sm:inline" />
            <span className="text-[#B7FF35] drop-shadow-[0_0_30px_rgba(183,255,53,0.4)]">
              DESERVES BETTER TRACKING.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#A1AAA3] max-w-xl mx-auto mb-8 leading-relaxed">
            Stop relying on memory. Start organizing your workouts, tracking your performance, and recording every milestone with GYM PROGRESS OS.
          </p>

          {/* Price Callout */}
          <div className="inline-flex items-baseline gap-3 mb-8 bg-[#080A0D]/70 px-6 py-3 rounded-2xl border border-[#28312C]">
            <span className="font-heading font-black text-4xl sm:text-5xl text-[#F5F7F2]">
              ₹{PRODUCT.price}
            </span>
            <span className="text-lg line-through text-[#737D76] font-mono">
              ₹{PRODUCT.referencePrice}
            </span>
            <span className="text-xs font-mono text-[#B7FF35] uppercase font-bold tracking-wider ml-1">
              One-Time
            </span>
          </div>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto mb-8">
            <button
              onClick={() => handleCheckoutRedirect('final_section_cta')}
              className="w-full group inline-flex items-center justify-center gap-3 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider py-4 sm:py-5 px-8 rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-[0_0_35px_rgba(183,255,53,0.35)] active:translate-y-0"
            >
              <span>GET GYM PROGRESS OS NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Supporting Trust Bullet Points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#737D76] pt-4 border-t border-[#28312C]/60">
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#B7FF35]" />
              <span className="text-[#A1AAA3]">Digital Excel Workbook (.xlsx)</span>
            </div>
            <span className="text-[#28312C] hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#45D483]" />
              <span className="text-[#A1AAA3]">Instant Secure Delivery</span>
            </div>
            <span className="text-[#28312C] hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#45D483]" />
              <span className="text-[#A1AAA3]">Official Razorpay Checkout</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

