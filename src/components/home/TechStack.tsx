import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TechStack = () => {
  const { t } = useTranslation('home');
  const techs = t('techStack.items', { returnObjects: true }) as string[];
  
  return (
    <section className="py-6 bg-charcoal border-t border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {[...techs, ...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="text-sm font-mono font-medium text-white/30 hover:text-brand transition-colors duration-300 tracking-wider cursor-default select-none uppercase">
                {tech}
              </span>
              <div className="w-1 h-1 bg-brand/30 rounded-full ml-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
