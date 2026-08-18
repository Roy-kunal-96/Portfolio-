import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Cloud, 
  Building, 
  X, 
  Layers, 
  Sparkles,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterTabs = ['All', 'Web', 'Mobile', 'Cloud', 'Enterprise'];

  const filteredProjects = selectedPlatform === 'All'
    ? projects
    : projects.filter(p => p.platforms.includes(selectedPlatform as any));

  const platformIcon = (p: string) => {
    switch (p) {
      case 'Mobile': return <Smartphone className="w-3.5 h-3.5" />;
      case 'Web': return <Globe className="w-3.5 h-3.5" />;
      case 'Cloud': return <Cloud className="w-3.5 h-3.5" />;
      default: return <Building className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="py-10 md:py-12 bg-slate-950/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Featured Projects & Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Enterprise-grade digital platforms, scalable mobile apps on Google Play & App Store, and mission-critical banking architectures.
            </p>
          </div>

          {/* Platform Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                id={`project-filter-${tab.toLowerCase()}`}
                onClick={() => setSelectedPlatform(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedPlatform === tab
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onClick={() => setActiveProject(proj)}
              className="group relative rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/20 cursor-pointer overflow-hidden backdrop-blur-sm"
            >
              {/* Featured Glow Indicator */}
              {proj.featured && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-xl rounded-full pointer-events-none" />
              )}

              <div className="space-y-3">
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {proj.platforms.map((plat) => (
                      <span
                        key={plat}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {platformIcon(plat)}
                        <span>{plat}</span>
                      </span>
                    ))}
                  </div>

                  {proj.appStoreLinks && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      Play & App Store
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors flex items-start justify-between gap-2">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 mt-0.5 font-mono">
                    {proj.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {proj.description}
                </p>

                {/* Key Contribution Highlights */}
                <div className="space-y-1 pt-0.5">
                  {proj.keyContributions.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1">
                  {proj.environment.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.environment.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{proj.environment.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      {activeProject && (
        <div 
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                {activeProject.platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {platformIcon(p)}
                    <span>{p}</span>
                  </span>
                ))}
                {activeProject.appStoreLinks && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    Live on Google Play & App Store
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {activeProject.title}
              </h3>
              <p className="text-sm text-cyan-400 font-mono">
                {activeProject.subtitle} • {activeProject.company}
              </p>
            </div>

            {/* Description */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              {activeProject.description}
            </div>

            {/* Key Engineering Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Key Contributions & Engineering Impact
              </h4>
              <ul className="space-y-2.5">
                {activeProject.keyContributions.map((kc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{kc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Environment & Tech Stack */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Technical Stack & Environment
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.environment.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 flex items-center justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
