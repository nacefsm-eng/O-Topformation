import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: "%s | Ô'TOP Formation",
    default: "Ô'TOP Formation | Techniques d'Optimisation du Potentiel (TOP®)",
  },
  description:
    "Ô'TOP Formation accompagne les professionnels, entreprises et collectivités dans la gestion du stress, la préparation mentale et le développement des compétences psychosociales grâce aux Techniques d'Optimisation du Potentiel (TOP®).",
  keywords: [
    'formation TOP', 'Techniques Optimisation Potentiel', 'gestion du stress', 'préparation mentale',
    'formation QVT', 'prévention RPS', 'burn-out', 'performance professionnelle', 'motivation travail',
    'bien-être entreprise', 'formation santé mentale', 'TOP®', 'Ollioules', 'Provence', 'PACA'
  ],
  openGraph: {
    title: "Ô'TOP Formation — Techniques d'Optimisation du Potentiel",
    description: "Gérez votre stress, développez votre concentration et préservez votre énergie grâce aux TOP®. Organisme de formation certifié, présentiel ou distanciel.",
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Nav />
        <ScrollReveal />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
