import React, { useState } from 'react';
import { CandidateProfile } from '../types/portfolio';
import { Calendar, Download, Sparkles, Menu, X, Sliders } from 'lucide-react';

interface HeaderProps {
  profile: CandidateProfile;
  onOpenSchedule: () => void;
  onOpenJobMatcher: () => void;
  onOpenProfileEdit: () => void;
  onTriggerPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenSchedule,
  onOpenJobMatcher,
  onOpenProfileEdit,
  onTriggerPrint,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex flex-col group">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-xs text-slate-400 -mt-0.5 hidden sm:inline">
                {profile.role}
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#cases" className="hover:text-white transition-colors">
              Cases & ROI
            </a>
            <a href="#calculadora" className="hover:text-white transition-colors">
              Calculadora de Impacto
            </a>
            <a href="#competencias" className="hover:text-white transition-colors">
              Matriz de Competências
            </a>
            <a href="#depoimentos" className="hover:text-white transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ de Entrevista
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenJobMatcher}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-700/50 rounded-lg hover:bg-emerald-900/60 hover:border-emerald-600 transition-colors cursor-pointer"
              title="Testar compatibilidade da sua vaga com meu perfil"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Match de Vaga</span>
            </button>

            <button
              onClick={onTriggerPrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-slate-700/80 hover:text-white transition-colors cursor-pointer"
              title="Baixar ou imprimir dossiê executivo em PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dossiê PDF</span>
            </button>

            <button
              onClick={onOpenSchedule}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Conversa</span>
            </button>

            <button
              onClick={onOpenProfileEdit}
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Editar dados do perfil"
            >
              <Sliders className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0b0f17] px-4 pt-3 pb-4 space-y-2">
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Cases & ROI
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Calculadora de Impacto
          </a>
          <a
            href="#competencias"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Matriz de Competências
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800"
          >
            FAQ de Entrevista
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJobMatcher();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 rounded-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Testar Match com sua Vaga</span>
          </button>
        </div>
      )}
    </header>
  );
};
