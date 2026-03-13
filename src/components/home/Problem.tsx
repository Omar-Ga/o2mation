import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArrowRight, AlertTriangle, Zap } from 'lucide-react';

export const Problem = () => {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';

  const painPoints = useMemo(() => t('problem.painPoints', { returnObjects: true }) as Array<{ title: string; desc: string }>, [t]);
  const outcomes = useMemo(() => t('problem.outcomes', { returnObjects: true }) as Array<{ title: string; desc: string }>, [t]);

  return (
    <section className="py-28 bg-charcoal text-white relative overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-brand-muted" />
            <span className="text-brand-muted font-mono text-xs tracking-wider uppercase">{t('problem.eyebrow')}</span>
            <div className="h-px w-8 bg-brand-muted" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-lg font-display font-extrabold mb-5"
          >
            {t('problem.headline.line1')}{' '}
            <span className="text-brand">{t('problem.headline.highlight')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t('problem.subtitle')}
          </motion.p>
        </div>

        {/* Before → After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BEFORE column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-red-400">{t('problem.beforeLabel')}</h3>
            </div>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-red-500/10 bg-red-500/5 hover:border-red-500/20 transition-colors"
                >
                  <h4 className="font-display font-semibold text-white mb-1.5 text-[15px]">{point.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow divider (desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
              <ArrowRight size={20} className={`text-charcoal ${isRTL ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {/* AFTER column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-brand/10 border border-brand/20">
                <Zap size={16} className="text-brand" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand">{t('problem.afterLabel')}</h3>
            </div>
            <div className="space-y-4">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-xl border border-brand/10 bg-brand/5 hover:border-brand/20 transition-colors"
                >
                  <h4 className="font-display font-semibold text-white mb-1.5 text-[15px]">{outcome.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};