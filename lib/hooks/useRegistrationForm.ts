import { useState } from 'react';
import { generateCaptcha, validateCaptcha } from '@/lib/utils/captcha';
import type { FormData } from '@/lib/services/googleSheets';

interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  stateProvince: string;
  country: string;
  captchaInput: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export function useRegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    phone: "",
    stateProvince: "",
    country: "",
    captchaInput: "",
    agreeToTerms: false,
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.stateProvince) newErrors.stateProvince = "State/Province is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!validateCaptcha(formData.captchaInput, captcha)) newErrors.captcha = "Invalid captcha";
    if (!formData.agreeToTerms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return false;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          stateProvince: formData.stateProvince,
          country: formData.country,
          timestamp: new Date().toISOString(),
          type: 'registration',
        } as FormData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    captcha,
    setCaptcha,
    errors,
    isSubmitting,
    isSuccess,
    handleSubmit,
  };
}