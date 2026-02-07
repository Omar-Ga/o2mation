import { motion } from 'framer-motion';

const techs = [
  "REACT", "TYPESCRIPT", "PYTHON", "OPENAI", "AWS", "NODE.JS", "TAILWIND", "POSTGRESQL", "DOCKER", "GRAPHQL", "NEXT.JS", "VERCEL", "STRIPE", "FIREBASE"
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-charcoal border-y border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-black text-transparent stroke-text opacity-30 hover:opacity-100 hover:text-neon-green transition-all duration-300 cursor-default select-none">
                {tech}
              </span>
              <div className="w-2 h-2 bg-gray-800 rounded-full ml-16" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Label */}
      <div className="text-center mt-8">
        <span className="text-xs font-mono text-gray-500 tracking-widest">[ SYSTEM KERNEL ]</span>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
        .stroke-text:hover {
          -webkit-text-stroke: 1px #00ff80;
        }
      `}</style>
    </section>
  );
};
