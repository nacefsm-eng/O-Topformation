import { NextRequest, NextResponse } from 'next/server';

// POST — créer une réservation
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward to n8n (seule source de persistance fiable sur Vercel)
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'OTOP_RESERVATION',
          submittedAt: new Date().toISOString(),
          data: body,
        }),
      });
      if (!response.ok) {
        console.warn(`n8n webhook error: ${response.statusText}`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in reservation handler:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
