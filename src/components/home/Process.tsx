import { motion, useScroll, useTransform } from 'framer-motion';
import { FileSearch, Layers, Code, Rocket } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    icon: FileSearch,
    title: "Discovery & Audit",
    desc: "We scan your current infrastructure for bottlenecks, inefficiencies, and data silos. We don't guess; we diagnose.",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5"
  },
  {
    icon: Layers,
    title: "System Architecture",
    desc: "We design a bespoke blueprint. API gateways, database schemas, and AI integration points are mapped out before a single line of code is written.",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5"
  },
  {
    icon: Code,
    title: "Intelligent Development",
    desc: "Our engineers build the core logic. We fuse traditional full-stack development with advanced AI agent workflows.",
    color: "text-neon-green",
    border: "border-neon-green/20",
    bg: "bg-neon-green/5"
  },
  {
    icon: Rocket,
    title: "Deployment & Scale",
    desc: "We launch your system into production with real-time monitoring, auto-scaling, and continuous optimization.",
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5"
  }
];

export const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-xs font-mono text-gray-400 mb-6"
          >
            THE ALGORITHM
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            From Chaos to <span className="text-neon-green">Code</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our proprietary methodology for digitizing analog businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-neon-green -translate-x-1/2 z-0" 
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 md:w-1/2 pl-16 md:pl-0 md:px-12 text-left">
                  <div className={`p-6 rounded-xl border ${step.border} ${step.bg} backdrop-blur-sm`}>
                    <h3 className={`text-xl font-bold mb-2 ${step.color}`}>{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-charcoal border border-gray-700 z-10 shadow-xl">
                  <step.icon size={24} className={step.color} />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
