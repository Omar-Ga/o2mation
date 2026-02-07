import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
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
      <Services />
      <Problem />
      <Process />
      <Solution />
      <Metrics />
      <CTA />
      <ChatWidget />
    </main>
  );
};

export default Home;
