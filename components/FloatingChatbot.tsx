'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const OTOP_QUESTIONS = [
  { q: "C'est quoi la méthode TOP® ?", a: "Les Techniques d'Optimisation du Potentiel (TOP®) sont un ensemble d'outils simples et pragmatiques (respiration, imagerie mentale, relaxation) créés par l'armée française. Elles permettent de gérer le stress, la fatigue et d'optimiser ses performances au quotidien." },
  { q: "Vous intervenez en entreprise ?", a: "Oui, tout à fait ! Nous proposons des formations intra-entreprise sur-mesure pour les équipes, les managers ou les dirigeants afin d'améliorer la qualité de vie au travail et prévenir les risques psychosociaux." },
  { q: "Quels sont vos tarifs ?", a: "Nos tarifs varient selon le format. La formation initiale (FI TOP) de 21h est à 1280€ HT. La formation de base (FB TOP) de 7h est à 450€ HT. Pour les entreprises, nous faisons des devis sur mesure. La formation peut être financée par votre OPCO." },
  { q: "La formation est-elle certifiante ?", a: "Oui, nos formations permettent d'obtenir une attestation officielle de formation TOP®. Nous sommes en cours de certification Qualiopi, ce qui facilitera les prises en charge OPCO et autres financements publics." },
  { q: "Je veux un entretien découverte", a: "Super ! L'entretien découverte est 100% gratuit et dure environ 15-20 minutes. Cliquez sur le bouton ci-dessous pour choisir un créneau dans notre agenda." }
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Bonjour ! 👋 Je suis l'assistant virtuel d'O'TOP Formation. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleQuestionClick = (q: string, a: string) => {
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    
    // Simulate thinking delay
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: a }]);
    }, 600);
  };

  const isAppointmentQuestion = messages.some(m => m.role === 'user' && m.text.includes('entretien découverte'));

  return (
    <>
      {/* Botton Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px', // Placé à gauche pour ne pas gêner WhatsApp/Téléphone à droite
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #0f1f5c, #1a3c8f)',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(15, 31, 92, 0.4)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        className={isOpen ? "chatbot-btn-open" : "chatbot-btn-closed"}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '24px',
          width: '350px',
          maxWidth: 'calc(100vw - 48px)',
          height: '500px',
          maxHeight: 'calc(100vh - 120px)',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #e2e8f0',
          animation: 'chatFadeIn 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0f1f5c, #1a3c8f)',
            padding: '16px 20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ fontSize: '24px' }}>🤖</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Assistant O'TOP</h3>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>Réponses instantanées</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: msg.role === 'user' ? '#1a3c8f' : 'white',
                color: msg.role === 'user' ? 'white' : '#1e293b',
                padding: '12px 16px',
                borderRadius: '16px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                fontSize: '14px',
                lineHeight: 1.5,
                border: msg.role === 'ai' ? '1px solid #e2e8f0' : 'none'
              }}>
                {msg.text}
              </div>
            ))}
            
            {isAppointmentQuestion && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                <Link href="/reservation" onClick={() => setIsOpen(false)} style={{
                  display: 'inline-block',
                  background: '#d4af37',
                  color: '#0f1f5c',
                  padding: '10px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  boxShadow: '0 2px 8px rgba(212, 175, 55, 0.4)'
                }}>
                  📅 Prendre RDV maintenant
                </Link>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div style={{
            padding: '16px',
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxHeight: '150px',
            overflowY: 'auto'
          }}>
            <p style={{ margin: '0 0 4px 0', fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
              Questions fréquentes :
            </p>
            {OTOP_QUESTIONS.map((item, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(item.q, item.a)}
                style={{
                  textAlign: 'left',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  color: '#334155',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
                onMouseLeave={e => e.currentTarget.style.background = '#f1f5f9'}
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chatbot-btn-closed:hover { transform: scale(1.1); }
        .chatbot-btn-open { transform: rotate(90deg); background: #334155 !important; }
      `}} />
    </>
  );
}
