import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Diagnostic Personnalisé Offert (15 min) | Ô'TOP Formation",
  description:
    "Contactez directement Mélissa et Renaud pour étudier votre projet de formation (IA, Réseaux Sociaux, Méthode TOP®) et vérifier vos prises en charge OPCO/FAF sous 24h. Espace Gamma 1, Ollioules (Var).",
  alternates: {
    canonical: 'https://o-topformation.vercel.app/contact',
  },
  openGraph: {
    title: "Contact & Diagnostic de Formation Offert | Ô'TOP Formation",
    description:
      "Échangez en direct avec nos experts pédagogiques pour valider votre éligibilité OPCO/FAF et démarrer votre parcours personnalisé.",
    url: 'https://o-topformation.vercel.app/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
