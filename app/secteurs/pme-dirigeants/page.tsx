import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formation TOP® pour Dirigeants & PME | Ô'TOP Formation",
  description: "Formations en Qualité de Vie au Travail (QVT) et leadership. Techniques d'Optimisation du Potentiel pour les cadres et dirigeants de PME.",
};

export default function PmeDirigeantsPage() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #2a52be 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Secteur PME & Dirigeants</span>
          </div>
          <h1>Leadership, QVT et cohésion d'équipe</h1>
          <p>
            Renforcez la résilience de vos collaborateurs, développez un management serein 
            et boostez la performance durable de votre entreprise.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="label label-red">Les enjeux</span>
              <h2 style={{ color: 'var(--blue-900)' }}>Allier performance et bien-être</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Dans un environnement économique instable, la pression repose lourdement sur les dirigeants et leurs équipes. La Qualité de Vie au Travail (QVT) n'est plus une option, c'est un levier stratégique de fidélisation et de productivité.
              </p>
              <ul className="check-list">
                <li>Réduire le turnover et l'absentéisme (RPS)</li>
                <li>Préparer les équipes aux pics d'activité (sprints)</li>
                <li>Développer le leadership et la clarté décisionnelle</li>
                <li>Fédérer les équipes autour d'un socle de valeurs commun</li>
              </ul>
            </div>
            <div style={{ background: 'var(--gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>La solution TOP®</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Via des ateliers intra-entreprise ou des séminaires d'équipe, nous formons vos collaborateurs à la dynamisation psychophysiologique, favorisant la motivation et l'esprit de corps comme dans les unités d'élite.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Demander un diagnostic QVT gratuit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
