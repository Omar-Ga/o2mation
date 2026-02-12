import { motion } from 'framer-motion';
import { FileSearch, Layers, Code, Rocket, GitBranch } from 'lucide-react';
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
      color: "text-blue-400",
      glow: "shadow-[0_0_30px_-10px_rgba(96,165,250,0.3)]",
      border: "group-hover:border-blue-400/50"
    },
    {
      icon: Layers,
      title: t('process.steps.architecture.title'),
      desc: t('process.steps.architecture.desc'),
      step: t('process.stepNumbers.1'),
      color: "text-purple-400",
      glow: "shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)]",
      border: "group-hover:border-purple-400/50"
    },
    {
      icon: Code,
      title: t('process.steps.development.title'),
      desc: t('process.steps.development.desc'),
      step: t('process.stepNumbers.2'),
      color: "text-neon-green",
      glow: "shadow-[0_0_30px_-10px_rgba(0,255,128,0.3)]",
      border: "group-hover:border-neon-green/50"
    },
    {
      icon: Rocket,
      title: t('process.steps.deployment.title'),
      desc: t('process.steps.deployment.desc'),
      step: t('process.stepNumbers.3'),
      color: "text-orange-400",
      glow: "shadow-[0_0_30px_-10px_rgba(251,146,60,0.3)]",
      border: "group-hover:border-orange-400/50"
    }
  ], [t]);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background - Clean */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/5 text-white font-mono text-xs tracking-widest mb-6"
          >
            <GitBranch size={14} />
            <span>{t('process.pipeline')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          >
            <Trans
              i18nKey="process.title"
              t={t}
              components={{ 
                gradient: <span className="text-white" />
              }}
            />
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Animated Connector Line (Desktop) - Made Monochrome */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[1px] bg-zinc-800 -translate-x-8 z-0 overflow-hidden">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    style={{ willChange: "transform" }}
                  />
                </div>
              )}

              <div className={`
                h-full p-8 rounded-3xl border border-white/5 bg-zinc-900 
                transition-all duration-500 relative z-10 overflow-hidden group-hover:-translate-y-2
                group-hover:bg-zinc-800 group-hover:border-neon-green/30 group-hover:shadow-[0_0_30px_-10px_rgba(0,255,163,0.15)]
              `}>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`
                      p-4 rounded-2xl bg-black/50 border border-white/5 text-white
                      group-hover:scale-110 group-hover:text-neon-green group-hover:border-neon-green/30 transition-all duration-500
                    `}>
                      <step.icon size={28} />
                    </div>
                    <span className="font-mono text-4xl font-black text-zinc-800 group-hover:text-neon-green/20 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 group-hover:text-neon-green transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
