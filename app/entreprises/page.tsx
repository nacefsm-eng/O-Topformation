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
            🏢 Accompagnement B2B &amp; Formation Professionnelle · Actions portées avec notre partenaire Qualiopi Eloqone
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.5rem' }}>
            Accompagnement, formation et solutions digitales pour vos équipes
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.2rem', maxWidth: '850px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Développez les compétences de vos collaborateurs, automatisez vos processus métiers et préservez l’équilibre de vos équipes avec des solutions concrètes adaptées aux réalités de votre entreprise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact?subject=Entreprise_B2B" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2rem', fontWeight: 800 }}>
              Réserver mon diagnostic gratuit <span style={{ whiteSpace: 'nowrap' }}>15 min ⚡</span>
            </Link>
            <a href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20%C3%A9change%20concernant%20les%20solutions%20entreprises." target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: '#25D366', borderColor: '#25D366', background: 'rgba(37,211,102,0.1)' }}>
              💬 Être rappelé(e) sur WhatsApp
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
            <p>De l'acculturation de vos collaborateurs à l'automatisation technique de vos processus.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Pilier 1 : Digitalisation & Automatisation IA */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--blue-900)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>1. Digitalisation &amp; Automatisation IA</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Fondamentaux de l&apos;IA, prompt engineering avancé et automatisation de vos flux de travail. Nous connectons vos outils, supprimons les tâches chronophages et formons vos équipes à l&apos;utilisation productive et sécurisée de l&apos;IA.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Fondamentaux de l&apos;IA &amp; cas pratiques immédiats</li>
                <li>✓ Connexion CRM, facturation &amp; webhooks automatisés (n8n, Make)</li>
                <li>✓ Création de GPTs et assistants métiers personnalisés</li>
                <li>✓ Conformité AI Act européen &amp; sécurité des données</li>
              </ul>
            </div>

            {/* Pilier 2 : Communication & Acquisition Social Media */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid #25D366' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>2. Communication &amp; Acquisition Social Media</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Développez la visibilité de votre entreprise et générez des prospects qualifiés sur LinkedIn, Meta et Google grâce à notre méthodologie de social selling et notre cursus préparant à la certification RS7351.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Stratégie éditoriale B2B et calendrier de diffusion</li>
                <li>✓ Création de contenus visuels et vidéo (Canva, CapCut)</li>
                <li>✓ Prospection ciblée et acquisition de prospects sans budget pub</li>
                <li>✓ Préparation à la certification France Compétences RS7351</li>
              </ul>
            </div>

            {/* Pilier 3 : Création de Sites & Applications */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--gold-dark)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>3. Création de Sites &amp; Applications</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Conception de plateformes web modernes, sites vitrines premium et applications métier sur mesure conçues pour convertir vos visiteurs et augmenter immédiatement votre chiffre d&apos;affaires.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Sites vitrines &amp; tunnels de vente haute conversion</li>
                <li>✓ Applications web &amp; interfaces métier réactives</li>
                <li>✓ Design responsive &amp; référencement SEO local optimisé</li>
                <li>✓ Suivi des conversions &amp; tracking analytique</li>
              </ul>
            </div>

            {/* Pilier 4 : Conduite du Changement & Qualité de Vie au Travail */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--red-600)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧘</div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>4. Conduite du Changement &amp; Qualité de Vie au Travail</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Accompagner les collaborateurs pour faire comprendre et adopter les bénéfices des nouveaux outils, optimiser les processus et préserver l&apos;énergie collective grâce à la Méthode TOP® (Techniques d&apos;Optimisation du Potentiel).
              </p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-700)' }}>
                <li>✓ Accompagnement managérial à la conduite du changement</li>
                <li>✓ Régulation du stress professionnel &amp; récupération flash (SRF)</li>
                <li>✓ Ateliers QVCT &amp; cohésion d&apos;équipe en entreprise</li>
                <li>✓ Prise en charge OPCO possible dans le plan de développement</li>
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
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Besoin de faire progresser votre entreprise ?</h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Prenez contact directement avec nos formateurs pour un diagnostic personnalisé de 15 minutes sans engagement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Réserver mon diagnostic gratuit <span style={{ whiteSpace: 'nowrap' }}>15 min ⚡</span>
            </Link>
            <a href="tel:+33767246825" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Mélissa : 07 67 24 68 25
            </a>
            <a href="tel:+33674797509" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Renaud : 06 74 79 75 09
            </a>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
              Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
