import React from 'react';
import { ChevronRight } from 'lucide-react';
import Snowfall from './effects/Snowfall';
import NeonBorder from './effects/NeonBorder';
import FestiveBackground from './effects/FestiveBackground';

interface HeroProps {
  onGetAccessClick: () => void;
}

const bgImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
];

export default function Hero({ onGetAccessClick }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-900 dark:to-navy-950 flex items-center overflow-hidden">
      <Snowfall />
      <FestiveBackground />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 opacity-5 dark:opacity-10">
          {bgImages.map((img, index) => (
            <div 
              key={index}
              className="aspect-square rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-500"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <NeonBorder className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm">
          <div className="p-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-navy-900 dark:text-white mb-6 leading-tight neon-text">
              Magnates Empire: <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">Unlock 150+ Premium Tools</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-800 dark:text-slate-300 mb-8 font-light">
              Empowering creators, businesses, and professionals with premium tools at unbeatable prices.
            </p>
            <button
              onClick={onGetAccessClick}
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-navy-900 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
              aria-label="Get access to premium tools"
            >
              Get Access Now
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </NeonBorder>
      </div>
    </div>
  );
}