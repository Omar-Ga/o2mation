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
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background - Clean Black */}
      
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
              t={t}
              components={{ 
                br: <br />,
                green: <span className="text-white" />
              }}
            />
          </motion.h2>
          <div className="w-24 h-1 bg-white mb-8" />
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
              className="group p-8 border border-white/5 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-3xl"
            >
              <div className="mb-6 p-4 bg-black/50 border border-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform relative overflow-hidden">
                <item.icon className="w-8 h-8 text-white relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {item.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 text-sm font-mono">
                  {t('solution.active')}
                </span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
