'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HomePageClient() {
  return (
    <main>
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="hero" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(0, 52, 146, 0.15) 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, var(--gray-50) 100%)', padding: '9rem 0 6rem' }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1.25rem', borderRadius: '30px', background: 'rgba(0, 52, 146, 0.08)', color: 'var(--blue-900)', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1.75rem', border: '1px solid rgba(0, 52, 146, 0.15)' }}>
              <span>🏆 Organisme Certifié Qualiopi</span>
              <span>•</span>
              <span style={{ color: 'var(--gold-dark)' }}>France Compétences (RS7351, RS7344, RS6776)</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1.15, marginBottom: '1.75rem', letterSpacing: '-0.03em' }}>
              Réduisez le stress durablement et renforcez la performance de vos équipes.
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--gray-600)', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto 2.5rem' }}>
              Formations certifiantes (<strong>Santé Mentale / TOP®</strong>, <strong>Intelligence Artificielle</strong>, <strong>Réseaux Sociaux</strong>) &amp; Solutions de <strong>Digitalisation sur-mesure</strong> pour dirigeants, managers et indépendants.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link 
                href="/contact" 
                className="btn btn-primary" 
                style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, fontSize: '1.05rem', padding: '1.1rem 2.5rem', boxShadow: '0 8px 24px rgba(255, 59, 59, 0.3)' }}
              >
                Demander un diagnostic gratuit (15 min) ⚡
              </Link>
              
              <a 
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20diagnostic%20rapide%20pour%20une%20formation%20ou%20un%20projet." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn" 
                style={{ background: '#25D366', color: 'white', fontWeight: 700, fontSize: '1.05rem', padding: '1.1rem 2rem', border: 'none' }}
              >
                💬 Échanger sur WhatsApp
              </a>
            </div>

            {/* Quick Proof Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--gray-600)', fontWeight: 600 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#25D366' }}>✓</span> Prise en charge OPCO &amp; FAF possible
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#25D366' }}>✓</span> 100% Pratique &amp; Actionnable
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#25D366' }}>✓</span> Accompagnement humain personnalisé
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOC PROBLÈMES MÉTIER (LES ENJEUX B2B) ────────────────────── */}
      <section className="section" style={{ background: 'white', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="label" style={{ color: 'var(--red-600)' }}>Les défis concrets des organisations</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>
              Les freins qui bloquent votre croissance et épuisent vos équipes
            </h2>
            <p>Dirigeants de PME, managers et indépendants font face aux mêmes urgences au quotidien :</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--red-600)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🧠</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Charge mentale &amp; Stress</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Absentéisme, fatigue décisionnelle, risques psychosociaux (RPS) et baisse de lucidité en période de forte tension.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--gold-dark)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤖</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Retard sur l&apos;adoption de l&apos;IA</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Vos concurrents automatisent déjà leurs tâches. Le manque de méthode et l&apos;AI Act 2025 créent une fracture de compétitivité.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--blue-700)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📱</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Visibilité &amp; Acquisition au hasard</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Publier sur les réseaux sans stratégie ni régularité, sans convertir l&apos;audience en chiffre d&apos;affaires réel.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--blue-900)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚙️</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Process manuels &amp; Pertes de temps</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Absence de digitalisation, outils non synchronisés et manque d&apos;une présence web qui vend 24h/24.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOS 4 PÔLES D'OFFRES FUSIONNÉES ───────────────────────────── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="label">Nos Domaines d&apos;Expertise</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>
              Des solutions concrètes pour transformer votre activité
            </h2>
            <p>Formations certifiantes reconnues par l&apos;État et prestations digitales sur-mesure.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            
            {/* Offre 1 : Méthode TOP & Santé Mentale */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', display: 'flex', flexDirection: 'column', borderTop: '5px solid var(--blue-900)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🧘</span>
                <span style={{ background: 'var(--blue-50)', color: 'var(--blue-900)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  21h / 7h • Intra &amp; Inter
                </span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Santé Mentale &amp; Méthode TOP®
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                Techniques d&apos;Optimisation du Potentiel issues des armées. Apprenez à réguler votre stress, optimiser votre sommeil et maintenir votre concentration sous pression.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', color: 'var(--gray-700)' }}>
                <li>✓ Formation FI TOP® (21h) &amp; FB-TOP (7h)</li>
                <li>✓ Prévention des RPS &amp; Qualité de Vie au Travail (QVT)</li>
                <li>✓ Animé par Mélissa, formatrice TOP® certifiée</li>
              </ul>
              <Link href="/formations/fi-top" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)' }}>
                Découvrir la méthode TOP® →
              </Link>
            </div>

            {/* Offre 2 : IA Générative & Business */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', display: 'flex', flexDirection: 'column', borderTop: '5px solid var(--gold-dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🤖</span>
                <span style={{ background: '#fdfbf7', color: 'var(--gold-dark)', border: '1px solid var(--gold)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  RS7344 &amp; RS6776
                </span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Intelligence Artificielle Certifiante
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                Maîtrisez l&apos;IA pour votre entreprise. Gagnez 2h par jour, créez vos assistants sur-mesure, automatisez vos process et sécurisez vos données (AI Act).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', color: 'var(--gray-700)' }}>
                <li>✓ Parcours Dirigeants PME (RS7344) &amp; Indépendants (RS6776)</li>
                <li>✓ Méthodologie pratique sans jargon technique</li>
                <li>✓ Validation en J+21 devant jury professionnel</li>
              </ul>
              <Link href="/formations/ia" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--gold-dark)', color: 'white', fontWeight: 700 }}>
                Voir les parcours IA certifiants →
              </Link>
            </div>

            {/* Offre 3 : Réseaux Sociaux & Communication */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', display: 'flex', flexDirection: 'column', borderTop: '5px solid var(--red-600)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>📱</span>
                <span style={{ background: 'var(--red-100)', color: 'var(--red-600)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  RS7351 Certifiant
                </span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Réseaux Sociaux &amp; Acquisition
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                Structurez votre présence digitale. Maîtrisez Canva, CapCut pour vos Reels, Meta Business Suite et Waalaxy pour prospecter sur LinkedIn.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', color: 'var(--gray-700)' }}>
                <li>✓ 5+1 modules avec accompagnement individualisé</li>
                <li>✓ Stratégie éditoriale &amp; calendrier de diffusion prêts</li>
                <li>✓ Certification reconnue France Compétences</li>
              </ul>
              <Link href="/formations/reseaux-sociaux" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--red-600)', color: 'white', fontWeight: 700 }}>
                Programme Réseaux Sociaux →
              </Link>
            </div>

            {/* Offre 4 : Solutions Digitales & Dev Entreprise */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', display: 'flex', flexDirection: 'column', borderTop: '5px solid #25D366' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🚀</span>
                <span style={{ background: '#eafaf1', color: '#128C7E', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  Sur-mesure B2B
                </span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Création Web, Apps &amp; Digitalisation
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                Augmentez votre chiffre d&apos;affaires grâce à des plateformes web ultra-rapides, des applications métier et l&apos;automatisation de vos flux de travail.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', color: 'var(--gray-700)' }}>
                <li>✓ Sites vitrines &amp; plateformes e-commerce à forte conversion</li>
                <li>✓ Digitalisation de process &amp; intégration CRM / Odoo</li>
                <li>✓ Audit et sensibilisation à la cybersécurité</li>
              </ul>
              <Link href="/entreprises" className="btn" style={{ width: '100%', justifyContent: 'center', background: '#128C7E', color: 'white', fontWeight: 700 }}>
                Découvrir nos solutions entreprises →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── L'ÉQUIPE PÉDAGOGIQUE & PROJETS ────────────────────────────── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Accompagnement Humain</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>
              Deux experts dédiés à votre réussite
            </h2>
            <p>Une pédagogie active basée sur le terrain, l&apos;écoute et la mise en pratique immédiate.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Mélissa */}
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem', fontWeight: 800 }}>
                M
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>Mélissa</h3>
              <p style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Directrice Pédagogique &amp; Formatrice TOP®
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Praticienne certifiée TOP®, experte en gestion du stress, régulation cognitive et prévention des risques psychosociaux.
              </p>
              <a href="tel:+33767246825" className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
                📞 07 67 24 68 25
              </a>
            </div>

            {/* Renaud */}
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem', fontWeight: 800 }}>
                R
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>Renaud</h3>
              <p style={{ color: 'var(--blue-600)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Expert Transformation Digitale &amp; IA
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Spécialiste de l&apos;automatisation métier, de l&apos;intégration des technologies IA et du développement de solutions web pour PME.
              </p>
              <a href="tel:+33674797509" className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
                📞 06 74 79 75 09
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREUVES & QUALIOPI ────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--blue-50)', borderTop: '1px solid var(--blue-100)', borderBottom: '1px solid var(--blue-100)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="label" style={{ color: 'var(--blue-600)' }}>Gage de Qualité Officiel</span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--blue-900)', marginBottom: '1rem' }}>
                Organisme de Formation Certifié Qualiopi
              </h2>
              <p style={{ color: 'var(--gray-700)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                La certification Qualiopi atteste de la rigueur de nos processus pédagogiques et vous permet de solliciter des financements auprès de votre OPCO, de France Travail ou des fonds d&apos;assurance formation (FAF).
              </p>
              <Link href="/qualite" className="btn btn-primary" style={{ background: 'var(--blue-900)' }}>
                Consulter notre engagement qualité →
              </Link>
            </div>

            <div className="card" style={{ padding: '2.5rem', background: 'white' }}>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>Nos Engagements Pédagogiques</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-700)' }}>
                <li>✓ <strong>Taux de satisfaction :</strong> 100% de retours positifs sur nos sessions</li>
                <li>✓ <strong>Accessibilité :</strong> Formations adaptables aux personnes en situation de handicap</li>
                <li>✓ <strong>Pratique immédiate :</strong> Chaque apprenant repart avec ses propres livrables</li>
                <li>✓ <strong>Certifications reconnues :</strong> Enregistrées à France Compétences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANNIÈRE CTA FINAL ────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1.5rem' }}>
            Échange sans engagement
          </span>
          <h2 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '1.5rem' }}>
            Faisons le point sur votre projet en 15 minutes
          </h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Que vous souhaitiez former vos managers, intégrer l&apos;IA dans vos équipes ou développer un outil digital, nous vous orientons vers la solution la plus rentable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              href="/contact" 
              className="btn btn-primary" 
              style={{ background: 'var(--red-600)', color: 'white', padding: '1.1rem 2.5rem', fontWeight: 800, fontSize: '1.05rem' }}
            >
              Demander mon diagnostic gratuit ⚡
            </Link>
            <a 
              href="https://wa.me/33767246825" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost" 
              style={{ color: '#25D366', borderColor: '#25D366', background: 'rgba(37,211,102,0.1)' }}
            >
              💬 WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
