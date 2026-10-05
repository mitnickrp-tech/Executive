import React, { useState } from 'react';
import { Calculator, CheckCircle } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(12);
  const [monthlyCloudSpend, setMonthlyCloudSpend] = useState<number>(150000);
  const [incidentHoursPerYear, setIncidentHoursPerYear] = useState<number>(16);
  const [hourlyIncidentCost, setHourlyIncidentCost] = useState<number>(35000);

  const annualCloudSavings = monthlyCloudSpend * 12 * 0.25;
  const annualDevHoursSavings = teamSize * 15 * 12 * 90;
  const annualDowntimeSavings = incidentHoursPerYear * 0.8 * hourlyIncidentCost;
  const totalAnnualImpact = annualCloudSavings + annualDevHoursSavings + annualDowntimeSavings;

  const estimatedCost = 380000;
  const roiMultiplier = ((totalAnnualImpact / estimatedCost) * 100).toFixed(0);
  const paybackMonths = Math.max(1, (estimatedCost / (totalAnnualImpact / 12))).toFixed(1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-16 md:py-24 bg-[#090d15] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
            Simulador de Retorno do Investimento
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculadora de ROI & Valor Agregado para Sua Empresa
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Contratar um Staff Engineer / Tech Lead não é um custo, mas um investimento com retorno financeiro auditável. Ajuste os parâmetros da sua empresa abaixo e simule o impacto anual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Parâmetros da sua Operação</span>
            </h3>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="text-slate-300 font-medium">Tamanho do Time de Engenharia (Devs)</label>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">{teamSize} engenheiros</span>
              </div>
              <input
                type="range"
                min="4"
                max="50"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[11px] text-slate-500 block">
                Permite estimar o ganho de produtividade com CI/CD e mentoria técnica.
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="text-slate-300 font-medium">Fatura Mensal de Cloud (AWS / GCP / Azure)</label>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">{formatCurrency(monthlyCloudSpend)}/mês</span>
              </div>
              <input
                type="range"
                min="20000"
                max="600000"
                step="10000"
                value={monthlyCloudSpend}
                onChange={(e) => setMonthlyCloudSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[11px] text-slate-500 block">
                Estimativa conservadora de 25% de redução com FinOps e autoscaling.
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="text-slate-300 font-medium">Horas de Instabilidade / Incidentes Críticos por Ano</label>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">{incidentHoursPerYear} horas/ano</span>
              </div>
              <input
                type="range"
                min="2"
                max="60"
                step="2"
                value={incidentHoursPerYear}
                onChange={(e) => setIncidentHoursPerYear(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[11px] text-slate-500 block">
                Redução esperada de 80% do tempo de indisponibilidade com resiliência.
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="text-slate-300 font-medium">Prejuízo Estimado por Hora Fora do Ar</label>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">{formatCurrency(hourlyIncidentCost)}/h</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={hourlyIncidentCost}
                onChange={(e) => setHourlyIncidentCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[11px] text-slate-500 block">
                Vendas perdidas, multas de SLA ou custo de retrabalho da equipe.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Retorno Anual Projetado
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
                {formatCurrency(totalAnnualImpact)}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Estimativa anual de valor gerado entre economia direta e prevenção de perdas.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-200 block">Economia Direta em Nuvem (FinOps)</span>
                  <span className="text-slate-500 text-[11px]">Otimização de instâncias, cache e queries</span>
                </div>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {formatCurrency(annualCloudSavings)}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-200 block">Gargalos Eliminados & Eficiência do Time</span>
                  <span className="text-slate-500 text-[11px]">~180h/ano recuperadas por desenvolvedor</span>
                </div>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {formatCurrency(annualDevHoursSavings)}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-200 block">Prejuízos Evitados com Quedas & Bugs</span>
                  <span className="text-slate-500 text-[11px]">Proteção da receita crítica e imagem de marca</span>
                </div>
                <span className="font-mono font-bold text-white tabular-nums text-sm">
                  {formatCurrency(annualDowntimeSavings)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">ROI Estimado</span>
                <span className="text-xl font-bold text-emerald-400 font-mono tabular-nums">
                  {roiMultiplier}%
                </span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Payback do Pacote</span>
                <span className="text-xl font-bold text-white font-mono tabular-nums">
                  {paybackMonths} meses
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Conclusão Executiva:</strong> A contratação se autofinancia nos primeiros meses de atuação através da estagnação da queima de cloud e aceleração dos deploys.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
