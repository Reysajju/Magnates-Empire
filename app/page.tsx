"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/registration/RegistrationDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleGetStarted = () => {
    setSelectedCategory(undefined);
    setSelectedTools([]);
    setShowRegistration(true);
  };

  const handleCategorySelection = (category: string, tools: string[]) => {
    setSelectedCategory(category);
    setSelectedTools(tools);
    setShowRegistration(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <PlansSection onGetStarted={handleCategorySelection} />
      <NewsletterSection />
      <Footer />
      <RegistrationDialog 
        open={showRegistration} 
        onOpenChange={setShowRegistration}
        selectedCategory={selectedCategory}
        selectedTools={selectedTools}
      />
    </div>
  );
}