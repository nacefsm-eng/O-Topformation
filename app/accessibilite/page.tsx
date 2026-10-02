import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { HeartHandshake, Mail, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accessibilité & Handicap | Ô’TOP Formations',
  description: 'Engagement accessibilité handicap d’Ô’TOP Formations. Étude des aménagements pédagogiques et référente handicap dédiée.',
};

export default function AccessibilitePage() {
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
            <HeartHandshake size={14} />
            <span>Égalité des Chances &amp; Inclusion</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Accessibilité &amp; Situation de Handicap
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Ô’TOP Formations s’engage pour l’accessibilité de l’ensemble de ses cursus aux personnes en situation de handicap.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8 text-sm leading-relaxed text-slate-300">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">Notre Démarche d’Accueil et d’Adaptation</h2>
            <p>
              Toutes nos formations peuvent faire l’objet d’adaptations spécifiques selon la nature du handicap (visuel, auditif, moteur, cognitif ou temporaire).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 size={16} className="text-emerald-400 mb-2" />
                <h3 className="font-bold text-white text-xs mb-1">Formations 100% en Ligne</h3>
                <p className="text-xs text-slate-400">
                  Rythme individualisé, vidéos sous-titrées, supports téléchargeables et compatibles avec les lecteurs d’écran.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 size={16} className="text-emerald-400 mb-2" />
                <h3 className="font-bold text-white text-xs mb-1">Accompagnement 1-to-1</h3>
                <p className="text-xs text-slate-400">
                  Temps d’échange adapté en visio, aménagement des durées et des formats de rendu selon les besoins.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border-2 border-blue-500/30">
            <h2 className="text-xl font-bold text-white mb-2">Votre Référente Handicap Dédiée</h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Mélissa Jennadi étudie personnellement chaque demande en amont de l’inscription pour mobiliser si nécessaire le réseau de partenaires spécialisés (Agefiph, Cap Emploi, FIPHFP).
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white text-sm">Mélissa Jennadi</div>
              <div className="text-slate-400">Présidente &amp; Référente Handicap Ô’TOP Formations</div>
              <div className="flex items-center gap-2 pt-2">
                <Mail size={14} className="text-blue-400" />
                <a href="mailto:melissa@otopformations.com" className="text-blue-400 hover:underline">melissa@otopformations.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" />
                <span>07 67 24 68 25</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
