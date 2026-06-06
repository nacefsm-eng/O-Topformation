import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "La Méthode TOP®",
};

export default function MethodeTop() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>La Méthode TOP®</span>
          </div>
          <h1>La Méthode TOP®</h1>
          <p>Développées au sein des armées françaises, les Techniques d&apos;Optimisation du Potentiel (TOP®) sont aujourd&apos;hui le référentiel de la performance mentale appliquée au monde professionnel.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="label">Historique</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>Des forces spéciales à l&apos;entreprise</h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--gray-600)' }}>
                Créées dans les années 1990 par le Dr Édith Perreaut-Pierre au sein du service de santé des armées, les TOP® ont d&apos;abord été conçues pour préparer les militaires et les sportifs de haut niveau aux situations d&apos;exception.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--gray-600)' }}>
                Aujourd&apos;hui, ces techniques éprouvées sur le terrain sont parfaitement adaptées au monde civil et professionnel. Elles permettent à chacun, quels que soient son âge et sa condition, de mobiliser ses ressources cognitives, physiologiques et émotionnelles pour faire face aux exigences du quotidien.
              </p>
              <p style={{ lineHeight: 1.7, color: 'var(--gray-600)' }}>
                L&apos;approche est pragmatique, brève et personnalisable. Elle vise l&apos;autonomie rapide de l&apos;apprenant dans la gestion de son énergie.
              </p>
            </div>
            <div>
              <img src="/formation-presentiel.png" alt="Formation TOP en présentiel" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Les 4 piliers</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Les fondamentaux des TOP®</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--gray-600)' }}>La méthode repose sur quatre familles de techniques complémentaires qui agissent en synergie sur le corps et l&apos;esprit.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🌬️</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gray-200)' }}>01</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Respiration</h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La respiration est le premier levier de contrôle du système nerveux autonome. Les techniques de respiration TOP® incluent la respiration régulatrice, la respiration de combat et d&apos;autres méthodes permettant de réguler le stress, la concentration et l&apos;activation physique.
              </p>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🧘</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gray-200)' }}>02</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Relaxation</h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La Relaxation Musculaire Directe (RMD), la Relaxation Musculaire Indirecte (RMI) et la Relaxation Paradoxale permettent de restaurer l&apos;équilibre physique et mental. Ces techniques s&apos;utilisent aussi bien pour la récupération que pour la préparation à l&apos;action.
              </p>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🌟</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gray-200)' }}>03</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Imagerie mentale</h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La balade sensorielle, la Préparation Mentale de la Réussite (PMR) et la Répétition Mentale (RM) permettent de préparer le cerveau à l&apos;action par la visualisation. Issue du sport de haut niveau, cette technique est redoutablement efficace en entreprise.
              </p>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>💬</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gray-200)' }}>04</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Dialogue interne</h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Le Signal d&apos;Ajustement Réflexe (SAR), le Renforcement Positif (R+) et la Dynamisation Psycho-Physiologique Personnalisée (DPP) permettent de transformer notre dialogue interne en véritable allié. La confiance en soi et la motivation se développent par la pratique régulière.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Bénéfices</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Les résultats de la méthode</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              ['🛡️', 'Gestion du stress', 'Réguler son niveau de stress face aux situations d\'urgence et aux imprévus.'],
              ['🎯', 'Concentration', 'Maintenir un haut niveau d\'attention et limiter la dispersion.'],
              ['🔋', 'Récupération', 'Prévenir la fatigue chronique et optimiser son temps de repos.'],
              ['🤝', 'Cohésion', 'Améliorer le climat d\'équipe et la communication interpersonnelle.'],
              ['💡', 'Prise de décision', 'Conserver sa lucidité dans les moments complexes ou critiques.'],
              ['💪', 'Motivation', 'Mobiliser son énergie sur le long terme sans s\'épuiser.'],
              ['🧠', 'Adaptabilité', 'Développer sa flexibilité mentale face au changement.'],
              ['⚕️', 'Prévention', 'Agir concrètement contre les Risques Psychosociaux (RPS) et le burn-out.']
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'var(--gray-50)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>{title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="label label-gold">Passez à l&apos;action</span>
            <h2 className="cta-title">Envie de maîtriser ces outils ?</h2>
            <p className="cta-subtitle">Découvrez notre Formation Initiale TOP® pour intégrer ces techniques à votre quotidien professionnel et personnel.</p>
            <div className="cta-actions">
              <Link href="/formations/fi-top" className="btn btn-gold">Découvrir la formation →</Link>
              <Link href="/contact" className="btn btn-outline-white">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
