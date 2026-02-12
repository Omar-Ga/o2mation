import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useRef } from 'react';
import { GlitchTitle } from './hero/GlitchTitle';
import { ReactiveGrid } from './hero/ReactiveGrid';
import { BackgroundEffects } from './hero/BackgroundEffects';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for background effect
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20"
    >
      {/* Background Elements */}
      <BackgroundEffects mouseX={mouseX} mouseY={mouseY} />
      <ReactiveGrid />
      
      {/* Ambient Glows from user snippet - adapted to existing style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        
        {/* Top Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 md:gap-8 text-xs font-mono text-zinc-500 mb-8 md:mb-12 uppercase tracking-widest pointer-events-auto"
        >
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
             System: Online
           </div>
           <div className="hidden md:flex items-center gap-2">
             <span className="w-2 h-2 bg-zinc-700 rounded-full" />
             Latency: 12ms
           </div>
           <div className="px-3 py-1 border border-white/10 rounded-full text-white bg-white/5">
             v2.0.4 Build Stable
           </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-4 pointer-events-auto"
        >
          The Future of Digital Infrastructure
        </motion.p>
        
        {/* THE GLITCH TEXT */}
        <div className="mb-8 pointer-events-auto">
           <GlitchTitle />
        </div>
        
        {/* Initializing Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-zinc-400 text-xs md:text-sm flex flex-col md:flex-row gap-4 mb-12 pointer-events-auto"
        >
          <span>&gt; Initialize system sequence...</span>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span>&gt; Loading modules...</span>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="text-white">&gt; AI Agents: <span className="text-white">ONLINE</span></span>
        </motion.div>


        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 pointer-events-auto"
        >
          We build integrated ecosystems where <span className="text-white font-bold underline decoration-white/20 underline-offset-4">web applications</span>, <span className="text-white font-bold underline decoration-white/20 underline-offset-4">internal systems</span>, and <span className="text-white font-bold">AI agents</span> communicate seamlessly.
        </motion.p>

      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white cursor-pointer hover:text-neon-green transition-colors duration-300 pointer-events-auto"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs font-mono tracking-widest uppercase animate-pulse">Scroll to Initialize</span>
        <Zap size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
