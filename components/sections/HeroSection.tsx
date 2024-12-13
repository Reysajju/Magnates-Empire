"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GetStartedButtonIcon } from "@/components/ui/button-icons";
import { HERO_SLIDES } from "@/lib/constants/hero-slides";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  const currentSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {currentSlideData.title}
        </h1>
        <p className="text-xl md:text-2xl text-yellow-400 mb-6">
          {currentSlideData.subtitle}
        </p>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Unlock premium services at a fraction of the cost. Build your empire today!
        </p>
        <Button
          size="lg"
          onClick={onGetStarted}
          className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-8 py-6 rounded-full
                   transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
        >
          <GetStartedButtonIcon />
        </Button>
      </div>
    </section>
  );
}