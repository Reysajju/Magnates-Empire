import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Blog } from '../components/Blog';
import { EmailForm } from '../components/EmailForm';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEmailForm = () => {
    setShowEmailForm(true);
    document.querySelector('.email-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header>
        <Hero isVisible={isVisible} onJoinClick={scrollToEmailForm} />
      </header>
      <section aria-label="Key Features">
        <Features />
      </section>
      <section aria-label="Blog">
        <Blog />
      </section>
      <section aria-label="Join Our Network" className="email-form">
        <EmailForm />
      </section>
      <Footer />
    </>
  );
}