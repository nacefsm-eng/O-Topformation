import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Student } from '@/types/student';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

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

function checkAdminAuth(req: NextRequest) {
  const token = req.cookies.get('otop_admin_token')?.value;
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return decoded.startsWith('otop-admin-');
  } catch {
    return false;
  }
}

// GET — Liste des stagiaires (admin)
export async function GET(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Accès non autorisé' }, { status: 401 });
  }

  const db = await readDb();
  const safeStudents = db.students.map(({ salt, passwordHash, ...s }) => s);
  return NextResponse.json({ students: safeStudents });
}

// POST — Ajouter un nouveau stagiaire manuellement ou attribuer une formation
export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Accès non autorisé' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { action, studentId, courseId, email, nom, prenom } = body;
    const db = await readDb();

    if (action === 'create_manual') {
      const cleanEmail = email?.trim().toLowerCase();
      if (!cleanEmail) {
        return NextResponse.json({ error: 'Email requis' }, { status: 400 });
      }
      const existing = db.students.find((s) => s.email.toLowerCase() === cleanEmail);
      if (existing) {
        return NextResponse.json({ error: 'Stagiaire déjà existant' }, { status: 400 });
      }

      const newStudent: Student = {
        id: `stu_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        email: cleanEmail,
        prenom: prenom || 'Apprenant',
        nom: nom || 'Ô’TOP',
        authProvider: 'magic_link',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        coachingBooked: false,
        courses: [
          {
            id: courseId || 'rs6776',
            title: courseId === 'rs7344' ? 'Développer son activité avec l’IA (RS7344)' : 'IA Générative pour Indépendants (RS6776)',
            badge: '100 % en ligne • 21 h',
            progress: 0,
            enrolledAt: new Date().toISOString(),
            status: 'actif',
          },
        ],
      };
      db.students.unshift(newStudent);
      await writeDb(db);
      return NextResponse.json({ success: true, student: newStudent });
    }

    if (action === 'add_course') {
      const student = db.students.find((s) => s.id === studentId);
      if (!student) {
        return NextResponse.json({ error: 'Stagiaire non trouvé' }, { status: 404 });
      }

      const COURSE_TITLES: Record<string, string> = {
        rs6776: 'IA Générative pour Indépendants (RS6776)',
        rs7344: 'Développer son activité avec l’IA (RS7344)',
        rs7351: 'Communication Digitale & Réseaux Sociaux (RS7351)',
        top: 'Techniques d’Optimisation du Potentiel (FI-TOP®)',
      };

      if (!student.courses.some((c) => c.id === courseId)) {
        student.courses.push({
          id: courseId,
          title: COURSE_TITLES[courseId] || `Formation ${courseId.toUpperCase()}`,
          badge: '100 % en ligne • 21 h',
          progress: 0,
          enrolledAt: new Date().toISOString(),
          status: 'actif',
        });
        await writeDb(db);
      }
      return NextResponse.json({ success: true, courses: student.courses });
    }

    return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 });
  } catch (error) {
    console.error('Erreur admin students:', error);
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}

// DELETE — Supprimer un stagiaire
export async function DELETE(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Accès non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'ID requis' }, { status: 400 });
  }

  const db = await readDb();
  db.students = db.students.filter((s) => s.id !== id);
  await writeDb(db);

  return NextResponse.json({ success: true, message: 'Stagiaire supprimé' });
}
