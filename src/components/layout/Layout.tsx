import React from 'react';
import Footer from '../Footer/Footer';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-navy-950' : 'bg-slate-100'} ${className}`}>
      {children}
      <Footer />
    </div>
  );
}