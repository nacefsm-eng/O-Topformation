'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('otop_exit_intent_dismissed');
    if (isDismissed) return;

    // Desktop mouseleave listener
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !sessionStorage.getItem('otop_exit_intent_dismissed')) {
        setIsOpen(true);
        sessionStorage.setItem('otop_exit_intent_dismissed', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // Timeout fallback after 60 seconds of browsing
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('otop_exit_intent_dismissed')) {
        setIsOpen(true);
        sessionStorage.setItem('otop_exit_intent_dismissed', 'true');
      }
    }, 60000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('otop_exit_intent_dismissed', 'true');
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Trigger download
    const link = document.createElement('a');
    link.href = '/catalogue-otop.pdf';
    link.download = 'catalogue-otop-formation-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional lead post
    if (email) {
      try {
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nom: 'Prospect Brochure Exit-Intent',
            email: email,
            besoin: 'Téléchargement Brochure PDF 2026',
            statut: 'lead_brochure',
            message: 'Lead capturé via popup exit-intent.',
          }),
        }).catch(() => {});
      } catch {}
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-left overflow-hidden text-white">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Fermer"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
          <FileText size={14} />
          <span>Offre Exclusive 2026</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2">
          Avant de partir : emportez notre Catalogue Officiel (PDF)
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
          Consultez à tête reposée nos 6 programmes certifiants, les plannings et les modalités pour faire financer <strong>100% de votre formation</strong> par votre OPCO ou FAF sans débourser un centime.
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6 text-xs text-slate-200">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Programmes complets :</strong> IA (RS6776), Réseaux Sociaux (RS7351), Web &amp; Méthode TOP®</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Coaching individuel inclus :</strong> 5 heures en tête-à-tête avec nos experts</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Guide prise en charge OPCO :</strong> Dossier administratif entièrement géré</span>
          </li>
        </ul>

        {downloaded ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
            <div className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1.5">
              <ShieldCheck size={18} />
              <span>Téléchargement en cours...</span>
            </div>
            <p className="text-xs text-slate-300">
              Le fichier PDF A4 est en cours de téléchargement sur votre appareil. Bonne lecture !
            </p>
            <button
              onClick={handleClose}
              className="mt-3 px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Votre adresse e-mail professionnelle (pour recevoir la brochure) :
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@entreprise.fr"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download size={16} />
              <span>Télécharger la Brochure PDF Gratuitement</span>
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="text-[11px] text-slate-400 hover:text-slate-300 underline cursor-pointer"
              >
                Non merci, je préfère continuer ma navigation
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
