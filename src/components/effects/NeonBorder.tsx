import React from 'react';

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function NeonBorder({ children, className = '' }: NeonBorderProps) {
  return (
    <div className={`festive-border rounded-lg p-0.5 ${className}`}>
      {children}
    </div>
  );
}