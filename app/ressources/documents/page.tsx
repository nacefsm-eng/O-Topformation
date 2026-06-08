import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Documents() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Documents & Plaquettes</span>
          </div>
          <h1>Documents en libre accès</h1>
          <p>Téléchargez nos plaquettes et documents d'information sur les Techniques d'Optimisation du Potentiel.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            
            <div style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Plaquette FI TOP®</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>Le programme complet de notre formation initiale (21 heures).</p>
              </div>
              <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert("Le PDF sera bientôt disponible !"); }}>
                Télécharger (PDF)
              </a>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Règlement Intérieur</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>Les règles applicables aux stagiaires de la formation.</p>
              </div>
              <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert("Le PDF sera bientôt disponible !"); }}>
                Télécharger (PDF)
              </a>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Livret d'Accueil</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>Informations pratiques pour les participants en présentiel et distanciel.</p>
              </div>
              <a href="#" className="btn btn-outline" onClick={(e) => { e.preventDefault(); alert("Le PDF sera bientôt disponible !"); }}>
                Télécharger (PDF)
              </a>
            </div>

          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
