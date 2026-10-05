import React, { useState } from 'react';
import { CandidateProfile } from '../types/portfolio';
import { X, Save, RotateCcw, UserCheck } from 'lucide-react';
import { DEFAULT_PROFILE } from '../data/defaultData';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CandidateProfile;
  onSaveProfile: (updatedProfile: CandidateProfile) => void;
}

export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile
}) => {
  const [formData, setFormData] = useState<CandidateProfile>({ ...profile });

  if (!isOpen) return null;

  const handleChange = (field: keyof CandidateProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSalaryChange = (field: keyof CandidateProfile['salaryExpectation'], value: string) => {
    setFormData((prev) => ({
      ...prev,
      salaryExpectation: {
        ...prev.salaryExpectation,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_PROFILE });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Personalizar Meu Dossiê Executivo
              </h2>
              <p className="text-xs text-slate-400">
                Ajuste os dados para refletir sua experiência, dados de contato e pretensão
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

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Título / Cargo Alvo
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
              Resumo Executivo (Pitch de 30 segundos)
            </label>
            <textarea
              rows={3}
              value={formData.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Modelo de Trabalho
              </label>
              <input
                type="text"
                value={formData.workModel}
                onChange={(e) => handleChange('workModel', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Disponibilidade
              </label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Localidade
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                E-mail de Contato
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                WhatsApp / Telefone
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Link do LinkedIn
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                Link do GitHub
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <span className="font-bold text-emerald-400 uppercase tracking-wider block text-[11px]">
              Pretensão Salarial & Taxas (Visível aos Recrutadores)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 text-[11px]">Faixa CLT</label>
                <input
                  type="text"
                  value={formData.salaryExpectation.clt}
                  onChange={(e) => handleSalaryChange('clt', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-slate-200 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 text-[11px]">Taxa PJ</label>
                <input
                  type="text"
                  value={formData.salaryExpectation.pj}
                  onChange={(e) => handleSalaryChange('pj', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-slate-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar Dossiê</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
