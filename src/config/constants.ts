export const GOOGLE_SHEETS_API_ENDPOINT = 'https://script.google.com/macros/s/1e29TXNVcR_jUR4VB07juCaxeKV7p6PNr7kIi_sEmT7o3dwrIxawvbbbV/exec';

export const FORM_VALIDATION_RULES = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    required: true,
    pattern: /^\+?[\d\s-]{10,}$/,
  },
};

export const ERROR_MESSAGES = {
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  invalidCaptcha: 'Invalid captcha code. Please try again.',
  submissionError: 'An error occurred while submitting the form. Please try again.',
  submissionSuccess: 'Form submitted successfully! We will contact you shortly.',
};