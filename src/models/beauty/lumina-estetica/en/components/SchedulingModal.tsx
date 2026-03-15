'use client';

import React, { useState } from 'react';
import { X, Sparkles, Zap, Droplets, Sun, ArrowRight, Check } from 'lucide-react';
import Button from './Button';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ treatment: '', time: '' });

  if (!isOpen) return null;

  const handleSelect = (key: string, value: string) => setData({ ...data, [key]: value });
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const finish = () => {
    const msg = `Hello!%20I%20would%20like%20to%20book%20an%20assessment%20at%20Lumina%20Aesthetics.%0A%0ATreatment%20of%20interest:%20${data.treatment}%0APreferred%20time:%20${data.time}`;
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    onClose();
    setTimeout(() => {
      setStep(1);
      setData({ treatment: '', time: '' });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 animate-slide-up">

        <div className="bg-gradient-to-r from-[#C89B6B] to-[#A67C52] p-6 flex justify-between items-center text-white">
          <div>
            <h3 className="text-xl font-bold">Book an Assessment</h3>
            <p className="text-white/80 text-sm">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">

          {step === 1 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-stone-800 text-center">
                Which treatment interests you?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'Facial Harmonization', icon: <Sparkles />, label: 'Facial Harmonization' },
                  { id: 'Biostimulators', icon: <Zap />, label: 'Biostimulators' },
                  { id: 'Skin Protocols', icon: <Droplets />, label: 'Skin Protocols' },
                  { id: 'Laser', icon: <Sun />, label: 'Laser Technology' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('treatment', opt.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                      data.treatment === opt.id
                        ? 'bg-[#F5EDE3] border-[#C89B6B] text-[#7C5C3E] shadow-md ring-1 ring-[#C89B6B]'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-[#C89B6B]/50 hover:bg-stone-50'
                    }`}
                  >
                    <div className={data.treatment === opt.id ? 'text-[#C89B6B]' : 'text-stone-400'}>
                      {opt.icon}
                    </div>
                    <span className="font-medium text-sm">{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button onClick={nextStep} disabled={!data.treatment} className="w-full sm:w-auto">
                  Continue <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-stone-800 text-center">
                What's the best time for you?
              </h4>
              <div className="space-y-3">
                {['Morning (9am - 12pm)', 'Afternoon (1pm - 5pm)', 'Late afternoon (5pm - 7pm)', 'Saturday (9am - 2pm)'].map(
                  (opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect('time', opt)}
                      className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all ${
                        data.time === opt
                          ? 'bg-[#F5EDE3] border-[#C89B6B] text-[#7C5C3E] shadow-md'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-[#C89B6B]/50'
                      }`}
                    >
                      <span className="font-medium">{opt}</span>
                      {data.time === opt && <Check size={20} className="text-[#C89B6B]" />}
                    </button>
                  )
                )}
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={prevStep} className="text-stone-500 font-medium px-4 hover:text-stone-800">
                  Back
                </button>
                <Button onClick={nextStep} disabled={!data.time}>
                  Continue <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#F5EDE3] rounded-full flex items-center justify-center mx-auto text-[#C89B6B]">
                <Sparkles size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-stone-800 mb-2">All set!</h4>
                <p className="text-stone-600">
                  We'll redirect you to our WhatsApp with the details pre-filled to speed up your booking.
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-xl text-left text-sm text-stone-700 border border-stone-200">
                <p><strong>Treatment:</strong> {data.treatment}</p>
                <p><strong>Time preference:</strong> {data.time}</p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button onClick={prevStep} className="text-stone-500 font-medium px-4 hover:text-stone-800">
                  Back
                </button>
                <Button onClick={finish} className="!w-auto flex-1 ml-4">
                  Finish on WhatsApp
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
