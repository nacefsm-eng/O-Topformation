import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import HomePageClient from './page-client';

export const metadata: Metadata = {
  title: "Faites de l'IA & du digital vos meilleurs leviers de croissance | Ô'TOP Formation",
  description: "Maîtrisez l'IA et devenez indispensable. 3 parcours certifiants pour dirigeants de TPE/PME et indépendants avec 5h de coaching individuel inclus. Finançable selon votre statut (OPCO, FAF) via notre organisme partenaire.",
};

export default function Home() {
  return (
    <HomePageClient />
  );
}
