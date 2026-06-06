import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formation TOP® Santé & Médico-social | Ô'TOP Formation",
  description: "Formations certifiantes aux Techniques d'Optimisation du Potentiel pour les professionnels de santé, EHPAD et CHU. Prévention du burn-out et gestion du stress.",
};

export default function SantePage() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #2a52be 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Secteur Santé & Médico-social</span>
          </div>
          <h1>Gérer le stress et prévenir l'épuisement des soignants</h1>
          <p>
            Des outils concrets et immédiats pour faire face à la charge mentale, 
            à l'urgence et prévenir le burn-out dans le milieu médical.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="label label-red">Les enjeux</span>
              <h2 style={{ color: 'var(--blue-900)' }}>Un secteur sous haute tension</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Manque de personnel, horaires décalés, confrontation quotidienne à la souffrance et aux urgences... Les professionnels de santé (CHU, cliniques, EHPAD) sont en première ligne face à l'épuisement professionnel.
              </p>
              <ul className="check-list">
                <li>Prévenir l'épuisement professionnel (Burn-out)</li>
                <li>Gérer la charge émotionnelle et le stress aigu</li>
                <li>Améliorer la qualité de récupération entre les gardes</li>
                <li>Fidéliser les équipes et réduire l'absentéisme</li>
              </ul>
            </div>
            <div style={{ background: 'var(--gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>La solution TOP®</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Conçues initialement pour les soignants militaires en situation de crise, les TOP® offrent des techniques "flash" (quelques minutes) pour réguler le système nerveux directement sur le terrain.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Demander un devis Santé →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
