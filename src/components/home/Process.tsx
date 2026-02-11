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
      step: "01",
      color: "text-blue-400",
      glow: "shadow-[0_0_30px_-10px_rgba(96,165,250,0.3)]",
      border: "group-hover:border-blue-400/50"
    },
    {
      icon: Layers,
      title: t('process.steps.architecture.title'),
      desc: t('process.steps.architecture.desc'),
      step: "02",
      color: "text-purple-400",
      glow: "shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)]",
      border: "group-hover:border-purple-400/50"
    },
    {
      icon: Code,
      title: t('process.steps.development.title'),
      desc: t('process.steps.development.desc'),
      step: "03",
      color: "text-neon-green",
      glow: "shadow-[0_0_30px_-10px_rgba(0,255,128,0.3)]",
      border: "group-hover:border-neon-green/50"
    },
    {
      icon: Rocket,
      title: t('process.steps.deployment.title'),
      desc: t('process.steps.deployment.desc'),
      step: "04",
      color: "text-orange-400",
      glow: "shadow-[0_0_30px_-10px_rgba(251,146,60,0.3)]",
      border: "group-hover:border-orange-400/50"
    }
  ], [t]);

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,128,0.1),transparent_50%)]" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-green font-mono text-xs tracking-widest mb-6"
          >
            <GitBranch size={14} />
            <span>{t('process.pipeline')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            <Trans
              i18nKey="process.title"
              components={{ 
                gradient: <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500" />
              }}
            />
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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
              {/* Animated Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] bg-charcoal-light -translate-x-8 z-0 overflow-hidden">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-r from-transparent via-neon-green to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    style={{ willChange: "transform" }}
                  />
                </div>
              )}

              <div className={`
                h-full p-8 rounded-3xl border border-white/5 bg-charcoal/50 backdrop-blur-xl 
                transition-all duration-500 relative z-10 overflow-hidden group-hover:-translate-y-2
                ${step.border} ${step.glow}
              `}>
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`
                      p-4 rounded-2xl bg-white/5 border border-white/10 
                      group-hover:scale-110 transition-transform duration-500
                      ${step.color}
                    `}>
                      <step.icon size={28} />
                    </div>
                    <span className="font-mono text-4xl font-black text-white/40 group-hover:text-white/50 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
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
