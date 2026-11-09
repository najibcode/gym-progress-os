import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const ProductIntro: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      title: '01. Raw Logging Input',
      desc: 'You enter just three numbers: Weight, Reps, and Reps in Reserve.',
      tag: 'Zero Friction',
      preview: {
        title: 'Daily Workout Log',
        rows: [
          { col1: 'Bench Press', col2: 'Chest', col3: '80.0 kg', col4: '6 reps', col5: '1 Rep Left' },
          { col1: 'Incline DB Press', col2: 'Chest', col3: '32.0 kg', col4: '8 reps', col5: '2 Reps Left' },
          { col1: 'Barbell Row', col2: 'Back', col3: '75.0 kg', col4: '8 reps', col5: '2 Reps Left' },
        ],
      },
    },
    {
      title: '02. Real-Time Math Engine',
      desc: 'Formulas check the Exercise Library and calculate total volume & estimated max lifts instantly.',
      tag: '100% Automated',
      preview: {
        title: 'Formula Processor',
        formulas: [
          { name: 'Estimated Max Lift', formula: '= Weight * (1 + Reps / 30)', result: '96.0 kg' },
          { name: 'Set Volume Load', formula: '= Weight * Reps * Sets', result: '1,440 kg' },
          { name: 'Muscle Group Lookup', formula: '= XLOOKUP(Exercise, Library, MuscleGroup)', result: 'Chest' },
        ],
      },
    },
    {
      title: '03. Progressive Overload Detection',
      desc: 'Compares your latest session with your baseline history to confirm strength progression.',
      tag: 'Continuous Gains',
      preview: {
        title: 'Overload Comparator',
        comparison: [
          { metric: 'First Session Max Lift', val: '76.7 kg', date: 'Session 1' },
          { metric: 'Latest Session Max Lift', val: '80.0 kg', date: 'Session 12' },
          { metric: 'Net Strength Gain', val: '+4.3 kg (+5.6%)', status: 'Upward Trend' },
          { metric: 'Suggested Next Weight', val: '82.5 kg (+2.5 kg)', status: 'Auto-Calculated' },
        ],
      },
    },
    {
      title: '04. Executive Dashboard & AI Prompt',
      desc: 'Summarizes weekly sets per muscle group and formats data ready for ChatGPT/Claude analysis.',
      tag: 'Intelligence Hub',
      preview: {
        title: 'Weekly AI Analysis Generator',
        promptText: '"Analyze my gym progress using the data below. Focus on trends, consistency, strength progression, volume by muscle group, and suggest adjustments for next week..."',
      },
    },
  ];

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
            <Cpu className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>HOW THE SYSTEM OPERATES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7F2] uppercase tracking-tight leading-tight">
            MEET YOUR NEW <span className="text-[#B7FF35]">GYM TRACKING SYSTEM.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1AAA3] max-w-2xl mx-auto">
            GYM PROGRESS OS brings your workout tracking and training records into one organized Excel workbook. Designed for lifters who prioritize precision, progress, and full data ownership.
          </p>
        </div>

        {/* Native Architecture Pipeline (Zero Image Placeholders) */}
        <div className="bg-[#101419] border border-[#28312C] rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Stages Selector */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-[#B7FF35] font-semibold uppercase tracking-wider mb-2">
                4-Stage Data Pipeline Architecture:
              </div>
              
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-[#151B21] border-[#B7FF35] shadow-[0_0_15px_rgba(183,255,53,0.15)]'
                        : 'bg-[#101419] border-[#28312C] hover:border-[#35423B]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-heading font-bold text-sm ${isActive ? 'text-[#F5F7F2]' : 'text-[#A1AAA3]'}`}>
                        {stage.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                        isActive ? 'bg-[#B7FF35] text-[#080A0D]' : 'bg-[#1B232B] text-[#737D76]'
                      }`}>
                        {stage.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#737D76] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Live Stage Interactive Engine Visualizer */}
            <div className="lg:col-span-7 bg-[#151B21] border border-[#28312C] rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#28312C] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF35] animate-pulse"></span>
                  <span className="text-[#F5F7F2] font-bold uppercase">{stages[activeStage].preview.title}</span>
                </div>
                <span className="text-[#737D76]">Live Sheet Simulation</span>
              </div>

              {/* Stage 0: Raw Logging */}
              {activeStage === 0 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#A1AAA3] mb-2">
                    Enter one row per set — muscle group and volume auto-compute:
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-[#28312C] text-[#737D76] text-[10px] uppercase">
                          <th className="pb-2">Exercise</th>
                          <th className="pb-2">Muscle</th>
                          <th className="pb-2">Weight</th>
                          <th className="pb-2">Reps</th>
                          <th className="pb-2">Effort</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#28312C]/40 text-[#F5F7F2]">
                        {stages[0].preview.rows?.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#1B232B]/60">
                            <td className="py-2 font-bold text-[#B7FF35]">{row.col1}</td>
                            <td className="py-2 text-[#A1AAA3]">{row.col2}</td>
                            <td className="py-2">{row.col3}</td>
                            <td className="py-2">{row.col4}</td>
                            <td className="py-2 text-[#45D483]">{row.col5}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-[#101419] p-3 rounded-lg border border-[#28312C] text-[11px] font-mono text-[#A1AAA3] flex items-center justify-between">
                    <span>Session Status:</span>
                    <span className="text-[#B7FF35] font-bold">14 Sets Logged • 8,420 kg Total Volume</span>
                  </div>
                </div>
              )}

              {/* Stage 1: Math Engine */}
              {activeStage === 1 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#A1AAA3] mb-2">
                    Transparent mathematical formulas running directly in Excel:
                  </div>
                  <div className="space-y-2.5">
                    {stages[1].preview.formulas?.map((f, fIdx) => (
                      <div key={fIdx} className="bg-[#101419] border border-[#28312C] p-3 rounded-lg font-mono">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-[#F5F7F2] font-semibold">{f.name}</span>
                          <span className="text-[#B7FF35] font-bold text-sm">{f.result}</span>
                        </div>
                        <div className="text-[10px] text-[#737D76] bg-[#151B21] px-2 py-1 rounded inline-block">
                          {f.formula}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage 2: Progressive Overload */}
              {activeStage === 2 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#A1AAA3] mb-2">
                    Auto-generated comparison per exercise from your Library:
                  </div>
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    {stages[2].preview.comparison?.map((c, cIdx) => (
                      <div key={cIdx} className="bg-[#101419] border border-[#28312C] p-3 rounded-lg">
                        <div className="text-[10px] text-[#737D76] uppercase">{c.metric}</div>
                        <div className="font-heading font-black text-base text-[#F5F7F2] mt-0.5">{c.val}</div>
                        <div className="text-[10px] text-[#B7FF35] mt-1">{c.date || c.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage 3: AI Analysis */}
              {activeStage === 3 && (
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#A1AAA3] mb-2">
                    Pre-formatted copy-paste prompt dynamically generated for ChatGPT or Claude:
                  </div>
                  <div className="bg-[#101419] border border-[#28312C] p-4 rounded-xl font-mono text-xs text-[#B7FF35] leading-relaxed italic">
                    {stages[3].preview.promptText}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#737D76]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
                    <span>Includes weekly volume tables, recovery scores, and workout metrics.</span>
                  </div>
                </div>
              )}

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
