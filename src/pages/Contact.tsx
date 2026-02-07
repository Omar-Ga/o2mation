import { motion } from 'framer-motion';
import { 
  Terminal, 
  Wifi, 
  Send, 
  CheckCircle, 
  Server,
  Code,
  Database,
  Bot
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    services: [] as string[],
    description: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const services = [
    { id: 'ai', label: 'AI & Automation', icon: Bot },
    { id: 'web', label: 'Custom Web Dev', icon: Code },
    { id: 'system', label: 'Enterprise Systems', icon: Server },
    { id: 'ocr', label: 'Offline-to-Online', icon: Database },
  ];

  const companySizes = [
    "1-10 (Startup)",
    "11-50 (Growth)",
    "51-200 (Scale-up)",
    "200+ (Enterprise)"
  ];

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-neon-green selection:text-charcoal flex flex-col md:flex-row overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* LEFT PANEL: Status Monitor */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 border-r border-white/5 bg-charcoal-light/50 backdrop-blur-sm relative z-10 flex flex-col p-8 pt-24 md:p-12 md:pt-32 justify-between"
      >
        <div>
          <div className="mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-mono mb-4">
               <Wifi size={12} className="animate-pulse" />
               <span>UPLINK ESTABLISHED</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
               Initialize <br />
               <span className="text-neon-green">Protocol</span>
             </h1>
             <p className="text-gray-400 max-w-sm leading-relaxed">
               Configure your project parameters below. Our autonomous agents are standing by to process your request.
             </p>
          </div>
        </div>

        {/* System Stats */}
        <div className="space-y-6 font-mono text-xs">
          <div className="p-4 bg-black/40 border border-white/5 rounded-sm">
            <div className="flex justify-between text-gray-500 mb-2">
              <span>SYSTEM_TIME</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex justify-between text-gray-500 mb-2">
              <span>LOCATION</span>
              <span>GLOBAL_NODE</span>
            </div>
            <div className="flex justify-between text-neon-green">
              <span>AGENT_STATUS</span>
              <span>READY</span>
            </div>
          </div>

          <div className="flex gap-4 text-gray-500">
             <a href="mailto:hello@o2mation.com" className="hover:text-neon-green transition-colors flex items-center gap-2">
               <Terminal size={14} />
               hello@o2mation.com
             </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT PANEL: Input Console */}
      <div className="w-full md:w-2/3 relative z-10 overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-neon-green/20 scrollbar-track-transparent">
        <div className="p-8 pt-24 md:p-20 md:pt-32 max-w-3xl mx-auto">
          
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-neon-green/10 flex items-center justify-center mb-8 border border-neon-green">
                <CheckCircle size={40} className="text-neon-green" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Transmission Received</h2>
              <p className="text-gray-400 max-w-md mb-8">
                Your project parameters have been successfully logged in our system. An O2mation architect will initialize contact shortly.
              </p>
              <Link to="/" className="px-8 py-3 bg-white text-charcoal font-bold hover:bg-neon-green transition-colors uppercase tracking-widest text-sm">
                Return to Homepage
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Section 1: Identity */}
              <section>
                <h3 className="flex items-center gap-3 text-neon-green font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
                  <span className="text-white/20">01</span> // Identity Verification
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-xs font-mono text-gray-500 mb-2 group-focus-within:text-neon-green transition-colors">
                      ENTITY_NAME
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-neon-green focus:outline-none transition-colors rounded-none placeholder-white/10"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="relative group">
                    <label className="block text-xs font-mono text-gray-500 mb-2 group-focus-within:text-neon-green transition-colors">
                      COMM_CHANNEL (EMAIL)
                    </label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:border-neon-green focus:outline-none transition-colors rounded-none placeholder-white/10"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </section>

              {/* Section 2: Parameters */}
              <section>
                <h3 className="flex items-center gap-3 text-neon-green font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
                  <span className="text-white/20">02</span> // Operational Parameters
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-4">
                      ORGANIZATION_SCALE
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {companySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({...formData, companySize: size})}
                          className={`
                            px-4 py-3 text-sm border text-left transition-all duration-300 relative overflow-hidden group
                            ${formData.companySize === size 
                              ? 'border-neon-green bg-neon-green/5 text-white' 
                              : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'}
                          `}
                        >
                          <span className="relative z-10">{size}</span>
                          {formData.companySize === size && (
                            <motion.div 
                              layoutId="size-highlight"
                              className="absolute inset-0 bg-neon-green/5 z-0"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-4">
                      TARGET_MODULES (MULTI-SELECT)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const isSelected = formData.services.includes(service.id);
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.id)}
                            className={`
                              flex items-center gap-4 p-4 border transition-all duration-300 group
                              ${isSelected 
                                ? 'border-neon-green bg-neon-green/10 text-white' 
                                : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'}
                            `}
                          >
                            <div className={`
                              p-2 rounded-sm transition-colors
                              ${isSelected ? 'bg-neon-green text-charcoal' : 'bg-white/5 text-gray-500 group-hover:bg-white/10'}
                            `}>
                              <Icon size={20} />
                            </div>
                            <span className="font-mono text-sm">{service.label}</span>
                            {isSelected && <CheckCircle size={16} className="ml-auto text-neon-green" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Mission Brief */}
              <section>
                <h3 className="flex items-center gap-3 text-neon-green font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
                  <span className="text-white/20">03</span> // Mission Brief
                </h3>
                
                <div className="space-y-8">
                  <div className="relative group">
                    <label className="block text-xs font-mono text-gray-500 mb-2 group-focus-within:text-neon-green transition-colors">
                      SYSTEM_DESCRIPTION
                    </label>
                    <textarea 
                      required
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="w-full bg-black/20 border border-white/10 p-4 text-sm focus:border-neon-green focus:outline-none transition-colors rounded-sm placeholder-white/10 resize-none"
                      placeholder="Describe the process you want to automate or the system you need built..."
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-mono text-gray-500 mb-2 group-focus-within:text-neon-green transition-colors">
                      ADDITIONAL_LOGS (OPTIONAL)
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      rows={2}
                      className="w-full bg-black/20 border border-white/10 p-4 text-sm focus:border-neon-green focus:outline-none transition-colors rounded-sm placeholder-white/10 resize-none"
                      placeholder="Any other details..."
                    />
                  </div>
                </div>
              </section>

              {/* Submit Action */}
              <div className="pt-8 border-t border-white/5">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-6 bg-neon-green text-charcoal text-xl font-bold rounded-none hover:bg-white transition-colors uppercase tracking-widest overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                        PROCESSING...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        EXECUTE_PROTOCOL
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
