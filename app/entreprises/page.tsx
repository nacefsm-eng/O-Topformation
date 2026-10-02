import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions Entreprises & Prestations Digitales — Ô’TOP Formations",
  description: "Formations IA, réseaux sociaux et conduite du changement pour vos équipes. Prestations digitales : création de sites web, automatisation et SEO/GEO.",
  alternates: {
    canonical: "https://otopformations.com/entreprises",
  },
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
            ⏱ Accompagnement B2B &amp; formation professionnelle · Partenaire Eloq-One certifié Qualiopi
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Accompagnement, formation et solutions digitales pour vos équipes
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.2rem', maxWidth: '850px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Développez les compétences de vos collaborateurs, automatisez vos processus métiers et préservez l’équilibre de vos équipes avec des solutions concrètes adaptées aux réalités de votre entreprise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/commander?offre=entreprise" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2rem', fontWeight: 800 }}>
              Demander un devis entreprise →
            </Link>
            <a 
              href="https://calendly.com/otop-formation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost" 
              style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}
            >
              Prendre RDV (15 min) ⚡
            </a>
            <a 
              href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20%C3%A9change%20concernant%20les%20solutions%20entreprises." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#25D366', color: 'white', fontWeight: 700 }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 4 Piliers d'Intervention B2B */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <span className="label">Nos 4 Piliers d’Intervention</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>Un accompagnement complet pour vos équipes</h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '1.05rem', marginTop: '0.5rem' }}>De l’acculturation de vos collaborateurs aux prestations digitales sur mesure.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Pilier 1 : Formation IA & Acculturation Métier */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--blue-900)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>1. Formation IA &amp; Intégration Opérationnelle</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Fondamentaux de l’IA, prompt engineering avancé et intégration dans vos processus métiers. Nous formons vos équipes à l’utilisation productive, responsable et sécurisée de l’IA générative.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--gray-800)', borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <li>✓ Fondamentaux de l’IA &amp; cas pratiques immédiats</li>
                <li>✓ Création de prompts métiers et assistants personnalisés</li>
                <li>✓ Préparation aux certifications RS6776 ou RS7344 (passage en option)</li>
                <li>✓ Financement OPCO possible sous réserve d’accord</li>
              </ul>
            </div>

            {/* Pilier 2 : Conduite du Changement & Méthode TOP® */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--red-600)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧭</div>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>2. Conduite du Changement &amp; Méthode TOP®</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  L’intégration de l’IA bouscule les repères et suscite des craintes. Nous associons la montée en compétences techniques aux ateliers Méthode TOP® pour réguler la charge mentale, sécuriser l’adhésion et préserver la lucidité décisionnelle.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--gray-800)', borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <li>✓ Accompagnement managérial à la conduite du changement</li>
                <li>✓ Gestion de la pression, concentration et adaptabilité</li>
                <li>✓ Récupération active et maintien de la performance</li>
                <li>✓ <strong>Offre hybride « IA &amp; Humain » sur devis</strong></li>
              </ul>
            </div>

            {/* Pilier 3 : Communication & Acquisition Social Media */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid #25D366', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>3. Communication &amp; Réseaux Sociaux</h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Développez la visibilité de votre entreprise et formez vos équipes à créer du contenu régulier sur LinkedIn, Instagram et Meta.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--gray-800)', borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <li>✓ Stratégie éditoriale et calendrier de diffusion</li>
                <li>✓ Création de contenus visuels et vidéo (Canva, CapCut)</li>
                <li>✓ Prospection LinkedIn ciblée et premières campagnes Meta Ads</li>
                <li>✓ Préparation à la certification RS7351 (passage en option)</li>
              </ul>
            </div>

            {/* Pilier 4 : Prestations digitales (hors formation) */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '5px solid var(--gold-dark)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                  4. Prestations digitales (hors formation)
                </h3>
                <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Sites web, applications sur mesure, SEO/GEO et automatisation de processus — prestations digitales réalisées par nos experts (non finançables par un OPCO).
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--gray-800)', borderTop: '1px solid var(--gray-200)', paddingTop: '1.25rem', marginTop: 'auto' }}>
                <li>✓ Sites vitrines &amp; tunnels de vente haute conversion</li>
                <li>✓ Applications web &amp; interfaces métier réactives</li>
                <li>✓ Connexion CRM, facturation &amp; webhooks automatisés (n8n, Make)</li>
                <li>✓ Référencement SEO &amp; visibilité dans les moteurs IA (GEO)</li>
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
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Diagnostic de 15 minutes</h4>
              <p style={{ fontSize: '0.95rem' }}>Échange avec Mélissa ou Renaud pour cartographier vos besoins d’équipe ou de digitalisation.</p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.25rem' }}>2</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Proposition &amp; Convention</h4>
              <p style={{ fontSize: '0.95rem' }}>Programme sur-mesure et convention établie par notre partenaire Eloq-One, certifié Qualiopi, pour transmission à votre OPCO.</p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--red-600)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.25rem' }}>3</div>
              <h4 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem' }}>Déploiement &amp; Accompagnement</h4>
              <p style={{ fontSize: '0.95rem' }}>Formation de vos collaborateurs avec suivi individuel par un expert ou livraison de vos solutions techniques.</p>
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
            <Link href="/commander?offre=entreprise" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Demander un devis entreprise →
            </Link>
            <a 
              href="https://calendly.com/otop-formation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost" 
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              Prendre RDV (15 min) ⚡
            </a>
            <a 
              href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20%C3%A9change%20concernant%20les%20solutions%20entreprises." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#25D366', color: 'white', fontWeight: 700 }}
            >
              💬 WhatsApp
            </a>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
              Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
