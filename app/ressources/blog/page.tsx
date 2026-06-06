import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/utils/db';

export const metadata: Metadata = {
  title: "Blog & Ressources — Ô'TOP Formation",
};

export default function Blog() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Ressources & Blog</span>
          </div>
          <h1>Ressources & Blog</h1>
          <p>Articles, conseils et actualités sur la préparation mentale, la gestion du stress, la QVT et les Techniques d&apos;Optimisation du Potentiel.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          
          {/* Newsletter / CTA bloc top */}
          <div style={{ background: 'var(--blue-900)', color: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--gold)' }}>Abonnez-vous à notre newsletter</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Recevez chaque mois nos meilleurs conseils TOP®, exercices pratiques et actus QVT directement dans votre boîte mail.</p>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="votre@email.com" style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: 'none', outline: 'none' }} />
              <button className="btn btn-gold">S&apos;inscrire</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {blogPosts.map((post) => (
              <article key={post.id} style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', cursor: 'pointer' }} className="blog-card-hover">
                
                {/* Image placeholder with Emoji */}
                <div style={{ height: '200px', background: 'var(--blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', borderBottom: '1px solid var(--gray-200)' }}>
                  {post.category === 'QVT' ? '🏢' : post.category === 'Gestion du stress' ? '🧘' : post.category === 'Performance' ? '⚡' : '🧠'}
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--blue-700)', background: 'var(--blue-50)', padding: '0.2rem 0.6rem', borderRadius: '50px' }}>{post.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>⏱ {post.readTime}</span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--blue-900)', lineHeight: 1.4 }}>
                    <Link href={`/ressources/blog#${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--gray-100)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gray-400)' }}>{post.date}</span>
                    <span style={{ color: 'var(--red)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Lire l&apos;article <span aria-hidden="true">→</span></span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner" style={{ background: 'white', border: '1px solid var(--gray-200)' }}>
            <span className="label" style={{ color: 'var(--blue-700)' }}>Pour aller plus loin</span>
            <h2 className="cta-title" style={{ color: 'var(--blue-900)' }}>Découvrez la méthode par la pratique</h2>
            <div className="cta-actions" style={{ justifyContent: 'center' }}>
              <Link href="/formations/fi-top" className="btn btn-primary">Formation FI TOP®</Link>
              <Link href="/contact" className="btn btn-outline-blue">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Small inline style for the card hover effect */}
      <style>{`
        .blog-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg) !important;
        }
      `}</style>
    </main>
  );
}
