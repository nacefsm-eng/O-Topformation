import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

function readDB() {
  try {
    if (!fs.existsSync(path.dirname(DB_PATH))) {
      fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    }
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify({ contacts: [], reservations: [] }));
    }
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  } catch {
    return { contacts: [], reservations: [] };
  }
}

function writeDB(data: object) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch {}
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const db = readDB();
  db.contacts = db.contacts || [];
  db.contacts.push({ ...body, id: Date.now(), read: false });
  writeDB(db);
  return NextResponse.json({ success: true });
}

export async function GET() {
  const db = readDB();
  return NextResponse.json({ contacts: db.contacts || [] });
}
