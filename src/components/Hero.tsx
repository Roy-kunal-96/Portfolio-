import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  Download, 
  ArrowRight, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Code2,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenContactModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const pillars = [
    { label: '7+ Years Experience', icon: Briefcase, color: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30' },
    { label: 'Team Leadership', icon: ShieldCheck, color: 'text-indigo-400 bg-indigo-950/60 border-indigo-500/30' },
    { label: 'Web & Mobile', icon: Code2, color: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30' },
    { label: 'Cloud & Azure', icon: Cpu, color: 'text-sky-400 bg-sky-950/60 border-sky-500/30' },
    { label: 'Gen AI & Agentic R&D', icon: Sparkles, color: 'text-amber-400 bg-amber-950/60 border-amber-500/30' }
  ];

  return (
    <section id="overview" className="relative pt-20 pb-10 md:pt-24 md:pb-14 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-60 h-60 bg-emerald-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Status & Availability Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-medium text-slate-300">
                Team Lead & Senior Full-Stack Engineer
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-cyan-400 font-mono">Noida / Delhi NCR</span>
            </div>

            {/* Name & Primary Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-slate-200 font-display flex flex-wrap items-center gap-2">
                <span>Team Lead & Full-Stack Developer</span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-cyan-400 font-mono text-base font-normal">Angular • Python • Azure</span>
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Core Pillars / Specializations */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-medium backdrop-blur-sm ${p.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{p.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-contact-btn"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-950/40 transition-all duration-200 hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Kunal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cv-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View & Print Resume</span>
              </button>

              <a
                id="hero-linkedin-btn"
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-semibold text-xs sm:text-sm border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Bio Card & Direct Contact Widget */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-4 sm:p-5 backdrop-blur-xl shadow-xl space-y-4">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800/80">
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-emerald-500 p-[2px] flex-shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <span className="font-display font-black text-xl bg-gradient-to-tr from-cyan-300 to-indigo-200 bg-clip-text text-transparent">
                      KR
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-cyan-400 font-mono">Team Lead • 7+ Yrs Exp</p>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Noida / Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Fast Contact Channels with Copy */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Direct Reach</div>
                
                {/* Email Box */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400 font-mono truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                    className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400 font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 hover:bg-sky-950/20 transition-all text-xs text-slate-300 hover:text-sky-300"
                >
                  <div className="flex items-center gap-2 font-mono">
                    <Linkedin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>linkedin.com/in/kunalroy</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-500/30">
                    Connect
                  </span>
                </a>
              </div>

              {/* AI Exploration Note */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-amber-950/40 border border-amber-500/25 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>AI Engineering Focus</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-500/30">
                    Active R&D
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Generative AI, Agentic AI (Multi-Agent Tool Use), LLMs, and RAG architectures for enterprise workflows.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
