import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Entreprises — Ô'TOP Formation",
};

export default function Entreprises() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Entreprises</span>
          </div>
          <h1>Renforcez la performance de vos équipes avec les TOP®</h1>
          <p>Des solutions sur-mesure pour allier Qualité de Vie au Travail (QVT), prévention des Risques Psychosociaux (RPS) et performance durable.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Vos enjeux RH</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Les défis auxquels nous répondons</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              ['📉', 'Stress professionnel', 'Charge mentale excessive et difficulté à déconnecter.'],
              ['🚨', 'Prévention des RPS', 'Obligation légale de l\'employeur de protéger la santé mentale de ses collaborateurs.'],
              ['🔋', 'Burn-out & Épuisement', 'Prévenir plutôt que guérir grâce à des outils d\'auto-régulation énergétique.'],
              ['🏃', 'Turn-over & Absentéisme', 'Fidéliser les talents en investissant concrètement dans leur bien-être.'],
              ['🎯', 'Performance collective', 'Maintenir la lucidité et la cohésion d\'équipe en période de forte activité.'],
              ['🗣️', 'Accompagnement du changement', 'Aider les collaborateurs à s\'adapter sereinement aux transformations.']
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'var(--gray-50)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.5rem' }}>{icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>{title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Nos solutions intra</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Interventions sur-mesure</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Formation TOP® Intra</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>La Formation Initiale (21h) ou Découverte (7h) animée directement dans vos locaux, exclusivement pour vos collaborateurs.</p>
              <ul className="check-list" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <li>Cohésion d&apos;équipe</li>
                <li>Confidentialité</li>
                <li>Programme adaptable</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--blue-700)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Ateliers QVT thématiques</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Des formats courts (1h à 3h) axés sur une thématique précise : sommeil, micro-sieste, gestion du stress express, concentration.</p>
              <ul className="check-list" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <li>Semaine de la QVT</li>
                <li>Facile à intégrer</li>
                <li>Outils pratiques</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--red)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Conférences</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Intervention inspirante lors de vos séminaires. Présentation de la méthode militaire appliquée à l&apos;entreprise.</p>
              <ul className="check-list" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <li>Événementiel / Séminaire</li>
                <li>Sensibilisation large</li>
                <li>Format interactif</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', borderTop: '4px solid var(--blue-900)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Coaching Managers</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Accompagnement individuel des dirigeants et managers pour optimiser leur leadership et leur gestion de la pression.</p>
              <ul className="check-list" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <li>Suivi personnalisé</li>
                <li>Prise de recul</li>
                <li>Excellence décisionnelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Notre méthodologie</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Comment se déroule un projet intra ?</h2>
          </div>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="step-num" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Diagnostic & Besoins</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Entretien préalable pour comprendre votre contexte, vos enjeux et définir les objectifs pédagogiques.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="step-num" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Ingénierie sur-mesure</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Adaptation du programme et des cas pratiques à la réalité métier de vos équipes.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="step-num" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--blue-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Animation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Déploiement de l&apos;action de formation dans vos locaux ou en espace de séminaire (ou distanciel).</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="step-num" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, margin: '0 auto 1.5rem' }}>4</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Bilan & Suivi</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Évaluation de la satisfaction, bilan pédagogique avec le commanditaire et proposition de suivi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-bar" style={{ background: 'var(--blue-900)', color: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '0.5rem' }}>70%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>Réduction du stress perçu</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '0.5rem' }}>+35%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>Amélioration de la concentration</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>Taux de satisfaction</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '0.5rem' }}>ROI</div>
              <div style={{ fontSize: '1rem', fontWeight: 600 }}>Mesurable sur l&apos;absentéisme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="label" style={{ color: 'rgba(255,255,255,0.7)' }}>Passer à l'action</span>
            <h2 className="cta-title">Construisons votre projet intra</h2>
            <p className="cta-subtitle">Contactez-nous pour un échange de 15 minutes afin d'évaluer vos besoins et obtenir un devis personnalisé.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Demander un devis →</Link>
              <a href="/reservation" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">📅 Prendre rdv</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
