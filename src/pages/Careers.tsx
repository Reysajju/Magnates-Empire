import { Briefcase } from 'lucide-react';

export function Careers() {
  const positions = [
    {
      title: "Senior Business Analyst",
      department: "Strategy",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Luxury Brand Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time"
    },
    {
      title: "Digital Content Strategist",
      department: "Content",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Briefcase className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-400">Shape the future of luxury and business excellence with us</p>
        </div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span>{position.department}</span>
                <span>•</span>
                <span>{position.location}</span>
                <span>•</span>
                <span>{position.type}</span>
              </div>
              <button className="text-amber-500 hover:text-amber-400 font-medium">
                View Position →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}