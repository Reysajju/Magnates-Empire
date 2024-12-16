import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="Frequently Asked Questions" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </main>

      <Footer />
    </div>
  );
}