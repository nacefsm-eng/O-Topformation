'use client';

import { useState, useEffect, Suspense } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ContactContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    besoin: 'Diagnostic Global',
    message: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    setForm(prev => ({
      ...prev,
      besoin: subjectParam || prev.besoin,
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
    }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur s'est produite lors de l'envoi. Veuillez nous contacter directement par WhatsApp ou téléphone.");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite. Vous pouvez nous joindre directement au 07 67 24 68 25.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '7.5rem 0 4.5rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1rem' }}>
            ⚡ Diagnostic Gratuit & Échange Direct
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '1.25rem' }}>
            Échangez directement avec un expert O'TOP
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Faisons le point sur vos objectifs (santé mentale, IA, communication ou digitalisation) lors d'un échange téléphonique sans aucun engagement.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Colonne 1 : Contact Direct Rapide */}
            <div>
              <span className="label">Contact Immédiat</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--blue-900)', marginBottom: '1.5rem' }}>
                Privilégiez le direct
              </h2>
              <p style={{ marginBottom: '2rem', color: 'var(--gray-600)' }}>
                Pour une réponse rapide ou une question urgente, contactez directement nos responsables pédagogiques et projets :
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Carte WhatsApp */}
                <a
                  href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20diagnostic%20rapide%20pour%20un%20projet%20ou%20une%20formation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid #25D366', background: '#f6fdf9', transition: 'transform 0.2s' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    💬
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#128C7E', fontSize: '1.1rem' }}>Discuter sur WhatsApp</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Réponse rapide en direct avec Mélissa</div>
                  </div>
                </a>

                {/* Carte Téléphone Mélissa */}
                <a
                  href="tel:+33767246825"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid var(--blue-100)', background: 'white' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-900)', fontSize: '1.05rem' }}>Mélissa : 07 67 24 68 25</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Direction & Formatrice TOP® certifiée</div>
                  </div>
                </a>

                {/* Carte Téléphone Renaud */}
                <a
                  href="tel:+33674797509"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid var(--blue-100)', background: 'white' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-900)', fontSize: '1.05rem' }}>Renaud : 06 74 79 75 09</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Projets Digitaux, IA & Entreprises</div>
                  </div>
                </a>

                {/* Carte Email */}
                <a
                  href="mailto:formation.rmcf@gmail.com"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid var(--gray-200)', background: 'white' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--gray-700)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-900)', fontSize: '1.05rem' }}>formation.rmcf@gmail.com</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Réception officielle des demandes</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Colonne 2 : Formulaire de Diagnostic Court */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--radius)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>Demande reçue avec succès !</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Merci ! Un de nos experts (Mélissa ou Renaud) va vous recontacter très rapidement par téléphone pour votre diagnostic de 15 minutes.
                  </p>
                  <Link href="/" className="btn btn-primary" style={{ background: 'var(--blue-900)', color: 'white' }}>
                    Retourner à l'accueil
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="label" style={{ color: 'var(--red-600)' }}>Formulaire Express</span>
                    <h3 style={{ color: 'var(--blue-900)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      Demander un diagnostic (15 min)
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                      Laissez-nous vos coordonnées pour être rappelé(e) au moment qui vous convient.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nom}
                        onChange={e => setForm({ ...form, nom: e.target.value })}
                        placeholder="Ex: Sophie Martin"
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.telephone}
                          onChange={e => setForm({ ...form, telephone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="sophie@entreprise.fr"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        Votre sujet principal *
                      </label>
                      <select
                        value={form.besoin}
                        onChange={e => setForm({ ...form, besoin: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', background: 'white' }}
                      >
                        <option value="Santé Mentale & TOP® (Stress / RPS / Sommeil)">🧘 Santé Mentale & TOP® (Stress / RPS / Sommeil)</option>
                        <option value="Formation IA Certifiante (RS7344 / RS6776)">🤖 Formation IA Certifiante (RS7344 / RS6776)</option>
                        <option value="Formation Réseaux Sociaux (RS7351)">📱 Formation Réseaux Sociaux (RS7351)</option>
                        <option value="Création Site Web / App / Digitalisation">🚀 Création Site Web / App / Digitalisation Entreprise</option>
                        <option value="Formation Intra-Entreprise / Équipe">🏢 Formation Intra-Entreprise / Équipe</option>
                        <option value="Autre question ou projet">Autre question ou projet</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        Précisez votre situation (optionnel)
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Ex: Nous souhaitons former 5 managers ou nous voulons un site pour notre activité..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', background: 'var(--red-600)', color: 'white', padding: '1rem', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem', cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer ma demande de diagnostic ⚡'}
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', textAlign: 'center', margin: 0 }}>
                      🔒 Vos données restent strictement confidentielles et ne seront jamais partagées.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: '10rem 0', textAlign: 'center' }}>Chargement...</div>}>
      <ContactContent />
    </Suspense>
  );
}
