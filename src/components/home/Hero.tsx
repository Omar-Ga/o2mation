import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Terminal, Wifi } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing effect state
  const [text, setText] = useState('');
  const fullText = "Initialize system sequence... > Loading modules... > AI Agents: ONLINE > API Gateways: CONNECTED";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal text-white pt-20">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent h-[1px] w-full"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full"
      >
        {/* Top Status Bar */}
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-12 text-xs font-mono text-gray-500 border-b border-gray-800 pb-2">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
             <span>SYSTEM: ONLINE</span>
           </div>
           <div className="flex items-center gap-2">
             <Wifi size={14} />
             <span>LATENCY: 12ms</span>
           </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono mb-6">
            <Terminal size={12} />
            <span>v2.0.4 BUILD STABLE</span>
          </div>
          
          <h2 className="text-neon-green font-mono text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
            The Future of Digital Infrastructure
          </h2>
        </motion.div>

        <motion.h1 
          className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-8 leading-[0.85] mix-blend-screen"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        >
          O2<span className="text-transparent bg-clip-text bg-gradient-to-b from-neon-green to-emerald-800">MATION</span>
        </motion.h1>

        {/* Terminal Output */}
        <div className="h-8 font-mono text-sm text-neon-green/80 mb-12 min-h-[20px]">
          &gt; {text}<span className="animate-pulse">_</span>
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We build integrated ecosystems where <span className="text-white font-semibold border-b border-neon-green/30">web applications</span>, <span className="text-white font-semibold border-b border-neon-green/30">internal systems</span>, and <span className="text-neon-green font-semibold">AI agents</span> communicate seamlessly.
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-gray-600 tracking-widest">SCROLL TO INITIALIZE</span>
          <ArrowDown className="text-neon-green/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
