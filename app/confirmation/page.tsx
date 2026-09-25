import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone, MessageSquare, ShieldCheck, Download } from 'lucide-react';

export const metadata = {
  title: 'Confirmation de Commande | Ô\'TOP Formation',
  description: 'Votre inscription a bien été enregistrée par Ô\'TOP Formation.',
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl backdrop-blur-md relative z-10">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
          <CheckCircle2 size={44} />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
          Règlement Confirmé
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
          Merci pour votre confiance !
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Votre transaction a été validée avec succès via notre terminal sécurisé Stripe. Notre équipe pédagogique prépare vos accès et prend en charge votre dossier.
        </p>

        {/* Steps list */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-left mb-8 space-y-3.5 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
            <p className="text-slate-300">
              <strong className="text-white">Reçu &amp; Facture :</strong> Envoyés instantanément sur votre adresse email par Stripe.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
            <p className="text-slate-300">
              <strong className="text-white">Prise de contact directe :</strong> Mélissa vous contacte sous 24h ouvrées pour fixer votre calendrier de session et vos séances d&apos;accompagnement 1-to-1.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
            <p className="text-slate-300">
              <strong className="text-white">Partenaire Qualiopi Eloqone :</strong> Délivrance de vos conventions et attestations officielles de formation.
            </p>
          </div>
        </div>

        {/* Contact actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20viens%20d'effectuer%20mon%20r%C3%A8glement%20Stripe%20sur%20le%20site%20Ô'TOP%20Formation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
          >
            <MessageSquare size={16} />
            <span>Échanger avec Mélissa sur WhatsApp</span>
          </a>
          <a
            href="tel:+33767246825"
            className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            <span>07 67 24 68 25</span>
          </a>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <span>← Retourner à l&apos;accueil du site</span>
        </Link>

      </div>
    </div>
  );
}
