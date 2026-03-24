import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: 'Natura Bungalows Web',
        subject: body.subject || 'Nuevo mensaje desde la web',
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        message: body.message,
        checkin: body.checkin || '',
        checkout: body.checkout || '',
        guests: body.guests || '',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
