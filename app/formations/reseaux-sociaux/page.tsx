import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formation Préparant à la Certification Réseaux Sociaux (RS7351) — O'TOP Formations",
  description: "Formation préparant à la certification enregistrée au Répertoire Spécifique France Compétences RS7351 : Structurer et piloter sa communication sur les réseaux sociaux. Canva, CapCut, Meta Business Suite, Waalaxy.",
};

export default function FormationReseauxSociauxPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-subpage" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #111d4a 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <span className="badge" style={{ background: 'rgba(255, 59, 59, 0.2)', color: '#ff8585', border: '1px solid var(--red-600)', marginBottom: '1.25rem' }}>
              📱 Préparation Certification France Compétences RS7351 • Organisme Partenaire
            </span>
            <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Structurez, produisez et pilotez votre communication sur les réseaux sociaux
            </h1>
            <p style={{ color: 'var(--blue-100)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Une formation préparant à la certification pour dirigeants de TPE/PME, créateurs et indépendants. Arrêtez de publier au hasard : maîtrisez les outils pros (Canva, CapCut, Meta Suite, Waalaxy) et transformez votre audience en clients.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact?subject=Reseaux_Sociaux_RS7351" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, padding: '1rem 2rem' }}>
                Demander un diagnostic Réseaux Sociaux (15 min) ⚡
              </Link>
              <a
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20R%C3%A9seaux%20Sociaux%20RS7351."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ color: '#25D366', borderColor: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}
              >
                💬 Échanger sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-sm" style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--blue-900)' }}>5 + 1</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Modules Certifiants</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Avec accompagnement humain</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>RS7351</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>France Compétences</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Éligible financements OPCO</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--red-600)' }}>1h</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Mise en Situation</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Évaluation devant 2 jurys pros</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#25D366' }}>14 / 20</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Exigence & Qualité</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Note minimale certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Le Programme Détaillé */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Programme Pratique</span>
            <h2>5 modules pour professionnaliser vos réseaux sans jargon</h2>
            <p>Chaque module débouche sur un livrable opérationnel directement réutilisable pour votre entreprise.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Module 1 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--blue-900)' }}>
              <div style={{ color: 'var(--blue-600)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Module 1</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Veille, Tendances & Funnel Marketing</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Comprendre la place des réseaux dans votre tunnel de vente, le social selling et la méthode des 5 poignées de main.
              </p>
              <div style={{ background: 'var(--blue-50)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--blue-900)' }}>
                <strong>📌 Bénéfice :</strong> Une veille structurée et une vision claire des bonnes pratiques de votre secteur.
              </div>
            </div>

            {/* Module 2 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--blue-700)' }}>
              <div style={{ color: 'var(--blue-600)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Module 2</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Stratégie Social Media & Ligne Éditoriale</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Définir vos objectifs, mapper le parcours client, choisir les bons réseaux et organiser un planning de diffusion régulier.
              </p>
              <div style={{ background: 'var(--blue-50)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--blue-900)' }}>
                <strong>📌 Bénéfice :</strong> Une stratégie éditoriale claire et actionnable, prête à être déployée.
              </div>
            </div>

            {/* Module 3 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--gold-dark)' }}>
              <div style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Module 3</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Création de Contenus (Canva, CapCut, IA)</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Prise en main de Canva pour les visuels, CapCut pour les Reels/TikTok, rédaction optimisée et respect de l'accessibilité numérique.
              </p>
              <div style={{ background: '#fdfbf7', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--gray-800)', border: '1px solid var(--gold-light)' }}>
                <strong>📌 Bénéfice :</strong> Un lot de contenus (textes, carrousels, vidéos) prêts à être publiés immédiatement.
              </div>
            </div>

            {/* Module 4 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--red-600)' }}>
              <div style={{ color: 'var(--red-600)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Module 4</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Diffusion, Modération & Publicité Meta</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Programmation avec Meta Business Suite, gestion de communauté, Google My Business et premières campagnes sponsorisées (Meta Ads).
              </p>
              <div style={{ background: 'var(--red-100)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--red-600)' }}>
                <strong>📌 Bénéfice :</strong> Diffusion automatisée et acquisition ciblée avec des budgets maîtrisés.
              </div>
            </div>

            {/* Module 5 */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #25D366' }}>
              <div style={{ color: '#128C7E', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Module 5</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Tableau de Reporting & Optimisation</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Mesure du ROI, études de cas concrètes de marques, conformité RGPD européenne et ajustement continu des résultats.
              </p>
              <div style={{ background: '#eafaf1', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: '#128C7E' }}>
                <strong>📌 Bénéfice :</strong> Un tableau de bord de pilotage pour mesurer chaque euro ou heure investie.
              </div>
            </div>

            {/* Certification */}
            <div className="card" style={{ padding: '2rem', border: '2px solid var(--gold)', background: 'linear-gradient(180deg, #ffffff 0%, var(--gray-50) 100%)' }}>
              <div style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Certification Finale</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Jury Professionnel (1h)</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Présentation de votre dossier de communication appliquée à votre propre entreprise devant 2 professionnels du digital.
              </p>
              <div style={{ background: 'var(--blue-900)', color: 'white', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', textAlign: 'center', fontWeight: 700 }}>
                🎓 Parchemin Officiel RS7351 délivré
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats & Intra-Entreprise */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', background: 'white', padding: '3.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-200)' }}>
            <span className="label" style={{ color: 'var(--blue-600)' }}>Proposition de Partenariat & Formations d'Équipe</span>
            <h2 style={{ marginBottom: '1rem', color: 'var(--blue-900)' }}>Construisons ensemble votre offre de communication digitale</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: 'var(--blue-600)', fontWeight: 800 }}>✓</span>
                <div><strong>Pour les organismes et prescripteurs :</strong> Intégrez cette formation certifiante RS7351 à votre catalogue pour vos clients dirigeants, créateurs et freelances.</div>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: 'var(--blue-600)', fontWeight: 800 }}>✓</span>
                <div><strong>Pour votre propre structure :</strong> Formez vos collaborateurs et formateurs à la communication digitale pour faire rayonner votre marque.</div>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <Link href="/contact?subject=Partenariat_RS7351" className="btn btn-primary" style={{ background: 'var(--blue-900)' }}>
                Échanger avec Mélissa et Renaud ⚡
              </Link>
              <a href="tel:+33767246825" className="btn" style={{ border: '1.5px solid var(--gray-300)', color: 'var(--gray-700)' }}>
                📞 07 67 24 68 25
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Prêt(e) à faire décoller votre visibilité ?</h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Obtenez votre diagnostic gratuit de 15 minutes pour évaluer vos besoins et les possibilités de prise en charge financière.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Demander un diagnostic gratuit (15 min) ⚡
            </Link>
            <a href="https://wa.me/33767246825" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: '#25D366', borderColor: '#25D366' }}>
              💬 WhatsApp direct
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
