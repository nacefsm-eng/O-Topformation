'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import CongratulationsModal from '@/components/ui/congratulations-modal';

export default function GetInTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [statut, setStatut] = useState('independant');
  const [companySize, setCompanySize] = useState('1');
  const [priorityGoal, setPriorityGoal] = useState('gain-temps');
  const [parcours, setParcours] = useState('rs6776');
  const [message, setMessage] = useState('');
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpdConsent) {
      alert('Veuillez accepter le traitement de vos données pour que nous puissions vous recontacter.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name,
        email,
        phone: phone || 'Non renseigné',
        statut,
        companySize,
        priorityGoal,
        parcours,
        message,
        newsletterConsent,
        source: 'Formulaire de diagnostic OTOP',
        submittedAt: new Date().toISOString(),
      };

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setIsSent(true);
      setShowCongrats(true);
    } catch (err) {
      console.error('Erreur envoi contact:', err);
      setIsSent(true);
      setShowCongrats(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="get-in-touch-section w-full py-16 px-4 bg-slate-950 text-white relative">
      <div className="container mx-auto max-w-5xl">
        <div className="get-in-touch-card relative rounded-3xl bg-[#021842] border border-blue-500/30 p-6 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Subtle glow circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center">
            
            {/* Left info column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                ⚡ Échange Direct Offert (15 min)
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Échangez 15 min avec Mélissa ou Renaud
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Un échange direct de 15 minutes avec Mélissa ou Renaud pour choisir la bonne formation et étudier votre financement.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:formation.rmcf@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">E-mail</div>
                    <div className="text-sm font-semibold text-white">formation.rmcf@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Lignes directes</div>
                    <div className="text-sm font-semibold text-white">
                      Mélissa : 07 67 24 68 25 • Renaud : 06 74 79 75 09
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Siège social</div>
                    <div className="text-xs font-medium text-slate-300">Espace Gamma 1, 139 ch. des 2 Frères, 83190 Ollioules (Var)</div>
                  </div>
                </div>
              </div>

              {/* Calendly Button & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/formation-rmcf/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/30"
                >
                  <Calendar size={15} />
                  <span>Choisir un créneau (Calendly)</span>
                </a>
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20des%20informations%20sur%20vos%20formations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="get-in-touch-form lg:col-span-7 bg-[#011233]/90 p-6 sm:p-8 rounded-3xl border border-blue-500/20 shadow-inner">
              
              {isSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Demande enregistrée avec succès !</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Merci {name}. Votre demande a été transmise à Mélissa et Renaud. Nous revenons vers vous sous 24 h ouvrées à l’adresse <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => { setIsSent(false); setName(''); setEmail(''); setPhone(''); setMessage(''); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Nom &amp; Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Adresse E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@votre-entreprise.fr"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Téléphone <span className="text-slate-500">(facultatif)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Votre statut professionnel *
                      </label>
                      <select
                        value={statut}
                        onChange={(e) => setStatut(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        <option value="independant">Indépendant / Freelance / Dirigeant TPE (avec SIRET)</option>
                        <option value="salarie">Collaborateur / Salarié d’entreprise</option>
                        <option value="particulier">Particulier (autofinancement)</option>
                        <option value="demandeur">Demandeur d’emploi</option>
                        <option value="autre">Autre statut</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Taille de votre structure *
                      </label>
                      <select
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        <option value="1">Indépendant(e) seul(e)</option>
                        <option value="1-5">1 à 5 collaborateurs</option>
                        <option value="6-19">6 à 19 collaborateurs</option>
                        <option value="20+">20 collaborateurs et plus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Objectif prioritaire *
                      </label>
                      <select
                        value={priorityGoal}
                        onChange={(e) => setPriorityGoal(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-blue-500 text-sm"
                      >
                        <option value="gain-temps">Gagner du temps sur les tâches récurrentes</option>
                        <option value="contenu-visuel">Produire du contenu &amp; visuels pros</option>
                        <option value="automatisation">Automatiser devis, factures &amp; relances</option>
                        <option value="equipe">Former et faire monter mon équipe en compétences</option>
                        <option value="conformite">Sécuriser nos données &amp; conformité AI Act</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Parcours souhaité *
                    </label>
                    <select
                      value={parcours}
                      onChange={(e) => setParcours(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-blue-500 text-sm"
                    >
                      <option value="rs6776">⚡ IA générative (RS6776) — 21 h dont 2 h d&apos;accompagnement</option>
                      <option value="rs7344">🤖 Développer son activité avec l&apos;IA (RS7344) — 21 h</option>
                      <option value="rs7351">📱 Réseaux sociaux (RS7351) — 21 h</option>
                      <option value="top">🧭 Méthode TOP® — conduite du changement (21 h)</option>
                      <option value="ia-top">🏢 Offre IA &amp; Humain pour vos équipes (sur devis)</option>
                      <option value="autre">✨ Autre besoin d’accompagnement sur mesure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Précisions sur votre activité ou contexte <span className="text-slate-500">(optionnel)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Votre secteur, vos outils actuels, vos disponibilités..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm resize-none"
                    />
                  </div>

                  {/* Cases à cocher RGPD & Newsletter conformes Section 5.3 */}
                  <div className="space-y-2 pt-1">
                    <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={rgpdConsent}
                        onChange={(e) => setRgpdConsent(e.target.checked)}
                        className="mt-0.5 accent-blue-500"
                      />
                      <span>
                        J’accepte que O’TOP Formation traite mes données pour répondre à ma demande (diagnostic, étude de financement). En savoir plus :{' '}
                        <Link href="/politique-confidentialite" target="_blank" className="text-blue-400 hover:underline">
                          politique de confidentialité
                        </Link>.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newsletterConsent}
                        onChange={(e) => setNewsletterConsent(e.target.checked)}
                        className="mt-0.5 accent-blue-500"
                      />
                      <span>
                        Je souhaite recevoir les actualités et conseils d’Ô’TOP Formations.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30 cursor-pointer disabled:opacity-50"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande →'}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Financement possible selon votre statut, sous réserve d’accord de votre financeur. Conventions établies par notre partenaire Eloq-One, certifié Qualiopi.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>

      <CongratulationsModal
        isOpen={showCongrats}
        onClose={() => setShowCongrats(false)}
        candidateName={name}
        courseTitle="votre diagnostic personnalisé (15 min)"
        onWhatsAppClick={() => {
          const formattedMessage = `Bonjour Mélissa (Ô'TOP Formations), je viens de soumettre ma demande sur le site :\n\n👤 Nom : ${name}\n📧 Email : ${email}${phone ? `\n📞 Téléphone : ${phone}` : ''}\n🎯 Parcours : ${parcours}\n💼 Statut : ${statut}${message ? `\n💬 Précision : ${message}` : ''}\n\nJe souhaite faire le point sur mon projet et mes financements.`;
          window.open(`https://wa.me/33767246825?text=${encodeURIComponent(formattedMessage)}`, '_blank');
        }}
      />
    </section>
  );
}
