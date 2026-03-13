import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const { t, i18n } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('header.nav.home'), path: '/' },
    { name: t('header.nav.solutions'), path: '/solutions' },
    { name: t('header.nav.meetTheTeam'), path: '/meet-the-team' },
    { name: t('header.nav.contact'), path: '/contact' },
  ];

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <button 
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-ink-faint dark:text-gray-500 hover:text-ink dark:hover:text-white transition-colors ${className}`}
    >
      <Globe size={14} />
      <span className="text-xs font-mono tracking-wider">
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-charcoal/90 backdrop-blur-xl border-b border-surface-dim dark:border-white/10 py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 z-50">
            <span className="font-display font-black text-xl tracking-tight text-ink dark:text-white group-hover:opacity-90 transition-opacity">
              {t('brand.name')}<span className="text-brand">{t('brand.dot')}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-sans font-medium tracking-wide hover:text-brand-muted transition-colors relative ${
                  location.pathname === link.path ? 'text-brand-muted' : 'text-ink-muted dark:text-gray-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-brand-muted rounded-full transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden md:flex" />
            <LanguageToggle className="hidden md:flex" />
            
            <Link 
              to="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-charcoal dark:bg-white text-white dark:text-charcoal font-sans font-semibold text-sm rounded-lg hover:bg-charcoal/80 dark:hover:bg-white/90 transition-colors"
            >
              <span>{t('header.cta.initialize')}</span>
              <ArrowRight size={14} />
            </Link>

            <button 
              className="md:hidden z-50 text-ink dark:text-white hover:text-brand-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white dark:bg-charcoal md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl font-display font-bold tracking-tight ${
                      location.pathname === link.path ? 'text-brand-muted' : 'text-ink dark:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-brand text-charcoal font-display font-bold rounded-lg"
                >
                  {t('header.cta.startProject')}
                </Link>

                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
