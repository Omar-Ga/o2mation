import { motion } from 'framer-motion';
import { Cpu, Globe, Workflow } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { useMemo } from 'react';

export const Solution = () => {
  const { t } = useTranslation('home');

  const solutions = useMemo(() => [
    {
      icon: Workflow,
      title: t('solution.items.automation.title'),
      desc: t('solution.items.automation.desc'),
      delay: 0
    },
    {
      icon: Globe,
      title: t('solution.items.integration.title'),
      desc: t('solution.items.integration.desc'),
      delay: 0.2
    },
    {
      icon: Cpu,
      title: t('solution.items.ai.title'),
      desc: t('solution.items.ai.desc'),
      delay: 0.4
    }
  ], [t]);

  return (
    <section className="relative py-32 bg-charcoal text-white overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            <Trans
              i18nKey="solution.title"
              components={{ 
                br: <br />,
                green: <span className="text-neon-green" />
              }}
            />
          </motion.h2>
          <div className="w-24 h-1 bg-neon-green mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group p-8 border border-white/10 bg-charcoal-light/50 backdrop-blur-sm hover:border-neon-green/50 transition-colors rounded-xl"
            >
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-lg group-hover:bg-neon-green/10 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <item.icon className="w-8 h-8 text-neon-green relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {item.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-green text-sm font-mono">
                  {t('solution.active')}
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
