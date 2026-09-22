'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/ui/team-member-card';
import ClientFeedback from '@/components/ui/testimonial';
import GetInTouch from '@/components/ui/get-in-touch';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Brain, 
  Lock, 
  Cpu, 
  Award, 
  Calculator,
  MessageCircle,
  FileText,
  Video,
  Share2,
  Users,
  TrendingUp,
  Layers,
  Bot,
  Zap,
  Check,
  Download,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function HomePageClient() {
  // Course Selector State
  const [activeCourse, setActiveCourse] = useState<'ia-indep' | 'ia-business' | 'reseaux'>('ia-indep');

  // Simulator State
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(65);
  const annualSavingsHours = hoursPerWeek * 46;
  const annualSavingsEuros = Math.round(annualSavingsHours * hourlyRate * 0.65);

  // Hero Scroll Animation Ref
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 0.8], [0, -50]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* ─── 1. HERO OFFICIEL CONFORME ───────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950 border-b border-slate-850">
        
        {/* Glow ambient meshes */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-blue-500/15 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-center max-w-4xl mx-auto"
          >
            
            {/* Top Badges strictly verified */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-blue-900/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>RS enregistrés France Compétences</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-cyan-300 font-bold">5 h de coaching individuel inclus</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-amber-300 font-medium">Organisme déclaré · Porté par Eloqone</span>
            </motion.div>

            {/* Main Headline H1 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white"
            >
              Maîtrisez l&apos;IA et devenez indispensable
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
            >
              Pour dirigeants de TPE/PME, indépendants et équipes : 3 parcours concrets pour automatiser votre activité, avec <strong>5 h de coaching individuel inclus</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Réserver mon diagnostic de 15 min ⚡</span>
              </a>

              <a
                href="#parcours"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
              >
                <span>Découvrir les parcours →</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Bento Gallery 3D Cards */}
          <motion.div 
            style={{ y: cardTranslateY }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6"
          >
            {/* Main Featured Image Card */}
            <div className="md:col-span-8 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src="/hero-ai-workspace.jpg" 
                alt="Station de travail IA & Cybersécurité moderne" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold w-fit mb-2">
                    ⚡ Environnement Pratique & Sécurisé
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Automatisez vos processus métier sans jargon
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    Assistants GPT dédiés, workflows d&apos;automatisation, et conformité AI Act européen (calendrier 2025-2026).
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-emerald-400 font-extrabold text-lg">100% Actionnable</span>
                  <div className="text-slate-400 text-xs">5h coaching 1-to-1</div>
                </div>
              </div>
            </div>

            {/* Side Stacked Cards */}
            <div className="md:col-span-4 flex flex-col gap-4">
              
              {/* Card 1: Social Media Growth */}
              <div className="relative h-[190px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
                <img 
                  src="/formation-social-growth.jpg" 
                  alt="Formation communication digitale" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Prépa RS7351 • 11h+ Vidéos</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Réseaux Sociaux & Social Selling</h4>
                  <p className="text-xs text-slate-300">Canva, CapCut, Meta Ads, Waalaxy</p>
                </div>
              </div>

              {/* Card 2: AI Business Integration */}
              <div className="relative h-[190px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
                <img 
                  src="/formation-ai-dev.jpg" 
                  alt="Formation IA Business" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">RS7344 • Sur-mesure</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Intégration de l&apos;IA en Entreprise</h4>
                  <p className="text-xs text-slate-300">Méthode STEP, déploiement & ROI</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">3 Titres RS</div>
              <div className="text-xs font-semibold text-slate-400">France Compétences</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-0.5">Finançable</div>
              <div className="text-xs font-semibold text-slate-400">Selon statut (OPCO, FAF, CPF)</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-0.5">5h Coaching</div>
              <div className="text-xs font-semibold text-slate-400">Accompagnement individuel inclus</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-0.5">Porté Eloqone</div>
              <div className="text-xs font-semibold text-slate-400">Organisme déclaré (NDA en cours)</div>
            </div>
          </div>

        </div>
      </section>


      {/* ─── 2. QUALITÉ ET CERTIFICATIONS (3 BLOCS COURTS) ───────────────── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              Cadre Réglementaire & Qualité
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Qualité, Transparence & Certifications
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Un cadre pédagogique et administratif rigoureux pour sécuriser votre investissement formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bloc 1 : Démarche Qualité & Portage */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Démarche Qualité & Déclaration</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  SAS Ô&apos;TOP Formation est un organisme déclaré (NDA en cours d&apos;attribution auprès de la DREETS PACA). Nos actions de formation certifiantes sont actuellement dispensées sous convention de portage avec l&apos;organisme certifié Qualiopi <strong>Eloqone</strong>.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-900 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <Check size={14} />
                <span>Portage Qualiopi actif & conforme</span>
              </div>
            </div>

            {/* Bloc 2 : France Compétences & Titres RS */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Award size={26} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">France Compétences & Titres RS</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Nos 3 parcours préparent à des certifications enregistrées au Répertoire Spécifique : <strong>RS6776</strong> (IA Générative), <strong>RS7344</strong> (IA en Entreprise), et formation préparant à la certification <strong>RS7351</strong> (Communication Réseaux Sociaux).
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-900 text-xs text-blue-400 font-semibold flex items-center gap-1.5">
                <Check size={14} />
                <span>Référentiels officiels d&apos;évaluation</span>
              </div>
            </div>

            {/* Bloc 3 : Modalités d'évaluation & 5h coaching */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Users size={26} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Modalités & 5h Coaching Inclus</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mises en situation pratiques sur vos propres cas d&apos;usage d&apos;entreprise, jurys d&apos;évaluation impartiaux et <strong>5 heures de coaching individuel 1-to-1</strong> avec nos formateurs pour lever chaque point de blocage.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-900 text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
                <Check size={14} />
                <span>Cas réels & accompagnement humain</span>
              </div>
            </div>

          </div>

          {/* Lien clair vers Financement */}
          <div className="mt-8 text-center">
            <Link
              href="/financement"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Consulter le détail de notre démarche qualité, des financements et de l&apos;accessibilité handicap</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>


      {/* ─── 3. LES 3 PARCOURS EN UN COUP D'ŒIL (TABS & DÉTAILS) ─────────── */}
      <section id="parcours" className="py-24 px-4 bg-slate-950 border-b border-slate-800 relative">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Catalogue Officiel
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Les 3 Parcours en un coup d&apos;œil
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Des formations concrètes, modulaires et adaptées à vos contraintes de temps. Zéro prérequis technique requis.
            </p>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl w-fit mx-auto">
              <button
                onClick={() => setActiveCourse('ia-indep')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'ia-indep'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚡ 1. IA Générative (RS6776)
              </button>
              <button
                onClick={() => setActiveCourse('ia-business')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'ia-business'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🤖 2. IA Entreprise (RS7344)
              </button>
              <button
                onClick={() => setActiveCourse('reseaux')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'reseaux'
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📱 3. Réseaux Sociaux (Prépa RS7351)
              </button>
            </div>
          </div>

          {/* COURSE 1: IA GÉNÉRATIVE RS6776 */}
          {activeCourse === 'ia-indep' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-blue-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
                    Certification RS6776 • France Compétences
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Formation à l&apos;Intelligence Artificielle Générative
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Pensée pour les indépendants, coachs, consultants et dirigeants de TPE qui souhaitent intégrer l&apos;IA générative dans leur activité quotidienne pour automatiser la rédaction, les visuels et les devis.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">100% à distance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-blue-400">16h vidéos + 5h coaching</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">OPCO / FAF / CPF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Certification</div>
                      <div className="text-base font-bold text-amber-400">Titre certifié RS6776</div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="flex-1 py-3.5 text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                    >
                      Demander un diagnostic (15 min) ⚡
                    </a>
                    <Link
                      href="/formations/ia"
                      className="py-3.5 px-5 text-center rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all flex items-center justify-center"
                    >
                      Détails programme →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (3 Modules Clés)
                  </h4>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 1</span>
                      <span className="text-xs text-slate-500 font-medium">Stratégie</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Mise en œuvre de la stratégie d&apos;implémentation de l&apos;IA</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Découverte des principales interfaces d&apos;IA générative et identification des opportunités.</li>
                      <li>• Repérage des tâches répétitives chronophages et choix des outils adaptés.</li>
                      <li>• Élaboration de votre plan stratégique d&apos;automatisation sans vous disperser.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 2</span>
                      <span className="text-xs text-slate-500 font-medium">Production Métier</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Création de contenus rédactionnels et visuels</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Prompting professionnel et création d&apos;un assistant GPT personnalisé pour votre métier.</li>
                      <li>• Outils de génération d&apos;images et déclinaisons graphiques prêtes à l&apos;emploi.</li>
                      <li>• Éviter les risques de fuites d&apos;informations sensibles dans les modèles publics.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 3</span>
                      <span className="text-xs text-slate-500 font-medium">Sécurité & Éthique</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Conformité réglementaire et AI Act européen</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Confidentialité des données clients et respect du RGPD.</li>
                      <li>• Calendrier d&apos;application 2025-2026 de l&apos;AI Act européen.</li>
                      <li>• Validation systématique des résultats et esprit critique face aux hallucinations.</li>
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* COURSE 2: DÉVELOPPER SON ACTIVITÉ AVEC L'IA RS7344 */}
          {activeCourse === 'ia-business' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-indigo-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                    Certification RS7344 • France Compétences
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Développer son activité avec l&apos;IA
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Formation pour dirigeants de TPE/PME et managers souhaitant piloter la transformation numérique de leur entreprise, automatiser leurs processus et former leurs équipes en toute sécurité.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">Distanciel ou Blended</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-indigo-400">14h à 35h sur-mesure</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">OPCO / FAF / CPF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Certification</div>
                      <div className="text-base font-bold text-amber-400">Titre certifié RS7344</div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="flex-1 py-3.5 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all"
                    >
                      Demander un diagnostic (15 min) ⚡
                    </a>
                    <Link
                      href="/formations/ia"
                      className="py-3.5 px-5 text-center rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all flex items-center justify-center"
                    >
                      Détails programme →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (5 Modules Stratégiques)
                  </h4>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 1 •</span>
                    <strong className="text-white text-sm ml-2">Opportunités d&apos;intégration</strong>
                    <p className="text-xs text-slate-400 mt-1">Cartographie des flux de travail (méthode STEP) et sélection des outils à fort ROI.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 2 •</span>
                    <strong className="text-white text-sm ml-2">Plan d&apos;intégration & Budget</strong>
                    <p className="text-xs text-slate-400 mt-1">Maturité numérique, feuille de route réaliste, conformité RGPD et AI Act.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 3 •</span>
                    <strong className="text-white text-sm ml-2">Implémentation & Automatisation</strong>
                    <p className="text-xs text-slate-400 mt-1">Configuration des outils sans code (n8n/Make), automatisation des processus administratifs.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 4 •</span>
                    <strong className="text-white text-sm ml-2">Accompagnement des Équipes</strong>
                    <p className="text-xs text-slate-400 mt-1">Montée en compétences des collaborateurs, rédaction de la Charte d&apos;usage interne.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 5 •</span>
                    <strong className="text-white text-sm ml-2">Mesure d&apos;impact & Amélioration</strong>
                    <p className="text-xs text-slate-400 mt-1">KPIs de gain de temps, suivi de rentabilité et boucle d&apos;amélioration continue PDCA.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* COURSE 3: COMMUNICATION & RÉSEAUX SOCIAUX RS7351 */}
          {activeCourse === 'reseaux' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-pink-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold">
                    Formation préparant à la certification RS7351
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Structurer et piloter sa communication réseaux sociaux
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Une formation pratique pour les dirigeants et indépendants qui pilotent seuls leur communication et veulent transformer leur visibilité digitale en réservoir constant de clients qualifiés.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">100% à distance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-pink-400">11h+ de vidéos</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">OPCO / FAF / CPF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Évaluation</div>
                      <div className="text-base font-bold text-amber-400">Mise en situation 1h</div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="flex-1 py-3.5 text-center rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm shadow-lg shadow-pink-600/30 transition-all"
                    >
                      Demander un diagnostic (15 min) ⚡
                    </a>
                    <Link
                      href="/formations/reseaux-sociaux"
                      className="py-3.5 px-5 text-center rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all flex items-center justify-center"
                    >
                      Détails programme →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (5 Modules Opérationnels)
                  </h4>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 1 •</span>
                    <strong className="text-white text-sm ml-2">Tendances & Social Selling</strong>
                    <p className="text-xs text-slate-400 mt-1">Écosystème digital, funnel d&apos;acquisition et théorie des points de contact.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 2 •</span>
                    <strong className="text-white text-sm ml-2">Stratégie & Ligne Éditoriale</strong>
                    <p className="text-xs text-slate-400 mt-1">Cibles idéales, mapping du parcours client et calendrier de diffusion régulier.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 3 •</span>
                    <strong className="text-white text-sm ml-2">Création Visuelle & Copywriting</strong>
                    <p className="text-xs text-slate-400 mt-1">Prise en main de Canva, montage de vidéos courtes sur CapCut et automatisation Waalaxy.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 4 •</span>
                    <strong className="text-white text-sm ml-2">Diffusion & Publicité Ciblée</strong>
                    <p className="text-xs text-slate-400 mt-1">Meta Business Suite, animation de communauté et gestion budgétaire Meta Ads.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 5 •</span>
                    <strong className="text-white text-sm ml-2">Reporting & Conformité RGPD</strong>
                    <p className="text-xs text-slate-400 mt-1">Tableau de bord de suivi, analyse des conversions et respect des données personnelles.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>


      {/* ─── 4. TABLEAU COMPARATIF DES 3 PARCOURS ────────────────────────── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Comparatif Rapide
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tableau Comparatif des 3 Parcours
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Identifiez en quelques secondes la formation adaptée à votre profil et à vos objectifs professionnels.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="p-4 sm:p-5">Parcours</th>
                  <th className="p-4 sm:p-5">Public Cible</th>
                  <th className="p-4 sm:p-5">Durée</th>
                  <th className="p-4 sm:p-5">Certification</th>
                  <th className="p-4 sm:p-5">Financement</th>
                  <th className="p-4 sm:p-5">Résultat Attendu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-blue-400 block text-xs uppercase mb-1">Parcours 1</span>
                    IA Générative pour Indépendants & Dirigeants
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Indépendants, freelances, consultants, dirigeants de TPE
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-blue-300 text-xs sm:text-sm whitespace-nowrap">
                    16h vidéos<br />+ 5h coaching
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold whitespace-nowrap">
                      Titre RS6776
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    OPCO, FAF, CPF<br />via partenaire
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Automatisation de vos contenus, prompts sur-mesure et gain de 5h à 10h / semaine
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-indigo-400 block text-xs uppercase mb-1">Parcours 2</span>
                    Intégration de l&apos;IA en Entreprise & Workflows
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Dirigeants de TPE/PME, managers et leurs équipes
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-indigo-300 text-xs sm:text-sm whitespace-nowrap">
                    14h à 35h<br />sur-mesure
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold whitespace-nowrap">
                      Titre RS7344
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    Plan de dev. compétences, OPCO, FAF
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Feuille de route d&apos;automatisation, charte éthique et respect de l&apos;AI Act
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-pink-400 block text-xs uppercase mb-1">Parcours 3</span>
                    Communication & Réseaux Sociaux
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Créateurs, commerçants, indépendants gérant seuls leur visibilité
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-pink-300 text-xs sm:text-sm whitespace-nowrap">
                    11h+ vidéos<br />+ mise en situation
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-300 font-bold whitespace-nowrap">
                      Prépa RS7351
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    OPCO, FAF, CPF<br />via partenaire
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Canva, CapCut et Meta Ads maîtrisés, génération continue de prospects
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400 italic">
              * Note légale : Prise en charge selon éligibilité de votre statut (OPCO, FAF, CPF) par le biais de notre organisme partenaire porteur.
            </p>
          </div>

        </div>
      </section>


      {/* ─── 5. PREUVE SOCIALE & ÉQUIPE DES 4 EXPERTS ─────────────────────── */}
      <ClientFeedback />

      <section className="py-24 px-4 bg-slate-950 border-t border-slate-850 relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Des Praticiens de Terrain
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              L&apos;Équipe des Experts
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Une exigence constante, un accompagnement humain sans filtre et une vision résolument tournée vers votre rentabilité durable.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Mélissa JENNADI */}
            <TeamMemberCard
              position="left"
              firstName="Mélissa"
              lastName="JENNADI"
              imageUrl="/team-melyssa.png"
              description="Rigueur scientifique, sens aigu de la transmission et dévouement absolu pour faire grandir vos équipes et pérenniser votre activité."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 2. Renaud */}
            <TeamMemberCard
              position="right"
              firstName="Renaud"
              lastName=""
              imageUrl="/team-renaud.jpg"
              description="Passionné par l'impact technologique et l'efficacité opérationnelle, pour transformer des outils complexes en leviers de croissance concrets."
              onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 3. Régis */}
            <TeamMemberCard
              position="left"
              firstName="Régis"
              lastName=""
              imageUrl="/team-regis.png"
              description="Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique pour sécuriser chaque étape de votre transition."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 4. Med Aly Garma */}
            <TeamMemberCard
              position="right"
              firstName="Med Aly"
              lastName="GARMA"
              imageUrl="/team-med-aly.jpg"
              description="Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des environnements d'intelligence artificielle."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Med%20Aly%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20cybers%C3%A9curit%C3%A9.', '_blank')}
            />
          </div>

        </div>
      </section>


      {/* ─── 6. TARIFS, FINANCEMENT & SIMULATEUR ─────────────────────────── */}
      <section className="py-20 px-4 bg-slate-900/60 border-t border-b border-slate-800 relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Prise en Charge & Accompagnement
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Tarifs & Processus de Financement
            </h2>
            <div className="mt-3 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 max-w-2xl mx-auto text-xs sm:text-sm text-blue-200">
              ℹ️ <strong>Mention réglementaire :</strong> Finançable selon votre statut (OPCO, FAF, CPF) via notre organisme partenaire porteur. Nos conseillers s&apos;occupent de l&apos;instruction complète de votre dossier.
            </div>
          </div>

          {/* 3 Étapes du Financement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-white text-base mb-2">Diagnostic Offert (15 min)</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Échange individuel avec Mélissa ou Renaud pour analyser vos besoins, identifier votre OPCO/FAF et calculer votre enveloppe disponible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-white text-base mb-2">Montage Administratif</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Notre équipe et notre partenaire préparent votre convention, programme pédagogique et devis normé pour soumission au financeur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-white text-base mb-2">Démarrage & Coaching 1-to-1</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dès l&apos;accord de prise en charge, accès immédiat à vos modules vidéo et planification de vos 5 heures d&apos;accompagnement personnalisé.
              </p>
            </div>
          </div>

          {/* Simulateur de rentabilité */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Calculator size={14} />
                  Simulateur d&apos;Impact Réel
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Calculez votre rentabilité immédiate
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  L&apos;automatisation n&apos;est pas une charge : elle libère des dizaines d&apos;heures de production directe pour vos clients et votre chiffre d&apos;affaires.
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-300 mb-2">
                      <span>Heures de tâches répétitives hebdomadaires :</span>
                      <span className="text-blue-400 font-bold text-base">{hoursPerWeek} h / semaine</span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={25}
                      step={1}
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full accent-blue-600 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-300 mb-2">
                      <span>Votre valeur horaire estimée :</span>
                      <span className="text-blue-400 font-bold text-base">{hourlyRate} € / heure</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={200}
                      step={5}
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full accent-blue-600 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/30 text-center space-y-6">
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Temps récupéré chaque année
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white">
                    ~{Math.round(annualSavingsHours * 0.65)} h
                  </div>
                  <div className="text-xs text-blue-400 mt-1">Soit plus d&apos;un mois complet de travail économisé</div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Valeur économique libérée
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400">
                    +{annualSavingsEuros.toLocaleString()} € / an
                  </div>
                </div>

                <a
                  href="#contact"
                  className="block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Vérifier l&apos;éligibilité de mon statut 💬
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── 7. FAQ SANS DÉTOUR ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Questions & Réponses
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Est-ce fait pour moi sans compétences informatiques ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Oui, absolument. Nos parcours sont conçus spécifiquement pour les dirigeants de TPE/PME et les indépendants, et non pour des informaticiens. Chaque module est expliqué en langage clair, avec des démonstrations écran partagé pas à pas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Comment se déroule la prise en charge financière ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Nos formations sont finançables selon votre statut (OPCO, FAF, CPF) par le biais de notre organisme partenaire porteur certifié Qualiopi Eloqone. Notre équipe prend en charge l&apos;instruction administrative de votre dossier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Combien de temps faut-il consacrer par semaine ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Comptez environ 2 à 4 heures par semaine selon votre rythme. Les vidéos courtes sont accessibles 24h/24 en ligne pendant 12 mois. Vous planifiez vos 5 heures de coaching individuel selon vos créneaux.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Quelle est la valeur de la certification obtenue ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Les certifications (RS6776, RS7344, prépa RS7351) sont enregistrées au Répertoire Spécifique de <strong>France Compétences</strong>. Elles attestent officiellement de vos compétences auprès de vos clients et partenaires.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 8. CTA FINAL : BROCHURE PDF & FORMULAIRE OFFICIEL ────────────── */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl mb-12">
          
          {/* Lead Magnet Brochure Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
                📄 Brochure Complète
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Télécharger le programme détaillé (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Retrouvez l&apos;ensemble des modules, objectifs pédagogiques, modalités d&apos;évaluation et grilles tarifaires.
              </p>
            </div>
            <a
              href="/programme-top.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shrink-0"
            >
              <Download size={16} className="text-blue-400" />
              <span>Télécharger la Brochure PDF</span>
            </a>
          </div>

        </div>

        {/* Contact Form Component (fully compliant with RGPD consent, status selector and optional WhatsApp) */}
        <GetInTouch />
      </section>


      {/* ─── 9. FOOTER CONFORME ──────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
