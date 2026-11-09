import React from 'react';
import { Dumbbell, TrendingUp, Trophy, Layout, Calculator, Layers, Check } from 'lucide-react';

interface FeatureModulePreviewProps {
  moduleName: string;
}

export const FeatureModulePreview: React.FC<FeatureModulePreviewProps> = ({ moduleName }) => {
  switch (moduleName) {
    case 'Central Workout Log':
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-[#B7FF35]" />
              <span>Sheet: Workout Log</span>
            </span>
            <span className="text-[#45D483] text-[10px]">● Active Session</span>
          </div>

          <div className="space-y-2">
            {[
              { ex: 'Barbell Bench Press', set: 'Set 1', load: '80.0 kg', reps: '8 reps', rir: 'RIR 2', vol: '640 kg' },
              { ex: 'Barbell Bench Press', set: 'Set 2', load: '80.0 kg', reps: '8 reps', rir: 'RIR 2', vol: '640 kg' },
              { ex: 'Barbell Bench Press', set: 'Set 3', load: '82.5 kg', reps: '6 reps', rir: 'RIR 1', vol: '495 kg' },
              { ex: 'Incline DB Press', set: 'Set 1', load: '32.0 kg', reps: '10 reps', rir: 'RIR 2', vol: '320 kg' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[#151B21] border border-[#28312C]">
                <div>
                  <div className="text-[#F5F7F2] font-bold text-xs">{row.ex}</div>
                  <div className="text-[10px] text-[#737D76]">{row.set} • {row.rir}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#B7FF35] font-bold">{row.load} × {row.reps}</div>
                  <div className="text-[10px] text-[#A1AAA3]">Vol: {row.vol}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#28312C] flex items-center justify-between text-[11px] text-[#A1AAA3]">
            <span>Session Total Volume:</span>
            <span className="text-[#B7FF35] font-bold text-sm">2,095 kg</span>
          </div>
        </div>
      );

    case 'Progressive Overload Tracker':
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#B7FF35]" />
              <span>Sheet: Progressive Overload Engine</span>
            </span>
            <span className="text-[#B7FF35] text-[10px] bg-[#B7FF35]/10 px-2 py-0.5 rounded border border-[#B7FF35]/20">
              Auto-Calculated
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#151B21] p-3 rounded-lg border border-[#28312C]">
              <span className="text-[10px] text-[#737D76] uppercase">Exercise</span>
              <div className="font-bold text-[#F5F7F2] text-sm mt-0.5">Bench Press</div>
              <div className="text-[10px] text-[#A1AAA3] mt-1">9 Sets Logged</div>
            </div>
            <div className="bg-[#151B21] p-3 rounded-lg border border-[#28312C]">
              <span className="text-[10px] text-[#737D76] uppercase">First Logged e1RM</span>
              <div className="font-bold text-[#A1AAA3] text-sm mt-0.5">76.7 kg</div>
              <div className="text-[10px] text-[#737D76] mt-1">Session 1 Baseline</div>
            </div>
            <div className="bg-[#151B21] p-3 rounded-lg border border-[#28312C]">
              <span className="text-[10px] text-[#737D76] uppercase">Latest Session e1RM</span>
              <div className="font-bold text-[#B7FF35] text-sm mt-0.5">80.0 kg</div>
              <div className="text-[10px] text-[#45D483] mt-1">+3.3 kg (+4.3%)</div>
            </div>
            <div className="bg-[#151B21] p-3 rounded-lg border border-[#B7FF35]/40 shadow-sm">
              <span className="text-[10px] text-[#B7FF35] uppercase font-bold">Suggested Next Load</span>
              <div className="font-bold text-[#F5F7F2] text-sm mt-0.5">82.5 kg</div>
              <div className="text-[10px] text-[#A1AAA3] mt-1">+2.5 kg Increment</div>
            </div>
          </div>

          <div className="p-3 bg-[#151B21] rounded-lg border border-[#28312C] text-[11px] text-[#A1AAA3] flex items-center gap-2">
            <Check className="w-4 h-4 text-[#45D483] shrink-0" />
            <span>Never guess what load to put on the bar next week.</span>
          </div>
        </div>
      );

    case 'Personal Records (PR) Board':
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FFB547]" />
              <span>Sheet: Personal Records Leaderboard</span>
            </span>
            <span className="text-[#FFB547] text-[10px]">All-Time Bests</span>
          </div>

          <div className="space-y-2">
            {[
              { lift: 'Deadlift', wt: '155.0 kg', reps: '3 reps', e1rm: '168.0 kg', badge: 'Gold' },
              { lift: 'Barbell Squat', wt: '125.0 kg', reps: '4 reps', e1rm: '141.0 kg', badge: 'Silver' },
              { lift: 'Bench Press', wt: '80.0 kg', reps: '6 reps', e1rm: '96.0 kg', badge: 'Bronze' },
              { lift: 'Overhead Press', wt: '55.0 kg', reps: '5 reps', e1rm: '64.0 kg', badge: 'Active' },
            ].map((pr, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-[#151B21] border border-[#28312C]">
                <div>
                  <div className="text-[#F5F7F2] font-bold">{pr.lift}</div>
                  <div className="text-[10px] text-[#737D76]">Peak: {pr.wt} × {pr.reps}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#B7FF35] font-bold">e1RM: {pr.e1rm}</div>
                  <div className="text-[9px] text-[#45D483]">Auto-Detected PR</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Executive Analytics Dashboard':
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <Layout className="w-4 h-4 text-[#B7FF35]" />
              <span>Sheet: Executive Dashboard</span>
            </span>
            <span className="text-[#B7FF35] text-[10px]">Real-Time Rollup</span>
          </div>

          <div className="space-y-3">
            <div className="text-[10px] text-[#737D76] uppercase">Weekly Sets Distribution by Muscle Group:</div>
            {[
              { muscle: 'Chest', sets: 14, percent: 85, color: '#B7FF35' },
              { muscle: 'Back', sets: 16, percent: 95, color: '#8DDB25' },
              { muscle: 'Legs (Quads/Hams)', sets: 18, percent: 100, color: '#45D483' },
              { muscle: 'Shoulders & Arms', sets: 12, percent: 70, color: '#3FBEF7' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#F5F7F2]">{item.muscle}</span>
                  <span className="text-[#B7FF35] font-bold">{item.sets} Sets Target</span>
                </div>
                <div className="w-full h-2 bg-[#151B21] rounded-full overflow-hidden border border-[#28312C]">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'Plate & Warm-Up Calculator':
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#B7FF35]" />
              <span>Sheet: Plate & Warm-Up Calculator</span>
            </span>
            <span className="text-[#FFB547] text-[10px]">Target: 100 kg</span>
          </div>

          <div className="bg-[#151B21] p-3.5 rounded-lg border border-[#28312C] space-y-2">
            <div className="text-[10px] text-[#737D76] uppercase">Per-Side Loading (Standard 20kg Bar):</div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#1B232B] border border-[#B7FF35]/30 text-[#F5F7F2] px-2.5 py-1 rounded text-xs">
                <span className="text-[#B7FF35] font-bold">1×</span> 20 kg
              </span>
              <span className="bg-[#1B232B] border border-[#B7FF35]/30 text-[#F5F7F2] px-2.5 py-1 rounded text-xs">
                <span className="text-[#B7FF35] font-bold">1×</span> 15 kg
              </span>
              <span className="bg-[#1B232B] border border-[#B7FF35]/30 text-[#F5F7F2] px-2.5 py-1 rounded text-xs">
                <span className="text-[#B7FF35] font-bold">1×</span> 5 kg
              </span>
            </div>
            <div className="text-[10px] text-[#45D483] pt-1">= 40 kg per side (+ 20 kg bar = 100 kg total)</div>
          </div>

          <div className="space-y-1.5">
            <div className="text-[10px] text-[#737D76] uppercase">Warm-Up Ramp Protocol:</div>
            <div className="text-[11px] text-[#A1AAA3] flex items-center justify-between p-1.5 bg-[#151B21] rounded">
              <span>Set 1 (Bar)</span>
              <span className="text-[#F5F7F2]">20 kg × 10 reps</span>
            </div>
            <div className="text-[11px] text-[#A1AAA3] flex items-center justify-between p-1.5 bg-[#151B21] rounded">
              <span>Set 2 (Ramp 60%)</span>
              <span className="text-[#F5F7F2]">60 kg × 5 reps</span>
            </div>
            <div className="text-[11px] text-[#A1AAA3] flex items-center justify-between p-1.5 bg-[#151B21] rounded">
              <span>Set 3 (Primer 80%)</span>
              <span className="text-[#B7FF35] font-bold">80 kg × 2 reps</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-[#101419] border border-[#28312C] rounded-xl p-5 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#28312C] text-[#A1AAA3]">
            <span className="font-bold text-[#F5F7F2] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B7FF35]" />
              <span>Sheet: {moduleName}</span>
            </span>
            <span className="text-[#45D483] text-[10px]">● Operational</span>
          </div>

          <div className="bg-[#151B21] p-4 rounded-xl border border-[#28312C] space-y-3">
            <div className="text-xs text-[#F5F7F2] font-semibold">Specialized Fitness Architecture</div>
            <p className="text-[11px] text-[#A1AAA3] leading-relaxed">
              Fully cross-referenced with your daily workout entries. Changes in bodyweight automatically scale daily protein recommendations; daily sleep logs calculate your readiness index.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#B7FF35]">
              <Check className="w-3.5 h-3.5 text-[#B7FF35]" />
              <span>100% pre-coded Excel formulas • Zero setup required</span>
            </div>
          </div>
        </div>
      );
  }
};
