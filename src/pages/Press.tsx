import { Newspaper } from 'lucide-react';

export function Press() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Magnates Empire Launches Global Innovation Initiative",
      excerpt: "New program aims to connect visionary entrepreneurs with industry leaders."
    },
    {
      date: "March 1, 2024",
      title: "Annual Luxury Business Summit Announced",
      excerpt: "Leading figures in luxury and business to convene at prestigious event."
    },
    {
      date: "February 15, 2024",
      title: "Magnates Empire Expands Global Presence",
      excerpt: "Strategic expansion into key markets across Asia and Europe."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Newspaper className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-gray-400">Latest news and announcements from Magnates Empire</p>
        </div>

        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <article 
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <time className="text-sm text-amber-500">{release.date}</time>
              <h2 className="text-xl font-semibold mt-2 mb-3">{release.title}</h2>
              <p className="text-gray-400 mb-4">{release.excerpt}</p>
              <button className="text-amber-500 hover:text-amber-400 font-medium">
                Read More →
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-gray-400 mb-6">
            For press and media inquiries, please contact our communications team.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-md transition-colors">
            Contact Press Team
          </button>
        </div>
      </div>
    </div>
  );
}