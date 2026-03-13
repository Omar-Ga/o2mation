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
    <main className="bg-surface dark:bg-charcoal min-h-screen selection:bg-brand selection:text-charcoal">
      {/* 1. Hero — Dark, confident value proposition */}
      <Hero />
      {/* 2. Tech ticker — Subtle credibility */}
      <TechStack />
      {/* 3. Problem — Before/After pain-point contrast */}
      <Problem />
      {/* 4. Services — What we build */}
      <Services />
      {/* 5. Results — Concrete case studies (formerly Solution) */}
      <Solution />
      {/* 6. Process — How we work */}
      <Process />
      {/* 7. Metrics — Key numbers */}
      <Metrics />
      {/* 8. CTA — Convert */}
      <CTA />
      <ChatWidget />
    </main>
  );
};

export default Home;
