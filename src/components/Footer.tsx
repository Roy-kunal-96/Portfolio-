import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, Linkedin, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800/80 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-850">
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span className="font-display font-bold text-xs text-cyan-400">KR</span>
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-white">
                {personalInfo.name}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                Team Lead | Frontend & Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button
              onClick={onOpenResumeModal}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              Resume (CV)
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Specializing in Angular • Python • Azure Cloud Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
