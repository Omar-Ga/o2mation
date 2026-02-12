import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TechStack = () => {
  const { t } = useTranslation('home');
  const techs = t('techStack.items', { returnObjects: true }) as string[];
  
  return (
    <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          {[...techs, ...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-black text-transparent stroke-text hover:text-white transition-all duration-300 cursor-default select-none">
                {tech}
              </span>
              <div className="w-2 h-2 bg-zinc-800 rounded-full ml-16" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Label */}
      <div className="text-center mt-8">
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">{t('techStack.systemModules')}</span>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        .stroke-text:hover {
          -webkit-text-stroke: 1px #fff;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
        }
      `}</style>
    </section>
  );
};
