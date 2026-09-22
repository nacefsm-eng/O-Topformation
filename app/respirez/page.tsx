'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CongratulationsModal from '@/components/ui/congratulations-modal';
import NinePillarsSection from '@/components/sections/NinePillarsSection';
import TeamMemberCard from '@/components/ui/team-member-card';
import { 
  Flame, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Users, 
  Heart, 
  Brain, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Star, 
  Zap, 
  Compass, 
  ShieldCheck,
  Activity,
  AlertOctagon,
  Quote,
  Target
} from 'lucide-react';

export default function RespirezLandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactProfile, setContactProfile] = useState('urgence');

  const faqs = [
    {
      q: "Ça va vraiment changer pour moi ?",
      a: "Honnêtement ? Oui. Mais pas comme par magie. Vous allez dormir différemment. Votre vigilance va se réguler. Votre famille va vous retrouver. C'est du travail. Mais ça marche. Parce que ce n'est pas de la théorie, c'est du concret qui vient du terrain."
    },
    {
      q: "Pourquoi celle-ci serait différente des autres formations ?",
      a: "Parce qu'on ne vous vend pas du bien-être. Régis a passé 10 ans en Armée de l'air. Il a géré l'extrême. Il sait ce que c'est, ne pas pouvoir craquer. Melissa a sauvé des dizaines de personnes du bord du gouffre. Elle sait ce qui marche et ce qui est du bla bla. TOP vient du terrain. Pas des livres. Pas des salles de conférence. Du vrai."
    },
    {
      q: "C'est pour qui vraiment ?",
      a: "Pour vous si vous vivez ça : Pompiers, policiers, infirmiers, ATSEM, AESH, éducateurs, enseignants, soignants, salariés qui n'en peuvent plus. Managers, RH, dirigeants qui voient leurs équipes s'effondrer. Institutions qui veulent prévenir avant que ça casse."
    },
    {
      q: "Ça coûte combien ?",
      a: "On construit des solutions sur mesure. Donc le prix dépend de votre situation. Prise en charge OPCO, FIF PL, AFDAS ou budget entreprise possible. Appel découverte gratuit de 15 minutes. On voit ensemble sans tabou. Pas de surprise."
    },
    {
      q: "Ça prend combien de temps ? Je peux m'absenter ?",
      a: "On s'adapte à votre emploi du temps. Ateliers ponctuels, sessions courtes, formats immersifs d'un week-end (21h) ou modules d'une journée (7h). En présentiel, à distance, ou mixte. On construit ça ensemble. Parce qu'on sait que votre temps c'est de l'or."
    }
  ];

  const testimonials = [
    {
      name: "Aurélie",
      tag: "Praticienne & Apprenante",
      role: "Formation massage aux aimants & régulation",
      text: "J'ai suivi la formation avec toi et ça a été une très belle expérience. Ton accompagnement m'a profondément touchée : toujours présente, douce, à l'écoute et pleine d'une énergie lumineuse. Grâce à toi, j'ai découvert une pratique apaisante, efficace et tellement enrichissante. Tu transmets ton savoir avec passion, simplicité et beaucoup de cœur. Je repars confiante, inspirée et vraiment reconnaissante. Merci pour ta présence et ton professionnalisme."
    },
    {
      name: "Lucie",
      tag: "Professionnelle sous tension",
      role: "Session TOP & Libération Mentale",
      text: "Une formation vécue comme fantastique et inoubliable. On arrive souvent avec la tête saturée et la sensation de n'avoir plus d'air, et on en ressort véritablement épanouie et grandie, avec des armes concrètes pour ne plus subir au quotidien."
    },
    {
      name: "Nadine",
      tag: "Participante Conférence",
      role: "Conférence TOP par Régis Domergue (Salon Bien-Être)",
      text: "Une intervention riche, pertinente, extrêmement impactante. On sent immédiatement le vécu militaire et l'authenticité de l'expérience opérationnelle. Zéro bla-bla, que des clés immédiatement applicables pour garder la tête froide."
    },
    {
      name: "Yohan",
      tag: "Participant Conférence",
      role: "Conférence TOP à La Seyne-sur-Mer",
      text: "Conférence très intéressante et une très belle présentation. Des explications claires et directes sur les mécanismes du système nerveux et comment le recalibrer sans attendre l'effondrement."
    },
    {
      name: "Melo",
      tag: "Accompagnement Suivi",
      role: "Régulation émotionnelle & Charge mentale",
      text: "Une rencontre humaine décisive avec Melyssa. Quand on porte trop de responsabilités au quotidien, retrouver quelqu'un qui comprend sans juger et qui vous donne des leviers précis pour refaire surface n'a pas de prix."
    }
  ];

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour Mélissa, je demande mon diagnostic TOP gratuit (15 min).%0ANom : ${encodeURIComponent(contactName || 'Non précisé')}%0ATéléphone : ${encodeURIComponent(contactPhone || 'Non précisé')}%0AProfil : ${encodeURIComponent(contactProfile)}`;
    window.open(`https://wa.me/33767246825?text=${msg}`, '_blank');
    setShowModal(true);
  };

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black font-sans">
      
      {/* ── SECTION 1 — HERO IMMERSIF : RESPIREZ À NOUVEAU ── */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 overflow-hidden border-b border-slate-800/80">
        {/* Ambient Gradients */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Tagline Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-amber-500/5">
              <Zap size={15} className="text-amber-400" />
              <span>Méthode TOP® PERRAULT-PIERRE • Forces de l&apos;Ordre, Soignants, Éducation & Entreprises</span>
            </div>
          </div>

          {/* Hero Grid with Visual Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Strong Headline & Core Copy */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                Respirez <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500">à nouveau.</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
                Ô&apos;Top redonne souffle et clarté à ceux qui portent les autres.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Vous donnez tout. Mais à force de tenir pour les autres, vous oubliez comment tenir pour vous.
                <span className="block mt-2 font-bold text-amber-300">
                  Ô&apos;Top remet les compteurs à zéro.
                </span>
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#diagnostic"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-base font-extrabold shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Je m&apos;offre un diagnostic (15 min)</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20d%C3%A9couvre%20la%20page%20Respirez%20et%20souhaite%20%C3%A9changer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 text-sm font-bold transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>WhatsApp direct</span>
                </a>
              </div>

              {/* Target Audience Mini-Badges */}
              <div className="pt-6 flex flex-wrap items-center gap-2 justify-center lg:justify-start text-xs text-slate-400">
                <span className="text-slate-500 font-semibold mr-1">Conçu pour :</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">🚨 Pompiers & Policiers</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">🩺 Infirmiers & Soignants</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">📚 Enseignants & AESH</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">💼 Cadres, RH & Dirigeants</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with High-Ticket Credibility */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Header card */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Praticiens Terrain Qualiopi</span>
                  </div>
                  <span className="text-xs text-slate-400">Ollioules (83)</span>
                </div>

                {/* Key quote */}
                <blockquote className="space-y-3">
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                    &laquo;&nbsp;On ne vous vend pas du bien-être gadget. On arme mentalement les femmes et les hommes qui tiennent les structures debout quand tout brûle.&nbsp;&raquo;
                  </p>
                  <footer className="text-xs font-semibold text-amber-400">
                    — Melyssa Jennadi & Régis Domergue
                  </footer>
                </blockquote>

                {/* 3 Hard Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Satisfaction</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Réussite</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-xl sm:text-2xl font-black text-blue-400">100%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Assiduité</div>
                  </div>
                </div>

                {/* Direct Line Badge */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Prise en charge OPCO / FIF PL</span>
                  <span className="text-amber-400 font-bold">100% Finançable</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 2 — IDENTIFICATION : AVANT / PENDANT / APRÈS ── */}
      <section id="identification" className="py-20 bg-slate-900/40 border-b border-slate-800 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Le miroir de votre quotidien
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Dans cette histoire, vous êtes peut-être…
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. En Avant */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-amber-500/60 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-400">ÉTAPE 01</span>
                  <AlertOctagon size={20} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">En Avant</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Tout semble sous contrôle. Vous gérez. Vous tenez la cadence. Mais cette tension dans la nuque, ce sommeil plus léger, cette fatigue qui s&apos;installe… vous le sentez : quelque chose commence à peser. Vous vous dites &ldquo;c&apos;est normal&rdquo;. &ldquo;Je tiendrai.&rdquo; C&apos;est ce que tout le monde se dit avant que ça craque.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs font-semibold text-amber-400/90">
                Phase d&apos;accumulation silencieuse
              </div>
            </div>

            {/* 2. Pendant */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-rose-500/50 flex flex-col justify-between shadow-xl shadow-rose-950/20 relative overflow-hidden group hover:border-rose-500 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-rose-400">ÉTAPE 02</span>
                  <Flame size={20} className="text-rose-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Pendant</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Ou vous êtes en plein dedans. Le terrain n&apos;attend pas. Chaque minute compte. Chaque décision pèse. Le corps exécute. Le mental encaisse. L&apos;instinct prend le relais. Vous tenez. Vous agissez. Vous tenez encore. Mais à force d&apos;être en mode survie, quelque chose brûle à l&apos;intérieur.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs font-semibold text-rose-400">
                Mode survie & surchauffe du système
              </div>
            </div>

            {/* 3. Après */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-indigo-500/60 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400">ÉTAPE 03</span>
                  <Activity size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Après</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Ou peut-être après. Le calme revient dehors, mais pas en vous. Les images restent. Le cerveau rejoue. Les sons, les visages, les odeurs. Vous dites &ldquo;ça va&rdquo; alors que ça ne va pas. Vous rentrez chez vous sans vraiment revenir. Et demain, il faudra recommencer.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs font-semibold text-indigo-400/90">
                Rumination, flashs & déconnexion
              </div>
            </div>

          </div>

          {/* Punchline de clôture */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-500/40 text-center shadow-xl">
            <p className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
              &laquo;&nbsp;Peu importe où vous en êtes. Le résultat est le même : vous portez trop, depuis trop longtemps.&nbsp;&raquo;
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 3 — CE QUI SE PASSE VRAIMENT ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
              Diagnostic sans complaisance
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              VOILÀ CE QUI SE PASSE VRAIMENT :
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Brain size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">Surchauffe Neuro-Physiologique</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Votre corps sature. Votre système nerveux ne se met plus jamais en pause. Hypervigilance le jour, insomnie la nuit. Et quand enfin vous dormez, votre cerveau rejoue la mission, la salle de classe, le couloir, le bureau.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                <Heart size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">L&apos;Usure Silencieuse des Invisibles</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ce n&apos;est pas réservé aux métiers d&apos;urgence. Les enseignants, éducateurs, accompagnants, encadrants vivent le même épuisement mais autrement. Eux ne voient pas le sang, mais ils encaissent les cris, la charge mentale, les injustices, les tensions humaines, jour après jour. Ils absorbent tout, sans relâche, jusqu&apos;à s&apos;oublier eux-mêmes.
              </p>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
            <p className="text-base sm:text-lg text-slate-300 italic">
              Petit à petit, tout devient plus flou, plus lourd. Vous perdez l&apos;élan, la clarté, l&apos;envie. Mais vous continuez, parce que c&apos;est ce que vous avez toujours fait : <strong>tenir</strong>.
            </p>
          </div>

          {/* Sous-bloc Institutions / DRH */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 space-y-5">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-amber-400 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Côté institutions, entreprises et directions
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dirigeants, responsables RH, cadres, élus, chefs de service, vous le voyez tous les jours : la tension monte, la fatigue s&apos;installe, les arrêts s&apos;enchaînent. Vous tenez les structures debout, mais vos équipes s&apos;épuisent en silence.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Derrière chaque indicateur : <strong>absentéisme, désengagement, perte de sens</strong>, il y a des gens. Vos gens. Des femmes et des hommes qui veulent bien faire, mais qui s&apos;effondrent à force de tout porter.
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-amber-300 text-sm leading-relaxed font-semibold">
              Mettre en place des outils de régulation mentale, ce n&apos;est pas du bien-être gadget. C&apos;est une stratégie de performance humaine. Des équipes qui dorment mieux, qui régulent mieux leurs émotions, qui tiennent mieux la pression, sont des équipes plus fiables, plus claires, plus soudées. Prévenir l&apos;usure, c&apos;est préserver la lucidité collective, la qualité des décisions, la cohésion, et la continuité de votre organisation.
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 4 — POURQUOI Ô'TOP EXISTE ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Notre Raison d&apos;Être
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            C&apos;EST POUR ÇA QUE Ô&apos;TOP EXISTE
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-slate-200 leading-relaxed">
            Pour rouvrir le corps. Pour rendre le calme opérationnel. Pour rendre à chacun ce qu&apos;il a donné sans compter. Pour vous rendre à vous-même.
          </p>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 text-amber-300 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Pour les gens qui ont vu des choses. Qui portent des images. Qui ne dorment pas normal. Qui se demandent chaque jour :<br />
            <span className="text-2xl sm:text-3xl font-black text-white mt-2 block">&laquo;&nbsp;Combien de temps encore ?&nbsp;&raquo;</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — RÉSULTATS OBSERVÉS (2 COLONNES) ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Impact Réel Mesuré
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              CE QU&apos;ON OBSERVE APRÈS NOS INTERVENTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Sur les personnes */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 text-amber-400 font-bold text-xl">
                <Heart className="w-6 h-6" />
                <h3>Sur les personnes</h3>
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-1" />
                  <span><strong>Réduction du stress perçu</strong> dès les 2 premières semaines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-1" />
                  <span><strong>Sommeil réparateur</strong> et vigilance physiologique régulée.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-1" />
                  <span><strong>Calme mental retrouvé</strong> même en contexte sous forte pression.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-1" />
                  <span><strong>Retour d&apos;énergie</strong>, concentration restaurée et élan personnel.</span>
                </li>
              </ul>
            </div>

            {/* Sur les équipes & organisations */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl">
                <Users className="w-6 h-6" />
                <h3>Sur les équipes & organisations</h3>
              </div>
              <ul className="space-y-3.5 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Moins d&apos;arrêts maladie</strong> et d&apos;erreurs liées à la fatigue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Meilleure communication interne</strong>, cohésion d&apos;équipe renforcée.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Plus de clarté</strong> dans la prise de décision managériale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Hausse de la satisfaction</strong> et de la performance durable.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* 100% Chiffres Clés */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-amber-400">100%</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Taux de satisfaction</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400">100%</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Taux de réussite</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-blue-400">100%</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-300">Taux d&apos;assiduité</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 6 — POSITIONNEMENT : ON ENTRAÎNE LE MENTAL ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
              Rupture Pédagogique
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ô&apos;TOP N&apos;EST PAS UNE FORMATION DE PLUS.
            </h2>
            <p className="mt-3 text-lg sm:text-xl font-bold text-amber-400">
              C&apos;est une méthode pour ceux qui tiennent quand tout le monde lâche.
            </p>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-center sm:text-left">
            <p>
              Parce que ni le yoga du mercredi soir, ni les affiches &ldquo;prendre soin de soi&rdquo; dans les salles de repos, ni les discours creux sur la qualité de vie au travail ne suffisent à tenir quand tout brûle.
            </p>
            <p>
              Nous n&apos;avons pas lancé un organisme de formation traditionnel. <strong>Nous avons décidé d&apos;armer mentalement ceux qui tiennent les structures debout.</strong>
            </p>
            <p className="text-slate-200">
              Ô&apos;Top, c&apos;est l&apos;endroit où la <strong>performance rencontre la lucidité</strong>.
            </p>
          </div>

          {/* Master Punchline */}
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-rose-500/20 border-2 border-amber-500 text-center shadow-2xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              &laquo;&nbsp;On n&apos;enseigne pas la gestion du stress.<br className="hidden sm:inline" />
              <span className="text-amber-400">On entraîne le mental.</span>&nbsp;&raquo;
            </p>
            <div className="mt-8">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/30 transition-all"
              >
                <span>Je m&apos;offre un diagnostic</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 7 — QUI SOMMES-NOUS : MÉLISSA, RENAUD & RÉGIS (AVEC LEURS VRAIES PHOTOS) ── */}
      <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              L&apos;Équipe des Praticiens
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              QUI SOMMES-NOUS ?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 italic">
              &laquo;&nbsp;Pas des coachs bien-être. Pas des « facilitateurs de sérénité ». Pas des marchands de respiration consciente.&nbsp;&raquo;
            </p>
          </div>

          <div className="space-y-16">
            
            {/* 1. Melyssa Jennadi (Photo exacte: /team-melyssa.png) */}
            <TeamMemberCard
              position="left"
              jobPosition="FONDATRICE & RESPONSABLE PÉDAGOGIQUE • OLLIOULES (83)"
              firstName="Melyssa"
              lastName="JENNADI"
              imageUrl="/team-melyssa.png"
              description="Issue du terrain éducatif, engagée là où les nerfs lâchent en silence. Formatrice, praticienne, au contact direct de celles et ceux qui encaissent sans jamais s'autoriser à flancher : enseignants, encadrants, personnels d'accompagnement, équipes épuisées mais debout. Elle a eu à accompagner des dizaines de cas critiques."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20%C3%A9changer%20avec%20vous%20concernant%20un%20diagnostic%20TOP', '_blank')}
            />

            {/* 2. Renaud (Photo exacte: /team-renaud.jpg) */}
            <TeamMemberCard
              position="right"
              jobPosition="CO-DIRIGEANT & EXPÉRIENCE DIGITALE • STRATÉGIE OPÉRATIONNELLE"
              firstName="Renaud"
              lastName=""
              imageUrl="/team-renaud.jpg"
              description="Spécialiste de l'accompagnement stratégique et de l'organisation opérationnelle. Renaud structure les solutions sur-mesure pour les indépendants et les structures, en veillant à ce que chaque minute de formation génère une rentabilité humaine et une sérénité concrète immédiate."
              onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud,%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20les%20formations%20O%27TOP', '_blank')}
            />

            {/* 3. Régis Domergue (Photo exacte: /team-regis.png) */}
            <TeamMemberCard
              position="left"
              jobPosition="CO-FONDATEUR & EXPERT TOP • MONITEUR EX-ARMÉE DE L'AIR"
              firstName="Régis"
              lastName="DOMERGUE"
              imageUrl="/team-regis.png"
              description="Formé à l'exigence militaire. Moniteur TOP. Habitué aux environnements où on n'a pas le luxe de craquer. Là où chaque seconde compte et où maîtriser son système nerveux n'est pas un confort mais une condition de survie et d'efficacité. Plus de 10 ans dans l'Armée de l'Air et missions extérieures."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis,%20je%20souhaite%20des%20renseignements%20sur%20les%20interventions%20TOP', '_blank')}
            />

          </div>

        </div>
      </section>

      {/* ── LES 9 PILIERS POUR MIEUX COMPRENDRE L'HUMAIN ── */}
      <NinePillarsSection 
        title="Les 9 Piliers Pour Mieux Comprendre l'Humain"
        subtitle="Intégrés au cursus TOP®, ces 9 piliers structurent l'apprentissage pour désamorcer l'épuisement et reprendre la main sur ses choix d'action."
      />

      {/* ── SECTION 8 — CHAMPS D'EXPERTISE ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              Compétences Clés
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              NOS CHAMPS D&apos;EXPERTISES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stress & Santé Mentale",
                sub: "Transformer le stress chronique",
                desc: "Réguler l'emballement neuro-végétatif, réduire le cortisol et désamorcer le burn-out avant la rupture.",
                icon: ShieldAlert,
                color: "text-rose-400"
              },
              {
                title: "Fatigue & Sommeil",
                sub: "Retrouver des nuits vraies",
                desc: "Techniques de sieste flash (SAR), synchronisation des cycles et récupération pour horaires décalés.",
                icon: Clock,
                color: "text-indigo-400"
              },
              {
                title: "Régulation des Émotions",
                sub: "Maîtriser sans éteindre",
                desc: "Accueillir la colère, la peur ou le découragement sans les laisser parasiter les décisions vitales.",
                icon: Heart,
                color: "text-pink-400"
              },
              {
                title: "Performances",
                sub: "Rester opérationnel sans se détruire",
                desc: "Maintenir une haute intensité professionnelle sans compromettre sa santé mentale ni sa vie privée.",
                icon: Zap,
                color: "text-amber-400"
              },
              {
                title: "Préparation Mentale",
                sub: "Se préparer aux moments difficiles",
                desc: "Imagerie mentale (PMR) et répétition cognitive pour aborder les crises et interventions critiques.",
                icon: Brain,
                color: "text-cyan-400"
              },
              {
                title: "QVST & Équipes",
                sub: "Qualité de Vie et Santé au Travail",
                desc: "Améliorer le climat d'équipe, désamorcer les conflits et préserver la continuité du service.",
                icon: Users,
                color: "text-emerald-400"
              }
            ].map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 hover:border-slate-700 transition-all">
                  <Icon className={`w-8 h-8 ${exp.color}`} />
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide">{exp.sub}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 9 — AVIS CLIENTS / PAROLES DU RÉEL ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              Retours Authentiques
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              ILS ONT RETROUVÉ LE SOUFFLE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-amber-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded-full bg-slate-800">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &laquo;&nbsp;{t.text}&nbsp;&raquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-amber-400/90">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 10 — ON S'ADAPTE À VOUS (FLEXIBILITÉ) ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Accompagnement Sur-Mesure
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              On s&apos;adapte à vous.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Pas de format rigide. Pas de &ldquo;formule standard&rdquo;. Votre situation est unique. Votre solution aussi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Pour les institutions & entreprises</h3>
              <p className="text-xs text-slate-400">Mairies, hôpitaux, entreprises, collectivités...</p>
              <ul className="space-y-2 text-sm text-slate-300 pt-2">
                <li>• Formation d&apos;équipe complète</li>
                <li>• Ateliers pour agents en première ligne</li>
                <li>• Accompagnement des encadrants & RH</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Pour les particuliers</h3>
              <p className="text-xs text-slate-400">Vous qui vivez ça seul et portez tout...</p>
              <ul className="space-y-2 text-sm text-slate-300 pt-2">
                <li>• Sessions individuelles confidentielles</li>
                <li>• Accompagnements sur-mesure</li>
                <li>• Suivi adapté à votre rythme réel</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Format libre & Hybride</h3>
              <p className="text-xs text-slate-400">Selon vos contraintes de service</p>
              <ul className="space-y-2 text-sm text-slate-300 pt-2">
                <li>• En groupe ou seul(e)</li>
                <li>• Présentiel, à distance, ou mixte</li>
                <li>• Durée modulée selon votre réalité</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-amber-500/30 text-center">
            <p className="text-base sm:text-lg font-bold text-amber-300">
              Résultat : Vous repartez avec des outils concrets. Utilisables tout de suite. Efficaces sur le long terme.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 11 — FAQ ACCORDÉON ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Questions Fréquentes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Des réponses directes, sans langue de bois.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-850"
                  >
                    <span className="font-bold text-white text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? <ChevronUp className="text-amber-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800 pt-4 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 12 — CTA FINAL & FORMULAIRE DIAGNOSTIC (15 MIN) ── */}
      <section id="diagnostic" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Échange Confidentiel Sans Engagement
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Je m&apos;offre un diagnostic (15 min)
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            15 minutes d&apos;évaluation avec Mélissa ou un expert TOP pour faire le point sur votre charge mentale ou celle de votre équipe.
          </p>

          <form onSubmit={handleDiagnosticSubmit} className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-5 shadow-2xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Nom & Prénom
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Ex: Sophie L. / Marc (DRH) / Capitaine Thomas"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Numéro de Téléphone (WhatsApp privilégié)
              </label>
              <input
                type="tel"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="06 XX XX XX XX"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Situation / Profil
              </label>
              <select
                value={contactProfile}
                onChange={(e) => setContactProfile(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
              >
                <option value="urgence">Métiers de terrain / urgence (pompier, police, soignant, infirmier)</option>
                <option value="education">Éducation / Enseignement / AESH / ATSEM</option>
                <option value="direction">Direction, Élu, DRH, Manager d&apos;équipe</option>
                <option value="particulier">Particulier sous pression (charge mentale intense)</option>
                <option value="autre">Autre situation spécifique</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Valider & Démarrer sur WhatsApp (15 min)</span>
            </button>

            <p className="text-center text-xs text-slate-400 mt-2">
              🔒 Confidentialité totale. Aucun spam. Réponse sous 24h ouvrées.
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER LÉGAL & DISCLAIMER ── */}
      <footer className="py-12 px-4 bg-black border-t border-slate-900 text-slate-500 text-xs leading-relaxed">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-slate-500 text-[11px] leading-relaxed">
            Ce site ne fait pas partie du site web Facebook ou de Facebook, Inc. ni de Google Inc. En outre, ce site n&apos;est pas endossé par Facebook en aucune façon ni par Google Inc. Facebook est une marque déposée de Facebook, Inc.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-400">
            <div>
              <strong>Ô&apos;TOP FORMATIONS</strong> — Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules • Tél : 07 49 23 94 23 • SIRET : 990 443 186 00012 • RCS Toulon
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-white">Accueil IA & B2B</Link>
              <Link href="/formations/fi-top" className="hover:text-white">FI TOP® 21h</Link>
              <Link href="/qualite" className="hover:text-white">Qualiopi</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Modale de Félicitations */}
      <CongratulationsModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        courseTitle="Diagnostic Personnalisé TOP® (15 min)"
      />
    </main>
  );
}
