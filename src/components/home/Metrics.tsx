import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: "Hours Automated", value: 10000, suffix: "+" },
  { label: "APIs Integrated", value: 50, suffix: "+" },
  { label: "System Uptime", value: 99.9, suffix: "%", decimals: 1 },
  { label: "ROI Increase", value: 300, suffix: "%" }
];

const Counter = ({ value, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = (end - start) / totalFrames;
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

export const Metrics = () => {
  return (
    <section className="py-24 bg-charcoal border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-neon-green transition-colors">
                <Counter value={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
