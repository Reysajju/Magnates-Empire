"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NewsletterButtonIcon } from "@/components/ui/button-icons";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Newsletter subscription failed');
      }
      
      setEmail("");
    } catch (error) {
      console.error('Newsletter error:', error);
    }
  };

  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Stay Ahead of the <span className="text-yellow-400">Game!</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive deals, latest updates, and premium tool insights.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50"
              required
            />
            <Button 
              type="submit" 
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <NewsletterButtonIcon />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}