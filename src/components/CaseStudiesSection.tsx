import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/defaultData';
import { CaseStudy } from '../types/portfolio';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Award, Quote } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseForDeepDive: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseForDeepDive
}) => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [starTab, setStarTab] = useState<'situation' | 'task' | 'action' | 'result'>('result');

  const selectedCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section id="cases" className="py-16 md:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
              Casos Reais & Método STAR
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dossiê de Casos de Engenharia & Retorno de Negócio
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Cada projeto é documentado com o contexto do problema, ações técnicas tomadas, métricas antes/depois e impacto direto na receita e estabilidade.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            {CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseId(c.id);
                  setStarTab('result');
                }}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCaseId === c.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {c.categoryLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-6 md:p-8 border-b border-slate-800/80 bg-slate-900/40">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-emerald-400 font-semibold">{selectedCase.companyContext}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedCase.timeframe}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedCase.categoryLabel}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {selectedCase.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-300/90 bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-3 font-medium">
                  {selectedCase.primaryImpact}
                </p>
              </div>

              <button
                onClick={() => onSelectCaseForDeepDive(selectedCase)}
                className="self-start inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Ver Arquitetura Completa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={selectedCase.featuredImage}
                  alt={selectedCase.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-slate-200 font-medium bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700">
                    {selectedCase.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/90 rounded-xl p-4">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Comparativo de Performance e Impacto
                </p>
                <div className="space-y-2.5">
                  {selectedCase.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60 last:border-none">
                      <span className="text-slate-400 font-medium">{m.label}</span>
                      <div className="flex items-center gap-3 tabular-nums font-mono">
                        <span className="text-slate-500 line-through text-[11px]">{m.before}</span>
                        <ChevronRight className="w-3 h-3 text-slate-600" />
                        <span className="text-white font-semibold">{m.after}</span>
                        <span className="text-emerald-400 font-bold text-[11px] ml-1">({m.delta})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-400 border-l-2 border-emerald-400 pl-3 py-0.5">
                <strong className="text-slate-200 block mb-0.5">Escopo de Liderança:</strong>
                {selectedCase.leadershipScope}
              </div>

              {selectedCase.referenceQuote && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 relative">
                  <Quote className="w-4 h-4 text-emerald-400 mb-2 opacity-70" />
                  <p className="italic leading-relaxed">
                    "{selectedCase.referenceQuote.text}"
                  </p>
                  <p className="mt-2 text-slate-400 font-medium">
                    — {selectedCase.referenceQuote.author}, <span className="text-slate-500">{selectedCase.referenceQuote.role}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Estrutura de Avaliação STAR
                  </span>
                  
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setStarTab('situation')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        starTab === 'situation'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Situação
                    </button>
                    <button
                      onClick={() => setStarTab('task')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        starTab === 'task'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tarefa
                    </button>
                    <button
                      onClick={() => setStarTab('action')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        starTab === 'action'
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Ação
                    </button>
                    <button
                      onClick={() => setStarTab('result')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                        starTab === 'result'
                          ? 'bg-emerald-400 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Resultados
                    </button>
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 min-h-[160px] text-sm leading-relaxed">
                  {starTab === 'situation' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                        <span>O Contexto do Desafio Comercial</span>
                      </div>
                      <p className="text-slate-300">
                        {selectedCase.star.situation}
                      </p>
                    </div>
                  )}

                  {starTab === 'task' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
                        <span>A Missão & Responsabilidade de Liderança</span>
                      </div>
                      <p className="text-slate-300">
                        {selectedCase.star.task}
                      </p>
                    </div>
                  )}

                  {starTab === 'action' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-1">
                        <span>Ações Técnicas & Decisões Arquiteturais Tomadas</span>
                      </div>
                      <ul className="space-y-2 text-slate-300">
                        {selectedCase.star.action.map((act, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <span className="text-purple-400 mt-1">▸</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {starTab === 'result' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span>Resultados Mensuráveis & Impacto de Negócio</span>
                      </div>
                      <ul className="space-y-2 text-slate-300">
                        {selectedCase.star.result.map((res, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Visão da Arquitetura de Sistemas</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedCase.architectureOverview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {selectedCase.architectureComponents.slice(0, 4).map((comp, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-2.5 text-xs">
                      <span className="font-semibold text-slate-200 block truncate">{comp.name}</span>
                      <span className="text-slate-500 text-[11px] block truncate">{comp.role}</span>
                      <span className="text-emerald-400 text-[10px] font-mono mt-1 block">{comp.tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-medium text-slate-400 block mb-2">Tecnologias & Ferramentas Utilizadas:</span>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {selectedCase.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/50 border border-slate-800/60 rounded-xl p-3.5 text-xs text-slate-400">
                <strong className="text-slate-300 block mb-1">Aprendizado de Negócio:</strong>
                {selectedCase.businessLessons}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
