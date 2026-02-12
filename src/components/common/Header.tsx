import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronRight, ChevronLeft, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation('common');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: t('header.nav.home') },
    { path: '/solutions', label: t('header.nav.solutions') },
    { path: '/meet-the-team', label: t('header.nav.meetTheTeam') },
    { path: '/contact', label: t('header.nav.contact') },
  ];

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <button 
      onClick={toggleLanguage}
      className={`relative flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-brand-neon/30 transition-all group overflow-hidden ${className}`}
    >
      <motion.div 
        className="absolute inset-0 bg-brand-neon/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
      />
      <Globe size={12} className="text-gray-500 group-hover:text-brand-neon transition-colors relative z-10" />
      <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400 group-hover:text-white uppercase relative z-10">
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </span>
      <div className="w-1 h-1 rounded-full bg-brand-neon animate-pulse relative z-10" />
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-500 ${
            scrolled ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/50' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-brand-neon rounded-lg flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
              <Terminal size={18} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              O2MATION<span className="text-brand-neon">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === item.path ? 'text-brand-neon' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <LanguageToggle className="hidden md:flex rounded-full border-white/10" />
            
            <Link 
              to="/contact"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full transition-all group ${
                scrolled 
                  ? 'bg-white text-black hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]' 
                  : 'bg-white text-black hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]'
              }`}
            >
              <span className="text-xs font-bold tracking-wide">{t('header.cta.initialize')}</span>
              {i18n.language === 'ar' ? (
                <ChevronLeft size={14} className="text-black/50 group-hover:text-black transition-colors" />
              ) : (
                <ChevronRight size={14} className="text-black/50 group-hover:text-black transition-colors" />
              )}
            </Link>

            <button
              className="md:hidden text-white w-9 h-9 flex items-center justify-center rounded bg-white/5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-24 left-6 right-6 z-50 overflow-hidden"
          >
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-2 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-bold text-gray-200 hover:text-brand-neon p-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-[1px] bg-white/10 my-2" />
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 bg-brand-neon text-black font-bold rounded">
                  {t('header.cta.initialize')}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
