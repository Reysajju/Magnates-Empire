import { Crown, ArrowRight } from 'lucide-react';

type HeroProps = {
  isVisible: boolean;
  onJoinClick: () => void;
};

export function Hero({ isVisible, onJoinClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury corporate building representing Magnates Empire headquarters"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          width="2070"
          height="1380"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className={`relative text-center space-y-8 px-4 max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="flex justify-center items-center space-x-4">
          <Crown className="w-12 h-12 text-amber-500" aria-hidden="true" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Magnates Empire
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          Where Visionaries Shape Tomorrow's Legacy
        </p>
        <div className="flex justify-center space-x-6">
          <button 
            onClick={onJoinClick}
            className="group flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full transition-all duration-300"
            aria-label="Join the Empire - Subscribe to our network"
          >
            <span>Join the Empire</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}