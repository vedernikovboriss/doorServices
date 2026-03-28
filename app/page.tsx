import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsOverviewSection from './components/ProjectsOverviewSection';
import CTA from './components/CTA';
import FAQSection from './components/FAQSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsOverviewSection />
      <CTA />
      <MarqueeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
