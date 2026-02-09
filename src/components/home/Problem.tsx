import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

// Workflow Item Data - Organized Linearly
const WORKFLOW_ITEMS = [
  { 
    id: 'accounting', 
    label: 'Accounting', 
    code: ['GET /invoices', 'Status: Pending'],
    chaos: { x: -200, y: -120, rotate: -15 }, 
    order: { x: 0, y: 0, rotate: 0 },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    id: 'hr', 
    label: 'HR Input', 
    code: ['Employee_ID: 4021', 'Dept: Engineering'],
    chaos: { x: -80, y: 180, rotate: 20 }, 
    order: { x: 400, y: 0, rotate: 0 },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  { 
    id: 'management', 
    label: 'Management', 
    code: ['Approving...', 'Auth_Token: Verified'],
    chaos: { x: 80, y: -180, rotate: -10 }, 
    order: { x: 800, y: 0, rotate: 0 },
    isCore: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 'payroll', 
    label: 'Payroll', 
    code: ['Calculated: $4,200', 'Tax_Rate: 15%'],
    chaos: { x: 250, y: 80, rotate: 15 }, 
    order: { x: 1200, y: 0, rotate: 0 },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 'notifications', 
    label: 'Notifications', 
    code: ['Email Sent', 'Slack_Alert: True'],
    chaos: { x: -150, y: 250, rotate: -20 }, 
    order: { x: 1600, y: 0, rotate: 0 },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  { 
    id: 'analytics', 
    label: 'Analytics', 
    code: ['Efficiency: +400%', 'Errors: 0'],
    chaos: { x: 200, y: -120, rotate: 10 }, 
    order: { x: 2000, y: 0, rotate: 0 },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
];

export const Problem = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress for the extended 400vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // PHASE 1: CHAOS TO ORDER (0% - 20%)
  // Boxes move from random spots to a straight line
  
  // PHASE 2: HORIZONTAL SCROLL (20% - 100%)
  // The entire container slides left to reveal the chain
  // We want to show 2 items initially, then slide to show the rest
  const containerX = useTransform(smoothProgress, [0.2, 1], [0, -1500]); 
  
  // LINE ANIMATION
  // The gray line is always visible once organized
  const lineOpacity = useTransform(smoothProgress, [0.15, 0.2], [0, 1]);
  // The green line fills up as we scroll right
  const lineFill = useTransform(smoothProgress, [0.2, 1], [0, 1]);

  // TITLE TRANSITIONS - 3 STAGES
  // Stage 1: Chaos (0 - 0.25)
  const title1Opacity = useTransform(smoothProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const title1Y = useTransform(smoothProgress, [0, 0.2, 0.25], [0, 0, -20]);

  // Stage 2: Connecting (0.3 - 0.6)
  const title2Opacity = useTransform(smoothProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const title2Y = useTransform(smoothProgress, [0.25, 0.35, 0.55, 0.65], [20, 0, 0, -20]);

  // Stage 3: Automation (0.7 - 1.0)
  const title3Opacity = useTransform(smoothProgress, [0.65, 0.75, 1], [0, 1, 1]);
  const title3Y = useTransform(smoothProgress, [0.65, 0.75, 1], [20, 0, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-charcoal">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* BACKGROUND NOISE */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* TITLE SECTION */}
        <div className="absolute top-20 left-0 right-0 z-20 text-center pointer-events-none h-32">
          {/* TITLE 1: CHAOS */}
          <motion.h2 
            style={{ opacity: title1Opacity, y: title1Y }}
            className="absolute inset-0 text-4xl md:text-6xl font-bold mb-6"
          >
            The <span className="text-gray-500 line-through decoration-neon-green/50 decoration-4">Chaos</span> of <br />
            <span className="text-white">Manual Workflows</span>
          </motion.h2>

          {/* TITLE 2: CONNECTING */}
          <motion.h2 
            style={{ opacity: title2Opacity, y: title2Y }}
            className="absolute inset-0 text-4xl md:text-6xl font-bold mb-6"
          >
            Connecting <br />
            <span className="text-white">Critical Systems</span>
          </motion.h2>
          
          {/* TITLE 3: AUTOMATION */}
          <motion.h2 
            style={{ opacity: title3Opacity, y: title3Y }}
            className="absolute inset-0 text-4xl md:text-6xl font-bold mb-6 text-neon-green"
          >
            Seamless <br />
            <span className="text-white">Automation</span>
          </motion.h2>
        </div>

        {/* SCROLLING WORKFLOW CONTAINER */}
        <motion.div 
          style={{ x: containerX }}
          className="relative h-[400px] flex items-center"
          // Start position centered on the first 2 items (approx)
          initial={{ x: 0 }}
        >
          {/* CONNECTING LINES */}
          <div className="absolute top-1/2 left-0 w-[2000px] h-1.5 bg-gray-800 -translate-y-1/2 z-0 rounded-full overflow-hidden">
             <motion.div 
               style={{ scaleX: lineFill, opacity: lineOpacity }}
               className="h-full w-full bg-neon-green origin-left shadow-[0_0_25px_rgba(0,255,128,0.6)]"
             />
          </div>

          {/* BOXES */}
          {WORKFLOW_ITEMS.map((item, index) => (
            <WorkflowItem 
              key={item.id} 
              item={item} 
              progress={smoothProgress} 
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm font-mono animate-bounce"
        >
          Scroll to Connect
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component
const WorkflowItem = ({ item, progress, index }: { item: any, progress: any, index: number }) => {
  // Phase 1: Chaos to Order (0 - 0.2)
  const x = useTransform(progress, [0, 0.2], [item.chaos.x, item.order.x]);
  const y = useTransform(progress, [0, 0.2], [item.chaos.y, item.order.y]);
  const rotate = useTransform(progress, [0, 0.2], [item.chaos.rotate, item.order.rotate]);
  const scale = useTransform(progress, [0, 0.2], [0.8, 1]);
  
  // Phase 2: Activation (based on scroll position relative to item index)
  // Calculate roughly when the green line hits this item
  const activationStart = 0.2 + (index * 0.12); // Staggered activation
  const isActive = useTransform(progress, [activationStart, activationStart + 0.05], [0, 1]);
  const borderColor = useTransform(progress, [activationStart, activationStart + 0.05], ["#333", "#00ff80"]);
  const glowOpacity = useTransform(progress, [activationStart, activationStart + 0.05], [0, 1]);
  const iconColor = useTransform(progress, [activationStart, activationStart + 0.05], ["#6b7280", "#00ff80"]); // gray-500 to neon-green
  const codeOpacity = useTransform(progress, [activationStart, activationStart + 0.05], [0, 1]);

  return (
    <motion.div
      style={{ 
        x, // This is the relative position within the container
        y, 
        rotate, 
        scale,
        borderColor,
        backgroundColor: "rgba(10, 10, 10, 0.95)"
      }}
      className={`absolute w-80 h-52 flex flex-col p-0 border border-gray-800 rounded-xl backdrop-blur-md z-10 shadow-2xl overflow-hidden`}
    >
      {/* HUD HEADER */}
      <div className="h-10 border-b border-gray-800 bg-black/50 flex items-center justify-between px-4">
         <span className="text-[11px] text-gray-500 font-mono uppercase tracking-widest">{item.id}.mod</span>
         <div className="flex gap-2">
            <motion.div 
               style={{ backgroundColor: iconColor }}
               className="w-2 h-2 rounded-full"
            />
            <div className="w-2 h-2 rounded-full bg-gray-800" />
         </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 flex flex-col justify-center relative">
         <div className="flex items-center gap-4 mb-3">
            <motion.div style={{ color: iconColor }}>
               {item.icon}
            </motion.div>
            <div className="font-mono text-lg font-bold text-white tracking-wide">
               {item.label}
            </div>
         </div>
         
         {/* FAKE CODE / METRICS */}
         <motion.div style={{ opacity: codeOpacity }} className="space-y-1.5">
            {item.code.map((line: string, i: number) => (
               <div key={i} className="text-[11px] font-mono text-neon-green/80 flex gap-2">
                  <span className="text-gray-700">{'>'}</span>
                  {line}
               </div>
            ))}
         </motion.div>

         {/* Corner Accents */}
         <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-gray-700" />
         <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-gray-700" />
      </div>
      
      {/* Active Glow Effect */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,255,128,0.15)] pointer-events-none"
      />
      
      {/* Connector Dot - Left */}
      <div className="absolute top-[50%] -left-2 w-4 h-4 bg-charcoal border border-gray-700 rounded-full -translate-y-1/2 z-20 flex items-center justify-center">
         <motion.div style={{ opacity: glowOpacity }} className="w-2 h-2 bg-neon-green rounded-full" />
      </div>
      {/* Connector Dot - Right */}
      <div className="absolute top-[50%] -right-2 w-4 h-4 bg-charcoal border border-gray-700 rounded-full -translate-y-1/2 z-20 flex items-center justify-center">
         <motion.div style={{ opacity: glowOpacity }} className="w-2 h-2 bg-neon-green rounded-full" />
      </div>

    </motion.div>
  );
};
