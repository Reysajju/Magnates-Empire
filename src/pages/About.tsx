import { Building2 } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Building2 className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">About Magnates Empire</h1>
          <p className="text-gray-400">Shaping the future of luxury and business excellence</p>
        </div>

        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed">
            Magnates Empire stands at the intersection of luxury, innovation, and business excellence. 
            Founded with a vision to redefine success in the modern era, we bring together visionaries, 
            industry leaders, and forward-thinkers who shape tomorrow's legacy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Vision</h2>
          <p className="text-gray-300">
            To create an unparalleled platform where elite minds converge, innovate, and set new 
            standards of excellence in business and luxury living.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
          <p className="text-gray-300">
            Empowering visionaries with insights, connections, and opportunities that catalyze 
            transformative growth and lasting impact in the global luxury and business landscape.
          </p>
        </div>
      </div>
    </div>
  );
}