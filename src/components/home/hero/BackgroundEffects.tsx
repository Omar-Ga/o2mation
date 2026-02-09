import { motion, useMotionTemplate, MotionValue } from 'framer-motion';
import { memo } from 'react';

interface BackgroundEffectsProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const BackgroundEffects = memo(({ mouseX, mouseY }: BackgroundEffectsProps) => {
  return (
    <>
      {/* 1. The "Distorted Signal" Noise Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-[size:200px_200px] animate-static-shift" />
      </div>

      {/* 3. The Mouse "Warper" (Distortion Field) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-difference"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 100%
            )
          `,
          backdropFilter: "blur(1px) invert(0)"
        }}
      />

      {/* 4. Floating Geometric Debris (3D Feel) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {Array.from({ length: 15 }).map((_, i) => (
           <motion.div
             key={`geo-${i}`}
             className="absolute border border-neon-green/20 will-change-transform"
             style={{
               width: Math.random() * 100 + 50,
               height: Math.random() * 100 + 50,
               left: Math.random() * 100 + "%",
               top: Math.random() * 100 + "%",
             }}
             animate={{
               rotate: [0, 360],
               scale: [1, 1.2, 1],
               opacity: [0.1, 0.3, 0.1]
             }}
             transition={{
               duration: Math.random() * 20 + 20,
               repeat: Infinity,
               ease: "linear"
             }}
           />
         ))}
      </div>

      <style>{`
        .animate-static-shift {
          animation: static-shift 0.2s infinite steps(4);
        }
        @keyframes static-shift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-10px, 10px); }
          50% { transform: translate(5px, -5px); }
          75% { transform: translate(10px, 5px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
});
