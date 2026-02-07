import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const ChatWidget = () => {
  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 bg-neon-green text-charcoal p-4 rounded-full shadow-[0_0_20px_rgba(0,255,128,0.5)] hover:shadow-[0_0_30px_rgba(0,255,128,0.8)] transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, repeatDelay: 2 }}
      >
        <MessageSquare size={24} strokeWidth={2.5} />
      </motion.div>
      <span className="sr-only">Chat with AI Agent</span>
    </motion.button>
  );
};
