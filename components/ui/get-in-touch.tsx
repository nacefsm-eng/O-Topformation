'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function GetInTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Bonjour Mélissa (Ô'TOP Formation),

Je souhaite obtenir des informations pour une formation :
- Nom : ${name}
- Email : ${email}
- Téléphone : ${phone}
- Projet / Message : ${message || 'Diagnostic et renseignements sur les formations IA / Cybersécurité'}`;

    const waUrl = `https://wa.me/33767246825?text=${encodeURIComponent(formattedMessage)}`;
    setIsSent(true);
    window.open(waUrl, '_blank');
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white relative">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Subtle glow circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center">
            {/* Left info column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                ⚡ Réponse garantie sous 24h ouvrées
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Échangez avec nous
              </h2>

              <p className="text-slate-400 text-base leading-relaxed">
                Une question sur la prise en charge OPCO/FAF, le programme de formation en IA, en Cybersécurité ou la méthode TOP® ? Envoyez-nous votre demande ci-contre.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:formation.rmcf@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email direct</div>
                    <div className="text-sm sm:text-base font-semibold text-white">formation.rmcf@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/33767246825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp direct & Téléphone</div>
                    <div className="text-sm sm:text-base font-semibold text-white">07 67 24 68 25</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Siège & Centre de formation</div>
                    <div className="text-sm font-medium text-slate-300">Espace Gamma 1, 139 ch. des 2 Frères, 83190 Ollioules</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-6 bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex. Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Téléphone (pour WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Votre besoin / Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Décrivez en quelques mots vos objectifs (Formation IA, Cybersécurité, Financement OPCO...)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
                >
                  <Send size={18} />
                  <span>Envoyer ma demande via WhatsApp 💬</span>
                </button>

                {isSent && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center font-medium">
                    ✓ WhatsApp s'est ouvert ! Si ce n'est pas le cas, <a href={`https://wa.me/33767246825?text=${encodeURIComponent(name)}`} target="_blank" rel="noopener noreferrer" className="underline font-bold">cliquez ici</a>.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
