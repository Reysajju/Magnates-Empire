import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Magnates Empire</h3>
            <p className="text-gray-400 text-sm">
              Your all-in-one solution for premium tools and services.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact Support</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-amber-500 transition-colors">FAQ</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-amber-500 transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Magnates Empire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}