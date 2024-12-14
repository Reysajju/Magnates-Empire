import { useState } from 'react';
import { submitToGoogleSheets, FormSubmissionData } from '../services/googleSheets';
import { validateForm } from '../utils/validation';
import { ERROR_MESSAGES } from '../config/constants';

interface UseFormSubmissionResult {
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  submitForm: (formData: Omit<FormSubmissionData, 'timestamp'>) => Promise<void>;
}

export const useFormSubmission = (): UseFormSubmissionResult => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData: Omit<FormSubmissionData, 'timestamp'>) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const validation = validateForm(formData);
    if (!validation.isValid) {
      setError(validation.errors[0]);
      setIsSubmitting(false);
      return;
    }

    try {
      const submitted = await submitToGoogleSheets(formData);
      if (submitted) {
        setSuccess(true);
      } else {
        setError(ERROR_MESSAGES.submissionError);
      }
    } catch (err) {
      setError(ERROR_MESSAGES.submissionError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    success,
    submitForm,
  };
};