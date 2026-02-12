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
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
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
    { id: 'ai', label: t('form.options.services.ai'), icon: Bot },
    { id: 'web', label: t('form.options.services.web'), icon: Code },
    { id: 'system', label: t('form.options.services.system'), icon: Server },
    { id: 'ocr', label: t('form.options.services.ocr'), icon: Database },
  ];

  const companySizes = [
    'startup',
    'growth',
    'scaleUp',
    'enterprise'
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-green selection:text-black flex flex-col md:flex-row relative overflow-hidden">
      {/* Background - Minimalistic Dark + Neon Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
         {/* Subtle Grid Pattern - Darker and Cleaner */}
         <div className="absolute inset-0 opacity-[0.04]" 
              style={{ 
                backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                backgroundSize: '40px 40px' 
              }} 
         />
         
         {/* Strategic Glows - Minimal but Present */}
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-neon-green/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-neon-green/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* LEFT PANEL: Status Monitor */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/3 border-r border-white/10 bg-zinc-900/30 backdrop-blur-xl relative z-10 flex flex-col p-8 pt-24 md:p-12 md:pt-32 justify-between md:sticky md:top-0 md:h-screen"
      >
        <div>
          <div className="mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono mb-6">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
               <span>{t('statusPanel.uplinkEstablished')}</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-none">
               {t('statusPanel.initialize')} <br />
               <span className="text-zinc-500">{t('statusPanel.protocol')}</span>
             </h1>
             <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
               {t('statusPanel.description')}
             </p>
          </div>
        </div>

        {/* System Stats */}
        <div className="space-y-6 font-mono text-xs">
          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
            <div className="flex justify-between text-zinc-400 mb-3">
              <span>{t('statusPanel.systemTime')}</span>
              <span className="text-zinc-200">{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex justify-between text-zinc-400 mb-3">
              <span>{t('statusPanel.location')}</span>
              <span className="text-zinc-200">{t('statusPanel.globalNode')}</span>
            </div>
            <div className="flex justify-between text-zinc-400 pt-3 border-t border-white/5">
              <span>{t('statusPanel.agentStatus')}</span>
              <span className="text-neon-green font-bold tracking-wider">{t('statusPanel.ready')}</span>
            </div>
          </div>

          <div className="flex gap-4 text-zinc-400">
             <a href="mailto:HELLO@O2MATION.COM" className="hover:text-neon-green transition-colors flex items-center gap-2 group">
               <div className="p-2 rounded-md bg-white/5 group-hover:bg-neon-green/10 transition-colors">
                 <Terminal size={16} />
               </div>
               <span className="tracking-wider">HELLO@O2MATION.COM</span>
             </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT PANEL: Input Console */}
      <div className="w-full md:w-2/3 relative z-10">
        <div className="p-8 pt-24 md:p-20 md:pt-32 max-w-3xl mx-auto">
          
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-neon-green/10 flex items-center justify-center mb-8 border border-neon-green">
                <CheckCircle size={48} className="text-neon-green" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">{t('success.transmissionReceived')}</h2>
              <p className="text-zinc-400 text-lg max-w-md mb-10 leading-relaxed">
                {t('success.message')}
              </p>
              <Link to="/" className="px-10 py-4 bg-white text-black font-bold hover:bg-neon-green transition-colors rounded-full tracking-wide text-sm uppercase">
                {t('success.returnHome')}
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-16">
              
              {/* Section 1: Identity */}
              <section>
                <h3 className="flex items-center gap-4 text-white font-mono text-sm tracking-widest mb-10 uppercase border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-neon-green">01</span> 
                  {t('form.sections.identity')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-zinc-400 mb-3 group-focus-within:text-neon-green transition-colors">
                      {t('form.fields.entityName.label')}
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-900/50 border border-white/10 focus:border-neon-green/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(0,255,163,0.1)] py-4 px-6 text-lg text-white focus:outline-none transition-all duration-300 rounded-2xl placeholder-zinc-700"
                      placeholder={t('form.fields.entityName.placeholder')}
                    />
                  </div>
                  
                  <div className="relative group">
                    <label className="block text-sm font-medium text-zinc-400 mb-3 group-focus-within:text-neon-green transition-colors">
                      {t('form.fields.commChannel.label')}
                    </label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-900/50 border border-white/10 focus:border-neon-green/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(0,255,163,0.1)] py-4 px-6 text-lg text-white focus:outline-none transition-all duration-300 rounded-2xl placeholder-zinc-700"
                      placeholder={t('form.fields.commChannel.placeholder')}
                    />
                  </div>
                </div>
              </section>

              {/* Section 2: Parameters */}
              <section>
                <h3 className="flex items-center gap-4 text-white font-mono text-sm tracking-widest mb-10 uppercase border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-neon-green">02</span> 
                  {t('form.sections.parameters')}
                </h3>

                <div className="space-y-10">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-4">
                      {t('form.fields.organizationScale.label')}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {companySizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setFormData({...formData, companySize: size})}
                          className={`
                            px-6 py-4 text-sm font-medium text-left transition-all duration-300 relative overflow-hidden group rounded-2xl border
                            ${formData.companySize === size 
                              ? 'border-white bg-white text-black shadow-lg shadow-white/10' 
                              : 'border-white/5 bg-zinc-900/50 text-zinc-400 hover:border-neon-green/30 hover:text-white hover:bg-zinc-900'}
                          `}
                        >
                          <span className="relative z-10">{t(`form.options.companySize.${size}`)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-4">
                      {t('form.fields.targetModules.label')}
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
                              flex items-center gap-4 p-5 border transition-all duration-300 group rounded-2xl
                              ${isSelected 
                                ? 'border-white bg-white text-black shadow-lg shadow-white/10' 
                                : 'border-white/5 bg-zinc-900/50 text-zinc-400 hover:border-neon-green/30 hover:text-white hover:bg-zinc-900'}
                            `}
                          >
                            <div className={`
                              p-2.5 rounded-xl transition-colors
                              ${isSelected ? 'bg-black text-white' : 'bg-black/40 text-zinc-500 group-hover:text-neon-green group-hover:bg-neon-green/10'}
                            `}>
                              <Icon size={20} />
                            </div>
                            <span className="font-medium">{service.label}</span>
                            {isSelected && <CheckCircle size={18} className="ml-auto text-black" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Mission Brief */}
              <section>
                <h3 className="flex items-center gap-4 text-white font-mono text-sm tracking-widest mb-10 uppercase border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-neon-green">03</span> 
                  {t('form.sections.missionBrief')}
                </h3>
                
                <div className="space-y-10">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-zinc-400 mb-3 group-focus-within:text-neon-green transition-colors">
                      {t('form.fields.systemDescription.label')}
                    </label>
                    <textarea 
                      required
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="w-full bg-zinc-900/50 border border-white/10 focus:border-neon-green/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(0,255,163,0.1)] p-6 text-base text-white focus:outline-none transition-all duration-300 rounded-2xl placeholder-zinc-700 resize-none"
                      placeholder={t('form.fields.systemDescription.placeholder')}
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-zinc-400 mb-3 group-focus-within:text-neon-green transition-colors">
                      {t('form.fields.additionalLogs.label')}
                    </label>
                    <textarea 
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      rows={2}
                      className="w-full bg-zinc-900/50 border border-white/10 focus:border-neon-green/50 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(0,255,163,0.1)] p-6 text-base text-white focus:outline-none transition-all duration-300 rounded-2xl placeholder-zinc-700 resize-none"
                      placeholder={t('form.fields.additionalLogs.placeholder')}
                    />
                  </div>
                </div>
              </section>

              {/* Submit Action */}
              <div className="pt-10 border-t border-white/10">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-neon-green transition-all duration-300 tracking-wide overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,163,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        {t('form.submit.processing')}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t('form.submit.executeProtocol')}
                      </>
                    )}
                  </span>
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
