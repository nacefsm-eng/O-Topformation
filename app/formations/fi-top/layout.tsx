import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Formation FI-TOP® (21h) — Gestion du Stress & Performance — Ô'TOP Formations",
  description: "Formation FI-TOP® (21 h) à Ollioules ou à distance : techniques de gestion du stress et de performance durable pour collaborateurs et managers, notamment dans les projets de transformation. Financement OPCO / FAF possible.",
};

export default function FiTopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
