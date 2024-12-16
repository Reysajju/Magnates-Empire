import React from 'react';

interface CaptchaInputProps {
  captcha: string;
  userInput: string;
  onChange: (value: string) => void;
}

export default function CaptchaInput({ captcha, userInput, onChange }: CaptchaInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Security Check
      </label>
      <div className="flex gap-4 items-center">
        <div className="bg-navy-800/50 px-4 py-2 rounded-lg select-none font-mono text-amber-500">
          {captcha}
        </div>
        <input
          type="text"
          required
          placeholder="Enter the code above"
          className="flex-1 px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={userInput}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}