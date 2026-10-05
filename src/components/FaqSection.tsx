import React, { useState } from 'react';
import { FREQUENT_INTERVIEW_QUESTIONS } from '../data/defaultData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0b0f17] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Transparência & Alinhamento
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes em Entrevistas Técnicas & Culturais
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Respostas diretas sobre decisões arquiteturais, gestão de crises e postura de liderança em engenharia.
          </p>
        </div>

        <div className="space-y-3">
          {FREQUENT_INTERVIEW_QUESTIONS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/90 transition-colors"
                >
                  <span className="text-sm font-semibold text-white leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
