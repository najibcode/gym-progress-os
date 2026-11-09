import React, { useState } from 'react';
import { 
  Dumbbell, 
  TrendingUp, 
  Trophy, 
  Calculator, 
  HeartPulse, 
  Apple, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { WORKBOOK_MODULES, PRODUCT, handleCheckoutRedirect } from '../constants/product';
import { FeatureModulePreview } from './FeatureModulePreview';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#101419] relative border-t border-[#28312C]" id="features">
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B7FF35]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>CONFIRMED WORKBOOK CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            EVERYTHING YOU NEED TO <span className="text-[#B7FF35]">TRACK YOUR TRAINING.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-2xl mx-auto">
            Engineered from ground-truth biomechanics and strength training principles. Every worksheet serves a specific purpose in your training progression.
          </p>
        </div>

        {/* Feature Interactive Showcase (Tabs + Deep Dive Display) */}
        <div className="bg-[#151B21] border border-[#28312C] rounded-2xl p-4 sm:p-8 mb-16 shadow-2xl">
          
          {/* Tab Navigation Pill Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#28312C] no-scrollbar">
            {WORKBOOK_MODULES.map((module, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeTab === idx
                    ? 'bg-[#B7FF35] text-[#080A0D] shadow-[0_0_15px_rgba(183,255,53,0.3)]'
                    : 'bg-[#101419] text-[#A1AAA3] hover:text-[#F5F7F2] border border-[#28312C]'
                }`}
              >
                <span>{module.number}.</span>
                <span>{module.name}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Spotlight View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#1B232B] px-3 py-1 rounded-md text-xs font-mono text-[#B7FF35] border border-[#28312C]">
                <span>{WORKBOOK_MODULES[activeTab].badge}</span>
                <span className="text-[#737D76]">•</span>
                <span className="text-[#A1AAA3]">{WORKBOOK_MODULES[activeTab].category}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F7F2]">
                {WORKBOOK_MODULES[activeTab].name}
              </h3>

              <p className="text-sm sm:text-base text-[#A1AAA3] leading-relaxed">
                {WORKBOOK_MODULES[activeTab].description}
              </p>

              {/* Concrete Capabilities Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7F2]">
                  <div className="w-5 h-5 rounded-full bg-[#B7FF35]/15 flex items-center justify-center text-[#B7FF35] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Instant formula updates across all 15 sheets</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7F2]">
                  <div className="w-5 h-5 rounded-full bg-[#B7FF35]/15 flex items-center justify-center text-[#B7FF35] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Compatible with Microsoft Excel & Google Sheets</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F5F7F2]">
                  <div className="w-5 h-5 rounded-full bg-[#B7FF35]/15 flex items-center justify-center text-[#B7FF35] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Zero coding or spreadsheet experience needed</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleCheckoutRedirect('feature_tab_cta')}
                  className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-md"
                >
                  <span>GET FULL WORKBOOK — ₹{PRODUCT.price}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Native Interactive Sheet Preview (Zero Screenshot Clutter) */}
            <div className="lg:col-span-7">
              <FeatureModulePreview moduleName={WORKBOOK_MODULES[activeTab].name} />
            </div>

          </div>

        </div>

        {/* 6 Grid Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">01. Workout Log</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Record date, exercises, sets, repetitions, weights, and Reps In Reserve (RIR). Total training volume computes instantly.
            </p>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">02. Progressive Overload</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Monitor improvements in training performance and keep track of increasing training loads without keeping mental notes.
            </p>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">03. Personal Records</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Maintain a live record of all-time personal bests, estimated 1RMs, and key performance milestones with exact dates.
            </p>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <Calculator className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">04. Plate & Warm-Up Math</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Input target working weight and get immediate barbell side loading (20kg, 15kg, 10kg, etc.) and a 5-step warm-up ramp.
            </p>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">05. Recovery & Readiness</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Check in daily with sleep hours, quality, muscle soreness, and energy levels to calculate a composite readiness score (0-100).
            </p>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] p-6 rounded-2xl hover:border-[#B7FF35]/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#B7FF35] mb-4">
              <Apple className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">06. Nutrition & Protein Scaling</h4>
            <p className="text-sm text-[#A1AAA3] leading-relaxed">
              Log daily calories and macros. Protein targets automatically scale up or down based on your latest logged bodyweight.
            </p>
          </div>
        </div>

        {/* Mid-Page Strategic CTA */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('features_bottom_cta')}
            className="inline-flex items-center gap-3 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(183,255,53,0.3)]"
          >
            <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

