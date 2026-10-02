import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catalogue des formations : IA, réseaux sociaux et conduite du changement | Ô’TOP Formations",
  description:
    "Découvrez notre catalogue : formations en IA générative (RS6776), Développer son activité avec l’IA (RS7344), Réseaux sociaux (RS7351) et Conduite du changement (Méthode TOP®). 21 h dont 2 h d’accompagnement avec un expert. Financement OPCO / FAF possible.",
  keywords: [
    'formation IA',
    'formation IA générative',
    'formation RS6776',
    'formation RS7351',
    'formation RS7344',
    'Méthode TOP',
    'conduite du changement',
    'financement OPCO',
    'financement FAF',
    'Ollioules',
    'Var',
    'PACA',
  ],
  alternates: {
    canonical: 'https://otopformations.com/catalogue',
  },
  openGraph: {
    title: "Catalogue des formations 2026 | Ô’TOP Formations",
    description:
      "Formations en IA, réseaux sociaux et conduite du changement avec 2 h d’accompagnement individuel par un expert. Financement OPCO & FAF possible.",
    url: 'https://otopformations.com/catalogue',
    type: 'website',
  },
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Catalogue Ô’TOP Formations 2026",
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: "Méthode TOP® — Conduite du changement (21 h)",
      description: "Formation de 21 h pour maîtriser la gestion de la pression, la concentration et la lucidité décisionnelle avec la Méthode TOP®. Inclut 2 h d’accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
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
      name: "RS6776 — IA générative (21 h)",
      description: "21 h de formation préparant à la certification RS6776 en IA générative : création de contenus, assistants IA, éthique et AI Act. Inclut 2 h d’accompagnement avec un expert. Prix de lancement : 600 €.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
      },
      offers: {
        '@type': 'Offer',
        price: '600',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'Course',
      position: 3,
      name: "RS7351 — Réseaux sociaux (21 h)",
      description: "21 h pour concevoir sa ligne éditoriale, créer du contenu visuel et prospecter sur LinkedIn. Préparation à la certification RS7351. Inclut 2 h d’accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
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
      name: "RS7344 — Développer son activité avec l’IA (21 h)",
      description: "21 h pour structurer et piloter l’intégration de l’IA en entreprise. Préparation à la certification RS7344. Inclut 2 h d’accompagnement avec un expert.",
      provider: {
        '@type': 'Organization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
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
