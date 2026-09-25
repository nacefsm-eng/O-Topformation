import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formations Certifiantes IA — O'TOP Formations",
  description: "Formations certifiantes France Compétences en Intelligence Artificielle (RS7344 & RS6776) par O'TOP Formations (Qualiopi). Pour dirigeants, TPE/PME et indépendants.",
};

export default function FormationIAPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-subpage" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #051937 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1.25rem' }}>
              🎓 Certifications France Compétences RS7344 &amp; RS6776 • Formation portée par Eloqone
            </span>
            <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
              Utilisez l’IA pour gagner du temps sur les tâches qui ralentissent votre activité.
            </h1>
            <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Formations pratiques pour indépendants, dirigeants et équipes : automatisez vos tâches récurrentes, créez vos assistants IA et adoptez des usages plus sécurisés.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <span>✓ Parcours adapté à votre profil</span>
              <span>•</span>
              <span>✓ Coaching sur cas réels selon la formule</span>
              <span>•</span>
              <span>✓ Financement étudié avec Eloqone</span>
            </div>
            <div style={{ padding: '0.85rem 1.25rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '0.82rem', color: '#93c5fd', marginBottom: '2rem', lineHeight: 1.5 }}>
              ℹ️ Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact?subject=IA_Diagnostic" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, padding: '1rem 2rem' }}>
                Réserver mon diagnostic gratuit <span style={{ whiteSpace: 'nowrap' }}>15 min ⚡</span>
              </Link>
              <Link href="/financement" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
                Étudier mes possibilités de financement →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers / Highlights */}
      <section className="section-sm" style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--blue-900)' }}>2 Parcours</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Certifiants Métiers</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>RS7344 (Entreprises) &amp; RS6776 (Indépendants)</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-dark)' }}>5h Incluses</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Coaching 1-to-1</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Individuel ou groupe selon le parcours</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--red-600)' }}>J+21</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Validation Rapide</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Dossier &amp; soutenance devant jury</span>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#25D366' }}>100% Pratique</div>
              <p style={{ fontWeight: 600, color: 'var(--gray-700)', margin: '0.25rem 0' }}>Aucun prérequis tech</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Outils configurés immédiatement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Les 2 Parcours IA */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Deux parcours adaptés à vos objectifs</span>
            <h2>Choisissez votre programme certifiant</h2>
            <p>Conçus pour l&apos;action et le résultat immédiat dans votre entreprise ou activité freelance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {/* Parcours 1: Dirigeants / TPE */}
            <div className="card" style={{ background: '#ffffff', border: '2px solid var(--blue-900)', display: 'flex', flexDirection: 'column', color: '#1e293b' }}>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="label" style={{ color: 'var(--blue-600)', margin: 0 }}>Parcours Stratégique &amp; Opérationnel</span>
                  <span style={{ background: 'var(--blue-900)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                    RS7344 — Dirigeants &amp; Managers
                  </span>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--blue-900)' }}>Déployer l’IA dans votre entreprise, sans désorganiser vos équipes</h3>
                <p style={{ marginBottom: '1.5rem', color: '#334155' }}>
                  Pour les dirigeants de TPE/PME et leurs collaborateurs stratégiques souhaitant structurer et piloter un véritable projet d&apos;intégration IA rentable.
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--blue-900)' }}>Programme en 5 Modules :</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 1 :</strong> Identifier les opportunités d&apos;intégration &amp; méthode STEP</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 2 :</strong> Plan d&apos;intégration, budget réaliste &amp; conformité AI Act</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 3 :</strong> Implémentation opérationnelle (marketing, admin, prompts)</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 4 :</strong> Conduite du changement &amp; charte éthique interne</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 5 :</strong> Mesure de performance, KPI &amp; cycle d&apos;optimisation PDCA</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--blue-600)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Coaching :</strong> 5h de coaching inclus (individuel ou petit groupe, selon le parcours)</li>
                </ul>

                <div style={{ background: 'var(--blue-50)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--blue-900)' }}>
                  <strong>🏆 Résultat concret :</strong> Vous repartez avec un plan d&apos;action chiffré, des outils connectés et votre certification RS7344 en poche.
                </div>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--gray-200)', background: 'var(--gray-50)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a 
                  href="https://buy.stripe.com/3cI4gBfiQ9tubOB8E9b7y03" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: 'white', fontWeight: 700 }}
                >
                  S&apos;inscrire / Régler en ligne (1 490 €) 💳
                </a>
                <Link href="/contact?subject=IA_Dirigeant_RS7344" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Étudier mes possibilités de financement OPCO →
                </Link>
              </div>
            </div>

            {/* Parcours 2: Indépendants / IA Générative */}
            <div className="card" style={{ background: '#ffffff', border: '2px solid var(--gold)', display: 'flex', flexDirection: 'column', color: '#1e293b' }}>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="label" style={{ color: 'var(--gold-dark)', margin: 0 }}>Parcours Pratique &amp; Productivité</span>
                  <span style={{ background: 'var(--gold-dark)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                    RS6776 — Indépendants &amp; Créateurs
                  </span>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--blue-900)' }}>Créez vos assistants IA et récupérez du temps chaque semaine</h3>
                <p style={{ marginBottom: '1.5rem', color: '#334155' }}>
                  Pour coachs, thérapeutes, consultants et indépendants souhaitant produire leur contenu en autonomie et déléguer les tâches chronophages à des assistants IA.
                </p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--blue-900)' }}>Programme en 3 Modules Pratiques (16h vidéo + 5h coaching) :</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 1 :</strong> Stratégie d&apos;implémentation &amp; choix des outils selon budget</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 2 :</strong> Création de contenus rédactionnels, visuels &amp; GPTs sur mesure</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Module 3 :</strong> Sécurité, conformité RGPD &amp; non-exposition des données</li>
                  <li style={{ display: 'flex', gap: '0.5rem', color: '#334155' }}><span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>✓</span> <strong style={{ color: '#0f172a' }}>Coaching :</strong> 5h de coaching inclus (individuel ou petit groupe, selon le parcours)</li>
                </ul>

                <div style={{ background: '#fdfbf7', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--gray-800)', border: '1px solid var(--gold-light)' }}>
                  <strong>⚡ Gain direct :</strong> Produisez seul vos visuels et textes pros, sans graphiste ni rédacteur externe, en toute sécurité.
                </div>
              </div>

              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--gray-200)', background: 'var(--gray-50)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a 
                  href="https://buy.stripe.com/5kQ4gB6MkfRSaKxaMhb7y01" 
                  className="btn" 
                  style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #d97706, #059669)', color: 'white', fontWeight: 700 }}
                >
                  S&apos;inscrire / Régler en ligne (1 490 €) 💳
                </a>
                <Link href="/contact?subject=IA_Generative_RS6776" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Étudier mes possibilités de financement →
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
            <span className="label">Méthode Pédagogique O&apos;TOP</span>
            <h2>Un accompagnement humain qui fait la différence</h2>
            <p>Contrairement aux simples cours en ligne, nous combinons autonomie et suivi direct par nos formateurs pour garantir la réussite de votre certification.</p>
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
              <p>Accès à une bibliothèque de prompts professionnels testés et prêts à l&apos;emploi pour votre secteur.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
              <h4>Masterclass &amp; Suivi</h4>
              <p>Sessions en petit groupe et tutorat individuel avec nos formateurs pour débloquer chaque cas pratique.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
              <h4>Jury Professionnel</h4>
              <p>Mise en situation réelle et soutenance orale pour valider officiellement votre certification France Compétences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Prêt(e) à faire de l&apos;IA un véritable levier pour votre activité ?</h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Échangez directement avec un formateur pour auditer vos besoins et identifier les financements mobilisables.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact?subject=IA_Diagnostic" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2.5rem', fontWeight: 800 }}>
              Réserver mon diagnostic gratuit <span style={{ whiteSpace: 'nowrap' }}>15 min ⚡</span>
            </Link>
            <a href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20%C3%AAtre%20rappel%C3%A9%20par%20un%20formateur%20IA." target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              📞 Être rappelé(e) par un formateur
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
