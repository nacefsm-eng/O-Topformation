import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function readDb() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { contacts: [], reservations: [] };
  }
}

async function writeDb(data: Record<string, unknown>) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// GET — retourner toutes les réservations
export async function GET() {
  const db = await readDb();
  return NextResponse.json({ reservations: db.reservations || [] });
}

// POST — créer une nouvelle réservation
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const db = await readDb();

    // Vérification de conflit de créneau
    const existingSlot = (db.reservations || []).find(
      (r: { date: string; time: string }) =>
        r.date === body.date && r.time === body.time
    );
    if (existingSlot) {
      return NextResponse.json(
        {
          success: false,
          error: 'Ce créneau est déjà réservé. Veuillez en choisir un autre.',
        },
        { status: 409 }
      );
    }

    // Sauvegarder en base locale
    const newReservation = {
      ...body,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    db.reservations = [newReservation, ...(db.reservations || [])];
    await writeDb(db);

    // Forward vers n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
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
      } catch (err) {
        console.error('Error forwarding to n8n:', err);
      }
    }

    return NextResponse.json({ success: true, reservation: newReservation });
  } catch (error) {
    console.error('Error in reservation handler:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
