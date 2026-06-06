import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import HomePageClient from './page-client';

export const metadata: Metadata = {
  title: 'Formation TOP® – Gestion du stress & performance | Ô\'TOP Formation',
  description: 'Formation aux Techniques d\'Optimisation du Potentiel (TOP®) à Ollioules (PACA). Gérer le stress, prévenir le burn-out et améliorer la performance dans les milieux exigeants.',
};

export default function Home() {
  return (
    <HomePageClient />
  );
}
