import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const Solution = () => {
  const { t } = useTranslation('home');

  const caseStudies = useMemo(() => [
    {
      icon: DollarSign,
      metric: t('solution.cases.logistics.metric'),
      metricLabel: t('solution.cases.logistics.metricLabel'),
      title: t('solution.cases.logistics.title'),
      desc: t('solution.cases.logistics.desc'),
      tags: t('solution.cases.logistics.tags', { returnObjects: true }) as string[],
      color: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      icon: Clock,
      metric: t('solution.cases.finance.metric'),
      metricLabel: t('solution.cases.finance.metricLabel'),
      title: t('solution.cases.finance.title'),
      desc: t('solution.cases.finance.desc'),
      tags: t('solution.cases.finance.tags', { returnObjects: true }) as string[],
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      icon: TrendingUp,
      metric: t('solution.cases.retail.metric'),
      metricLabel: t('solution.cases.retail.metricLabel'),
      title: t('solution.cases.retail.title'),
      desc: t('solution.cases.retail.desc'),
      tags: t('solution.cases.retail.tags', { returnObjects: true }) as string[],
      color: 'from-amber-500/20 to-amber-500/5',
    }
  ], [t]);

  return (
    <section className="relative py-28 bg-surface dark:bg-charcoal overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-dim dark:via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-brand-muted" />
            <span className="text-brand-muted font-mono text-xs tracking-wider uppercase">{t('solution.eyebrow')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-lg font-display font-extrabold tracking-tight mb-4 text-ink dark:text-white"
          >
            {t('solution.headline.line1')}{' '}
            <span className="text-brand">{t('solution.headline.highlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ink-muted dark:text-gray-400 text-lg max-w-2xl"
          >
            {t('solution.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl border border-surface-dim dark:border-white/10 bg-white dark:bg-charcoal-light/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-brand/5"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Big metric */}
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-ink dark:text-white mb-1">
                    {study.metric}
                  </div>
                  <div className="text-sm font-mono text-brand-muted uppercase tracking-wider">
                    {study.metricLabel}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-ink dark:text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-ink-muted dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {study.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surface dark:bg-white/5 text-ink-muted dark:text-gray-500 border border-surface-dim dark:border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
