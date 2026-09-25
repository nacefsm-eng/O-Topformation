import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Financement & Démarche Qualité — Ô'TOP Formations",
  description: "Financement de vos formations : OPCO, FAF (FIF-PL, AGEFICE, FAFCEA). Démarche qualité, accessibilité et réclamations. Formations financées portées par Eloq-One, certifié Qualiopi.",
};

export default function FinancementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
