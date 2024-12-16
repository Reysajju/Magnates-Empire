import { FORM_VALIDATION_RULES } from '../config/constants';

export const validateEmail = (email: string): boolean => {
  return FORM_VALIDATION_RULES.email.pattern.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return FORM_VALIDATION_RULES.phone.pattern.test(phone);
};

export const validateForm = (formData: {
  fullName: string;
  email: string;
  phone: string;
  selectedTool: string;
  agreementAccepted: boolean;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.fullName || formData.fullName.length < FORM_VALIDATION_RULES.fullName.minLength) {
    errors.push('Full name is required');
  }

  if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!validatePhone(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (!formData.selectedTool) {
    errors.push('Please select at least one tool');
  }

  if (!formData.agreementAccepted) {
    errors.push('Please accept the terms and conditions');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};