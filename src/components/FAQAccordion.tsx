import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Magnates Empire?',
    answer: 'Magnates Empire is a premium tools subscription service that provides access to over 150 professional tools and services at an affordable price.'
  },
  {
    question: 'How does the subscription work?',
    answer: 'Our subscription gives you access to all tools in our catalog. Choose a plan (monthly, quarterly, or yearly), and get immediate access to premium accounts for all included tools.'
  },
  {
    question: 'Are these official accounts?',
    answer: 'Yes, all accounts provided are official premium accounts from the respective service providers.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term commitments required.'
  },
  {
    question: 'How do I get support?',
    answer: 'We provide 24/7 support through our help center, email, and live chat. Premium subscribers get priority support.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between bg-navy-900 hover:bg-navy-800 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-medium text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-amber-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-navy-800/50">
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}