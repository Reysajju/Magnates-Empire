import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <main className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl font-playfair font-bold mb-6">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <Link 
          to="/"
          className="inline-block px-8 py-3 bg-amber-500 text-navy-900 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}