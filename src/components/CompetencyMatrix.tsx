import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/defaultData';
import { Shield, Cpu, Users } from 'lucide-react';

const categoryIcons = [Shield, Cpu, Users];

export const CompetencyMatrix: React.FC = () => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIdx] || SKILL_CATEGORIES[0];

  return (
    <section id="competencias" className="py-16 md:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Proficiência Técnica & Gestão
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Matriz de Competências & Aplicação Prática no Negócio
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Habilidades demonstradas em produção, acompanhadas de tempo de experiência e como geram valor real para os produtos da empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = selectedCategoryIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategoryIdx(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/80 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span className="text-xs font-bold">{cat.category}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono tabular-nums text-slate-400">
                      {item.years} anos
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                      {item.level}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    Como gera valor no negócio:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.businessApplication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
