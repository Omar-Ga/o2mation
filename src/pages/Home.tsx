import { ModernHero } from '../components/home/ModernHero';
import { BentoGridSection } from '../components/home/BentoGridSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { TechStack } from '../components/home/TechStack';
import { Metrics } from '../components/home/Metrics';
import { CTA } from '../components/home/CTA';
import { ChatWidget } from '../components/common/ChatWidget';

const Home = () => {
  return (
    <main className="bg-charcoal min-h-screen selection:bg-neon-green selection:text-charcoal font-sans text-gray-300">
      <ModernHero />
      <BentoGridSection />
      <TechStack />
      <ServicesGrid />
      <Metrics />
      <CTA />
      <ChatWidget />
    </main>
  );
};

export default Home;
