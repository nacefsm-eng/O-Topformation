import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Le Blog</span>
          </div>
          <h1>Le Blog TOP®</h1>
          <p>Articles, conseils et retours d'expérience sur les Techniques d'Optimisation du Potentiel.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Nos articles arrivent bientôt !</h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Nous sommes en train de préparer des articles détaillés pour vous aider à mieux comprendre et appliquer les TOP® au quotidien.
            </p>
            <Link href="/contact" className="btn btn-primary">Nous contacter en attendant</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
