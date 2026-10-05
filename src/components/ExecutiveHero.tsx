import React from 'react';
import { CandidateProfile } from '../types/portfolio';
import { ArrowRight, CheckCircle2, Clock, Sparkles, Calculator, Linkedin, Github, Mail } from 'lucide-react';

interface ExecutiveHeroProps {
  profile: CandidateProfile;
  onOpenJobMatcher: () => void;
  onOpenSchedule: () => void;
  onOpenProfileEdit: () => void;
}

export const ExecutiveHero: React.FC<ExecutiveHeroProps> = ({
  profile,
  onOpenJobMatcher,
  onOpenSchedule,
}) => {
  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-400 mb-6">
          <span className="text-emerald-400 font-semibold tracking-wide">
            Disponível para Novas Oportunidades
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{profile.workModel}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{profile.availability}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{profile.location}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Liderança Técnica de Alto Impacto e <span className="text-emerald-400">ROI Comprovado</span> em Sistemas Críticos.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.summary}
            </p>

            <div className="pt-2 pb-1 border-y border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-500 uppercase tracking-wider font-medium text-[11px]">Modelos Aceitos</span>
                <p className="text-slate-200 font-medium">CLT · PJ Nacional · B2B Internacional</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 uppercase tracking-wider font-medium text-[11px]">Foco Primário</span>
                <p className="text-slate-200 font-medium">Staff Engineer · Tech Lead · Arquiteto</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 uppercase tracking-wider font-medium text-[11px]">Faixa Salarial / Taxa</span>
                <p className="text-slate-200 font-medium">Flexível c/ bônus ou equity</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Explorar Cases com Método STAR</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenJobMatcher}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-600/40 rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Simular Fit com sua Vaga</span>
              </button>

              <a
                href="#calculadora"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-slate-400" />
                <span>Calcular Retorno (ROI)</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-3 text-slate-400 text-xs">
              <span className="text-slate-500">Contato direto:</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title={profile.email}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate max-w-[160px]">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
              
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={profile.avatarUrl}
                  alt={`Retrato executivo de ${profile.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800/90 rounded-lg p-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{profile.name}</p>
                      <p className="text-slate-400 text-[11px]">{profile.role}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Disponível
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-wider">Carreira</span>
                  <span className="font-bold text-white text-sm tabular-nums">11+ Anos</span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-wider">Economia Cloud</span>
                  <span className="font-bold text-emerald-400 text-sm tabular-nums">R$ 14.8M+</span>
                </div>
              </div>

              <button
                onClick={onOpenSchedule}
                className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <span>Agendar Conversa Rápida (20 min)</span>
                <Clock className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
