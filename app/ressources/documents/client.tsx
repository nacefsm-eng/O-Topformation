'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';

const documents = [
  {
    icon: '📋',
    category: 'Programme',
    title: 'Programme FI TOP® (21h)',
    desc: "Le détail complet de notre formation phare : objectifs pédagogiques, modules, méthodes et modalités d'évaluation.",
    file: '/docs/programme-fi-top.pdf',
    size: 'PDF · 2 pages',
    color: '#1a3c8f',
    badge: 'Formation phare',
  },
  {
    icon: '📚',
    category: 'Catalogue',
    title: 'Catalogue de formations',
    desc: 'Toutes nos offres : inter-entreprises, intra-entreprises et formations sur-mesure pour les équipes.',
    file: '/docs/catalogue-otop-2025.pdf',
    size: 'PDF · 4 pages',
    color: '#c8231a',
    badge: 'Nouveau 2025',
  },
  {
    icon: '🤝',
    category: 'Livret',
    title: "Livret d'accueil stagiaire",
    desc: "Tout ce que vous devez savoir avant de commencer : règlement, droits du stagiaire, fonctionnement des sessions.",
    file: '/docs/livret-accueil.pdf',
    size: 'PDF · 3 pages',
    color: '#d4af37',
    badge: 'Obligatoire',
  },
  {
    icon: '⚖️',
    category: 'Règlement',
    title: 'Règlement intérieur',
    desc: "Le cadre réglementaire de nos formations : obligations, règles de fonctionnement et gestion des absences.",
    file: '/docs/reglement-interieur.pdf',
    size: 'PDF · 2 pages',
    color: '#374151',
    badge: '',
  },
  {
    icon: '✅',
    category: 'Qualité',
    title: 'Charte Qualité & Qualiopi',
    desc: "Notre engagement qualité : critères Qualiopi, indicateurs de satisfaction et résultats de nos formations.",
    file: '/docs/charte-qualite.pdf',
    size: 'PDF · 1 page',
    color: '#059669',
    badge: 'Certifié Qualiopi',
  },
  {
    icon: '📝',
    category: 'Convention',
    title: 'Modèle de convention de formation',
    desc: "Le document type de convention de formation professionnelle continue, conforme à la réglementation.",
    file: '/docs/convention-formation.pdf',
    size: 'PDF · 2 pages',
    color: '#7c3aed',
    badge: '',
  },
];

export default function DocumentsClient() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0f1f5c 0%, #1a3c8f 100%)', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Accueil</Link>
            <span className="breadcrumb-sep" style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            <span style={{ color: 'white' }}>Ressources</span>
          </div>
          <h1 style={{ color: 'white' }}>Ressources & Documents</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Tous nos documents pédagogiques et administratifs sont disponibles en téléchargement libre.
          </p>
        </div>
      </div>

      {/* Documents Grid */}
      <section className="section" style={{ background: '#f8fafc', marginTop: '-3rem', paddingTop: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {documents.map((doc, i) => (
              <div
                key={i}
                style={{ background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Color stripe */}
                <div style={{ height: '6px', background: doc.color }} />

                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '52px', height: '52px', background: doc.color + '18', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                      {doc.icon}
                    </div>
                    {doc.badge && (
                      <span style={{ background: doc.color + '18', color: doc.color, fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {doc.badge}
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: doc.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
                    {doc.category}
                  </div>
                  <h2 style={{ fontSize: '1.1rem', color: '#1e293b', marginBottom: '0.75rem', fontWeight: 700 }}>{doc.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>{doc.desc}</p>
                </div>

                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.775rem', color: '#94a3b8', fontWeight: 500 }}>{doc.size}</span>
                  <a
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: doc.color, color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700 }}
                  >
                    ⬇️ Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, #0f1f5c, #1a3c8f)', borderRadius: '20px', padding: '3rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Un document manque ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Contactez-nous, nous vous transmettrons tout document complémentaire dans les 24h.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reservation" className="btn" style={{ background: '#d4af37', color: '#0f1f5c', fontWeight: 700 }}>
                📅 Réserver un entretien
              </Link>
              <Link href="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                ✉️ Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
