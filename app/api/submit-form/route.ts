import { NextResponse } from 'next/server';
import { submitToGoogleSheets } from '@/lib/services/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await submitToGoogleSheets(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}