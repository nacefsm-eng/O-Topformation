'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Search, 
  Users, 
  FileText, 
  HeartHandshake, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';

export default function QualitePage() {
  const steps = [
    {
      num: '1',
      title: 'Analyse des besoins',
      desc: 'Entretien préalable approfondi pour identifier vos objectifs, vos contraintes et adapter le parcours à votre contexte spécifique.',
    },
    {
      num: '2',
      title: 'Positionnement',
      desc: 'Évaluation du niveau initial du stagiaire afin d\'adapter le contenu pédagogique et de définir des objectifs de progression réalistes.',
    },
    {
      num: '3',
      title: 'Animation & Pratique',
      desc: 'Séquences pédagogiques dynamiques alternant apports théoriques, exercices guidés sur vos outils et cas concrets d\'entreprise.',
    },
    {
      num: '4',
      title: 'Évaluation & Suivi',
      desc: 'Évaluations formatives tout au long du parcours (QCM mi-parcours) et sommative en fin de formation avec seuil de validation à 70 %.',
    },
    {
      num: '5',
      title: 'Mesure de Satisfaction',
      desc: 'Questionnaire de satisfaction à chaud remis à l\'issue de chaque formation pour mesurer la qualité perçue et recueillir vos retours.',
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={16} />
            Certification Qualité Qualiopi
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Démarche Qualité &amp; Handicap
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ô&apos;TOP Formation s&apos;engage pour l&apos;excellence pédagogique, la transparence de ses processus et l&apos;accessibilité totale de ses formations.
          </p>
        </div>
      </section>

      {/* ── Engagement & Référentiel National Qualité ── */}
      <section className="py-16 px-4 border-b border-slate-850">
        <div className="container mx-auto max-w-5xl">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Award size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Organisme certifié pour les actions de formation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
                  La garantie du Référentiel National Qualité
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  La certification Qualiopi atteste de la conformité rigoureuse de nos processus aux 7 critères nationaux. Elle ouvre l&apos;accès immédiat aux prises en charge par les fonds publics et mutualisés (OPCO, FAF, CPF).
                </p>
              </div>
            </div>
          </div>

          {/* 2 Colonnes d'explications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-400" />
                Notre Engagement Pédagogique
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Chaque parcours de formation fait l&apos;objet d&apos;une ingénierie soignée : objectifs opérationnels précis, évaluation initiale des compétences, alternance entre théorie et pratique sur cas réels d&apos;entreprise.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nos formateurs sont tous des experts du terrain en activité, régulièrement formés aux évolutions techniques et méthodologiques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-400" />
                Accompagnement Administratif
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Nous prenons en charge le montage de votre dossier de financement (OPCO, FIF-PL, Agefice, CPF) afin de vous éviter les tracasseries administratives.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Conventions de formation, attestations de présence, feuilles d&apos;émargement et certificats de réalisation conformes à la réglementation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROCESSUS QUALITÉ EN 6 ÉTAPES (CORRECTION DU CONTRASTE ET VISIBILITÉ) ── */}
      <section className="py-20 px-4 bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              Rigueur & Transparence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Notre processus qualité en 6 étapes
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Chaque formation suit un protocole strict pour assurer l&apos;assimilation durable des compétences.
            </p>
          </div>

          {/* 6 High-Contrast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-700/80 hover:border-blue-500/60 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center mb-5 shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1 text-xs text-blue-400 font-semibold">
                  <span>Étape {step.num} / 6 validée</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Accessibilité & Handicap ── */}
      <section className="py-20 px-4 border-b border-slate-850">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Accessibilité &amp; Inclusion Handicap
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Ô&apos;TOP Formation met tout en œuvre pour rendre ses formations accessibles à tous les publics. Nous étudions chaque situation individuellement pour aménager nos supports et nos modalités d&apos;accueil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Référente Handicap Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 text-xl font-bold">
                ♿
              </div>
              <h3 className="text-xl font-bold text-white">Référente Handicap & Qualité</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pour toute question relative à l&apos;accessibilité de nos formations ou pour demander un aménagement adapté à votre situation de handicap, contactez directement notre référente :
              </p>

              <div className="pt-2 space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Référente :</span>
                  <strong className="text-white">Mélissa JENNADI</strong>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Email :</span>
                  <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 underline">formation.rmcf@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Téléphone :</span>
                  <a href="tel:+33767246825" className="text-emerald-400 font-bold">07 67 24 68 25</a>
                </div>
              </div>
            </div>

            {/* Réclamations Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400 text-xl font-bold">
                📩
              </div>
              <h3 className="text-xl font-bold text-white">Traitement des Réclamations</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Toute réclamation ou remarque concernant nos parcours pédagogiques fait l&apos;objet d&apos;une traçabilité et d&apos;une réponse écrite sous 48 heures ouvrées par la direction.
              </p>

              <div className="pt-2 space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Contact :</span>
                  <strong className="text-white">Pôle Qualité Ô&apos;TOP</strong>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Email :</span>
                  <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 underline">formation.rmcf@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-medium">Délais :</span>
                  <span className="text-emerald-400 font-semibold">Réponse sous 48h ouvrées</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-16 px-4 bg-slate-950 text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Une question sur notre démarche qualité ?
          </h2>
          <p className="text-slate-400 text-base">
            Notre équipe est à votre disposition pour vous transmettre tous les documents réglementaires et auditer votre prise en charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
            >
              Échanger avec notre équipe
            </Link>
            <Link 
              href="/ressources/documents" 
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all"
            >
              Télécharger nos documents légaux
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
