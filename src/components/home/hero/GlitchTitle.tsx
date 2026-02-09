import { memo, useRef } from 'react';

export const GlitchTitle = memo(() => {
  // Stable random delays for the glitch effect to prevent re-render jumps
  // We calculate this once on mount (or here in the closure since it's memoized)
  const glitchDelays = useRef(
    "O2MATION".split("").map(() => ({
      main: `-${Math.random() * 6}s`,
      ghost1: `-${Math.random() * 5}s`,
      ghost2: `-${Math.random() * 7}s`
    }))
  ).current;

  return (
    <div className="relative inline-flex items-center tracking-tighter will-change-transform">
      <h1 className="flex text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] text-white select-none">
        {"O2MATION".split("").map((char, i) => (
          <div key={i} className="relative group inline-block">
            {/* The Main Letter - Glitches & Clips */}
            <span 
              className="relative z-20 block animate-cable-mess" 
              style={{ animationDelay: glitchDelays[i].main }}
            >
              {char}
            </span>
            
            {/* Ghost Layer 1 - Neon Green Offset */}
            <span 
              className="absolute inset-0 z-10 text-neon-green/70 mix-blend-screen animate-glitch-split-1"
              aria-hidden="true"
              style={{ animationDelay: glitchDelays[i].ghost1 }}
            >
              {char}
            </span>
            
            {/* Ghost Layer 2 - Gray Offset */}
            <span 
              className="absolute inset-0 z-10 text-gray-500/70 mix-blend-overlay animate-glitch-split-2"
              aria-hidden="true"
              style={{ animationDelay: glitchDelays[i].ghost2 }}
            >
              {char}
            </span>
          </div>
        ))}
        <span className="text-neon-green font-light inline-block">.</span>
      </h1>
      
      <style>{`
        /* Chaotic Cable Mess: Clips parts of the letter randomly */
        @keyframes cable-mess {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0) skew(0); opacity: 0.9; filter: blur(2px); }
          /* Burst 1 */
          5% { clip-path: inset(0 0 40% 0); transform: translate(2px, -2px) skew(10deg); opacity: 0.8; filter: blur(3px); }
          10% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
          15% { clip-path: inset(0 60% 0 0); transform: translate(-3px, 0) skew(-10deg); opacity: 0.6; filter: blur(4px); }
          20% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
          /* Pause 20% - 45% */
          /* Burst 2 */
          45% { clip-path: inset(30% 0 0 0); transform: translate(0, 4px); opacity: 0.8; filter: blur(3px); }
          50% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
          /* Pause 50% - 75% */
          /* Burst 3 */
          75% { clip-path: inset(0 0 0 60%); transform: translate(3px, 1px) skew(5deg); opacity: 0.5; filter: blur(3.5px); }
          80% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
          85% { clip-path: inset(10% 20% 40% 10%); transform: translate(-2px, -2px); opacity: 0.4; filter: blur(5px); }
          90% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0.9; filter: blur(2px); }
        }

        /* Ghost Split 1: Neon Green - Jumps horizontally */
        @keyframes glitch-split-1 {
          0%, 100% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); filter: blur(2px); }
          /* Sync with Burst 1 */
          10% { opacity: 0.8; transform: translate(-5px, 0); clip-path: inset(20% 0 20% 0); filter: blur(4px); }
          20% { opacity: 0; transform: translate(0); }
          /* Sync with Burst 2 */
          50% { opacity: 0.6; transform: translate(5px, -2px); clip-path: inset(0 0 50% 0); filter: blur(3px); }
          60% { opacity: 0; transform: translate(0); }
          /* Sync with Burst 3 */
          85% { opacity: 0.7; transform: translate(-4px, 2px); clip-path: inset(0 40% 0 0); filter: blur(4px); }
          90% { opacity: 0; transform: translate(0); }
        }

        /* Ghost Split 2: Gray - Jumps vertically */
        @keyframes glitch-split-2 {
          0%, 100% { opacity: 0; transform: translate(0); clip-path: inset(0 0 0 0); filter: blur(2px); }
          /* Sync with Burst 1 */
          15% { opacity: 0.7; transform: translate(0, 5px); clip-path: inset(0 50% 0 0); filter: blur(4px); }
          25% { opacity: 0; transform: translate(0); }
          /* Sync with Burst 2 */
          45% { opacity: 0.5; transform: translate(-2px, -5px); clip-path: inset(40% 0 0 0); filter: blur(3px); }
          55% { opacity: 0; transform: translate(0); }
          /* Sync with Burst 3 */
          80% { opacity: 0.6; transform: translate(3px, 3px); clip-path: inset(20% 0 20% 0); filter: blur(4px); }
          90% { opacity: 0; transform: translate(0); }
        }

        .animate-cable-mess { animation: cable-mess 5s infinite steps(2, jump-none); }
        .animate-glitch-split-1 { animation: glitch-split-1 5s infinite steps(2, jump-none); }
        .animate-glitch-split-2 { animation: glitch-split-2 5s infinite steps(2, jump-none); }
      `}</style>
    </div>
  );
});
