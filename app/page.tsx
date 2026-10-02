import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import HomePageClient from './page-client';

export const metadata: Metadata = {
  title: "Formations IA en ligne pour indépendants et TPE | Ô’TOP Formations",
  description: "Formations IA et réseaux sociaux 100 % en ligne pour indépendants et dirigeants de TPE : 21 h dont 2 h d’accompagnement avec un expert. Préparation à 3 certifications RS. Paiement en 3 fois ou financement possible.",
  alternates: {
    canonical: "https://otopformations.com",
  },
  openGraph: {
    title: "Ô’TOP Formations — Formations IA, réseaux sociaux et conduite du changement",
    description: "Formations IA et réseaux sociaux 100 % en ligne, 2 h d’accompagnement avec un expert incluses. Financement possible avec notre partenaire Eloq-One, certifié Qualiopi.",
    url: "https://otopformations.com",
    siteName: "Ô’TOP Formations",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <HomePageClient />
  );
}
