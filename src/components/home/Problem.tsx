import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Problem = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for "chaos"
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  
  return (
    <section ref={containerRef} className="relative py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="text-gray-500 line-through decoration-neon-green/50 decoration-4">Chaos</span> of <br />
            <span className="text-white">Manual Workflows</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Spreadsheets that don't sync. Emails that get lost. Data entry that eats your time.
            Legacy systems are holding you back.
          </motion.p>
        </div>

        {/* Chaotic Elements */}
        <div className="relative h-[400px] w-full max-w-5xl mx-auto opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <motion.div 
            style={{ x: x1, rotate: rotate1 }}
            className="absolute top-10 left-0 md:left-20 p-6 bg-charcoal-light border border-gray-800 rounded-lg shadow-2xl"
          >
            <div className="font-mono text-sm text-red-400">Error: Connection Timeout</div>
            <div className="w-48 h-2 bg-gray-800 mt-2 rounded-full" />
            <div className="w-32 h-2 bg-gray-800 mt-2 rounded-full" />
          </motion.div>

          <motion.div 
            style={{ x: x2, rotate: rotate2 }}
            className="absolute top-40 right-0 md:right-20 p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
          >
             <div className="font-mono text-sm text-gray-300">Invoice_FINAL_v2_REAL.pdf</div>
             <div className="font-mono text-xs text-gray-500 mt-1">Last modified: 2019</div>
          </motion.div>

          <motion.div 
            style={{ y: x1 }}
            className="absolute bottom-10 left-1/4 p-6 bg-charcoal-light border border-gray-800 rounded-lg"
          >
             <div className="flex gap-2 mb-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
             </div>
             <div className="font-mono text-sm text-gray-400">Sync Failed</div>
          </motion.div>
        </div>
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </section>
  );
};
