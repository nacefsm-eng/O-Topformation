import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { topic, platforms } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Le sujet est requis." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Clé API Gemini manquante. Veuillez la configurer dans Vercel." }, { status: 500 });
    }

    // Prepare the prompt
    let prompt = `Tu es un expert en marketing digital et copywriting B2B/B2C, spécialisé dans la formation professionnelle (les Techniques d'Optimisation du Potentiel - TOP).
Ton objectif est de générer du contenu percutant, professionnel et engageant pour promouvoir notre organisme de formation "O'TOP Formation".

SUJET DU CONTENU : "${topic}"

S'il te plaît, rédige les publications pour les réseaux suivants : ${platforms.join(', ')}.

Règles de rédaction :
1. LinkedIn : Ton professionnel, axé sur les enjeux RH, QVT, performance, avec une accroche forte et des sauts de ligne. Utilise 3-4 emojis pertinents.
2. Instagram : Visuel, dynamique, court, orienté bien-être ou motivation. Inclus des hashtags pertinents (#QVT #Management #BienEtreAuTravail).
3. Facebook : Conversationnel, pose une question à l'audience, invite à cliquer sur le lien du site.

Format de sortie attendu :
Sépare chaque réseau par un titre clair (ex: "### 🔵 LinkedIn"). Ne fais pas de longue introduction, donne directement les posts.`;

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);
      return NextResponse.json({ error: "Erreur lors de la génération avec l'IA." }, { status: 500 });
    }

    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Pas de contenu généré.";

    return NextResponse.json({ result: generatedText });

  } catch (error) {
    console.error("Error in generate-content API:", error);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}
