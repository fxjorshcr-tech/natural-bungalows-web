import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      console.error('WEB3FORMS_KEY environment variable is not set.');
      return NextResponse.json(
        { error: 'Email service not configured.' },
        { status: 500 }
      );
    }

    const payload = {
      access_key: accessKey,
      from_name: 'Natura Bungalows Web',
      subject: body.subject || 'Nuevo mensaje desde la web',
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      message: body.message,
    };

    if (body.checkin) payload.checkin = body.checkin;
    if (body.checkout) payload.checkout = body.checkout;
    if (body.guests) payload.guests = body.guests;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Web3Forms returned non-JSON response:', response.status, text.substring(0, 200));
      return NextResponse.json(
        { error: 'Email service returned an unexpected response.' },
        { status: 502 }
      );
    }

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    }

    console.error('Web3Forms error:', data);
    return NextResponse.json(
      { error: data.message || 'Failed to send message' },
      { status: 500 }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
