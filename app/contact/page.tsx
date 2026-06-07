'use client';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
  const [form, setForm] = useState({
    prenom: '',
    email: '',
    besoin: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur de réseau est survenue.");
    }
  };

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Contact</span>
          </div>
          <h1>Parlons de votre projet</h1>
          <p>
            Vous avez une question ou vous souhaitez organiser une formation ? 
            Choisissez le moyen qui vous convient le mieux, nous vous répondons rapidement.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            
            {/* LEVEL 1: Express Contact */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>1. Contact express</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>
                Besoin d'une réponse immédiate ou envie d'échanger de vive voix ?
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="https://wa.me/33767246825" target="_blank" rel="noopener noreferrer" 
                   style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#25D366', color: 'white', padding: '1rem 1.5rem', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: 600, boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }}
                   onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                   onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Posez votre question sur WhatsApp
                </a>

                <a href="/reservation" target="_blank" rel="noopener noreferrer"
                   style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--blue-900)', color: 'white', padding: '1rem 1.5rem', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: 600, boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }}
                   onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                   onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Réserver un appel de 15 min (Gratuit)
                </a>

                <a href="tel:+33767246825"
                   style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', color: 'var(--blue-900)', border: '1px solid var(--gray-200)', padding: '1rem 1.5rem', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: 600, boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }}
                   onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                   onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Appelez-nous au 07 67 24 68 25
                </a>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--gray-200)' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--blue-900)', marginBottom: '1rem' }}>Rejoignez-nous sur les réseaux</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" className="social-pill">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" className="social-pill">
                    Instagram
                  </a>
                  <a href="https://business.facebook.com/latest/home?asset_id=835767209621029" target="_blank" rel="noopener noreferrer" className="social-pill">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* LEVEL 2: Simple Form */}
            <div>
              <div style={{ background: 'var(--gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>2. Demande écrite</h2>
                <p style={{ color: 'var(--gray-600)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  Expliquez-nous en 2 lignes ce que vous cherchez, nous vous envoyons les infos ou un devis détaillé.
                </p>

                {submitted ? (
                  <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', border: '2px solid #25D366', textAlign: 'center' }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✅</span>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--blue-900)' }}>Message bien reçu !</h3>
                    <p style={{ color: 'var(--gray-600)' }}>
                      Mélyssa ou Régis prendra connaissance de votre demande et vous répondra sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Votre prénom *</label>
                      <input 
                        type="text" 
                        required 
                        value={form.prenom} 
                        onChange={e => setForm({...form, prenom: e.target.value})}
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-300)', outline: 'none' }}
                        placeholder="Ex: Sophie"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Votre email *</label>
                      <input 
                        type="email" 
                        required 
                        value={form.email} 
                        onChange={e => setForm({...form, email: e.target.value})}
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-300)', outline: 'none' }}
                        placeholder="Ex: sophie@entreprise.com"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.5rem' }}>De quoi s'agit-il ?</label>
                      <select 
                        value={form.besoin} 
                        onChange={e => setForm({...form, besoin: e.target.value})}
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-300)', outline: 'none', background: 'white' }}
                      >
                        <option value="">Sélectionnez un sujet...</option>
                        <option value="Formation individuelle">M'inscrire à une formation individuelle (FI-TOP)</option>
                        <option value="Formation entreprise">Organiser une formation en entreprise</option>
                        <option value="Sous-traitance">Proposition de sous-traitance / Partenariat</option>
                        <option value="Autre">Une autre question</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.5rem' }}>Votre message *</label>
                      <textarea 
                        required 
                        rows={4}
                        value={form.message} 
                        onChange={e => setForm({...form, message: e.target.value})}
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-300)', outline: 'none', resize: 'vertical' }}
                        placeholder="Décrivez votre besoin en quelques mots..."
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '1rem' }}>
                      Envoyer le message →
                    </button>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', textAlign: 'center', marginTop: '0.5rem' }}>
                      En envoyant ce message, vous acceptez d'être recontacté(e) pour votre demande.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        .social-pill {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--blue-50);
          color: var(--blue-700);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-pill:hover {
          background: var(--blue-100);
          color: var(--blue-900);
        }
      `}</style>
    </main>
  );
}
