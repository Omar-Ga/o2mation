import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface Service {
  id: string;
  category: Category;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  tech: string[];
}

const SERVICES: Service[] = [
  {
    id: 'ai-bpa',
    category: 'AI',
    title: 'Business Process Automation',
    description: 'End-to-end workflow automation for routing and logic.',
    details: [
      'Intelligent Email Auto-Responders',
      'Lead Routing & Scoring',
      'Customer Service Ticketing',
      'Cross-Platform Data Sync'
    ],
    icon: Workflow,
    tech: ['Python', 'LangChain', 'Zapier', 'OpenAI API']
  },
  {
    id: 'ai-ocr',
    category: 'OFFLINE',
    title: 'Offline-to-Online OCR',
    description: 'Extract text from physical docs to digital databases.',
    details: [
      'Receipt & Invoice Processing',
      'Handwriting Recognition',
      'Automated Data Entry',
      'PDF Parsing'
    ],
    icon: Scan,
    tech: ['Tesseract', 'Google Vision API', 'AWS Textract']
  },
  {
    id: 'web-custom',
    category: 'WEB',
    title: 'Custom Web Architecture',
    description: 'Tailor-made high-performance websites.',
    details: [
      'SPA / PWA Development',
      'WebGL & 3D Experiences',
      'Accessibility First (WCAG 2.1)',
      'Performance Optimization'
    ],
    icon: Globe,
    tech: ['React', 'TypeScript', 'Three.js', 'Vite']
  },
  {
    id: 'sys-erp',
    category: 'SYSTEMS',
    title: 'Custom Enterprise ERP',
    description: 'Internal engines for operational efficiency.',
    details: [
      'HR & Payroll Modules',
      'Inventory Management',
      'Supply Chain Tracking',
      'Employee Portals'
    ],
    icon: Database,
    tech: ['PostgreSQL', 'Node.js', 'Redis', 'Docker']
  },
  {
    id: 'ai-chat',
    category: 'AI',
    title: 'Context-Aware Chatbots',
    description: 'AI agents for support and knowledge retrieval.',
    details: [
      'RAG (Retrieval Augmented Generation)',
      'Customer Support Agents',
      'Internal Knowledge Base Bots',
      'Multi-modal interaction'
    ],
    icon: Bot,
    tech: ['Vector DB', 'LlamaIndex', 'GPT-4o']
  },
  {
    id: 'web-headless',
    category: 'WEB',
    title: 'Headless CMS Solutions',
    description: 'Decoupled content delivery architectures.',
    details: [
      'Omnichannel Content Delivery',
      'High-Performance Static Builds',
      'Custom Content Modeling',
      'Editorial Workflow Tools'
    ],
    icon: Server,
    tech: ['Contentful', 'Sanity', 'Next.js']
  },
  {
    id: 'sys-legacy',
    category: 'SYSTEMS',
    title: 'Legacy Modernization',
    description: 'Upgrading outdated tools to modern web apps.',
    details: [
      'Mainframe to Cloud Migration',
      'UI/UX Overhaul',
      'Database Normalization',
      'API Layer Creation'
    ],
    icon: Code2,
    tech: ['Cloud Migration', 'Microservices', 'Modern UI']
  },
  {
    id: 'ai-integration',
    category: 'AI',
    title: 'LLM Injection',
    description: 'Enhancing existing platforms with AI capabilities.',
    details: [
      'Sentiment Analysis',
      'Automated Summarization',
      'Generative Content Tools',
      'Predictive Analytics'
    ],
    icon: Cpu,
    tech: ['HuggingFace', 'TensorFlow', 'Fine-tuning']
  }
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'ALL', label: 'ALL_MODULES' },
  { id: 'AI', label: 'AI_INTELLIGENCE' },
  { id: 'WEB', label: 'WEB_ARCH' },
  { id: 'SYSTEMS', label: 'CORE_SYSTEMS' },
  { id: 'OFFLINE', label: 'OFFLINE_DATA' },
];

// --- Components ---

