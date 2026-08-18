import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  Filter, 
  Briefcase, 
  ChevronRight, 
  Sparkles, 
  Code,
  Layers
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('prudent');
  const [viewMode, setViewMode] = useState<'timeline' | 'cards'>('timeline');

  const categories = ['All', 'Leadership', 'Frontend', 'Full-Stack', 'Mobile'];

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-10 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              7+ years of progressive engineering leadership and full-stack software development across enterprise insurance, logistics, fintech, and digital transformation.
            </p>
          </div>

          {/* Filter & View Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center p-0.5 bg-slate-900 rounded-lg border border-slate-800">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'timeline'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Grid Cards
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-0.5 rounded-md text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TIMELINE VIEW */}
        {viewMode === 'timeline' ? (
          <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-5 md:ml-6 pl-4 sm:pl-6 space-y-4">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[23px] sm:-left-[31px] md:-left-[33px] top-2 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      exp.isCurrent
                        ? 'bg-slate-950 border-cyan-400 shadow-md shadow-cyan-500/50'
                        : 'bg-slate-950 border-slate-700 group-hover:border-indigo-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        exp.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600 group-hover:bg-indigo-400'
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-md shadow-black/10">
                    
                    {/* Header Bar */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className="p-4 sm:p-4.5 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 select-none hover:bg-slate-850/50 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                              Current Position
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/20">
                            {exp.category}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-300 font-medium">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.company}</span>
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1 text-slate-400 text-xs">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              <span>{exp.location}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between lg:justify-end gap-2.5 pt-1.5 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                        <button
                          className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-800/60"
                          aria-label="Toggle details"
                        >
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-cyan-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    {isExpanded && (
                      <div className="px-4 sm:px-4.5 pb-4 sm:pb-4.5 pt-1.5 border-t border-slate-800/80 space-y-3.5 animate-in fade-in duration-200">
                        
                        {/* Summary */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                          {exp.summary}
                        </p>

                        {/* Measurable Achievements if any */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-950/30 via-slate-900 to-indigo-950/30 border border-cyan-500/20 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>Key Measurable Performance Gains</span>
                            </div>
                            <ul className="space-y-1">
                              {exp.metrics.map((metric, mIdx) => (
                                <li key={mIdx} className="flex items-start gap-1.5 text-xs text-slate-200">
                                  <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0 mt-0.5" />
                                  <span>{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Core Responsibilities */}
                        <div className="space-y-1.5">
                          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            Key Responsibilities & Deliverables
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                                <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Tags */}
                        <div className="pt-1">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                            Technologies & Tools
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* GRID CARDS VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-4.5 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold font-display text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {exp.summary}
                  </p>

                  <div className="space-y-1 pt-1">
                    {exp.responsibilities.slice(0, 2).map((r, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span className="line-clamp-1">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{exp.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
