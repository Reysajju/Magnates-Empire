import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main className={`container mx-auto px-4 py-16 ${className}`}>
      {children}
    </main>
  );
}