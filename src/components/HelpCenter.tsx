import React from 'react';
import { Book, MessageCircle, Mail, Phone } from 'lucide-react';

const resources = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Browse our comprehensive guides and tutorials',
    link: '#'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: '24/7 chat support for immediate assistance',
    link: '#'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email within 24 hours',
    link: '#'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Premium users get priority phone support',
    link: '#'
  }
];

export default function HelpCenter() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.link}
          className="group p-6 bg-navy-900 border border-gray-800 rounded-xl hover:border-amber-500/30 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <resource.icon className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}