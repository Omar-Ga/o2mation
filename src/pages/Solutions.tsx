import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Bot, 
  Code2, 
  Database, 
  Cpu, 
  Scan, 
  Workflow, 
  Globe, 
  Server, 
  ArrowRight,
  Loader2,
  Play
} from 'lucide-react';
import { ChatWidget } from '../components/common/ChatWidget';

// --- Types & Data ---

type Category = 'ALL' | 'AI' | 'WEB' | 'SYSTEMS' | 'OFFLINE';

interface ServiceConfig {
  id: string;
  category: Category;
  icon: React.ElementType;
}

interface Service extends ServiceConfig {
  title: string;
  description: string;
  details: string[];
  tech: string[];
}

const SERVICES_CONFIG: ServiceConfig[] = [
  {
    id: 'ai-bpa',
    category: 'AI',
    icon: Workflow
  },
  {
    id: 'ai-ocr',
    category: 'OFFLINE',
    icon: Scan
  },
  {
    id: 'web-custom',
    category: 'WEB',
    icon: Globe
  },
  {
    id: 'sys-erp',
    category: 'SYSTEMS',
    icon: Database
  },
  {
    id: 'ai-chat',
    category: 'AI',
    icon: Bot
  },
  {
    id: 'web-headless',
    category: 'WEB',
    icon: Server
  },
  {
    id: 'sys-legacy',
    category: 'SYSTEMS',
    icon: Code2
  },
  {
    id: 'ai-integration',
    category: 'AI',
    icon: Cpu
  }
];

const CATEGORIES_CONFIG: { id: Category; key: string }[] = [
  { id: 'ALL', key: 'all' },
  { id: 'AI', key: 'ai' },
  { id: 'WEB', key: 'web' },
  { id: 'SYSTEMS', key: 'systems' },
  { id: 'OFFLINE', key: 'offline' },
];

// --- Components ---

const ServiceCard = ({ service, isExpanded, onToggle }: { service: Service; isExpanded: boolean; onToggle: () => void }) => {
  const { t } = useTranslation('solutions');
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`group relative border ${isExpanded ? 'border-neon-green bg-charcoal-light/50' : 'border-white/10 bg-charcoal-light/20 hover:border-neon-green/50'} backdrop-blur-sm overflow-hidden transition-colors cursor-pointer`}
      onClick={onToggle}
    >
      {/* Tech Decoration Lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-green/0 via-neon-green/50 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-none border border-white/10 ${isExpanded ? 'bg-neon-green/10 text-neon-green' : 'text-gray-400 group-hover:text-neon-green'}`}>
            <service.icon size={24} />
          </div>
          <div className="font-mono text-xs text-gray-500">{t('card.moduleId', { id: service.id.toUpperCase() })}</div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-green transition-colors">{service.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-white/10 pt-4 mt-4"
            >
              <h4 className="text-neon-green text-xs font-mono mb-3 tracking-wider">{t('card.capabilities')}</h4>
              <ul className="space-y-2 mb-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="text-neon-green mr-2">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-[10px] font-mono border border-white/20 text-gray-400 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Expand Hint */}
      {!isExpanded && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight size={16} className="text-neon-green" />
        </div>
      )}
    </motion.div>
  );
};

