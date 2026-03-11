import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className={`relative p-2 rounded-full overflow-hidden flex items-center justify-center transition-all bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-neon-green/30 dark:hover:border-neon-green/30 group ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-neon-green/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
      />
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : -90,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-neon-green relative z-10" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : 90,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        className={theme === 'light' ? 'relative z-10' : 'absolute'}
      >
        <Sun className="w-4 h-4 text-neon-green relative z-10" />
      </motion.div>

      {/* Fallback to take up space since icons are absolute */}
      <div className="w-4 h-4 opacity-0" />
    </button>
  );
};
