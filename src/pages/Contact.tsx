import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400">contact@magnatesempire.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-400">
                  Magnates Tower<br />
                  123 Business Avenue<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}