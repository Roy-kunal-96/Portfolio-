import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Cpu, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Users, 
  Check, 
  Search, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    level: string;
    years: string;
    usedIn: string[];
  } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-cyan-400" />;
      case 'Server': return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-sky-400" />;
      case 'Users': return <Users className="w-4 h-4 text-purple-400" />;
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.usedIn.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filteredSkills.length === 0 && searchQuery) {
      return null;
    }
    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof skillCategories;

  return (
    <section id="skills" className="py-10 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Core Skills & Technologies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Comprehensive expertise spanning modern frontend frameworks, cloud backend microservices, mobile ecosystems, and engineering team leadership.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills or tools..."
                className="w-full sm:w-48 pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-0.5 bg-slate-900 p-0.5 rounded-lg border border-slate-800 overflow-x-auto">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              {skillCategories.map(cat => {
                let shortLabel = cat.category.split(' ')[0];
                if (cat.category.includes('Gen AI')) shortLabel = 'AI / LLMs';
                else if (cat.category.includes('Backend')) shortLabel = 'Backend';
                else if (cat.category.includes('Frontend')) shortLabel = 'Frontend';
                else if (cat.category.includes('Databases')) shortLabel = 'Data';
                else if (cat.category.includes('Mobile')) shortLabel = 'Mobile';
                else if (cat.category.includes('Leadership')) shortLabel = 'Leadership';

                return (
                  <button
                    key={cat.category}
                    onClick={() => setSelectedCategory(cat.category)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat.category
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-5 flex flex-col justify-between backdrop-blur-sm space-y-3.5"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-slate-950 border border-slate-800">
                      {getCategoryIcon(catGroup.iconName)}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white">
                      {catGroup.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                {/* Skills Chips Grid */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {catGroup.skills.map((skill, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSkill(skill)}
                      className={`group flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono transition-all text-left ${
                        skill.highlight
                          ? 'bg-slate-950 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/30'
                          : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <Star className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400/20 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-1 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                <span>Click skill to inspect usage</span>
                <Sparkles className="w-3 h-3 text-slate-600" />
              </div>
            </div>
          ))}
        </div>

        {/* ACTIVE SKILL DETAIL POPUP / DRAWER */}
        {activeSkill && (
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="text-lg font-bold font-display text-white">
                  {activeSkill.name}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {activeSkill.level}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                  {activeSkill.years} Experience
                </span>
              </div>

              <div className="text-xs text-slate-300">
                <span className="text-slate-500 font-mono uppercase mr-2 text-[11px]">Applied At:</span>
                <span className="font-medium text-slate-200">{activeSkill.usedIn.join(' • ')}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveSkill(null)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
