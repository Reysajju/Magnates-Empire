import React from 'react';
import Layout from '../components/layout/Layout';
import PageContainer from '../components/layout/PageContainer';
import PageHeader from '../components/common/PageHeader';
import SEOHead from '../components/seo/SEOHead';

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About Magnates Empire | Premium Tools Provider"
        description="Learn about Magnates Empire's mission to provide affordable access to premium tools and software for businesses and professionals worldwide."
        keywords={['about magnates empire', 'premium tools provider', 'software subscription service']}
      />
      <PageHeader title="About Us" />
      <PageContainer>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Content remains the same */}
        </div>
      </PageContainer>
    </Layout>
  );
}