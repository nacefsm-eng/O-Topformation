'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HomePageClient() {
  return (
    <main style={{ background: '#ffffff', color: '#1e293b' }}>
      {/* ─── HERO MINIMALISTE & HAUT DE GAMME ──────────────────────────── */}
      <section className="hero-section" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Badges Officiels Minimalistes */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.45rem 1.25rem', borderRadius: '50px', background: 'white', border: '1px solid #cbd5e1', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--blue-900)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🎓 Formation Certifiante RS6776
              </span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)' }}>
                France Compétences
              </span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#16a34a' }}>
                Qualiopi
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', fontWeight: 900, color: 'var(--blue-900)', lineHeight: 1.18, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Intégrer l&apos;IA générative dans son activité professionnelle
            </h1>

            <p style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: '#475569', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto 2.5rem' }}>
              Une formation pour aider les indépendants, coachs, thérapeutes et dirigeants à <strong>automatiser leurs tâches</strong>, <strong>produire des contenus pros</strong> et <strong>développer leur activité</strong> grâce à l&apos;IA générative responsable.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link 
                href="/contact" 
                className="btn btn-primary" 
                style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, fontSize: '1rem', padding: '1rem 2.25rem', borderRadius: '50px', boxShadow: '0 10px 25px rgba(255, 59, 59, 0.25)' }}
              >
                Réserver mon diagnostic gratuit (15 min) ⚡
              </Link>
              
              <a 
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20IA%20RS6776." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn" 
                style={{ background: 'white', color: '#128C7E', fontWeight: 700, fontSize: '1rem', padding: '1rem 1.85rem', borderRadius: '50px', border: '1.5px solid #25D366' }}
              >
                💬 WhatsApp direct
              </a>
            </div>

            {/* Chiffres clés / Repères */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', padding: '1.75rem', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--blue-900)' }}>16h</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Vidéo à son rythme</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--gold-dark)' }}>3 Modules</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Certifiants RS6776</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--red-600)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Sans prérequis tech</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#16a34a' }}>OPCO / FAF</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Financements possibles</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── POURQUOI CETTE FORMATION ──────────────────────────────────── */}
      <section className="section" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="label" style={{ color: 'var(--blue-600)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', display: 'block' }}>
                Le constat terrain
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: 'var(--blue-900)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
                Libérez-vous des tâches chronophages qui freinent votre croissance.
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Il y a toujours ces tâches qui grignotent votre semaine sans faire avancer votre activité : un message à reformuler, une relance à envoyer, un contenu à produire dans l&apos;urgence. Mis bout à bout, <strong>c&apos;est du temps que vous ne récupérez jamais</strong>.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Certains indépendants et dirigeants ont commencé à s&apos;en libérer grâce à l&apos;IA générative, pour se recentrer sur ce qui crée vraiment de la valeur.
              </p>
              
              <div style={{ padding: '1rem 1.25rem', background: '#f8fafc', borderLeft: '4px solid var(--gold-dark)', borderRadius: '0 8px 8px 0', fontSize: '0.88rem', color: '#64748b', fontStyle: 'italic' }}>
                Source : OCDE (2025), L&apos;adoption de l&apos;IA par les petites et moyennes entreprises.
              </div>
            </div>

            <div className="image-wrapper" style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <img 
                src="/card-ai.jpg" 
                alt="Équipe collaborative travaillant sur l'intelligence artificielle en entreprise" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── À QUI S'ADRESSE CETTE FORMATION ──────────────────────────── */}
      <section className="section" style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="label" style={{ color: 'var(--blue-600)' }}>Public concerné</span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--blue-900)' }}>Une formation accessible sans prérequis technique</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
              Le parcours part des usages de base pour aller pas à pas jusqu&apos;à la mise en œuvre stratégique.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            
            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Indépendants &amp; Freelances</h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>
                Pour gérer sa communication, automatiser ses propositions commerciales et gagner un temps précieux chaque semaine.
              </p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🌿</div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Coachs &amp; Thérapeutes</h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>
                Pour créer ses supports d&apos;ateliers, rédiger ses articles et structurer son accompagnement en toute sérénité.
              </p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Dirigeants de TPE / PME</h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>
                Pour booster la productivité de ses collaborateurs et se mettre en conformité avec le cadre légal européen (AI Act).
              </p>
            </div>

            <div className="card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--blue-900)', marginBottom: '0.5rem' }}>En Reconversion</h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>
                Pour acquérir une compétence clé reconnue par l&apos;État et valorisable immédiatement sur le marché du travail.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CE QU'ON EN RETIRE (BÉNÉFICES CONCRETS) ──────────────────── */}
      <section className="section" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="label" style={{ color: 'var(--gold-dark)' }}>Compétences Clés</span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--blue-900)' }}>Ce que vous maîtriserez à l&apos;issue du parcours</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Une boîte à outils professionnelle réutilisable bien après la formation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid var(--blue-900)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🎯 Identifier les opportunités</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Repérer les tâches concrètes et répétitives où l&apos;IA générative apporte le plus de valeur ajoutée.</p>
            </div>

            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid var(--gold-dark)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🛠️ Choisir les bons outils</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Sélectionner les solutions adaptées à votre besoin réel, votre budget et votre niveau sans vous disperser.</p>
            </div>

            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid var(--red-600)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>✍️ Produire des contenus pros</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Textes, visuels, supports de communication et landing pages sans compétence graphique particulière.</p>
            </div>

            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid #16a34a' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🤖 Créer son assistant IA sur-mesure</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Configurer un assistant GPT personnalisé pour automatiser vos tâches récurrentes en toute autonomie.</p>
            </div>

            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid var(--blue-700)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>🔒 Rester en conformité légale</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Maîtriser la confidentialité des données, le règlement AI Act et ne jamais exposer vos données sensibles.</p>
            </div>

            <div style={{ padding: '1.75rem', background: '#f8fafc', borderRadius: '14px', borderLeft: '4px solid var(--gold-dark)' }}>
              <h4 style={{ color: 'var(--blue-900)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>⚡ Progresser à son rythme</h4>
              <p style={{ fontSize: '0.92rem', color: '#475569' }}>Un format e-learning asynchrone flexible de 16h avec validation progressive des acquis et QCMs.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROGRAMME DÉTAILLÉ EN 3 MODULES ──────────────────────────── */}
      <section id="programme" className="section" style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="label" style={{ color: 'var(--red-600)' }}>Programme Certifiant</span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--blue-900)' }}>Trois modules pour maîtriser les usages essentiels</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Certification visée : RS6776 — France Compétences.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
            
            {/* Module 1 */}
            <div className="card" style={{ background: 'white', padding: '2.5rem', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--blue-900)', background: 'var(--blue-50)', padding: '0.35rem 1rem', borderRadius: '30px' }}>
                  MODULE 01
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Stratégie &amp; Organisation</span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Stratégie d&apos;implémentation de l&apos;IA
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                <strong>Objectif :</strong> Poser les bases d&apos;une intégration réfléchie de l&apos;IA dans son activité. Découverte des principales interfaces d&apos;IA générative, repérage des tâches quotidiennes optimisables, choix des outils selon son budget et élaboration d&apos;un plan d&apos;action personnel.
              </p>
              <div style={{ background: '#f1f5f9', padding: '0.85rem 1.25rem', borderRadius: '10px', fontSize: '0.88rem', color: '#334155' }}>
                <strong>📌 Cas pratique :</strong> Méthodes pour optimiser sa visibilité et transférer les techniques de Community Management à sa propre activité.
              </div>
            </div>

            {/* Module 2 */}
            <div className="card" style={{ background: 'white', padding: '2.5rem', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--gold-dark)', background: '#fdfbf7', border: '1px solid var(--gold-light)', padding: '0.35rem 1rem', borderRadius: '30px' }}>
                  MODULE 02
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Production &amp; Assistants</span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Création de contenus rédactionnels et visuels
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                <strong>Objectif :</strong> Produire des contenus professionnels de qualité en autonomie. Structure d&apos;un prompt efficace (contexte, rôle, contraintes, itération), génération d&apos;images IA et configuration de son propre assistant GPT personnalisé.
              </p>
              <div style={{ background: '#fdfbf7', padding: '0.85rem 1.25rem', borderRadius: '10px', fontSize: '0.88rem', color: '#334155', border: '1px solid var(--gold-light)' }}>
                <strong>📌 Cas pratique :</strong> Générer la landing page d&apos;une entreprise, créer ses visuels de réseaux sociaux et corriger un prompt à risque.
              </div>
            </div>

            {/* Module 3 */}
            <div className="card" style={{ background: 'white', padding: '2.5rem', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--red-600)', background: 'var(--red-100)', padding: '0.35rem 1rem', borderRadius: '30px' }}>
                  MODULE 03
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Sécurité &amp; AI Act</span>
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Conformité, éthique et réglementaire
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                <strong>Objectif :</strong> Utiliser l&apos;IA générative en toute sécurité et en conformité avec le cadre légal. Confidentialité des données clients (ne jamais divulguer d&apos;informations sensibles), focus sur le règlement européen AI Act et validation critique des contenus.
              </p>
              <div style={{ background: '#fee2e2', padding: '0.85rem 1.25rem', borderRadius: '10px', fontSize: '0.88rem', color: '#991b1b' }}>
                <strong>📌 Point d&apos;actualité :</strong> Le règlement européen (AI Act) impose des obligations de littératie IA applicables depuis 2025 pour tout professionnel.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LE REGARD HUMAIN VS MONOCULTURE COGNITIVE ──────────────────── */}
      <section className="section" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '3.5rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0, 52, 146, 0.2)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', display: 'block' }}>
              Notre différenciateur pédagogique
            </span>
            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1.25rem' }}>
              Le regard humain pour éviter la monoculture cognitive
            </h2>
            <p style={{ color: 'var(--blue-100)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Lorsque la majorité des utilisateurs s&apos;appuient sur les mêmes modèles d&apos;IA, leurs productions tendent à converger vers des formulations standardisées. 
            </p>
            <p style={{ color: 'var(--blue-100)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Chez <strong>O&apos;TOP Formation</strong>, nous combinons l&apos;e-learning avec un accompagnement humain régulier (Masterclass optionnelle avec Mélissa &amp; Renaud) pour préserver la singularité et l&apos;esprit critique de votre pratique.
            </p>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
              Référence : Bommasani, Creel, Kumar, Jurafsky &amp; Liang (2022), NeurIPS — Algorithmic Monoculture and Outcome Homogenization.
            </div>
          </div>
        </div>
      </section>

      {/* ─── L'ÉQUIPE & CONTACT DIRECT ─────────────────────────────────── */}
      <section className="section" style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="label" style={{ color: 'var(--blue-600)' }}>Contact Direct</span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--blue-900)' }}>Échangez avec vos formateurs</h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
              Une question sur le programme ou les financements ? Nous vous répondons directement par téléphone ou WhatsApp.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            
            {/* Mélissa */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'white', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '3px solid var(--blue-900)' }}>
                <img src="/team-melyssa.png" alt="Mélissa, directrice O'TOP Formation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.25rem', marginBottom: '0.2rem' }}>Mélissa</h3>
              <p style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>Directrice &amp; Formatrice</p>
              <a href="tel:+33767246825" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)', fontSize: '0.88rem' }}>
                📞 07 67 24 68 25
              </a>
            </div>

            {/* Renaud */}
            <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'white', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.25rem', border: '3px solid var(--gold-dark)' }}>
                <img src="/team-regis.png" alt="Renaud, expert digital et IA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'var(--blue-900)', fontSize: '1.25rem', marginBottom: '0.2rem' }}>Renaud</h3>
              <p style={{ color: 'var(--blue-600)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>Expert Digital &amp; IA</p>
              <a href="tel:+33674797509" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--gold-dark)', color: 'white', fontSize: '0.88rem' }}>
                📞 06 74 79 75 09
              </a>
            </div>

          </div>

          {/* Bannière CTA Finale */}
          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/contact" 
              className="btn btn-primary" 
              style={{ background: 'var(--red-600)', color: 'white', padding: '1.1rem 2.5rem', fontWeight: 800, fontSize: '1.05rem', borderRadius: '50px', boxShadow: '0 10px 30px rgba(255, 59, 59, 0.28)' }}
            >
              Réserver mon diagnostic gratuit (15 min) ⚡
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
