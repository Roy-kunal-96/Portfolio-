import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const emailSubject = encodeURIComponent(subject || `Inquiry for Kunal Ranjan from ${senderName || 'Recruiter'}`);
    const emailBody = encodeURIComponent(
      `Hello Kunal,\n\n${message}\n\nFrom: ${senderName || 'Colleague'} (${senderEmail || 'Not provided'})\n`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 4000);
  };

  return (
    <section id="contact" className="py-10 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Open to engineering leadership, senior full-stack roles, consulting, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
              <h3 className="text-base font-bold font-display text-white">
                Contact Information
              </h3>

              {/* Direct Info Blocks */}
              <div className="space-y-2.5">
                {/* Email Item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/30 text-sky-400">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors font-mono">
                        linkedin.com/in/kunalroy
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

                {/* Location Item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-400">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Current Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Action */}
              <div className="pt-1">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <span>Open Printable Resume View</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Email Composer */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
              
              <div>
                <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Draft your inquiry below to launch a pre-composed direct email to Kunal.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Connor / Hiring Lead"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-300 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@enterprise.com"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-300 font-mono">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Opportunity: Lead Full-Stack Engineer / Angular Architect"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-300 font-mono">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Kunal, we reviewed your profile and would love to discuss..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-cyan-950/40 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to roykunal22@outlook.com</span>
                </button>

                {sentStatus && (
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs text-center font-mono">
                    Email composer launched successfully!
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
