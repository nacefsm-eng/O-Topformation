'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CongratulationsModal from '@/components/ui/congratulations-modal';
import CheckoutModal from '@/components/ui/checkout-modal';
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
  Coins,
  CreditCard,
  Lock,
  Download
} from 'lucide-react';

export default function MasterSalesPage() {
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'ia' | 'reseaux' | 'top' | 'therapie'>('all');
  const [showModal, setShowModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Diagnostic form state
  const [diagnosticName, setDiagnosticName] = useState('');
  const [diagnosticPhone, setDiagnosticPhone] = useState('');
  const [diagnosticNeed, setDiagnosticNeed] = useState('ia-business');

  // Checkout modal & Inline Payment state
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{ title: string; price: number | string; description: string }>({
    title: 'Acompte de Réservation & Diagnostic Prioritaire',
    price: 150,
    description: 'Réservation immédiate de votre place + audit préalable de financement'
  });

  // Inline Registration & Payment Section State
  const [inlineSelectedPackage, setInlineSelectedPackage] = useState('ia-indep');
  const [inlineModality, setInlineModality] = useState<'stripe' | 'opco' | 'virement'>('stripe');
  const [inlineInstallments, setInlineInstallments] = useState<'1x' | '3x'>('1x');
  const [inlineFullName, setInlineFullName] = useState('');
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineStatus, setInlineStatus] = useState('independant');
  const [inlineCompany, setInlineCompany] = useState('');
  const [inlineProcessing, setInlineProcessing] = useState(false);
  const [inlineSuccess, setInlineSuccess] = useState(false);
  const [inlineTxId, setInlineTxId] = useState('');

  const packagePrices: Record<string, { title: string; price: number; description: string }> = {
    'acompte': {
      title: 'Acompte de Réservation Standard (Toutes formations)',
      price: 150,
      description: 'Bloque votre place + montage du dossier de financement'
    },
    'ia-indep': {
      title: 'Formation IA Générative (RS6776) - 21h + Coaching',
      price: 1490,
      description: 'Accès e-learning complet + 2h de coaching individuel 1-to-1'
    },
    'reseaux': {
      title: 'Formation Réseaux Sociaux & Social Selling (RS7351) - 21h + Coaching',
      price: 1490,
      description: 'Vidéos interactives, Canva, CapCut, Waalaxy + 5h coaching'
    },
    'fi-top': {
      title: 'Formation Initiale FI-TOP® (21h / 3 jours)',
      price: 890,
      description: 'Boîte à outils complète méthode TOP® + livret officiel'
    }
  };

  const currentPkg = packagePrices[inlineSelectedPackage] || packagePrices['ia-indep'];
  const calculatedMonthly = Math.round(currentPkg.price / 3);

  const tracks = [
    { id: 'all', label: '🌟 Tout le Catalogue', count: '5 Formations' },
    { id: 'ia', label: '🤖 IA & Automatisation', count: '2 Titres RS' },
    { id: 'reseaux', label: '📱 Réseaux Sociaux', count: '1 Titre RS' },
    { id: 'top', label: '🧘 Méthode TOP®', count: '2 Formations' },
  ];

  const formationsList = [
    {
      id: 'rs6776',
      track: 'ia',
      pkgKey: 'ia-indep',
      image: '/card-ai.jpg',
      instructor: 'Renaud',
      instructorPhoto: '/team-renaud.jpg',
      instructorRole: 'Consultant Expert IA',
      badge: 'Certification France Compétences RS6776 • IA Métier',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      title: 'IA Générative pour Indépendants & Dirigeants',
      duration: '21 heures (e-learning + 2h de coaching individuel 1-to-1)',
      modality: '100% en ligne à votre rythme • Accompagnement sur vos fichiers',
      funding: 'Finançable OPCO, FAF, FIF-PL via partenaire Eloqone',
      price: '1 490 € TTC (Offre spéciale : 610 € TTC)',
      desc: 'Maîtrisez ChatGPT, Claude, le prompting métier et l’automatisation pour rédiger vos contenus, traiter vos devis et récupérer un temps précieux chaque semaine.',
      points: [
        'Prompting avancé & ingénierie de requêtes sur-mesure',
        'Création de GPTs personnalisés sur vos propres documents',
        'Automatisation de flux sans code (Make, n8n) & conformité AI Act',
        'Cas pratiques guidés, quiz de validation et coaching individuel avec Renaud'
      ],
      whatsappMsg: 'Bonjour Renaud, je souhaite des informations sur la formation IA Générative RS6776.'
    },
    {
      id: 'rs7344',
      track: 'ia',
      pkgKey: 'acompte',
      image: '/formation-ai-dev.jpg',
      instructor: 'Renaud',
      instructorPhoto: '/team-renaud.jpg',
      instructorRole: 'Consultant Expert IA',
      badge: 'Certification France Compétences RS7344',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      title: 'Développer son Activité avec l’IA & Processus Web',
      duration: '21 heures (e-learning + 5h de coaching expert)',
      modality: 'Distanciel ou blended learning sur-mesure',
      funding: 'Éligible OPCO, FAF (plan de compétences & indépendants)',
      price: '1 490 € TTC (Prise en charge selon statut)',
      desc: 'Accompagnement d’équipes et de dirigeants pour déployer l’IA : audit des flux avec la méthode STEP, automatisation n8n/Make sans code et conformité au règlement européen AI Act.',
      points: [
        'Cartographie des tâches à automatiser (méthode STEP)',
        'Mise en place de workflows automatisés et assistants internes',
        'Sécurisation des données sensibles & conformité RGPD / AI Act',
        'Cas pratiques guidés, quiz d’évaluation et préparation certification'
      ],
      whatsappMsg: 'Bonjour Renaud, je souhaite un devis pour l’intégration IA entreprise RS7344.'
    },
    {
      id: 'rs7351',
      track: 'reseaux',
      pkgKey: 'reseaux',
      image: '/formation-social-growth.jpg',
      instructor: 'Renaud & Mélissa',
      instructorPhoto: '/team-melyssa.png',
      instructorRole: 'Création Contenu & Acquisition',
      badge: 'Certification France Compétences RS7351',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      title: 'Développer son Activité avec les Réseaux Sociaux & Social Selling',
      duration: '21 heures (e-learning + 5h de coaching expert)',
      modality: '100% en ligne • Accès 24/7 • Cas pratiques réels',
      funding: 'Finançable OPCO, FAF, FIF-PL via partenaire Eloqone',
      price: '1 490 € TTC (Prise en charge selon statut)',
      desc: 'Professionnalisez votre présence digitale : apprenez à concevoir une charte graphique avec Canva, monter des vidéos CapCut percutantes et automatiser votre prospection sur LinkedIn et Meta.',
      points: [
        'Ligne éditoriale, personal branding et calendrier de contenu régulier',
        'Création visuelle pro sur Canva et montages vidéo CapCut',
        'Prospection ciblée et acquisition de prospects sans budget pub',
        'Cas pratiques guidés, quiz de validation et plan d’action trimestriel'
      ],
      whatsappMsg: 'Bonjour Mélissa, je souhaite candidater pour la formation Réseaux Sociaux RS7351.'
    },
    {
      id: 'fi-top',
      track: 'top',
      pkgKey: 'fi-top',
      image: '/card-top.jpg',
      instructor: 'Mélissa JENNADI',
      instructorPhoto: '/team-melyssa.png',
      instructorRole: 'Présidente & Formatrice TOP®',
      badge: 'Méthode Officielle PERRAULT-PIERRE • Reconnue',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      title: 'Formation Initiale aux TOP® (FITOP 21h)',
      duration: '21 heures réparties (3 journées ou modules)',
      modality: 'Présentiel à Ollioules (Var) ou visio-conférence interactive',
      funding: 'Prise en charge OPCO / Plan de formation entreprise / FIFPL',
      price: '890 € TTC (Éligible prise en charge OPCO/FAF)',
      desc: 'La méthode de référence issue de l’Armée de l’Air et du sport de haut niveau : boîtes à outils de respiration, relaxation somatique et imagerie mentale pour prévenir le burn-out et booster l’endurance cognitive.',
      points: [
        'Respiration relaxante, régulatrice et dynamisante',
        'Relaxation Psycho-Musculaire (RMP) et récupération flash',
        'Imagerie mentale, Répétition Mentale et Pré-activation',
        'Remise du livret technique complet de la méthode TOP®'
      ],
      whatsappMsg: 'Bonjour Mélissa, je souhaite m’inscrire à la formation FITOP 21h.'
    },
    {
      id: 'fb-top',
      track: 'top',
      pkgKey: 'acompte',
      image: '/hero-workshop.jpg',
      instructor: 'Mélissa JENNADI',
      instructorPhoto: '/team-melyssa.png',
      instructorRole: 'Formatrice TOP® Certifiée',
      badge: 'Module Découverte Express • 1 Journée',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      title: 'Formation Flash TOP (FB-TOP 7h)',
      duration: '7 heures intensives (1 journée)',
      modality: 'Présentiel à Ollioules (Var) ou distanciel',
      funding: 'Finançable OPCO, FIFPL ou financement individuel',
      price: '390 € TTC (Prise en charge OPCO possible)',
      desc: 'Idéal pour une première initiation opérationnelle : apprenez à calmer le rythme cardiaque sous pression, retrouver un focus laser en réunion et vous régénérer lors de courtes pauses.',
      points: [
        'Sensibilisation aux mécanismes neurophysiologiques du stress',
        'Protocoles de respiration anti-panique et anti-fatigue',
        'Techniques de pause flash pour journées surchargées',
        'Exercices pratiques applicables dès le lendemain'
      ],
      whatsappMsg: 'Bonjour Mélissa, je souhaite participer à la prochaine journée FB-TOP (7h).'
    }
  ];

  const filteredFormations = selectedTrack === 'all' 
    ? formationsList 
    : formationsList.filter(f => f.track === selectedTrack);

  const testimonials = [
    {
      name: "Aurélie B.",
      avatarInitials: "AB",
      avatarColor: "from-amber-500 to-rose-500",
      tag: "Praticienne & Dirigeante • Var (83)",
      role: "Cabinet libéral & Accompagnement",
      course: "Méthode TOP® & Régulation du Stress (FI TOP®)",
      text: "J'ai suivi la formation avec Mélissa et ça a été une expérience humaine et professionnelle remarquable. Toujours présente, douce, à l'écoute et pleine d'énergie positive. Elle transmet les techniques de régulation vagale et de respiration avec passion et simplicité. J'applique ces outils au quotidien avec des résultats immédiats sur ma charge mentale."
    },
    {
      name: "Lucie M.",
      avatarInitials: "LM",
      avatarColor: "from-blue-600 to-cyan-500",
      tag: "Consultante RH & Dirigeante • PACA",
      role: "Cabinet de conseil en recrutement",
      course: "Formation IA Générative (RS6776)",
      text: "Renaud m'a coachée pendant 5 heures en visio directement sur mes propres fichiers de travail. On a construit un assistant sur-mesure qui génère mes synthèses d'entretiens et mes devis en 5 minutes. C'est plus de 8 heures de gagnées chaque semaine sur des tâches administratives."
    },
    {
      name: "Yohan D.",
      avatarInitials: "YD",
      avatarColor: "from-emerald-500 to-teal-600",
      tag: "Artisan Gérant • Région Toulon",
      role: "PME Rénovation & BTP (5 collaborateurs)",
      course: "Formation FI TOP® & Gestion de Crise",
      text: "Les protocoles de Mélissa et Renaud sont d'une efficacité redoutable. Pas de théorie superflue : des exercices de respiration et de récupération flash utilisables entre deux chantiers ou avant un rendez-vous tendu. Toute mon équipe a gagné en sérénité et en concentration."
    }
  ];

  const faqs = [
    {
      q: "Comment fonctionne la prise en charge financière (OPCO, FAF, CPF) ?",
      a: "Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut (collaborateur, indépendant, profession libérale, dirigeant) et restent soumises à l’accord de l’organisme financeur."
    },
    {
      q: "Puis-je régler directement par carte bancaire en 1 fois ou 3 fois ?",
      a: "Oui. Vous pouvez régler par virement bancaire, ou via un lien direct sécurisé Stripe en 1 fois ou 3 fois sans frais, ou engager une demande de prise en charge OPCO/FAF avec notre accompagnement."
    },
    {
      q: "En quoi consistent les 2h à 5h de coaching individuel sur-mesure ?",
      a: "Contrairement aux cours en ligne passifs où vous restez seul devant un écran, nos formations IA et Réseaux Sociaux intègrent des séances individuelles en visio (2h à 5h selon la formule) avec notre consultant expert dédié (Renaud). Vous partagez votre écran et nous construisons ensemble vos assistants, vos prompts et vos automatisations sur vos vrais fichiers."
    },
    {
      q: "Où se déroulent les formations en présentiel ?",
      a: "Nos sessions en présentiel (FITOP, ateliers entreprises) se déroulent à notre espace de formation situé à Ollioules (Var - 83), ainsi qu'en intra-entreprise partout en région PACA et en France métropolitaine."
    }
  ];

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleInlineRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineProcessing(true);
    setTimeout(() => {
      setInlineProcessing(false);
      setInlineTxId('OTOP-' + Math.random().toString(36).substring(2, 9).toUpperCase());
      setInlineSuccess(true);
    }, 1200);
  };

  const openModalWithPlan = (pkgKey: string) => {
    const p = packagePrices[pkgKey] || packagePrices['acompte'];
    setCheckoutPlan(p);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* ── 1. HERO DYNAMIQUE, ACTIF & VISUEL AVEC PHOTOS RÉELLES ── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 overflow-hidden border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Respirez à nouveau. Développez votre activité <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300">sans vous épuiser</span>.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Formations certifiantes en <strong>IA Générative</strong>, <strong>Réseaux Sociaux</strong> et <strong>Méthode TOP®</strong> avec <strong>5h de coaching individuel 1-to-1 inclus</strong> sur vos propres documents.
              </p>

              {/* 4 Trust Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 text-left">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">3 Titres RS</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">France Compétences</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">Finançable</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">OPCO / FAF / FIFPL</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">5h Coaching</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">Individuel 1-to-1 inclus</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
                  <div className="text-xl sm:text-2xl font-black text-blue-400">CB 1x / 3x</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">Sans frais sécurisé</div>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#paiement-carte"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <CreditCard size={17} />
                  <span>S&apos;inscrire &amp; Régler par Carte 💳</span>
                </a>
                <a
                  href="#catalogue"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-bold transition-all cursor-pointer"
                >
                  <span>Explorer les 6 formations ↓</span>
                </a>
              </div>

            </div>

            {/* Right Interactive Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl bg-slate-900 group">
                <div className="h-72 sm:h-96 w-full relative overflow-hidden">
                  <img 
                    src="/hero-ai-workspace.jpg" 
                    alt="Atelier et coaching individuel IA et Digital O'TOP Formation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Sessions Ouvertes • Places Limitées</span>
                  </div>

                  {/* Overlaid Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <img src="/team-renaud.jpg" alt="Renaud" className="w-8 h-8 rounded-full border-2 border-blue-400 object-cover" />
                          <img src="/team-melyssa.png" alt="Mélissa" className="w-8 h-8 rounded-full border-2 border-amber-400 object-cover" />
                        </div>
                        <span className="text-xs font-bold text-white">Mentorat 1-to-1</span>
                      </div>
                      <span className="text-xs font-extrabold text-amber-400">★ 4.9/5 (120+ avis)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      « 5 heures en direct sur vos vrais fichiers pour automatiser vos tâches et démultiplier vos résultats sans coder. »
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 1.1 BANDEAU D'IMPACT EN CHIFFRES CLÉS ── */}
      <section className="py-8 px-4 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">+15h / sem.</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Temps moyen libéré par apprenant</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">100% Finançable</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Dossiers OPCO / FAF instruits</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">1-to-1 Réel</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">5h de visio personnalisée incluse</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-indigo-400">3 Titres RS</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Répertoire Spécifique officiel</div>
          </div>
        </div>
      </section>

      {/* ── 1.2 DANS LES COULISSES DE VOS FORMATIONS (BENTO PHOTOS RÉELLES) ── */}
      <section className="py-16 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              📸 Immersion Concrète
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Dans les Coulisses de vos Formations
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm">
              Des méthodes éprouvées, un encadrement bienveillant et des outils professionnels immédiatement exploitables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-lg">
              <div className="h-44 overflow-hidden relative">
                <img src="/formation-ai-dev.jpg" alt="Atelier IA et automatisation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600/90 text-white">IA &amp; Automatisation</span>
              </div>
              <div className="p-3.5">
                <h4 className="font-bold text-white text-xs mb-1">GPTs &amp; Workflows Métiers</h4>
                <p className="text-[11px] text-slate-400 leading-snug">Création d&apos;assistants sur-mesure connectés à vos logiciels sans coder.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-lg">
              <div className="h-44 overflow-hidden relative">
                <img src="/hero-workshop.jpg" alt="Atelier Méthode TOP gestion du stress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600/90 text-white">Méthode TOP®</span>
              </div>
              <div className="p-3.5">
                <h4 className="font-bold text-white text-xs mb-1">Régulation du Stress</h4>
                <p className="text-[11px] text-slate-400 leading-snug">Techniques de respiration et de récupération flash issues des forces d&apos;élite.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-lg">
              <div className="h-44 overflow-hidden relative">
                <img src="/formation-social-growth.jpg" alt="Production de contenu et réseaux sociaux" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-pink-600/90 text-white">Réseaux Sociaux</span>
              </div>
              <div className="p-3.5">
                <h4 className="font-bold text-white text-xs mb-1">Canva, CapCut &amp; Prospection</h4>
                <p className="text-[11px] text-slate-400 leading-snug">Visuels pro, montages vidéo percutants et acquisition LinkedIn Waalaxy.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-lg">
              <div className="h-44 overflow-hidden relative">
                <img src="/formation-presentiel.png" alt="Centre et institut de formation Ollioules" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-rose-600/90 text-white">Institut Ollioules</span>
              </div>
              <div className="p-3.5">
                <h4 className="font-bold text-white text-xs mb-1">Sessions Présentielles</h4>
                <p className="text-[11px] text-slate-400 leading-snug">Pratique concrète dans notre centre à Ollioules (Var) ou en intra-entreprise.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── 2. LES 2 FONDATEURS & COACHS EN ACTION (MÉLISSA & RENAUD) ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Vos Formateurs Référents
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Une Équipe Humaine, Joignable &amp; Engagée
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Pas d&apos;organisme fantôme. Vos sessions et votre coaching individuel sont directement assurés par Mélissa et Renaud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profil Mélissa */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-xl">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/30 shrink-0 shadow-lg">
                <img 
                  src="/team-melyssa.png" 
                  alt="Mélissa JENNADI" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase">
                  Présidente &amp; Formatrice Référente
                </div>
                <h3 className="text-xl font-bold text-white">Mélissa JENNADI</h3>
                <p className="text-xs text-amber-300 font-semibold">Formatrice certifiée Méthode TOP® &amp; Praticienne Holistique</p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Spécialiste de la régulation du stress, des techniques somatiques et du montage des dossiers de formation (FAF, OPCO, FAFCEA).
                </p>
                <div className="pt-2">
                  <a 
                    href="tel:+33767246825" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    <Phone size={13} />
                    <span>07 67 24 68 25</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Profil Renaud */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left shadow-xl">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-blue-400/30 shrink-0 shadow-lg">
                <img 
                  src="/team-renaud.jpg" 
                  alt="Renaud" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase">
                  Consultant Expert IA &amp; Systèmes d&apos;Information
                </div>
                <h3 className="text-xl font-bold text-white">Renaud</h3>
                <p className="text-xs text-blue-300 font-semibold">Conduite du changement, IA &amp; Optimisation des processus</p>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Accompagne les dirigeants et collaborateurs dans l&apos;adoption concrète des bénéfices de l&apos;IA, la structuration des flux et le perfectionnement des prompts avec coaching personnalisé.
                </p>
                <div className="pt-2">
                  <a 
                    href="tel:+33674797509" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <Phone size={13} />
                    <span>06 74 79 75 09</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. CATALOGUE CLAIR & SÉPARÉ AVEC DURÉES & ACTIONS ── */}
      <section id="catalogue" className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Toutes Nos Formations &amp; Modalités
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Choisissez Votre Parcours
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Filtrez par pôle de compétences et découvrez nos formations certifiantes ou professionnelles.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {tracks.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    selectedTrack === t.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{t.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    selectedTrack === t.id
                      ? 'bg-blue-950 text-blue-200 border border-blue-400/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {t.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Formations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFormations.map(formation => (
              <div
                key={formation.id}
                className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-2xl relative group"
              >
                {/* Real High-Res Cover Image with Overlaid Badges */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                  <img 
                    src={formation.image} 
                    alt={formation.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-start justify-between gap-2 z-10">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-md ${formation.badgeColor}`}>
                      {formation.badge}
                    </span>
                    <span className="text-xs font-black text-emerald-400 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-emerald-500/40 whitespace-nowrap shadow-md">
                      {formation.price}
                    </span>
                  </div>

                  {/* Instructor Chip in Image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 p-1.5 pr-3.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 z-10">
                    <img 
                      src={formation.instructorPhoto} 
                      alt={formation.instructor} 
                      className="w-7 h-7 rounded-full object-cover border border-blue-400"
                    />
                    <span className="text-xs font-bold text-white">
                      {formation.instructor} <span className="text-slate-400 font-normal">• {formation.instructorRole}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {formation.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {formation.desc}
                    </p>

                    <div className="space-y-2 py-3 border-y border-slate-800/80 my-4 text-xs">
                      <div className="flex items-center gap-2 text-amber-400 font-semibold">
                        <Clock size={15} className="shrink-0 text-amber-400" />
                        <span className="text-slate-200"><strong>Durée :</strong> {formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-200">
                        <MapPin size={15} className="shrink-0 text-blue-400" />
                        <span><strong>Format :</strong> {formation.modality}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 font-medium">
                        <Coins size={15} className="shrink-0 text-emerald-400" />
                        <span className="text-slate-200"><strong>Financement :</strong> {formation.funding}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-200 mb-6 font-medium">
                      {formation.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-slate-200 leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setInlineSelectedPackage(formation.pkgKey);
                          const el = document.getElementById('paiement-carte');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="py-3 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <CreditCard size={15} />
                        <span>Payer par Carte 💳</span>
                      </button>

                      <a
                        href={`https://wa.me/33767246825?text=${encodeURIComponent(formation.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <MessageCircle size={15} />
                        <span>Échanger WhatsApp</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => openModalWithPlan(formation.pkgKey)}
                      className="w-full py-2 text-center text-xs text-slate-400 hover:text-white font-medium cursor-pointer"
                    >
                      Détails des options de règlement (1x, 3x, OPCO) →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 4. MODULE D'INSCRIPTION & RÈGLEMENT SÉCURISÉ ── */}
      <section id="paiement-carte" className="py-24 px-4 bg-slate-900/60 border-b border-slate-800 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={13} />
              <span>Inscription &amp; Modalités Officielles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Inscription &amp; Modalités de Règlement
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              Règlement sécurisé Stripe (1x ou 3x sans frais), dossier de prise en charge OPCO/FAF ou facture entreprise.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
            
            {inlineSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Demande Enregistrée avec Succès !
                </h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 font-mono text-sm text-blue-300 font-bold">
                  Référence dossier : {inlineTxId}
                </div>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  {inlineModality === 'stripe' && (
                    <>Votre dossier d&apos;inscription pour <strong>{currentPkg.title}</strong> a été validé. Un lien de paiement officiel sécurisé Stripe vous a été expédié par e-mail / SMS pour régler en {inlineInstallments === '3x' ? '3 fois sans frais' : '1 fois'}.</>
                  )}
                  {inlineModality === 'opco' && (
                    <>Votre demande de dossier OPCO / FAF pour <strong>{currentPkg.title}</strong> a bien été enregistrée. Mélissa et notre partenaire certifié Qualiopi Eloqone préparent votre convention et devis sous 24h ouvrées.</>
                  )}
                  {inlineModality === 'virement' && (
                    <>Votre demande de devis proforma pour <strong>{currentPkg.title}</strong> a été enregistrée. Notre service administratif vous transmet la convention et le RIB sous 24h ouvrées.</>
                  )}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20viens%20d'enregistrer%20mon%20inscription%20(${inlineTxId})%20sur%20le%20site.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>Confirmer à Mélissa sur WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setInlineSuccess(false)}
                    className="px-6 py-3 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer hover:bg-slate-700"
                  >
                    Nouvelle inscription
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInlineRegisterSubmit} className="space-y-6">
                
                {/* 1. Sélection de la formation */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    1. Choisissez votre formation :
                  </label>
                  <select
                    value={inlineSelectedPackage}
                    onChange={(e) => setInlineSelectedPackage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold outline-none focus:border-blue-500"
                  >
                    <option value="acompte">Acompte de Réservation Standard (150 € TTC)</option>
                    <option value="ia-indep">Formation IA Générative RS6776 (1 490 € TTC - Offre spéciale 610 €)</option>
                    <option value="reseaux">Formation Réseaux Sociaux &amp; Social Selling RS7351 (1 490 € TTC)</option>
                    <option value="fi-top">Formation Initiale FITOP® 21h (890 € TTC)</option>
                    <option value="fb-top">Formation Flash TOP FB-TOP 7h (390 € TTC)</option>
                  </select>
                </div>

                {/* 2. Modalités de règlement */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    2. Modalité souhaitée :
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setInlineModality('stripe')}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        inlineModality === 'stripe'
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-bold">💳 Carte / Stripe</span>
                      <span className="block text-xs text-blue-400 mt-1 font-semibold">1x ou 3x sans frais</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInlineModality('opco')}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        inlineModality === 'opco'
                          ? 'bg-amber-600/20 border-amber-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-bold">🏛️ Dossier OPCO / FAF</span>
                      <span className="block text-xs text-amber-400 mt-1 font-semibold">Prise en charge étudiée</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInlineModality('virement')}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        inlineModality === 'virement'
                          ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-bold">📄 Devis Entreprise</span>
                      <span className="block text-xs text-emerald-400 mt-1 font-semibold">Virement / Facture</span>
                    </button>
                  </div>
                </div>

                {/* Sub-choice for Stripe 1x vs 3x */}
                {inlineModality === 'stripe' && (
                  <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-3">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">Échéancier Stripe :</span>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setInlineInstallments('1x')}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold cursor-pointer ${
                          inlineInstallments === '1x'
                            ? 'bg-blue-600 text-white border-blue-400'
                            : 'bg-slate-900 text-slate-300 border-slate-700'
                        }`}
                      >
                        Paiement comptant : {currentPkg.price} €
                      </button>
                      <button
                        type="button"
                        onClick={() => setInlineInstallments('3x')}
                        className={`p-2.5 rounded-xl border text-center text-xs font-bold cursor-pointer ${
                          inlineInstallments === '3x'
                            ? 'bg-blue-600 text-white border-blue-400'
                            : 'bg-slate-900 text-slate-300 border-slate-700'
                        }`}
                      >
                        3 fois sans frais : 3 × {calculatedMonthly} €
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      🔒 Le lien officiel et sécurisé de paiement Stripe vous sera expédié par e-mail et SMS après validation de vos coordonnées.
                    </p>
                  </div>
                )}

                {/* Information for OPCO */}
                {inlineModality === 'opco' && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-2">
                    <p className="font-semibold text-amber-300">
                      Montage et accompagnement du dossier de financement :
                    </p>
                    <p className="text-slate-300 text-[11px]">
                      Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
                    </p>
                  </div>
                )}

                {/* Information for Virement / Devis */}
                {inlineModality === 'virement' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs leading-relaxed">
                    <p className="font-semibold text-emerald-300">Facture proforma avec convention de formation :</p>
                    <p className="text-slate-300 text-[11px]">
                      Votre convention et le RIB de l&apos;organisme vous seront adressés sous 24h ouvrées. Règlement par virement bancaire SEPA.
                    </p>
                  </div>
                )}

                {/* Coordonnées du participant */}
                <div className="space-y-4 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    3. Vos coordonnées professionnelles :
                  </span>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={inlineFullName}
                      onChange={(e) => setInlineFullName(e.target.value)}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Adresse e-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={inlineEmail}
                        onChange={(e) => setInlineEmail(e.target.value)}
                        placeholder="jean.dupont@entreprise.fr"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inlinePhone}
                        onChange={(e) => setInlinePhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Statut professionnel *
                      </label>
                      <select
                        value={inlineStatus}
                        onChange={(e) => setInlineStatus(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none"
                      >
                        <option value="independant">Indépendant / Libéral (FIF-PL / Agefice)</option>
                        <option value="dirigeant">Chef d&apos;entreprise / Dirigeant</option>
                        <option value="salarie">Collaborateur d&apos;entreprise (OPCO)</option>
                        <option value="demandeur">Demandeur d&apos;emploi</option>
                        <option value="autre">Financement individuel personnel</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Entreprise / Raison sociale (optionnel)
                      </label>
                      <input
                        type="text"
                        value={inlineCompany}
                        onChange={(e) => setInlineCompany(e.target.value)}
                        placeholder="Nom de l'entreprise"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={inlineProcessing}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {inlineProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enregistrement de votre demande...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      <span>
                        {inlineModality === 'stripe' && `Valider et générer mon lien Stripe (${inlineInstallments === '3x' ? `3 × ${calculatedMonthly} €` : `${currentPkg.price} €`}) ⚡`}
                        {inlineModality === 'opco' && 'Transmettre ma demande de dossier OPCO / FAF ⚡'}
                        {inlineModality === 'virement' && 'Demander mon devis et convention par virement ⚡'}
                      </span>
                    </>
                  )}
                </button>

                <div className="pt-2 border-t border-slate-800 text-center text-[11px] text-slate-500 leading-relaxed">
                  Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
                </div>

              </form>
            )}

          </div>

        </div>
      </section>


      {/* ── 5. AVIS CLIENTS VÉRIFIÉS ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              Retours Vérifiés
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ce Que Disent Nos Apprenants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-xl"
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
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    &laquo;&nbsp;{t.text}&nbsp;&raquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarColor} text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md`}>
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">✓ Vérifié</span>
                    </div>
                    <div className="text-xs text-amber-400 font-medium">{t.course}</div>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 6. FAQ SANS JARGON ── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-850"
                  >
                    <span className="font-bold text-white text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? <ChevronUp className="text-blue-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 7. FOOTER LÉGAL & CONTACT ── */}
      <footer className="py-12 px-4 bg-black border-t border-slate-900 text-slate-400 text-xs leading-relaxed">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <strong>Ô&apos;TOP FORMATIONS</strong> — Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var) • Mélissa : 07 67 24 68 25 • Renaud : 06 74 79 75 09 • SIRET : 990 443 186 00012
            </div>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <Link href="/formations/ia" className="hover:text-white">Formations IA</Link>
              <Link href="/formations/fi-top" className="hover:text-white">Méthode TOP®</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 border-t border-slate-900 pt-3 text-center sm:text-left">
            Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
          </p>
        </div>
      </footer>

      {/* Modal Checkout Pop-up */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        defaultPlan={checkoutPlan}
      />

      {/* Congratulations Modal */}
      <CongratulationsModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        courseTitle="Diagnostic Personnalisé Ô'TOP Formation (15 min)"
      />

    </div>
  );
}
