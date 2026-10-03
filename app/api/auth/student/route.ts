import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');
const SESSION_SECRET = process.env.ADMIN_PASSWORD || 'otop-secret-salt-key-2026';

import { Student, StudentCourse } from '@/types/student';
export type { Student, StudentCourse };

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

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function createSessionToken(studentId: string, email: string): string {
  const payload = `${studentId}:${email}:${Date.now()}`;
  const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${hmac}`).toString('base64');
}

function verifySessionToken(token: string): { valid: boolean; studentId?: string; email?: string } {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length !== 4) return { valid: false };
    const [studentId, email, timestamp, hmac] = parts;
    const payload = `${studentId}:${email}:${timestamp}`;
    const expectedHmac = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
    if (hmac !== expectedHmac) return { valid: false };
    // Expiration après 30 jours
    const age = Date.now() - parseInt(timestamp, 10);
    if (age > 30 * 24 * 60 * 60 * 1000) return { valid: false };
    return { valid: true, studentId, email };
  } catch {
    return { valid: false };
  }
}

const DEFAULT_COURSES: StudentCourse[] = [
  {
    id: 'rs6776',
    title: 'IA Générative pour Indépendants (RS6776)',
    badge: '100 % en ligne • 21 h',
    progress: 35,
    enrolledAt: new Date().toISOString(),
    lmsUrl: 'https://systeme.io',
    status: 'actif',
  },
  {
    id: 'top',
    title: 'Techniques d’Optimisation du Potentiel (FI-TOP®)',
    badge: 'Présentiel & Visio • 21 h',
    progress: 15,
    enrolledAt: new Date().toISOString(),
    lmsUrl: 'https://systeme.io',
    status: 'actif',
  },
];

// GET — Vérifier la session du stagiaire
export async function GET(req: NextRequest) {
  const token = req.cookies.get('otop_student_session')?.value;
  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const { valid, studentId } = verifySessionToken(token);
  if (!valid || !studentId) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const db = await readDb();
  const student = db.students.find((s) => s.id === studentId);
  if (!student) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Ne pas exposer salt ni passwordHash
  const { salt, passwordHash, ...safeStudent } = student;
  return NextResponse.json({ authenticated: true, student: safeStudent });
}

// POST — Inscription, Connexion, Google, ou Magic Link
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, email, password, nom, prenom, googleUser } = body;
    const db = await readDb();

    // ── 1. CONNEXION AVEC GOOGLE ──
    if (action === 'google') {
      const gEmail = googleUser?.email?.trim().toLowerCase();
      if (!gEmail) {
        return NextResponse.json({ error: 'Compte Google invalide' }, { status: 400 });
      }

      let student = db.students.find((s) => s.email.toLowerCase() === gEmail);
      if (!student) {
        student = {
          id: `stu_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          email: gEmail,
          prenom: googleUser.name?.split(' ')[0] || 'Apprenant',
          nom: googleUser.name?.split(' ').slice(1).join(' ') || 'Ô’TOP',
          authProvider: 'google',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          coachingBooked: false,
          courses: DEFAULT_COURSES,
        };
        db.students.push(student);
      } else {
        student.lastLoginAt = new Date().toISOString();
      }
      await writeDb(db);

      const sessionToken = createSessionToken(student.id, student.email);
      const res = NextResponse.json({ success: true, student });
      res.cookies.set('otop_student_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 jours
        path: '/',
      });
      return res;
    }

    // ── 2. CONNEXION PAR EMAIL / MOT DE PASSE ──
    if (action === 'login') {
      const cleanEmail = email?.trim().toLowerCase();
      if (!cleanEmail || !password) {
        return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 });
      }

      const student = db.students.find((s) => s.email.toLowerCase() === cleanEmail);
      if (!student || !student.salt || !student.passwordHash) {
        return NextResponse.json({ error: 'Identifiants invalides ou compte inexistant' }, { status: 401 });
      }

      const inputHash = hashPassword(password, student.salt);
      if (inputHash !== student.passwordHash) {
        return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
      }

      student.lastLoginAt = new Date().toISOString();
      await writeDb(db);

      const sessionToken = createSessionToken(student.id, student.email);
      const { salt, passwordHash, ...safeStudent } = student;
      const res = NextResponse.json({ success: true, student: safeStudent });
      res.cookies.set('otop_student_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      return res;
    }

    // ── 3. CRÉATION DE COMPTE STAGIAIRE ──
    if (action === 'register') {
      const cleanEmail = email?.trim().toLowerCase();
      if (!cleanEmail || !password || password.length < 6) {
        return NextResponse.json(
          { error: 'Email valide et mot de passe de 6 caractères minimum requis' },
          { status: 400 }
        );
      }

      const existing = db.students.find((s) => s.email.toLowerCase() === cleanEmail);
      if (existing) {
        return NextResponse.json({ error: 'Un compte existe déjà avec cette adresse email' }, { status: 400 });
      }

      const salt = crypto.randomBytes(16).toString('hex');
      const passwordHash = hashPassword(password, salt);

      const newStudent: Student = {
        id: `stu_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        email: cleanEmail,
        prenom: prenom?.trim() || 'Stagiaire',
        nom: nom?.trim() || 'Ô’TOP',
        salt,
        passwordHash,
        authProvider: 'password',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        coachingBooked: false,
        courses: DEFAULT_COURSES,
      };

      db.students.push(newStudent);
      await writeDb(db);

      const sessionToken = createSessionToken(newStudent.id, newStudent.email);
      const { salt: s, passwordHash: ph, ...safeStudent } = newStudent;
      const res = NextResponse.json({ success: true, student: safeStudent });
      res.cookies.set('otop_student_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      return res;
    }

    // ── 4. LIEN MAGIQUE PAR EMAIL ──
    if (action === 'magic-link') {
      const cleanEmail = email?.trim().toLowerCase();
      if (!cleanEmail) {
        return NextResponse.json({ error: 'Email requis' }, { status: 400 });
      }

      let student = db.students.find((s) => s.email.toLowerCase() === cleanEmail);
      if (!student) {
        student = {
          id: `stu_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          email: cleanEmail,
          prenom: 'Apprenant',
          nom: 'Ô’TOP',
          authProvider: 'magic_link',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          coachingBooked: false,
          courses: DEFAULT_COURSES,
        };
        db.students.push(student);
        await writeDb(db);
      }

      // Générer lien d'accès direct
      const sessionToken = createSessionToken(student.id, student.email);
      return NextResponse.json({
        success: true,
        message: 'Lien magique généré avec succès !',
        magicUrl: `/mon-espace?auth_token=${encodeURIComponent(sessionToken)}`,
      });
    }

    return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 });
  } catch (error) {
    console.error('Erreur auth student:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}

// DELETE — Déconnexion
export async function DELETE() {
  const res = NextResponse.json({ success: true, message: 'Déconnecté' });
  res.cookies.set('otop_student_session', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });
  return res;
}
