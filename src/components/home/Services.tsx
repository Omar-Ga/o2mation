import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Users,
  Search,
  Bot, 
  Database, 
  FileSpreadsheet, 
  Globe, 
  Mail, 
  Package, 
  Share2, 
  ShoppingCart, 
  Terminal,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MouseEvent } from 'react';
import { useTranslation, Trans } from 'react-i18next';

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
      className="group relative h-full min-h-[140px] rounded-3xl border border-white/5 bg-zinc-900 p-6 hover:bg-zinc-800 hover:border-neon-green/30 hover:shadow-[0_0_20px_rgba(0,255,163,0.1)] transition-all duration-300"
    >
      {/* Spotlight Overlay - Made Subtler */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 163, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative flex items-start gap-4 h-full z-10">
        <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-white group-hover:scale-110 group-hover:text-neon-green group-hover:border-neon-green/20 transition-all duration-300 shrink-0">
          <item.icon size={20} />
        </div>
        <div className="flex flex-col h-full">
          <h4 className="text-white font-medium mb-1 group-hover:text-neon-green transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed flex-grow">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const { t, i18n } = useTranslation('home');
  const isRtl = i18n.dir() === 'rtl';
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const services = [
    {
      category: t('services.categories.businessSystems'),
      items: [
        { icon: Package, title: t('services.items.warehouse.title'), desc: t('services.items.warehouse.desc') },
        { icon: ShoppingCart, title: t('services.items.purchasing.title'), desc: t('services.items.purchasing.desc') },
        { icon: Database, title: t('services.items.hr.title'), desc: t('services.items.hr.desc') },
        { icon: Users, title: t('services.items.leads.title'), desc: t('services.items.leads.desc') }
      ]
    },
    {
      category: t('services.categories.dataOperations'),
      items: [
        { icon: FileSpreadsheet, title: t('services.items.pdf.title'), desc: t('services.items.pdf.desc') },
        { icon: Zap, title: t('services.items.dataEntry.title'), desc: t('services.items.dataEntry.desc') },
        { icon: Terminal, title: t('services.items.reporting.title'), desc: t('services.items.reporting.desc') },
        { icon: Search, title: t('services.items.scraping.title'), desc: t('services.items.scraping.desc') }
      ]
    },
    {
      category: t('services.categories.digitalGrowth'),
      items: [
        { icon: Share2, title: t('services.items.social.title'), desc: t('services.items.social.desc') },
        { icon: Bot, title: t('services.items.chatbots.title'), desc: t('services.items.chatbots.desc') },
        { icon: Globe, title: t('services.items.websites.title'), desc: t('services.items.websites.desc') },
        { icon: Mail, title: t('services.items.email.title'), desc: t('services.items.email.desc') }
      ]
    }
  ];

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor - Removed Green Grid */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-white" />
            <span className="text-white font-mono text-sm tracking-wider">{t('services.systemCapabilities')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          >
            <Trans
              i18nKey="services.mainTitle"
              t={t}
              components={{
                gray: <span className="text-zinc-500" />,
                br: <br />,
                gradient: <span className="text-white" />
              }}
            />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl leading-relaxed"
          >
            {t('services.description')}
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
                className="text-xl font-bold text-white border-l-2 border-white pl-4 mb-6"
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
          className="mt-20 relative overflow-hidden rounded-3xl group border border-white/5 bg-zinc-900"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.05),
                  transparent 80%
                )
              `,
            }}
          />
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            {/* Animated Grid Background inside CTA - Subtler */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="max-w-2xl relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Sparkles size={18} className="text-white animate-pulse" />
                </div>
                <span className="text-white font-mono text-xs tracking-widest uppercase">{t('services.cta.customArch')}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
                <Trans
                  i18nKey="services.cta.title"
                  t={t}
                  components={{
                    gradient: <span className="text-white" />,
                    green: <span className="text-white" />
                  }}
                />
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {t('services.cta.desc')}
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden group/btn shrink-0 hover:bg-neon-green hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <div className={`relative flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Terminal size={20} className={isRtl ? "scale-x-[-1]" : ""} />
                <span>{t('services.cta.button')}</span>
                <ArrowRight 
                  size={20} 
                  className={`transition-transform ${isRtl ? 'rotate-180 group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} 
                />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
