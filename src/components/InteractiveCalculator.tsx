import React, { useState } from 'react';
import { Calculator, Flame, ArrowRight } from 'lucide-react';
import { PRODUCT, handleCheckoutRedirect } from '../constants/product';

export const InteractiveCalculator: React.FC = () => {
  const [targetWeight, setTargetWeight] = useState<number>(100);
  const [barWeight, setBarWeight] = useState<number>(20);

  // Calculate plate distribution per side
  const weightPerSide = Math.max(0, (targetWeight - barWeight) / 2);
  
  const plates = [25, 20, 15, 10, 5, 2.5, 1.25];
  const plateBreakdown: { plate: number; count: number }[] = [];
  let remainingWeight = weightPerSide;

  for (const plate of plates) {
    if (remainingWeight >= plate) {
      const count = Math.floor(remainingWeight / plate);
      plateBreakdown.push({ plate, count });
      remainingWeight = Math.round((remainingWeight - count * plate) * 100) / 100;
    }
  }

  // 5-Stage Warm-Up Ramp (Matches Sheet 7 in workbook)
  const warmUpRamp = [
    { stage: "Set 1 (Empty Bar)", percent: "0%", weight: barWeight, reps: "10 reps" },
    { stage: "Set 2 (Warm-up)", percent: "40%", weight: Math.round((barWeight + (targetWeight - barWeight) * 0.4) / 2.5) * 2.5, reps: "6 reps" },
    { stage: "Set 3 (Ramp)", percent: "60%", weight: Math.round((barWeight + (targetWeight - barWeight) * 0.6) / 2.5) * 2.5, reps: "4 reps" },
    { stage: "Set 4 (Primer)", percent: "80%", weight: Math.round((barWeight + (targetWeight - barWeight) * 0.8) / 2.5) * 2.5, reps: "2 reps" },
    { stage: "Working Sets", percent: "100%", weight: targetWeight, reps: "Work Target" },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#101419] relative border-t border-[#28312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151B21] border border-[#28312C] text-[#B7FF35] text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>INTERACTIVE WORKBOOK PREVIEW</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#F5F7F2] uppercase tracking-tight">
            TEST THE <span className="text-[#B7FF35]">PLATE & WARM-UP CALCULATOR</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1AAA3] max-w-xl mx-auto">
            Try a live interactive preview of Sheet 7 from GYM PROGRESS OS. Enter your target working weight and let the math calculate your plate loading instantly.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="max-w-4xl mx-auto bg-[#151B21] border border-[#28312C] rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1AAA3] mb-2 font-medium">
                  Target Working Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={20}
                    max={400}
                    step={2.5}
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(Math.max(20, Number(e.target.value) || 20))}
                    className="w-full bg-[#101419] border border-[#28312C] focus:border-[#B7FF35] focus:ring-1 focus:ring-[#B7FF35] rounded-xl px-4 py-3 text-lg font-mono font-bold text-[#F5F7F2] outline-none transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[#737D76]">
                    KG
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1AAA3] mb-2 font-medium">
                  Barbell Weight
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBarWeight(20)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all border ${
                      barWeight === 20
                        ? 'bg-[#B7FF35] text-[#080A0D] border-[#B7FF35]'
                        : 'bg-[#101419] text-[#A1AAA3] border-[#28312C] hover:border-[#35423B]'
                    }`}
                  >
                    Standard (20 kg)
                  </button>
                  <button
                    onClick={() => setBarWeight(15)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all border ${
                      barWeight === 15
                        ? 'bg-[#B7FF35] text-[#080A0D] border-[#B7FF35]'
                        : 'bg-[#101419] text-[#A1AAA3] border-[#28312C] hover:border-[#35423B]'
                    }`}
                  >
                    Women's (15 kg)
                  </button>
                </div>
              </div>

              {/* Summary Metrics */}
              <div className="bg-[#101419] border border-[#28312C] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737D76]">Weight Per Side:</span>
                  <span className="text-[#B7FF35] font-bold text-sm">{weightPerSide} kg</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737D76]">Barbell:</span>
                  <span className="text-[#F5F7F2] font-semibold">{barWeight} kg</span>
                </div>
              </div>

              {/* Per-Side Plates Badge */}
              <div>
                <span className="block text-xs font-mono text-[#A1AAA3] uppercase mb-2">
                  Plates to load (per side):
                </span>
                <div className="flex flex-wrap gap-2">
                  {plateBreakdown.length > 0 ? (
                    plateBreakdown.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#1B232B] border border-[#B7FF35]/30 text-[#F5F7F2] text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
                      >
                        <span className="text-[#B7FF35] font-bold">{item.count}×</span>
                        <span>{item.plate} kg</span>
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-[#737D76] font-mono">Just empty barbell</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Warm-Up Ramp Table */}
            <div className="md:col-span-7 bg-[#101419] border border-[#28312C] rounded-xl p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#28312C]">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FFB547]" />
                  <span className="font-heading font-bold text-sm text-[#F5F7F2] uppercase">
                    5-Stage Warm-Up Ramp
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#45D483] bg-[#45D483]/10 px-2 py-0.5 rounded border border-[#45D483]/20">
                  Injury Prevention
                </span>
              </div>

              <div className="space-y-2.5">
                {warmUpRamp.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-mono ${
                      idx === 4
                        ? 'bg-[#B7FF35]/10 border-[#B7FF35]/40 text-[#F5F7F2]'
                        : 'bg-[#151B21] border-[#28312C] text-[#A1AAA3]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        idx === 4 ? 'bg-[#B7FF35] text-[#080A0D]' : 'bg-[#1B232B] text-[#737D76]'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className={idx === 4 ? 'font-bold text-[#F5F7F2]' : ''}>
                        {step.stage}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-[#737D76]">{step.reps}</span>
                      <span className={`font-bold ${idx === 4 ? 'text-[#B7FF35] text-sm' : 'text-[#F5F7F2]'}`}>
                        {step.weight} kg
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#28312C] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#737D76] font-mono">
                  This calculator is sheet #7 in the downloadable workbook.
                </span>
                <button
                  onClick={() => handleCheckoutRedirect('calculator_tool_cta')}
                  className="inline-flex items-center gap-2 bg-[#B7FF35] hover:bg-[#8DDB25] text-[#080A0D] font-heading font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all"
                >
                  <span>GET FULL OS — ₹{PRODUCT.price}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
