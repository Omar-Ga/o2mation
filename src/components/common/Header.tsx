import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SOLUTIONS', path: '/solutions' },
    { name: 'OPERATORS', path: '/operators' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-charcoal/90 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-neon-green/10 border border-neon-green/30 flex items-center justify-center rounded-sm group-hover:bg-neon-green/20 transition-colors">
              <Terminal size={16} className="text-neon-green" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">
              O2MATION<span className="text-neon-green">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs font-mono tracking-widest hover:text-neon-green transition-colors relative group ${
                  location.pathname === link.path ? 'text-neon-green' : 'text-gray-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-neon-green transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-neon-green/50 hover:bg-neon-green/10 transition-all group"
            >
              <span className="text-xs font-bold tracking-wide text-white group-hover:text-neon-green">INITIALIZE</span>
              <ChevronRight size={14} className="text-gray-500 group-hover:text-neon-green transition-colors" />
            </Link>

            <button 
              className="md:hidden z-50 text-white hover:text-neon-green transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
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
                    className={`text-3xl font-bold tracking-tighter ${
                      location.pathname === link.path ? 'text-neon-green' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-neon-green text-black font-bold tracking-widest hover:bg-white transition-colors"
                >
                  START PROJECT
                </Link>
              </motion.div>
            </nav>

            {/* Decor */}
            <div className="absolute bottom-12 text-xs font-mono text-gray-600">
              SYSTEM_READY // WAITING_FOR_INPUT
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
