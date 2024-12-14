import React from 'react';
import { Bot, Search, Youtube, Paintbrush2 } from 'lucide-react';

const tools = [
  {
    icon: Bot,
    name: 'ChatGPT Pro',
    description: 'Advanced AI writing and analysis capabilities'
  },
  {
    icon: Search,
    name: 'SEMrush',
    description: 'Professional SEO and marketing tools'
  },
  {
    icon: Youtube,
    name: 'YouTube Premium',
    description: 'Ad-free streaming and premium features'
  },
  {
    icon: Paintbrush2,
    name: 'Canva Pro',
    description: 'Professional design tools and templates'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group p-6 rounded-xl bg-navy-800/50 hover:bg-navy-800 transition-all duration-300 border border-amber-500/10 hover:border-amber-500/30"
            >
              <div className="flex flex-col items-center text-center">
                <tool.icon className="w-12 h-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {[
              "Affordable and simple pricing for 150+ tools",
              "All-in-one subscription for business and personal growth",
              "Flexible plans to suit your needs"
            ].map((benefit) => (
              <li key={benefit} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}