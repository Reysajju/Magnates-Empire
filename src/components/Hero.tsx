import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetAccessClick: () => void;
}

export default function Hero({ onGetAccessClick }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy-900 to-navy-950 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Magnates Empire: <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">Unlock 150+ Premium Tools</span> in One Affordable Subscription!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Empowering creators, businesses, and professionals with tools like ChatGPT Pro, SEMrush, Moz, YouTube Premium, and many more.
          </p>
          <button
            onClick={onGetAccessClick}
            className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-navy-900 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
          >
            Get Access Now
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}