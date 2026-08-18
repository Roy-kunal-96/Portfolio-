import React from 'react';
import { keyMetrics } from '../data/portfolioData';
import { Briefcase, Zap, Gauge, GitPullRequest, TrendingUp, CheckCircle2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Gauge: <Gauge className="w-5 h-5 text-emerald-400" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5 text-indigo-400" />
  };

  return (
    <section id="metrics" className="py-8 relative border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Performance & Impact</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Quantifiable Engineering Results
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Measured achievements delivering high-impact architecture, bundle optimizations, and agile workflow automation.
          </p>
        </div>

        {/* 4-Grid Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {keyMetrics.map((m) => (
            <div
              key={m.id}
              id={`metric-card-${m.id}`}
              className="relative p-4 sm:p-4.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-950/20 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:scale-105 transition-transform">
                  {iconMap[m.icon]}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                  {m.category}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-display tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-indigo-300 transition-colors">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {m.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-0.5">
                  {m.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
