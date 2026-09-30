import type { Metadata } from 'next';
import PlaquetteTopView from '@/components/PlaquetteTopView';

export const metadata: Metadata = {
  title: "Formation Initiale FI-TOP® (3 jours) | Ô'TOP Formations — Mélissa & Régis",
  description:
    "Plaquette officielle : Techniques d'Optimisation du Potentiel (Méthode TOP®). 2 Voix, 1 Mission : former pour transformer. Cursus FI-TOP (3 jours / 21h) animé par Mélissa Jennadi et Régis Domergue. Téléchargez le livret d'accueil officiel de 34 pages.",
  keywords: [
    'formation TOP',
    'FI-TOP',
    'Techniques Optimisation Potentiel',
    'Mélissa Jennadi',
    'Régis Domergue',
    'gestion du stress',
    'préparation mentale',
    'programme pHARe',
    'harcèlement scolaire',
    'fatigue sommeil',
    'financement OPCO',
    'FAFCEA',
    'FIF-PL',
    'Ollioules',
    'Var',
    'PACA',
  ],
  alternates: {
    canonical: 'https://o-topformation.vercel.app/formation-top',
  },
  openGraph: {
    title: "Formation Initiale FI-TOP® (3 jours) — Ô'TOP Formations",
    description:
      "Régulez votre stress, préservez votre lucidité et dynamisez votre énergie. Formation animée par Mélissa Jennadi et Régis Domergue.",
    url: 'https://o-topformation.vercel.app/formation-top',
    type: 'website',
  },
};

export default function FormationTopPage() {
  return <PlaquetteTopView />;
}
