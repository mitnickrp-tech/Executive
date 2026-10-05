import React from 'react';
import { CaseStudy } from '../types/portfolio';
import { X, Layers, CheckCircle2, Quote } from 'lucide-react';

interface ArchitectureModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  caseStudy,
  onClose
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span className="text-emerald-400 font-semibold">{caseStudy.companyContext}</span>
              <span>·</span>
              <span>{caseStudy.timeframe}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {caseStudy.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4 text-xs sm:text-sm text-emerald-300">
            <strong className="block text-emerald-400 text-xs uppercase tracking-wider mb-1 font-bold">
              Impacto de Negócio Consolidado
            </strong>
            {caseStudy.primaryImpact}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Diagrama Lógico de Componentes & Fluxo de Dados</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {caseStudy.architectureOverview}
            </p>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Fluxo Sequencial de Alta Disponibilidade:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {caseStudy.architectureComponents.map((component, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                        0{idx + 1}. Camada
                      </span>
                      <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                        {component.tech}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{component.name}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{component.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Detalhamento Completo das Etapas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1.5 uppercase text-[11px]">Situação e Risco</span>
                <p className="text-slate-300 leading-relaxed">{caseStudy.star.situation}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-blue-400 block mb-1.5 uppercase text-[11px]">Tarefa e Meta Técnica</span>
                <p className="text-slate-300 leading-relaxed">{caseStudy.star.task}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
              <span className="font-bold text-purple-400 block mb-2 uppercase text-[11px]">Ações Chave Implementadas</span>
              <ul className="space-y-2 text-slate-300">
                {caseStudy.star.action.map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400">▪</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs">
              <span className="font-bold text-emerald-400 block mb-2 uppercase text-[11px]">Resultados & Entregas Mensuráveis</span>
              <ul className="space-y-2 text-slate-300">
                {caseStudy.star.result.map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
              Métricas Consolidadas de Performance
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500">
                    <th className="pb-2 font-medium">Indicador de Negócio</th>
                    <th className="pb-2 font-medium text-right">Antes</th>
                    <th className="pb-2 font-medium text-right">Depois</th>
                    <th className="pb-2 font-medium text-right">Variação Real</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-slate-800/60">
                  {caseStudy.metrics.map((m, idx) => (
                    <tr key={idx} className="tabular-nums font-mono">
                      <td className="py-2.5 text-slate-300 font-sans font-medium">{m.label}</td>
                      <td className="py-2.5 text-slate-500 text-right">{m.before}</td>
                      <td className="py-2.5 text-white font-semibold text-right">{m.after}</td>
                      <td className="py-2.5 text-emerald-400 font-bold text-right">{m.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {caseStudy.referenceQuote && (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <Quote className="w-4 h-4 text-emerald-400 mb-1" />
              <p className="text-slate-300 italic">"{caseStudy.referenceQuote.text}"</p>
              <p className="mt-2 text-slate-400 font-medium">
                — {caseStudy.referenceQuote.author}, {caseStudy.referenceQuote.role}
              </p>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Escopo: {caseStudy.leadershipScope}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};
