import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="Contact Support" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              Our support team is here to help. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}