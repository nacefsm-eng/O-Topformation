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
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setForm(prev => ({ ...prev, besoin: subjectParam }));
    }
  }, [searchParams]);

  const [lastSubmittedData, setLastSubmittedData] = useState<typeof form | null>(null);

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
        setLastSubmittedData({ ...form });
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Une erreur est survenue lors de l\'envoi.');
      }
    } catch {
      setErrorMessage('Impossible d\'envoyer le message. Vous pouvez nous écrire directement à Formation.rmcf@gmail.com.');
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
            Un échange personnalisé de 15 minutes pour évaluer vos besoins, vérifier vos financements (OPCO, FAF) et concevoir votre parcours.
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
                  href="mailto:formation.rmcf@gmail.com"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid var(--gray-200)', background: 'white' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--blue-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--blue-900)', fontSize: '1.05rem' }}>Formation.rmcf@gmail.com</div>
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

                {/* Bloc Adresse & Partenaire */}
                <div style={{ padding: '1.25rem', background: '#eef2f6', borderRadius: 'var(--radius)', fontSize: '0.85rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <strong>Centre pédagogique :</strong><br />
                  Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var)<br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', marginTop: '0.5rem', display: 'block', lineHeight: 1.5 }}>
                    Ô&apos;TOP Formation intervient avec son partenaire Eloq-One, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l&apos;accord de l&apos;organisme financeur.
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Formulaire de demande sécurisé & RGPD */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--radius)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem', background: '#f8fafc', borderRadius: 'var(--radius)', border: '2px solid #22c55e' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ color: 'var(--blue-900)', marginBottom: '0.75rem', fontSize: '1.6rem', fontWeight: 800 }}>
                    Demande validée avec succès !
                  </h3>
                  <div style={{ maxWidth: '440px', margin: '0 auto 1.5rem', color: 'var(--gray-700)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '0.75rem' }}>
                      Merci <strong>{form.nom}</strong> ! Votre dossier a été transmis directement à <strong>Mélissa</strong> (Directrice des admissions).
                    </p>
                    <p style={{ background: '#ecfdf5', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #a7f3d0', color: '#065f46', fontSize: '0.88rem', fontWeight: 600 }}>
                      ⚡ Vous serez recontacté(e) personnellement sous 24h ouvrées pour valider vos droits de financement (OPCO / FAF) et fixer votre diagnostic offert de 15 minutes.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                    <a
                      href={`https://wa.me/33767246825?text=${encodeURIComponent(
                        `Bonjour Mélissa, je viens de soumettre ma demande de diagnostic sur le site Ô'TOP Formation :\n\n👤 Nom : ${lastSubmittedData?.nom || form.nom}\n📧 Email : ${lastSubmittedData?.email || form.email}\n📞 Téléphone : ${lastSubmittedData?.telephone || form.telephone}\n🎓 Parcours souhaité : ${lastSubmittedData?.besoin || form.besoin}${lastSubmittedData?.statut ? `\n💼 Statut : ${lastSubmittedData.statut}` : ''}${lastSubmittedData?.message ? `\n📝 Précision : ${lastSubmittedData.message}` : ''}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ background: '#25D366', color: 'white', padding: '0.85rem 1.75rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)' }}
                    >
                      <span>📲 Notifier Mélissa instantanément sur WhatsApp</span>
                    </a>

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
                      style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem', marginTop: '0.5rem' }}
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="label" style={{ color: 'var(--blue-700)' }}>Formulaire Rapide (4 Champs)</span>
                    <h3 style={{ color: 'var(--blue-900)', fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                      Demander votre diagnostic offert (15 min)
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                      Vérifiez vos droits de prise en charge OPCO/FAF et recevez le programme détaillé.
                    </p>
                  </div>

                  {errorMessage && (
                    <div style={{ padding: '0.75rem 1rem', background: '#fee2e2', border: '1px solid #ef4444', borderRadius: 'var(--radius-sm)', color: '#b91c1c', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                      {errorMessage}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    {/* Champ 1 : Nom */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        1. Nom & Prénom *
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

                    {/* Champ 2 : Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        2. Email professionnel *
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

                    {/* Champ 3 : Téléphone */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        3. Numéro de téléphone direct *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.telephone}
                        onChange={e => setForm({ ...form, telephone: e.target.value })}
                        placeholder="06 12 34 56 78 (pour l'appel de 15 min)"
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem' }}
                      />
                    </div>

                    {/* Champ 4 : Parcours souhaité */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--gray-700)' }}>
                        4. Parcours de formation envisagé *
                      </label>
                      <select
                        value={form.besoin}
                        onChange={e => setForm({ ...form, besoin: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', background: 'white' }}
                      >
                        <option value="IA générative : création de contenus rédactionnels et visuels responsables (RS6776 – 21 h)">⚡ IA générative : contenus rédactionnels et visuels (RS6776 – 21 h)</option>
                        <option value="Développer son activité avec l'IA (RS7344 – 21 h)">🤖 Développer son activité avec l&apos;IA (RS7344 – 21 h)</option>
                        <option value="Communication digitale & réseaux sociaux (RS7351 – 21 h)">📱 Communication digitale &amp; réseaux sociaux (RS7351 – 21 h)</option>
                        <option value="FI-TOP® (21 h — gestion du stress & changement)">🧘 FI-TOP® (21 h — gestion du stress &amp; changement)</option>
                        <option value="FB-TOP (7 h)">⏱️ FB-TOP (7 h)</option>
                        <option value="Offre IA & Méthode TOP® pour vos équipes (sur devis)">✨ Offre IA &amp; Méthode TOP® pour vos équipes (sur devis)</option>
                      </select>
                    </div>

                    {/* Accordéon optionnel pour précisions */}
                    <div style={{ borderTop: '1px dashed var(--gray-300)', paddingTop: '0.75rem' }}>
                      <button
                        type="button"
                        onClick={() => setShowDetails(!showDetails)}
                        style={{ background: 'none', border: 'none', color: 'var(--blue-700)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <span>{showDetails ? '➖ Masquer les précisions' : '➕ Préciser votre statut ou ajouter un message (optionnel)'}</span>
                      </button>

                      {showDetails && (
                        <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--gray-700)' }}>
                              Votre statut professionnel
                            </label>
                            <select
                              value={form.statut}
                              onChange={e => setForm({ ...form, statut: e.target.value })}
                              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem', background: 'white' }}
                            >
                              <option value="independant">Indépendant / Freelance / Profession Libérale</option>
                              <option value="dirigeant">Chef d&apos;entreprise / Dirigeant TPE-PME</option>
                              <option value="salarie">Collaborateur d&apos;entreprise (plan de développement)</option>
                              <option value="demandeur">Demandeur d&apos;emploi</option>
                              <option value="autre">Autre situation</option>
                            </select>
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--gray-700)' }}>
                              Votre message ou question spécifique
                            </label>
                            <textarea
                              rows={2}
                              value={form.message}
                              onChange={e => setForm({ ...form, message: e.target.value })}
                              placeholder="Ex : Je souhaite automatiser mes devis et mes relances..."
                              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.9rem', resize: 'vertical' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Case RGPD */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <input
                        type="checkbox"
                        id="rgpdConsentContact"
                        required
                        checked={form.rgpdConsent}
                        onChange={e => setForm({ ...form, rgpdConsent: e.target.checked })}
                        style={{ marginTop: '0.25rem', width: '1.1rem', height: '1.1rem', accentColor: 'var(--blue-900)' }}
                      />
                      <label htmlFor="rgpdConsentContact" style={{ fontSize: '0.8rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>
                        J&apos;accepte d&apos;être recontacté(e) pour mon diagnostic de formation offert. Données confidentielles protégées. Consultez notre <Link href="/politique-confidentialite" style={{ color: 'var(--blue-700)', textDecoration: 'underline' }}>Politique de confidentialité</Link>.
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
