import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, MessageSquare, Phone, ShieldCheck, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Paiement non finalisé | Ô\'TOP Formation',
  description: 'Votre commande n\'a pas abouti. Découvrez nos solutions de financement alternatif.',
};

export default function AnnulationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl backdrop-blur-md relative z-10">
        
        {/* Help / Notice Icon */}
        <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/20">
          <HelpCircle size={44} />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          Session interrompue
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
          Votre paiement n&apos;a pas été débité
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Vous avez annulé la transaction ou rencontré une hésitation lors du paiement ? Rassurez-vous, aucun montant n&apos;a été prélevé sur votre carte bancaire.
        </p>

        {/* Alternatives Card */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-left mb-8 space-y-4 text-xs sm:text-sm">
          <div className="font-bold text-white text-sm flex items-center gap-2 border-b border-slate-850 pb-2">
            <ShieldCheck size={18} className="text-emerald-400" />
            <span>Saviez-vous que vous pouvez financer cette formation ?</span>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed">
            Nos formations sont éligibles à une prise en charge par votre <strong>OPCO</strong>, le <strong>FIF-PL</strong>, l&apos;<strong>AGEFICE</strong> ou votre entreprise via notre partenaire certifié Qualiopi <strong>Eloq-One</strong>.
          </p>

          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200">
            💡 <strong>Besoin d&apos;un conseil immédiat ?</strong> Mélissa peut vérifier vos droits au financement en 15 minutes montre en main.
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20j'ai%20une%20question%20avant%20de%20finaliser%20mon%20inscription%20sur%20le%20site%20Ô'TOP%20Formation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
          >
            <MessageSquare size={16} />
            <span>Poser ma question à Mélissa 💬</span>
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
          >
            <span>Étudier mon dossier OPCO →</span>
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <span>← Revenir aux parcours de formation</span>
        </Link>

      </div>
    </div>
  );
}
