import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Ressources | Ô'TOP Formation",
  description: "Retrouvez les ressources pédagogiques d'Ô'TOP Formation : FAQ, blog, et informations sur nos formations TOP®.",
};

export default function DocumentsPage() {
  const ressources = [
    {
      icon: '📋',
      title: 'Programme des formations',
      desc: 'Découvrez le contenu détaillé de notre formation FI TOP® (21h) : objectifs pédagogiques, modules, méthodes et modalités.',
      link: '/formations/fi-top',
      cta: 'Voir le programme',
      color: 'var(--blue-900)',
    },
    {
      icon: '📚',
      title: 'Catalogue de formations',
      desc: 'Toutes nos offres de formation : inter-entreprises, intra-entreprises, formations longues et journées découverte.',
      link: '/formations/fi-top',
      cta: 'Voir le catalogue',
      color: 'var(--red-600)',
    },
    {
      icon: '🤝',
      title: 'Livret d\'accueil',
      desc: 'Informations pratiques pour les futurs stagiaires : comment se préparer, les règles de fonctionnement et vos droits.',
      link: '/qualite',
      cta: 'En savoir plus',
      color: 'var(--gold)',
    },
  ];

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Ressources</span>
          </div>
          <h1>Ressources & Informations</h1>
          <p>Tout ce dont vous avez besoin pour préparer votre projet de formation.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="auto-grid">
            {ressources.map((r, i) => (
              <div key={i} style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: '60px', height: '60px', background: r.color, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>
                  {r.icon}
                </div>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--blue-900)' }}>{r.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.7, flex: 1 }}>{r.desc}</p>
                <Link href={r.link} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  {r.cta} →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', background: 'var(--blue-900)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Vous avez une question spécifique ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Nos formateurs vous répondent dans les 24h ouvrées ou lors d'un entretien découverte de 15 min.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reservation" className="btn" style={{ background: 'white', color: 'var(--blue-900)', fontWeight: 700 }}>
                📅 Réserver un entretien
              </Link>
              <Link href="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
