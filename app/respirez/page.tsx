'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CongratulationsModal from '@/components/ui/congratulations-modal';
import NinePillarsSection from '@/components/sections/NinePillarsSection';
import TeamMemberCard from '@/components/ui/team-member-card';
import { 
  Bot, 
  Sparkles, 
  Share2, 
  Brain, 
  Heart, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Award, 
  Users, 
  Zap, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Sparkle,
  Compass,
  Laptop,
  Flame,
  FileCheck,
  Building2,
  Calendar,
  MapPin,
  Coins
} from 'lucide-react';

export default function MasterSalesPage() {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'ia' | 'reseaux' | 'top' | 'therapie' | 'cyber'>('all');
  const [showModal, setShowModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [diagnosticName, setDiagnosticName] = useState('');
  const [diagnosticPhone, setDiagnosticPhone] = useState('');
  const [diagnosticNeed, setDiagnosticNeed] = useState('ia-business');

  const tracks = [
    { id: 'all', label: '🌟 Tout le Catalogue', count: '8 Formations' },
    { id: 'ia', label: '🤖 IA & Automatisation', count: '2 Titres RS' },
    { id: 'reseaux', label: '📱 Réseaux Sociaux', count: '1 Titre RS' },
    { id: 'top', label: '🧘 Méthode TOP®', count: '2 Formations' },
    { id: 'therapie', label: '🌿 Soins & Massages', count: '3 Cursus' },
    { id: 'cyber', label: '🛡️ Cybersécurité', count: 'Expertise' },
  ];

  const formationsList = [
    {
      id: 'rs6776',
      track: 'ia',
      badge: 'Certification France Compétences RS6776',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      title: 'IA Générative pour Indépendants & Créateurs',
      duration: '16 heures de vidéos + Accompagnement individuel',
      modality: '100% en ligne • Accès illimité 24/7 • Coaching 1-to-1 inclus',
      funding: 'Finançable selon votre statut (CPF, OPCO, FAF) via notre organisme partenaire',
      price: 'Financement selon éligibilité',
      desc: 'Maîtrisez ChatGPT, Claude, Midjourney et l’IA générative pour rédiger vos contenus, automatiser vos tâches récurrentes et récupérer 10h à 15h par semaine.',
      points: [
        'Prompting avancé & ingénierie de requêtes sur-mesure',
        'Création de GPTs personnalisés pour votre propre activité',
        'Génération visuelle & déclinaison graphique immédiate',
        'Cas pratiques orientés rentabilité et gain de temps réel'
      ],
      ctaText: 'Explorer le programme RS6776',
      ctaHref: '/formations/ia',
      whatsappMsg: 'Bonjour Mélissa, je souhaite candidater pour la formation IA Générative RS6776 (16h).'
    },
    {
      id: 'rs7344',
      track: 'ia',
      badge: 'Certification France Compétences RS7344',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      title: 'Intégration de l’IA en Entreprise & Workflows Métiers',
      duration: 'Parcours sur-mesure de 14h à 35h',
      modality: 'Distanciel, blended ou présentiel intra-entreprise',
      funding: 'Finançable selon votre statut (OPCO, FAF) via notre organisme partenaire',
      price: 'Sur devis financé',
      desc: 'Accompagnement de direction et d’équipes pour déployer l’IA dans vos processus : automatisation via n8n/Make, gouvernance des données et conformité au règlement européen AI Act (calendrier 2025-2026).',
      points: [
        'Audit des flux de travail & identification des leviers de rentabilité',
        'Mise en place de workflows automatisés sans code complexe',
        'Sécurisation des données sensibles d’entreprise & conformité RGPD',
        'Montée en compétence des collaborateurs et accompagnement au changement'
      ],
      ctaText: 'Découvrir la formation RS7344',
      ctaHref: '/formations/ia',
      whatsappMsg: 'Bonjour Renaud, je souhaite des informations sur l’intégration IA entreprise RS7344.'
    },
    {
      id: 'rs7351',
      track: 'reseaux',
      badge: 'Préparation Certification RS7351',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      title: 'Structurer et Piloter sa Communication sur les Réseaux Sociaux',
      duration: '11 heures+ de vidéos interactives',
      modality: '100% à distance • Modules actionnables à votre rythme',
      funding: 'Finançable selon votre statut (OPCO, FAF, CPF) via notre organisme partenaire',
      price: 'Financement selon éligibilité',
      desc: 'Professionnalisez votre présence digitale de A à Z. Ne publiez plus au hasard : exploitez LinkedIn, Waalaxy, Instagram, Canva et CapCut pour générer des prospects qualifiés.',
      points: [
        'Stratégie de contenu & ligne éditoriale percutante',
        'Prospection automatisée B2B sur LinkedIn avec Waalaxy',
        'Production vidéo courte (Reels, TikTok) avec CapCut et Canva',
        'Pilotage publicitaire Meta Ads et analyse du retour sur investissement'
      ],
      ctaText: 'Voir la formation Réseaux Sociaux RS7351',
      ctaHref: '/formations/reseaux-sociaux',
      whatsappMsg: 'Bonjour Mélissa, je veux me former à la communication réseaux sociaux RS7351 (11h).'
    },
    {
      id: 'fi-top',
      track: 'top',
      badge: 'Cursus Immersion • Méthode PERRAULT-PIERRE',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      title: 'Formation Initiale FI TOP® (Techniques d’Optimisation du Potentiel)',
      duration: '21 heures sur 3 jours (1 week-end immersif Ven-Sam-Dim 9h-18h)',
      modality: 'Présentiel à Ollioules (83) • Espace repas équipé & terrasse ombragée',
      funding: 'Prise en charge OPCO, FIF PL, AFDAS & budget formation',
      price: 'Éligible financements pro',
      desc: 'La méthode de référence issue des forces armées et du sport de haut niveau pour réguler le stress, optimiser le sommeil, récupérer vite et décider avec lucidité sous pression.',
      points: [
        'Module 1 : Fondamentaux, régulation & respirations (RMD, RPa, RMI, R3P)',
        'Module 2 : Relaxation, imagerie mentale (PMR, SAR, RM) & sommeil',
        'Module 3 : Intégration opérationnelle & plan d’action personnalisé',
        'Supports envoyés à J-5 • QCM final (>70%) & Attestation de compétences'
      ],
      ctaText: 'Consulter le syllabus complet FI TOP®',
      ctaHref: '/formations/fi-top',
      whatsappMsg: 'Bonjour Mélissa, je souhaite réserver ma place pour la session FI TOP (21h).'
    },
    {
      id: 'fb-top',
      track: 'top',
      badge: 'Journée Découverte • Aucun prérequis',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      title: 'Formation FB-TOP (Initiation Fondamentale)',
      duration: '7 heures (1 journée intensive : 7 modules de 1h)',
      modality: 'Présentiel à Ollioules (Var) • Petit groupe (max 12 participants)',
      funding: 'Prise en charge OPCO / FIF PL / Financement individuel',
      price: 'Accessible à tous',
      desc: 'Une journée condensée et accessible pour s’initier concrètement aux TOP®. Repartez avec des exercices immédiatement applicables dans votre vie personnelle et professionnelle.',
      points: [
        'Comprendre les mécanismes du stress et identifier ses signaux d’alerte',
        'Exercices pratiques de respiration régulatrice et de recentrage',
        'Initiation au dialogue interne positif et à la sieste flash de récupération',
        'Plan d’action individuel direct pour éviter la surcharge mentale'
      ],
      ctaText: 'Découvrir la journée FB-TOP',
      ctaHref: '/formations/fb-top',
      whatsappMsg: 'Bonjour Mélissa, je souhaite m’inscrire à la journée découverte FB-TOP (7h).'
    },
    {
      id: 'massage-aimants',
      track: 'therapie',
      badge: 'Thérapie Manuelle Somatique • Animé par Mélissa',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      title: 'Formation Massage aux Aimants Thérapeutiques',
      duration: '1 journée intensive (7h)',
      modality: 'Présentiel en cabinet à Ollioules (83)',
      funding: 'Financement individuel & professionnel',
      price: '280 € / jour',
      desc: 'Transmission d’un protocole précis et apaisant utilisant la puissance des aimants pour débloquer les tensions profondes, relancer l’énergie corporelle et réguler le système nerveux.',
      points: [
        'Principes fondamentaux du biomagnétisme appliqué au corps humain',
        'Repérage des points de charge et de tension somatique',
        'Pratique guidée complète en binôme avec validation des gestes',
        'Remise du protocole complet et du kit d’apprentissage'
      ],
      ctaText: 'Réserver ma journée massage aimants',
      ctaHref: '#diagnostic',
      whatsappMsg: 'Bonjour Mélissa, je souhaite m’inscrire à la formation massage aux aimants (280€).'
    },
    {
      id: 'head-spa',
      track: 'therapie',
      badge: 'Prise en charge FAFCEA • 100% Pratique',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      title: 'Head Spa Holistique Thérapeutique',
      duration: '2 jours intensifs de pratique',
      modality: 'Présentiel en institut équipé à Ollioules & PACA',
      funding: '100% Éligible prise en charge FAFCEA (artisans & coiffeurs)',
      price: 'Prise en charge FAFCEA possible',
      desc: 'Protocole complet de relaxation crânienne japonaise, stimulation de la micro-circulation du cuir chevelu et libération des blocages émotionnels accumulés dans le haut du corps.',
      points: [
        'Analyse du cuir chevelu et techniques de pressions crâniennes ciblées',
        'Utilisation des jets d’eau chauds, huiles végétales et vapeurs aromatiques',
        'Protocole de lâcher-prise pour clients sous haute charge mentale',
        'Montage du dossier FAFCEA assuré avec notre organisme partenaire'
      ],
      ctaText: 'Détails de la formation Head Spa',
      ctaHref: '#diagnostic',
      whatsappMsg: 'Bonjour Mélissa, je souhaite monter mon dossier FAFCEA pour la formation Head Spa.'
    },
    {
      id: 'massage-huiles',
      track: 'therapie',
      badge: 'Tournée France & Suisse • Certifiant',
      badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      title: 'Massage Holistique aux Huiles Essentielles',
      duration: '2 jours (14h) • Disponible dans 10+ villes',
      modality: 'Toulon, Nice, Monaco, Lyon, Toulouse, Montpellier, Paris, Lille, Orléans, Belgique, Suisse',
      funding: 'Financement personnel ou fonds de formation',
      price: '280 € HT / jour (soit 560 € HT la formation complète)',
      desc: 'Apprenez à combiner l’action ciblée des huiles essentielles pures et des manœuvres de massage enveloppantes pour apaiser la fatigue nerveuse et restaurer l’harmonie physique.',
      points: [
        'Sélection et dosage sécurisé des synergies aromatiques thérapeutiques',
        'Enchaînement fluide des manœuvres de relaxation neuro-musculaire',
        'Gestion de la relation client, de l’ancrage et du cadre énergétique',
        'Attestation de suivi délivrée à la fin des 2 jours'
      ],
      ctaText: 'Consulter les dates & villes de la tournée',
      ctaHref: '#diagnostic',
      whatsappMsg: 'Bonjour Mélissa, je souhaite connaître les prochaines dates pour le massage aux huiles.'
    }
  ];

  const filteredFormations = selectedTrack === 'all' 
    ? formationsList 
    : formationsList.filter(f => f.track === selectedTrack);

  const testimonials = [
    {
      name: "Aurélie",
      tag: "Praticienne Bien-Être",
      course: "Massage aux aimants & Régulation",
      text: "J'ai suivi la formation massage aux aimants avec toi et ça a été une très belle expérience. Ton accompagnement m'a profondément touchée : toujours présente, douce, à l'écoute et pleine d'une énergie lumineuse. Tu transmets ton savoir avec passion, simplicité et beaucoup de cœur. Je repars confiante, inspirée et vraiment reconnaissante."
    },
    {
      name: "Lucie",
      tag: "Professionnelle Indépendante",
      course: "Session TOP® & Libération Mentale",
      text: "Une formation vécue comme fantastique et inoubliable. On arrive avec la tête saturée et la sensation de n'avoir plus d'air, et on en ressort véritablement épanouie et grandie, avec des armes concrètes pour ne plus jamais subir la pression."
    },
    {
      name: "Nadine",
      tag: "Participante Conférence",
      course: "Conférence TOP® par Régis Domergue",
      text: "Une intervention riche, pertinente, extrêmement impactante au salon du bien-être. On ressent tout de suite l'exigence opérationnelle forgée dans l'Armée de l'Air. Zéro théorie inutile, que des outils applicables dès le lendemain."
    },
    {
      name: "Yohan",
      tag: "Dirigeant de TPE",
      course: "Conférence TOP® à La Seyne-sur-Mer",
      text: "Conférence très intéressante et une très belle présentation. Des explications claires et directes sur les mécanismes du système nerveux et sur la façon dont un chef d'entreprise peut préserver ses équipes."
    },
    {
      name: "Melo",
      tag: "Accompagnement Suivi",
      course: "Régulation Émotionnelle & Charge Mentale",
      text: "Une rencontre humaine décisive avec Melyssa. Quand on porte trop de responsabilités, retrouver une écoute bienveillante combinée à des outils concrets de récupération n'a pas de prix."
    }
  ];

  const faqs = [
    {
      q: "Comment fonctionne la prise en charge financière ?",
      a: "Nos formations sont finançables selon votre statut (OPCO, FAF, FAFCEA, CPF) par le biais de notre organisme partenaire certifié Qualiopi Eloqone. SAS Ô'TOP Formation est un organisme déclaré (NDA en cours d'attribution DREETS PACA). Notre équipe pédagogique s'occupe de monter votre dossier administratif de A à Z avec notre partenaire."
    },
    {
      q: "Faut-il des prérequis pour suivre les formations IA ou Réseaux Sociaux ?",
      a: "Aucun prérequis technique n'est requis. Nos formations sont spécialement pensées pour les indépendants, créateurs et dirigeants de TPE/PME. Tout est enseigné pas à pas, de manière concrète et opérationnelle, sans jargon d'ingénieur."
    },
    {
      q: "En quoi la Méthode TOP® est-elle différente du coaching classique ?",
      a: "La Méthode TOP® (Édith Perrault-Pierre) est née au sein du Service de santé des armées pour préparer les pilotes de chasse et les forces spéciales à agir dans l'imprévu. Ce n'est pas du bien-être passif : c'est un entraînement neuro-cognitif actif pour réguler le stress, optimiser le sommeil et garder son calme en toute circonstance."
    },
    {
      q: "Les formations sont-elles disponibles en présentiel ou à distance ?",
      a: "Nous proposons les deux formats selon vos besoins : les cursus IA et Réseaux Sociaux sont accessibles 100% en ligne avec du coaching personnalisé individuel. Les formations TOP® et Massages thérapeutiques se déroulent principalement en présentiel dans notre centre d'Ollioules (83) ou en intra-entreprise partout en France."
    },
    {
      q: "Quel est le délai pour démarrer une formation ?",
      a: "Dès validation de votre prise en charge par votre financeur (délai moyen de 7 à 15 jours selon l'OPCO ou le CPF), vous pouvez démarrer immédiatement votre parcours avec votre accès dédié et planifier vos sessions d'accompagnement."
    }
  ];

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour Mélissa, je demande mon diagnostic personnalisé O'TOP (15 min).%0ANom : ${encodeURIComponent(diagnosticName || 'Non précisé')}%0ATéléphone : ${encodeURIComponent(diagnosticPhone || 'Non précisé')}%0ABesoin prioritaire : ${encodeURIComponent(diagnosticNeed)}`;
    window.open(`https://wa.me/33767246825?text=${msg}`, '_blank');
    setShowModal(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ── 1. MASTER HERO : CLARTÉ, AUDACE & COULEURS O'TOP ── */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 overflow-hidden border-b border-slate-800">
        
        {/* Glow signature O'TOP : Bleu Royal, Cyan & Or */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-amber-400/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          {/* Tagline Officielle */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-lg shadow-blue-950/50">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ô&apos;TOP Formation • Organisme Déclaré (NDA en cours) · Porté par Eloqone • PACA & France</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            L&apos;Alliance de l&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Intelligence Artificielle</span> et du <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">Potentiel Humain</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Formations enregistrées au Répertoire Spécifique de France Compétences, méthode TOP® issue du terrain militaire et thérapies corporelles d&apos;excellence.
            <strong className="block text-white mt-1">Finançable selon votre statut (OPCO, FAF, CPF) via notre organisme partenaire.</strong>
          </p>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-blue-400">3 Titres RS</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">France Compétences</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">Finançable</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Selon statut (OPCO, FAF, CPF)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">5h Coaching</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Accompagnement individuel</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">1-to-1</div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">Suivi personnalisé</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#catalogue"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Découvrir toutes nos formations →</span>
            </a>
            <a
              href="#diagnostic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 text-sm sm:text-base font-bold transition-all shadow-lg"
            >
              <Zap size={16} className="text-amber-400" />
              <span>Demander un diagnostic (15 min gratuit)</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── 2. CATALOGUE INTERACTIF COMPLET AVEC TOUTES LES FORMATIONS & DURÉES ── */}
      <section id="catalogue" className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Le Catalogue Officiel Ô&apos;TOP
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Toutes Nos Formations & Durées
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Filtrez par domaine d&apos;expertise et découvrez nos cursus détaillés avec leurs durées officielles et prises en charge.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {tracks.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    selectedTrack === t.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                      : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{t.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900/90 text-slate-400 border border-slate-800">
                    {t.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Formations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFormations.map(formation => (
              <div
                key={formation.id}
                className="rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${formation.badgeColor}`}>
                      {formation.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 whitespace-nowrap">
                      Finançable OPCO/FAF/CPF
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {formation.desc}
                  </p>

                  {/* Modalities & Duration Badges */}
                  <div className="space-y-2 py-3 border-y border-slate-800/80 my-4 text-xs">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold">
                      <Clock size={15} className="shrink-0 text-amber-400" />
                      <span><strong>Durée :</strong> {formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin size={15} className="shrink-0 text-blue-400" />
                      <span><strong>Format :</strong> {formation.modality}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300 font-medium">
                      <Coins size={15} className="shrink-0 text-emerald-400" />
                      <span><strong>Financement :</strong> {formation.funding}</span>
                    </div>
                  </div>

                  {/* Key Program Points */}
                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    {formation.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={formation.ctaHref}
                    className="w-full sm:w-auto flex-1 text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md"
                  >
                    {formation.ctaText} →
                  </Link>
                  <a
                    href={`https://wa.me/33767246825?text=${encodeURIComponent(formation.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp direct</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. LES 9 PILIERS POUR MIEUX COMPRENDRE L'HUMAIN (MÉTHODE TOP) ── */}
      <NinePillarsSection 
        title="Les 9 Piliers Pour Mieux Comprendre l'Humain"
        subtitle="Le socle comportemental et cognitif enseigné dans nos parcours TOP® pour désamorcer l'épuisement, régler les conflits et reprendre le contrôle."
      />

      {/* ── 4. L'ÉQUIPE DES 4 EXPERTS DE TERRAIN (VRAIES PHOTOS SANS TITRES DE POSTE) ── */}
      <section className="py-24 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              Des Praticiens de Terrain
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              L&apos;Équipe des Experts
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
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
              description="Rigueur scientifique, sens aigu de la transmission et dévouement absolu pour faire grandir vos compétences, maîtriser les outils digitaux et pérenniser votre activité."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 2. Renaud */}
            <TeamMemberCard
              position="right"
              firstName="Renaud"
              lastName=""
              imageUrl="/team-renaud.jpg"
              description="Passionné par l'impact technologique et l'efficacité opérationnelle, pour transformer des outils complexes en leviers de croissance immédiate."
              onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 3. Régis DOMERGUE */}
            <TeamMemberCard
              position="left"
              firstName="Régis"
              lastName="DOMERGUE"
              imageUrl="/team-regis.png"
              description="Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique issus de 10 ans dans l'Armée de l'Air pour sécuriser chaque étape de votre progression."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 4. Med Aly GARMA */}
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

      {/* ── 5. AVIS CLIENTS & TÉMOIGNAGES AUTHENTIQUES ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              Retours Vérifiés
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ce Que Disent Nos Apprenants
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Des professionnels, indépendants et dirigeants qui ont transformé leur quotidien grâce à Ô&apos;TOP Formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-xl hover:border-blue-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                    &laquo;&nbsp;{t.text}&nbsp;&raquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-amber-400/90 font-medium">{t.course}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FAQ SANS DÉTOUR ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Questions Fréquentes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Toutes les réponses, sans jargon.
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
                    {isOpen ? <ChevronUp className="text-blue-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
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

      {/* ── 7. DIAGNOSTIC EXPRESS & DEVIS EN 15 MIN (CONVERSION FINALE) ── */}
      <section id="diagnostic" className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            Échange Gratuit Sans Engagement
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Demander un Diagnostic Express (15 min)
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            15 minutes avec Mélissa ou Renaud pour vérifier vos droits à formation (OPCO, CPF, FAF, FAFCEA) et concevoir votre parcours sur-mesure.
          </p>

          <form onSubmit={handleDiagnosticSubmit} className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left space-y-5 shadow-2xl">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Nom & Prénom *
              </label>
              <input
                type="text"
                required
                value={diagnosticName}
                onChange={(e) => setDiagnosticName(e.target.value)}
                placeholder="Ex: Sophie Martin / Marc Durand"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Votre Numéro de Téléphone *
              </label>
              <input
                type="tel"
                required
                value={diagnosticPhone}
                onChange={(e) => setDiagnosticPhone(e.target.value)}
                placeholder="06 XX XX XX XX"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                Domaine Prioritaire Souhaité *
              </label>
              <select
                value={diagnosticNeed}
                onChange={(e) => setDiagnosticNeed(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-blue-400 focus:outline-none"
              >
                <option value="ia-indep">⚡ IA Générative (RS6776 - 16h)</option>
                <option value="ia-business">🚀 Intégration IA en Entreprise & Cybersécurité (RS7344)</option>
                <option value="reseaux-sociaux">📱 Communication Réseaux Sociaux (RS7351)</option>
                <option value="fi-top">🧘 Formation Initiale FI TOP® (21h / 3 jours)</option>
                <option value="fb-top">⏱️ Formation FB-TOP Découverte (7h)</option>
                <option value="massage-aimants">🌿 Massages aux Aimants Thérapeutiques</option>
                <option value="head-spa">💆 Head Spa Holistique (Prise en charge FAFCEA)</option>
                <option value="massage-huiles">🌸 Massage Holistique aux Huiles (Tournée)</option>
                <option value="autre">✨ Autre projet sur-mesure</option>
              </select>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="rgpdConsentRespirez"
                required
                className="mt-1 w-4 h-4 accent-blue-600 rounded"
              />
              <label htmlFor="rgpdConsentRespirez" className="text-xs text-slate-400">
                J&apos;accepte que mes données soient utilisées par Ô&apos;TOP Formation pour me recontacter dans le cadre de ma demande de formation.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={20} />
              <span>Demander mon diagnostic de 15 min 💬</span>
            </button>

            <p className="text-center text-xs text-slate-400 mt-2">
              🔒 Confidentialité garantie • Analyse de vos financements sous 24h ouvrées.
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER LÉGAL & RAPPEL COORDONNÉES ── */}
      <footer className="py-12 px-4 bg-black border-t border-slate-900 text-slate-500 text-xs leading-relaxed">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-400">
            <div>
              <strong>Ô&apos;TOP FORMATIONS</strong> — Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var) • Tél : 07 67 24 68 25 (Mélissa) / 06 74 79 75 09 (Renaud) • contact@otopformation.fr • SIRET : 990 443 186 00012 • RCS Toulon
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <Link href="/formations/ia" className="hover:text-white">Formations IA</Link>
              <Link href="/formations/fi-top" className="hover:text-white">Méthode TOP®</Link>
              <Link href="/financement" className="hover:text-white">Financement</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modale de Félicitations Interactive */}
      <CongratulationsModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        courseTitle="Diagnostic Personnalisé Ô'TOP Formation (15 min)"
      />

    </div>
  );
}
