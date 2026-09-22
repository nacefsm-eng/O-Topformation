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
  Check
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
  const cardTranslateY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* ─── 1. HERO ANIMÉ AVEC PARALLAXE 3D & BENTO VISUELS ─────────────── */}
      <section ref={heroRef} className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950 border-b border-slate-850">
        
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
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-blue-900/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certifications Officielles France Compétences</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-bold">Qualiopi</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-bold">100% Finançable OPCO/CPF</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white"
            >
              Maîtrisez l&apos;IA & le Digital.<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Devenez indispensable. Zéro blabla.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
            >
              3 parcours certifiants pour indépendants et dirigeants : <strong>IA Générative (RS6776)</strong>, <strong>Développement IA Business (RS7344)</strong> et <strong>Réseaux Sociaux (RS7351)</strong>. Apprenez sur vos vrais cas d&apos;usage avec 7h de coaching individuel inclus.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <a
                href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20r%C3%A9server%20un%20diagnostic%20offert%20de%2015%20minutes%20pour%20une%20formation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Diagnostic offert avec Mélissa (15 min) 💬</span>
              </a>

              <a
                href="#formations"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
              >
                <span>Explorer les 3 Formations Certifiées →</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Bento Gallery 3D Cards with Scroll Animation */}
          <motion.div 
            style={{ y: cardTranslateY }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6"
          >
            {/* Main Featured Image Card */}
            <div className="md:col-span-8 relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src="/hero-ai-workspace.jpg" 
                alt="Station de travail IA & Cybersécurité moderne" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold w-fit mb-2">
                    ⚡ Environnement Professionnel
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Apprenez à automatiser et sécuriser votre entreprise
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    Workflows n8n, assistants GPT personnalisés, conformité AI Act et souveraineté des données.
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-emerald-400 font-extrabold text-lg">100% Pratique</span>
                  <div className="text-slate-400 text-xs">Accompagnement 1-to-1</div>
                </div>
              </div>
            </div>

            {/* Side Stacked Cards */}
            <div className="md:col-span-4 flex flex-col gap-4">
              
              {/* Card 1: Social Media Growth */}
              <div className="relative h-[195px] sm:h-[200px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
                <img 
                  src="/formation-social-growth.jpg" 
                  alt="Formation communication digitale" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">RS7351 • 11h+ Vidéos</span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Réseaux Sociaux & Social Selling</h4>
                  <p className="text-xs text-slate-300">Canva, CapCut, Meta Ads, Waalaxy</p>
                </div>
              </div>

              {/* Card 2: AI Business Integration */}
              <div className="relative h-[195px] sm:h-[200px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
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
              <div className="text-xs font-semibold text-slate-400">Certifications officielles d&apos;État</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-0.5">0 € Reste à charge</div>
              <div className="text-xs font-semibold text-slate-400">Prise en charge OPCO / FAF / CPF</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-0.5">7h Coaching</div>
              <div className="text-xs font-semibold text-slate-400">Accompagnement individuel inclus</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-0.5">98.6%</div>
              <div className="text-xs font-semibold text-slate-400">Taux de satisfaction certifié</div>
            </div>
          </div>

        </div>
      </section>


      {/* ─── 2. LES 3 FORMATIONS OFFICIELLES CERTIFIÉES (TABS / ACCORDION) ─── */}
      <section id="formations" className="py-24 px-4 bg-slate-900/50 border-b border-slate-800 relative">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Catalogue Officiel France Compétences
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Nos 3 Formations Certifiantes
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Conçues pour les indépendants, dirigeants de TPE/PME et créateurs. Zéro prérequis technique, 100% axées sur la rentabilité immédiate.
            </p>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-slate-950/80 border border-slate-800 rounded-2xl w-fit mx-auto">
              <button
                onClick={() => setActiveCourse('ia-indep')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'ia-indep'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚡ IA Générative (RS6776)
              </button>
              <button
                onClick={() => setActiveCourse('ia-business')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'ia-business'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🤖 IA Business Entreprise (RS7344)
              </button>
              <button
                onClick={() => setActiveCourse('reseaux')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCourse === 'reseaux'
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📱 Réseaux Sociaux & Social Selling (RS7351)
              </button>
            </div>
          </div>

          {/* COURSE 1: IA GÉNÉRATIVE RS6776 */}
          {activeCourse === 'ia-indep' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-blue-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
                    Certification RS6776 • France Compétences
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Formation certifiante à l&apos;Intelligence Artificielle Générative
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Une formation pensée pour les indépendants, coachs, consultants et dirigeants qui veulent intégrer l&apos;IA générative dans la gestion et le développement de leur activité, sans prérequis technique.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">100% à distance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-blue-400">16h de vidéos + 7h coaching</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">CPF / OPCO / FAF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Certification</div>
                      <div className="text-base font-bold text-amber-400">Titre officiel d&apos;État</div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a
                      href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20formation%20IA%20G%C3%A9n%C3%A9rative%20RS6776."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                    >
                      S&apos;inscrire avec Mélissa (07 67 24 68 25) 💬
                    </a>
                    <a
                      href="tel:+33674797509"
                      className="block w-full py-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all"
                    >
                      Échanger avec Renaud (06 74 79 75 09) 📞
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (3 Modules Clés)
                  </h4>

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 1</span>
                      <span className="text-xs text-slate-500 font-medium">Stratégie</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Mise en œuvre de la stratégie d&apos;implémentation de l&apos;IA</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Découverte des principales interfaces d&apos;IA générative et identification des opportunités pour votre activité.</li>
                      <li>• Repérage des tâches optimisables et choix des outils adaptés à votre budget.</li>
                      <li>• Élaboration de votre plan stratégique d&apos;intégration sans vous disperser.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 2</span>
                      <span className="text-xs text-slate-500 font-medium">Création & Production</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Création de contenus rédactionnels et visuels</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Structure d&apos;un prompt efficace et itération pour obtenir des résultats professionnels.</li>
                      <li>• Outils IA de génération d&apos;images : spécificités et techniques avancées.</li>
                      <li>• Créer son propre assistant GPT personnalisé tout en évitant les risques de fuites de données.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Module 3</span>
                      <span className="text-xs text-slate-500 font-medium">Sécurité & Éthique</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">Conformité, éthique et réglementaire</h5>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      <li>• Confidentialité et enjeux éthiques : ne jamais exposer les données de vos clients.</li>
                      <li>• Focus sur le règlement européen sur l&apos;IA (AI Act) et ses obligations concrètes dès 2025.</li>
                      <li>• Validation des contenus générés, veille réglementaire assistée par IA et inclusion.</li>
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
              className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-indigo-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                    Certification RS7344 • France Compétences
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Développer votre activité avec l&apos;Intelligence Artificielle
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Une formation certifiante pour permettre aux dirigeants de TPE/PME et à leurs collaborateurs stratégiques de construire un véritable projet d&apos;intégration de l&apos;IA, sans prérequis technique.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">100% à distance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-indigo-400">Sur-mesure (J+21 certif)</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">CPF / OPCO / FAF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Structure</div>
                      <div className="text-base font-bold text-amber-400">5+1 Modules certifiants</div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a
                      href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20renseignements%20sur%20la%20formation%20RS7344%20(IA%20Entreprise)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all"
                    >
                      Construire mon projet IA avec Mélissa 💬
                    </a>
                    <a
                      href="tel:+33674797509"
                      className="block w-full py-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all"
                    >
                      Échanger avec Renaud (06 74 79 75 09) 📞
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (5 Modules Stratégiques)
                  </h4>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 1 •</span>
                    <strong className="text-white text-sm ml-2">Identifier les opportunités d&apos;intégration de l&apos;IA</strong>
                    <p className="text-xs text-slate-400 mt-1">Fondamentaux de l&apos;IA, cartographie des processus optimisables (méthode STEP), sélection d&apos;outils rentables.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 2 •</span>
                    <strong className="text-white text-sm ml-2">Élaborer un plan d&apos;intégration adapté</strong>
                    <p className="text-xs text-slate-400 mt-1">Maturité numérique, sécurisation RGPD & IA Act, priorisation de la feuille de route avec budget réaliste.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 3 •</span>
                    <strong className="text-white text-sm ml-2">Implémenter les solutions IA dans les processus</strong>
                    <p className="text-xs text-slate-400 mt-1">Configuration des outils, prompt engineering pro, automatisation des tâches administratives et marketing.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 4 •</span>
                    <strong className="text-white text-sm ml-2">Accompagner le déploiement auprès des équipes</strong>
                    <p className="text-xs text-slate-400 mt-1">Montée en compétences des collaborateurs, rédaction d&apos;une Charte IA éthique et sécurisée, accessibilité.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-indigo-400 uppercase">Module 5 •</span>
                    <strong className="text-white text-sm ml-2">Évaluer l&apos;impact et optimiser en continu</strong>
                    <p className="text-xs text-slate-400 mt-1">Indicateurs clés de suivi (KPIs), cycle PDCA d&apos;amélioration continue et preuve chiffrée de rentabilité.</p>
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
              className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-pink-500/40 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold">
                    Certification RS7351 • France Compétences
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Structurer et piloter sa communication sur les réseaux sociaux
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Une formation pensée pour les indépendants, dirigeants de TPE/PME et leurs collaborateurs qui pilotent seuls leur communication et veulent professionnaliser leur présence digitale.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Format</div>
                      <div className="text-base font-bold text-white">100% à distance</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Durée</div>
                      <div className="text-base font-bold text-pink-400">11h+ de vidéos</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Financement</div>
                      <div className="text-base font-bold text-emerald-400">CPF / OPCO / FAF</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Évaluation</div>
                      <div className="text-base font-bold text-amber-400">Mise en situation 1h</div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a
                      href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20renseignements%20sur%20la%20formation%20R%C3%A9seaux%20Sociaux%20RS7351."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 text-center rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm shadow-lg shadow-pink-600/30 transition-all"
                    >
                      Professionnaliser ma communication avec Mélissa 💬
                    </a>
                    <a
                      href="tel:+33674797509"
                      className="block w-full py-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-xs transition-all"
                    >
                      Échanger avec Renaud (06 74 79 75 09) 📞
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Le Programme Détaillé (5 Modules Opérationnels)
                  </h4>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 1 •</span>
                    <strong className="text-white text-sm ml-2">Tendances & Bonnes Pratiques</strong>
                    <p className="text-xs text-slate-400 mt-1">Écosystème digital, funnel marketing, social selling (théorie des 5 poignées de main), veille et e-réputation.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 2 •</span>
                    <strong className="text-white text-sm ml-2">Stratégie Social Media & Ligne Éditoriale</strong>
                    <p className="text-xs text-slate-400 mt-1">Définition des cibles, mapping du parcours client, choix des canaux et organisation du planning de diffusion.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 3 •</span>
                    <strong className="text-white text-sm ml-2">Création de Contenus Optimisés</strong>
                    <p className="text-xs text-slate-400 mt-1">LinkedIn & automatisation Waalaxy, Instagram & Reels sur CapCut, Canva pro, copywriting et accessibilité numérique.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 4 •</span>
                    <strong className="text-white text-sm ml-2">Diffusion & Modération de Communauté</strong>
                    <p className="text-xs text-slate-400 mt-1">Meta Business Suite, animation de page, programmation des publications, Meta Ads (gestion budget) et influence.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 uppercase">Module 5 •</span>
                    <strong className="text-white text-sm ml-2">Analyse des Performances & RGPD</strong>
                    <p className="text-xs text-slate-400 mt-1">Tableau de bord de reporting, études de cas sectorielles, cadre RGPD européen et accès au marketing digital coach.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>


      {/* ─── 3. CE QUI EST FOURNI (INSPIRATION BRAIN : PACKAGING HIGH TICKET) ─── */}
      <section className="py-24 px-4 bg-slate-950 relative border-b border-slate-850">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Ce que vous recevez concrètement
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Un accompagnement de A à Z.<br />Pas une formation théorique.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Nous vous fournissons tout l&apos;écosystème technique et humain pour que votre projet soit une réussite immédiate dès le premier mois.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Bot size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Assistants & Agents IA Prêts à l&apos;Emploi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Des agents IA configurés pour votre secteur : rédaction d&apos;emails, prospection, création de visuels et synthèse de réunions sans coder.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Base de 300+ Prompts & Templates</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Vous ne partez jamais d&apos;une feuille blanche. Templates de plannings éditoriaux, séquences de relances, scripts vidéo et audits d&apos;entreprise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">7h d&apos;Accompagnement Humain Inclus</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                À mesure que l&apos;IA se standardise, le regard humain fait toute la différence. Séances individuelles pour débloquer chaque point dur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Conformité RGPD & AI Act Européen</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sécurisez vos données et celles de vos clients. Pas de fuite d&apos;informations sensibles dans les modèles publics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5">
                <Share2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Outils Métier Directement Intégrés</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prise en main guidée pas à pas de Canva, CapCut, Meta Business Suite, Waalaxy et outils de publication programmée.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <Brain size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Socle Méthode TOP® Inclus</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Techniques d&apos;Optimisation du Potentiel pour préserver votre clarté mentale, éviter le surmenage digital et décider sous stress.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 4. SIMULATEUR INTERACTIF DE RENTABILITÉ IMMÉDIATE ───────────── */}
      <section className="py-20 px-4 bg-slate-900/60 border-b border-slate-800 relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Calculator size={14} />
                  Simulateur d&apos;Impact Réel
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Calculez votre rentabilité immédiate
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  L&apos;automatisation et les outils certifiés ne sont pas une dépense : ils libèrent du temps direct pour vos clients et votre trésorerie.
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-300 mb-2">
                      <span>Heures de corvées hebdomadaires :</span>
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
                  href={`https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20le%20simulateur%20indique%20un%20gain%20de%20${Math.round(annualSavingsHours * 0.65)}h%2Fan.%20Je%20souhaite%20v%C3%A9rifier%20la%20prise%20en%20charge%20OPCO%2FCPF%20de%20ma%20formation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Vérifier ma prise en charge à 100% 💬
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── 5. MUR D'AVIS CLIENTS & PREUVES SOCIALES (BENTO GRID) ────────── */}
      <ClientFeedback />


      {/* ─── 6. LE TRIO D'EXPERTS (EDITORIAL MOTION SANS FONCTIONS) ──────── */}
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
            {/* 1. Mélissa */}
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
              description="Passionné par l&apos;impact technologique et l&apos;efficacité opérationnelle, pour transformer des outils complexes en leviers de croissance concrets."
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
              description="Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des environnements d&apos;intelligence artificielle."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Med%20Aly%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20cybers%C3%A9curit%C3%A9.', '_blank')}
            />
          </div>

        </div>
      </section>


      {/* ─── 7. FAQ SANS DÉTOUR (INSPIRATION BRAIN) ──────────────────────── */}
      <section className="py-20 px-4 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Sans détour
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Est-ce fait pour moi sans compétences techniques ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Oui, à 100%. Nos parcours sont construits pour les dirigeants et indépendants, pas pour les ingénieurs informatique. Tout est expliqué en langage clair, avec des cas concrets immédiatement applicables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Comment se déroule la prise en charge financière ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                En tant qu&apos;organisme certifié <strong>Qualiopi</strong>, nos formations sont éligibles au financement par les OPCO (Atlas, Akto, etc.), les FAF (FIF-PL, Agefice) et le CPF. Mélissa s&apos;occupe de monter votre dossier administratif de A à Z.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Combien de temps faut-il consacrer par semaine ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Environ 2 à 4 heures par semaine à votre propre rythme. Les vidéos sont courtes, segmentées et accessibles 24h/24 pendant 12 mois. Vous planifiez vos sessions individuelles de coaching quand vous le souhaitez.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Quelle est la valeur de la certification obtenue ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Les certifications (RS6776, RS7344, RS7351) sont enregistrées au Répertoire Spécifique de <strong>France Compétences</strong>. Elles attestent officiellement de vos compétences auprès de vos clients, partenaires et financeurs.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 8. GET IN TOUCH SOMBRE & WHATSAPP DIRECT ────────────────────── */}
      <GetInTouch />


      {/* ─── 9. FOOTER ─────────────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
