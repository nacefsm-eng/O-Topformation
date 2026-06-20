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

// GET — retourner tous les contacts
export async function GET() {
  const db = await readDb();
  return NextResponse.json({ contacts: db.contacts || [] });
}

// POST — créer un nouveau contact
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Sauvegarder en base locale (fichier JSON côté serveur)
    const db = await readDb();
    const newContact = {
      ...body,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    db.contacts = [newContact, ...(db.contacts || [])];
    await writeDb(db);

    // Forward vers n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        const response = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'OTOP_CONTACT',
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

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error('Error in contact handler:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
