import React from 'react';
import { HelpCircle, TrendingDown, FileQuestion, BarChart3, ArrowRight } from 'lucide-react';
import { PROBLEM_CARDS, handleCheckoutRedirect } from '../constants/product';

const iconMap = {
  HelpCircle: HelpCircle,
  TrendingDown: TrendingDown,
  FileQuestion: FileQuestion,
  BarChart3: BarChart3,
};

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#101419] relative border-t border-b border-[#28312C]">
      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B7FF35]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>THE REALITY CHECK</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            YOU GO TO THE GYM.{' '}
            <span className="text-[#B7FF35]">
              BUT ARE YOU ACTUALLY TRACKING YOUR PROGRESS?
            </span>
          </h2>
          <p className="mt-4 text-base text-[#A1AAA3] max-w-xl mx-auto">
            Consistency without measurement leads to wasted months. Most gym-goers train hard but remain trapped in the same repetitive cycle.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PROBLEM_CARDS.map((card) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap] || HelpCircle;
            return (
              <div
                key={card.id}
                className="group relative bg-[#151B21] hover:bg-[#1B232B] border border-[#28312C] hover:border-[#B7FF35]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#737D76] group-hover:text-[#B7FF35] transition-colors">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#101419] border border-[#28312C] group-hover:border-[#B7FF35]/30 flex items-center justify-center text-[#A1AAA3] group-hover:text-[#B7FF35] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-lg text-[#F5F7F2] mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#A1AAA3] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-[#28312C]/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#737D76] uppercase tracking-wider">
                    Problem
                  </span>
                  <span className="text-[11px] font-mono font-medium text-[#FFB547] bg-[#FFB547]/10 px-2 py-0.5 rounded border border-[#FFB547]/20">
                    {card.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Banner Hook */}
        <div className="max-w-2xl mx-auto text-center bg-[#151B21]/60 border border-[#28312C] rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-lg sm:text-xl font-heading font-bold text-[#F5F7F2] mb-4">
            “Your effort deserves a system that keeps up with it.”
          </p>
          <p className="text-sm text-[#A1AAA3] mb-6 max-w-lg mx-auto">
            Stop guessing weights or hoping you improved. Replace scattered notes with a quantifiable Excel framework designed specifically for progressive overload.
          </p>
          <button
            onClick={() => handleCheckoutRedirect('problem_section_cta')}
            className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(183,255,53,0.25)]"
          >
            <span>UPGRADE YOUR WORKOUT TRACKING — ₹199</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

