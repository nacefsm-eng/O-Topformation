'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileText, 
  Users, 
  HeartHandshake, 
  Mail, 
  Phone,
  ArrowRight,
  Clock,
  Sparkles,
  Building2,
  Coins,
  FileCheck
} from 'lucide-react';

export default function FinancementPage() {
  const stepsFinancement = [
    {
      num: '01',
      title: 'Devis & Diagnostic personnalisé',
      desc: 'Échange de 15 minutes avec notre équipe pour cibler votre besoin et formaliser votre devis ainsi que le programme détaillé.',
    },
    {
      num: '02',
      title: 'Montage du dossier avec notre partenaire',
      desc: 'Nous transmettons l’ensemble des pièces administratives et montons votre dossier de prise en charge avec notre organisme partenaire certifié.',
    },
    {
      num: '03',
      title: 'Accord de prise en charge & Formation',
      desc: 'Dès validation de votre financeur (OPCO, FAF, CPF), vous démarrez votre formation avec accès 24/7 et vos créneaux de coaching individuel.',
    },
  ];

  const qualitySteps = [
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
      desc: 'Évaluations formatives tout au long du parcours et contrôle continu avec seuil d\'acquisition des compétences.',
    },
    {
      num: '5',
      title: 'Mesure de Satisfaction',
      desc: 'Questionnaire d\'évaluation à chaud remis à l\'issue de chaque formation pour mesurer la qualité perçue et recueillir vos retours.',
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
            Financement &amp; Démarche Qualité
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Financement &amp; Démarche Qualité
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Organisme de formation déclaré (NDA en cours) · démarche Qualiopi en cours, actuellement porté par l&apos;organisme certifié Eloqone.
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
              Nous vous accompagnons pas à pas pour que vos démarches administratives soient simples et rapides.
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
              💡 <strong>Finançable selon votre statut (OPCO, FAF, CPF)</strong> via notre organisme partenaire. Vous ne financez pas d&apos;avance superflue : nous montons le dossier directement avec vous.
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
              Que vous soyez indépendant, chef d&apos;entreprise ou salarié, des fonds dédiés existent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Entreprises &amp; Salariés (OPCO)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Atlas, Akto, Opco EP, etc. Votre plan de développement des compétences prend en charge vos formations professionnelles d&apos;équipe ou individuelles.
              </p>
              <div className="text-xs text-blue-400 font-semibold pt-2">
                Eligible sur devis et convention de formation
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Coins size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Indépendants &amp; Libéraux (FAF)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                FIF PL, Agefice : vous cotisez chaque année à la contribution à la formation professionnelle (CFP) et disposez d&apos;une enveloppe annuelle dédiée.
              </p>
              <div className="text-xs text-amber-400 font-semibold pt-2">
                Dossier monté sur attestation URSSAF
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Artisans &amp; Esthétique (FAFCEA)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Prise en charge intégrale possible pour les formations pratiques et corporelles (Head Spa, protocoles bien-être) pour les professionnels immatriculés au CMA.
              </p>
              <div className="text-xs text-purple-400 font-semibold pt-2">
                Montage du dossier FAFCEA assuré
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Compte Personnel de Formation (CPF)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Disponible pour les formations certifiées enregistrées au Répertoire Spécifique de France Compétences via notre organisme partenaire porteur.
              </p>
              <div className="text-xs text-emerald-400 font-semibold pt-2">
                Mobilisation directe sur MonCompteFormation
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Démarche Qualité & Référentiel ── */}
      <section className="py-16 px-4 border-b border-slate-800 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Notre Démarche Qualité &amp; Mentions Légales
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Ô&apos;TOP Formation intervient avec l&apos;organisme partenaire Eloqone, certifié Qualiopi, qui porte les actions de formation et les démarches de financement. NDA Ô&apos;TOP Formation en cours d&apos;attribution. Cette démarche assure la rigueur méthodologique, l&apos;adaptation des contenus aux besoins des bénéficiaires et l&apos;amélioration continue de nos prestations.
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
                Toutes nos formations sont accessibles aux personnes en situation de handicap. Notre référent handicap étudie chaque situation pour adapter les rythmes, les modalités d&apos;évaluation et les supports pédagogiques.
              </p>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Contact référent handicap : <a href="mailto:contact@otopformation.fr" className="text-blue-400 underline">contact@otopformation.fr</a>
              </div>
            </div>

            {/* Réclamations & Médiation */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <FileCheck className="text-emerald-400" size={26} />
                <h3 className="text-xl font-bold text-white">Réclamations &amp; Médiation</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Conformément à nos engagements, toute réclamation ou difficulté rencontrée fait l&apos;objet d&apos;une instruction sous 5 jours ouvrés avec proposition de solution écrite.
              </p>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Service réclamation : <a href="mailto:contact@otopformation.fr" className="text-blue-400 underline">contact@otopformation.fr</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Besoin d&apos;une étude de financement personnalisée ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Notre équipe vérifie votre éligibilité en 15 minutes et prépare votre dossier administratif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all"
            >
              Réserver mon diagnostic de 15 min →
            </Link>
            <a
              href="mailto:contact@otopformation.fr"
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              ✉️ Écrire à contact@otopformation.fr
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
