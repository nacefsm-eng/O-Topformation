import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions Entreprises & Digitalisation — Ô'TOP Formation",
  description: "Accompagnement B2B complet : Formations Qualiopi (Santé Mentale/TOP®, IA, Réseaux Sociaux), Création de sites web/apps pour augmenter le CA, et digitalisation des process.",
};

export default function Entreprises() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--blue-100)', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'white' }}>Accueil</Link>
            <span className="breadcrumb-sep" style={{ margin: '0 0.5rem' }}>›</span>
            <span>Solutions Entreprises</span>
          </div>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1rem' }}>
            🏢 Accompagnement B2B Global • Organisme Déclaré (NDA en cours) · Porté par Eloqone
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.5rem' }}>
            Performance Humaine & Digitalisation sur-mesure pour votre Entreprise
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.2rem', maxWidth: '850px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Nous combinons l'optimisation du potentiel humain (Santé mentale, méthode TOP® anti-stress) et la transformation digitale (Création de sites web/apps, IA opérationnelle, Réseaux sociaux) pour faire exploser votre rentabilité.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact?subject=Entreprise_B2B" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2rem', fontWeight: 800 }}>
              Demander un diagnostic d'entreprise gratuit (15 min) ⚡
            </Link>
            <a href="https://wa.me/33767246825" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: '#25D366', borderColor: '#25D366', background: 'rgba(37,211,102,0.1)' }}>
              💬 Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 4 Piliers d'Intervention B2B */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="label">Nos 4 Piliers d'Intervention</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>Un partenaire unique pour votre croissance</h2>
            <p>Du bien-être de vos salariés à l'automatisation technique de vos ventes.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Pilier 1 : Santé Mentale & QVT */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--blue-900)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧘</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>1. Santé Mentale & Prévention RPS</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Formations intra-entreprise aux Techniques d'Optimisation du Potentiel (TOP®). Réduisez l'absentéisme, prévenez le burn-out et améliorez la concentration sous forte pression.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Formations intra 7h / 21h dans vos locaux</li>
                <li>✓ Ateliers QVT (gestion du sommeil, micro-sieste, stress express)</li>
                <li>✓ Conférences & séminaires d'entreprise</li>
                <li>✓ Prise en charge OPCO possible</li>
              </ul>
            </div>

            {/* Pilier 2 : Création Web & Applications pour le CA */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--gold-dark)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>2. Création de Sites & Applications</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Conception de plateformes web modernes, sites vitrines premium et applications métier sur mesure conçues pour convertir vos visiteurs et augmenter immédiatement votre chiffre d'affaires.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Sites vitrines & tunnels de vente haute conversion</li>
                <li>✓ Applications web & mobiles métier</li>
                <li>✓ Design responsive & référencement SEO optimisé</li>
                <li>✓ Suivi des conversions & tracking publicitaire</li>
              </ul>
            </div>

            {/* Pilier 3 : IA & Automatisation des Process */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--red-600)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>3. Digitalisation & Automatisation IA</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Faites gagner 10h par semaine à vos équipes. Nous connectons vos outils, automatisons vos tâches administratives et formons vos équipes à l'utilisation sécurisée de l'IA (RS7344).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Connexion CRM, facturation & webhooks automatisés</li>
                <li>✓ Formation certifiante IA pour dirigeants & collaborateurs</li>
                <li>✓ Conformité AI Act européen (calendrier d&apos;application 2025-2026)</li>
                <li>✓ Assistants IA internes personnalisés</li>
              </ul>
            </div>

            {/* Pilier 4 : Réseaux Sociaux & Visibilité B2B */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid #25D366' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>4. Communication & Acquisition Social Media</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Développez la notoriété de votre marque et générez des prospects qualifiés sur LinkedIn, Meta et Google My Business grâce à notre programme préparant à la certification RS7351.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Stratégie éditoriale B2B et calendrier de diffusion</li>
                <li>✓ Formation aux outils graphiques et vidéo (Canva, CapCut)</li>
                <li>✓ Prospection automatisée LinkedIn (Waalaxy)</li>
                <li>✓ Préparation à la certification France Compétences RS7351</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie en 3 étapes */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Notre Approche</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>Comment nous intervenons</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.25rem' }}>1</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Audit & Diagnostic Gratuit</h4>
              <p style={{ fontSize: '0.95rem' }}>Échange de 15 min pour cartographier vos blocages (stress, pertes de temps, manque de visibilité).</p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.25rem' }}>2</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Proposition & Financement</h4>
              <p style={{ fontSize: '0.95rem' }}>Plan d'action chiffré avec montage de dossier de prise en charge financière (OPCO / FAF / Plan de formation).</p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--red-600)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.25rem' }}>3</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Déploiement & Mesure du ROI</h4>
              <p style={{ fontSize: '0.95rem' }}>Formation de vos collaborateurs ou livraison clé-en-main de vos outils avec suivi des résultats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Besoin de faire progresser votre entreprise ?</h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Prenez contact directement avec nos experts pour un diagnostic téléphonique personnalisé de 15 minutes sans aucun engagement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Demander mon diagnostic d'entreprise (15 min) ⚡
            </Link>
            <a href="tel:+33767246825" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Mélissa : 07 67 24 68 25
            </a>
            <a href="tel:+33674797509" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Renaud : 06 74 79 75 09
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
