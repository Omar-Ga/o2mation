import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ModernHero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-charcoal text-white pt-20">
            {/* Sleek background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,128,0.05)_0%,transparent_50%)] pointer-events-none" />

            {/* Light grid lines for texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }}
            />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-neon-green"></span>
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">o2mation Engine v3.0</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8"
                >
                    The Infrastructure <br className="hidden md:block" />
                    for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Automation</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    We build integrated ecosystems where web applications, internal systems, and AI agents communicate seamlessly. Stop running manual processes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link to="/contact">
                        <button className="h-14 px-8 rounded-full bg-neon-green text-charcoal font-bold flex items-center gap-2 hover:bg-white transition-colors duration-300">
                            <Terminal size={20} />
                            Initialize Project
                        </button>
                    </Link>
                    <button className="h-14 px-8 rounded-full border border-white/10 bg-white/[0.02] text-white font-medium flex items-center gap-2 hover:bg-white/5 transition-colors duration-300">
                        View Capabilities
                        <ArrowRight size={20} className="text-gray-400" />
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />
        </section>
    );
};
