import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Users,
  Search,
  Bot, 
  Database, 
  FileSpreadsheet, 
  Globe, 
  Mail, 
  MessageSquare, 
  Package, 
  Share2, 
  ShoppingCart, 
  Terminal,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MouseEvent } from 'react';

const services = [
  {
    category: "Business Systems",
    items: [
      {
        icon: Package,
        title: "Warehouse & Inventory",
        desc: "Automated tracking, stock alerts, and logistics management systems."
      },
      {
        icon: ShoppingCart,
        title: "Purchasing Systems",
        desc: "Streamlined procurement workflows and vendor management automation."
      },
      {
        icon: Database,
        title: "Salary & HR Systems",
        desc: "Custom payroll processing and employee management solutions."
      },
      {
        icon: Users,
        title: "Lead Systems",
        desc: "Automated capture, scoring, and routing pipelines for high-velocity sales."
      }
    ]
  },
  {
    category: "Data Operations",
    items: [
      {
        icon: FileSpreadsheet,
        title: "PDF to Excel",
        desc: "Intelligent extraction of data from documents into structured formats."
      },
      {
        icon: Zap,
        title: "Data Entry Automation",
        desc: "Bots that handle repetitive data input tasks with 100% accuracy."
      },
      {
        icon: Terminal,
        title: "Report Generation",
        desc: "Automated compilation of analytics and business intelligence reports."
      },
      {
        icon: Search,
        title: "Web Scraping & Data Extraction",
        desc: "Automated systems to harvest market data, competitor pricing, and leads from any digital source."
      }
    ]
  },
  {
    category: "Digital Growth",
    items: [
      {
        icon: Share2,
        title: "Social Media Auto",
        desc: "Content scheduling, engagement bots, and cross-platform syncing."
      },
      {
        icon: Bot,
        title: "Custom Chatbots",
        desc: "AI-powered assistants for customer support and lead generation."
      },
      {
        icon: Globe,
        title: "High-End Websites",
        desc: "High-performance custom architectures with integrated CMS, as well as professional WordPress development for versatile platforms."
      },
      {
        icon: Mail,
        title: "Email Automation",
        desc: "Smart scheduling, AI auto-replies, and intelligent inbox management systems."
      }
    ]
  }
];

const ServiceCard = ({ item, index }: { item: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      onMouseMove={handleMouseMove}
      className="group relative h-full min-h-[140px] rounded-xl border border-white/10 bg-white/5 p-6 hover:border-neon-green/30 transition-colors duration-300"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(74, 222, 128, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative flex items-start gap-4 h-full z-10">
        <div className="p-3 rounded-lg bg-charcoal border border-white/10 text-neon-green group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300 shrink-0">
          <item.icon size={20} />
        </div>
        <div className="flex flex-col h-full">
          <h4 className="text-white font-medium mb-1 group-hover:text-neon-green transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed flex-grow">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-neon-green" />
            <span className="text-neon-green font-mono text-sm tracking-wider">SYSTEM_CAPABILITIES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            We Build <span className="text-gray-500">Everything</span>.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              You Just Watch It Run.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl leading-relaxed"
          >
            From simple scripts to complex enterprise ecosystems. If it involves data, logic, or the internet, we can automate it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: catIndex * 0.1 }}
                className="text-xl font-bold text-white border-l-2 border-neon-green pl-4 mb-6"
              >
                {category.category}
              </motion.h3>
              
              <div className="flex flex-col gap-4 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <ServiceCard key={itemIndex} item={item} index={itemIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Request CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseMove={handleMouseMove}
          className="mt-20 relative overflow-hidden rounded-2xl group border border-white/10 bg-charcoal-light/50 backdrop-blur-sm"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(0, 255, 128, 0.15),
                  transparent 80%
                )
              `,
            }}
          />
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            {/* Animated Grid Background inside CTA */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="max-w-2xl relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/20">
                  <Sparkles size={18} className="text-neon-green animate-pulse" />
                </div>
                <span className="text-neon-green font-mono text-xs tracking-widest uppercase">Custom Architecture</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Need something <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">impossible?</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We thrive on complexity. If you can define the logic, we can code the automation. 
                Let's engineer a bespoke solution for your specific use case.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-5 bg-neon-green text-charcoal font-bold rounded-xl overflow-hidden group/btn shrink-0"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3">
                <Terminal size={20} />
                <span>Initialize Custom Build</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
