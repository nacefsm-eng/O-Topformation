'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Clock, 
  Building2, 
  Coins, 
  Sparkles, 
  UserCheck, 
  FileCheck 
} from 'lucide-react';

export default function FinancementPage() {
  const stepsFinancement = [
    {
      num: '01',
      title: 'Échange de cadrage (15 min)',
      desc: 'Échange de 15 min avec Mélissa ou Renaud pour cadrer votre projet, identifier votre financeur et étudier les possibilités de prise en charge.',
    },
    {
      num: '02',
      title: 'Convention avec Eloq-One',
      desc: 'Notre partenaire Eloq-One, certifié Qualiopi, établit la convention et le devis ; nous vous aidons à constituer votre demande auprès du financeur.',
    },
    {
      num: '03',
      title: 'Accord financeur & Démarrage sous 24 h',
      desc: 'Dès l’accord de votre financeur (OPCO, FAF, France Travail), vous démarrez votre formation : accès sous 24 h et créneaux d’accompagnement individuel.',
    },
  ];

  const qualitySteps = [
    {
      num: '1',
      title: 'Analyse des besoins',
      desc: 'Questionnaire d’analyse des besoins avant le démarrage, complété si besoin par un échange, pour adapter le parcours à votre contexte.',
    },
    {
      num: '2',
      title: 'Positionnement',
      desc: 'Évaluation du niveau initial du stagiaire afin d’adapter le contenu pédagogique et de définir des objectifs de progression réalistes.',
    },
    {
      num: '3',
      title: 'Animation & Pratique',
      desc: 'Séquences pédagogiques dynamiques alternant apports théoriques, exercices guidés sur vos outils et cas concrets d’entreprise.',
    },
    {
      num: '4',
      title: 'Évaluation & Suivi',
      desc: 'Quiz intégrés à chaque module, cas pratiques et contrôle continu avec seuil d’acquisition des compétences.',
    },
    {
      num: '5',
      title: 'Mesure de Satisfaction',
      desc: 'Questionnaire d’évaluation à chaud remis à l’issue de chaque formation pour mesurer la qualité perçue et recueillir vos retours.',
    },
    {
      num: '6',
      title: 'Amélioration continue',
      desc: 'Analyse systématique des retours apprenants pour faire évoluer nos contenus, nos supports et nos pratiques pédagogiques.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 border-b border-slate-800 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Coins size={16} />
            Financement &amp; Démarche Pédagogique
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Financement &amp; Démarche Pédagogique
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur.
          </p>
        </div>
      </section>

      {/* ── Comment se passe le financement en 3 étapes ── */}
      <section className="py-16 px-4 border-b border-slate-800 bg-slate-900/40">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Procédure Simplifiée
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Comment se passe le financement en 3 étapes
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Nous vous accompagnons pas à pas pour que vos démarches administratives soient simples et fluides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepsFinancement.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-lg hover:border-blue-500/40 transition-all"
              >
                <div>
                  <div className="text-3xl font-black text-blue-500 font-mono mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Accompagnement inclus
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-blue-200 font-medium">
              💡 <strong>Financement étudié selon votre statut (OPCO, FAF, France Travail)</strong>, sous réserve d’accord de votre financeur. <em>Nos formations ne sont pas éligibles au CPF.</em>
            </p>
          </div>

        </div>
      </section>

      {/* ── Les Dispositifs de Financement par Statut ── */}
      <section className="py-16 px-4 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Prise en Charge selon Votre Statut
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Que vous soyez indépendant, chef d’entreprise ou collaborateur, des fonds dédiés existent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* OPCO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Entreprises &amp; Collaborateurs (OPCO)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Atlas, Akto, Opco EP, etc. Votre plan de développement des compétences prend en charge vos formations professionnelles d’équipe ou individuelles.
              </p>
              <div className="text-xs text-blue-400 font-semibold pt-2">
                Étude sur devis et convention de formation
              </div>
            </div>

            {/* FAF */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Coins size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Indépendants &amp; Libéraux (FAF)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                FIF PL, AGEFICE : vous cotisez chaque année à la contribution à la formation professionnelle (CFP) et disposez d’une enveloppe annuelle dédiée.
              </p>
              <div className="text-xs text-amber-400 font-semibold pt-2">
                Demande à constituer avec votre attestation URSSAF
              </div>
            </div>

            {/* FAFCEA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Artisans (FAFCEA)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prise en charge étudiée selon les critères du FAFCEA pour les artisans immatriculés à la CMA. Nous vous aidons à constituer votre dossier.
              </p>
              <div className="text-xs text-purple-400 font-semibold pt-2">
                Nous vous aidons à constituer votre dossier
              </div>
            </div>

            {/* France Travail (remplace CPF) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <UserCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Demandeurs d’emploi (France Travail)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aide individuelle à la formation (AIF) étudiée avec votre conseiller France Travail dans le cadre de votre projet de retour à l’emploi ou de reconversion.
              </p>
              <div className="text-xs text-emerald-400 font-semibold pt-2">
                Aide individuelle à la formation étudiée avec votre conseiller
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Démarche Pédagogique & Référentiel ── */}
      <section className="py-16 px-4 border-b border-slate-800 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Notre démarche pédagogique
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySteps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm font-bold border border-blue-500/30">
                    {step.num}
                  </span>
                  <h4 className="font-bold text-white text-base">{step.title}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Accessibilité Handicap & Réclamations ── */}
      <section className="py-16 px-4 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Handicap */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <HeartHandshake className="text-blue-400" size={26} />
                <h3 className="text-xl font-bold text-white">Accessibilité &amp; Handicap</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Toutes nos formations sont accessibles aux personnes en situation de handicap. Notre référente handicap étudie chaque situation pour adapter les rythmes, les modalités d’évaluation et les supports pédagogiques.
              </p>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Référente handicap : Mélissa Jennadi — <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 underline">formation.rmcf@gmail.com</a> — 07 67 24 68 25
              </div>
            </div>

            {/* Réclamations & Médiation */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <FileCheck className="text-emerald-400" size={26} />
                <h3 className="text-xl font-bold text-white">Réclamations &amp; Médiation</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Conformément à nos engagements, toute réclamation fait l’objet d’un accusé de réception sous 2 jours ouvrés et d’une réponse écrite sous 5 jours ouvrés.
              </p>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Service réclamations : <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 underline">formation.rmcf@gmail.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Nous étudions avec vous les possibilités de financement en 15 minutes.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Notre équipe vous aide à cadrer votre projet, identifier le bon financeur et monter votre demande de prise en charge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/commander?offre=financement"
              className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all text-center"
            >
              Demander une étude de financement →
            </Link>
            <a
              href="https://calendly.com/formation-rmcf/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all"
            >
              Prendre RDV (15 min) ⚡
            </a>
            <a
              href="mailto:formation.rmcf@gmail.com"
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              ✉️ formation.rmcf@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
