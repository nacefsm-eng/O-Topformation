'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CongratulationsModal from '@/components/ui/congratulations-modal';
import NinePillarsSection from '@/components/sections/NinePillarsSection';
import { 
  Flame, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Award, 
  Users, 
  Heart, 
  Brain, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle, 
  Star, 
  Zap, 
  Compass, 
  FileText,
  Activity,
  AlertTriangle
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
      a: "On construit des solutions sur mesure. Donc le prix dépend de votre situation. Prise en charge OPCO, FIF PL, AFDAS ou financement entreprise possible. Appel découverte gratuit de 15 minutes. On voit ensemble sans tabou. Pas de surprise."
    },
    {
      q: "Ça prend combien de temps ? Je peux m'absenter ?",
      a: "On s'adapte à votre emploi du temps. Ateliers ponctuels, sessions courtes, formats immersifs d'un week-end (21h) ou modules d'une journée (7h). En présentiel, à distance, ou mixte. On construit ça ensemble. Parce qu'on sait que votre temps c'est de l'or."
    }
  ];

  const testimonials = [
    {
      name: "Aurélie",
      role: "Formation massage aux aimants & régulation",
      text: "J'ai suivi la formation avec toi et ça a été une très belle expérience. Ton accompagnement m'a profondément touchée : toujours présente, douce, à l'écoute et pleine d'une énergie lumineuse. Grâce à toi, j'ai découvert une pratique apaisante, efficace et tellement enrichissante. Tu transmets ton savoir avec passion, simplicité et beaucoup de cœur. Je repars confiante, inspirée et vraiment reconnaissante. Merci pour ta présence et ton professionnalisme."
    },
    {
      name: "Lucie",
      role: "Session TOP & Libération Mentale",
      text: "Une formation vécue comme fantastique et inoubliable. On arrive souvent avec la tête saturée et la sensation de n'avoir plus d'air, et on en ressort véritablement épanouie et grandie, avec des armes concrètes pour ne plus subir."
    },
    {
      name: "Nadine",
      role: "Conférence TOP par Régis Domergue (Salon Bien-Être)",
      text: "Une intervention riche, pertinente, extrêmement impactante. On sent immédiatement le vécu militaire et l'authenticité de l'expérience opérationnelle. Zéro bla-bla, que des clés immédiatement applicables pour garder la tête froide."
    },
    {
      name: "Yohan",
      role: "Conférence TOP à La Seyne-sur-Mer",
      text: "Conférence très intéressante et une très belle présentation. Des explications claires sur les mécanismes du système nerveux et comment le recalibrer sans attendre l'effondrement."
    },
    {
      name: "Melo",
      role: "Accompagnement individuel et régulation émotionnelle",
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
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black font-sans">
      
      {/* ── TOP BANNER DISPATCH ── */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <Flame size={16} className="text-slate-950 animate-pulse" />
        <span>URGENCES HUMAINES • SANTÉ MENTALE OPÉRATIONNELLE • SESSION SUR-MESURE</span>
        <span className="hidden sm:inline opacity-60">|</span>
        <a href="tel:+33767246825" className="hidden sm:inline underline hover:opacity-80">
          Ligne directe : 07 67 24 68 25
        </a>
      </div>

      {/* ── NAVIGATION MINIMALISTE ── */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Ô'TOP Formation" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              href="/formations/fi-top" 
              className="text-xs sm:text-sm text-slate-300 hover:text-white hidden md:inline-block font-medium"
            >
              Programme FI TOP®
            </Link>
            <a
              href="#diagnostic"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Je m&apos;offre un diagnostic</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* ── SECTION 1 — HERO : RESPIREZ À NOUVEAU ── */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-amber-500/15 via-rose-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap size={15} className="text-amber-400" />
            Méthode TOP® PERRAULT-PIERRE • Forces de l&apos;Ordre, Soignants, Éducation & Entreprises
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Respirez <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500">à nouveau.</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 max-w-3xl mx-auto leading-snug">
            Ô&apos;Top redonne souffle et clarté à ceux qui portent les autres.
          </p>

          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vous donnez tout. Mais à force de tenir pour les autres, vous oubliez comment tenir pour vous. 
            <strong className="text-white block mt-2">Ô&apos;Top remet les compteurs à zéro.</strong>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#identification"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-base font-extrabold shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Je découvre Ô&apos;TOP</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20un%20diagnostic%20rapide%20de%2015%20minutes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 text-base font-bold transition-all"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>Échanger sur WhatsApp (15 min)</span>
            </a>
          </div>

          {/* Badges de Réassurance */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Taux de satisfaction <strong>100%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Taux de réussite <strong>100%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Taux d&apos;assiduité <strong>100%</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — IDENTIFICATION : AVANT / PENDANT / APRÈS ── */}
      <section id="identification" className="py-20 bg-slate-900/60 border-y border-slate-800 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Le miroir de votre réalité
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Dans cette histoire, vous êtes peut-être…
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Étape 1 : EN AVANT */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative flex flex-col justify-between group hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black text-lg flex items-center justify-center mb-6">
                  01
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">En Avant</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Tout semble sous contrôle. Vous gérez. Vous tenez la cadence. Mais cette tension dans la nuque, ce sommeil plus léger, cette fatigue qui s&apos;installe… vous le sentez : quelque chose commence à peser. Vous vous dites &ldquo;c&apos;est normal&rdquo;. &ldquo;Je tiendrai.&rdquo; C&apos;est ce que tout le monde se dit avant que ça craque.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-amber-400/80">
                Phase d&apos;accumulation silencieuse
              </div>
            </div>

            {/* Étape 2 : PENDANT */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-rose-500/40 relative flex flex-col justify-between group shadow-xl shadow-rose-950/20">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-black text-lg flex items-center justify-center mb-6">
                  02
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Pendant</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Ou vous êtes en plein dedans. Le terrain n&apos;attend pas. Chaque minute compte. Chaque décision pèse. Le corps exécute. Le mental encaisse. L&apos;instinct prend le relais. Vous tenez. Vous agissez. Vous tenez encore. Mais à force d&apos;être en mode survie, quelque chose brûle à l&apos;intérieur.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-rose-400">
                Mode survie & surchauffe du système
              </div>
            </div>

            {/* Étape 3 : APRÈS */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative flex flex-col justify-between group hover:border-amber-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-lg flex items-center justify-center mb-6">
                  03
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Après</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  &laquo;&nbsp;Ou peut-être après. Le calme revient dehors, mais pas en vous. Les images restent. Le cerveau rejoue. Les sons, les visages, les odeurs. Vous dites &ldquo;ça va&rdquo; alors que ça ne va pas. Vous rentrez chez vous sans vraiment revenir. Et demain, il faudra recommencer.&nbsp;&raquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-indigo-400/80">
                Rumination, flashs & déconnexion
              </div>
            </div>
          </div>

          {/* Phrase de clôture forte */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-500/40 text-center">
            <p className="text-lg sm:text-2xl font-extrabold text-white">
              &laquo;&nbsp;Peu importe où vous en êtes. Le résultat est le même : vous portez trop, depuis trop longtemps.&nbsp;&raquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — CE QUI SE PASSE VRAIMENT ── */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Diagnostic sans filtre
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 leading-tight">
              VOILÀ CE QUI SE PASSE VRAIMENT :
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p className="p-6 rounded-2xl bg-slate-900/60 border-l-4 border-amber-500">
              Votre corps sature. Votre système nerveux ne se met plus jamais en pause. Hypervigilance le jour, insomnie la nuit. Et quand enfin vous dormez, votre cerveau rejoue la mission, la salle de classe, le couloir d&apos;hôpital, le bureau.
            </p>

            <p className="p-6 rounded-2xl bg-slate-900/60 border-l-4 border-rose-500">
              Ce n&apos;est pas réservé aux métiers d&apos;urgence. Les <strong>enseignants, éducateurs, AESH, ATSEM, soignants et encadrants</strong> vivent le même épuisement mais autrement. Eux ne voient pas le sang, mais ils encaissent les cris, la charge mentale, les injustices, les tensions humaines, jour après jour. Ils absorbent tout, sans relâche, jusqu&apos;à s&apos;oublier eux-mêmes.
            </p>

            <p className="text-slate-400 italic">
              Petit à petit, tout devient plus flou, plus lourd. Vous perdez l&apos;élan, la clarté, l&apos;envie. Mais vous continuez, parce que c&apos;est ce que vous avez toujours fait : <strong>tenir</strong>.
            </p>
          </div>

          {/* Sous-bloc Côté institutions / Entreprises */}
          <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-amber-400 shrink-0" size={28} />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Côté institutions, entreprises & directions
              </h3>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dirigeants, responsables RH, cadres, élus, chefs de service, vous le voyez tous les jours : la tension monte, la fatigue s&apos;installe, les arrêts maladie s&apos;enchaînent. Vous tenez les structures debout, mais vos équipes s&apos;épuisent en silence.
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Derrière chaque indicateur : <strong>absentéisme, désengagement, perte de sens</strong>, il y a des gens. Vos gens. Des femmes et des hommes qui veulent bien faire, mais qui s&apos;effondrent à force de tout porter.
            </p>

            <div className="p-6 rounded-xl bg-slate-950 border border-amber-500/30">
              <p className="text-amber-200 font-semibold text-sm sm:text-base leading-relaxed">
                Mettre en place des outils de régulation mentale, ce n&apos;est pas du bien-être gadget. C&apos;est une stratégie de performance humaine. Des équipes qui dorment mieux, qui régulent mieux leurs émotions, qui tiennent mieux la pression, sont des équipes plus fiables, plus claires, plus soudées. Prévenir l&apos;usure, c&apos;est préserver la lucidité collective, la qualité des décisions, la cohésion, et la continuité de votre organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — POURQUOI Ô'TOP EXISTE ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Notre Mission Viscérale
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            C&apos;EST POUR ÇA QUE Ô&apos;TOP EXISTE
          </h2>

          <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-relaxed">
            Pour rouvrir le corps. Pour rendre le calme opérationnel. Pour rendre à chacun ce qu&apos;il a donné sans compter. Pour vous rendre à vous-même.
          </p>

          <p className="text-lg sm:text-xl text-amber-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Pour les gens qui ont vu des choses. Qui portent des images. Qui ne dorment pas normal. Qui se demandent chaque jour : <br />
            <span className="text-2xl sm:text-3xl font-black text-white mt-2 block">&laquo;&nbsp;Combien de temps encore ?&nbsp;&raquo;</span>
          </p>
        </div>
      </section>

      {/* ── SECTION 5 — RÉSULTATS OBSERVÉS & STATS ── */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Impact Clinique & Opérationnel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              CE QU&apos;ON OBSERVE APRÈS NOS INTERVENTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* Col 1 : Sur les personnes */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 text-amber-400 font-bold text-xl">
                <Heart className="w-6 h-6" />
                <h3>Sur les personnes</h3>
              </div>
              <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Réduction du stress perçu</strong> dès les 2 premières semaines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Sommeil réparateur</strong> et vigilance physiologique régulée sans somnifères.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Calme mental retrouvé</strong> même en contexte de crise et sous forte pression.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Retour d&apos;énergie</strong>, concentration restaurée et élan personnel débloqué.</span>
                </li>
              </ul>
            </div>

            {/* Col 2 : Sur les équipes & organisations */}
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-xl">
                <Users className="w-6 h-6" />
                <h3>Sur les équipes & organisations</h3>
              </div>
              <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Moins d&apos;arrêts maladie</strong> et baisse drastique des erreurs d&apos;inattention liées à la fatigue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Meilleure communication interne</strong> et cohésion collective renforcée sur le terrain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Plus de clarté</strong> dans la prise de décision stratégique et managériale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hausse de la satisfaction</strong>, rétention des talents et performance humaine durable.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chiffres bruts officiels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-amber-400">100%</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-300">Taux de satisfaction</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400">100%</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-300">Taux de réussite</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-4xl sm:text-5xl font-black text-blue-400">100%</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-300">Taux d&apos;assiduité</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — POSITIONNEMENT / DIFFÉRENCIATION ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Rupture avec le gadget
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Ô&apos;TOP N&apos;EST PAS UNE FORMATION DE PLUS.
            </h2>
            <p className="mt-4 text-xl font-bold text-amber-400">
              C&apos;est une méthode pour ceux qui tiennent quand tout le monde lâche.
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              Parce que ni le yoga du mercredi soir, ni les affiches &ldquo;prendre soin de soi&rdquo; dans les salles de repos, ni les discours creux sur la qualité de vie au travail ne suffisent à tenir quand tout brûle.
            </p>
            <p>
              Nous n&apos;avons pas lancé un organisme de formation traditionnel. <strong>Nous avons décidé d&apos;armer mentalement ceux qui tiennent les structures debout.</strong>
            </p>
            <p className="text-slate-200">
              Ô&apos;Top, c&apos;est l&apos;endroit exact où la <strong>performance rencontre la lucidité</strong>.
            </p>
          </div>

          {/* Punchline en énorme */}
          <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-rose-500/20 border-2 border-amber-500 text-center">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              &laquo;&nbsp;On n&apos;enseigne pas la gestion du stress.<br className="hidden sm:inline" />
              <span className="text-amber-400">On entraîne le mental.</span>&nbsp;&raquo;
            </p>
            <div className="mt-8">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/30 transition-all"
              >
                <span>Je m&apos;offre un diagnostic (15 min)</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 9 PILIERS POUR MIEUX COMPRENDRE L'HUMAIN (Intégration directe) ── */}
      <NinePillarsSection 
        title="Les 9 Piliers pour Mieux Comprendre l'Humain"
        subtitle="Sortir des schémas automatiques, réguler la colère et la peur, maîtriser la communication cognitive : découvrez les leviers enseignés dans nos sessions."
      />

      {/* ── SECTION 7 — QUI SOMMES-NOUS : LES 2 LEADERS DU TERRAIN ── */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Fondateurs & Praticiens du Réel
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              QUI SOMMES-NOUS ?
            </h2>
            <p className="mt-4 text-lg text-slate-300 font-semibold italic">
              &laquo;&nbsp;Pas des coachs bien-être. Pas des « facilitateurs de sérénité ». Pas des marchands de respiration consciente.&nbsp;&raquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profil Mélissa Jennadi */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="/team-melissa.jpg" 
                    alt="Melyssa Jennadi" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-amber-500 shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Melyssa Jennadi</h3>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                      Fondatrice et responsable pédagogique
                    </p>
                    <p className="text-xs text-slate-400">Basée à Ollioules (83)</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Issue du terrain éducatif, engagée là où les nerfs lâchent en silence. Formatrice, praticienne, au contact direct de celles et ceux qui encaissent sans jamais s&apos;autoriser à flancher : enseignants, encadrants, personnels d&apos;accompagnement, équipes épuisées mais debout. Elle a eu à accompagner des dizaines de cas critiques.
                </p>

                <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                  <div className="font-semibold text-slate-300 uppercase tracking-wider">Parcours & Qualifications :</div>
                  <ul className="space-y-1">
                    <li>• Formatrice en Techniques d&apos;Optimisation du Potentiel (T.O.P)</li>
                    <li>• Spécialisée gestion du stress, fatigue et sommeil réparateur</li>
                    <li>• MY KUNDALINI (2018–auj.) : praticienne/formatrice bien-être, massages thérapeutiques</li>
                    <li>• Éducation Nationale (2016–2018) : professeure des écoles, prévention du harcèlement</li>
                    <li>• Zen & Sens (2010–2014) : manager SPA / club de remise en forme</li>
                    <li>• Certifications : Hypnothérapie & EMDR, Reiki, Naturopathie, Master Professionnel Sorbonne</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20%C3%A9changer%20avec%20vous%20concernant%20un%20diagnostic%20TOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                >
                  <MessageCircle size={15} />
                  Contacter Mélissa directement
                </a>
              </div>
            </div>

            {/* Profil Régis Domergue */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="/team-regis.jpg" 
                    alt="Régis Domergue" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Régis Domergue</h3>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                      Co-fondateur, expert TOP & conférencier
                    </p>
                    <p className="text-xs text-slate-400">Basé à Salon-de-Provence (13)</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Formé à l&apos;exigence militaire. Moniteur TOP. Habitué aux environnements où on n&apos;a pas le luxe de craquer. Là où chaque seconde compte et où maîtriser son système nerveux n&apos;est pas un confort mais une condition de survie et d&apos;efficacité. Il a eu à accompagner des dizaines de cas.
                </p>

                <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                  <div className="font-semibold text-slate-300 uppercase tracking-wider">Parcours Militaire & Expertise :</div>
                  <ul className="space-y-1">
                    <li>• Plus de 10 ans dans l&apos;Armée de l&apos;Air et de l&apos;Espace</li>
                    <li>• Contrôleur de circulation aérienne, chef de section, opérateur surveillance aérienne, instructeur</li>
                    <li>• Affectations opérationnelles : Colmar, Nouméa, Istres</li>
                    <li>• Missions extérieures (OPEX) : Roumanie, Djibouti, Afghanistan, Tchad, Niger</li>
                    <li>• Formations : Moniteur TOP, Formateur Facteur Humain, Team Resource Management, PNL</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <a
                  href="#diagnostic"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
                >
                  <ArrowRight size={15} />
                  Planifier un accompagnement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — CHAMPS D'EXPERTISE ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Interventions Ciblées
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              NOS CHAMPS D&apos;EXPERTISES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stress & Santé Mentale",
                sub: "Transformer le stress chronique",
                desc: "Reprendre le contrôle sur l'emballement neuro-végétatif, réduire le cortisol et désamorcer le burn-out avant la rupture.",
                icon: ShieldAlert,
                color: "text-rose-400"
              },
              {
                title: "Fatigue & Sommeil",
                sub: "Retrouver des nuits vraies",
                desc: "Techniques de sieste flash (SAR), synchronisation des cycles circadiens et récupération profonde pour les horaires décalés.",
                icon: Clock,
                color: "text-indigo-400"
              },
              {
                title: "Régulation des Émotions",
                sub: "Maîtriser sans éteindre",
                desc: "Accueillir la peur, la colère et l'impuissance sans les laisser parasiter les décisions vitales ni impacter vos proches.",
                icon: Heart,
                color: "text-pink-400"
              },
              {
                title: "Performances",
                sub: "Rester opérationnel sans se détruire",
                desc: "Maintenir une haute intensité professionnelle sans compromettre sa santé mentale, sa lucidité ni sa vie personnelle.",
                icon: Zap,
                color: "text-amber-400"
              },
              {
                title: "Préparation Mentale",
                sub: "Se préparer aux moments difficiles",
                desc: "Imagerie mentale (PMR) et répétition cognitive pour aborder les crises, interventions complexes et entretiens décisifs.",
                icon: Brain,
                color: "text-cyan-400"
              },
              {
                title: "QVST & Entreprises",
                sub: "Qualité de Vie et Santé au Travail",
                desc: "Transformer le climat relationnel, désamorcer les conflits d'équipe et préserver la continuité du service public ou privé.",
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

      {/* ── FORMATIONS COMPLÉMENTAIRES & BIEN-ÊTRE ── */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Formations & Cursus Pratiques
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Le Catalogue Opérationnel Ô&apos;TOP
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Des modules certifiants et pratiques animés par des experts de terrain à Ollioules (83) et dans toute la France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FB-TOP */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Formation Courte
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Formation FB-TOP</h3>
                <p className="text-xs text-amber-400 font-semibold mt-1">7h • 7 modules • Groupe max 12</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Initiation intensive aux Techniques d&apos;Optimisation du Potentiel à Ollioules. Aucun prérequis nécessaire. Idéal pour intégrer rapidement les réflexes de récupération.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Accessible débutants</span>
                <Link href="/formations/fb-top" className="text-amber-400 font-bold hover:underline">
                  Découvrir →
                </Link>
              </div>
            </div>

            {/* FI-TOP */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/50 flex flex-col justify-between relative shadow-lg shadow-amber-500/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Cursus Immersion
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Formation Initiale FI TOP®</h3>
                <p className="text-xs text-amber-400 font-semibold mt-1">21h • 3 jours (Vendredi à Dimanche)</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Le cursus complet de développement personnel Méthode PERRAULT-PIERRE. RMD, RPa, RMI, DPP, PMR, SAR, RM, sommeil, pause déjeuner équipée et supports à J-5.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-emerald-400 font-semibold">Prise en charge OPCO/FIF PL</span>
                <Link href="/formations/fi-top" className="text-amber-400 font-bold hover:underline">
                  Voir syllabus →
                </Link>
              </div>
            </div>

            {/* Programme PHARE */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Milieu Scolaire
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Programme PHARE & Écoles</h3>
                <p className="text-xs text-rose-400 font-semibold mt-1">Prévention harcèlement • Ateliers 5 min TOP</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Interventions ciblées pour enseignants, élèves et personnels éducatifs. Gestion du climat scolaire et régulation collective des conflits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Éducation Nationale</span>
                <a href="#diagnostic" className="text-amber-400 font-bold hover:underline">
                  Sur devis →
                </a>
              </div>
            </div>

            {/* Massages aux aimants */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Thérapie Corporelle
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Massages aux Aimants</h3>
                <p className="text-xs text-emerald-400 font-semibold mt-1">280 € / jour • Pratique apaisante</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Formation certifiante aux aimants thérapeutiques pour libérer les tensions somatiques profondes et rétablir la circulation énergétique.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Dispensé par Mélissa</span>
                <a href="#diagnostic" className="text-amber-400 font-bold hover:underline">
                  S&apos;inscrire →
                </a>
              </div>
            </div>

            {/* Head Spa Holistique */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Expertise Holistique
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Head Spa Holistique Thérapeutique</h3>
                <p className="text-xs text-purple-400 font-semibold mt-1">2 jours intensifs • Prise en charge FAFCEA</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Protocole complet de relaxation crânienne, stimulation micro-circulatoire et libération des charges psycho-émotionnelles accumulées.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-emerald-400 font-semibold">Éligible FAFCEA</span>
                <a href="#diagnostic" className="text-amber-400 font-bold hover:underline">
                  Détail →
                </a>
              </div>
            </div>

            {/* Massage Huiles Essentielles */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Tournée Nationale & Suisse
                </span>
                <h3 className="text-xl font-bold text-white mt-3">Massage Holistique aux Huiles</h3>
                <p className="text-xs text-amber-400 font-semibold mt-1">2 jours (14h) • 280 € HT/j ou 560 € HT complet</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  Disponible à Toulon, Nice, Monaco, Lyon, Toulouse, Montpellier, Paris, Lille, Orléans, Belgique et Suisse.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Plusieurs villes</span>
                <a href="#diagnostic" className="text-amber-400 font-bold hover:underline">
                  Réserver →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — AVIS CLIENTS & TÉMOIGNAGES DU RÉEL ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Paroles de Professionnels
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              ILS ONT RETROUVÉ LE SOUFFLE
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Retours authentiques recueillis après nos formations et conférences de terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &laquo;&nbsp;{t.text}&nbsp;&raquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-amber-400/90">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — ON S'ADAPTE À VOUS ── */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Flexibilité Totale
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              On s&apos;adapte à vous.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Pas de format rigide. Pas de &ldquo;formule standard&rdquo;. Votre situation est unique. Votre solution aussi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pour les institutions */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Pour les institutions & entreprises</h3>
              <p className="text-xs text-slate-400">Mairies, hôpitaux, entreprises, collectivités...</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Formation d&apos;équipe complète</li>
                <li>• Ateliers pour agents en première ligne</li>
                <li>• Accompagnement des encadrants & RH</li>
              </ul>
            </div>

            {/* Pour les particuliers */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Pour les particuliers</h3>
              <p className="text-xs text-slate-400">Vous qui vivez ça seul et portez tout...</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Sessions individuelles confidentielles</li>
                <li>• Accompagnements sur-mesure</li>
                <li>• Suivi adapté à votre rythme réel</li>
              </ul>
            </div>

            {/* Format libre */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Format libre & Hybride</h3>
              <p className="text-xs text-slate-400">Selon vos contraintes de service</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• En groupe ou seul(e)</li>
                <li>• Présentiel, à distance, ou mixte</li>
                <li>• Durée modulée selon votre réalité</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <p className="text-base sm:text-lg font-bold text-amber-300">
              Résultat : Vous repartez avec des outils concrets. Utilisables tout de suite. Efficaces sur le long terme.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 11 — FAQ ACCORDÉON ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Questions Fréquentes
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Des réponses directes, sans langue de bois.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-900/50"
                  >
                    <span className="font-bold text-white text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? <ChevronUp className="text-amber-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 bg-slate-900/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 12 — CTA FINAL & FORMULAIRE DIAGNOSTIC 15 MIN ── */}
      <section id="diagnostic" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Échange Confidentiel Sans Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Je m&apos;offre un diagnostic (15 min)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            15 minutes au téléphone ou sur WhatsApp avec un expert TOP pour faire le point sur votre charge mentale ou celle de vos équipes.
          </p>

          <form onSubmit={handleDiagnosticSubmit} className="mt-10 p-8 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-5 shadow-2xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Nom & Prénom
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Ex: Capitaine Thomas / Sophie L. / Marc (DRH)"
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
              <span>Valider & Démarrer sur WhatsApp</span>
            </button>

            <p className="text-center text-xs text-slate-400 mt-2">
              🔒 Confidentialité totale assurée. Aucun spam. Réponse sous 24h ouvrées.
            </p>
          </form>
        </div>
      </section>

      {/* ── MENTIONS LÉGALES & FOOTER OFFICIEL ── */}
      <footer className="py-14 px-4 bg-black border-t border-slate-900 text-slate-500 text-xs leading-relaxed">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Meta & Facebook disclaimer */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-slate-500 text-[11px] leading-relaxed">
            Ce site ne fait pas partie du site web Facebook ou de Facebook, Inc. ni de Google Inc. En outre, ce site n&apos;est pas endossé par Facebook en aucune façon ni par Google Inc. Facebook est une marque déposée de Facebook, Inc.
          </div>

          {/* Legal details from official Livret d'Accueil */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-900">
            <div>
              <img src="/logo.png" alt="Ô'TOP Formation" className="h-8 w-auto mb-3 object-contain opacity-80" />
              <p className="text-slate-400">
                Organisme spécialisé dans les Techniques d&apos;Optimisation du Potentiel (T.O.P), la santé mentale opérationnelle et les thérapies corporelles.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-2">Siège & Coordonnées</div>
              <p>Ô&apos;TOP FORMATIONS</p>
              <p>Espace Gamma 1, 139 Chemin des 2 Frères</p>
              <p>83190 Ollioules, France</p>
              <p className="mt-2">Tél : <a href="tel:0749239423" className="text-slate-400 hover:text-white">07 49 23 94 23</a></p>
              <p>Email : <a href="mailto:formation.rmcf@gmail.com" className="text-slate-400 hover:text-white">formation.rmcf@gmail.com</a></p>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-2">Identité Juridique</div>
              <p>SIRET : 990 443 186 00012</p>
              <p>Code NAF : 8559A</p>
              <p>RCS Toulon</p>
              <p className="mt-1">Enregistré auprès du Préfet de région PACA (cet enregistrement ne vaut pas agrément de l&apos;État)</p>
            </div>

            <div>
              <div className="font-bold text-slate-300 uppercase tracking-wider mb-2">Accès Directs</div>
              <ul className="space-y-1">
                <li><Link href="/" className="hover:text-slate-300">Accueil Site Global</Link></li>
                <li><Link href="/formations/fi-top" className="hover:text-slate-300">Cursus FI TOP® (21h)</Link></li>
                <li><Link href="/formations/fb-top" className="hover:text-slate-300">Formation FB-TOP (7h)</Link></li>
                <li><Link href="/methode" className="hover:text-slate-300">La Méthode & 9 Piliers</Link></li>
                <li><Link href="/qualite" className="hover:text-slate-300">Charte Qualité Qualiopi</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-slate-950 text-slate-400">
            © {new Date().getFullYear()} Ô&apos;TOP FORMATIONS. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* ── MODALE FÉLICITATIONS SUCCÈS ── */}
      <CongratulationsModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        trainingTitle="Diagnostic Personnalisé TOP® (15 min)"
      />
    </div>
  );
}
