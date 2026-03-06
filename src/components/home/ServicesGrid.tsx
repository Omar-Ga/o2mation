import { motion } from 'framer-motion';
import {
    Bot,
    FileSpreadsheet,
    Package,
    Zap,
    Globe
} from 'lucide-react';

const coreCapabilities = [
    {
        icon: Package,
        title: "Business Systems",
        desc: "Warehouse tracking, advanced inventory, purchasing workflows, and precise automated payroll operations.",
        span: "md:col-span-2"
    },
    {
        icon: FileSpreadsheet,
        title: "Data Operations",
        desc: "Intelligent extraction from PDFs to Excel, exact web scraping, and real-time report generation systems.",
        span: "md:col-span-1"
    },
    {
        icon: Bot,
        title: "AI & Custom Chatbots",
        desc: "High-end generative AI assistants that handle customer support and complex technical lead qualification.",
        span: "md:col-span-1"
    },
    {
        icon: Globe,
        title: "High-End Architecture",
        desc: "Custom web applications and digital presences built for speed, conversion, and integrated scale.",
        span: "md:col-span-2"
    }
];

export const ServicesGrid = () => {
    return (
        <section className="py-24 bg-charcoal text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
                    >
                        <Zap size={14} className="text-neon-green" />
                        <span className="text-xs font-mono text-neon-green uppercase tracking-widest">Capabilities</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        We Build <span className="text-gray-500">Everything.</span><br />
                        You Just Watch It Run.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {coreCapabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-[#0b0b0b] rounded-[32px] p-8 md:p-10 border border-white/5 group hover:border-white/10 transition-colors flex flex-col justify-between min-h-[250px] ${item.span}`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-neon-green/10 transition-colors">
                                <item.icon className="text-gray-400 group-hover:text-neon-green transition-colors" size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{item.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
