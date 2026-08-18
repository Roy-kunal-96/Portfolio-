import React from 'react';
import { educations, languages, currentExplorations } from '../data/portfolioData';
import { GraduationCap, Award, Languages, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-10 md:py-12 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-950/70 border border-purple-500/30 text-purple-400 text-xs font-mono mb-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Continuous Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Education, Languages & AI Specialization
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Strong academic foundations in computer science paired with active exploration in Generative AI, Agentic AI architectures, LLM reasoning, and RAG systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Academic Degrees & Certifications</span>
            </h3>

            <div className="space-y-3">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  id={`edu-item-${edu.id}`}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-sm transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-1.5">
                    <h4 className="text-sm sm:text-base font-bold font-display text-white">
                      {edu.degree}
                    </h4>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 self-start sm:self-auto">
                      <span>{edu.scoreType}:</span>
                      <strong className="font-bold text-white">{edu.score}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-cyan-400/90 font-mono mb-1.5">
                    {edu.institution}
                  </p>

                  {edu.highlight && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1.5 border-t border-slate-800/80">
                      {edu.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Spoken Languages & AI Explorations */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Spoken Languages Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <Languages className="w-4 h-4 text-indigo-400" />
                <span>Languages</span>
              </h3>

              <div className="space-y-2">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs"
                  >
                    <span className="font-semibold text-slate-200 font-display text-xs sm:text-sm">{lang.name}</span>
                    <span className="text-slate-400 font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Next-Gen Focus Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-cyan-950/40 border border-indigo-500/30 backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>AI & Modern Focus</span>
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/40">
                  R&D
                </span>
              </div>

              <div className="space-y-2">
                {currentExplorations.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/50 border border-indigo-900/40 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">{item.title}</span>
                      <span className="text-[10px] font-mono text-cyan-400">{item.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
