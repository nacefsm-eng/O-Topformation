'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
        source: 'Formulaire de qualification diagnostic OTOP',
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
    <section id="contact" className="w-full py-16 px-4 bg-slate-950 text-white relative">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Subtle glow circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center">
            
            {/* Left info column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                ⚡ Diagnostic Individuel Offert (15 min)
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Réservez votre diagnostic de 15 min
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Un échange direct avec Mélissa ou Renaud pour analyser vos processus et vos besoins. Ô&apos;TOP Formation intervient avec l&apos;organisme partenaire Eloqone, certifié Qualiopi, qui porte les actions de formation et les démarches de financement. NDA Ô&apos;TOP Formation en cours d&apos;attribution.
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
                    <div className="text-xs text-slate-400 font-medium">Email professionnel direct</div>
                    <div className="text-sm font-semibold text-white">Formation.rmcf@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Lignes directes formateurs</div>
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
                    <div className="text-xs text-slate-400 font-medium">Centre pédagogique &amp; Siège</div>
                    <div className="text-xs font-medium text-slate-300">Espace Gamma 1, 139 ch. des 2 Frères, 83190 Ollioules (Var)</div>
                  </div>
                </div>
              </div>

              {/* Optionnel WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20des%20informations%20sur%20vos%20formations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Vous préférez échanger par WhatsApp ? Cliquez ici</span>
                </a>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-inner">
              
              {isSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Demande enregistrée avec succès !</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Merci {name}. Votre dossier a été transmis à l’équipe pédagogique. Vous recevrez une réponse et votre étude de financement sous 24h ouvrées par email à <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => { setIsSent(false); setName(''); setEmail(''); setPhone(''); setMessage(''); }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
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
                        placeholder="ex. Sophie Martin"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sophie.martin@entreprise.fr"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Téléphone <span className="text-slate-500">(recommandé pour le diagnostic)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 XX XX XX XX"
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
                        <option value="independant">Indépendant / Freelance / Libéral</option>
                        <option value="dirigeant">Dirigeant de TPE / PME</option>
                        <option value="salarie">Collaborateur d’entreprise</option>
                        <option value="demandeur">Demandeur d’emploi</option>
                        <option value="autre">Autre statut</option>
                      </select>
                    </div>
                  </div>

                  {/* Nouveaux champs qualification B2B demandés par l'audit */}
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
                      <option value="rs6776">⚡ IA Générative pour Indépendants (RS6776 - 16h)</option>
                      <option value="rs7344">🤖 Intégration de l’IA en Entreprise &amp; Workflows (RS7344)</option>
                      <option value="rs7351">📱 Préparation Certification Réseaux Sociaux (RS7351 - 11h+)</option>
                      <option value="fi-top">🧘 Formation Initiale FI TOP® (21h / 3 jours)</option>
                      <option value="fb-top">⏱️ Formation FB-TOP Initiation (7h)</option>
                      <option value="intra">🏢 Formation intra-entreprise sur-mesure</option>
                      <option value="autre">✨ Autre besoin d’accompagnement</option>
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
                      placeholder="Votre secteur, vos outils actuels, vos disponibilités pour le créneau de 15 min..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm resize-none"
                    />
                  </div>

                  {/* Case à cocher RGPD Obligatoire */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="rgpd-check"
                      required
                      checked={rgpdConsent}
                      onChange={(e) => setRgpdConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="rgpd-check" className="text-xs text-slate-400 leading-normal cursor-pointer">
                      J’accepte que les informations saisies soient traitées par SAS Ô’TOP Formation pour me transmettre le diagnostic et l’étude de financement. Conformément au RGPD, vos données restent strictement confidentielles.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30 cursor-pointer disabled:opacity-50"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmission en cours...' : 'Réserver mon diagnostic gratuit (15 min) →'}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Financement possible selon votre statut et sous réserve d’acceptation par votre financeur. Dossier accompagné avec notre partenaire certifié Qualiopi Eloqone.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* Pop-up de Félicitations */}
      <CongratulationsModal
        isOpen={showCongrats}
        onClose={() => setShowCongrats(false)}
        candidateName={name}
        courseTitle="votre diagnostic de formation"
        onWhatsAppClick={() => {
          const formattedMessage = `Bonjour Mélissa (Ô'TOP Formation), je viens de transmettre ma demande de diagnostic (${name}, ${email}). Je souhaite faire le point sur mon projet.`;
          window.open(`https://wa.me/33767246825?text=${encodeURIComponent(formattedMessage)}`, '_blank');
        }}
      />
    </section>
  );
}
