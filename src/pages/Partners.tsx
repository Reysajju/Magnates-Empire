import { Handshake } from 'lucide-react';

export function Partners() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Handshake className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Strategic Partners</h1>
          <p className="text-gray-400">Collaborating with industry leaders to drive innovation</p>
        </div>

        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed">
            At Magnates Empire, we believe in the power of strategic partnerships to create 
            exceptional value and drive industry transformation. Our partners represent the 
            pinnacle of excellence in their respective fields.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Partnership Opportunities</h2>
          <p className="text-gray-300">
            We're always looking to collaborate with forward-thinking organizations that share 
            our vision for excellence and innovation. If you're interested in partnering with 
            Magnates Empire, we'd love to hear from you.
          </p>

          <div className="mt-8">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-md transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}