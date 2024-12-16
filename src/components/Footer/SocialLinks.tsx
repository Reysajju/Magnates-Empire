import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://www.youtube.com/@magnates.empire" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-amber-500 transition-colors"
        aria-label="Follow us on YouTube"
      >
        <Youtube className="w-6 h-6" />
      </a>
      <a 
        href="https://www.instagram.com/mr_sajju_bhai01/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-amber-500 transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=61569571689453" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-amber-500 transition-colors"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  );
}