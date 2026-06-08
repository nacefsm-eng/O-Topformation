'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const modules = [
  {
    title: 'Module 1 — Acquérir les connaissances de base TOP®',
    items: [
      'La méthode TOP® : origines, historique, champ d\'applications',
      'La respiration : objectifs et techniques TOP®',
      'Pratique des respirations',
      'La Relaxation Musculaire Directe (RMD)',
      'La météo TOP®',
      'La respiration régulatrice',
    ],
  },
  {
    title: 'Module 2 — Gérer son Stress et comprendre sa Fatigue / Sommeil',
    items: [
      'Le stress et ses mécanismes',
      'La Relaxation Paradoxale (RPa)',
      'La boîte à tracas',
      'La Relaxation Musculaire Indirecte (RMI)',
      'Le sommeil et la fatigue',
      'La balade sensorielle réelle et imaginaire',
    ],
  },
  {
    title: 'Module 3 — TOP® et Motivation',
    items: [
      'La motivation et ses leviers',
      'Renforcement Positif (R+)',
      'La Dynamisation Psycho-Physiologique Personnalisée (DPP)',
      'La Relaxation Psycho-Physiologique Personnalisée (R3P)',
      'La Préparation Mentale de la Réussite (PMR)',
      'Le Signal d\'Ajustement Réflexe (SAR)',
      'La Répétition Mentale (RM)',
    ],
  },
];

const modalitesCards = [
  { icon: '📚', title: 'Apports théoriques', desc: 'Supports PDF envoyés J-5' },
  { icon: '🤝', title: 'Exercices pratiques', desc: 'En binôme ou en groupe' },
  { icon: '🎭', title: 'Mises en situation supervisées', desc: '' },
  { icon: '🎓', title: 'Démonstrations par le formateur', desc: '' },
];

const evaluationSteps = [
  {
    label: 'Avant',
    desc: 'Questionnaire d\'analyse des besoins + questionnaire de positionnement',
  },
  {
    label: 'Pendant',
    desc: 'QCM à mi-parcours',
  },
  {
    label: 'Après',
    desc: 'QCM final (70 % minimum) + certificat de compétences + questionnaires de satisfaction',
  },
];

