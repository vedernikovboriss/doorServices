import React from 'react';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const page = () => {
  return (
    <main className="bg-(--white) pt-16">
      <section className="section-base-padding pb-0! flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
        <h1 className="h2">Контакты</h1>
        <span className="subtitle text-(--accent) shrink-0">(Свяжитесь с нами)</span>
      </section>
      <CTA sectionClassName="pt-8!" />
      <Footer />
    </main>
  );
};

export default page;
