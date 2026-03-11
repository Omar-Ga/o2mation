import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import MeetTheTeam from './pages/MeetTheTeam';
import { Header } from './components/common/Header';
import { Footer } from './components/Footer';
import { FooterReveal } from './components/FooterReveal';
import SmoothScroll from './components/common/SmoothScroll';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <Router>
            <ScrollToTop />

            <div className="relative min-h-screen bg-white dark:bg-charcoal transition-colors duration-300">
            <Header />

            {/*
              Main Content Wrapper
              - z-10 and bg-white dark:bg-charcoal to cover the fixed reveal layer
              - mb-[300px/350px] creates the "window" at the bottom for the reveal
              - shadow added to create depth separation from the flat reveal layer
            */}
            <div className="relative z-10 bg-white dark:bg-charcoal mb-[300px] md:mb-[350px] shadow-2xl border-b border-black/5 dark:border-black/5 dark:border-white/5 transition-colors duration-300">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/meet-the-team" element={<MeetTheTeam />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>

            {/* The Fixed Reveal Layer that sits behind everything */}
            <FooterReveal />
          </div>
          </Router>
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
