import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA, PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101419] relative border-t border-[#28312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>SIDE-BY-SIDE BREAKDOWN</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            RANDOM NOTES <span className="text-[#B7FF35]">VS. STRUCTURED PROGRESS.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-xl mx-auto">
            See the concrete difference between relying on scattered memory and adopting a unified, automated Excel tracking system.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block max-w-4xl mx-auto bg-[#151B21] border border-[#28312C] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#28312C] bg-[#1B232B]">
                <th className="py-4 px-6 font-mono text-xs font-bold text-[#A1AAA3] uppercase tracking-wider w-1/3">
                  Dimension
                </th>
                <th className="py-4 px-6 font-mono text-xs font-bold text-[#737D76] uppercase tracking-wider w-1/3">
                  Random Notes & Memory
                </th>
                <th className="py-4 px-6 font-mono text-xs font-bold text-[#B7FF35] uppercase tracking-wider w-1/3 bg-[#B7FF35]/5 border-l border-[#28312C]">
                  GYM PROGRESS OS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#28312C]/60 text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1B232B]/50 transition-colors">
                  <td className="py-4 px-6 font-heading font-semibold text-[#F5F7F2]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-[#737D76] flex items-center gap-2.5">
                    <X className="w-4 h-4 text-[#FF5F56] shrink-0" />
                    <span>{row.randomNotes}</span>
                  </td>
                  <td className="py-4 px-6 text-[#F5F7F2] font-medium bg-[#B7FF35]/5 border-l border-[#28312C]">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#B7FF35] shrink-0" />
                      <span>{row.gymProgressOs}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4 mb-12">
          {COMPARISON_DATA.map((row, idx) => (
            <div key={idx} className="bg-[#151B21] border border-[#28312C] rounded-xl p-5 space-y-3">
              <div className="font-heading font-bold text-sm text-[#F5F7F2] border-b border-[#28312C] pb-2">
                {row.feature}
              </div>
              
              <div className="flex items-start gap-2.5 text-xs text-[#737D76]">
                <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#737D76] block">Random Notes:</span>
                  <span>{row.randomNotes}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#F5F7F2] bg-[#B7FF35]/5 p-2.5 rounded-lg border border-[#B7FF35]/20">
                <Check className="w-4 h-4 text-[#B7FF35] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#B7FF35] font-semibold block">GYM PROGRESS OS:</span>
                  <span className="font-medium">{row.gymProgressOs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => handleCheckoutRedirect('comparison_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200"
          >
            <span>SWITCH TO STRUCTURED TRACKING — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
