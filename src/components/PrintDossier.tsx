import React from 'react';
import { CandidateProfile } from '../types/portfolio';
import { EXECUTIVE_METRICS, CASE_STUDIES, SKILL_CATEGORIES } from '../data/defaultData';

interface PrintDossierProps {
  profile: CandidateProfile;
}

export const PrintDossier: React.FC<PrintDossierProps> = ({ profile }) => {
  return (
    <div className="print-only hidden p-8 bg-white text-slate-900 font-sans text-xs max-w-4xl mx-auto">
      <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">
            {profile.name}
          </h1>
          <p className="text-sm font-semibold text-emerald-800">
            {profile.role} · {profile.seniority}
          </p>
          <p className="text-slate-600 mt-1 max-w-xl text-[11px] leading-relaxed">
            {profile.summary}
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-600 space-y-0.5">
          <p><strong>Local:</strong> {profile.location}</p>
          <p><strong>E-mail:</strong> {profile.email}</p>
          <p><strong>WhatsApp:</strong> {profile.phone}</p>
          <p><strong>LinkedIn:</strong> {profile.linkedin}</p>
          <p><strong>Disponibilidade:</strong> {profile.availability}</p>
          <p><strong>Contratação:</strong> {profile.contractTypes.join(' · ')}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
          Principais Resultados de Carreira & Eficiência Financeira
        </h2>
        <div className="grid grid-cols-4 gap-3 text-center">
          {EXECUTIVE_METRICS.map((m) => (
            <div key={m.id} className="p-2 border border-slate-200 rounded">
              <span className="block font-bold text-sm text-slate-950 tabular-nums">{m.value}</span>
              <span className="block text-[10px] font-semibold text-slate-700 mt-0.5">{m.label}</span>
              <span className="block text-[9px] text-slate-500 mt-1">{m.context}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Cases de Engenharia & Impacto Mensurável (Método STAR)
        </h2>

        {CASE_STUDIES.map((c, i) => (
          <div key={c.id} className="border border-slate-200 rounded p-3 text-[11px] space-y-1.5">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-slate-950 text-xs">
                {i + 1}. {c.title}
              </h3>
              <span className="text-[10px] text-slate-500 font-medium">
                {c.companyContext} · {c.timeframe}
              </span>
            </div>

            <p className="text-emerald-900 font-semibold bg-emerald-50 p-1.5 rounded text-[10.5px]">
              Impacto: {c.primaryImpact}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <strong className="text-slate-800">Situação:</strong> {c.star.situation}
              </div>
              <div>
                <strong className="text-slate-800">Resultados:</strong> {c.star.result[0]}
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-600 border-t border-slate-100">
              <span><strong>Métricas:</strong> {c.metrics.map((m) => `${m.label}: ${m.after} (${m.delta})`).join(' | ')}</span>
              <span><strong>Stack:</strong> {c.techStack.slice(0, 5).join(', ')}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Matriz de Competências & Ferramentas
        </h2>
        <div className="grid grid-cols-3 gap-3 text-[10.5px]">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="font-bold text-slate-800">{cat.category}</h4>
              <ul className="text-slate-600 space-y-0.5 list-disc list-inside">
                {cat.items.map((item, i) => (
                  <li key={i}>{item.name} ({item.years}a)</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-300 pt-3 text-center text-[10px] text-slate-500">
        Dossiê Executivo Gerado para Avaliação Técnica · Contato Direto: {profile.email} · {profile.phone}
      </div>
    </div>
  );
};
