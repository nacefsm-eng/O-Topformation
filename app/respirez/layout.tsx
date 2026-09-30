import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Respirez à nouveau | Formation Initiale TOP® (3 jours) — Mélissa & Régis",
  description:
    "Plaquette officielle : Techniques d'Optimisation du Potentiel (Méthode TOP®). Ô'TOP redonne souffle et clarté à ceux qui portent les autres. Cursus FI-TOP (21h / 3 jours) animé par Mélissa Jennadi et Régis Domergue. Téléchargez le livret officiel.",
  keywords: [
    'formation TOP',
    'FI-TOP',
    'Techniques Optimisation Potentiel',
    'Mélissa Jennadi',
    'Régis Domergue',
    'gestion du stress',
    'préparation mentale',
    'récupération flash',
    'burnout soignants enseignants',
    'financement OPCO',
    'FAFCEA',
    'FIF-PL',
    'Ollioules',
    'Var',
    'PACA',
  ],
  alternates: {
    canonical: 'https://o-topformation.vercel.app/respirez',
  },
  openGraph: {
    title: "Respirez à nouveau — Ô'TOP Formations | Méthode TOP® (3 jours)",
    description:
      "Ô'TOP redonne souffle et clarté à ceux qui portent les autres. Formation Initiale TOP® animée par Mélissa Jennadi et Régis Domergue.",
    url: 'https://o-topformation.vercel.app/respirez',
    type: 'website',
  },
};

export default function RespirezLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="respirez-landing">
      {children}
    </div>
  );
}
