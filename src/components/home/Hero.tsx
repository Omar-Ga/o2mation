import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
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

  // Stable random delays for the glitch effect to prevent re-render jumps
  const glitchDelays = useRef(
    "O2MATION".split("").map(() => ({
      main: `-${Math.random() * 6}s`,
      ghost1: `-${Math.random() * 5}s`,
      ghost2: `-${Math.random() * 7}s`
    }))
  ).current;

  // Mouse tracking for background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Reactive Grid System
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const gridCells = useRef(Array.from({ length: 100 })).current; // 10x10 Grid for major interactions

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal text-white pt-20 group perspective-1000"
    >
      {/* 1. The "Distorted Signal" Noise Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[size:200px_200px] animate-static-shift" />
      </div>

      {/* 2. The Interactive Field */}
      <div className="absolute inset-0 z-0 flex flex-wrap overflow-hidden">
        {gridCells.map((_, i) => (
          <motion.div
            key={i}
            className="relative w-[10%] h-[10%] border-[0.5px] border-white/5 overflow-hidden"
            onMouseEnter={() => setHoveredCell(i)}
            onMouseLeave={() => setHoveredCell(null)}
          >
            {/* The "Cell" Reaction */}
            <motion.div
              className="absolute inset-0 bg-neon-green/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: hoveredCell === i ? 1 : 0,
                opacity: hoveredCell === i ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Random "Data" Streams inside cells */}
            {Math.random() > 0.7 && (
              <motion.div 
                className="absolute top-0 left-0 w-full h-full text-[8px] font-mono text-neon-green/30 p-1 break-all leading-none select-none pointer-events-none"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
              >
                {Array.from({ length: 20 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
              </motion.div>
            )}

            {/* Connecting Lines (Circuit Effect) */}
            <motion.div
               className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/10"
               animate={{ borderColor: hoveredCell === i ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.1)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* 3. The Mouse "Warper" (Distortion Field) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-difference"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 100%
            )
          `,
          backdropFilter: "blur(1px) invert(0)"
        }}
      />

      {/* 4. Floating Geometric Debris (3D Feel) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {Array.from({ length: 15 }).map((_, i) => (
           <motion.div
             key={`geo-${i}`}
             className="absolute border border-neon-green/20"
             style={{
               width: Math.random() * 100 + 50,
               height: Math.random() * 100 + 50,
               left: Math.random() * 100 + "%",
               top: Math.random() * 100 + "%",
             }}
             animate={{
               rotate: [0, 360],
               scale: [1, 1.2, 1],
               opacity: [0.1, 0.3, 0.1]
             }}
             transition={{
               duration: Math.random() * 20 + 20,
               repeat: Infinity,
               ease: "linear"
             }}
           />
         ))}
      </div>

      <style>{`
        .animate-static-shift {
          animation: static-shift 0.2s infinite steps(4);
        }
        @keyframes static-shift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-10px, 10px); }
          50% { transform: translate(5px, -5px); }
          75% { transform: translate(10px, 5px); }
          100% { transform: translate(0, 0); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

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

          <div className="relative inline-flex items-center tracking-tighter">
            <h1 className="flex text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] text-white select-none">
              {"O2MATION".split("").map((char, i) => (
                <div key={i} className="relative group inline-block">
                  {/* The Main Letter - Glitches & Clips */}
                  <span 
                    className="relative z-20 block animate-cable-mess" 
                    style={{ animationDelay: glitchDelays[i].main }}
                  >
                    {char}
                  </span>
                  
                  {/* Ghost Layer 1 - Neon Green Offset */}
                  <span 
                    className="absolute inset-0 z-10 text-neon-green/70 mix-blend-screen animate-glitch-split-1"
                    aria-hidden="true"
                    style={{ animationDelay: glitchDelays[i].ghost1 }}
                  >
                    {char}
                  </span>
                  
                  {/* Ghost Layer 2 - Gray Offset */}
                  <span 
                    className="absolute inset-0 z-10 text-gray-500/70 mix-blend-overlay animate-glitch-split-2"
                    aria-hidden="true"
                    style={{ animationDelay: glitchDelays[i].ghost2 }}
                  >
                    {char}
                  </span>
                </div>
              ))}
              <span className="text-neon-green font-light inline-block">.</span>
            </h1>
          </div>
          
          <style>{`
            /* Chaotic Cable Mess: Clips parts of the letter randomly */
            @keyframes cable-mess {
              0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0) skew(0); opacity: 0.9; filter: blur(2px); }
              /* Burst 1 */
              5% { clip-path: inset(0 0 40% 0); transform: translate(2px, -2px) skew(10deg); opacity: 0.8; filter: blur(3px); }
              10% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
              15% { clip-path: inset(0 60% 0 0); transform: translate(-3px, 0) skew(-10deg); opacity: 0.6; filter: blur(4px); }
              20% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
              /* Pause 20% - 45% */
              /* Burst 2 */
              45% { clip-path: inset(30% 0 0 0); transform: translate(0, 4px); opacity: 0.8; filter: blur(3px); }
              50% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
              /* Pause 50% - 75% */
              /* Burst 3 */
              75% { clip-path: inset(0 0 0 60%); transform: translate(3px, 1px) skew(5deg); opacity: 0.5; filter: blur(3.5px); }
              80% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
              85% { clip-path: inset(10% 20% 40% 10%); transform: translate(-2px, -2px); opacity: 0.4; filter: blur(5px); }
              90% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
            }

            /* Ghost Split 1: Neon Green - Jumps horizontally */
            @keyframes glitch-split-1 {
              0%, 100% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); filter: blur(2px); }
              /* Sync with Burst 1 */
              10% { opacity: 0.8; transform: translate(-5px, 0); clip-path: inset(20% 0 20% 0); filter: blur(4px); }
              20% { opacity: 0; transform: translate(0); }
              /* Sync with Burst 2 */
              50% { opacity: 0.6; transform: translate(5px, -2px); clip-path: inset(0 0 50% 0); filter: blur(3px); }
              60% { opacity: 0; transform: translate(0); }
              /* Sync with Burst 3 */
              85% { opacity: 0.7; transform: translate(-4px, 2px); clip-path: inset(0 40% 0 0); filter: blur(4px); }
              90% { opacity: 0; transform: translate(0); }
            }

            /* Ghost Split 2: Gray - Jumps vertically */
            @keyframes glitch-split-2 {
              0%, 100% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); filter: blur(2px); }
              /* Sync with Burst 1 */
              15% { opacity: 0.7; transform: translate(0, 5px); clip-path: inset(0 50% 0 0); filter: blur(4px); }
              25% { opacity: 0; transform: translate(0); }
              /* Sync with Burst 2 */
              45% { opacity: 0.5; transform: translate(-2px, -5px); clip-path: inset(40% 0 0 0); filter: blur(3px); }
              55% { opacity: 0; transform: translate(0); }
              /* Sync with Burst 3 */
              80% { opacity: 0.6; transform: translate(3px, 3px); clip-path: inset(20% 0 20% 0); filter: blur(4px); }
              90% { opacity: 0; transform: translate(0); }
            }

            .animate-cable-mess { animation: cable-mess 5s infinite steps(2, jump-none); }
            .animate-glitch-split-1 { animation: glitch-split-1 5s infinite steps(2, jump-none); }
            .animate-glitch-split-2 { animation: glitch-split-2 5s infinite steps(2, jump-none); }
          `}</style>

        {/* Terminal Output */}
        <div className="h-8 font-mono text-sm text-neon-green/80 mb-12 min-h-[20px]">
          &gt; {text}<span className="animate-pulse">_</span>
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
          <span className="text-xs font-mono text-neon-green/80 tracking-widest uppercase">Scroll to Initialize</span>
          <ArrowDown className="text-neon-green w-6 h-6 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};
