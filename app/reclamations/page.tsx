'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ShieldCheck, Mail, Phone, Send, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ReclamationsPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [formation, setFormation] = useState('RS6776 — IA générative');
  const [motif, setMotif] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition mb-6"
          >
            <ArrowLeft size={14} />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            <span>Procédure Qualité &amp; Satisfaction</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Gestion des Réclamations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Notre engagement qualité : accusé de réception sous 2 jours ouvrés et réponse écrite sous 5 jours ouvrés.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-lg font-bold text-white mb-3">Nos Engagements</h2>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Accusé de réception</strong> sous 2 jours ouvrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Instruction et réponse motivée</strong> sous 5 jours ouvrés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Enregistrement dans notre registre d&apos;amélioration continue</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs text-slate-300">
              <h3 className="font-bold text-white text-sm">Contact Direct</h3>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400" />
                <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 hover:underline">formation.rmcf@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" />
                <span>07 67 24 68 25 (Mélissa Jennadi)</span>
              </p>
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Médiation de la consommation : CNPM — Médiation de la Consommation (dossier en cours).
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
              {isSent ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Réclamation bien reçue</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Un accusé de réception vous est adressé sous 2 jours ouvrés, suivi d&apos;une réponse écrite détaillée sous 5 jours ouvrés.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold text-white mb-2">Formulaire de Réclamation</h2>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom et Prénom *</label>
                    <input
                      type="text"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Formation concernée</label>
                    <select
                      value={formation}
                      onChange={(e) => setFormation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="RS6776 — IA générative">RS6776 — IA générative</option>
                      <option value="RS7344 — Développer son activité avec l’IA">RS7344 — Développer son activité avec l’IA</option>
                      <option value="RS7351 — Réseaux sociaux">RS7351 — Réseaux sociaux</option>
                      <option value="Méthode TOP® — conduite du changement">Méthode TOP® — conduite du changement</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Motif détaillé de la réclamation *</label>
                    <textarea
                      required
                      rows={4}
                      value={motif}
                      onChange={(e) => setMotif(e.target.value)}
                      placeholder="Décrivez avec précision la situation constatée, vos attentes et tout élément utile..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send size={14} />
                    <span>Transmettre ma réclamation</span>
                  </button>
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
