import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

import os from 'os';

const TMP_DB_PATH = path.join(os.tmpdir(), 'otop_db.json');
const STATIC_DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function readDb() {
  try {
    const raw = await fs.readFile(TMP_DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    try {
      const raw = await fs.readFile(STATIC_DB_PATH, 'utf-8');
      return JSON.parse(raw);
    } catch {
      return { contacts: [], reservations: [] };
    }
  }
}

async function writeDb(data: Record<string, unknown>) {
  try {
    await fs.writeFile(TMP_DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not write to tmpdir:', err);
  }
}

// GET — retourner tous les contacts (protégé admin)
export async function GET(req: NextRequest) {
  const token = req.cookies.get('otop_admin_token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Accès non autorisé' }, { status: 401 });
  }
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    if (!decoded.startsWith('otop-admin-')) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
  }

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

    // 1. Envoi automatique par email direct à Mélissa (formation.rmcf@gmail.com)
    try {
      await fetch('https://formsubmit.co/ajax/formation.rmcf@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://otopformations.com',
          'Referer': 'https://otopformations.com/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        body: JSON.stringify({
          _subject: `🎯 Nouvelle demande de diagnostic / contact : ${body.name || body.nom || 'Prospect'}`,
          _template: 'table',
          _replyto: body.email || 'formation.rmcf@gmail.com',
          Nom: body.name || body.nom || 'Non renseigné',
          Email: body.email || 'Non renseigné',
          Telephone: body.phone || body.telephone || 'Non renseigné',
          Statut: body.statut || 'Non renseigné',
          Parcours: body.track || body.parcours || body.besoin || 'Non renseigné',
          Objectif: body.priorityGoal || 'Non renseigné',
          Entreprise: body.companySize || 'Non renseigné',
          Message: body.message || 'Aucun message spécifique',
          Source: body.source || 'Formulaire Ô’TOP Formations',
          Date_Heure: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
        }),
      });
    } catch (err) {
      console.warn('Erreur envoi notification email direct:', err);
    }

    // 2. Forward vers n8n si configuré
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
