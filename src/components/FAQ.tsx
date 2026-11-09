import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#080A0D] relative border-t border-[#28312C]" id="faq">
      {/* Background Accent Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B7FF35]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            EVERYTHING YOU NEED TO KNOW <span className="text-[#B7FF35]">BEFORE YOU START.</span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-xl mx-auto">
            Clear, honest answers to help you make an informed decision without hype or gimmicks.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#151B21] border border-[#28312C] hover:border-[#35423B] rounded-2xl overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF35]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#F5F7F2]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#1B232B] border border-[#28312C] flex items-center justify-center text-[#A1AAA3] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#B7FF35] border-[#B7FF35]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#A1AAA3] leading-relaxed border-t border-[#28312C]/60 animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Post-FAQ Confidence Row */}
        <div className="bg-[#101419] border border-[#28312C] rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-heading font-bold text-lg text-[#F5F7F2] mb-2">
            Ready to upgrade your gym routine?
          </h3>
          <p className="text-xs sm:text-sm text-[#A1AAA3] mb-6 max-w-md mx-auto">
            Join trainees who track their progressive overload with clarity and precision. One-time ₹{PRODUCT.price} payment.
          </p>
          <button
            onClick={() => handleCheckoutRedirect('faq_bottom_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(183,255,53,0.25)]"
          >
            <span>GET GYM PROGRESS OS — ₹{PRODUCT.price}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
