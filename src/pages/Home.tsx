import { Hero } from '../components/home/Hero';
import { Problem } from '../components/home/Problem';
import { Solution } from '../components/home/Solution';
import { Process } from '../components/home/Process';
import { TechStack } from '../components/home/TechStack';
import { Metrics } from '../components/home/Metrics';
import { CTA } from '../components/home/CTA';
import { ChatWidget } from '../components/common/ChatWidget';

const Home = () => {
  return (
    <main className="bg-charcoal min-h-screen selection:bg-neon-green selection:text-charcoal">
      <Hero />
      <TechStack />
      <Problem />
      <Process />
      <Solution />
      <Metrics />
      <CTA />
      <ChatWidget />
      
      {/* Simple Footer for completeness */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-charcoal-light">
        <p className="font-mono text-xs text-gray-500">
          &copy; {new Date().getFullYear()} O2MATION // SYSTEM.ROOT
        </p>
      </footer>
    </main>
  );
};

export default Home;
