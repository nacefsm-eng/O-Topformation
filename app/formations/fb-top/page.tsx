'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function FbTop() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', societe: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const modules = [
    {
      title: 'Module 1 — Initiation à la Respiration TOP®',
      content: 'Introduction aux fondements des Techniques d\'Optimisation du Potentiel. Découverte de la respiration régulatrice et de ses effets immédiats sur le système nerveux. Pratique guidée des respirations de base. Premières expériences de relaxation musculaire.'
    },
    {
      title: 'Module 2 — Gestion du Stress & Concentration',
      content: 'Comprendre les mécanismes du stress et identifier ses propres signes précurseurs. Introduction à la Relaxation Musculaire Directe (RMD). Techniques de concentration et de recentrage. La météo TOP® pour auto-évaluer son état mental.'
    },
    {
      title: 'Module 3 — Motivation & Préparation Mentale',
      content: 'Les fondamentaux de la motivation et du renforcement positif. Introduction à l\'imagerie mentale et à la visualisation. Le dialogue interne : identifier et transformer ses pensées limitantes. Construction d\'un plan d\'action personnel.'
    },
    {
      title: 'Module 4 — Récupération & Bien-être',
      content: 'Techniques de récupération physique et mentale. Le lien entre sommeil, fatigue et performance. La balade sensorielle : une technique de relaxation profonde. Bilan et questions-réponses.'
    },
    {
      title: 'Module 5 — Confiance en soi & Dialogue interne',
      content: 'Le Signal d\'Ajustement Réflexe (SAR) pour stopper les pensées négatives. Introduction au Renforcement Positif (R+). Exercices pratiques de renforcement de la confiance. Échanges d\'expériences en groupe.'
    },
    {
      title: 'Module 6 — Bilan & Plan d\'action personnel',
      content: 'Révision des techniques apprises. Chaque participant construit son plan d\'action personnel avec les outils qui lui correspondent. Discussion sur l\'intégration dans le quotidien. Perspectives vers la formation complète FI TOP®.'
    },
    {
      title: 'Module 7 — Mise en pratique & Clôture',
      content: 'Séance de pratique intégrée combinant respirations, relaxation et imagerie mentale. QCM d\'évaluation. Remise des attestations de participation. Présentation des prochaines étapes (FI TOP® 21h).'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/formations/fi-top">Formations</Link>
            <span className="breadcrumb-sep">›</span>
            <span>FB-TOP</span>
          </div>
          <span style={{ display: 'inline-block', background: 'rgba(200,35,26,0.2)', color: '#ff6b6b', borderRadius: '50px', padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 700, marginBottom: '1rem', border: '1px solid rgba(200,35,26,0.3)' }}>DÉCOUVERTE</span>
          <h1>Formation FB-TOP</h1>
          <p>Une journée découverte pour s&apos;initier aux Techniques d&apos;Optimisation du Potentiel. Idéal avant de s&apos;engager dans la Formation Initiale complète.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {[['⏱', '7 heures'], ['👥', 'Max 12 participants'], ['📍', 'Ollioules (Var)'], ['📋', 'Aucun prérequis']].map(([icon, text], i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', padding: '0.4rem 1rem', fontSize: '0.85rem', fontWeight: 600, color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>{icon} {text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>

            {/* Left */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Programme de la journée</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.75 }}>
                La formation FB-TOP est une journée d&apos;initiation aux Techniques d&apos;Optimisation du Potentiel. En 7 modules de 1 heure, vous découvrez les fondamentaux des TOP® et repartez avec des outils concrets immédiatement applicables.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                {modules.map((m, i) => (
                  <div key={i} className={`accordion-item ${openModule === i ? 'open' : ''}`}>
                    <button className={`accordion-trigger ${openModule === i ? 'open' : ''}`} onClick={() => setOpenModule(openModule === i ? null : i)}>
                      <span>{m.title}</span>
                      <span className={`accordion-icon ${openModule === i ? 'open' : ''}`}>+</span>
                    </button>
                    {openModule === i && <div className="accordion-content">{m.content}</div>}
                  </div>
                ))}
              </div>

              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Objectifs de la journée</h2>
              <ul className="check-list" style={{ marginBottom: '3rem' }}>
                <li>Découvrir les 4 piliers des Techniques d&apos;Optimisation du Potentiel</li>
                <li>Expérimenter les premières techniques de respiration et relaxation</li>
                <li>Comprendre le lien entre stress, concentration et performance</li>
                <li>Pratiquer l&apos;imagerie mentale et le dialogue interne positif</li>
                <li>Repartir avec un plan d&apos;action personnel immédiatement applicable</li>
                <li>Décider en connaissance de cause de poursuivre avec la FI TOP® (21h)</li>
              </ul>

              <div style={{ background: 'var(--blue-50)', borderRadius: 'var(--radius)', padding: '2rem', border: '1px solid rgba(26,60,143,0.15)' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>🎓 Et après la FB-TOP ?</h3>
                <p style={{ marginBottom: '1rem' }}>La Formation Initiale TOP® (FI TOP®) de 21 heures vous permet d&apos;aller beaucoup plus loin et d&apos;intégrer pleinement la méthode dans votre vie professionnelle et personnelle.</p>
                <Link href="/formations/fi-top" className="btn btn-primary">Découvrir la FI TOP® →</Link>
              </div>
            </div>

            {/* Right sticky card */}
            <div style={{ position: 'sticky', top: '7rem' }}>
              <div style={{ background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray-200)', overflow: 'hidden' }}>
                <div style={{ background: 'var(--blue-900)', padding: '2rem', color: 'white', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.5rem' }}>Formation d&apos;initiation</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--gold)' }}>Sur devis</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>1 journée — 7 modules</div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem', display: 'flex' }}>Demander un devis →</Link>
                  <a href="/reservation" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>📅 Entretien découverte</a>

                  <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[['📍', 'Ollioules (Var)'], ['👥', 'Maximum 12 participants'], ['📋', 'Aucun prérequis'], ['✅', 'Attestation de participation'], ['📄', 'Supports de cours fournis']].map(([icon, text], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                        <span>{icon}</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-200)' }}>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gray-400)', marginBottom: '0.75rem', textAlign: 'center' }}>Des questions ?</div>
                    <a href="tel:+33767246825" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-700)', justifyContent: 'center' }}>📞 07 67 24 68 25</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSCRIPTION FORM */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-header">
            <span className="label">Inscription</span>
            <h2>S&apos;inscrire à la FB-TOP</h2>
            <p>Remplissez ce formulaire et nous vous recontactons sous 24h pour confirmer votre inscription.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius)', border: '2px solid #25D366', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✅</span>
              <h3 style={{ marginBottom: '0.5rem' }}>Demande envoyée !</h3>
              <p>Merci pour votre intérêt. Mélyssa ou Régis vous contactent sous 24h pour confirmer votre inscription et vous transmettre toutes les informations pratiques.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-header">
                <h3 style={{ fontSize: '1.25rem' }}>Formulaire d&apos;inscription</h3>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Formation FB-TOP — Journée d&apos;initiation</p>
              </div>
              <div className="form-body">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Prénom *</label>
                    <input className="form-input" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} required placeholder="Votre prénom" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nom *</label>
                    <input className="form-input" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} required placeholder="Votre nom" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-input" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required placeholder="votre@email.fr" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone *</label>
                    <input type="tel" className="form-input" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} required placeholder="06 XX XX XX XX" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Société / Organisation</label>
                  <input className="form-input" value={form.societe} onChange={e => setForm(f => ({ ...f, societe: e.target.value }))} placeholder="Votre entreprise (optionnel)" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Question particulière, contexte, disponibilités..." />
                </div>
                <label className="form-rgpd">
                  <input type="checkbox" required />
                  <span>J&apos;accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de cette demande d&apos;inscription. Conformément au RGPD.</span>
                </label>
              </div>
              <div className="form-footer" style={{ justifyContent: 'flex-end' }}>
                <button type="submit" className="btn btn-primary">Envoyer ma demande →</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <span className="label label-gold">Prochaine étape</span>
            <h2 className="cta-title">Prêt(e) à aller plus loin ?</h2>
            <p className="cta-subtitle">La Formation Initiale TOP® (21h) est la formation de référence pour intégrer pleinement la méthode dans votre vie professionnelle.</p>
            <div className="cta-actions">
              <Link href="/formations/fi-top" className="btn btn-gold">Découvrir la FI TOP® →</Link>
              <Link href="/contact" className="btn btn-outline-white">Demander un devis</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
