'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, User, Phone, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  message: string;
}

const professionKeys = [
  'doctor',
  'dentist',
  'nutritionist',
  'physiotherapist',
  'psychologist',
  'lawyer',
  'personalTrainer',
  'hairdresser',
  'esthetician',
  'teacher',
  'coach',
  'other',
] as const;

interface QuickMessage {
  id: string;
  label: string;
  message: string;
}

const getQuickMessages = (t: (key: string) => string): QuickMessage[] => [
  {
    id: 'pricing',
    label: t('quickMessages.pricing.label'),
    message: t('quickMessages.pricing.message'),
  },
  {
    id: 'custom',
    label: t('quickMessages.custom.label'),
    message: t('quickMessages.custom.message'),
  },
  {
    id: 'deadline',
    label: t('quickMessages.deadline.label'),
    message: t('quickMessages.deadline.message'),
  },
  {
    id: 'demo',
    label: t('quickMessages.demo.label'),
    message: t('quickMessages.demo.message'),
  },
  {
    id: 'seo',
    label: t('quickMessages.seo.label'),
    message: t('quickMessages.seo.message'),
  },
];

export function LeadForm() {
  const t = useTranslations('leadForm');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    profession: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedQuickMessage, setSelectedQuickMessage] = useState<string | null>(null);

  const quickMessages = getQuickMessages(t);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickMessageSelect = (quickMessage: QuickMessage) => {
    setSelectedQuickMessage(quickMessage.id);
    setFormData((prev) => ({ ...prev, message: quickMessage.message }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simula envio de email (integrar com API de email depois)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Abre WhatsApp com os dados preenchidos
      const phoneNumber = '+5514991071072';
      const professionLabel = formData.profession ? t(`professions.${formData.profession}`) : '';
      const introLine = formData.profession
        ? t('whatsapp.introWithProfession', { profession: professionLabel })
        : t('whatsapp.introWithoutProfession');
      const messageBody = formData.message || t('whatsapp.defaultMessage');
      const whatsappMessage = [
        t('whatsapp.intro', { name: formData.name }),
        '',
        introLine,
        '',
        t('whatsapp.dataSection'),
        `- ${t('whatsapp.nameLabel')}: ${formData.name}`,
        `- ${t('whatsapp.emailLabel')}: ${formData.email}`,
        `- ${t('whatsapp.phoneLabel')}: ${formData.phone}`,
        `- ${t('whatsapp.professionLabel')}: ${professionLabel}`,
        '',
        `${t('whatsapp.messageLabel')}:`,
        messageBody,
      ].join('\n');

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
      window.open(url, '_blank', 'noopener,noreferrer');

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        profession: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-10 px-6 py-32" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard variant="bordered" className="p-8 md:p-12">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('success.title')}</h3>
                <p className="text-muted-foreground">{t('success.message')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-primary" />
                      {t('fields.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('fields.name.placeholder')}
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-card border border-border/50',
                        'text-foreground placeholder:text-muted-foreground',
                        'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                        'transition-all duration-300'
                      )}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      {t('fields.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('fields.email.placeholder')}
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-card border border-border/50',
                        'text-foreground placeholder:text-muted-foreground',
                        'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                        'transition-all duration-300'
                      )}
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      {t('fields.phone.label')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('fields.phone.placeholder')}
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-card border border-border/50',
                        'text-foreground placeholder:text-muted-foreground',
                        'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                        'transition-all duration-300'
                      )}
                    />
                  </div>

                  {/* Profissão */}
                  <div className="space-y-2">
                    <label
                      htmlFor="profession"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <Briefcase className="w-4 h-4 text-primary" />
                      {t('fields.profession.label')}
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-card border border-border/50',
                        'text-foreground',
                        'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                        'transition-all duration-300',
                        'appearance-none cursor-pointer'
                      )}
                    >
                      <option value="">{t('fields.profession.placeholder')}</option>
                      {professionKeys.map((key) => (
                        <option key={key} value={key}>
                          {t(`professions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensagens rápidas */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    {t('quickMessages.title')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickMessages.map((quickMsg) => (
                      <button
                        key={quickMsg.id}
                        type="button"
                        onClick={() => handleQuickMessageSelect(quickMsg)}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm font-medium',
                          'border transition-all duration-300',
                          selectedQuickMessage === quickMsg.id
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-card border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5'
                        )}
                      >
                        {quickMsg.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {t('fields.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('fields.message.placeholder')}
                    rows={4}
                    className={cn(
                      'w-full px-4 py-3 rounded-xl',
                      'bg-card border border-border/50',
                      'text-foreground placeholder:text-muted-foreground',
                      'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                      'transition-all duration-300',
                      'resize-none'
                    )}
                  />
                </div>

                {/* Botão de envio */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('submit')}
                  </Button>
                </div>

                {/* Informação adicional */}
                <p className="text-center text-sm text-muted-foreground pt-4">
                  {t('privacy')}
                </p>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
