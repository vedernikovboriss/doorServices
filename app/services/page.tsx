import React from 'react';
import Link from 'next/link';
import { services } from '../data/services';
import ButtonPrimary from '../components/ButtonPrimary';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

export const metadata = {
  title: 'Услуги | Наши услуги по монтажу дверей',
  description:
    'Замер, монтаж, технический надзор и школа монтажа межкомнатных дверей. Профессиональный сервис с многолетним опытом.',
};

export default function ServicesPage() {
  return (
    <main className="bg-(--white) pt-16">
      <ServicesSection />
      <CTA />
      <Footer />
    </main>
  );
}
