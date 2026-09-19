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
    besoin: 'Formation IA Certifiante (RS6776)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setForm(prev => ({ ...prev, besoin: subjectParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = `Bonjour Mélissa, je souhaite réserver un diagnostic gratuit (15 min) :

👤 Nom : ${form.nom}
📞 Téléphone : ${form.telephone}
📧 Email : ${form.email}
🎯 Sujet : ${form.besoin}
💬 Précisions : ${form.message || 'Aucune précision'}`;

    const url = `https://wa.me/33767246825?text=${encodeURIComponent(textMessage)}`;
    setWaLink(url);
    setSubmitted(true);

    // Redirection automatique vers WhatsApp
    window.open(url, '_blank');
  };

  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '6.5rem 0 4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1rem' }}>
            ⚡ Diagnostic Gratuit & Échange Direct
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '1.25rem' }}>
            Réserver mon diagnostic gratuit (15 min)
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Remplissez le formulaire ci-dessous pour échanger instantanément avec Mélissa sur WhatsApp.
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
                Nos coordonnées
              </h2>
              <p style={{ marginBottom: '2rem', color: 'var(--gray-600)' }}>
                Vous pouvez également nous joindre directement sans passer par le formulaire :
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Carte WhatsApp */}
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20un%20diagnostic%20pour%20la%20formation%20IA%20RS6776."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', border: '1.5px solid #25D366', background: '#f6fdf9', transition: 'transform 0.2s' }}
                >
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    💬
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#128C7E', fontSize: '1.1rem' }}>WhatsApp Direct (Mélissa)</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Réponse rapide en direct : 07 67 24 68 25</div>
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
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Expert Digital & IA</div>
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
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Email officiel O&apos;TOP Formation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Colonne 2 : Formulaire Express vers WhatsApp */}
            <div className="card" style={{ padding: '2.5rem', background: 'white', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--radius)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💬</div>
                  <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>Ouverture de WhatsApp...</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Votre message a été pré-rempli pour Mélissa (07 67 24 68 25). Si WhatsApp ne s&apos;est pas ouvert automatiquement, cliquez sur le bouton ci-dessous :
                  </p>
                  <a 
                    href={waLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary" 
                    style={{ background: '#25D366', color: 'white', fontWeight: 800, padding: '1rem 2rem' }}
                  >
                    Ouvrir WhatsApp maintenant 💬
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="label" style={{ color: 'var(--red-600)' }}>Formulaire Express</span>
                    <h3 style={{ color: 'var(--blue-900)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      Demander un diagnostic (15 min)
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                      Le formulaire vous redirige directement sur WhatsApp avec votre demande pré-remplie.
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
                        <option value="Formation IA Certifiante (RS6776)">🤖 Formation IA Certifiante (RS6776)</option>
                        <option value="Formation IA Dirigeants (RS7344)">💼 Formation IA Dirigeants (RS7344)</option>
                        <option value="Formation Réseaux Sociaux (RS7351)">📱 Formation Réseaux Sociaux (RS7351)</option>
                        <option value="Santé Mentale & Méthode TOP®">🧘 Santé Mentale & Méthode TOP®</option>
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
                        placeholder="Ex: Je suis coach / thérapeute et je veux automatiser ma communication..."
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--gray-300)', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', background: '#25D366', color: 'white', padding: '1rem', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem', cursor: 'pointer', border: 'none', borderRadius: '50px' }}
                    >
                      Envoyer via WhatsApp (07 67 24 68 25) 💬
                    </button>

                    <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', textAlign: 'center', margin: 0 }}>
                      ⚡ Réponse rapide et directe avec Mélissa
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
