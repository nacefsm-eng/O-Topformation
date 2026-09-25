import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import HomePageClient from './page-client';

export const metadata: Metadata = {
  title: "Faites de l'IA & du digital vos meilleurs leviers de croissance | Ô'TOP Formations",
  description: "Formations IA et réseaux sociaux pour dirigeants de TPE/PME et indépendants, préparant à 3 certifications RS, avec 2 h d'accompagnement expert incluses. Financement possible selon votre statut (OPCO, FAF).",
};

export default function Home() {
  return (
    <HomePageClient />
  );
}
