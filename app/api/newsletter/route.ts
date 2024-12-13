import { NextResponse } from 'next/server';
import { submitToGoogleSheets } from '@/lib/services/googleSheets';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    await submitToGoogleSheets({
      timestamp: new Date().toISOString(),
      email,
      type: 'newsletter',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}