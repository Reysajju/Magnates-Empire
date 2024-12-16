import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';
import HelpCenter from '../components/HelpCenter';

export default function Help() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="Help Center" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <HelpCenter />
        </div>
      </main>

      <Footer />
    </div>
  );
}