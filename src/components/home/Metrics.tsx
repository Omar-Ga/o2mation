import { useInView } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  value: number;
  duration?: number;
  decimals?: number;
}

const Counter = ({ value, duration = 2, decimals = 0 }: CounterProps) => {
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
  const { t } = useTranslation('home');

  const stats = useMemo(() => [
    { label: t('metrics.items.hours'), value: 10000, suffix: "+" },
    { label: t('metrics.items.apis'), value: 50, suffix: "+" },
    { label: t('metrics.items.uptime'), value: 99.9, suffix: "%", decimals: 1 },
    { label: t('metrics.items.roi'), value: 300, suffix: "%" }
  ], [t]);

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
