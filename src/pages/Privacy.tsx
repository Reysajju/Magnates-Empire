import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="Privacy Policy" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <p className="text-gray-300">Last updated: March 14, 2024</p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-300">
              We collect information you provide directly to us, including name, email address, phone number, and tool preferences when you submit forms on our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">How We Use Your Information</h2>
            <ul className="space-y-4 text-gray-300">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}