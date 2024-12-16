import React from 'react';

interface FormErrorProps {
  message: string | null;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  
  return (
    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
      {message}
    </div>
  );
}