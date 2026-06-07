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

    let prompt = `Tu es un expert en marketing digital (Growth Hacker) et copywriter de haut niveau. 
Ton objectif est d'écrire des posts VIRAUX et extrêmement qualitatifs pour un organisme de formation spécialisé dans la Qualité de Vie au Travail et la gestion du stress (Méthode TOP).

SUJET : "${topic}"
RÉSEAUX CIBLES : ${platforms.join(', ')}

RÈGLES DE RÉDACTION STRICTES :
- Fini le ton ennuyeux "corporate". Utilise des accroches fortes (Hook) qui arrêtent le scroll.
- Utilise le framework PAS (Problème, Agitation, Solution) ou AIDA.
- Saute des lignes, aère le texte. Utilise des listes à puces.
- Utilise 3 à 5 emojis maximum mais bien choisis.
- Apporte une vraie valeur ajoutée ou un conseil actionnable dans le post.
- Pas de hashtags inutiles, juste 2 ou 3 très ciblés.

Tu DOIS impérativement répondre UNIQUEMENT avec un objet JSON valide, sans aucun texte autour (pas de markdown \`\`\`json), respectant exactement ce format :
{
  "posts": [
    {
      "platform": "Nom du réseau (ex: LinkedIn)",
      "text": "Le texte complet du post avec emojis et sauts de ligne...",
      "imagePrompt": "A short descriptive prompt in ENGLISH to generate an AI image for this post. E.g., 'professional business woman in modern office feeling relaxed and smiling, photorealistic, 8k'"
    }
  ]
}`;

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
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ],
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 2048,
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              posts: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    platform: { type: "STRING" },
                    text: { type: "STRING" },
                    imagePrompt: { type: "STRING" }
                  },
                  required: ["platform", "text", "imagePrompt"]
                }
              }
            },
            required: ["posts"]
          }
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
