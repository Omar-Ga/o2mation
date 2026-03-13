import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CTA = () => {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-lg font-display font-extrabold mb-6 text-white"
        >
          {t('cta.headline.line1')}{' '}
          <span className="text-brand">{t('cta.headline.highlight')}</span>
          {t('cta.headline.line2')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {t('cta.text')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 bg-brand text-charcoal font-display font-bold text-lg rounded-lg hover:bg-brand/90 transition-colors inline-flex items-center gap-3"
            >
              {t('cta.button')}
              <ArrowRight size={20} className={`transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-8 text-xs font-mono text-gray-600"
        >
          <span>{t('cta.secure')}</span>
          <span className="text-gray-700">•</span>
          <span>{t('cta.monitoring')}</span>
        </motion.div>
      </div>
    </section>
  );
};
