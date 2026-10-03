import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "À Propos d’Ô’TOP Formations | Notre Mission & Équipe",
  description:
    "Découvrez Ô’TOP Formations : la synergie entre l’Intelligence Artificielle et la Méthode TOP® (Techniques d’Optimisation du Potentiel) pour développer votre entreprise avec méthode et sérénité.",
  alternates: {
    canonical: 'https://otopformations.com/a-propos',
  },
};

export default function AProposPage() {
  return (
    <main>
      {/* ── HERO BANNER ── */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--blue-100)', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'white' }}>Accueil</Link>
            <span className="breadcrumb-sep" style={{ margin: '0 0.5rem' }}>›</span>
            <span>À Propos</span>
          </div>
          <span className="badge" style={{ background: 'rgba(205, 175, 93, 0.2)', color: 'var(--gold-light)', border: '1px solid var(--gold)', marginBottom: '1rem' }}>
            Organisme de formation • Ollioules (Var) &amp; 100 % en ligne
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            L’IA et l’humain au service d’une performance durable.
          </h1>
          <p style={{ color: 'var(--blue-100)', fontSize: '1.2rem', maxWidth: '850px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Ô’TOP Formations est né d’une conviction simple : l’IA doit vous faire gagner du temps, de la clarté et de l’efficacité — pas ajouter de la complexité ou de la charge mentale.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/commander?offre=rs6776" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2rem', fontWeight: 800 }}>
              Commencer mon inscription →
            </Link>
            <a 
              href="https://calendly.com/formation-rmcf/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3.5 rounded-xl bg-[#021842] hover:bg-[#062463] text-cyan-300 border border-cyan-400/50 font-bold text-sm transition shadow flex items-center gap-2"
            >
              Échanger 15 min avec Mélissa ou Renaud
            </a>
          </div>
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
              Réconcilier efficacité technologique et adhésion humaine
            </h2>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              Dans un quotidien professionnel saturé, intégrer les bons outils est devenu indispensable, mais cela ne doit pas se faire au détriment de l’équilibre des équipes.
            </p>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              Intégrer l’IA bouscule les habitudes et les processus. Pour que vos équipes adoptent durablement ces nouvelles pratiques, nous associons nos formations IA à la Méthode TOP® : gestion de la pression, concentration, adaptabilité et conduite du changement.
            </p>
            <p className="text-slate-200" style={{ color: '#e2e8f0' }}>
              <strong className="text-white" style={{ color: '#ffffff' }}>Notre rôle :</strong> vous donner les clés concrètes pour automatiser ce qui doit l’être, structurer vos processus et préserver votre concentration au fil des semaines.
            </p>
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 leading-relaxed">
              ℹ️ Ô’TOP Formations prépare aux certifications RS6776, RS7344 et RS7351, enregistrées au Répertoire spécifique de France Compétences. Pour les formations financées, conventions et facturation sont assurées par notre partenaire Eloq-One, organisme certifié Qualiopi au titre de la catégorie Actions de formation. Ô’TOP Formations est en cours de certification Qualiopi. Enregistré sous le numéro [NDA] auprès du préfet de région PACA (cet enregistrement ne vaut pas agrément de l’État).
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group">
              <img
                src="/hero-workshop.jpg"
                alt="Centre Ô'TOP Formations Ollioules"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs text-slate-300">
                <span className="font-bold text-white block mb-0.5">Siège social d’Ollioules (Var)</span>
                Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules • Formations 100 % en ligne et accompagnement individuel par un expert.
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
                Pas de théorie abstraite. Des cas concrets, des outils configurés directement pour votre métier et du temps libéré sur vos tâches récurrentes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">2. Adoption &amp; Efficacité</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                La Méthode TOP® pour accompagner le changement et garder la performance et la lucidité des équipes face à l’accélération technologique.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">3. Accompagnement Rigoureux</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                2 h d’accompagnement individuel avec un expert incluses dans chaque parcours, et une aide attentive à l’étude de votre financement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION L’ÉQUIPE ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Une Équipe d’Experts Joignables
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Pas de centre anonyme : vous échangez directement avec les formateurs et experts référents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mélissa */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-melyssa.png"
                alt="Mélissa Jennadi"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-amber-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Présidente &amp; Formatrice Certifiée TOP®
                </span>
                <h3 className="text-xl font-bold text-white">Mélissa Jennadi</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Présidente et formatrice certifiée Méthode TOP®, référente pédagogique et référente handicap d’Ô’TOP Formations.
                </p>
              </div>
            </div>

            {/* Renaud */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-renaud.jpg"
                alt="Renaud"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-blue-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  Consultant Expert IA &amp; Systèmes d’Information
                </span>
                <h3 className="text-xl font-bold text-white">Renaud</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Consultant expert en ingénierie et IA générative. Il pilote la conduite du changement, l’acculturation des équipes et l’optimisation des flux opérationnels.
                </p>
              </div>
            </div>

            {/* MG */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-mg.jpg"
                alt="MG"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-cyan-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  Expert Cybersécurité &amp; Résilience IA
                </span>
                <h3 className="text-xl font-bold text-white">MG</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Expert cybersécurité et résilience IA, spécialisé dans la sécurisation des flux de données et la conformité AI Act des entreprises.
                </p>
              </div>
            </div>

            {/* Régis */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl">
              <img
                src="/team-regis.png"
                alt="Régis Domergue"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-emerald-400/40 shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Formateur Certifié Méthode TOP®
                </span>
                <h3 className="text-xl font-bold text-white">Régis Domergue</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Expert TOP® avec 15 ans de pratique, ancien cadre militaire et spécialiste de la performance mentale sous contrainte.
                </p>
              </div>
            </div>

          </div>

          {/* Bannière CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900 border border-blue-500/30 text-center space-y-4">
            <h3 className="text-2xl font-black text-white">
              Prêt(e) à monter en compétences avec méthode ?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Inscrivez-vous en ligne ou prenez 15 minutes avec Mélissa ou Renaud pour concevoir votre parcours et étudier votre financement.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/commander?offre=rs6776"
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all"
              >
                Commencer mon inscription →
              </Link>
              <a
                href="https://calendly.com/formation-rmcf/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all"
              >
                Prendre RDV (15 min) ⚡
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
