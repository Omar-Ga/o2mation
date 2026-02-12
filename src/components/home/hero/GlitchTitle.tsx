import { memo } from 'react';

export const GlitchTitle = memo(() => {
  return (
    <div className="relative flex items-baseline justify-center">
      <div className="glitch-wrapper">
        <h1 
          className="glitch text-[15vw] md:text-[12vw] leading-none font-bold text-white tracking-tighter font-display" 
          data-text="O2MATION"
        >
          O2MATION
        </h1>
      </div>
      <span className="text-neon-green text-[15vw] md:text-[12vw] leading-none font-bold tracking-tighter animate-pulse font-display">.</span>
      
      <style>{`
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .glitch {
          position: relative;
          color: white;
          z-index: 1;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #050505; /* Match new charcoal background */
        }

        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 #00FFA3; /* New Neon Green */
          clip-path: inset(0 0 0 0);
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -1px 0 #ff00c1;
          clip-path: inset(0 0 0 0);
          animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
        }

        /* 
           Using clip-path: inset(top right bottom left) with percentages 
           to ensure glitch covers the entire height of the text (0% to 100%) 
        */
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          5% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          10% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          15% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          20% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
          25% { clip-path: inset(30% 0 40% 0); transform: translate(1px, -1px); }
          30% { clip-path: inset(50% 0 30% 0); transform: translate(-1px, 2px); }
          35% { clip-path: inset(70% 0 20% 0); transform: translate(1px, -2px); }
          40% { clip-path: inset(15% 0 75% 0); transform: translate(-2px, 1px); }
          45% { clip-path: inset(55% 0 15% 0); transform: translate(2px, -1px); }
          50% { clip-path: inset(25% 0 65% 0); transform: translate(-1px, 2px); }
          55% { clip-path: inset(90% 0 0% 0); transform: translate(1px, -1px); } /* Bottom edge */
          60% { clip-path: inset(5% 0 85% 0); transform: translate(-2px, 1px); } /* Top edge */
          65% { clip-path: inset(35% 0 45% 0); transform: translate(2px, -2px); }
          70% { clip-path: inset(65% 0 25% 0); transform: translate(-1px, 2px); }
          75% { clip-path: inset(0% 0 90% 0); transform: translate(1px, -1px); } /* Very top */
          80% { clip-path: inset(45% 0 35% 0); transform: translate(-2px, 1px); }
          85% { clip-path: inset(75% 0 15% 0); transform: translate(2px, -2px); }
          90% { clip-path: inset(10% 0 50% 0); transform: translate(-1px, 2px); }
          95% { clip-path: inset(85% 0 5% 0); transform: translate(1px, -1px); } /* Very bottom */
          100% { clip-path: inset(50% 0 40% 0); transform: translate(0); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: inset(15% 0 60% 0); transform: translate(2px, -1px); }
          5% { clip-path: inset(85% 0 5% 0); transform: translate(-2px, 1px); }
          10% { clip-path: inset(5% 0 85% 0); transform: translate(1px, -2px); }
          15% { clip-path: inset(35% 0 45% 0); transform: translate(-1px, 2px); }
          20% { clip-path: inset(65% 0 25% 0); transform: translate(2px, -1px); }
          25% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 1px); }
          30% { clip-path: inset(40% 0 50% 0); transform: translate(1px, -2px); }
          35% { clip-path: inset(90% 0 0% 0); transform: translate(-1px, 2px); }
          40% { clip-path: inset(20% 0 60% 0); transform: translate(2px, -1px); }
          45% { clip-path: inset(50% 0 40% 0); transform: translate(-2px, 1px); }
          50% { clip-path: inset(80% 0 10% 0); transform: translate(1px, -2px); }
          55% { clip-path: inset(0% 0 90% 0); transform: translate(-1px, 2px); }
          60% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -1px); }
          65% { clip-path: inset(60% 0 30% 0); transform: translate(-2px, 1px); }
          70% { clip-path: inset(70% 0 10% 0); transform: translate(1px, -2px); }
          75% { clip-path: inset(25% 0 65% 0); transform: translate(-1px, 2px); }
          80% { clip-path: inset(55% 0 35% 0); transform: translate(2px, -1px); }
          85% { clip-path: inset(5% 0 85% 0); transform: translate(-2px, 1px); }
          90% { clip-path: inset(45% 0 45% 0); transform: translate(1px, -2px); }
          95% { clip-path: inset(75% 0 15% 0); transform: translate(-1px, 2px); }
          100% { clip-path: inset(10% 0 80% 0); transform: translate(0); }
        }
      `}</style>
    </div>
  );
});
