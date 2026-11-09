import React, { useState } from 'react';
import { TrendingUp, Award, Activity, Dumbbell, CheckCircle2 } from 'lucide-react';

export const LiveDashboardMockup: React.FC = () => {
  const [activeLift, setActiveLift] = useState<'bench' | 'squat' | 'deadlift'>('bench');
  const [activeTab, setActiveTab] = useState('dashboard');

  const liftData = {
    bench: {
      name: 'Bench Press',
      startWeight: 60,
      currentWeight: 80,
      pr: '80.0 kg',
      gain: '+33.3%',
      points: [60, 62.5, 65, 67.5, 70, 72.5, 75, 77.5, 80],
      weeks: ['W1', 'W2', 'W4', 'W6', 'W8', 'W10', 'W12'],
      sets: [
        { set: 1, weight: '75.0 kg', reps: '8', rir: '2', status: 'Clean Form' },
        { set: 2, weight: '77.5 kg', reps: '6', rir: '1', status: 'Heavy' },
        { set: 3, weight: '80.0 kg', reps: '4', rir: '1', status: 'New PR' },
      ],
    },
    squat: {
      name: 'Barbell Squat',
      startWeight: 90,
      currentWeight: 125,
      pr: '125.0 kg',
      gain: '+38.8%',
      points: [90, 95, 100, 105, 110, 115, 120, 122.5, 125],
      weeks: ['W1', 'W2', 'W4', 'W6', 'W8', 'W10', 'W12'],
      sets: [
        { set: 1, weight: '115.0 kg', reps: '6', rir: '2', status: 'Solid' },
        { set: 2, weight: '120.0 kg', reps: '5', rir: '2', status: 'Heavy' },
        { set: 3, weight: '125.0 kg', reps: '3', rir: '1', status: 'New PR' },
      ],
    },
    deadlift: {
      name: 'Deadlift',
      startWeight: 110,
      currentWeight: 155,
      pr: '155.0 kg',
      gain: '+40.9%',
      points: [110, 115, 120, 127.5, 135, 140, 145, 150, 155],
      weeks: ['W1', 'W2', 'W4', 'W6', 'W8', 'W10', 'W12'],
      sets: [
        { set: 1, weight: '140.0 kg', reps: '5', rir: '2', status: 'Clean Form' },
        { set: 2, weight: '147.5 kg', reps: '4', rir: '1', status: 'Strong' },
        { set: 3, weight: '155.0 kg', reps: '3', rir: '1', status: 'New PR' },
      ],
    },
  };

  const current = liftData[activeLift];

  // SVG chart dimensions
  const svgWidth = 460;
  const svgHeight = 110;
  const paddingX = 25;
  const paddingY = 18;

  const minVal = current.startWeight * 0.95;
  const maxVal = current.currentWeight * 1.05;

  const pointsString = current.points
    .map((val, idx) => {
      const x = paddingX + (idx / (current.points.length - 1)) * (svgWidth - paddingX * 2);
      const y = svgHeight - paddingY - ((val - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
      return `${x},${y}`;
    })
    .join(' ');

  const areaString = `${pointsString} ${svgWidth - paddingX},${svgHeight} ${paddingX},${svgHeight}`;

  return (
    <div className="relative w-full rounded-2xl bg-[#101419] border border-[#28312C] shadow-2xl overflow-hidden select-none">
      
      {/* Top Application Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151B21] border-b border-[#28312C]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 inline-block" />
          </div>
          <span className="font-mono text-xs text-[#A1AAA3] font-medium tracking-wide ml-1.5 flex items-center gap-1.5">
            <span className="text-[#B7FF35]">⚡</span>
            <span>Gym_Progress_OS_Ultimate_v2.xlsx</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#101419] px-2.5 py-1 rounded-md text-[10px] font-mono text-[#B7FF35] border border-[#28312C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF35] animate-pulse" />
            <span>v2.0 • LIVE WORKBOOK</span>
          </span>
        </div>
      </div>

      {/* Main Dashboard Screen View */}
      <div className="p-4 sm:p-5 space-y-4">
        
        {/* Metric KPI Tiles */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#151B21] border border-[#28312C] rounded-xl p-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#737D76] flex items-center justify-between">
              <span>Total Volume</span>
              <TrendingUp className="w-3 h-3 text-[#B7FF35]" />
            </div>
            <div className="font-heading font-black text-base sm:text-lg text-[#F5F7F2] mt-1">
              4,835 <span className="text-xs font-mono font-normal text-[#A1AAA3]">kg</span>
            </div>
            <div className="text-[10px] text-[#45D483] font-mono font-medium mt-0.5">
              +12.4% vs L4W
            </div>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] rounded-xl p-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#737D76] flex items-center justify-between">
              <span>PRs Logged</span>
              <Award className="w-3 h-3 text-[#FFB547]" />
            </div>
            <div className="font-heading font-black text-base sm:text-lg text-[#F5F7F2] mt-1">
              19 <span className="text-xs font-mono font-normal text-[#A1AAA3]">milestones</span>
            </div>
            <div className="text-[10px] text-[#B7FF35] font-mono font-medium mt-0.5">
              All Lifts Tracked
            </div>
          </div>

          <div className="bg-[#151B21] border border-[#28312C] rounded-xl p-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#737D76] flex items-center justify-between">
              <span>Readiness</span>
              <Activity className="w-3 h-3 text-[#45D483]" />
            </div>
            <div className="font-heading font-black text-base sm:text-lg text-[#45D483] mt-1">
              88 <span className="text-xs font-mono font-normal text-[#737D76]">/ 100</span>
            </div>
            <div className="text-[10px] text-[#A1AAA3] font-mono font-medium mt-0.5">
              Ready to Train
            </div>
          </div>
        </div>

        {/* Dynamic Progression Chart Section */}
        <div className="bg-[#151B21] border border-[#28312C] rounded-xl p-3.5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#737D76]">
                Automatic Strength Progress
              </div>
              <div className="text-xs font-bold text-[#F5F7F2] flex items-center gap-2 mt-0.5">
                <span>{current.name}</span>
                <span className="text-xs font-mono text-[#B7FF35] bg-[#B7FF35]/10 px-2 py-0.5 rounded border border-[#B7FF35]/20 font-bold">
                  {current.pr} PR ({current.gain})
                </span>
              </div>
            </div>

            {/* Interactive Lift Selector */}
            <div className="flex items-center gap-1 bg-[#101419] p-1 rounded-lg border border-[#28312C]">
              {(['bench', 'squat', 'deadlift'] as const).map((lift) => (
                <button
                  key={lift}
                  onClick={() => setActiveLift(lift)}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all capitalize font-semibold ${
                    activeLift === lift
                      ? 'bg-[#B7FF35] text-[#080A0D]'
                      : 'text-[#A1AAA3] hover:text-[#F5F7F2]'
                  }`}
                >
                  {lift}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Progression Curve */}
          <div className="relative w-full h-[110px] bg-[#080A0D]/70 rounded-lg border border-[#28312C]/60 overflow-hidden flex items-center justify-center">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-20 pointer-events-none">
              <div className="border-b border-[#28312C] w-full" />
              <div className="border-b border-[#28312C] w-full" />
              <div className="border-b border-[#28312C] w-full" />
            </div>

            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="overloadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B7FF35" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#B7FF35" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Shaded Area Under Curve */}
              <polygon points={areaString} fill="url(#overloadGradient)" />

              {/* Trend Polyline */}
              <polyline
                fill="none"
                stroke="#B7FF35"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={pointsString}
              />

              {/* Data Milestone Nodes */}
              {current.points.map((val, idx) => {
                const x = paddingX + (idx / (current.points.length - 1)) * (svgWidth - paddingX * 2);
                const y = svgHeight - paddingY - ((val - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
                const isLast = idx === current.points.length - 1;
                return (
                  <g key={idx}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isLast ? 4.5 : 2.5}
                      fill={isLast ? '#B7FF35' : '#151B21'}
                      stroke={isLast ? '#080A0D' : '#B7FF35'}
                      strokeWidth={isLast ? 2 : 1.5}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Weeks Footer Tags */}
            <div className="absolute bottom-1.5 left-4 right-4 flex justify-between text-[9px] font-mono text-[#737D76]">
              {current.weeks.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Live Set-by-Set Logging Table Snapshot */}
        <div className="bg-[#151B21] border border-[#28312C] rounded-xl p-3">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#28312C] text-[10px] font-mono">
            <span className="text-[#A1AAA3] font-semibold flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-[#B7FF35]" />
              <span>Today's Logged Sets ({current.name})</span>
            </span>
            <span className="text-[#45D483] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Auto-Calculated</span>
            </span>
          </div>

          <div className="space-y-1.5">
            {current.sets.map((item) => (
              <div
                key={item.set}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#101419] border border-[#28312C] text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-[#1B232B] text-[#A1AAA3] text-[10px] flex items-center justify-center font-bold">
                    {item.set}
                  </span>
                  <span className="text-[#F5F7F2] font-bold">{item.weight}</span>
                  <span className="text-[#737D76]">×</span>
                  <span className="text-[#F5F7F2]">{item.reps} reps</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-[#A1AAA3]">{item.rir} Reps Left</span>
                  <span
                    className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-bold ${
                      item.status === 'New PR'
                        ? 'bg-[#B7FF35] text-[#080A0D]'
                        : 'bg-[#1B232B] text-[#45D483] border border-[#45D483]/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Sheet Navigation Tabs */}
      <div className="px-3 py-2 bg-[#151B21] border-t border-[#28312C] flex items-center justify-between text-[11px] font-mono overflow-x-auto gap-1.5 no-scrollbar">
        <div className="flex items-center gap-1 shrink-0">
          {[
            { id: 'dashboard', name: '📊 Dashboard' },
            { id: 'log', name: '📝 Workout Log' },
            { id: 'overload', name: '📈 Overload' },
            { id: 'pr', name: '🏆 PR Board' },
            { id: 'plates', name: '⚖️ Plates' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 py-1 rounded text-[10px] transition-all font-semibold ${
                activeTab === tab.id
                  ? 'bg-[#1B232B] text-[#B7FF35] border border-[#28312C] shadow-sm'
                  : 'text-[#737D76] hover:text-[#A1AAA3]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-[#B7FF35] font-semibold shrink-0">
          +10 More Sheets
        </span>
      </div>

    </div>
  );
};
