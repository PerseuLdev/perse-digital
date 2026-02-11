'use client';

import React, { useState } from 'react';
import { X, Calendar, Smile, Zap, Activity, ArrowRight, Check } from 'lucide-react';
import Button from './Button';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    reason: '',
    time: ''
  });

  if (!isOpen) return null;

  const handleOptionSelect = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const finishScheduling = () => {
    const message = `Olá! Gostaria de agendar uma consulta.%0A%0AMotivo: ${data.reason}%0APreferência: ${data.time}`;
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    onClose();
    setTimeout(() => {
        setStep(1);
        setData({ reason: '', time: '' });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 animate-slide-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-6 flex justify-between items-center text-white">
          <div>
            <h3 className="text-xl font-bold">Agendamento Inteligente</h3>
            <p className="text-teal-100 text-sm">Passo {step} de 3</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          
          {/* Step 1: Reason */}
          {step === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 text-center">O que podemos fazer por você hoje?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'Dor/Emergência', icon: <Activity />, label: 'Dor ou Emergência' },
                  { id: 'Estética', icon: <Smile />, label: 'Estética / Lentes' },
                  { id: 'Limpeza', icon: <Zap />, label: 'Limpeza / Check-up' },
                  { id: 'Avaliação', icon: <Calendar />, label: 'Avaliação Geral' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect('reason', opt.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                      data.reason === opt.id 
                        ? 'bg-teal-50 border-teal-500 text-teal-700 shadow-md ring-1 ring-teal-500' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`${data.reason === opt.id ? 'text-teal-600' : 'text-slate-400'}`}>
                      {opt.icon}
                    </div>
                    <span className="font-medium text-sm">{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button 
                    onClick={nextStep} 
                    disabled={!data.reason}
                    className="w-full sm:w-auto"
                >
                  Continuar <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Time */}
          {step === 2 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800 text-center">Qual o melhor período para você?</h4>
              <div className="space-y-3">
                {['Manhã (08h - 12h)', 'Tarde (13h - 18h)', 'Sábado (08h - 14h)'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionSelect('time', opt)}
                    className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                      data.time === opt 
                        ? 'bg-teal-50 border-teal-500 text-teal-700 shadow-md' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300'
                    }`}
                  >
                    <span className="font-medium">{opt}</span>
                    {data.time === opt && <Check size={20} className="text-teal-600" />}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={prevStep} className="text-slate-500 font-medium px-4 hover:text-slate-800">Voltar</button>
                <Button onClick={nextStep} disabled={!data.time}>
                  Continuar <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-bounce-slow">
                <Calendar size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Tudo pronto!</h4>
                <p className="text-slate-600">
                    Vamos redirecionar você para nosso WhatsApp com os detalhes pré-preenchidos para agilizar seu atendimento.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-left text-sm text-slate-700 border border-slate-200">
                <p><strong>Motivo:</strong> {data.reason}</p>
                <p><strong>Período:</strong> {data.time}</p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button onClick={prevStep} className="text-slate-500 font-medium px-4 hover:text-slate-800">Voltar</button>
                <Button onClick={finishScheduling} className="!w-auto flex-1 ml-4">
                  Finalizar no WhatsApp
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SchedulingModal;