'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HomePageClient() {
  return (
    <main>
      {/* ─── HERO SECTION (2 COLONNES VISUELLES) ────────────────────────── */}
      <section className="hero" style={{ background: 'radial-gradient(circle at 90% 10%, rgba(0, 52, 146, 0.08) 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, var(--gray-50) 100%)', padding: '8.5rem 0 5.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Colonne Gauche : Copywriting & CTAs */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(0, 52, 146, 0.08)', color: 'var(--blue-900)', fontSize: '0.82rem', fontWeight: 800, marginBottom: '1.5rem', border: '1px solid rgba(0, 52, 146, 0.15)' }}>
                <span>🏆 Organisme Certifié Qualiopi</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span style={{ color: 'var(--gold-dark)' }}>France Compétences RS7351 / RS7344 / RS6776</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Formez vos équipes, réduisez le stress et accélérez votre transformation digitale.
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Formations certifiantes et accompagnement sur-mesure en <strong>méthode TOP®</strong>, <strong>intelligence artificielle</strong>, <strong>réseaux sociaux</strong> et <strong>digitalisation</strong> pour PME, managers et indépendants.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link 
                  href="/contact" 
                  className="btn btn-primary" 
                  style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, fontSize: '1.05rem', padding: '1rem 2rem', boxShadow: '0 8px 24px rgba(255, 59, 59, 0.28)' }}
                >
                  Réserver mon diagnostic gratuit ⚡
                </Link>
                
                <a 
                  href="#formations" 
                  className="btn" 
                  style={{ background: 'white', color: 'var(--blue-900)', fontWeight: 700, fontSize: '1.05rem', padding: '1rem 1.75rem', border: '1.5px solid var(--blue-900)' }}
                >
                  Voir nos formations ↓
                </a>
              </div>

              {/* 3 Mini Preuves */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--gray-700)', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: '#25D366', fontSize: '1.1rem' }}>✓</span> Certifié Qualiopi
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: '#25D366', fontSize: '1.1rem' }}>✓</span> Financement OPCO / FAF possible
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ color: '#25D366', fontSize: '1.1rem' }}>✓</span> Accompagnement humain 100% sur-mesure
                </div>
              </div>
            </div>

            {/* Colonne Droite : Image Réelle & Badges Flottants */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 52, 146, 0.16)', border: '4px solid white', position: 'relative' }}>
                <img 
                  src="/hero-workshop.jpg" 
                  alt="Mélissa anime un atelier de formation d'équipe dynamique" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Badge Flottant 1 : Qualiopi */}
              <div style={{ position: 'absolute', top: '-15px', right: '-10px', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid var(--gray-100)' }}>
                <span style={{ fontSize: '1.25rem' }}>🏆</span>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--blue-900)' }}>Certifié Qualiopi</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)' }}>Processus certifiés</div>
                </div>
              </div>

              {/* Badge Flottant 2 : Diagnostic 15min */}
              <div style={{ position: 'absolute', bottom: '-20px', left: '-10px', background: 'white', padding: '0.85rem 1.25rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px solid var(--gray-100)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
                  ⏱️
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--blue-900)' }}>15 min d&apos;échange</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)' }}>Pour clarifier votre projet</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BLOC PROBLÈMES MÉTIER (LES ENJEUX B2B) ────────────────────── */}
      <section className="section-sm" style={{ background: 'white', borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <span className="label" style={{ color: 'var(--red-600)' }}>Vos enjeux au quotidien</span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--blue-900)' }}>
              Vos équipes sont sous pression ? Vos outils vous font perdre du temps ?
            </h2>
            <p>Dirigeants de PME, managers et indépendants font face à 4 freins majeurs :</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--red-600)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🧠</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Charge mentale &amp; Stress</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)' }}>
                Risques psychosociaux (RPS), épuisement et perte de lucidité sous tension.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--gold-dark)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🤖</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Retard sur l&apos;IA</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)' }}>
                Manque de méthode, perte de compétitivité et nouvelles exigences AI Act.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--blue-700)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📱</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Acquisition au hasard</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)' }}>
                Publier sans stratégie sur les réseaux sans générer de vrais clients qualifiés.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--blue-900)', background: 'var(--gray-50)' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⚙️</div>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Process manuels</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)' }}>
                Pertes d&apos;heures sur l&apos;administratif et absence d&apos;une présence web qui vend.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contact" style={{ color: 'var(--blue-900)', fontWeight: 800, fontSize: '1rem', textDecoration: 'underline' }}>
              Identifier la priorité de mon entreprise →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4 CARTES FORMATIONS & DIGITAL AVEC IMAGES ─────────────────── */}
      <section id="formations" className="section" style={{ background: 'var(--gray-50)' }}>
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
            <div className="card" style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="/formation-presentiel.png" 
                  alt="Séance de formation méthode TOP en entreprise" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--blue-900)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  21h / 7h • Intra &amp; Inter
                </span>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-600)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Pour managers, soignants &amp; équipes sous tension
                </span>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Santé Mentale &amp; Méthode TOP®
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1 }}>
                  Techniques d&apos;Optimisation du Potentiel issues des forces armées pour réguler le stress et prévenir les RPS.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem', color: 'var(--gray-700)' }}>
                  <li>✓ Régulation cognitive et gestion des émotions</li>
                  <li>✓ Optimisation du sommeil et récupération rapide</li>
                  <li>✓ Animé par Mélissa, formatrice certifiée</li>
                </ul>
                <Link href="/formations/fi-top" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)' }}>
                  Découvrir la méthode TOP® →
                </Link>
              </div>
            </div>

            {/* Offre 2 : IA Générative & Business */}
            <div className="card" style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="/card-ai.jpg" 
                  alt="Utilisation professionnelle d'outils d'intelligence artificielle" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--gold-dark)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  RS7344 &amp; RS6776
                </span>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Pour dirigeants PME &amp; indépendants
                </span>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Intelligence Artificielle Certifiante
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1 }}>
                  Gagnez jusqu&apos;à 2h par jour en automatisant vos process et créant vos assistants IA sur-mesure.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem', color: 'var(--gray-700)' }}>
                  <li>✓ Méthode 100% pratique sans aucun jargon</li>
                  <li>✓ Conformité européenne AI Act 2025 intégrée</li>
                  <li>✓ Validation en J+21 devant jury professionnel</li>
                </ul>
                <Link href="/formations/ia" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--gold-dark)', color: 'white', fontWeight: 700 }}>
                  Voir les parcours IA certifiants →
                </Link>
              </div>
            </div>

            {/* Offre 3 : Réseaux Sociaux & Acquisition */}
            <div className="card" style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="/card-social.jpg" 
                  alt="Création de contenu pour les réseaux sociaux avec smartphone et Canva" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--red-600)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  RS7351 Certifiant
                </span>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--red-600)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Pour freelances, créateurs &amp; TPE
                </span>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Réseaux Sociaux &amp; Acquisition
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1 }}>
                  Structurez votre présence en ligne et maîtrisez Canva, CapCut et Waalaxy pour générer des clients.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem', color: 'var(--gray-700)' }}>
                  <li>✓ 5+1 modules avec accompagnement humain direct</li>
                  <li>✓ Stratégie et calendrier de diffusion prêts</li>
                  <li>✓ Parchemin officiel France Compétences</li>
                </ul>
                <Link href="/formations/reseaux-sociaux" className="btn" style={{ width: '100%', justifyContent: 'center', background: 'var(--red-600)', color: 'white', fontWeight: 700 }}>
                  Programme Réseaux Sociaux →
                </Link>
              </div>
            </div>

            {/* Offre 4 : Solutions Digitales & Dev Entreprise */}
            <div className="card" style={{ background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="/entreprises-equipe.png" 
                  alt="Équipe en réunion autour de solutions digitales d'entreprise" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#128C7E', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  Sur-mesure B2B
                </span>
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#128C7E', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Pour PME &amp; entreprises en croissance
                </span>
                <h3 style={{ color: 'var(--blue-900)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Création Web, Apps &amp; Digitalisation
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.25rem', flex: 1 }}>
                  Augmentez votre chiffre d&apos;affaires grâce à des plateformes web modernes et la digitalisation de vos flux.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem', color: 'var(--gray-700)' }}>
                  <li>✓ Tunnels de vente et sites haute performance</li>
                  <li>✓ Digitalisation CRM, facturation &amp; webhooks</li>
                  <li>✓ Audit et sécurisation des données</li>
                </ul>
                <Link href="/entreprises" className="btn" style={{ width: '100%', justifyContent: 'center', background: '#128C7E', color: 'white', fontWeight: 700 }}>
                  Découvrir nos solutions entreprises →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PREUVES SOCIALES & TÉMOIGNAGES CLIENTS ────────────────────── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label" style={{ color: 'var(--blue-600)' }}>Ils nous font confiance</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>Des résultats mesurables sur le terrain</h2>
            <p>100% de satisfaction sur les sessions dispensées en 2025–2026.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
              <div style={{ color: 'var(--gold-dark)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', color: 'var(--gray-700)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                &ldquo;La formation TOP® a permis à nos cadres de santé de retrouver des nuits calmes et une vraie clarté d&apos;esprit pendant les gardes sous tension.&rdquo;
              </p>
              <div>
                <strong style={{ color: 'var(--blue-900)', display: 'block' }}>Claire D.</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Directrice des Soins — Établissement Hospitalier (PACA)</span>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#128C7E', fontWeight: 700 }}>✓ Résultat : Équipes plus sereines &amp; baisse des arrêts</div>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
              <div style={{ color: 'var(--gold-dark)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', color: 'var(--gray-700)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                &ldquo;Nous avons automatisé nos réponses prospects et le tri administratif grâce au parcours IA. Je gagne personnellement plus de 8 heures par semaine.&rdquo;
              </p>
              <div>
                <strong style={{ color: 'var(--blue-900)', display: 'block' }}>Marc V.</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Dirigeant PME Conseil (12 salariés)</span>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#128C7E', fontWeight: 700 }}>✓ Résultat : 8h gagnées par semaine par collaborateur</div>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem', background: 'var(--gray-50)', border: '1px solid var(--gray-200)' }}>
              <div style={{ color: 'var(--gold-dark)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', color: 'var(--gray-700)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                &ldquo;Partie de zéro sur Canva et CapCut, j&apos;ai validé ma certification RS7351 et signé mes 3 premiers gros contrats grâce à ma nouvelle stratégie LinkedIn.&rdquo;
              </p>
              <div>
                <strong style={{ color: 'var(--blue-900)', display: 'block' }}>Sarah B.</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Consultante Indépendante</span>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#128C7E', fontWeight: 700 }}>✓ Résultat : 3 nouveaux clients signés en 1 mois</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── L'ÉQUIPE AVEC VRAIS PORTRAITS ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <span className="label">Un Duo Complémentaire</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--blue-900)' }}>
              Vos interlocuteurs directs
            </h2>
            <p>Deux spécialistes du terrain qui vous accompagnent de la première discussion jusqu&apos;à l&apos;obtention de votre certification.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Mélissa */}
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center', background: 'white', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--blue-900)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/team-melyssa.png" 
                  alt="Mélissa, directrice pédagogique et formatrice TOP" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>Mélissa</h3>
              <p style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Directrice Pédagogique &amp; Formatrice TOP®
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                &ldquo;J&apos;aide les professionnels à retrouver sérénité et performance mentale grâce à des techniques concrètes éprouvées sur le terrain.&rdquo;
              </p>
              <a href="tel:+33767246825" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)', fontSize: '0.9rem' }}>
                📞 Parler à Mélissa : 07 67 24 68 25
              </a>
            </div>

            {/* Renaud */}
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center', background: 'white', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--gold-dark)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/team-regis.png" 
                  alt="Renaud, expert transformation digitale et IA" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.35rem', marginBottom: '0.25rem' }}>Renaud</h3>
              <p style={{ color: 'var(--blue-600)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Expert Transformation Digitale &amp; IA
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                &ldquo;Mon objectif : connecter vos outils, automatiser vos tâches et vous faire gagner un temps précieux chaque semaine.&rdquo;
              </p>
              <a href="tel:+33674797509" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--gold-dark)', color: 'white', fontSize: '0.9rem' }}>
                📞 Parler à Renaud : 06 74 79 75 09
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BANNIÈRE CTA FINAL ────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--blue-900)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1.5rem' }}>
            Échange direct &amp; sans engagement
          </span>
          <h2 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '1.5rem' }}>
            Faisons le point sur votre projet en 15 minutes
          </h2>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Que vous souhaitiez former vos collaborateurs au stress, intégrer l&apos;IA dans vos équipes ou développer un outil digital, nous vous orientons vers la solution la plus rentable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              href="/contact" 
              className="btn btn-primary" 
              style={{ background: 'var(--red-600)', color: 'white', padding: '1.1rem 2.5rem', fontWeight: 800, fontSize: '1.05rem' }}
            >
              Réserver mon diagnostic gratuit ⚡
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
