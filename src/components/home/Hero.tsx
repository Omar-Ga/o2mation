import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal text-white"
    >
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-brand/8 via-transparent to-emerald-900/10 blur-3xl pointer-events-none" />
      
      {/* Fine grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            {t('hero.eyebrow')}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="text-display-xl font-display font-extrabold mb-8 text-white"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.headline.line1')}{' '}
          <br className="hidden md:block" />
          <span className="text-brand">{t('hero.headline.highlight')}</span>
          {' '}{t('hero.headline.line2')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 bg-brand text-charcoal font-display font-bold text-base rounded-lg hover:bg-brand/90 transition-colors flex items-center gap-3"
            >
              {t('hero.cta.primary')}
              <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </motion.button>
          </Link>
          <Link to="/solutions">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white/5 text-white font-display font-semibold text-base rounded-lg border border-white/10 hover:border-brand/30 hover:bg-white/10 transition-all"
            >
              {t('hero.cta.secondary')}
            </motion.button>
          </Link>
        </motion.div>

        {/* Social proof strip */}
        <motion.div 
          className="mt-20 pt-10 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">{t('hero.socialProof.label')}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {(t('hero.socialProof.stats', { returnObjects: true }) as Array<{value: string, label: string}>).map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl font-display font-extrabold text-white">{stat.value}</span>
                <span className="text-sm text-gray-500 font-sans">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 bg-brand rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
