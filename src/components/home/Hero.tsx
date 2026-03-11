import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowDown, Terminal, Wifi } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { GlitchTitle } from './hero/GlitchTitle';
import { TerminalText } from './hero/TerminalText';
import { ReactiveGrid } from './hero/ReactiveGrid';
import { BackgroundEffects } from './hero/BackgroundEffects';

export const Hero = () => {
  const { t } = useTranslation('home');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for background effect - using MotionValues to avoid re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-charcoal text-black dark:text-white pt-20 group perspective-1000"
    >
      {/* Isolated Heavy Background Effects */}
      <BackgroundEffects mouseX={mouseX} mouseY={mouseY} />

      {/* Isolated Interactive Grid */}
      <ReactiveGrid />

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <motion.div 
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full pointer-events-none"
      >
        {/* Top Status Bar - Static enough to stay here */}
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-12 text-xs font-mono text-gray-500 border-b border-gray-800 pb-2 pointer-events-auto">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
             <span>{t('hero.system.online')}</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse delay-75" />
             <Wifi size={14} />
             <span>{t('hero.system.latency', { val: 12 })}</span>
           </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono mb-6">
            <Terminal size={12} />
            <span>{t('hero.version')}</span>
          </div>
          
          <h2 className="text-neon-green font-mono text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
            {t('hero.mainTitle')}
          </h2>
        </motion.div>

        {/* Isolated Heavy Glitch Title */}
        <div className="pointer-events-auto">
          <GlitchTitle />
        </div>
          
        {/* Isolated Terminal Typing Effect */}
        <div className="pointer-events-auto">
          <TerminalText />
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('hero.description.part1')} <span className="text-black dark:text-white font-semibold border-b border-neon-green/30">{t('hero.description.highlight1')}</span>{t('hero.description.comma')}<span className="text-black dark:text-white font-semibold border-b border-neon-green/30">{t('hero.description.highlight2')}</span>{t('hero.description.and')}<span className="text-neon-green font-semibold">{t('hero.description.highlight3')}</span> {t('hero.description.part2')}
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-neon-green/80 tracking-widest uppercase">{t('hero.scroll')}</span>
          <ArrowDown className="text-neon-green w-6 h-6 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};
