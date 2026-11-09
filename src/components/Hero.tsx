import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Database } from 'lucide-react';
import { PRODUCT, CORE_BENEFITS, handleCheckoutRedirect } from '../constants/product';
import { LiveDashboardMockup } from './LiveDashboardMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#080A0D]">
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

          {/* RIGHT COLUMN: Pixel-Perfect Proportional Live Dashboard UI (No Generic Images) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Surrounding Ambient Glow */}
              <div 
                className="absolute -inset-1.5 bg-gradient-to-r from-[#B7FF35]/30 to-[#8DDB25]/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"
                aria-hidden="true"
              />

              {/* Native Live Dashboard Mockup */}
              <LiveDashboardMockup />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
