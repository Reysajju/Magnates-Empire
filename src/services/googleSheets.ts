import { GOOGLE_SHEETS_API_ENDPOINT } from '../config/constants';

export interface FormSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  selectedTool: string;
  timestamp: string;
}

export const submitToGoogleSheets = async (data: FormSubmissionData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
};