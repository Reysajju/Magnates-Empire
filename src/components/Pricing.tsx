import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: 49.99,
    period: 'month',
    features: ['Access to all 150+ tools', 'Cancel anytime', '24/7 Support'],
    popular: false
  },
  {
    name: 'Quarterly',
    price: 129.99,
    period: 'quarter',
    features: ['Everything in Monthly', '15% savings', 'Priority support'],
    popular: true
  },
  {
    name: 'Yearly',
    price: 449.99,
    period: 'year',
    features: ['Everything in Quarterly', '25% savings', 'Dedicated account manager'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">Investment Plans</h2>
          <p className="text-gray-400">Save up to 90% compared to buying tools separately</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-amber-500/20 to-navy-900 border-2 border-amber-500'
                  : 'bg-navy-900 border border-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-amber-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-amber-500 text-navy-900 hover:bg-amber-600'
                  : 'bg-navy-800 text-white hover:bg-navy-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}