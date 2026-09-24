'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

const OTOP_QUESTIONS = [
  { q: "Quelles sont les formations certifiées ?", a: "Nous proposons 3 formations certifiantes officielles France Compétences : 1. IA Générative pour indépendants (RS6776), 2. Développer son activité avec l'IA (RS7344), 3. Réseaux Sociaux & Social Selling (RS7351), ainsi que la méthode TOP® pour la gestion du stress." },
  { q: "Quelles sont les modalités de financement ?", a: "Financement possible selon votre statut et sous réserve d'acceptation par votre financeur. Dossier accompagné avec notre partenaire certifié Qualiopi Eloqone (OPCO, FAF, CPF). Mélissa monte votre dossier de prise en charge." },
  { q: "Y a-t-il un accompagnement humain ?", a: "Oui, absolument ! Nos formations incluent 5h de coaching (individuel ou en petit groupe selon le parcours) avec nos formateurs pour appliquer directement les outils sur votre propre entreprise." },
  { q: "Je n'ai pas de compétences techniques, est-ce un problème ?", a: "Non, aucun prérequis technique n'est nécessaire. Les parcours sont construits pour les dirigeants, indépendants et collaborateurs, avec des templates prêts à l'emploi et des cas concrets." },
  { q: "Je veux réserver un diagnostic offert (15 min)", a: "Avec grand plaisir ! Cliquez ci-dessous pour joindre directement Mélissa sur WhatsApp ou réserver votre appel de cadrage." }
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Bonjour ! 👋 Comment pouvons-nous vous accompagner sur vos projets de formation IA, Réseaux Sociaux ou Méthode TOP® ?" }
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
    }, 450);
  };

  const isAppointmentQuestion = messages.some(m => m.role === 'user' && m.text.includes('diagnostic offert'));

  return (
    <>
      {/* Sleek Floating Toggle Button (No cartoon robot) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 30px rgba(37, 99, 235, 0.4)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease'
        }}
        className="hover:scale-105 active:scale-95"
        aria-label="Discuter avec notre équipe"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window (Sleek Dark Theme) */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          left: '24px',
          width: '380px',
          maxWidth: 'calc(100vw - 48px)',
          height: '520px',
          maxHeight: 'calc(100vh - 110px)',
          background: '#0a0f1d',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            padding: '16px 20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '12px', 
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700 }}>Conseiller Ô&apos;TOP</h3>
                <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Réponses instantanées & Orientation</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Feed */}
          <div style={{
            flex: 1,
            padding: '18px',
            overflowY: 'auto',
            background: '#050811',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                background: msg.role === 'user' ? '#2563eb' : '#111827',
                color: msg.role === 'user' ? 'white' : '#e2e8f0',
                padding: '12px 16px',
                borderRadius: '18px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '18px',
                borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '18px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                fontSize: '13px',
                lineHeight: 1.5,
                border: msg.role === 'ai' ? '1px solid rgba(255,255,255,0.08)' : 'none'
              }}>
                {msg.text}
              </div>
            ))}
            
            {isAppointmentQuestion && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '90%' }}>
                <a 
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20r%C3%A9server%20un%20diagnostic%20offert%20de%2015%20minutes."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)} 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#16a34a',
                    color: 'white',
                    padding: '10px 18px',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '13px',
                    boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)'
                  }}
                >
                  <span>💬 Contacter Mélissa sur WhatsApp</span>
                </a>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div style={{
            padding: '14px',
            background: '#0b1120',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            maxHeight: '160px',
            overflowY: 'auto'
          }}>
            <p style={{ margin: '0 0 4px 0', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Questions fréquentes :
            </p>
            {OTOP_QUESTIONS.map((item, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(item.q, item.a)}
                style={{
                  textAlign: 'left',
                  background: '#131d33',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '7px 12px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  color: '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#1d2a4a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#131d33';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
