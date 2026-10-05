import React from 'react';
import { TESTIMONIALS } from '../data/defaultData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#090d15] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Chancela de Lideranças Técnicas & Negócios
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Depoimentos & Avaliações de Gestores Anteriores
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            O que CTOs, Heads de Produto e Engenheiros mentorados dizem sobre a entrega, postura ética e capacidade técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-5 h-5 text-emerald-400 opacity-80" />
                  <span className="text-[11px] font-medium text-emerald-400">
                    {t.impactTag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white leading-snug">
                  {t.name}
                </h4>
                <p className="text-xs text-slate-400">
                  {t.role}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t.company}
                </p>
                <div className="mt-2 text-[10px] text-slate-500 font-medium">
                  {t.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
