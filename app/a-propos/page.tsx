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
          <h1>L’IA et l’humain au service d’une performance durable.</h1>
          <p>
            Ô’TOP Formation est né d’une conviction simple : le digital doit vous faire gagner du temps, de la clarté et de l’énergie — pas ajouter de la charge mentale.
          </p>
        </div>
      </section>

      {/* ── SECTION GENÈSE & HISTOIRE ── */}
      <section className="py-20 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Pourquoi nous existons
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Réconcilier efficacité digitale et sérénité opérationnelle
            </h2>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              Dans un quotidien pro saturé, intégrer les bons outils est devenu indispensable, mais cela ne doit pas se faire au détriment de l’équilibre des équipes.
            </p>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              Trop de formations au digital se limitent à des modules génériques sans application directe. À l’inverse, les démarches de bien-être ignorent souvent les impératifs de rentabilité et les contraintes quotidiennes des entreprises.
            </p>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              <strong className="text-white" style={{ color: '#ffffff' }}>Notre rôle :</strong> vous donner les clés pour automatiser ce qui doit l’être, structurer vos processus et préserver votre concentration et votre énergie au fil des semaines.
            </p>
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200">
              ℹ️ Ô’TOP Formation intervient avec son partenaire Eloq-One, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
            </div>
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
                Espace Gamma 1, 139 Chemin des 2 Frères • Formations en présentiel &amp; accompagnement à distance partout en France.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION LES 3 VALEURS FONDATRICES ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
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
              <h3 className="text-xl font-bold text-white">1. Clarté &amp; Pragmatisme</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pas de jargon inutile. Des cas concrets, des outils configurés directement pour votre métier et du temps libéré dès les premières semaines.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">2. Équilibre &amp; Efficacité</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Des méthodes reconnues (dont la méthode TOP®) pour mieux gérer la pression, maintenir un bon niveau d’énergie et travailler sereinement.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">3. Accompagnement Rigoureux</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Un suivi individuel avec nos formateurs et un accompagnement complet dans vos démarches de prise en charge, en partenariat avec l’organisme certifié Qualiopi Eloq-One.
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
                  Consultant Expert IA &amp; Systèmes d&apos;Information
                </span>
                <h3 className="text-xl font-bold text-white">Renaud</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consultant expert en ingénierie et IA générative. Il pilote la conduite du changement, l&apos;acculturation des collaborateurs aux bénéfices concrets de l&apos;IA et l&apos;optimisation des processus opérationnels.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-med-aly.jpg"
                alt="Med Aly Garma"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-cyan-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  Expert Cybersécurité &amp; Résilience IA
                </span>
                <h3 className="text-xl font-bold text-white">Med Aly GARMA</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des flux d&apos;intelligence artificielle en entreprise.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-regis.png"
                alt="Régis"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-emerald-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Stratégie Opérationnelle &amp; Gestion
                </span>
                <h3 className="text-xl font-bold text-white">Régis</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique pour sécuriser chaque étape de la transition et la gestion quotidienne.
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
