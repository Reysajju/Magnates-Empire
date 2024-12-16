import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For testing, log the formData
    console.log('Form submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6" 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
    >
      {/* Hidden input for Netlify form identification */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field for spam prevention */}
      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-navy-900 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </button>

      {/* Additional Information Section */}
      <div className="mt-4 text-center text-sm text-gray-400">
        For more information, email us at{' '}
        <a 
          href="mailto:sajjjad.rasool@gmail.com" 
          className="text-amber-500 hover:underline"
        >
          sajjjad.rasool@gmail.com
        </a>
      </div>
    </form>
  );
}
