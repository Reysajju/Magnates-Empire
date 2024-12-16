import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="bg-navy-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-amber-500 transition-colors mb-4"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-playfair font-bold text-white">{title}</h1>
      </div>
    </header>
  );
}