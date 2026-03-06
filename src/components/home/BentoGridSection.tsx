import { motion } from 'framer-motion';
import { Box, Cpu, Database, Network, Power } from 'lucide-react';

export const BentoGridSection = () => {
    return (
        <section className="py-24 bg-charcoal text-white overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header Block */}
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                            Automate <br className="hidden md:block" />
                            and <span className="text-neon-green">Scale</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">
                            Expose your workflows as APIs, or bundle them with your app. <br className="hidden md:block" />
                            With o2mation, automation is part of your infrastructure.
                        </p>
                    </div>
                </div>

                {/* BENTO GRID MAIN */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">

                    {/* LEFT LARGE COLUMN */}
                    <div className="md:col-span-8 flex flex-col gap-6">

                        {/* Top Large Card: Planet / Ecosystem */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0b0b0b] rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-white/5 relative overflow-hidden group min-h-[400px] md:min-h-[500px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-transparent z-0" />

                            {/* Badge */}
                            <div className="relative z-10 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 text-xs font-mono text-gray-300 tracking-wider mb-8">
                                Execution Platform
                            </div>

                            {/* Graphic / Visualization (Abstract Globe/Network) */}
                            <div className="absolute inset-x-0 bottom-0 top-32 pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                                <div className="relative w-full h-full max-w-[600px] opacity-80 mix-blend-screen">
                                    {/* Fake Dotted Globe / Graph Representation */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full border border-neon-green/10 border-dotted animate-[spin_40s_linear_infinite_reverse]" />

                                    {/* Glowing Nodes */}
                                    <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-neon-green rounded-full shadow-[0_0_20px_rgba(0,255,128,1)]" />
                                    <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-neon-green rounded-full shadow-[0_0_30px_rgba(0,255,128,1)] animate-pulse" />
                                    <div className="absolute bottom-[20%] left-[45%] w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_15px_rgba(0,255,128,1)]" />

                                    {/* Connection Lines */}
                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 30% 20% Q 50% 50% 75% 60%" fill="none" stroke="rgba(0,255,128,0.2)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                                        <path d="M 45% 80% Q 50% 50% 75% 60%" fill="none" stroke="rgba(0,255,128,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Section inside Left Column: 1 x 2 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card - Manage Operations */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="col-span-1 md:col-span-2 bg-[#0b0b0b] rounded-[32px] p-8 md:p-10 border border-white/5 relative overflow-hidden group min-h-[250px] flex flex-col justify-end"
                            >
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,128,0.4),transparent_50%)]" />
                                <h3 className="text-3xl font-bold mb-2 relative z-10 text-white">Manage operations</h3>
                                <p className="text-gray-400 font-medium relative z-10 max-w-lg">Control your entire digital ecosystem, bots, and infrastructure from one unified dashboard.</p>

                                {/* Visual Fake UI */}
                                <div className="absolute right-[-40px] top-[20px] w-64 h-48 bg-charcoal rounded-2xl border border-white/10 shadow-2xl p-4 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 opacity-50 md:opacity-100">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-neon-green/50" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-white/5 rounded-md w-full" />
                                        <div className="h-4 bg-white/5 rounded-md w-3/4" />
                                        <div className="h-4 bg-neon-green/10 rounded-md w-5/6" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Smaller Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-[#0b0b0b] rounded-[32px] p-8 border border-white/5 group hover:border-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:text-neon-green group-hover:scale-110 transition-all text-gray-500">
                                    <Network size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">Integrates tightly</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Connects deeply with your existing SQL, MongoDB, REST APIs, or Serverless functions.
                                </p>
                            </motion.div>

                            {/* Smaller Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#0b0b0b] rounded-[32px] p-8 border border-white/5 group hover:border-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:text-neon-green group-hover:scale-110 transition-all text-gray-500">
                                    <Database size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">Total ownership</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Maintain control of your source code and data. Built on secure, auditable, highly reliable systems.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT TALL COLUMN: Architecture */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 bg-[#0b0b0b] rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-white/5 relative flex flex-col"
                    >
                        <div className="flex-1 min-h-[400px] mb-8 relative">

                            {/* Animated Diagram of architecture */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center gap-12">

                                {/* Top Level: Serverless & Containers */}
                                <div className="flex w-full justify-between px-4">
                                    <div className="flex flex-col items-center relative group">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Container-based</span>
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-green transition-colors z-20">
                                            <Box className="text-gray-400 group-hover:text-neon-green" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center relative group">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Serverless</span>
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-green transition-colors z-20">
                                            <Cpu className="text-gray-400 group-hover:text-neon-green" />
                                        </div>
                                    </div>
                                </div>

                                {/* Middle: Agent Core */}
                                <div className="relative group z-20">
                                    <div className="absolute inset-0 bg-neon-green opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-full outline-none" />
                                    <div className="w-20 h-20 rounded-[24px] bg-charcoal border-2 border-neon-green/50 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,255,128,0.2)]">
                                        <Power size={32} className="text-neon-green" />
                                    </div>
                                </div>

                                {/* Connection Paths (SVG behind) */}
                                <svg className="absolute inset-0 w-full h-full z-10 opacity-30" style={{ top: '80px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 25% 10% C 25% 40%, 50% 30%, 50% 50%" stroke="url(#paint0_linear)" strokeWidth="2" />
                                    <path d="M 75% 10% C 75% 40%, 50% 30%, 50% 50%" stroke="url(#paint1_linear)" strokeWidth="2" />
                                    <path d="M 50% 50% L 50% 90%" stroke="url(#paint2_linear)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />

                                    <defs>
                                        <linearGradient id="paint0_linear" x1="25%" y1="10%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" stopOpacity="0" />
                                            <stop offset="1" stopColor="#00ff80" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="75%" y1="10%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" stopOpacity="0" />
                                            <stop offset="1" stopColor="#00ff80" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear" x1="50%" y1="50%" x2="50%" y2="90%" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00ff80" />
                                            <stop offset="1" stopColor="#00ff80" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Bottom: Deployment */}
                                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full z-20 mt-[-20px] group cursor-pointer hover:bg-white/10 transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                                    <span className="text-sm font-bold text-white group-hover:text-neon-green transition-colors">Deploy Process</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-3">Flexible architecture</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Deploy o2mation agents wherever you're hosting your app, or as a standalone robust service.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
