import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function FormInput({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  required = true 
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-2 bg-white dark:bg-navy-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}