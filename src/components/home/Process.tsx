import { motion } from 'framer-motion';
import { FileSearch, Layers, Code, Rocket } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { useMemo } from 'react';

export const Process = () => {
  const { t } = useTranslation('home');

  const steps = useMemo(() => [
    {
      icon: FileSearch,
      title: t('process.steps.discovery.title'),
      desc: t('process.steps.discovery.desc'),
      step: t('process.stepNumbers.0'),
      accent: 'group-hover:border-blue-400/40 group-hover:shadow-blue-400/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: Layers,
      title: t('process.steps.architecture.title'),
      desc: t('process.steps.architecture.desc'),
      step: t('process.stepNumbers.1'),
      accent: 'group-hover:border-purple-400/40 group-hover:shadow-purple-400/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: Code,
      title: t('process.steps.development.title'),
      desc: t('process.steps.development.desc'),
      step: t('process.stepNumbers.2'),
      accent: 'group-hover:border-brand-muted/40 group-hover:shadow-brand-muted/10',
      iconColor: 'text-brand-muted',
    },
    {
      icon: Rocket,
      title: t('process.steps.deployment.title'),
      desc: t('process.steps.deployment.desc'),
      step: t('process.stepNumbers.3'),
      accent: 'group-hover:border-amber-400/40 group-hover:shadow-amber-400/10',
      iconColor: 'text-amber-400',
    }
  ], [t]);

  return (
    <section className="py-28 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-brand/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand font-mono text-xs tracking-widest mb-6"
          >
            <span>{t('process.pipeline')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-lg font-display font-extrabold mb-5"
          >
            <Trans
              i18nKey="process.title"
              t={t}
              components={{ 
                gradient: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400" />
              }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            {t('process.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative group"
            >
              {/* Connector (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-px bg-white/10 -translate-x-6 z-0" />
              )}

              <div className={`
                h-full p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm
                transition-all duration-500 relative z-10 group-hover:-translate-y-1
                group-hover:shadow-lg ${step.accent}
              `}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={24} />
                  </div>
                  <span className="font-mono text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
