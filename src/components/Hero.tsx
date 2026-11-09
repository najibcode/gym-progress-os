import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, TrendingUp, Award, Activity, Database } from 'lucide-react';
import { PRODUCT, CORE_BENEFITS, handleCheckoutRedirect } from '../constants/product';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080A0D]">
      {/* Background Radial Glow & Texture */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#B7FF35]/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute top-40 right-10 w-[400px] h-[400px] bg-[#8DDB25]/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#B7FF35_1px,transparent_1px)] [background-size:24px_24px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy & Conversion Elements */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
              <span>THE ULTIMATE GYM TRACKING SYSTEM</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F7F2] leading-[1.08] tracking-tight uppercase mb-6">
              STOP GUESSING.{' '}
              <span className="text-[#B7FF35] drop-shadow-[0_0_25px_rgba(183,255,53,0.35)]">
                START TRACKING YOUR PROGRESS.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg text-[#A1AAA3] leading-relaxed max-w-2xl mb-8 font-normal">
              Your workouts deserve more than random notes. Take control of your training with <strong className="text-[#F5F7F2] font-semibold">GYM PROGRESS OS</strong> — a powerful Excel-based system built to organize workouts, monitor progress, and track every milestone.
            </p>

            {/* Three Benefit Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-9">
              {CORE_BENEFITS.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2.5 bg-[#101419]/80 border border-[#28312C] px-3.5 py-2.5 rounded-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B7FF35] shrink-0" />
                  <span className="text-xs font-semibold text-[#F5F7F2] tracking-wide">
                    {benefit.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <button
                onClick={() => handleCheckoutRedirect('hero_primary_cta')}
                className="group inline-flex items-center justify-center gap-3 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(183,255,53,0.3)] active:translate-y-0"
              >
                <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-[#151B21] hover:bg-[#1B232B] text-[#A1AAA3] hover:text-[#F5F7F2] border border-[#28312C] hover:border-[#35423B] font-heading font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-200 text-center"
              >
                <span>EXPLORE FEATURES ↓</span>
              </a>
            </div>

            {/* Trust-Information Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#737D76] pt-1 border-t border-[#28312C]/60 w-full sm:w-auto">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#B7FF35]" />
                <span className="text-[#A1AAA3]">Digital Excel Workbook (.xlsx)</span>
              </div>
              <span className="text-[#28312C] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#45D483]" />
                <span className="text-[#A1AAA3]">One-Time Purchase (No Subscription)</span>
              </div>
              <span className="text-[#28312C] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B7FF35]"></span>
                <span className="text-[#F5F7F2] font-semibold">₹{PRODUCT.price} Only</span>
                <span className="line-through text-[#737D76] text-[11px]">₹{PRODUCT.referencePrice}</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic Premium Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Surrounding Ambient Glow */}
              <div 
                className="absolute -inset-1.5 bg-gradient-to-r from-[#B7FF35]/30 to-[#8DDB25]/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"
                aria-hidden="true"
              />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-[#101419] border border-[#28312C] p-3 sm:p-4 shadow-2xl overflow-hidden">
                
                {/* Mockup Titlebar (Excel Window Header) */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#28312C] px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
                    <span className="ml-2 font-mono text-[11px] text-[#A1AAA3] font-medium truncate max-w-[190px] sm:max-w-none">
                      Gym_Progress_OS_Ultimate_v2.xlsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#151B21] px-2 py-0.5 rounded border border-[#28312C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF35] animate-pulse"></span>
                    <span className="text-[10px] font-mono font-medium text-[#B7FF35] uppercase">v2.0 Active</span>
                  </div>
                </div>

                {/* Primary Workbook Screenshot */}
                <div className="relative rounded-xl overflow-hidden bg-[#080A0D] border border-[#28312C] aspect-[16/10] group">
                  <img
                    src="/assets/images/gym-cover.webp"
                    alt="GYM PROGRESS OS Dashboard Preview showing workout metrics, volume charts and strength records"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={768}
                    height={480}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Metric Badge 1 (Volume) */}
                  <div className="absolute bottom-3 left-3 bg-[#151B21]/90 backdrop-blur-md border border-[#28312C] rounded-lg p-2.5 flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded bg-[#B7FF35]/15 border border-[#B7FF35]/30 flex items-center justify-center text-[#B7FF35]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#737D76]">Total Volume</div>
                      <div className="text-xs font-bold text-[#F5F7F2]">4,835 kg <span className="text-[#45D483] text-[10px]">+12.4%</span></div>
                    </div>
                  </div>

                  {/* Floating Metric Badge 2 (PR) */}
                  <div className="absolute top-3 right-3 bg-[#151B21]/90 backdrop-blur-md border border-[#28312C] rounded-lg p-2.5 flex items-center gap-2.5 shadow-lg">
                    <div className="w-7 h-7 rounded bg-[#8DDB25]/15 border border-[#8DDB25]/30 flex items-center justify-center text-[#B7FF35]">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#737D76]">Bench e1RM</div>
                      <div className="text-xs font-bold text-[#B7FF35]">80.0 kg PR</div>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Ribbon: Real Sheet Tabs Preview */}
                <div className="mt-3 pt-2.5 border-t border-[#28312C] flex items-center justify-between text-[11px] font-mono text-[#737D76] overflow-x-auto gap-2 no-scrollbar">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-[#1B232B] text-[#B7FF35] border border-[#28312C]">Dashboard</span>
                    <span className="px-2 py-0.5 rounded bg-[#151B21] text-[#A1AAA3] hover:text-[#F5F7F2]">Workout Log</span>
                    <span className="px-2 py-0.5 rounded bg-[#151B21] text-[#A1AAA3] hover:text-[#F5F7F2]">Overload</span>
                    <span className="px-2 py-0.5 rounded bg-[#151B21] text-[#A1AAA3] hover:text-[#F5F7F2]">PR Board</span>
                    <span className="px-2 py-0.5 rounded bg-[#151B21] text-[#A1AAA3] hover:text-[#F5F7F2]">Plates</span>
                  </div>
                  <span className="text-[10px] text-[#A1AAA3] shrink-0 font-medium">+10 more sheets</span>
                </div>

              </div>

              {/* Sub-card: Live Micro Health Pill */}
              <div className="mt-3 bg-[#151B21] border border-[#28312C] rounded-xl p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#45D483]" />
                  <span className="text-[#A1AAA3]">Readiness Score (Sleep + Recovery):</span>
                </div>
                <span className="font-mono font-bold text-[#45D483] bg-[#45D483]/10 px-2 py-0.5 rounded border border-[#45D483]/20">
                  88 / 100
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
