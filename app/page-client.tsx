'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/ui/team-member-card';
import ClientFeedback from '@/components/ui/testimonial';
import GetInTouch from '@/components/ui/get-in-touch';
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
  HelpCircle,
  Calculator,
  MessageCircle,
  FileText
} from 'lucide-react';

export default function HomePageClient() {
  // Interactive Simulator State
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(65);
  const annualSavingsHours = hoursPerWeek * 46;
  const annualSavingsEuros = Math.round(annualSavingsHours * hourlyRate * 0.65);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* ─── 1. HERO TECH ULTRA-MODERNE ("EFFET WOW / 3D") ──────────────── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 border-b border-slate-800/80">
        
        {/* Glow ambient meshes */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/15 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-blue-900/20">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Formation Certifiante RS6776</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-bold">France Compétences</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-bold">Qualiopi</span>
            </div>

            {/* Title with Gradient */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
              Dominez l&apos;IA & la Cybersécurité.<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Une méthode de terrain. Zéro blabla.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Gagnez jusqu&apos;à <strong>15 heures par semaine</strong> grâce à l&apos;IA générative et <strong>protégez votre entreprise</strong> contre les risques numériques. Des formations certifiantes finançables à 100% (OPCO, FAF, CPF).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20diagnostic%20offert%20de%2015%20minutes%20pour%20une%20formation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Diagnostic offert (15 min) ⚡</span>
              </a>

              <a
                href="#methodologie"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
              >
                <span>Découvrir notre méthode & parcours →</span>
              </a>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-3xl font-black text-white mb-1">16h + 7h</div>
                <div className="text-xs font-semibold text-slate-400">E-learning + Coaching 1-to-1</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-3xl font-black text-blue-400 mb-1">RS6776</div>
                <div className="text-xs font-semibold text-slate-400">Certification officielle État</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-3xl font-black text-emerald-400 mb-1">100%</div>
                <div className="text-xs font-semibold text-slate-400">Prise en charge OPCO / FAF</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-3xl font-black text-amber-400 mb-1">98.6%</div>
                <div className="text-xs font-semibold text-slate-400">Satisfaction apprenants</div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─── 2. ON N'EST PAS COMME LES AUTRES : NOTRE MÉTHODOLOGIE ───────── */}
      <section id="methodologie" className="py-24 px-4 bg-slate-900/60 border-b border-slate-800 relative">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
              Ce qui nous différencie
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Pourquoi nous ne sommes pas comme les autres
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              90% des formations en ligne se contentent de vidéos pré-enregistrées et de théorie générique. Voici comment nous garantissons votre réussite :
            </p>
          </div>

          {/* 4 Steps Roadmap */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            <div className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 font-black text-lg flex items-center justify-center mb-6">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Diagnostic Personnalisé
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Avant de démarrer, nous auditons vos processus actuels, votre secteur et vos besoins réels pour concevoir votre feuille de route.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-semibold">
                Étape 1 • 30 min d&apos;audit
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-black text-lg flex items-center justify-center mb-6">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  Immersion & Cas Réels
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  16h d&apos;e-learning interactif axé à 100% sur la pratique : prompts métier, automatisations concrètes, sécurisation des outils.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-semibold">
                Étape 2 • 3 modules certifiés
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 font-black text-lg flex items-center justify-center mb-6">
                03
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  7h de Coaching 1-to-1
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Le regard humain irremplaçable : 7 heures d&apos;accompagnement individuel avec votre formateur pour implémenter directement dans votre business.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-semibold">
                Étape 3 • Accompagnement offert
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-black text-lg flex items-center justify-center mb-6">
                04
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Certification & Déploiement
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Passage de la certification RS6776 France Compétences et mise en production immédiate de vos automatisations sécurisées.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-semibold">
                Étape 4 • Titre officiel reconnu
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 3. LES 3 GRANDS DOMAINES D'EXCELLENCE ──────────────────────── */}
      <section className="py-24 px-4 bg-slate-950 relative">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Notre Catalogue
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Les 3 Piliers pour bâtir votre avenir
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Une complémentarité unique : la puissance technologique de l&apos;IA, la rigueur de la Cybersécurité, et la lucidité de la Méthode TOP®.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pilier 1 : IA Générative */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-blue-500/40 relative flex flex-col justify-between shadow-2xl hover:border-blue-400 transition-all group">
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                Cœur de vente
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Intelligence Artificielle Générative
                </h3>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                  Certification RS6776 • France Compétences
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Apprenez à maîtriser ChatGPT, Claude, Midjourney et l&apos;automatisation pour booster votre chiffre d&apos;affaires et déléguer vos corvées quotidiennes.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>Prompting professionnel de haute précision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>Création de contenus & prospection automatisée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>7h d&apos;accompagnement individuel inclus</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20formation%20IA%20RS6776."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center text-sm transition-all"
              >
                Rejoindre la formation IA →
              </a>
            </div>

            {/* Pilier 2 : Cybersécurité */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative flex flex-col justify-between shadow-xl hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Cybersécurité & Données
                </h3>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
                  Protection des TPE/PME & Hygiène Numérique
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Blindez vos systèmes face aux attaques, sécurisez l&apos;intégration de vos outils IA et protégez les données sensibles de vos clients.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Audit des failles et hygiène des mots de passe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Protection anti-phishing et anti-ransomware</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Conformité RGPD & sécurisation des flux IA</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20Cybers%C3%A9curit%C3%A9."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center text-sm border border-slate-700 transition-all"
              >
                Découvrir le programme Cyber →
              </a>
            </div>

            {/* Pilier 3 : Méthode TOP® */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative flex flex-col justify-between shadow-xl hover:border-amber-500/50 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Méthode TOP® & Mental
                </h3>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                  Optimisation du Potentiel & Anti-Burnout
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  La boîte à outils psychophysiologique éprouvée pour réguler le stress, récupérer rapidement et décider avec lucidité sous haute pression.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Régulation de la charge mentale des dirigeants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Techniques de respiration et focus flash</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Santé mentale et endurance cognitive</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20m%C3%A9thode%20TOP."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center text-sm border border-slate-700 transition-all"
              >
                Explorer la Méthode TOP® →
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 4. SIMULATEUR INTERACTIF DE ROI & FINANCEMENT ───────────────── */}
      <section className="py-20 px-4 bg-slate-900/80 border-y border-slate-800 relative">
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
                  L&apos;IA et l&apos;automatisation ne sont pas un gadget : elles récupèrent du temps précieux que vous pouvez consacrer à vos clients et à votre chiffre d&apos;affaires.
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-300 mb-2">
                      <span>Heures consacrées aux corvées / semaine :</span>
                      <span className="text-blue-400 font-bold text-base">{hoursPerWeek} heures</span>
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
                      <span className="text-blue-400 font-bold text-base">{hourlyRate} € / h</span>
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

              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-500/30 text-center space-y-6">
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
                  href={`https://wa.me/33767246825?text=Bonjour%2C%20d%27apr%C3%A8s%20votre%20simulateur%20je%20peux%20%C3%A9conomiser%20${Math.round(annualSavingsHours * 0.65)}h%20par%20an.%20Je%20souhaite%20v%C3%A9rifier%20mes%20financements%20OPCO%2FCPF.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Vérifier ma prise en charge à 100% 💬
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── 5. MUR D'AVIS CLIENTS & PREUVE SOCIALE (BENTO GRID) ─────────── */}
      <ClientFeedback />


      {/* ─── 6. L'ÉQUIPE : LE TRIO D'EXPERTS (EDITORIAL MOTION CARDS) ───── */}
      <section className="py-24 px-4 bg-slate-950 border-t border-slate-850 relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Des Praticiens de Terrain
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Le Trio d&apos;Experts
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Une exigence constante, un accompagnement humain sans filtre et une expertise reconnue pour vous guider pas à pas.
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
          </div>

        </div>
      </section>


      {/* ─── 7. GET IN TOUCH (CARTE SOMBRE MODERNE + WHATSAPP DIRECT) ───── */}
      <GetInTouch />


      {/* ─── 8. FOOTER COMPLET ─────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
