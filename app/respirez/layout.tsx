import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Formations Certifiantes 2026 : IA, Réseaux Sociaux & Méthode TOP® | Ô'TOP Formation",
  description:
    "Découvrez notre catalogue officiel 2026 : formations certifiantes en IA Générative (RS6776), Réseaux Sociaux (RS7351), Création Web (RS7344) et Méthode TOP®. Financement OPCO/FAF 100% sans avance de frais avec 5h de coaching individuel 1-to-1 inclus.",
  keywords: [
    'formation certifiante',
    'formation IA',
    'formation RS6776',
    'formation RS7351',
    'formation RS7344',
    'formation TOP',
    'financement OPCO',
    'FAFCEA',
    'FIF-PL',
    'coaching individuel',
    'Ollioules',
    'Var',
    'PACA',
  ],
  alternates: {
    canonical: 'https://o-topformation.vercel.app/respirez',
  },
  openGraph: {
    title: "Nos Formations Certifiantes 2026 | Ô'TOP Formation",
    description:
      "Formations certifiantes en IA, Réseaux Sociaux et Méthode TOP® avec 5h de coaching 1-to-1 inclus. Prise en charge OPCO/FAF intégrale.",
    url: 'https://o-topformation.vercel.app/respirez',
    type: 'website',
  },
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: "Formation Initiale FI TOP® — Gestion du Stress & Récupération Flash",
      description: "Formation de 21h pour maîtriser les 9 leviers de régulation du stress et de préparation mentale TOP®.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formation",
        sameAs: 'https://o-topformation.vercel.app',
      },
    },
    {
      '@type': 'Course',
      position: 2,
      name: "Certification RS6776 — Exploiter une IA Générative pour son Activité",
      description: "21h de formation certifiante en prompt engineering, ChatGPT, Claude, automatisation n8n et Make avec 5h de coaching 1-to-1.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formation",
        sameAs: 'https://o-topformation.vercel.app',
      },
    },
    {
      '@type': 'Course',
      position: 3,
      name: "Certification RS7351 — Stratégie Réseaux Sociaux & Social Selling",
      description: "21h pour concevoir sa ligne éditoriale, créer du contenu vidéo Canva/CapCut et prospecter sur LinkedIn.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formation",
        sameAs: 'https://o-topformation.vercel.app',
      },
    },
    {
      '@type': 'Course',
      position: 4,
      name: "Certification RS7344 — Création de Site Web Moderne & SEO",
      description: "28h pour lancer un site professionnel responsive, optimisé SEO et sécurisé avec accompagnement personnalisé.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formation",
        sameAs: 'https://o-topformation.vercel.app',
      },
    },
  ],
};

export default function RespirezLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