const DemoSandbox = () => {
  const { t } = useTranslation('solutions');
  const [activeDemo, setActiveDemo] = useState<'OCR' | 'API' | 'CHAT'>('OCR');
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  const demos = {
    OCR: {
      name: t('demo.ocr.name'),
      steps: Object.values(t('demo.ocr.steps', { returnObjects: true })) as string[]
    },
    API: {
      name: t('demo.api.name'),
      steps: Object.values(t('demo.api.steps', { returnObjects: true })) as string[]
    },
    CHAT: {
      name: t('demo.chat.name'),
      steps: Object.values(t('demo.chat.steps', { returnObjects: true })) as string[]
    }
  };

  const runDemo = (type: 'OCR' | 'API' | 'CHAT') => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveDemo(type);
    setLogs([]);
    
    let stepIndex = 0;
    const currentDemo = demos[type];
    
    const interval = setInterval(() => {
      if (stepIndex >= currentDemo.steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        return;
      }
      
      const step = currentDemo.steps[stepIndex];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 } as Intl.DateTimeFormatOptions);
      setLogs(prev => [...prev, `[${timestamp}] ${step}`]);
      stepIndex++;
    }, 800);
  };

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="border border-white/10 bg-black/50 backdrop-blur-md rounded-lg overflow-hidden flex flex-col md:flex-row h-[500px]">
      {/* Sidebar Controls */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-charcoal-light/30 p-4">
        <h3 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">{t('demo.selectProtocol')}</h3>
        <div className="space-y-2">
          {(Object.keys(demos) as Array<'OCR' | 'API' | 'CHAT'>).map((key) => (
            <button
              key={key}
              onClick={() => runDemo(key)}
              disabled={isRunning}
              className={`w-full text-left px-4 py-3 text-sm font-mono border transition-all ${
                activeDemo === key 
                  ? 'border-neon-green text-neon-green bg-neon-green/5' 
                  : 'border-white/5 text-gray-400 hover:border-white/20 hover:text-white'
              } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span>{t(`demo.names.${key.toLowerCase()}`)}</span>
                {activeDemo === key && isRunning && <Loader2 size={14} className="animate-spin" />}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 p-4 border border-dashed border-white/10 rounded bg-black/20">
          <p className="text-[10px] text-gray-500 font-mono leading-relaxed">
            {t('demo.note')}
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 flex flex-col bg-black font-mono text-sm relative">
        <div className="h-8 bg-charcoal-light border-b border-white/10 flex items-center px-4 justify-between">
          <span className="text-xs text-gray-500">{t('demo.terminal', { script: activeDemo.toLowerCase() })}</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto space-y-2 font-mono text-xs md:text-sm">
          <div className="text-gray-500 mb-4">
            {t('demo.initializing')}<br/>
            {t('demo.ready')}
          </div>
          
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-neon-green"
            >
              <span className="text-gray-600 mr-2">{log.split(']')[0]}]</span>
              {log.split(']')[1]}
            </motion.div>
          ))}
          
          {logs.length === 0 && !isRunning && (
             <div className="text-gray-600 animate-pulse">{t('demo.waiting')}</div>
          )}
          
          {isRunning && (
            <div className="text-neon-green animate-pulse">{t('demo.cursor')}</div>
          )}
          
          <div ref={logEndRef} />
        </div>

        {/* Action Overlay if not running */}
        {!isRunning && logs.length === 0 && (
           <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
              <button 
                onClick={() => runDemo(activeDemo)}
                className="flex items-center gap-2 px-6 py-3 bg-neon-green text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <Play size={18} fill="currentColor" />
                {t('demo.initializeButton')}
              </button>
           </div>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---

const Solutions = () => {
  const { t } = useTranslation('solutions');
  const [filter, setFilter] = useState<Category>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: Service[] = SERVICES_CONFIG.map(config => ({
    ...config,
    title: t(`services.${config.id}.title`),
    description: t(`services.${config.id}.description`),
    tech: t(`services.${config.id}.tech`, { returnObjects: true }) as string[],
    details: Object.values(t(`services.${config.id}.details`, { returnObjects: true }))
  }));

  const filteredServices = services.filter(s => filter === 'ALL' || s.category === filter);

  return (
    <div className="min-h-screen bg-charcoal text-white selection:bg-neon-green selection:text-charcoal pb-20">
      
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-4 border border-neon-green/30 rounded-full bg-neon-green/5"
          >
            <span className="text-neon-green text-xs font-mono tracking-wider">{t('header.label')}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t('header.title')}<span className="text-neon-green">{t('header.dot')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg leading-relaxed"
          >
            {t('header.description')}
          </motion.p>
        </header>

        {/* Filter Controls */}
        <div className="mb-12 sticky top-20 z-40 bg-charcoal/95 py-4 backdrop-blur-xl border-b border-white/5 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:static md:border-none">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setExpandedId(null);
                }}
                className={`px-4 py-2 text-xs md:text-sm font-mono border transition-all duration-300 ${
                  filter === cat.id 
                    ? 'border-neon-green bg-neon-green/10 text-neon-green shadow-[0_0_15px_rgba(0,255,128,0.2)]' 
                    : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
                }`}
              >
                {t(`categories.${cat.key}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Service Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          <AnimatePresence mode='popLayout'>
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isExpanded={expandedId === service.id}
                onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Sandbox */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t('demo.title')}</h2>
              <p className="text-gray-400 text-sm">{t('demo.subtitle')}</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neon-green">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </span>
              {t('demo.status')}
            </div>
          </div>
          
          <DemoSandbox />
        </section>

      </main>

      <ChatWidget />
    </div>
  );
};

export default Solutions;
