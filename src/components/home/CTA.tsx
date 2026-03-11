import { motion } from 'framer-motion';
import { Power } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export const CTA = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-32 bg-white dark:bg-charcoal relative overflow-hidden flex items-center justify-center">
      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          <Trans
            i18nKey="cta.title"
            t={t}
            components={{ 
              green: <span className="text-neon-green" />
            }}
          />
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto whitespace-pre-line"
        >
          {t('cta.text')}
        </motion.p>

        <Link to="/contact" className="inline-block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-neon-green text-charcoal text-xl font-bold rounded-none hover:bg-white transition-colors uppercase tracking-widest overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Power size={24} />
              {t('cta.button')}
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </motion.div>
        </Link>
        
        <div className="mt-8 flex justify-center gap-8 text-sm font-mono text-gray-600">
          <span>{t('cta.secure')}</span>
          <span>{t('cta.monitoring')}</span>
        </div>
      </div>
    </section>
  );
};
