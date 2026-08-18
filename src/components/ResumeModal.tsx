import React from 'react';
import { personalInfo, experiences, projects, educations, languages, skillCategories, keyMetrics } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, Linkedin, ExternalLink, MapPin, Building2, Calendar, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">Kunal Ranjan</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200 print:bg-white print:text-slate-900 print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold font-display text-white print:text-slate-950 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-semibold text-cyan-400 print:text-slate-800 mt-0.5">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 font-mono mt-0.5">
                  Angular • Python • Azure
                </p>
              </div>

              {/* Contact list */}
              <div className="text-xs space-y-1 font-mono text-slate-300 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-slate-600" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400 print:text-slate-600" />
                  <span>linkedin.com/in/kunalroy</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400 print:text-slate-600" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Pillars Banner */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['7+ Years Experience', 'Team Leadership', 'Web & Mobile', 'Cloud & Deployment'].map((p, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950 print:bg-slate-100 text-slate-300 print:text-slate-800 border border-slate-800 print:border-slate-300">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Skills Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Core Skills & AI Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="sm:col-span-2">
                <strong className="text-amber-300 print:text-slate-900">AI & LLM Exploration: </strong>
                <span className="text-slate-300 print:text-slate-700">Generative AI, Agentic AI (Multi-Agent Workflows & Tool Use), LLM APIs, RAG (Retrieval-Augmented Generation), Prompt Engineering, Vector Search, AI-Assisted Architecture</span>
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Frontend: </strong>
                <span className="text-slate-300 print:text-slate-700">Angular (6-14+), TypeScript, JavaScript, HTML5, CSS, RxJS, NGRX, Redux, SSR</span>
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Backend: </strong>
                <span className="text-slate-300 print:text-slate-700">Python, Node.js, REST APIs, Java EE, Spring, Golang</span>
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Cloud & DevOps: </strong>
                <span className="text-slate-300 print:text-slate-700">Microsoft Azure, AWS, Git, Bitbucket, Webpack, GitHub Actions CI/CD</span>
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Databases & Mobile: </strong>
                <span className="text-slate-300 print:text-slate-700">PostgreSQL, MongoDB, SQL Developer, Android Native, Flutter, Ionic</span>
              </div>
              <div className="sm:col-span-2">
                <strong className="text-white print:text-slate-900">Leadership: </strong>
                <span className="text-slate-300 print:text-slate-700">Team Management, Code Review, Task Allocation, Technical Mentoring, Release Management, Stakeholder Collaboration</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-sm text-white print:text-slate-900">
                      {exp.company}
                    </span>
                    <span className="text-slate-400 print:text-slate-600"> — {exp.role}</span>
                  </div>
                  <span className="font-mono text-slate-400 print:text-slate-600">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 print:text-slate-700 italic">
                  {exp.summary}
                </p>

                <ul className="list-disc pl-4 space-y-1 text-slate-300 print:text-slate-700">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                  {exp.metrics?.map((m, mIdx) => (
                    <li key={`m-${mIdx}`} className="font-medium text-cyan-300 print:text-slate-900">
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] font-mono text-slate-400 print:text-slate-600 pt-1">
                  <strong>Technology: </strong>
                  <span>{exp.technologies.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Key Projects
            </h2>

            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="space-y-1.5 text-xs">
                <div className="font-bold text-white print:text-slate-900">
                  {p.title}
                </div>
                <div className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                  Environment: {p.environment.join(' | ')}
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-300 print:text-slate-700">
                  {p.keyContributions.map((kc, kIdx) => (
                    <li key={kIdx}>{kc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800 print:border-slate-300">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono pb-1">
                Education
              </h2>
              {educations.map((edu) => (
                <div key={edu.id} className="text-xs text-slate-300 print:text-slate-700">
                  <div className="font-semibold text-white print:text-slate-900">{edu.degree}</div>
                  <div className="text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    {edu.institution} — {edu.scoreType}: {edu.score}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 font-mono pb-1">
                Languages
              </h2>
              <div className="text-xs text-slate-300 print:text-slate-700">
                English | Hindi | Maithili
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
