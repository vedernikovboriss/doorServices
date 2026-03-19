import React from 'react';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import VacanciesSection from '@/app/components/VacanciesSection';
import VacanciesCTA from '@/app/components/VacanciesCTA';

export const metadata = {
  title: 'Вакансии | Монтаж межкомнатных дверей',
  description:
    'Открытые вакансии компании «Технический отдел». Присоединяйтесь к команде: замер, монтаж, технический надзор и обучение.',
};

export default function VacanciesPage() {
  return (
    <main className="bg-(--white) pt-16">
      <VacanciesSection />
      <VacanciesCTA />
      <Footer />
    </main>
  );
}
