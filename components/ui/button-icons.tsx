"use client";

import { Mail, ChevronRight } from "lucide-react";

export function NewsletterButtonIcon() {
  return (
    <span className="inline-flex items-center">
      <Mail className="w-4 h-4 mr-2" />
      Subscribe
    </span>
  );
}

export function GetStartedButtonIcon() {
  return (
    <span className="inline-flex items-center">
      Get Started Now
      <ChevronRight className="ml-2" />
    </span>
  );
}