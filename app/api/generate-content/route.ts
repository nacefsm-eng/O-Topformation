import { NextResponse } from 'next/server';

// Parse the plain-text response from Gemini into structured posts
function parsePosts(raw: string, platforms: string[]): { platform: string; text: string }[] {
  const posts: { platform: string; text: string }[] = [];

  for (const platform of platforms) {
    const capPlatform = platform.charAt(0).toUpperCase() + platform.slice(1);

    // Match a section that starts with the platform name (flexible regex)
    const sectionRegex = new RegExp(
      `(?:#{1,4}\\s*)?(?:🔵|📸|📘|💼|📱|🟦)?\\s*${capPlatform}\\s*[:\\-]?\\s*\\n([\\s\\S]*?)(?=(?:#{1,4}\\s*)?(?:🔵|📸|📘|💼|📱|🟦)?\\s*(?:LinkedIn|Facebook|Instagram)\\s*[:\\-]?\\s*\\n|$)`,
      'i'
    );

    const match = raw.match(sectionRegex);
    if (match && match[1]?.trim()) {
      posts.push({ platform: capPlatform, text: match[1].trim() });
    }
  }

  // Fallback: if regex parsing failed, return the whole text as one post
  if (posts.length === 0) {
    posts.push({ platform: platforms[0] || 'Post', text: raw.trim() });
  }

  return posts;
}

export async function POST(req: Request) {
  try {
    const { topic, platforms } = await req.json();

    if (!topic || !platforms?.length) {
      return NextResponse.json({ error: 'Le sujet et au moins un réseau sont requis.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Clé API Gemini manquante.' }, { status: 500 });
    }

    const platformNames = (platforms as string[]).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ');

    const prompt = `Tu es un Growth Hacker expert en copywriting pour les organismes de formation professionnelle (QVT, bien-être au travail, gestion du stress — Méthode TOP).

SUJET DU POST : "${topic}"
RÉSEAUX CIBLÉS : ${platformNames}

RÈGLES DE RÉDACTION :
- Accroche percutante en 1ère ligne (Hook qui arrête le scroll).
- Utilise le framework PAS (Problème → Agitation → Solution).
- Texte aéré avec sauts de ligne, listes à puces si pertinent.
- 3 à 5 emojis bien placés (pas tous au même endroit).
- Un conseil actionnable ou une stat concrète si possible.
- 2 ou 3 hashtags ciblés maximum.
- Adapte le ton : LinkedIn = professionnel/inspirant, Facebook = conversationnel, Instagram = court/dynamique.

FORMAT DE RÉPONSE OBLIGATOIRE :
Commence chaque section par le nom du réseau sur une nouvelle ligne, suivi d'un saut de ligne.
Exemple :
LinkedIn
[texte du post LinkedIn ici]

Facebook
[texte du post Facebook ici]

NE mets PAS de markdown (pas de ###, pas de **), juste le nom du réseau et le texte en dessous.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          ],
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', JSON.stringify(data));
      return NextResponse.json({ error: "Erreur de l'API Gemini. Réessayez." }, { status: 500 });
    }

    const finishReason = data.candidates?.[0]?.finishReason;
    if (finishReason === 'SAFETY') {
      return NextResponse.json({ error: 'Contenu bloqué par les filtres de sécurité. Reformulez votre sujet.' }, { status: 422 });
    }

    const rawText: string = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!rawText) {
      return NextResponse.json({ error: 'Aucun contenu généré. Réessayez.' }, { status: 500 });
    }

    const posts = parsePosts(rawText, platforms as string[]);

    return NextResponse.json({ posts });

  } catch (error) {
    console.error('Error in generate-content API:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
