import React, { useState } from 'react';
import { JOB_PRESETS, CASE_STUDIES } from '../data/defaultData';
import { CaseStudy } from '../types/portfolio';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface JobMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const JobMatcherModal: React.FC<JobMatcherModalProps> = ({
  isOpen,
  onClose,
  onSelectCase
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(JOB_PRESETS[0].id);
  const [customJobDescription, setCustomJobDescription] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentPreset = JOB_PRESETS.find((p) => p.id === selectedPresetId) || JOB_PRESETS[0];

  const analysisKeywords = isCustomMode
    ? customJobDescription.toLowerCase()
    : (currentPreset.description + ' ' + currentPreset.keyRequirements.join(' ')).toLowerCase();

  const candidateSkills = [
    { key: 'distribuído', label: 'Sistemas Distribuídos & Event-Driven' },
    { key: 'kafka', label: 'Apache Kafka & Messaging' },
    { key: 'arquitetura', label: 'Arquitetura de Alta Disponibilidade' },
    { key: 'liderança', label: 'Liderança Técnica & Mentoria' },
    { key: 'cloud', label: 'AWS / Cloud Computing' },
    { key: 'aws', label: 'AWS & Kubernetes (EKS)' },
    { key: 'finops', label: 'FinOps & Otimização de Custos' },
    { key: 'ci/cd', label: 'CI/CD & Métricas DORA' },
    { key: 'typescript', label: 'TypeScript & Node.js' },
    { key: 'react', label: 'React / Next.js' },
    { key: 'postgres', label: 'PostgreSQL & Databases' },
    { key: 'resiliência', label: 'Resiliência & Confiabilidade' },
    { key: 'go', label: 'Go (Golang)' }
  ];

  const matchedKeywords = candidateSkills.filter((s) =>
    analysisKeywords.includes(s.key) ||
    analysisKeywords.includes(s.label.toLowerCase()) ||
    !isCustomMode
  );

  const matchScore = isCustomMode
    ? Math.min(98, Math.max(76, 75 + matchedKeywords.length * 3))
    : 96;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Simulador de Match com sua Vaga
              </h2>
              <p className="text-xs text-slate-400">
                Compare os requisitos da sua oportunidade com as competências e cases do candidato
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300 uppercase tracking-wider">
                Selecione o Perfil da Vaga ou Cole sua Descrição
              </span>
              <button
                onClick={() => setIsCustomMode(!isCustomMode)}
                className="text-emerald-400 hover:underline font-medium cursor-pointer"
              >
                {isCustomMode ? 'Usar Perfis Prontos' : 'Colar Descrição Própria'}
              </button>
            </div>

            {!isCustomMode ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {JOB_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPresetId(preset.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPresetId === preset.id
                        ? 'bg-slate-800/90 border-emerald-500/60 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-1">{preset.title}</span>
                    <span className="text-[11px] text-slate-500 block truncate">{preset.companyType}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <textarea
                  value={customJobDescription}
                  onChange={(e) => setCustomJobDescription(e.target.value)}
                  placeholder="Cole aqui os requisitos ou o texto completo da vaga (ex: Stack, responsabilidades, senioridade esperada)..."
                  rows={4}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                Índice de Compatibilidade Técnica & Cultural
              </span>
              <p className="text-xs text-slate-300 max-w-md">
                O histórico profissional cobre integralmente os requisitos de liderança técnica, resiliência de produção e entrega de valor comprovada.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  {matchScore}%
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Altíssimo Fit</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Competências Alinhadas com os Requisitos
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {matchedKeywords.slice(0, 6).map((kw, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{kw.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Cases que Comprovam a Experiência Prática nesta Vaga
            </span>
            <div className="space-y-2">
              {CASE_STUDIES.map((c) => (
                <div
                  key={c.id}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <h4 className="font-bold text-white mb-0.5">{c.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{c.primaryImpact}</p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectCase(c);
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium transition-colors cursor-pointer shrink-0"
                  >
                    <span>Ver Provas</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-slate-300 uppercase text-[11px] block">
              Perguntas Recomendadas para o Alinhamento com o Candidato
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>• "Como você conduziu a migração para Kafka reduzindo o p99 de 1.450ms para 68ms?"</li>
              <li>• "Qual estratégia garantiu a redução de 62% em custos AWS sem afetar a entrega?"</li>
              <li>• "Como você treina e desenvolve engenheiros juniores e plenos no dia a dia?"</li>
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Pronto para avançar para a próxima etapa?
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
          >
            Continuar Explorando
          </button>
        </div>
      </div>
    </div>
  );
};
