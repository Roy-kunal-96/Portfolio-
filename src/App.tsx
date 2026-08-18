/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white flex flex-col">
      {/* Top Navbar */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenContactModal={handleOpenContact}
        />

        <MetricsBar />

        <ExperienceSection />

        <ProjectsSection />

        <SkillsSection />

        <EducationSection />

        <ContactSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Printable / Downloadable Full CV Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
