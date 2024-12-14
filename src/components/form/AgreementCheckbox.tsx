import React from 'react';

interface AgreementCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function AgreementCheckbox({ checked, onChange }: AgreementCheckboxProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          required
          id="agreement"
          className="mt-1 rounded border-gray-700 text-amber-500 focus:ring-amber-500"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="agreement" className="text-sm text-gray-300">
          I agree to the{' '}
          <a href="#" className="text-amber-500 hover:text-amber-400">Terms and Conditions</a>
          {' '}and{' '}
          <a href="#" className="text-amber-500 hover:text-amber-400">Privacy Policy</a>
        </label>
      </div>
    </div>
  );
}