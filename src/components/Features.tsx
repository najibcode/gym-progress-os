import React, { useState } from 'react';
import { 
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
            Built on proven gym principles. Every sheet gives you exactly what you need to track weights, lift heavier, and see real results week after week.
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

        {/* Strategic Mid-Page CTA */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('features_bottom_cta')}
            className="inline-flex items-center gap-3 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

