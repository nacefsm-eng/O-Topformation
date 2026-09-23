'use client';

import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface PredefinedQA {
  id: string;
  question: string;
  answer: string;
  whatsappMessage: string;
}

const PREDEFINED_QUESTIONS: PredefinedQA[] = [
  {
    id: 'financement',
    question: '💰 Financement possible (OPCO / FAF / CPF)',
    answer:
      "Financement possible selon votre statut et sous réserve d'acceptation par votre financeur. Dossier accompagné avec notre partenaire certifié Qualiopi Eloqone. Je monte personnellement le dossier pour étudier vos droits disponibles.",
    whatsappMessage:
      "Bonjour Mélissa, je souhaite savoir si ma situation me permet de bénéficier d'une prise en charge OPCO ou FAF pour une formation Ô'TOP.",
  },
  {
    id: 'coaching',
    question: '⚡ Détails des 5h de coaching 1-to-1 en IA',
    answer:
      "Contrairement aux vidéos passives, nos formations IA et Réseaux Sociaux incluent 5 heures en visio individuelle avec Renaud. Vous partagez votre écran et vous construisez vos assistants personnalisés et automatisations sur vos propres documents d'entreprise.",
    whatsappMessage:
      "Bonjour Mélissa, je souhaite des précisions sur le déroulement des 5h de coaching individuel 1-to-1 en IA avec Renaud.",
  },
  {
    id: 'top',
    question: '🧘 C&apos;est quoi la Méthode TOP® ?',
    answer:
      "Les Techniques d'Optimisation du Potentiel (TOP®) sont une méthode psycho-cognitive issue des forces d'élite et du sport olympique. Elle vous donne des boîtes à outils de respiration, relaxation somatique et imagerie mentale pour gérer le stress, récupérer en 5 minutes et booster votre concentration.",
    whatsappMessage:
      "Bonjour Mélissa, je souhaite découvrir la méthode TOP® (formation FI TOP 21h ou FB-TOP 7h). Pouvez-vous m'en dire plus ?",
  },
  {
    id: 'rdv',
    question: '📅 Réserver mon diagnostic offert (15 min)',
    answer:
      "Je vous propose un échange téléphonique bienveillant de 15 minutes pour faire le point sur vos objectifs, choisir le meilleur parcours et vérifier vos droits de financement immédiatement.",
    whatsappMessage:
      "Bonjour Mélissa, je souhaite convenir d'un rendez-vous téléphonique de 15 minutes pour mon diagnostic de formation offert.",
  },
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQA, setActiveQA] = useState<PredefinedQA | null>(null);
  const [customText, setCustomText] = useState('');

  const handleSelectQuestion = (qa: PredefinedQA) => {
    setActiveQA(qa);
  };

  const handleSendCustomText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;
    const url = `https://wa.me/33767246825?text=${encodeURIComponent(customText.trim())}`;
    window.open(url, '_blank');
    setCustomText('');
  };

  const openWhatsAppWith = (msg: string) => {
    const url = `https://wa.me/33767246825?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ── CONCIERGE CHATBOT DRAWER ── */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[9999] w-[calc(100vw-32px)] sm:w-[380px] max-h-[580px] rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-fadeIn text-white">
          
          {/* Header WhatsApp Vert Officiel */}
          <div className="p-4 bg-[#075e54] text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/team-melyssa.png"
                  alt="Mélissa JENNADI"
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-emerald-300"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075e54] animate-pulse" />
              </div>
              <div>
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <span>Mélissa JENNADI</span>
                  <span className="text-[10px] bg-emerald-600/60 px-1.5 py-0.5 rounded text-emerald-100 font-semibold">Fondatrice</span>
                </div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span>En ligne • Répond en quelques min.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Content Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-slate-950/70 text-xs">
            
            {/* Message de bienvenue */}
            <div className="flex items-start gap-2">
              <div className="p-3.5 rounded-2xl rounded-tl-none bg-slate-800 border border-slate-700 max-w-[88%] text-slate-200 leading-relaxed shadow-sm">
                Bonjour ! 👋 Je suis <strong>Mélissa</strong> d&apos;Ô&apos;TOP Formation.
                <br /><br />
                Comment puis-je vous aider aujourd&apos;hui ? Cliquez sur un sujet ou posez-moi directement votre question :
              </div>
            </div>

            {/* Questions fréquentes prédéfinies */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                Questions fréquentes :
              </div>
              {PREDEFINED_QUESTIONS.map((qa) => (
                <button
                  key={qa.id}
                  type="button"
                  onClick={() => handleSelectQuestion(qa)}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between gap-2 cursor-pointer ${
                    activeQA?.id === qa.id
                      ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{qa.question}</span>
                  <ChevronRight size={14} className="shrink-0 text-slate-400" />
                </button>
              ))}
            </div>

            {/* Réponse instantanée si question cliquée */}
            {activeQA && (
              <div className="pt-2 space-y-2.5 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-[#075e54]/30 border border-emerald-500/40 text-emerald-100 leading-relaxed shadow-md">
                    <div className="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                      <Sparkles size={14} />
                      <span>Réponse immédiate :</span>
                    </div>
                    {activeQA.answer}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openWhatsAppWith(activeQA.whatsappMessage)}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>📲 Poursuivre cette conversation sur WhatsApp</span>
                </button>
              </div>
            )}

          </div>

          {/* Saisie de message direct / texto */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form onSubmit={handleSendCustomText} className="flex items-center gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Écrivez votre message à Mélissa..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-emerald-500 transition"
              />
              <button
                type="submit"
                disabled={!customText.trim()}
                aria-label="Envoyer"
                className="w-9 h-9 rounded-xl bg-[#25D366] disabled:opacity-40 text-slate-950 flex items-center justify-center shrink-0 transition cursor-pointer hover:bg-[#20ba59]"
              >
                <Send size={15} />
              </button>
            </form>

            <div className="pt-2 text-center flex items-center justify-center gap-3 text-[11px] text-slate-400">
              <a
                href="tel:+33767246825"
                className="hover:text-emerald-400 flex items-center gap-1 transition"
              >
                <Phone size={11} />
                <span>Appel direct : 07 67 24 68 25</span>
              </a>
            </div>
          </div>

        </div>
      )}

      {/* ── BOUTON FLOTTANT WHATSAPP (56px) ── */}
      <div className="fixed bottom-6 right-6 z-[9990] flex items-center gap-3 select-none">
        
        {/* Tooltip visible au repos */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 hover:border-emerald-500/50 transition cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Discuter avec Mélissa</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le chat WhatsApp' : 'Ouvrir le chat WhatsApp avec Mélissa'}
          className={`w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-slate-800 text-slate-200 rotate-90 border border-slate-600'
              : 'bg-[#25D366] hover:bg-[#20ba59] hover:scale-110 shadow-emerald-600/40'
          }`}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-current text-white"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.822 6.012-1.577c1.714.933 3.682 1.467 5.774 1.467 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
