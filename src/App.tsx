import React, { useState } from 'react';
import { DEFAULT_PROFILE } from './data/defaultData';
import { CandidateProfile, CaseStudy } from './types/portfolio';
import { Header } from './components/Header';
import { ExecutiveHero } from './components/ExecutiveHero';
import { ExecutiveMetricsBar } from './components/ExecutiveMetricsBar';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { RoiCalculator } from './components/RoiCalculator';
import { CompetencyMatrix } from './components/CompetencyMatrix';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { JobMatcherModal } from './components/JobMatcherModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { PrintDossier } from './components/PrintDossier';

export default function App() {
  const [profile, setProfile] = useState<CandidateProfile>(() => {
    try {
      const saved = localStorage.getItem('recruiterhub_candidate_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.name && parsed.name !== 'Alexandre Silveira') {
          return parsed;
        }
      }
    } catch {
      // ignore storage error
    }
    return DEFAULT_PROFILE;
  });

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isJobMatcherOpen, setIsJobMatcherOpen] = useState(false);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [selectedCaseForDeepDive, setSelectedCaseForDeepDive] = useState<CaseStudy | null>(null);

  const handleSaveProfile = (updatedProfile: CandidateProfile) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem('recruiterhub_candidate_profile', JSON.stringify(updatedProfile));
    } catch {
      // ignore storage error
    }
  };

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-emerald-400 selection:text-slate-950 font-sans">
      <PrintDossier profile={profile} />

      <div className="no-print flex-1 flex flex-col">
        <Header
          profile={profile}
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onOpenJobMatcher={() => setIsJobMatcherOpen(true)}
          onOpenProfileEdit={() => setIsProfileEditOpen(true)}
          onTriggerPrint={handleTriggerPrint}
        />

        <main className="flex-1">
          <ExecutiveHero
            profile={profile}
            onOpenJobMatcher={() => setIsJobMatcherOpen(true)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
            onOpenProfileEdit={() => setIsProfileEditOpen(true)}
          />

          <ExecutiveMetricsBar />

          <CaseStudiesSection
            onSelectCaseForDeepDive={(caseStudy) => setSelectedCaseForDeepDive(caseStudy)}
          />

          <RoiCalculator />

          <CompetencyMatrix />

          <TestimonialsSection />

          <FaqSection />
        </main>

        <Footer
          profile={profile}
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onTriggerPrint={handleTriggerPrint}
          onOpenJobMatcher={() => setIsJobMatcherOpen(true)}
        />

        <ArchitectureModal
          caseStudy={selectedCaseForDeepDive}
          onClose={() => setSelectedCaseForDeepDive(null)}
        />

        <JobMatcherModal
          isOpen={isJobMatcherOpen}
          onClose={() => setIsJobMatcherOpen(false)}
          onSelectCase={(caseStudy) => setSelectedCaseForDeepDive(caseStudy)}
        />

        <ScheduleModal
          isOpen={isScheduleOpen}
          onClose={() => setIsScheduleOpen(false)}
          profile={profile}
        />

        <ProfileEditModal
          isOpen={isProfileEditOpen}
          onClose={() => setIsProfileEditOpen(false)}
          profile={profile}
          onSaveProfile={handleSaveProfile}
        />
      </div>
    </div>
  );
}
