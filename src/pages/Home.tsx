import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageContainer from '../components/layout/PageContainer';
import SEOHead from '../components/seo/SEOHead';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SubscriptionForm from '../components/SubscriptionForm/NetlifyForm';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Magnates Empire - Premium Tools Suite | 150+ Professional Tools"
        description="Access 150+ premium tools including ChatGPT Pro, SEMrush, Adobe Suite, and more. Save up to 90% with our all-in-one subscription. Get premium tech tools at affordable prices."
        keywords={[
          'premium software deals',
          'affordable tech tools',
          'professional software bundle',
          'business tools subscription',
          'premium tech access'
        ]}
      />
      <Hero onGetAccessClick={() => setIsFormOpen(true)} />
      <PageContainer>
        <Features />
      </PageContainer>
      <SubscriptionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </Layout>
  );
}