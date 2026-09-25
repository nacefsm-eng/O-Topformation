'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
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
  Briefcase,
  Target,
  Workflow,
  Laptop,
  CreditCard,
  Code
} from 'lucide-react';
import CheckoutModal from '@/components/ui/checkout-modal';
import TeamMemberCard from '@/components/ui/team-member-card';

export default function HomePageClient() {
  // Pôle selection state
  const [selectedPole, setSelectedPole] = useState<'all' | 'ia' | 'reseaux' | 'top'>('all');

  // Checkout modal state
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{ title: string; price: number | string; description: string }>({
    title: 'Formation IA Générative pour Indépendants (RS6776)',
    price: 1490,
    description: '16h vidéos + 5h de coaching individuel 1-to-1'
  });

  const handleOpenCheckout = (title: string, price: number | string, description: string) => {
    setCheckoutPlan({ title, price, description });
    setCheckoutOpen(true);
  };

  // Compte à rebours promo RS6776 (31/10/2026)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const targetDate = new Date('2026-10-31T23:59:59').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hero Scroll Animation Ref
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* ─── BANNIÈRE PROMOTIONNELLE C1 : OFFRE SPÉCIALE RS6776 À 600 € ──────── */}
      <aside aria-label="Offre promotionnelle" className="bg-gradient-to-r from-cyan-950 via-blue-900 to-indigo-950 border-b border-cyan-500/30 text-white py-2.5 px-4 sticky top-0 z-50 shadow-lg backdrop-blur-md">
        <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium">
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wide animate-pulse">
              Offre limitée
            </span>
            <span>
              Formation IA Générative (RS6776) à <strong>600 €</strong> <span className="hidden md:inline">(au lieu de 1 490 €) ou 3 × 200 €</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-cyan-300 font-bold bg-slate-950/60 px-3 py-1 rounded-lg border border-cyan-500/20">
              <Clock size={14} className="text-amber-400" />
              <span>Fin le 31/10/2026 :</span>
              <span className="text-white">{timeLeft.days}j</span>
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>

            <button
              onClick={() => handleOpenCheckout('Offre Promo RS6776 (Durée limitée)', 600, '21h de formation certifiante en e-learning + 2h accompagnement expert individuel - Tarif promotionnel')}
              className="px-3.5 py-1 rounded-lg bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-emerald-300 transition-all cursor-pointer whitespace-nowrap shadow"
            >
              En profiter →
            </button>
          </div>
        </div>
      </aside>

      {/* ─── 1. HERO ORIENTÉ RÉSULTAT AVEC 3 PREUVES COURTES ─────────────── */}
      <section ref={heroRef} className="relative pt-12 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950 border-b border-slate-850">
        
        {/* Glow ambient meshes */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-blue-500/15 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-500/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
        
        {/* 3D Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-sm animate-float-slow" style={{ animationDelay: '0s' }} />
          <div className="absolute top-[35%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-400/15 blur-sm animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[20%] left-[30%] w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-sm animate-float-slow" style={{ animationDelay: '4s' }} />
          {/* 3D Sphere */}
          <div className="absolute top-[20%] right-[8%] w-40 h-40 md:w-56 md:h-56 rounded-full opacity-60" 
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(56,189,248,0.4), rgba(37,99,235,0.2) 50%, rgba(2,26,68,0.6) 100%)',
              boxShadow: 'inset -8px -8px 20px rgba(0,0,0,0.4), inset 4px 4px 15px rgba(56,189,248,0.3), 0 0 60px rgba(37,99,235,0.15)',
              animation: 'float-slow 8s ease-in-out infinite',
            }} 
          />
          {/* Smaller accent sphere */}
          <div className="absolute bottom-[25%] right-[25%] w-16 h-16 md:w-24 md:h-24 rounded-full opacity-50" 
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(251,191,36,0.35), rgba(245,158,11,0.15) 50%, rgba(2,26,68,0.5) 100%)',
              boxShadow: 'inset -4px -4px 12px rgba(0,0,0,0.3), inset 2px 2px 8px rgba(251,191,36,0.25), 0 0 30px rgba(245,158,11,0.1)',
              animation: 'float-slow 6s ease-in-out infinite',
              animationDelay: '3s',
            }} 
          />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-center max-w-4xl mx-auto"
          >
            
            {/* Top Verified Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-blue-900/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Formations Professionnelles IA &amp; Digital</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Indépendants &amp; PME</span>
            </motion.div>

            {/* Main Headline H1 Concret & Orienté Résultat */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white"
            >
              Formez-vous à l&apos;IA pour gagner du temps, mieux travailler et développer votre activité.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal"
            >
              Des parcours pratiques pour indépendants, dirigeants et équipes, avec un accompagnement humain par nos experts.
            </motion.p>

            {/* 3 Preuves Courtes Immédiates */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 text-left"
            >
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Formations préparant à <strong>3 certifications RS</strong></span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium"><strong>2 h d&apos;accompagnement avec un expert</strong> incluses</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Financement étudié avec <strong>notre partenaire Eloq-One</strong></span>
              </div>
            </motion.div>

            {/* Action Buttons Clairs & Hiérarchisés */}
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
                <span>Réserver mon diagnostic gratuit <span className="whitespace-nowrap">15 min ⚡</span></span>
              </a>

              <a
                href="#parcours"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
              >
                <span>Découvrir les formations →</span>
              </a>

              <Link
                href="/brochure"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-blue-950/60 border border-blue-500/30 hover:border-blue-400 text-cyan-300 hover:text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-blue-900/50"
              >
                <span>📄 Plaquette &amp; Brochure</span>
              </Link>
            </motion.div>

          </motion.div>

          {/* Bento Gallery Visuelle */}
          <motion.div 
            style={{ y: cardTranslateY }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4"
          >
            {/* Main Featured Image Card */}
            <div className="md:col-span-8 relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src="/hero-ai-workspace.jpg" 
                alt="Environnement de travail IA et automatisation pour entreprise" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold w-fit mb-2">
                    ⚡ Vos cas d&apos;usage réels
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Assistants IA sur mesure
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    ChatGPT, Claude : créez vos assistants et sécurisez vos données professionnelles.
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-emerald-400 font-extrabold text-lg">Accompagnement individuel</span>
                  <div className="text-slate-400 text-xs">2 h incluses</div>
                </div>
              </div>
            </div>

            {/* Side Stacked Cards */}
            <div className="md:col-span-4 flex flex-col gap-4">
              {/* Card 1: Social Media Growth */}
              <div className="relative h-[180px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
                <img 
                  src="/formation-social-growth.jpg" 
                  alt="Formation communication et réseaux sociaux" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">RS7351 • 21 h dont 2 h d&apos;accompagnement</span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">Communication digitale &amp; réseaux sociaux</h3>
                  <p className="text-xs text-slate-300">Canva, CapCut, Meta Ads, Waalaxy</p>
                </div>
              </div>

              {/* Card 2: AI Business Integration */}
              <div className="relative h-[180px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
                <img 
                  src="/formation-ai-dev.jpg" 
                  alt="Formation IA pour PME" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">RS7344 • 21 h dont 2 h d&apos;accompagnement</span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">Développer son activité avec l&apos;IA</h3>
                  <p className="text-xs text-slate-300">Méthode STEP &amp; conformité AI Act</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ─── 2. POUR QUI / PROBLÈMES RÉSOLUS (SECTION D'EMPATHIE B2B) ─────── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              À qui s&apos;adressent nos parcours ?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Des formations pensées pour résoudre vos contraintes réelles
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Pas de théorie d&apos;ingénieur : nous transformons l&apos;IA en un gain d&apos;efficacité immédiat pour votre quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Profil 1 : Dirigeants TPE / PME */}
            <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 min-h-[28px] flex items-center">
                  Dirigeants de TPE &amp; PME
                </h3>
                <p className="text-xs text-blue-300 font-semibold mb-3 min-h-[38px] flex items-center">
                  « Je manque de bras et mes équipes sont débordées »
                </p>
                <p className="text-sm leading-relaxed mb-5 min-h-[88px]" style={{ color: '#e2e8f0' }}>
                  Automatisez le traitement des devis, les relances factures et la synthèse des réunions. Intégrez l&apos;IA dans vos équipes en maîtrisant les risques de fuite de données (RGPD, AI Act).
                </p>
              </div>
              <ul className="space-y-2 text-xs border-t border-slate-800/80 pt-4 mt-auto" style={{ color: '#cbd5e1' }}>
                <li className="flex items-center gap-2">✓ Éligible plans de compétences OPCO</li>
                <li className="flex items-center gap-2">✓ 5 à 10 h gagnées par semaine, selon votre activité</li>
              </ul>
            </div>

            {/* Profil 2 : Indépendants & Professionnels Libéraux */}
            <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 min-h-[28px] flex items-center">
                  Indépendants &amp; Consultants
                </h3>
                <p className="text-xs text-indigo-300 font-semibold mb-3 min-h-[38px] flex items-center">
                  « Je passe trop d&apos;heures sur des tâches non facturables »
                </p>
                <p className="text-sm leading-relaxed mb-5 min-h-[88px]" style={{ color: '#e2e8f0' }}>
                  Créez vos assistants GPT sur mesure pour rédiger vos propositions, générer vos posts et préparer vos livrables en quelques minutes.
                </p>
              </div>
              <ul className="space-y-2 text-xs border-t border-slate-800/80 pt-4 mt-auto" style={{ color: '#cbd5e1' }}>
                <li className="flex items-center gap-2">✓ 2 h d&apos;accompagnement avec un expert incluses</li>
                <li className="flex items-center gap-2">✓ Gain de 5 à 10 h par semaine</li>
              </ul>
            </div>

            {/* Profil 3 : Équipes Marketing & Commerciales */}
            <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Workflow size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 min-h-[28px] flex items-center">
                  Équipes &amp; Collaborateurs
                </h3>
                <p className="text-xs text-cyan-300 font-semibold mb-3 min-h-[38px] flex items-center">
                  « Nous voulons monter en compétences sur les outils de pointe »
                </p>
                <p className="text-sm leading-relaxed mb-5 min-h-[88px]" style={{ color: '#e2e8f0' }}>
                  Maîtrisez Canva, CapCut, Waalaxy et les outils de communication pour accélérer la production sans dépendre d&apos;une agence externe.
                </p>
              </div>
              <ul className="space-y-2 text-xs border-t border-slate-800/80 pt-4 mt-auto" style={{ color: '#cbd5e1' }}>
                <li className="flex items-center gap-2">✓ Formations préparant aux certifications RS</li>
                <li className="flex items-center gap-2">✓ Pratique directe sur vos outils</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 3. LES 3 PÔLES & PARCOURS EN CARTES DISTINCTES ───────────── */}
      <section id="parcours" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-850 relative">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              Catalogue Principal &amp; Inscriptions
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Nos Pôles de Formation Professionnelle
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Une formule condensée et actionnable : vidéos disponibles 24/7 combinées à un coaching individuel humain sur vos propres fichiers, ou financement intégral selon vos droits.
            </p>

            {/* Pôle Switcher / Filter Tabs élargis & responsives */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
              <button
                type="button"
                onClick={() => setSelectedPole('all')}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer shadow-sm ${
                  selectedPole === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-blue-400'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                ✨ Tous les Pôles (4)
              </button>
              <button
                type="button"
                onClick={() => setSelectedPole('ia')}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                  selectedPole === 'ia'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 scale-105 border border-cyan-400'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>🤖 Pôle 1 : IA &amp; Automatisation</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPole('reseaux')}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                  selectedPole === 'reseaux'
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30 scale-105 border border-pink-400'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>📱 Pôle 2 : Réseaux Sociaux</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPole('top')}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                  selectedPole === 'top'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105 border border-amber-400'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>🧘 Pôle 3 : Méthode TOP®</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Carte Parcours 1 : IA Générative RS6776 */}
            {(selectedPole === 'all' || selectedPole === 'ia') && (
              <div className="h-full rounded-3xl bg-slate-900/90 border-2 border-cyan-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-400 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                      🤖 Pôle IA • RS6776
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">100 % en ligne • Finançable OPCO / FAF</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 min-h-[58px] flex items-center">
                    IA générative : création de contenus rédactionnels et visuels responsables
                  </h3>

                  <p className="text-xs text-cyan-400 font-semibold mb-3 min-h-[34px] flex items-center">
                    ChatGPT, Claude, assistants sur mesure &amp; contenus
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[72px]">
                    Le parcours de référence pour automatiser vos tâches quotidiennes, concevoir des assistants personnalisés et gagner 5 à 10 h par semaine selon votre activité.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6 min-h-[148px] flex flex-col justify-center bg-slate-950/40 rounded-xl px-3.5">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-cyan-400 shrink-0" />
                      <span><strong>Durée :</strong> 21 h, dont 2 h d&apos;accompagnement avec un expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Évaluation :</strong> quiz et cas pratiques. Certification RS6776 sur demande (rapport écrit + soutenance orale devant jury).</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Tarif :</strong> 600 € au lieu de 1 490 €, jusqu&apos;au 31 octobre 2026 • Finançable OPCO / FAF</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-400 mb-6 min-h-[96px]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Création de votre assistant GPT personnalisé, sans exposer vos données sensibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Génération accélérée de propositions commerciales, devis et synthèses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Sécurité des données confidentielles, prompt engineering &amp; conformité AI Act</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 line-through">1 490 €</span>
                    <button
                      type="button"
                      onClick={() => handleOpenCheckout('Offre Promo RS6776 (Durée limitée)', 600, '21h de formation certifiante en e-learning + 2h accompagnement expert individuel - Tarif promotionnel')}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CreditCard size={14} />
                      <span>Profiter de l&apos;offre à 600 € (ou 3 × 200 €)</span>
                    </button>
                  </div>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Dossier Financement OPCO / FAF <span className="whitespace-nowrap">15 min ⚡</span>
                  </a>
                  <Link
                    href="/formations/ia"
                    className="w-full block py-2 text-center text-slate-400 hover:text-white text-xs font-medium transition-all"
                  >
                    Consulter le programme complet →
                  </Link>
                </div>
              </div>
            )}

            {/* Carte Parcours 2 : IA Entreprise RS7344 */}
            {(selectedPole === 'all' || selectedPole === 'ia') && (
              <div className="h-full rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-indigo-400 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                      🚀 Pôle IA • RS7344
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">100 % en ligne (intra possible) • Finançable OPCO / FAF</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 min-h-[58px] flex items-center">
                    Développer son activité avec l&apos;IA
                  </h3>

                  <p className="text-xs text-indigo-400 font-semibold mb-3 min-h-[34px] flex items-center">
                    Méthode STEP, conduite du changement &amp; AI Act
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[72px]">
                    Pour dirigeants et équipes : intégrez l&apos;IA dans vos processus (administratif, marketing, relation client), pilotez le changement et sécurisez vos données.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6 min-h-[148px] flex flex-col justify-center bg-slate-950/40 rounded-xl px-3.5">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-indigo-400 shrink-0" />
                      <span><strong>Durée :</strong> 21 h, dont 2 h d&apos;accompagnement avec un expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Évaluation :</strong> quiz et cas pratiques. Certification RS7344 sur demande (dossier à J+15 et soutenance orale de 25 min à J+21).</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Tarif :</strong> 1 490 € • Finançable OPCO / FAF</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-400 mb-6 min-h-[96px]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Cartographie complète des flux chronophages d&apos;équipe (méthode STEP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Intégration de l&apos;IA dans vos processus : administratif, marketing, relation client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Mise en place de la charte éthique IA &amp; conformité RGPD / AI Act européen</span>
                    </li>
                    <li className="flex items-start gap-2 text-amber-300 font-medium">
                      <span>➕ Option équipes : ateliers Méthode TOP® pour accompagner le changement (sur devis)</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Développer son Activité avec l\'IA (RS7344)', 1490, '21 h dont 2 h d\'accompagnement expert individuel et cas pratiques réels')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne (1 490 €) 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Demander un devis OPCO Entreprise <span className="whitespace-nowrap">15 min ⚡</span>
                  </a>
                  <Link
                    href="/formations/ia"
                    className="w-full block py-2 text-center text-slate-400 hover:text-white text-xs font-medium transition-all"
                  >
                    Consulter le programme complet →
                  </Link>
                </div>
              </div>
            )}

            {/* Carte Parcours 3 : Réseaux Sociaux & IA RS7351 */}
            {(selectedPole === 'all' || selectedPole === 'reseaux') && (
              <div className="h-full rounded-3xl bg-slate-900/90 border-2 border-pink-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-pink-400 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                      📱 Pôle Réseaux sociaux • RS7351
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">100 % à distance • Finançable OPCO / FAF</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 min-h-[58px] flex items-center">
                    Gérer la communication digitale d&apos;une entreprise via les réseaux sociaux
                  </h3>

                  <p className="text-xs text-pink-400 font-semibold mb-3 min-h-[34px] flex items-center">
                    Canva, CapCut, Meta Ads &amp; prospection LinkedIn (Waalaxy)
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[72px]">
                    Professionnalisez votre visibilité : créez des visuels percutants avec Canva, produisez des vidéos courtes engageantes et structurez vos prises de contacts B2B.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6 min-h-[148px] flex flex-col justify-center bg-slate-950/40 rounded-xl px-3.5">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-pink-400 shrink-0" />
                      <span><strong>Durée :</strong> 21 h, dont 2 h d&apos;accompagnement avec un expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Évaluation :</strong> quiz et cas pratiques. Certification RS7351 sur demande : mise en situation orale d&apos;environ 1 h devant 2 jurys professionnels (14/20 min).</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Tarif :</strong> 1 490 € • Finançable OPCO / FAF</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-400 mb-6 min-h-[96px]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Stratégie éditoriale et planning de publications régulier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Création graphique avec Canva, vidéos CapCut (Reels / TikTok) et Meta Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Prospection B2B ciblée et structurée sur LinkedIn via Waalaxy</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Gérer la communication digitale d\'une entreprise via les réseaux sociaux (RS7351)', 1490, '21 h dont 2 h d\'accompagnement expert individuel et cas pratiques réels')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-pink-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne (1 490 €) 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Dossier Financement OPCO / FAF <span className="whitespace-nowrap">15 min ⚡</span>
                  </a>
                  <Link
                    href="/formations/reseaux-sociaux"
                    className="w-full block py-2 text-center text-slate-400 hover:text-white text-xs font-medium transition-all"
                  >
                    Consulter le programme complet →
                  </Link>
                </div>
              </div>
            )}

            {/* Carte Parcours 4 : Méthode TOP® & Clarté Mentale (FITOP 21h) */}
            {(selectedPole === 'all' || selectedPole === 'top') && (
              <div className="h-full rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-amber-400 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 min-h-[28px]">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                      🧘 Méthode TOP® &amp; IA • FI-TOP®
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Présentiel ou Visio • Finançable OPCO / FAF</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 min-h-[58px] flex items-center">
                    Formation initiale aux Techniques d&apos;Optimisation du Potentiel (FI-TOP®)
                  </h3>

                  <p className="text-xs text-amber-400 font-semibold mb-3 min-h-[34px] flex items-center">
                    Clarté mentale et adaptation au changement à l&apos;ère de l&apos;IA
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 min-h-[72px]">
                    Face au flux d&apos;informations et à l&apos;accélération technologique, apprenez à réguler votre stress en temps réel, préserver votre sommeil et optimiser votre lucidité décisionnelle.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6 min-h-[148px] flex flex-col justify-center bg-slate-950/40 rounded-xl px-3.5">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Durée :</strong> 21 h réparties (3 jours intensifs en présentiel ou visio)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Validation :</strong> exercices pratiques guidés et attestation officielle de fin de formation.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Tarif :</strong> 890 € • Finançable OPCO / FAF / Entreprise</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-400 mb-6 min-h-[96px]">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Boîte à outils complète : respiration relaxante et dynamisante sur le vif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Pré-activation mentale, imagerie motrice &amp; Récupération Modulée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Livret technique officiel remis à chaque stagiaire &amp; plan d&apos;action personnalisé</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Formation Initiale FITOP® (21h)', 890, 'Cursus officiel 21h Méthode TOP® avec livret technique et suivi personnalisé')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Demander prise en charge entreprise / OPCO <span className="whitespace-nowrap">15 min ⚡</span>
                  </a>
                  <Link
                    href="/formations/fi-top"
                    className="w-full block py-2 text-center text-slate-400 hover:text-white text-xs font-medium transition-all"
                  >
                    Consulter le programme FITOP® →
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>



      {/* ─── 5. TABLEAU COMPARATIF DES 4 PARCOURS ────────────────────────── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-850">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Comparatif Rapide
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tableau Comparatif des Parcours
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Identifiez en quelques secondes le parcours adapté à vos objectifs et à votre profil.
            </p>
          </div>

          {/* Table Responsive */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="p-4 sm:p-5">Parcours</th>
                  <th className="p-4 sm:p-5">Pour qui</th>
                  <th className="p-4 sm:p-5">Durée</th>
                  <th className="p-4 sm:p-5">Certification</th>
                  <th className="p-4 sm:p-5">Financement</th>
                  <th className="p-4 sm:p-5">Résultat Attendu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-cyan-400 block text-xs uppercase mb-1">Pôle IA</span>
                    IA générative : création de contenus rédactionnels et visuels responsables
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Indépendants, freelances, consultants, dirigeants de TPE
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-cyan-300 text-xs sm:text-sm whitespace-nowrap">
                    21 h, dont 2 h d&apos;accompagnement<br />+ quiz &amp; cas pratiques
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold whitespace-nowrap">
                      Prépare à RS6776
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    600 € jusqu&apos;au 31/10/2026 (au lieu de 1 490 €)<br />OPCO / FAF
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Assistant IA sur mesure, prompts métier et gain de 5 à 10 h par semaine selon activité
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-indigo-400 block text-xs uppercase mb-1">Pôle IA &amp; Entreprise</span>
                    Développer son activité avec l&apos;IA
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Dirigeants de TPE/PME, managers et collaborateurs
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-indigo-300 text-xs sm:text-sm whitespace-nowrap">
                    21 h, dont 2 h d&apos;accompagnement<br />+ quiz &amp; cas pratiques
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold whitespace-nowrap">
                      Prépare à RS7344
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    1 490 €<br />Finançable OPCO / FAF
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Feuille de route IA, processus optimisés, charte éthique et conformité AI Act
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-pink-400 block text-xs uppercase mb-1">Pôle Réseaux Sociaux</span>
                    Gérer la communication digitale d&apos;une entreprise via les réseaux sociaux
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Créateurs, indépendants, équipes marketing gérant leur acquisition
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-pink-300 text-xs sm:text-sm whitespace-nowrap">
                    21 h, dont 2 h d&apos;accompagnement<br />+ quiz &amp; cas pratiques
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-300 font-bold whitespace-nowrap">
                      Prépare à RS7351
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    1 490 €<br />Finançable OPCO / FAF
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Visuels Canva, vidéos CapCut, prospection LinkedIn et Meta Ads
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-amber-400 block text-xs uppercase mb-1">Pôle Méthode TOP®</span>
                    Formation initiale aux Techniques d&apos;Optimisation du Potentiel (FI-TOP®)
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Dirigeants, managers, collaborateurs sous forte charge mentale
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-amber-300 text-xs sm:text-sm whitespace-nowrap">
                    21 h (3 jours)<br />exercices guidés
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold whitespace-nowrap">
                      Attestation de fin de formation
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    890 €<br />Finançable OPCO / FAF / Entreprise
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Régulation du stress en direct, dynamisation de l&apos;énergie, récupération et focus mental
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── PACKS COUPLAGE & MODULES D'ACCOMPAGNEMENT EXPERT ─── */}
          <div className="mt-16 pt-12 border-t border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Offres de Couplage &amp; Accompagnement
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Packs Duo, Trio &amp; Formules Entreprise
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tarifs officiels dégressifs avec accompagnement expert et certification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Pack Duo */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-blue-500/50 transition-all">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">Pack Économique</span>
                  <h4 className="text-xl font-bold text-white mt-2">Pack Duo</h4>
                  <p className="text-xs text-slate-400 mt-1">2 formations certifiantes au choix parmi RS6776, RS7344 ou RS7351.</p>
                  <div className="my-4">
                    <span className="text-xs text-slate-500 line-through">2 980 €</span>
                    <div className="text-3xl font-black text-white">2 490 € <span className="text-xs text-emerald-400 font-normal">(-490 €)</span></div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ 2 formations complètes (42 h, dont 4 h d&apos;accompagnement)</li>
                    <li className="flex items-center gap-2">✓ Préparation à 2 certifications RS</li>
                    <li className="flex items-center gap-2">✓ 2 h d&apos;accompagnement par formation</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('Pack Duo — 2 Formations au Choix', 2490, 'Cursus combiné 2 formations certifiantes au choix avec accompagnement expert')}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CreditCard size={15} />
                  <span>Réserver le Pack Duo (2 490 €)</span>
                </button>
              </div>

              {/* Pack Trio */}
              <div className="p-6 rounded-3xl bg-slate-900 border-2 border-indigo-500/50 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl">
                  Recommandé
                </div>
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold">Pack Intégral</span>
                  <h4 className="text-xl font-bold text-white mt-2">Pack Trio</h4>
                  <p className="text-xs text-slate-400 mt-1">Les 3 formations : IA Générative + Workflows + Réseaux Sociaux &amp; Prospection.</p>
                  <div className="my-4">
                    <span className="text-xs text-slate-500 line-through">4 470 €</span>
                    <div className="text-3xl font-black text-emerald-400">3 390 € <span className="text-xs text-emerald-400 font-normal">(-1 080 €)</span></div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ 3 formations complètes (63 h, dont 6 h d&apos;accompagnement)</li>
                    <li className="flex items-center gap-2">✓ Préparation à 3 certifications RS</li>
                    <li className="flex items-center gap-2">✓ 2 h d&apos;accompagnement par formation</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('Pack Trio — Les 3 Formations Complètes', 3390, 'Cursus intégral 3 formations certifiantes (RS6776 + RS7344 + RS7351)')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CreditCard size={15} />
                  <span>Réserver le Pack Trio (3 390 €)</span>
                </button>
              </div>

              {/* Formule Entreprise OPCO */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition-all">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">B2B &amp; Salariés</span>
                  <h4 className="text-xl font-bold text-white mt-2">Formule Entreprise</h4>
                  <p className="text-xs text-slate-400 mt-1">40 h au total : l&apos;une de nos formations (21 h) complétée par des heures d&apos;accompagnement avec un expert. Une durée adaptée à une prise en charge par votre OPCO.</p>
                  <div className="my-4">
                    <div className="text-3xl font-black text-white">3 200 € <span className="text-xs text-slate-400 font-normal"></span></div>
                    <span className="text-xs text-emerald-400">Prise en charge OPCO possible, sous réserve d&apos;accord</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ 40 h de parcours adapté aux équipes</li>
                    <li className="flex items-center gap-2">✓ Plan de développement des compétences</li>
                    <li className="flex items-center gap-2">✓ Montage du dossier avec Eloq-One (certifié Qualiopi)</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('Formule Entreprise (40h OPCO)', 3200, '40h au total (e-learning + accompagnement d’équipe) - Éligible financement OPCO')}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={15} className="text-amber-400" />
                  <span>Dossier OPCO Entreprise (3 200 €)</span>
                </button>
              </div>
            </div>

            {/* Coaching Additionnel */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-white">Besoin d&apos;aller plus loin ?</h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Accompagnement sur mesure, vendu séparément, notamment pour le déploiement de l&apos;IA et sa mise en œuvre sur vos cas d&apos;usage : <strong>1 h : 120 €</strong> • Forfait 5 h : <strong>550 €</strong> (110 €/h) • Forfait 10 h : <strong>1 000 €</strong> (100 €/h)
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('Coaching Expert (Forfait 5h)', 550, '5h d’accompagnement individuel personnalisé avec un expert')}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Forfait 5h (550 €)
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('Coaching Expert (Forfait 10h)', 1000, '10h d’accompagnement individuel personnalisé avec un expert')}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Forfait 10h (1 000 €)
                </button>
              </div>
            </div>

          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            * Note légale : Prise en charge étudiée selon votre statut par le biais de notre organisme partenaire porteur certifié Qualiopi.
          </p>

        </div>
      </section>


      {/* ─── 6. CADRE QUALITÉ & PROCESSUS DE FINANCEMENT EN 3 ÉTAPES ──────── */}
      <section className="py-20 px-4 bg-slate-900/40 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              Transparence &amp; Financement
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Comment se déroule votre financement ?
            </h2>
            <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 max-w-2xl mx-auto text-xs sm:text-sm text-blue-200 leading-relaxed text-center">
              Ô&apos;TOP Formation intervient avec son partenaire Eloq-One, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l&apos;accord de l&apos;organisme financeur.
            </div>
          </div>

          {/* 3 Étapes du Financement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-white text-base mb-2">Diagnostic Offert (15 min)</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Échange individuel avec Mélissa ou Renaud pour cadrer votre projet, identifier votre OPCO/FAF et calculer vos droits disponibles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-white text-base mb-2">Montage avec Eloq-One</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Notre partenaire porteur prépare la convention normée, le programme et le devis pour soumission à votre financeur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-white text-base mb-2">Démarrage &amp; accompagnement</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dès l&apos;accord de prise en charge, accès immédiat à la plateforme et planification de vos 2 h d&apos;accompagnement avec un expert.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/financement"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>En savoir plus sur la démarche qualité, les financements et l&apos;accessibilité handicap</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>


      {/* ─── 7. PREUVE SOCIALE & ÉTUDES DE CAS ─────────────────────── */}
      <ClientFeedback limit={3} />

      {/* ─── 8. ÉQUIPE & EXPERTS RÉFÉRENTS ──────────────────────────────── */}
      <section id="equipe" className="py-20 px-4 bg-slate-900/30 border-t border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Users size={14} />
              Pôle Formation &amp; Direction
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              L&apos;Équipe des Experts &amp; Formateurs
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Pas d&apos;organisme anonyme. Vos sessions et votre accompagnement sont assurés directement par nos formateurs référents.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Mélissa */}
            <TeamMemberCard
              position="left"
              roleTitle="Fondatrice & Formatrice Certifiée TOP®"
              firstName="Mélissa"
              lastName="JENNADI"
              imageUrl="/team-melyssa.png"
              description="Rigueur scientifique, sens aigu de la transmission et dévouement absolu pour faire grandir vos équipes et pérenniser votre activité."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 2. Renaud */}
            <TeamMemberCard
              position="right"
              roleTitle="Consultant Expert IA & Systèmes d'Information"
              firstName="Renaud"
              lastName=""
              imageUrl="/team-renaud.jpg"
              description="Accompagnement des dirigeants et collaborateurs dans la conduite du changement, l'adoption concrète des bénéfices de l'IA et l'optimisation des processus opérationnels."
              onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 3. Med Aly (Daly) Garma */}
            <TeamMemberCard
              position="left"
              roleTitle="Expert Cybersécurité & Résilience IA"
              firstName="Med Aly"
              lastName="GARMA"
              imageUrl="/team-med-aly.jpg"
              description="Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des environnements d'intelligence artificielle."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Med%20Aly%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20cybers%C3%A9curit%C3%A9.', '_blank')}
            />

            {/* 4. Régis */}
            <TeamMemberCard
              position="right"
              roleTitle="Formateur certifié Méthode TOP® & Stratégie Opérationnelle"
              firstName="Régis"
              lastName="Domergue"
              imageUrl="/team-regis.png"
              description="Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique pour sécuriser chaque étape de votre transition."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />
          </div>

          {/* ── Séparation distincte : Équipe Technique & Digitale (Concepteurs du Site) ── */}
          <div className="mt-20 pt-16 border-t border-slate-800/80">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Code size={14} />
                Pôle Ingénierie &amp; Croissance Digitale
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                L&apos;Équipe Technique &amp; Web
              </h3>
              <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
                Les concepteurs de la plateforme web Ô&apos;TOP Formation et de notre écosystème numérique.
              </p>
            </div>

            <div className="space-y-12">
              {/* 5. Hugo - Lead Tech Web */}
              <TeamMemberCard
                position="left"
                roleTitle="Lead Développeur & Architecte Web"
                firstName="Hugo"
                lastName=""
                imageUrl="/team-nacef.jpg"
                description="Architecte technique & concepteur de la plateforme web Ô'TOP Formation. Expert en ingénierie logicielle full-stack, optimisation des performances, automatisation et expérience utilisateur moderne."
                onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Hugo%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20le%20site%20web.', '_blank')}
              />

              {/* 6. Henri - Community Manager */}
              <TeamMemberCard
                position="right"
                roleTitle="Community Manager & Social Media"
                firstName="Henri"
                lastName=""
                imageUrl="/team-hamouda.jpg"
                description="Stratège de la communication et des réseaux sociaux. En charge de l'engagement des apprenants, de l'animation de nos communautés d'alumni et du rayonnement digital de la marque Ô'TOP."
                onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Henri%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20communication.', '_blank')}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── 9. CTA CONVERSION IMMÉDIATE (DIRIGEANTS PRESSÉS) ───────────── */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-t border-b border-blue-500/20 relative">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
              ⚡ Action Immédiate
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Prêt(e) à évaluer vos droits OPCO / FAF et vos gains de productivité ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              15 minutes au téléphone avec Mélissa pour vérifier vos prises en charge et cibler vos automatisations prioritaires.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm text-center transition-all shadow-xl shadow-blue-600/30 whitespace-nowrap"
            >
              Réserver mon diagnostic <span className="whitespace-nowrap">15 min ⚡</span>
            </a>
            <a
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20un%20diagnostic%20rapide%20sur%20mes%20droits%20de%20formation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm text-center flex items-center justify-center gap-2 transition-all whitespace-nowrap"
            >
              <span>WhatsApp Direct 💬</span>
            </a>
          </div>
        </div>
      </section>


      {/* ─── 9. BLOC C2 & C3 : POURQUOI LA MÉTHODE TOP® DANS UN PROJET IA ? & OFFRE IA & HUMAIN ──────── */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-950/60 via-slate-900 to-amber-950/40 border-b border-slate-800">
        <div className="container mx-auto max-w-6xl space-y-8">
          
          {/* Bloc C2 : Pourquoi la Méthode TOP dans un projet IA ? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <span>⚡</span> La Dimension Humaine de la Transition IA
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Pourquoi la Méthode TOP® dans un projet IA ?
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                L&apos;intégration de l&apos;Intelligence Artificielle en entreprise n&apos;est pas seulement un défi technique, c&apos;est avant tout une <strong>conduite du changement humain</strong>. L&apos;irruption de nouveaux outils bouscule les repères, suscite des craintes de déclassement et engendre une charge cognitive accrue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-amber-300 text-sm mb-1">Réguler le stress du changement</div>
                  <div className="text-xs text-slate-400">Désamorcer les résistances et peurs liées à l&apos;automatisation.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-cyan-300 text-sm mb-1">Préserver la lucidité décisionnelle</div>
                  <div className="text-xs text-slate-400">Techniques flash de récupération mentale sous surcharge informationnelle.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-emerald-300 text-sm mb-1">Engagement &amp; adhésion durable</div>
                  <div className="text-xs text-slate-400">Concilier performance technologique et bien-être des collaborateurs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc C3 : Offre Entreprise IA & Humain */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <span>🏢</span> Offre Entreprise Exclusive
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Offre « IA &amp; Humain » — Sur Devis
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Le parcours hybride sur mesure associant la formation pratique aux outils IA (gains de productivité, sécurisation des flux) et les ateliers Méthode TOP® (prévention des RPS, régulation de la charge mentale et adhésion des équipes).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/contact?subject=Offre_IA_et_Humain"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm text-center transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                Demander un devis sur mesure →
              </Link>
              <Link
                href="/methode"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm text-center border border-slate-700 transition-all whitespace-nowrap"
              >
                Découvrir la Méthode TOP®
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ─── 10. FAQ COURTE & ESSENTIELLE ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              Questions &amp; Réponses
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Questions Fréquentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Faut-il des compétences informatiques pour suivre ces formations ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Non, aucun prérequis informatique n&apos;est nécessaire. Nos parcours sont conçus pour des professionnels de terrain, artisans, indépendants et dirigeants. Chaque démarche est expliquée en langage clair avec des manipulations guidées écran partagé.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Comment s&apos;organise l&apos;accompagnement ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Chaque formation inclut 2 h d&apos;accompagnement avec un expert, en visioconférence, à planifier selon vos disponibilités. Pour aller plus loin, notamment pour déployer l&apos;IA sur vos cas d&apos;usage, un accompagnement sur mesure est proposé séparément (crédit d&apos;heures).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Comment fonctionne le financement avec notre partenaire Eloq-One ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ô&apos;TOP Formations est un organisme de formation déclaré. Lorsque votre formation est financée par un OPCO ou un FAF, la convention et la facturation sont portées par notre partenaire Eloq-One, organisme certifié Qualiopi. La prise en charge reste soumise à l&apos;accord du financeur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">À quelles certifications préparent nos formations ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Nos formations préparent aux certifications RS6776, RS7344 et RS7351, enregistrées au Répertoire spécifique de France Compétences. Le passage de la certification se fait sur demande, devant un jury. Une fois obtenue, elle atteste de vos compétences auprès de vos clients et partenaires.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 11. CTA FINAL : BROCHURE PDF & FORMULAIRE OFFICIEL ───────────── */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto max-w-4xl mb-12">
          
          {/* Lead Magnet Brochure Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
                📄 Brochure Officielle
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Télécharger le programme détaillé des formations (PDF)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Consultez le syllabus complet, les compétences visées, les modalités d&apos;évaluation et les grilles de prise en charge.
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


      {/* ─── 12. FOOTER CONFORME ─────────────────────────────────────────── */}
      <Footer />

      {/* Credit Card & Registration Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        defaultPlan={checkoutPlan}
      />

    </main>
  );
}
