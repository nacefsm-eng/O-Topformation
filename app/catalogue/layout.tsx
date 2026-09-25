import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catalogue Formations Certifiantes 2026 : IA, Réseaux Sociaux & Méthode TOP® | Ô'TOP Formations",
  description:
    "Découvrez notre catalogue officiel 2026 : formations certifiantes en IA Générative (RS6776, 21h), Communication Digitale via Réseaux Sociaux (RS7351, 21h), IA pour Dirigeants (RS7344, 21h) et FI-TOP® Gestion du Stress (21h). Financements OPCO & FAF étudiés selon votre statut.",
  keywords: [
    'formation certifiante',
    'formation IA générative',
    'formation RS6776',
    'formation RS7351',
    'formation RS7344',
    'formation FI-TOP',
    'gestion du stress',
    'financement OPCO',
    'financement FAF',
    'FIF-PL',
    'Ollioules',
    'Var',
    'PACA',
    'France Compétences',
  ],
  alternates: {
    canonical: 'https://o-topformation.vercel.app/catalogue',
  },
  openGraph: {
    title: "Catalogue Formations Certifiantes 2026 | Ô'TOP Formations",
    description:
      "Formations certifiantes en IA, Réseaux Sociaux, Gestion du Stress (Méthode TOP®) avec 2h d'accompagnement expert incluses. Financements OPCO & FAF étudiés selon votre statut.",
    url: 'https://o-topformation.vercel.app/catalogue',
    type: 'website',
  },
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Catalogue Ô'TOP Formations 2026",
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: "Formation FI-TOP® — Gestion du Stress & Prévention des RPS (21h)",
      description: "Formation de 21h pour maîtriser les 9 leviers de régulation du stress et de prévention des risques psychosociaux avec la Méthode TOP®. Inclut 2h d'accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://o-topformation.vercel.app',
      },
      offers: {
        '@type': 'Offer',
        price: '890',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'Course',
      position: 2,
      name: "RS6776 — Exploiter une IA Générative pour son Activité (21h)",
      description: "21h de formation certifiante en IA générative : prompt engineering, ChatGPT, Claude, automatisation (n8n, Make). Inclut 2h d'accompagnement avec un expert. Offre promo : 600 €.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://o-topformation.vercel.app',
      },
      offers: {
        '@type': 'Offer',
        price: '1490',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'Course',
      position: 3,
      name: "RS7351 — Gérer la Communication Digitale via les Réseaux Sociaux (21h)",
      description: "21h pour concevoir sa ligne éditoriale, créer du contenu vidéo et prospecter sur LinkedIn. Inclut 2h d'accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://o-topformation.vercel.app',
      },
      offers: {
        '@type': 'Offer',
        price: '1490',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'Course',
      position: 4,
      name: "RS7344 — Piloter un Projet de Création de Site Internet (21h)",
      description: "21h pour lancer un site professionnel responsive, optimisé SEO et sécurisé. Inclut 2h d'accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://o-topformation.vercel.app',
      },
      offers: {
        '@type': 'Offer',
        price: '1490',
        priceCurrency: 'EUR',
      },
    },
  ],
};

export default function CatalogueLayout({
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
