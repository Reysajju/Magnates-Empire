import React, { useState } from 'react';
import { X } from 'lucide-react';
import FormInput from './FormInput';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import CaptchaInput from './CaptchaInput';
import AgreementCheckbox from './AgreementCheckbox';
import SearchableToolSelect from './SearchableToolSelect';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  selectedTool: string;
  captchaInput: string;
  agreementAccepted: boolean;
}

interface NetlifyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function encode(data: { [key: string]: string | boolean }) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key].toString()))
    .join("&");
}

export default function NetlifyForm({ isOpen, onClose }: NetlifyFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedTool: '',
    captchaInput: '',
    agreementAccepted: false
  });

  const [captcha] = useState(() => Math.random().toString(36).substring(2, 8).toUpperCase());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (formData.captchaInput !== captcha) {
      setError('Invalid captcha code. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "subscription",
          ...formData
        })
      });

      setSuccess(true);
      setCanSkip(true);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    if (canSkip) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-navy-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-navy-900 z-10 flex justify-between items-center">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white">Get Started</h2>
          {canSkip && (
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        <form 
          name="subscription" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          <input type="hidden" name="form-name" value="subscription" />
          
          <FormError message={error} />
          <FormSuccess show={success} />

          <FormInput
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(value) => setFormData({ ...formData, fullName: value })}
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
          />

          <FormInput
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
          />

          <SearchableToolSelect
            name="selectedTool"
            value={formData.selectedTool}
            onChange={(value) => setFormData({ ...formData, selectedTool: value })}
            required
          />

          <CaptchaInput
            captcha={captcha}
            userInput={formData.captchaInput}
            onChange={(value) => setFormData({ ...formData, captchaInput: value })}
          />

          <AgreementCheckbox
            checked={formData.agreementAccepted}
            onChange={(checked) => setFormData({ ...formData, agreementAccepted: checked })}
          />

          <div className="flex justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-navy-900 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {canSkip && (
              <button
                type="button"
                onClick={handleSkip}
                className="ml-4 px-6 py-3 bg-gray-200 dark:bg-navy-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-navy-700 transition-all duration-300"
              >
                Skip
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}