import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsOverviewSection from './components/ProjectsOverviewSection';
import CTA from './components/CTA';
import FAQSection from './components/FAQSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import HeroSec2 from './components/HeroSec2';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsOverviewSection />
      <CTA />
      <FAQSection />
      <MarqueeSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
