import type { Metadata } from 'next';
import PlaquetteTopView from '@/components/PlaquetteTopView';

export const metadata: Metadata = {
  title: "Plaquette Formation Initiale FI-TOP® (3 jours) | Mélissa & Régis",
  description:
    "Plaquette officielle : Techniques d'Optimisation du Potentiel (Méthode TOP®). 2 Voix, 1 Mission : former pour transformer. Cursus FI-TOP (3 jours / 21h) animé par Mélissa Jennadi et Régis Domergue.",
  alternates: {
    canonical: 'https://o-topformation.vercel.app/plaquette-top',
  },
};

export default function PlaquetteTopPage() {
  return <PlaquetteTopView />;
}
