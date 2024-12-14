import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import CaptchaInput from './form/CaptchaInput';
import ToolSelect from './form/ToolSelect';
import AgreementCheckbox from './form/AgreementCheckbox';
import { useFormSubmission } from '../hooks/useFormSubmission';
import { ERROR_MESSAGES } from '../config/constants';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  selectedTool: string;
  captchaInput: string;
  agreementAccepted: boolean;
}

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function generateCaptcha() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function SubscriptionForm({ isOpen, onClose }: SubscriptionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedTool: '',
    captchaInput: '',
    agreementAccepted: false
  });

  const [captcha, setCaptcha] = useState('');
  const { isSubmitting, error, success, submitForm } = useFormSubmission();

  useEffect(() => {
    if (isOpen) {
      setCaptcha(generateCaptcha());
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.captchaInput !== captcha) {
      alert(ERROR_MESSAGES.invalidCaptcha);
      setCaptcha(generateCaptcha());
      setFormData(prev => ({ ...prev, captchaInput: '' }));
      return;
    }

    await submitForm({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      selectedTool: formData.selectedTool,
    });

    if (success) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-navy-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center sticky top-0 bg-navy-900">
          <h2 className="text-2xl font-playfair font-bold text-white">Get Started</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
              {ERROR_MESSAGES.submissionSuccess}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 bg-navy-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <ToolSelect
            value={formData.selectedTool}
            onChange={(value) => setFormData({ ...formData, selectedTool: value })}
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-navy-900 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}