import React from 'react';
import { CandidateProfile } from '../types/portfolio';

interface FooterProps {
  profile: CandidateProfile;
  onOpenSchedule: () => void;
  onTriggerPrint: () => void;
  onOpenJobMatcher: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenSchedule,
  onTriggerPrint,
  onOpenJobMatcher
}) => {
  return (
    <footer className="bg-[#070a0f] border-t border-slate-800 text-xs text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              {profile.name} — {profile.role}
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              Pronto para impulsionar a confiabilidade e ROI da sua engenharia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenJobMatcher}
              className="px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 hover:bg-emerald-900/60 transition-colors cursor-pointer"
            >
              Simular Match de Vaga
            </button>
            <button
              onClick={onTriggerPrint}
              className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Exportar Dossiê (PDF)
            </button>
            <button
              onClick={onOpenSchedule}
              className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition-colors cursor-pointer"
            >
              Agendar Conversa
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-slate-300 transition-colors">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
