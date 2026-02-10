import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ReactiveGrid } from '../components/home/hero/ReactiveGrid';
import { Shield, Cpu, Terminal } from 'lucide-react';

// --- Types & Interfaces ---
interface TextGroup {
  title: string;
  subtitle: string;
  description: string;
}

interface OperatorProfileProps {
  name: string;
  role: string;
  textGroup1: TextGroup;
  textGroup2: TextGroup;
  alignment: 'left' | 'right';
  scrollProgress: MotionValue<number>;
  activeRange: [number, number]; // [start, end] of the full lifecycle
  imageContent: React.ReactNode;
}

// --- Sub-Components ---

const OperatorProfile = ({ 
  name, 
  role, 
  textGroup1,
  textGroup2,
  alignment, 
  scrollProgress, 
  activeRange,
  imageContent 
}: OperatorProfileProps) => {
  const [start, end] = activeRange;
  const duration = end - start;
  
  // Timeline Calculation
  // 0% - 15%: Image Sticks
  // 15% - 40%: Text Group 1 (In -> Hold -> Out)
  // 40% - 60%: Text Transition
  // 60% - 85%: Text Group 2 (In -> Hold -> Out)
  // 85% - 100%: Image Unsticks
  
  // Simplified relative points (0.0 to 1.0 within duration) mapped to absolute scroll
  const t1_in = start + duration * 0.15;
  const t1_hold = start + duration * 0.4;
  const t1_out = start + duration * 0.45;
  
  const t2_in = start + duration * 0.55;
  const t2_hold = start + duration * 0.85;
  const t2_out = start + duration * 0.9;

  // Image Opacity: Stays visible almost the entire time
  const imageOpacity = useTransform(
    scrollProgress,
    [start, start + duration * 0.05, end - duration * 0.05, end],
    [0, 1, 1, 0]
  );

  // Text Group 1 Opacity
  const opacity1 = useTransform(
    scrollProgress,
    [start, t1_in, t1_hold, t1_out],
    [0, 1, 1, 0]
  );

  // Text Group 2 Opacity
  const opacity2 = useTransform(
    scrollProgress,
    [t1_out, t2_in, t2_hold, t2_out],
    [0, 1, 1, 0]
  );

  // Content Slide Logic
  const xOffset = 50;
  
  // Text Slides
  const textX1 = useTransform(
    scrollProgress,
    [start, t1_in, t1_hold, t1_out],
    [alignment === 'left' ? -xOffset : xOffset, 0, 0, alignment === 'left' ? -xOffset : xOffset]
  );

  const textX2 = useTransform(
    scrollProgress,
    [t1_out, t2_in, t2_hold, t2_out],
    [alignment === 'left' ? -xOffset : xOffset, 0, 0, alignment === 'left' ? -xOffset : xOffset]
  );

  // Image Slide (Linked to overall visibility)
  const imageX = useTransform(
    scrollProgress,
    [start, start + duration * 0.1, end - duration * 0.1, end],
    [alignment === 'left' ? xOffset : -xOffset, 0, 0, alignment === 'left' ? xOffset : -xOffset]
  );

  // Layout Classes
  const textOrder = alignment === 'left' ? 'order-1' : 'order-2 text-right';
  const imageOrder = alignment === 'left' ? 'order-2' : 'order-1';
  const textAlignment = alignment === 'left' ? 'items-start text-left' : 'items-end text-right';

  return (
    <div className="absolute inset-0 flex items-center justify-center max-w-7xl mx-auto px-6 w-full pointer-events-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full items-center">
        
        {/* Text Section Container - Stacked */}
        <div className={`relative ${textOrder} z-20 min-h-[400px] flex items-center`}>
          
          {/* Text Group 1 */}
          <motion.div 
            style={{ opacity: opacity1, x: textX1 }}
            className={`absolute top-0 w-full flex flex-col ${textAlignment}`}
          >
            <HeaderBlock alignment={alignment} label="01" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
              {textGroup1.title}
            </h1>
            <h2 className="text-xl font-mono text-neon-green mb-8 tracking-widest border-b border-neon-green/30 pb-2 inline-block">
              // {textGroup1.subtitle}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-sans">
              {textGroup1.description}
            </p>
          </motion.div>

          {/* Text Group 2 */}
          <motion.div 
            style={{ opacity: opacity2, x: textX2 }}
            className={`absolute top-0 w-full flex flex-col ${textAlignment}`}
          >
             <HeaderBlock alignment={alignment} label="02" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
              {textGroup2.title}
            </h1>
            <h2 className="text-xl font-mono text-neon-green mb-8 tracking-widest border-b border-neon-green/30 pb-2 inline-block">
              // {textGroup2.subtitle}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-sans">
              {textGroup2.description}
            </p>
            
            {/* Decorative Data Block (Only on 2nd group for finality) */}
            <div className={`mt-8 p-4 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm font-mono text-xs text-gray-500 w-fit ${alignment === 'right' ? 'self-end' : ''}`}>
              <div className="flex gap-4 mb-2">
                <span>STATUS: <span className="text-neon-green">SYNCED</span></span>
              </div>
              <div className="flex gap-1 opacity-50">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className={`w-1 h-3 ${Math.random() > 0.5 ? 'bg-neon-green' : 'bg-gray-700'}`} />
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Image Section - Persists across both text groups */}
        <motion.div 
          style={{ opacity: imageOpacity, x: imageX }}
          className={`relative ${imageOrder} flex justify-center z-10`}
        >
          {imageContent}
        </motion.div>

      </div>
    </div>
  );
};

