import React from 'react';
import { CreditCard, FileSpreadsheet, PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, PRODUCT, handleCheckoutRedirect } from '../constants/product';

const stepIcons = [
  <CreditCard className="w-6 h-6 text-[#B7FF35]" />,
  <FileSpreadsheet className="w-6 h-6 text-[#B7FF35]" />,
  <PlayCircle className="w-6 h-6 text-[#B7FF35]" />,
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#080A0D] relative border-t border-[#28312C]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>FRICTIONLESS SETUP</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            GET STARTED IN <span className="text-[#B7FF35]">3 SIMPLE STEPS.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-xl mx-auto">
            From checkout to your first logged session in less than 2 minutes. No account creation, no password setups, no bloatware.
          </p>
        </div>

        {/* 3 Steps Horizontal Desktop / Stacked Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-[#151B21] border border-[#28312C] hover:border-[#B7FF35]/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#101419] border border-[#28312C] flex items-center justify-center shadow-inner">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#28312C] group-hover:text-[#B7FF35]/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading font-bold text-xl text-[#F5F7F2] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#A1AAA3] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Sub-tag */}
              <div className="pt-4 border-t border-[#28312C]/60 flex items-center gap-2 text-xs font-mono text-[#B7FF35]">
                <CheckCircle2 className="w-4 h-4 text-[#B7FF35] shrink-0" />
                <span>{step.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('how_it_works_cta')}
            className="inline-flex items-center gap-3 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(183,255,53,0.25)] hover:-translate-y-0.5"
          >
            <span>GET GYM PROGRESS OS TODAY — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
