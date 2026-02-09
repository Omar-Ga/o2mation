import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import { Header } from './components/common/Header';
import { Footer } from './components/Footer';
import { FooterReveal } from './components/FooterReveal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        
        <div className="relative min-h-screen bg-charcoal">
        <Header />
        
        {/* 
          Main Content Wrapper 
          - z-10 and bg-charcoal to cover the fixed reveal layer
          - mb-[300px/350px] creates the "window" at the bottom for the reveal
          - shadow added to create depth separation from the flat reveal layer
        */}
        <div className="relative z-10 bg-charcoal mb-[300px] md:mb-[350px] shadow-2xl border-b border-white/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>

        {/* The Fixed Reveal Layer that sits behind everything */}
        <FooterReveal />
      </div>
      </Router>
    </MotionConfig>
  )
}

export default App
