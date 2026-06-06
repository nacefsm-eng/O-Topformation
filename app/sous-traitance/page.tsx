'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SousTraitance() {
  const [form, setForm] = useState({
    organisme: '',
    contact: '',
    telephone: '',
    email: '',
    region: '',
    besoins: [] as string[],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleBesoin = (b: string) => {
    setForm(prev => ({
      ...prev,
      besoins: prev.besoins.includes(b) 
        ? prev.besoins.filter(i => i !== b)
        : [...prev.besoins, b]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Sous-traitance</span>
          </div>
          <h1>Partenariats & Sous-traitance</h1>
          <p>Ô&apos;TOP Formation intervient en sous-traitance pédagogique pour les organismes de formation, cabinets de conseil et structures spécialisées.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Nos atouts</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Pourquoi nous confier vos formations TOP® ?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              ['🏅', 'Expertise reconnue', '15 ans d\'expérience dans l\'application des TOP® et un réseau d\'experts certifiés.'],
              ['📑', 'Qualiopi-ready', 'Tous les documents administratifs et pédagogiques (conventions, émargements, évaluations) fournis aux normes Qualiopi.'],
              ['⚙️', 'Gestion autonome', 'Nous gérons l\'animation de A à Z en marque blanche ou sous les couleurs de votre organisme.'],
              ['🎯', 'Adaptabilité', 'Programmes ajustables selon le profil de vos apprenants et les exigences de vos commanditaires.']
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'white', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--blue-900)' }}>{title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="label">Ce que nous fournissons</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>Un process administratif clé en main</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                En tant que sous-traitant, nous savons que la conformité administrative est primordiale pour le maintien de votre certification Qualiopi. Nous nous engageons à vous fournir l&apos;ensemble des éléments de traçabilité.
              </p>
              <ul className="check-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>Convention de sous-traitance détaillée</li>
                <li>Support de cours et livret d&apos;accueil apprenant</li>
                <li>Feuilles d&apos;émargement (numériques ou papier)</li>
                <li>Questionnaires de positionnement et d&apos;évaluation</li>
                <li>Attestation de réalisation / compétences</li>
                <li>Bilan pédagogique complet en fin d&apos;intervention</li>
              </ul>
            </div>
            <div style={{ background: 'var(--blue-900)', color: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>Nos engagements partenaires</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Transparence</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Des tarifs clairs et une facturation nette, sans frais cachés.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Réactivité</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Réponse à vos demandes de positionnement sous 48h maximum.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Loyauté</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Clause de non-concurrence stricte concernant vos clients finaux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Contact Partenaire</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Devenir Partenaire</h2>
            <p>Remplissez ce formulaire pour nous présenter votre besoin ou échanger sur un partenariat à long terme.</p>
          </div>

          {submitted ? (
            <div style={{ background: 'var(--gray-50)', padding: '3rem', borderRadius: 'var(--radius)', border: '2px solid #25D366', textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✅</span>
              <h3 style={{ marginBottom: '0.5rem' }}>Demande envoyée !</h3>
              <p>Merci pour votre intérêt. Nous vous recontactons dans les 24 à 48 heures pour échanger sur vos projets de sous-traitance.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Organisme de formation *</label>
                  <input className="form-input" value={form.organisme} onChange={e => setForm(f => ({ ...f, organisme: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact (Nom/Prénom) *</label>
                  <input className="form-input" value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email professionnel *</label>
                  <input type="email" className="form-input" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input type="tel" className="form-input" value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Région principale d&apos;intervention</label>
                <select className="form-input" value={form.region} onChange={e => setForm(f => ({ ...f, region: e.target.value }))}>
                  <option value="">Sélectionnez...</option>
                  <option value="paca">Provence-Alpes-Côte d&apos;Azur</option>
                  <option value="idf">Île-de-France</option>
                  <option value="occitanie">Occitanie</option>
                  <option value="ara">Auvergne-Rhône-Alpes</option>
                  <option value="national">National (toute France)</option>
                  <option value="autre">Autre / Distanciel</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Vos besoins (plusieurs choix possibles)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
                  {['Recherche de formateur TOP®', 'Coanimation', 'Sous-traitance complète', 'Réseau de partenaires'].map((besoin, i) => (
                    <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                      <input type="checkbox" checked={form.besoins.includes(besoin)} onChange={() => toggleBesoin(besoin)} />
                      {besoin}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Votre message / Contexte</label>
                <textarea className="form-input" rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}></textarea>
              </div>

              <label className="form-rgpd">
                <input type="checkbox" required />
                <span>J&apos;accepte que mes données soient traitées dans le cadre de ma demande de partenariat.</span>
              </label>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>Envoyer ma demande →</button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
