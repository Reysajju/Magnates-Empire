import { Globe2, Target, Sparkles } from 'lucide-react';

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
      <article className="text-center space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
        <Globe2 className="w-12 h-12 text-amber-500 mx-auto" aria-hidden="true" />
        <h2 className="text-xl font-semibold">Global Influence</h2>
        <p className="text-gray-400">Expanding horizons across continents, building networks that transcend borders.</p>
      </article>
      <article className="text-center space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
        <Target className="w-12 h-12 text-amber-500 mx-auto" aria-hidden="true" />
        <h2 className="text-xl font-semibold">Strategic Vision</h2>
        <p className="text-gray-400">Crafting the future through calculated decisions and innovative thinking.</p>
      </article>
      <article className="text-center space-y-4 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
        <Sparkles className="w-12 h-12 text-amber-500 mx-auto" aria-hidden="true" />
        <h2 className="text-xl font-semibold">Elite Excellence</h2>
        <p className="text-gray-400">Setting new standards of success through unparalleled excellence and dedication.</p>
      </article>
    </div>
  );
}