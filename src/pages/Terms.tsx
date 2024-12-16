import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';

export default function Terms() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="Terms of Service" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <p className="text-gray-300">Last updated: March 14, 2024</p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">1. Terms</h2>
            <p className="text-gray-300">
              By accessing our website, you agree to be bound by these terms of service and comply with all applicable laws and regulations.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily access the materials on Magnates Empire's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">3. Disclaimer</h2>
            <p className="text-gray-300">
              The materials on Magnates Empire's website are provided on an 'as is' basis. Magnates Empire makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}