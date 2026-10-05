import React, { useState } from 'react';
import { CandidateProfile } from '../types/portfolio';
import { X, Calendar, CheckCircle2, Send, MessageSquare, Mail } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CandidateProfile;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [meetingType, setMeetingType] = useState('Alinhamento Rápido (20 min)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const emailSubject = encodeURIComponent(`Oportunidade na ${recruiterCompany || 'nossa empresa'} - Contato via Dossiê Executivo`);
  const emailBody = encodeURIComponent(
    `Olá ${profile.name},\n\nMeu nome é ${recruiterName || 'Recrutador(a)'} da ${recruiterCompany || 'minha empresa'}.\n\nGostei muito do seu perfil e dos cases de negócio no seu dossiê executivo. Gostaria de agendar um ${meetingType} para falarmos sobre uma oportunidade estratégica.\n\nMensagem adicional:\n${message || 'Podemos conversar esta semana?'}\n\nAbraços,\n${recruiterName}`
  );
  const directMailTo = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;

  const cleanPhone = profile.phone.replace(/\D/g, '');
  const waText = encodeURIComponent(
    `Olá ${profile.name}! Sou ${recruiterName || 'recrutador(a)'} da ${recruiterCompany || 'empresa'}. Vi seu dossiê executivo e gostaria de marcar uma conversa de 20 minutos.`
  );
  const waLink = `https://wa.me/${cleanPhone}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Agendar Conversa Executiva
              </h2>
              <p className="text-xs text-slate-400">
                Alinhamento direto de 20 minutos com {profile.name}
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

        <div className="p-6 sm:p-8 space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="Ex: Mariana Silva"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterCompany}
                    onChange={(e) => setRecruiterCompany(e.target.value)}
                    placeholder="Ex: Fintech / Tech Corp"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Seu E-mail Corporativo
                </label>
                <input
                  type="email"
                  required
                  value={recruiterEmail}
                  onChange={(e) => setRecruiterEmail(e.target.value)}
                  placeholder="mariana@empresa.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Formato da Conversa
                </label>
                <select
                  value={meetingType}
                  onChange={(e) => setMeetingType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                >
                  <option>Alinhamento Rápido & Fit Cultural (20 min)</option>
                  <option>Deep Dive Técnico com Tech Lead / CTO (45 min)</option>
                  <option>Apresentação de Oferta & Modelo Contratual (30 min)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Breve Resumo da Vaga ou Dúvida
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva a faixa salarial, modelo de trabalho ou o principal desafio técnico da squad..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirmar Solicitação de Reunião</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-500">Ou entre em contato diretamente pelo WhatsApp:</span>
                <div className="mt-1">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chamar no WhatsApp ({profile.phone})</span>
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-white">
                Solicitação Registrada com Sucesso!
              </h3>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Obrigado, <strong className="text-white">{recruiterName}</strong>! Um convite de alinhamento com a pauta de <em>{meetingType}</em> foi registrado. {profile.name} responderá em até 2 horas úteis no e-mail <strong className="text-white">{recruiterEmail}</strong>.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={directMailTo}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium border border-slate-700"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Abrir no Seu Cliente de E-mail</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-950 text-xs font-semibold hover:bg-emerald-300 cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
