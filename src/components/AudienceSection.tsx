import React from 'react';
import { Users, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCE, PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101419] relative border-t border-[#28312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>DESIGNED WITH PURPOSE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            BUILT FOR PEOPLE WHO TAKE <span className="text-[#B7FF35]">THEIR TRAINING SERIOUSLY.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-2xl mx-auto">
            Whether you are on your first month in the gym or have spent years fine-tuning compound lifts, GYM PROGRESS OS provides the structured framework your discipline deserves.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TARGET_AUDIENCE.map((audience, idx) => (
            <div
              key={idx}
              className="bg-[#151B21] border border-[#28312C] hover:border-[#B7FF35]/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-extrabold text-xl text-[#F5F7F2]">
                    {audience.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#B7FF35] bg-[#B7FF35]/10 px-2.5 py-1 rounded border border-[#B7FF35]/20 font-semibold">
                    {audience.persona}
                  </span>
                </div>

                <p className="text-sm text-[#A1AAA3] leading-relaxed mb-6">
                  {audience.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#28312C]/60">
                  {audience.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]">
                      <div className="w-4 h-4 rounded-full bg-[#B7FF35]/15 flex items-center justify-center text-[#B7FF35] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug text-[#A1AAA3]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Disclaimer Callout */}
        <div className="bg-[#151B21]/70 border border-[#28312C] rounded-2xl p-6 max-w-3xl mx-auto flex items-start gap-4 mb-10">
          <AlertCircle className="w-5 h-5 text-[#FFB547] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A1AAA3] leading-relaxed">
            <strong className="text-[#F5F7F2] block mb-1">Ethical Training Disclaimer:</strong>
            GYM PROGRESS OS is a rigorous organization and tracking tool designed to keep training metrics organized and visible. It does not replace proper training intensity, dietary nutrition, or biological recovery. Long-term physique and strength gains are the direct result of your consistency, disciplined execution, and patience.
          </div>
        </div>

        {/* Audience Section CTA */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('audience_section_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-md"
          >
            <span>JOIN DISCIPLINED LIFTERS — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