const HeaderBlock = ({ alignment, label }: { alignment: string, label: string }) => (
  <div className="overflow-hidden mb-4">
    <div className="flex items-center gap-3 text-neon-green mb-2">
      <Terminal size={16} />
      <span className="font-mono text-xs tracking-[0.2em] uppercase">
        SYS_OP_0{alignment === 'left' ? '1' : '2'} // SEQ_{label}
      </span>
    </div>
  </div>
);

// --- Main Page Component ---

const TheOperators = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Transition Effects ---
  // Glitch Line Scan (40% - 60%)
  const scanLineY = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const noiseOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0.3, 0.6, 0.3]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-charcoal">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Ambient Background Layer */}
        <div className="absolute inset-0 bg-charcoal z-0">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <ReactiveGrid />
          </div>
          <motion.div 
            style={{ opacity: noiseOpacity }}
            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay pointer-events-none" 
          />
        </div>

        {/* Phase A: Omar Gamal (0% - 45%) */}
        <OperatorProfile
          name="OMAR GAMAL"
          role="THE STRATEGIST"
          textGroup1={{
            title: "OMAR GAMAL",
            subtitle: "THE STRATEGIST",
            description: "Orchestrating digital transformation through high-level architectural foresight. Omar deconstructs chaos into streamlined workflows."
          }}
          textGroup2={{
            title: "VISIONARY LEAD",
            subtitle: "SYSTEM ARCHITECT",
            description: "From conceptualization to execution, he ensures that every automated system serves a clear, high-impact business imperative."
          }}
          alignment="left"
          scrollProgress={scrollYProgress}
          activeRange={[0, 0.40]}
          imageContent={
            <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] group">
              {/* Image Frame */}
              <div className="absolute inset-0 border border-neon-green/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-charcoal-light border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="w-full h-full bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center relative">
                  <Shield size={64} className="text-white/10 absolute" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,128,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Omar Gamal" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-neon-green" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-neon-green" />
            </div>
          }
        />

        {/* Phase B: Transition (45% - 55%) */}
        <motion.div 
          style={{ opacity: scanOpacity }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full h-full">
            <motion.div 
              style={{ top: scanLineY }}
              className="absolute left-0 w-full h-[2px] bg-neon-green shadow-[0_0_20px_rgba(0,255,128,0.8)] z-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-charcoal/90 border border-neon-green/50 px-8 py-4 backdrop-blur-xl">
                <span className="font-mono text-neon-green text-xl tracking-[0.5em] animate-pulse">
                  TRANSFERRING_DATA...
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase C: Syed Umar (55% - 100%) */}
        <OperatorProfile
          name="SYED UMAR"
          role="THE ENGINEER"
          textGroup1={{
            title: "SYED UMAR",
            subtitle: "THE ENGINEER",
            description: "Architecting robust systems where reliability meets radical innovation. Syed builds the invisible backbones that power seamless automation."
          }}
          textGroup2={{
            title: "CORE BUILDER",
            subtitle: "TECHNICAL LEAD",
            description: "Turning complex code into elegant, user-centric experiences. His code isn't just functional; it's a foundation for future scalability."
          }}
          alignment="right"
          scrollProgress={scrollYProgress}
          activeRange={[0.60, 1]}
          imageContent={
            <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] group">
              <div className="absolute inset-0 border border-neon-green/30 -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-charcoal-light border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="w-full h-full bg-gradient-to-bl from-charcoal to-charcoal-light flex items-center justify-center relative">
                  <Cpu size={64} className="text-white/10 absolute" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,128,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine" />
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Syed Umar" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
                </div>
              </div>
               <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-neon-green" />
               <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-neon-green" />
            </div>
          }
        />

        {/* Global HUD Elements */}
        <div className="absolute bottom-12 left-12 hidden md:block z-40">
           <div className="flex flex-col gap-2 text-[10px] font-mono text-gray-600">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
               SYSTEM_CORE // ACTIVE
             </div>
             <div>COORDS: 34.0522° N, 118.2437° W</div>
             <div>SECURE_CHANNEL: ENCRYPTED</div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default TheOperators;
