import React from 'react';
import { Link } from 'react-router-dom';

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
          name="agreementAccepted"
          className="mt-1 rounded border-gray-700 text-amber-500 focus:ring-amber-500"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="agreement" className="text-sm text-gray-300">
          I agree to the{' '}
          <Link to="/terms" className="text-amber-500 hover:text-amber-400">
            Terms and Conditions
          </Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-amber-500 hover:text-amber-400">
            Privacy Policy
          </Link>
        </label>
      </div>
    </div>
  );
}