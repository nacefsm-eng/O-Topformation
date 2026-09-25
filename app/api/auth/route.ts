import { NextRequest, NextResponse } from 'next/server';

// POST — Vérifier le mot de passe admin
export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error('CRITICAL: ADMIN_PASSWORD environment variable is not set!');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur requise : ADMIN_PASSWORD non défini.' },
        { status: 503 }
      );
    }

    if (password === adminPassword) {
      // Créer un token simple (en production, utiliser JWT)
      const token = Buffer.from(`otop-admin-${Date.now()}-${Math.random().toString(36).slice(2)}`).toString('base64');

      const response = NextResponse.json({ success: true, token });

      // Stocker le token dans un cookie HttpOnly
      response.cookies.set('otop_admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 heures
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Mot de passe incorrect' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// GET — Vérifier si le token de session est valide
export async function GET(req: NextRequest) {
  const token = req.cookies.get('otop_admin_token')?.value;

  if (token) {
    try {
      // Vérifier que le token est un base64 valide et commence par le bon préfixe
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      if (decoded.startsWith('otop-admin-')) {
        return NextResponse.json({ authenticated: true });
      }
    } catch {
      // Token invalide
    }
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

// DELETE — Déconnexion
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('otop_admin_token');
  return response;
}
