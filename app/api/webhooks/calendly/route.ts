import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Student } from '@/types/student';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');
const CALENDLY_WEBHOOK_SIGNING_KEY = process.env.CALENDLY_WEBHOOK_SIGNING_KEY || '';

interface CalendlyPayload {
  event: string;
  created_at: string;
  payload: {
    event: string;
    email: string;
    name: string;
    status: string;
    start_time?: string;
    end_time?: string;
    reschedule_url?: string;
    cancel_url?: string;
    scheduled_event?: {
      start_time?: string;
      end_time?: string;
      join_url?: string;
      name?: string;
    };
  };
}

async function readDb(): Promise<{ contacts: unknown[]; reservations: unknown[]; students: Student[] }> {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    const data = JSON.parse(raw);
    if (!data.students) data.students = [];
    return data;
  } catch {
    return { contacts: [], reservations: [], students: [] };
  }
}

async function writeDb(data: Record<string, unknown>) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Calendly Webhook Handler:
 * - Reçoit l'événement `invitee.created` quand un stagiaire réserve son créneau visio
 * - Met à jour automatiquement le profil stagiaire dans /mon-espace (coachingBooked = true)
 * - Supporte la vérification de signature HMAC pour une sécurité maximale
 */
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();

    // Vérification de signature Calendly si une clé est configurée en .env
    const calendlySignature = req.headers.get('calendly-webhook-signature');
    if (CALENDLY_WEBHOOK_SIGNING_KEY && calendlySignature) {
      const parts = calendlySignature.split(',');
      const t = parts.find((p) => p.startsWith('t='))?.replace('t=', '');
      const v1 = parts.find((p) => p.startsWith('v1='))?.replace('v1=', '');

      if (t && v1) {
        const payloadToSign = `${t}.${rawBody}`;
        const computed = crypto
          .createHmac('sha256', CALENDLY_WEBHOOK_SIGNING_KEY)
          .update(payloadToSign)
          .digest('hex');

        if (computed !== v1) {
          return NextResponse.json({ error: 'Signature invalide' }, { status: 401 });
        }
      }
    }

    const body: CalendlyPayload = JSON.parse(rawBody);
    const eventType = body.event;
    const inviteeEmail = body.payload?.email?.trim().toLowerCase();
    const startTime = body.payload?.scheduled_event?.start_time || body.payload?.start_time;

    if (!inviteeEmail) {
      return NextResponse.json({ received: true, note: 'Aucun email trouvé dans le payload' });
    }

    const db = await readDb();
    const student = db.students.find((s) => s.email.toLowerCase() === inviteeEmail);

    if (student) {
      if (eventType === 'invitee.created') {
        student.coachingBooked = true;
        student.coachingDate = startTime || new Date().toISOString();
        await writeDb(db);
        return NextResponse.json({
          success: true,
          action: 'coaching_confirmed',
          studentId: student.id,
          email: student.email,
        });
      }

      if (eventType === 'invitee.canceled') {
        student.coachingBooked = false;
        student.coachingDate = undefined;
        await writeDb(db);
        return NextResponse.json({
          success: true,
          action: 'coaching_canceled',
          studentId: student.id,
          email: student.email,
        });
      }
    }

    return NextResponse.json({
      received: true,
      matchedStudent: !!student,
      inviteeEmail,
      eventType,
    });
  } catch (err: unknown) {
    console.error('Erreur Webhook Calendly:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Erreur interne' },
      { status: 500 }
    );
  }
}
