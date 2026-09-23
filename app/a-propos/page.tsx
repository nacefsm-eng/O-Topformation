import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { ShieldCheck, HeartHandshake, Zap, Target, MapPin, Users, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "À Propos d'Ô'TOP Formation | Notre Histoire, Mission & Équipe à Ollioules",
  description:
    "Découvrez l'histoire d'Ô'TOP Formation à Ollioules (Var) : la synergie unique entre l'Intelligence Artificielle et la Méthode TOP® (Techniques d'Optimisation du Potentiel) pour développer votre entreprise sans vous épuiser.",
  alternates: {
    canonical: 'https://o-topformation.vercel.app/a-propos',
  },
};

export default function AProposPage() {
  return (
    <main>
      {/* ── HERO BANNER ── */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>À Propos</span>
          </div>
          <h1>L&apos;Alliance du Potentiel Humain et de la Puissance Digitale</h1>
          <p>
            Fondé à Ollioules dans le Var, Ô&apos;TOP Formation est né d&apos;une conviction : la technologie ne doit pas vous épuiser, elle doit vous libérer du temps pour ce qui compte vraiment.
          </p>
        </div>
      </section>

      {/* ── SECTION GENÈSE & HISTOIRE ── */}
      <section className="py-20 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Notre Genèse
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pourquoi avoir créé Ô&apos;TOP Formation ?
            </h2>
            <p>
              Dans un monde professionnel en accélération constante, les dirigeants, indépendants et salariés font face à un double défi : <strong>assimiler la révolution de l&apos;Intelligence Artificielle</strong> tout en préservant leur <strong>santé mentale et leur équilibre de vie</strong>.
            </p>
            <p>
              Trop de formations au digital se résument à des vidéos théoriques impersonnelles où l&apos;apprenant reste livré à lui-même. À l&apos;inverse, les formations au bien-être négligent souvent la réalité économique et la productivité exigée par les entreprises.
            </p>
            <p>
              <strong>Ô&apos;TOP Formation fait le pont entre ces deux mondes.</strong> Nous associons l&apos;exigence des <em>Techniques d&apos;Optimisation du Potentiel (TOP®)</em> — issues des forces d&apos;élite et du sport de haut niveau — à la puissance de frappe des outils d&apos;IA générative les plus avancés (ChatGPT, Claude, n8n, Make).
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="/hero-workshop.jpg"
                alt="Centre Ô'TOP Formation Ollioules"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                <span className="font-bold text-white block mb-0.5">Centre Pédagogique d&apos;Ollioules (Var)</span>
                Espace Gamma 1, 139 Chemin des 2 Frères • Sessions en présentiel &amp; visio-coaching partout en France.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION LES 3 VALEURS FONDATRICES ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Notre ADN
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Les 3 Piliers de Notre Démarche
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">1. Pragmatisme Zéro-Blabla</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pas de théorie abstraite : chaque formation intègre <strong>5h de coaching individuel 1-to-1</strong> directement sur vos propres documents d&apos;entreprise pour construire vos assistants IA et vos automatisations sur-mesure.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">2. Écologie Humaine &amp; Somatique</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Gagner 15h par semaine avec l&apos;IA ne sert à rien si vous êtes en état de surchauffe. La méthode TOP® vous dote d&apos;outils respiratoires et cognitifs pour rester serein, lucide et concentré au quotidien.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">3. Financement &amp; Accessibilité 100%</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                En partenariat avec l&apos;organisme certifié Qualiopi <strong>Eloqone</strong>, nous gérons l&apos;intégralité de votre dossier OPCO ou FAF pour viser une prise en charge à 100% sans avance de trésorerie de votre poche.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION LES FONDATEURS & DIRECTEURS ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Une Équipe Passionnée &amp; Joignable
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Pas de centre anonyme : vous échangez directement avec les fondateurs et formateurs référents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-melyssa.png"
                alt="Mélissa Jennadi"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-amber-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Présidente &amp; Formatrice TOP®
                </span>
                <h3 className="text-xl font-bold text-white">Mélissa JENNADI</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Praticienne certifiée aux Techniques d&apos;Optimisation du Potentiel (TOP®), spécialisée dans la régulation émotionnelle, le sommeil réparateur et la gestion des dossiers de subvention formation.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-renaud.jpg"
                alt="Renaud"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-blue-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  Directeur Pédagogique Digital &amp; IA
                </span>
                <h3 className="text-xl font-bold text-white">Renaud</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Expert en IA générative, prompt engineering et automatisation no-code (Make, n8n). Il accompagne les dirigeants et indépendants pour convertir la technologie en résultats mesurables.
                </p>
              </div>
            </div>

          </div>

          {/* Bannière CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900 border border-blue-500/30 text-center space-y-4">
            <h3 className="text-2xl font-black text-white">
              Prêt à démultiplier vos résultats sans vous épuiser ?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Réservez votre échange gratuit de 15 minutes avec Mélissa pour concevoir votre parcours et vérifier vos droits de financement.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all"
              >
                Réserver mon diagnostic offert (15 min) →
              </Link>
              <Link
                href="/brochure"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all"
              >
                Télécharger la Brochure PDF 📄
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
