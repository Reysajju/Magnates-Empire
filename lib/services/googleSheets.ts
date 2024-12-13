import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = '150QsBvstIlKxhPGcSLzj1eX_7_5imd9nmiky5UiXvLo';
const SHEET_ID = '0';

export interface FormData {
  timestamp: string;
  fullName?: string;
  email: string;
  phone?: string;
  stateProvince?: string;
  country?: string;
  type?: 'registration' | 'newsletter';
}

export async function submitToGoogleSheets(data: FormData) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
      
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
      private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];

    const row = {
      Timestamp: data.timestamp,
      Type: data.type || 'registration',
      Email: data.email,
    };

    if (data.type === 'registration') {
      Object.assign(row, {
        'Full Name': data.fullName,
        Phone: data.phone,
        'State/Province': data.stateProvince,
        Country: data.country,
      });
    }

    await sheet.addRow(row);
  } catch (error) {
    console.error('Google Sheets error:', error);
    throw error;
  }
}