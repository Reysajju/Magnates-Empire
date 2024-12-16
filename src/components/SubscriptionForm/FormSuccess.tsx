import React from 'react';

interface FormSuccessProps {
  show: boolean;
}

export default function FormSuccess({ show }: FormSuccessProps) {
  if (!show) return null;

  return (
    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
      Form submitted successfully!
    </div>
  );
}