const ServiceCard = ({ service, isExpanded, onToggle }: { service: Service; isExpanded: boolean; onToggle: () => void }) => {
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
          <div className="font-mono text-xs text-gray-500">{service.id.toUpperCase()}</div>
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
              <h4 className="text-neon-green text-xs font-mono mb-3 tracking-wider">CAPABILITIES:</h4>
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
  const [activeDemo, setActiveDemo] = useState<'OCR' | 'API' | 'CHAT'>('OCR');
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  const demos = {
    OCR: {
      name: 'LIVE_OCR_PROCESS',
      steps: [
        'Initializing camera feed...',
        'Capturing frame [1920x1080]...',
        'Preprocessing: Grayscale conversion...',
        'Preprocessing: Noise reduction...',
        'Detecting text regions...',
        'Running Tesseract engine...',
        'Text found: "TOTAL: $45.99"',
        'Text found: "DATE: 2024-10-12"',
        'Confidence score: 98.4%',
        'Structuring JSON data...',
        'Pushing to database...',
        'Sync complete.'
      ]
    },
    API: {
      name: 'API_INTEGRATION_TEST',
      steps: [
        'Sending POST /api/v1/sync...',
        'Payload size: 1.2kb',
        'Authenticating (Bearer Token)...',
        'Handshake successful.',
        'Connecting to legacy CRM...',
        'Mapping fields: name -> customer_name',
        'Mapping fields: email -> contact_email',
        'Webhook triggered: "New Lead"',
        'Slack notification sent.',
        'Response: 200 OK',
        'Latency: 42ms'
      ]
    },
    CHAT: {
      name: 'RAG_QUERY_EXECUTION',
      steps: [
        'User Query: "How do I reset my password?"',
        'Embedding query vector...',
        'Searching vector database (Pinecone)...',
        'Found 3 relevant context chunks.',
        'Injecting context into prompt...',
        'Calling GPT-4o API...',
        'Streaming response...',
        'Generating answer...',
        'Response complete.',
        'Citation added: [Manual v2.1, p.45]'
      ]
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
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 } as any);
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
        <h3 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">Select Protocol</h3>
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
                <span>{key}_DEMO</span>
                {activeDemo === key && isRunning && <Loader2 size={14} className="animate-spin" />}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 p-4 border border-dashed border-white/10 rounded bg-black/20">
          <p className="text-[10px] text-gray-500 font-mono leading-relaxed">
            NOTE: This is a simulation of our backend processing logic. Real-world performance depends on API latency and dataset size.
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 flex flex-col bg-black font-mono text-sm relative">
        <div className="h-8 bg-charcoal-light border-b border-white/10 flex items-center px-4 justify-between">
          <span className="text-xs text-gray-500">root@o2mation:~/demos/{activeDemo.toLowerCase()}.sh</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto space-y-2 font-mono text-xs md:text-sm">
          <div className="text-gray-500 mb-4">
            # Initializing sandbox environment...<br/>
            # Ready to execute.
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
             <div className="text-gray-600 animate-pulse">_ Waiting for input...</div>
          )}
          
          {isRunning && (
            <div className="text-neon-green animate-pulse">_</div>
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
                Initialize Demo
              </button>
           </div>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---

const Solutions = () => {
  const [filter, setFilter] = useState<Category>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredServices = SERVICES.filter(s => filter === 'ALL' || s.category === filter);

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
            <span className="text-neon-green text-xs font-mono tracking-wider">SYSTEM_CAPABILITIES // INDEX</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Solutions Matrix<span className="text-neon-green">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg leading-relaxed"
          >
            A modular ecosystem of intelligent services. Filter by category to explore our technical capabilities, or test our live automation protocols in the sandbox below.
          </motion.p>
        </header>

        {/* Filter Controls */}
        <div className="mb-12 sticky top-20 z-40 bg-charcoal/95 py-4 backdrop-blur-xl border-b border-white/5 -mx-4 px-4 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:static md:border-none">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
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
                {cat.label}
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
              <h2 className="text-2xl font-bold mb-2">Live Automations</h2>
              <p className="text-gray-400 text-sm">Interactive Sandbox Environment v1.0.4</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neon-green">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </span>
              SYSTEM_ONLINE
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
