import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Users, Search, Bot, Database, FileSpreadsheet, Globe, 
  Mail, Package, Share2, ShoppingCart, Zap, ArrowRight
} from 'lucide-react';
import { MouseEvent } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ServiceItemType {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const ServiceCard = ({ item, index }: { item: ServiceItemType, index: number }) => {
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
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group relative h-full min-h-[140px] rounded-xl border border-surface-dim dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:border-brand-muted/40 hover:shadow-lg hover:shadow-brand-muted/5 transition-all duration-300"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative flex items-start gap-4 h-full z-10">
        <div className="p-2.5 rounded-lg bg-surface dark:bg-charcoal-light border border-surface-dim dark:border-white/10 text-brand-muted group-hover:scale-110 group-hover:text-brand transition-all duration-300 shrink-0">
          <item.icon size={18} />
        </div>
        <div className="flex flex-col h-full">
          <h4 className="text-ink dark:text-white font-display font-semibold mb-1.5 group-hover:text-brand-muted transition-colors text-[15px]">
            {item.title}
          </h4>
          <p className="text-sm text-ink-muted dark:text-gray-400 leading-relaxed flex-grow">
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
        { icon: Search, title: t('services.items.reporting.title'), desc: t('services.items.reporting.desc') },
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

  return (
    <section className="py-28 bg-surface dark:bg-charcoal relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-dim dark:via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-brand-muted" />
            <span className="text-brand-muted font-mono text-xs tracking-wider uppercase">{t('services.systemCapabilities')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-display font-extrabold mb-5 text-ink dark:text-white"
          >
            <Trans
              i18nKey="services.mainTitle"
              t={t}
              components={{
                muted: <span className="text-ink-faint dark:text-gray-500" />,
                br: <br />,
              }}
            />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-ink-muted dark:text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <motion.h3 
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: catIndex * 0.1 }}
                className="text-lg font-display font-bold text-ink dark:text-white border-l-2 border-brand-muted pl-4 mb-6"
              >
                {category.category}
              </motion.h3>
              
              <div className="flex flex-col gap-3 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <ServiceCard key={itemIndex} item={item} index={itemIndex + catIndex * 4} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 relative overflow-hidden rounded-2xl bg-charcoal text-white"
        >
          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none" />
          
          <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="max-w-xl">
              <span className="text-brand font-mono text-xs tracking-widest uppercase mb-3 block">{t('services.cta.customArch')}</span>
              <h3 className="text-display-md font-display font-extrabold text-white mb-4 leading-tight">
                <Trans
                  i18nKey="services.cta.title"
                  t={t}
                  components={{
                    gradient: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400" />,
                    green: <span className="text-brand" />
                  }}
                />
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {t('services.cta.desc')}
              </p>
            </div>

            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-brand text-charcoal font-display font-bold rounded-lg hover:bg-brand/90 transition-colors shrink-0 flex items-center gap-3"
              >
                <span>{t('services.cta.button')}</span>
                <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
