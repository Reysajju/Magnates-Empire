import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EmailForm } from './components/EmailForm';
import { Footer } from './components/Footer';

export default function App() {
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
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <header>
        <Hero isVisible={isVisible} onJoinClick={scrollToEmailForm} />
      </header>
      <section aria-label="Key Features">
        <Features />
      </section>
      <section aria-label="Join Our Network" className="email-form">
        <EmailForm />
      </section>
      <Footer />
    </main>
  );
}