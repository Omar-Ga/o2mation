import { motion } from 'framer-motion';
import { useState, useRef, memo, useCallback } from 'react';

// Memoized Cell Component
const GridCell = memo(({ index, isHovered, onHover, onLeave }: { 
  index: number; 
  isHovered: boolean; 
  onHover: (i: number) => void; 
  onLeave: () => void; 
}) => {
  // Stable random check for data stream (calculated once per mount)
  const hasDataStream = useRef(Math.random() > 0.7).current;
  const streamDuration = useRef(Math.random() * 2 + 1).current;
  const streamContent = useRef(Array.from({ length: 20 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')).current;

  return (
    <motion.div
      className="relative w-[10%] h-[10%] border-[0.5px] border-white/5 overflow-hidden will-change-transform"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* The "Cell" Reaction - GPU promoted */}
      <motion.div
        className="absolute inset-0 bg-neon-green/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        style={{ willChange: "transform, opacity" }}
      />
      
      {/* Random "Data" Streams inside cells */}
      {hasDataStream && (
        <motion.div 
          className="absolute top-0 left-0 w-full h-full text-[8px] font-mono text-neon-green/30 p-1 break-all leading-none select-none pointer-events-none"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: streamDuration, repeat: Infinity }}
        >
          {streamContent}
        </motion.div>
      )}

      {/* Connecting Lines (Circuit Effect) */}
      <motion.div
         className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/10"
         animate={{ borderColor: isHovered ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.1)" }}
      />
    </motion.div>
  );
}, (prev, next) => {
  // Custom comparison to ensure strict re-render control
  return prev.isHovered === next.isHovered && prev.index === next.index;
});

export const ReactiveGrid = memo(() => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  
  // Create 100 cells once
  const gridIndices = useRef(Array.from({ length: 100 }, (_, i) => i)).current;

  // Stable handlers
  const handleHover = useCallback((i: number) => setHoveredCell(i), []);
  const handleLeave = useCallback(() => setHoveredCell(null), []);

  return (
    <div className="absolute inset-0 z-0 flex flex-wrap overflow-hidden pointer-events-auto">
      {gridIndices.map((i) => (
        <GridCell 
          key={i} 
          index={i} 
          isHovered={hoveredCell === i} 
          onHover={handleHover}
          onLeave={handleLeave}
        />
      ))}
    </div>
  );
});
