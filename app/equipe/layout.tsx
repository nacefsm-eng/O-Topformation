import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "L'Équipe des Formateurs & Experts — Ô'TOP Formations",
  description: "L'équipe Ô'TOP Formations : formateurs IA, formateurs certifiés Méthode TOP®, experts cybersécurité et digital.",
};

export default function EquipeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
