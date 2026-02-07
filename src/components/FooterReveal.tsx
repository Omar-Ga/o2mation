import React from 'react';
import { motion } from 'framer-motion';

export const FooterReveal = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 w-full h-[300px] md:h-[350px] bg-neon-green -z-10 flex items-center justify-center overflow-hidden"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[20vw] font-bold text-charcoal font-mono leading-none tracking-tighter select-none whitespace-nowrap"
      >
        O2MATION
      </motion.h1>
    </div>
  );
};
