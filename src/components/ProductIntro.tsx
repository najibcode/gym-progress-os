import React from 'react';
import { LayoutDashboard, Target, Zap, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#080A0D] relative overflow-hidden" id="preview">
      {/* Background Glow */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#B7FF35]/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>EXECUTIVE SPREADSHEET ARCHITECTURE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            MEET YOUR NEW <span className="text-[#B7FF35]">GYM TRACKING SYSTEM.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1AAA3] max-w-2xl mx-auto">
            GYM PROGRESS OS brings your workout tracking and training records into one organized Excel workbook. Designed for lifters who prioritize precision, progress, and full data ownership.
          </p>
        </div>

        {/* Feature Callouts Around Centerpiece Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Feature Callouts */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="bg-[#151B21] border border-[#28312C] p-5 rounded-xl hover:border-[#B7FF35]/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F5F7F2] mb-1">
                Progressive Overload Engine
              </h3>
              <p className="text-xs text-[#A1AAA3] leading-relaxed">
                Automated formulas compare your baseline session to your latest workout. Always know if you gained strength.
              </p>
            </div>

            <div className="bg-[#151B21] border border-[#28312C] p-5 rounded-xl hover:border-[#B7FF35]/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F5F7F2] mb-1">
                Personal Records (PR) Board
              </h3>
              <p className="text-xs text-[#A1AAA3] leading-relaxed">
                Every top set is analyzed to detect new peak weights, max reps, and estimated 1-Rep Max milestones.
              </p>
            </div>
          </div>

          {/* Center Showcase Mockup (Large Screenshot) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl bg-[#101419] border border-[#28312C] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#28312C] text-xs font-mono text-[#737D76]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF35]"></span>
                  <span className="text-[#F5F7F2] font-semibold">MAIN DASHBOARD</span>
                </div>
                <span>Excel 2026 Compatible</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border border-[#28312C] aspect-[16/11]">
                <img
                  src="/assets/images/gym-cover.webp"
                  alt="GYM PROGRESS OS Central Dashboard showing key lifts, volume calculations, and PR trackers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F5F7F2] bg-[#080A0D]/80 backdrop-blur-md px-3 py-2 rounded-lg border border-[#28312C]">
                  <span>Log once. Understand everything.</span>
                  <span className="text-[#B7FF35] font-semibold">15 Interlinked Sheets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Callouts */}
          <div className="lg:col-span-3 space-y-6 order-3">
            <div className="bg-[#151B21] border border-[#28312C] p-5 rounded-xl hover:border-[#B7FF35]/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-3">
                <LineChart className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F5F7F2] mb-1">
                Volume & Set Analytics
              </h3>
              <p className="text-xs text-[#A1AAA3] leading-relaxed">
                Breakdown of weekly training sets across chest, back, shoulders, arms, quads, and hamstrings to prevent junk volume.
              </p>
            </div>

            <div className="bg-[#151B21] border border-[#28312C] p-5 rounded-xl hover:border-[#B7FF35]/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F5F7F2] mb-1">
                Zero Monthly Subscription
              </h3>
              <p className="text-xs text-[#A1AAA3] leading-relaxed">
                No apps that shut down or charge monthly fees. Your spreadsheet runs 100% offline on your laptop or phone forever.
              </p>
            </div>
          </div>

        </div>

        {/* Quick Spec Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#101419] border border-[#28312C] rounded-2xl text-center mb-10">
          <div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#B7FF35]">15</div>
            <div className="text-xs text-[#A1AAA3] mt-1 uppercase tracking-wider font-mono">Specialized Sheets</div>
          </div>
          <div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#F5F7F2]">100%</div>
            <div className="text-xs text-[#A1AAA3] mt-1 uppercase tracking-wider font-mono">Formula Automated</div>
          </div>
          <div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#45D483]">Offline</div>
            <div className="text-xs text-[#A1AAA3] mt-1 uppercase tracking-wider font-mono">Private & Secure</div>
          </div>
          <div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#B7FF35]">₹{PRODUCT.price}</div>
            <div className="text-xs text-[#A1AAA3] mt-1 uppercase tracking-wider font-mono">One-Time Investment</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('product_intro_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-md"
          >
            <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
