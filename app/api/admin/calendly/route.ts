import { NextRequest, NextResponse } from 'next/server';

const CALENDLY_TOKEN = process.env.CALENDLY_API_TOKEN || '';
const CALENDLY_USER_URI = process.env.CALENDLY_USER_URI || 'https://api.calendly.com/users/25257e70-5af2-4a06-bef8-e95f0217c198';
const CALENDLY_ORG_URI = process.env.CALENDLY_ORGANIZATION_URI || 'https://api.calendly.com/organizations/b3b52914-65ee-47b1-ada0-8650b1018878';

export async function GET(req: NextRequest) {
  if (!CALENDLY_TOKEN) {
    return NextResponse.json({ connected: false, error: 'Jeton CALENDLY_API_TOKEN non configuré' });
  }

  try {
    // 1. Fetch user info
    const userRes = await fetch('https://api.calendly.com/users/me', {
      headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` },
    });
    const userData = await userRes.json();

    // 2. Fetch event types
    const eventsRes = await fetch(`https://api.calendly.com/event_types?user=${encodeURIComponent(CALENDLY_USER_URI)}`, {
      headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` },
    });
    const eventsData = await eventsRes.json();

    // 3. Fetch webhooks
    const webhooksRes = await fetch(
      `https://api.calendly.com/webhook_subscriptions?organization=${encodeURIComponent(CALENDLY_ORG_URI)}&scope=user&user=${encodeURIComponent(CALENDLY_USER_URI)}`,
      { headers: { Authorization: `Bearer ${CALENDLY_TOKEN}` } }
    );
    const webhooksData = await webhooksRes.json();

    return NextResponse.json({
      connected: true,
      user: userData.resource,
      events: eventsData.collection || [],
      webhooks: webhooksData.collection || [],
    });
  } catch (err: unknown) {
    return NextResponse.json({
      connected: false,
      error: err instanceof Error ? err.message : 'Erreur communication Calendly',
    });
  }
}

export async function POST(req: NextRequest) {
  if (!CALENDLY_TOKEN) {
    return NextResponse.json({ error: 'Jeton manquant' }, { status: 400 });
  }

  try {
    const { webhookUrl } = await req.json();
    if (!webhookUrl) {
      return NextResponse.json({ error: 'URL du webhook requise' }, { status: 400 });
    }

    const res = await fetch('https://api.calendly.com/webhook_subscriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: webhookUrl,
        events: ['invitee.created', 'invitee.canceled'],
        organization: CALENDLY_ORG_URI,
        user: CALENDLY_USER_URI,
        scope: 'user',
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: data.message || 'Erreur Calendly', details: data }, { status: res.status });
    }

    return NextResponse.json({ success: true, webhook: data.resource });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Erreur interne' }, { status: 500 });
  }
}
