import React from 'react';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import VacanciesSection from '@/app/components/VacanciesSection';
import VacanciesCTA from '@/app/components/VacanciesCTA';

export default function VacanciesPage() {
  return (
    <main className="bg-(--white) pt-16">
      <VacanciesSection />
      <VacanciesCTA />
      <Footer />
    </main>
  );
}
