import React from 'react';
import { EXECUTIVE_METRICS } from '../data/defaultData';
import { TrendingUp, ShieldCheck, Zap, Users } from 'lucide-react';

const icons = [TrendingUp, ShieldCheck, Zap, Users];

export const ExecutiveMetricsBar: React.FC = () => {
  return (
    <section className="py-12 bg-[#090d15] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Impacto Comprovado em Produção
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Resultados de Negócio em Escala Corporativa
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Métricas auditadas de eficiência financeira, confiabilidade arquitetural e aceleração de squads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXECUTIVE_METRICS.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={metric.id}
                className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700/80 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums font-mono">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/80 text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-slate-200 mb-1.5 leading-snug">
                  {metric.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {metric.description}
                </p>

                <div className="pt-2.5 border-t border-slate-800/60 text-[11px] text-slate-500 font-medium">
                  {metric.context}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
