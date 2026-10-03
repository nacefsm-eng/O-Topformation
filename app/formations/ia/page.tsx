import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PracticalInfoBlock from '@/components/PracticalInfoBlock';

export const metadata: Metadata = {
  title: "Formations IA préparant aux certifications RS6776 et RS7344 | Ô’TOP Formations",
  description: "Formations en IA générative et intégration de l’IA, 100 % en ligne, 21 h dont 2 h d’accompagnement. Préparation aux certifications RS6776 et RS7344.",
  alternates: {
    canonical: "https://otopformations.com/formations/ia",
  },
};

export default function FormationIAPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-subpage" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #051937 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <span className="hero-certif-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
              ⏱ Préparation aux certifications RS6776 et RS7344 (passage en option)
            </span>
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2 }}>
              Utilisez l’IA avec méthode pour gagner du temps dans votre activité
            </h1>
            <p className="hero-subtitle text-base sm:text-lg mb-6 leading-relaxed">
              Des formations 100 % en ligne pour identifier les bons usages, éviter les erreurs et intégrer l’IA dans votre activité, avec 2 h d’accompagnement individuel par un expert.
            </p>
            <div className="hero-feature-pills flex gap-2 flex-wrap mb-6 text-sm font-semibold">
              <span>✓ 21 h en ligne, dont 2 h avec un expert</span>
              <span className="opacity-40">•</span>
              <span>✓ Accès sous 24 h, à vie</span>
              <span className="opacity-40">•</span>
              <span>✓ Prépare à une certification RS (en option)</span>
              <span className="opacity-40">•</span>
              <span>✓ Paiement en 3 fois sans frais ou financement possible</span>
            </div>
            <div className="hero-funding-info p-3.5 rounded-xl text-xs mb-8 leading-relaxed">
              ℹ️ Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur.
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/commander?offre=rs6776" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, padding: '1rem 2rem' }}>
                Commencer mon inscription →
              </Link>
              <a 
                href="https://calendly.com/formation-rmcf/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost" 
                style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                Échanger 15 min avec Mélissa ou Renaud
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / Highlights */}
      <section className="section-sm" style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--blue-900)' }}>21 h</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Par Formation</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Dont 2 h d’accompagnement avec un expert</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>RS6776 &amp; RS7344</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>France Compétences</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Préparation aux certifications (option)</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--red-600)' }}>Accès 24 h</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>100 % en ligne</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Accès sous 24 h, à vie</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#25D366' }}>3x sans frais</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Dès 200 € / mois</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Ou financement OPCO / FAF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Les 2 Parcours IA */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Deux formations adaptées à vos objectifs</span>
            <h2>Choisissez votre programme</h2>
            <p>Conçus pour l’action et le résultat immédiat dans votre entreprise ou activité freelance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {/* Parcours 1: Indépendants / IA Générative (RS6776) */}
            <div className="card" style={{ background: '#ffffff', border: '2px solid var(--gold)', display: 'flex', flexDirection: 'column', color: '#1e293b' }}>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="label" style={{ color: 'var(--gold-dark)', margin: 0 }}>🤖 IA générative • Prépare à RS6776</span>
                  <span style={{ background: 'var(--gold-dark)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                    100 % en ligne
                  </span>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--blue-900)' }}>RS6776 — IA générative</h3>
                <p style={{ marginBottom: '1.5rem', color: '#334155', lineHeight: 1.6 }}>
                  Identifiez les usages pertinents, créez vos premiers processus assistés par l’IA et bénéficiez de 2 heures d’accompagnement en visioconférence.
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--blue-900)' }}>Programme en 3 modules (21 h, dont 2 h d’accompagnement avec un expert) :</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 1 :</strong> Stratégie d’implémentation &amp; choix des outils selon budget</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 2 :</strong> Création de contenus rédactionnels, visuels &amp; assistants IA sur mesure</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 3 :</strong> Conformité, éthique &amp; réglementation (AI Act, RGPD, confidentialité)</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Accompagnement :</strong> 2 h individuelles avec un expert incluses</li>
                </ul>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.88rem', color: '#475569', borderLeft: '4px solid var(--blue-900)' }}>
                  <strong>Évaluation :</strong> quiz et cas pratiques intégrés. Certification RS6776 en option : non incluse dans le prix, organisée par notre partenaire Eloq-One.
                </div>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.88rem', color: '#475569', borderLeft: '4px solid var(--gold)' }}>
                  <strong>Financement :</strong> possible par votre OPCO ou votre FAF, sous réserve de leur accord.
                </div>

                {/* Encart Prix de Lancement */}
                <div style={{ background: 'linear-gradient(135deg, #fef3c7, #ecfdf5)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.5rem', border: '2px solid #f59e0b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: '#b45309', background: '#fde68a', padding: '2px 8px', borderRadius: '4px' }}>
                      PRIX DE LANCEMENT JUSQU’AU 31/10
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: '#047857' }}>600 €</span>
                    <span style={{ fontSize: '0.85rem', color: '#475569' }}>ou 3 × 200 € sans frais</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 600 }}>
                    ⏰ Prix de lancement valable jusqu’au 31 octobre 2026.
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--gray-200)', background: 'var(--gray-50)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link 
                  href="/commander?offre=rs6776" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', background: 'var(--red-600)', color: 'white', fontWeight: 800, padding: '0.85rem 1rem' }}
                >
                  Commencer mon inscription — 600 € →
                </Link>
                <Link href="/commander?offre=rs6776&mode=financement" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Demander une étude de financement
                </Link>
              </div>
            </div>

            {/* Parcours 2: Dirigeants / Intégration IA (RS7344) */}
            <div className="card" style={{ background: '#ffffff', border: '2px solid var(--blue-900)', display: 'flex', flexDirection: 'column', color: '#1e293b' }}>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="label" style={{ color: 'var(--blue-600)', margin: 0 }}>🚀 Développer son activité avec l’IA • Prépare à RS7344</span>
                  <span style={{ background: 'var(--blue-900)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                    100 % en ligne (intra possible)
                  </span>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--blue-900)' }}>RS7344 — Développer son activité avec l’IA</h3>
                <p style={{ marginBottom: '1.5rem', color: '#334155', lineHeight: 1.6 }}>
                  Pour dirigeants, managers et collaborateurs : structurer et piloter un projet d’intégration de l’IA (21 h, dont 2 h d’accompagnement avec un expert).
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--blue-900)' }}>Programme en 5 Modules :</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 1 :</strong> Identifier les opportunités d’intégration &amp; méthode STEP</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 2 :</strong> Plan d’intégration, budget réaliste &amp; conformité AI Act</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 3 :</strong> Implémentation opérationnelle (marketing, admin, prompts)</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 4 :</strong> Conduite du changement, acculturation des équipes &amp; ateliers Méthode TOP®</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 5 :</strong> Mesure de performance, KPI &amp; cycle d’optimisation PDCA</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Accompagnement :</strong> 2 h individuelles avec un expert incluses</li>
                </ul>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.88rem', color: '#475569', borderLeft: '4px solid var(--blue-900)' }}>
                  <strong>Évaluation :</strong> quiz et cas pratiques intégrés. Certification RS7344 en option : non incluse dans le prix, organisée par notre partenaire Eloq-One.
                </div>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.88rem', color: '#475569', borderLeft: '4px solid var(--gold)' }}>
                  <strong>Tarif :</strong> 1 490 € (ou 3 × 496,67 €) • Financement OPCO / FAF possible
                </div>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--gray-200)', background: 'var(--gray-50)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link 
                  href="/commander?offre=rs7344" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)', color: 'white', fontWeight: 800, padding: '0.85rem 1rem' }}
                >
                  Commencer mon inscription — 1 490 € →
                </Link>
                <Link href="/commander?offre=rs7344&mode=financement" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Demander une étude de financement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supports & Méthode Pédagogique */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="label">Méthode Pédagogique Ô’TOP</span>
            <h2>Un accompagnement humain qui fait la différence</h2>
            <p>Contrairement aux simples cours en ligne, nous combinons autonomie et suivi individuel par nos formateurs experts.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎥</div>
              <h4>Vidéos &amp; Synthèses</h4>
              <p>Des modules courts, rythmés et directement applicables, accompagnés de fiches mémo à retenir.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
              <h4>Boîte à Outils &amp; Prompts</h4>
              <p>Accès à une bibliothèque de prompts professionnels testés et prêts à l’emploi pour votre secteur.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
              <h4>Accompagnement</h4>
              <p>2 h avec un expert incluses, en visioconférence pour débloquer chaque cas pratique.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
              <h4>Certification en option</h4>
              <p>Préparation aux certifications RS6776 ou RS7344, passage facultatif organisé par notre partenaire Eloq-One.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc C5 — Informations Pratiques */}
      <PracticalInfoBlock 
        certificationTitle="IA générative et Développer son activité avec l’IA"
        certificationCode="RS6776 / RS7344"
      />

      {/* CTA Final */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>⚡ Prêt(e) à passer à l’action ?</h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Inscrivez-vous en 2 minutes, ou prenez 15 minutes avec Mélissa ou Renaud pour choisir la bonne formation et étudier votre financement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/commander?offre=rs6776" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Commencer mon inscription →
            </Link>
            <a 
              href="https://calendly.com/formation-rmcf/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost" 
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              Prendre RDV (15 min) ⚡
            </a>
            <a 
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20IA." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#25D366', color: 'white', fontWeight: 700 }}
            >
              WhatsApp 💬
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
