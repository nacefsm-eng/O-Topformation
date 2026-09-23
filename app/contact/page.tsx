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
    statut: 'independant',
    besoin: 'Formation IA Certifiante (RS6776)',
    message: '',
    rgpdConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setForm(prev => ({ ...prev, besoin: subjectParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.rgpdConsent) {
      setErrorMessage('Veuillez accepter la politique de confidentialité pour envoyer votre demande.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          statut: form.statut,
          track: form.besoin,
          message: form.message,
          rgpdConsent: form.rgpdConsent,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Une erreur est survenue lors de l\'envoi.');
      }
    } catch {
      setErrorMessage('Impossible d\'envoyer le message. Vous pouvez nous écrire directement à contact@otopformation.fr.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '6.5rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1rem' }}>
            ⚡ Diagnostic Pédagogique Offert (15 min)
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '1.25rem' }}>
            Contactez notre équipe pédagogique
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Un échange personnalisé de 15 minutes pour évaluer vos besoins, vérifier vos financements (OPCO, FAF, CPF) et concevoir votre parcours.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Colonne 1 : Coordonnées directes & Agenda */}
            <div>
              <span className="label">Contact Direct</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--blue-900)', marginBottom: '1.5rem' }}>
                Nos coordonnées
              </h2>
              <p style={{ marginBottom: '2rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                Besoin d&apos;une réponse immédiate ou d&apos;échanger directement avec nos experts ?
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Carte Email Officiel */}
                <a
                  href="mailto:contact@otopformation.fr"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid var(--gray-200)', background: 'white' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-900)', fontSize: '1.05rem' }}>contact@otopformation.fr</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Email officiel d&apos;accueil & inscriptions</div>
                  </div>
                </a>

                {/* Carte Téléphone / WhatsApp Mélissa */}
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20O%27TOP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid #25D366', background: '#f6fdf9' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    💬
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#128C7E', fontSize: '1.1rem' }}>Mélissa : 07 67 24 68 25</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Conseil pédagogique & WhatsApp direct</div>
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
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Expert Digital, IA & Entreprises</div>
                  </div>
                </a>

                {/* Bloc Adresse & NDA */}
                <div style={{ padding: '1.25rem', background: '#eef2f6', borderRadius: 'var(--radius)', fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <strong>Centre pédagogique :</strong><br />
                  Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var)<br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '0.5rem', display: 'block' }}>
                    Organisme déclaré (NDA en cours d&apos;attribution DREETS PACA) · Actions de formation certifiantes et financées actuellement portées par l&apos;organisme partenaire certifié Qualiopi Eloqone.
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Formulaire de demande sécurisé & RGPD */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--radius)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem', fontSize: '1.5rem' }}>Demande reçue avec succès !</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Merci {form.nom}. Un conseiller pédagogique d&apos;Ô&apos;TOP Formation va examiner votre demande et vous recontacter par email ou téléphone sous 24h ouvrées.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        nom: '',
                        email: '',
                        telephone: '',
                        statut: 'independant',
                        besoin: 'Formation IA Certifiante (RS6776)',
                        message: '',
                        rgpdConsent: false,
                      });
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="label" style={{ color: 'var(--blue-700)' }}>Formulaire Officiel</span>
                    <h3 style={{ color: 'var(--blue-900)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      Demander un diagnostic (15 min)
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                      Remplissez ce formulaire pour recevoir votre étude personnalisée et le programme détaillé.
                    </p>
                  </div>

                  {errorMessage && (
                    <div style={{ padding: '0.75rem 1rem', background: '#fee2e2', border: '1px solid #ef4444', borderRadius: 'var(--radius-sm)', color: '#b91c1c', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                      {errorMessage}
                    </div>
                  )}

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

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                          Téléphone (optionnel)
                        </label>
                        <input
                          type="tel"
                          value={form.telephone}
                          onChange={e => setForm({ ...form, telephone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                          Votre statut *
                        </label>
                        <select
                          value={form.statut}
                          onChange={e => setForm({ ...form, statut: e.target.value })}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', background: 'white' }}
                        >
                          <option value="independant">Indépendant / Freelance / Libéral</option>
                          <option value="dirigeant">Dirigeant de TPE / PME</option>
                          <option value="salarie">Salarié d&apos;entreprise</option>
                          <option value="demandeur">Demandeur d&apos;emploi</option>
                          <option value="autre">Autre situation</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                          Parcours souhaité *
                        </label>
                        <select
                          value={form.besoin}
                          onChange={e => setForm({ ...form, besoin: e.target.value })}
                          style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', background: 'white' }}
                        >
                          <option value="Formation IA Certifiante (RS6776)">⚡ IA Générative (RS6776)</option>
                          <option value="Formation IA Dirigeants (RS7344)">🤖 IA Business Entreprise (RS7344)</option>
                          <option value="Formation Réseaux Sociaux (RS7351)">📱 Prépa Réseaux Sociaux (RS7351)</option>
                          <option value="Formation FI TOP (21h)">🧘 Formation Initiale FI TOP® (21h)</option>
                          <option value="Formation FB-TOP (7h)">⏱️ Initiation FB-TOP (7h)</option>
                          <option value="Autre projet">✨ Autre projet sur-mesure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        Précisez vos attentes ou votre projet (optionnel)
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Ex : Je souhaite automatiser la rédaction de mes devis et ma communication sans y passer 3h par jour..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>

                    {/* Case RGPD */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
                      <input
                        type="checkbox"
                        id="rgpdConsentContact"
                        required
                        checked={form.rgpdConsent}
                        onChange={e => setForm({ ...form, rgpdConsent: e.target.checked })}
                        style={{ marginTop: '0.25rem', width: '1rem', height: '1rem', accentColor: 'var(--blue-900)' }}
                      />
                      <label htmlFor="rgpdConsentContact" style={{ fontSize: '0.8rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>
                        J&apos;accepte que les données saisies soient traitées par SAS Ô&apos;TOP Formation pour répondre à ma demande d&apos;information et de diagnostic. Consultez notre <Link href="/politique-confidentialite" style={{ color: 'var(--blue-700)', textDecoration: 'underline' }}>Politique de confidentialité</Link>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', background: 'var(--blue-900)', color: 'white', padding: '1rem', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', border: 'none', borderRadius: '50px' }}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de diagnostic ✉️'}
                    </button>

                    {/* Canal WhatsApp Optionnel */}
                    <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--gray-200)' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: '0.5rem' }}>
                        Vous préférez un échange immédiat par messagerie ?
                      </p>
                      <a
                        href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20un%20diagnostic%20de%2015%20min."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#128C7E', fontSize: '0.85rem', fontWeight: 700 }}
                      >
                        <span>💬 Échanger directement sur WhatsApp avec Mélissa</span>
                      </a>
                    </div>
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