export default function FiTopPage() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Formation Initiale TOP® (FI TOP®)';
  }, []);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep"> / </span>
            <Link href="/formations">Formations</Link>
            <span className="breadcrumb-sep"> / </span>
            <span>FI TOP®</span>
          </nav>

          {/* Badge */}
          <span className="badge badge-phare">FORMATION PHARE</span>

          {/* Title */}
          <h1 className="page-hero-title">Formation Initiale TOP® (FI TOP®)</h1>

          {/* Subtitle */}
          <p className="page-hero-subtitle">
            La formation complète pour intégrer les Techniques d&apos;Optimisation du Potentiel
            dans votre vie professionnelle et personnelle.
          </p>

          {/* Info pills */}
          <div className="hero-pills">
            <span className="hero-pill">⏱ 21 heures</span>
            <span className="hero-pill">👥 Présentiel ou Distanciel</span>
            <span className="hero-pill">💶 Financement OPCO possible</span>
            <span className="hero-pill">📋 Aucun prérequis</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container section-gap">
        <div className="content-grid">

          {/* ── LEFT COLUMN ── */}
          <main className="content-main">

            {/* Info Table */}
            <section className="content-section">
              <h2 className="section-title">Informations générales</h2>
              <table className="info-table">
                <tbody>
                  <tr><th>Durée</th><td>21 heures (3 jours séparés d'au moins 1 semaine)</td></tr>
                  <tr><th>Format</th><td>Présentiel ou Distanciel (visio)</td></tr>
                  <tr><th>Tarif</th><td>Sur devis — Financement OPCO possible</td></tr>
                  <tr><th>Public cible</th><td>Professionnels, managers, collectivités</td></tr>
                  <tr><th>Prérequis</th><td>Aucun</td></tr>
                  <tr><th>Effectif</th><td>Groupe (max 12 participants)</td></tr>
                  <tr><th>Horaires</th><td>9h00 – 18h00 (pauses incluses)</td></tr>
                  <tr><th>Inscription</th><td>Jusqu&apos;à 48h avant la formation</td></tr>
                </tbody>
              </table>
            </section>

            {/* Programme détaillé — Accordion */}
            <section className="content-section">
              <h2 className="section-title">Programme détaillé</h2>
              <div className="accordion">
                {modules.map((mod, i) => (
                  <div key={i} className={`accordion-item${openModule === i ? ' accordion-item--open' : ''}`}>
                    <button
                      className="accordion-trigger"
                      onClick={() => toggleModule(i)}
                      aria-expanded={openModule === i}
                    >
                      <span>{mod.title}</span>
                      <span className="accordion-icon">{openModule === i ? '−' : '+'}</span>
                    </button>
                    {openModule === i && (
                      <div className="accordion-body">
                        <ul className="module-list">
                          {mod.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Objectifs pédagogiques */}
            <section className="content-section">
              <h2 className="section-title">Objectifs pédagogiques</h2>
              <ul className="check-list">
                <li>Intégrer la méthode FI TOP® pour faciliter l&apos;expression de ses potentialités</li>
                <li>Adapter les techniques à sa personnalité et à ses besoins au quotidien</li>
                <li>Détecter les signes précurseurs de la fatigue et avoir les outils pour la prévenir</li>
                <li>Comprendre les mécanismes du sommeil et l&apos;origine de la fatigue</li>
                <li>Construire son plan d&apos;action et de progrès individualisé sur le long terme</li>
              </ul>
            </section>

            {/* Modalités pédagogiques */}
            <section className="content-section">
              <h2 className="section-title">Modalités pédagogiques</h2>
              <div className="modalites-grid">
                {modalitesCards.map((card, i) => (
                  <div key={i} className="modalite-card">
                    <span className="modalite-icon">{card.icon}</span>
                    <strong className="modalite-title">{card.title}</strong>
                    {card.desc && <p className="modalite-desc">{card.desc}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Modalités d'évaluation */}
            <section className="content-section">
              <h2 className="section-title">Modalités d&apos;évaluation</h2>
              <div className="eval-steps">
                {evaluationSteps.map((step, i) => (
                  <div key={i} className="eval-step">
                    <div className="eval-step-label">{step.label}</div>
                    <div className="eval-step-desc">{step.desc}</div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ── RIGHT COLUMN — STICKY CARD ── */}
          <aside className="content-aside">
            <div className="booking-card">
              <h3 className="booking-card-title">Réservez votre place</h3>

              {/* Financement */}
              <div style={{ background: '#f0f7ff', borderRadius: '10px', padding: '1rem', border: '1px solid #bfdbfe' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a3c8f', marginBottom: '0.4rem' }}>💶 Financement disponible</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li style={{ fontSize: '0.82rem', color: '#475569' }}>✅ OPCO (plan de formation entreprise)</li>
                  <li style={{ fontSize: '0.82rem', color: '#475569' }}>✅ Financement personnel</li>
                  <li style={{ fontSize: '0.82rem', color: '#475569' }}>✅ France Travail (selon profil)</li>
                  <li style={{ fontSize: '0.82rem', color: '#475569' }}>🔄 CPF — en cours (Qualiopi)</li>
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="booking-ctas">
                <Link href="/contact" className="btn btn-primary btn-block">
                  Demander un devis
                </Link>
                <Link href="/reservation" className="btn btn-ghost btn-block">
                  📅 Entretien gratuit (15 min)
                </Link>
              </div>

              {/* Info items */}
              <ul className="booking-info-list">
                <li><span>📞</span> 07 67 24 68 25</li>
                <li><span>📧</span> formation.rmcf@gmail.com</li>
                <li><span>📍</span> Ollioules (Var) ou distanciel</li>
                <li><span>✅</span> Aucun prérequis</li>
              </ul>

              <hr className="booking-divider" />

              {/* Calendly CTA */}
              <a
                href="/reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-block"
              >
                📅 Réserver un entretien gratuit
              </a>
            </div>
          </aside>

        </div>
      </div>

      {/* ── BOTTOM CTA SECTION ── */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2 className="cta-title">Prêt à développer votre potentiel ?</h2>
          <p className="cta-subtitle">
            Rejoignez les professionnels qui ont déjà transformé leur quotidien grâce à la méthode TOP®.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Nous contacter
            </Link>
            <a
              href="/reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              Entretien gratuit
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── INLINE STYLES ── */}
      <style jsx>{`
        /* ─── Hero ─────────────────────────────────────────── */
        .page-hero {
          background: #0f1e3c;
          color: #fff;
          padding: 4rem 0 3rem;
        }
        .breadcrumb {
          font-size: 0.85rem;
          color: #a0aec0;
          margin-bottom: 1rem;
        }
        .breadcrumb a {
          color: #a0aec0;
          text-decoration: none;
        }
        .breadcrumb a:hover {
          color: #fff;
        }
        .breadcrumb-sep {
          margin: 0 0.4rem;
        }
        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .badge-phare {
          background: #e8a000;
          color: #fff;
        }
        .page-hero-title {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 1rem;
        }
        .page-hero-subtitle {
          font-size: 1.1rem;
          color: #cbd5e0;
          max-width: 640px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .hero-pill {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.875rem;
        }

        /* ─── Layout ────────────────────────────────────────── */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-gap {
          padding: 4rem 1.5rem;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .content-aside {
            order: -1;
          }
        }
        .content-main {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .content-aside {
          position: sticky;
          top: 7rem;
        }

        /* ─── Sections ──────────────────────────────────────── */
        .content-section {
          /* intentionally empty — gap handled by column flex-gap */
        }
        .section-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f1e3c;
          margin: 0 0 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }

        /* ─── Info Table ────────────────────────────────────── */
        .info-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .info-table th,
        .info-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }
        .info-table th {
          background: #f7f9fc;
          font-weight: 600;
          color: #0f1e3c;
          width: 38%;
          white-space: nowrap;
        }
        .info-table td {
          color: #4a5568;
        }

        /* ─── Accordion ─────────────────────────────────────── */
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .accordion-item {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        .accordion-item--open {
          border-color: #0f1e3c;
        }
        .accordion-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: #f7f9fc;
          border: none;
          cursor: pointer;
          font-size: 0.975rem;
          font-weight: 600;
          color: #0f1e3c;
          text-align: left;
          gap: 1rem;
          transition: background 0.2s;
        }
        .accordion-item--open .accordion-trigger {
          background: #0f1e3c;
          color: #fff;
        }
        .accordion-trigger:hover {
          background: #e8edf5;
        }
        .accordion-item--open .accordion-trigger:hover {
          background: #162848;
        }
        .accordion-icon {
          font-size: 1.25rem;
          font-weight: 400;
          flex-shrink: 0;
        }
        .accordion-body {
          padding: 1.25rem;
          background: #fff;
        }
        .module-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .module-list li {
          padding-left: 1.5rem;
          position: relative;
          color: #4a5568;
          line-height: 1.5;
        }
        .module-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #0f1e3c;
        }

        /* ─── Check list ────────────────────────────────────── */
        .check-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .check-list li {
          padding-left: 2rem;
          position: relative;
          color: #4a5568;
          line-height: 1.55;
        }
        .check-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: #2f855a;
          font-size: 1rem;
        }

        /* ─── Modalités grid ────────────────────────────────── */
        .modalites-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 500px) {
          .modalites-grid {
            grid-template-columns: 1fr;
          }
        }
        .modalite-card {
          background: #f7f9fc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .modalite-icon {
          font-size: 1.6rem;
        }
        .modalite-title {
          font-size: 0.95rem;
          color: #0f1e3c;
        }
        .modalite-desc {
          font-size: 0.85rem;
          color: #718096;
          margin: 0;
        }

        /* ─── Evaluation steps ──────────────────────────────── */
        .eval-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .eval-step {
          display: flex;
          gap: 1.25rem;
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .eval-step:last-child {
          border-bottom: none;
        }
        .eval-step-label {
          min-width: 80px;
          font-weight: 700;
          color: #0f1e3c;
          padding-top: 0.1rem;
        }
        .eval-step-desc {
          color: #4a5568;
          line-height: 1.5;
        }

        /* ─── Booking card ──────────────────────────────────── */
        .booking-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .booking-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f1e3c;
          margin: 0;
        }
        .booking-price {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }
        .booking-price-amount {
          font-size: 2rem;
          font-weight: 800;
          color: #0f1e3c;
        }
        .booking-price-mention {
          font-size: 0.9rem;
          color: #718096;
        }
        .booking-ctas {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .booking-info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .booking-info-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #4a5568;
        }
        .booking-divider {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 0;
        }

        /* ─── Buttons ───────────────────────────────────────── */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: 2px solid transparent;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          line-height: 1.2;
        }
        .btn-block {
          width: 100%;
        }
        .btn-primary {
          background: #0f1e3c;
          color: #fff;
          border-color: #0f1e3c;
        }
        .btn-primary:hover {
          background: #162848;
          border-color: #162848;
        }
        .btn-ghost {
          background: transparent;
          color: #0f1e3c;
          border-color: #0f1e3c;
        }
        .btn-ghost:hover {
          background: #f0f4f8;
        }
        .btn-outline {
          background: transparent;
          color: #2b6cb0;
          border-color: #2b6cb0;
        }
        .btn-outline:hover {
          background: #ebf4ff;
        }
        .btn-lg {
          padding: 0.9rem 2rem;
          font-size: 1rem;
        }

        /* ─── CTA section ───────────────────────────────────── */
        .cta-section {
          background: #0f1e3c;
          color: #fff;
          padding: 5rem 1.5rem;
          text-align: center;
        }
        .cta-inner {
          max-width: 680px;
          margin: 0 auto;
        }
        .cta-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 800;
          margin: 0 0 1rem;
        }
        .cta-subtitle {
          font-size: 1.05rem;
          color: #a0aec0;
          margin: 0 0 2rem;
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .cta-actions .btn-primary {
          background: #fff;
          color: #0f1e3c;
          border-color: #fff;
        }
        .cta-actions .btn-primary:hover {
          background: #e2e8f0;
        }
        .cta-actions .btn-ghost {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
        }
        .cta-actions .btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: #fff;
        }
      `}</style>
    </>
  );
}
