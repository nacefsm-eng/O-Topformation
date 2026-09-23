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
  CreditCard
} from 'lucide-react';
import CheckoutModal from '@/components/ui/checkout-modal';

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
      
      {/* ─── 1. HERO ORIENTÉ RÉSULTAT AVEC 3 PREUVES COURTES ─────────────── */}
      <section ref={heroRef} className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/35 via-slate-950 to-slate-950 border-b border-slate-850">
        
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
              Des parcours pratiques pour indépendants, dirigeants et équipes, avec accompagnement humain sur vos outils et vos cas réels.
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
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Certifications préparées (<strong>RS enregistrées</strong>)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium"><strong>Coaching individuel</strong> selon le parcours</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Financement étudié avec <strong>notre partenaire Eloqone</strong></span>
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
                <span>Réserver mon diagnostic gratuit de 15 min ⚡</span>
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
                    Assistants sur-mesure &amp; Workflows automatisés
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                    ChatGPT, Claude, n8n, Make : automatisez sans coder et sécurisez vos données professionnelles.
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-emerald-400 font-extrabold text-lg">Pratique 1-to-1</span>
                  <div className="text-slate-400 text-xs">5h coaching inclus</div>
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
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Prépa RS7351 • 11h+ Vidéos</span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">Réseaux Sociaux &amp; Acquisition</h3>
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
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">RS7344 • 14h à 35h</span>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">Intégration IA en Entreprise</h3>
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
            <div className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dirigeants de TPE &amp; PME</h3>
                <p className="text-xs text-blue-300 font-semibold mb-3">« Je manque de bras et mes équipes sont débordées »</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Automatisez le traitement des devis, les relances factures et la synthèse des réunions. Intégrez l&apos;IA dans vos équipes sans risque de fuite de données (AI Act).
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 border-t border-slate-900 pt-4">
                <li className="flex items-center gap-2">✓ Éligible plans de compétences OPCO</li>
                <li className="flex items-center gap-2">✓ ROI mesurable dès le 1er mois</li>
              </ul>
            </div>

            {/* Profil 2 : Indépendants & Professionnels Libéraux */}
            <div className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Indépendants &amp; Consultants</h3>
                <p className="text-xs text-indigo-300 font-semibold mb-3">« Je passe trop d&apos;heures sur des tâches non facturables »</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Créez vos assistants GPT sur-mesure pour rédiger vos propositions, générer vos posts LinkedIn et préparer vos livrables en quelques minutes.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 border-t border-slate-900 pt-4">
                <li className="flex items-center gap-2">✓ 5h de coaching 1-to-1 incluses</li>
                <li className="flex items-center gap-2">✓ Gain moyen de 6h à 10h / semaine</li>
              </ul>
            </div>

            {/* Profil 3 : Équipes Marketing & Commerciales */}
            <div className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Workflow size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Équipes &amp; Salariés</h3>
                <p className="text-xs text-cyan-300 font-semibold mb-3">« Nous voulons monter en compétences sur les outils de pointe »</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Maîtrisez Canva pro, CapCut, Waalaxy et les outils d&apos;automatisation pour accélérer la production sans dépendre d&apos;une agence externe.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 border-t border-slate-900 pt-4">
                <li className="flex items-center gap-2">✓ Certifications officielles RS</li>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Carte Parcours 1 : IA Générative RS6776 */}
            {(selectedPole === 'all' || selectedPole === 'ia') && (
              <div className="rounded-3xl bg-slate-900/80 border-2 border-cyan-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                      Pôle IA • RS6776
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">100% en ligne</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    IA Générative pour Indépendants &amp; Dirigeants
                  </h3>

                  <p className="text-xs text-cyan-400 font-semibold mb-3">
                    ChatGPT, Claude, Prompts avancés &amp; Automatisation
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Le parcours référence pour maîtriser le prompting métier, créer vos assistants personnalisés et récupérer entre 5 et 10h par semaine (selon votre activité et vos processus).
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-cyan-400 shrink-0" />
                      <span><strong>Format :</strong> 16h vidéos + <strong>5h coaching 1-to-1</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Certification :</strong> Enregistrée au Répertoire Spécifique : RS6776</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Financement :</strong> 1 490 € ou pris en charge selon éligibilité (OPCO, FAF, CPF)</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Création de votre assistant IA personnalisé sur vos documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Génération immédiate de devis, propositions &amp; contenus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>Sécurité des données &amp; conformité AI Act</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Formation IA Générative RS6776', 1490, '16h vidéos + 5h coaching individuel 1-to-1')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Dossier Financement OPCO / FAF ⚡
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
              <div className="rounded-3xl bg-slate-900/80 border-2 border-indigo-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                      Pôle IA • RS7344
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Distanciel ou Intra</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Intégration de l&apos;IA en Entreprise &amp; Workflows
                  </h3>

                  <p className="text-xs text-indigo-400 font-semibold mb-3">
                    Méthode STEP, Workflows n8n/Make &amp; AI Act
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Pour directions et managers : auditez vos processus avec la méthode STEP, automatisez les flux d&apos;équipes sans code complexe et sécurisez vos données.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-indigo-400 shrink-0" />
                      <span><strong>Format :</strong> 14h à 35h sur-mesure pour vos équipes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Certification :</strong> Enregistrée au Répertoire Spécifique : RS7344</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Financement :</strong> Plan de développement des compétences OPCO</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Cartographie des flux chronophages (méthode STEP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Automatisations n8n / Make connectées à vos logiciels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>Charte éthique IA &amp; conformité RGPD / AI Act</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Intégration IA Entreprise RS7344 (Acompte)', 450, 'Acompte de réservation de session intra/distanciel')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>Réserver une session intra (Acompte) 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Demander un devis OPCO Entreprise ⚡
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

            {/* Carte Parcours 3 : Réseaux Sociaux Prépa RS7351 */}
            {(selectedPole === 'all' || selectedPole === 'reseaux') && (
              <div className="rounded-3xl bg-slate-900/80 border-2 border-pink-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                      Pôle Réseaux • RS7351
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">100% à distance</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Communication &amp; Réseaux Sociaux
                  </h3>

                  <p className="text-xs text-pink-400 font-semibold mb-3">
                    Canva, CapCut, Meta Ads &amp; LinkedIn Waalaxy
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Professionnalisez votre visibilité : créez des visuels percutants, produisez des vidéos courtes engageantes et automatisez vos prises de contacts B2B.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-pink-400 shrink-0" />
                      <span><strong>Format :</strong> 11h+ de vidéos interactives + cas pratiques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Certification :</strong> Préparation certification RS7351</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Financement :</strong> 1 290 € ou pris en charge selon éligibilité (OPCO, FAF, CPF)</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Ligne éditoriale et calendrier de publication actionnable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Maîtrise de Canva Pro, CapCut (Reels/TikTok) et Meta Ads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>Prospection automatisée B2B sur LinkedIn via Waalaxy</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Formation Réseaux Sociaux (RS7351)', 1290, '11h+ vidéos interactives + mise en pratique')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-pink-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Dossier Financement OPCO / FAF ⚡
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

            {/* Carte Parcours 4 : Méthode TOP® (FITOP 21h) */}
            {(selectedPole === 'all' || selectedPole === 'top') && (
              <div className="rounded-3xl bg-slate-900/80 border-2 border-amber-500/40 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                      Pôle TOP® • Gestion du Stress
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">Présentiel ou Visio</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Formation Initiale aux TOP® (FITOP 21h)
                  </h3>

                  <p className="text-xs text-amber-400 font-semibold mb-3">
                    Méthode PERRAULT-PIERRE • Issue de l&apos;Armée de l&apos;Air
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Apprenez à réguler votre stress en direct, dynamiser votre énergie sans caféine, préserver votre sommeil et prévenir le burnout face aux charges mentales intenses.
                  </p>

                  <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-amber-400 shrink-0" />
                      <span><strong>Format :</strong> 21 heures réparties (3 jours ou modules)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Formateurs :</strong> Mélissa JENNADI &amp; Régis Domergue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Tarif :</strong> 890 € ou prise en charge OPCO / FAF</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-400 mb-6">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Boîte à outils complète : respiration relaxante &amp; dynamisante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Imagerie mentale, Pré-activation Mentale &amp; RMP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>Livret technique officiel remis à chaque participant</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenCheckout('Formation Initiale FITOP® (21h)', 890, 'Cursus officiel 21h Méthode TOP®')}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    <span>S&apos;inscrire / Régler en ligne 💳</span>
                  </button>
                  <a
                    href="#contact"
                    className="w-full block py-2.5 text-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-all"
                  >
                    Demander prise en charge entreprise / OPCO ⚡
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



      {/* ─── 5. TABLEAU COMPARATIF DES 3 PARCOURS ────────────────────────── */}
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
                    <span className="text-blue-400 block text-xs uppercase mb-1">Parcours 1</span>
                    IA Générative pour Indépendants &amp; Dirigeants
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Indépendants, freelances, consultants, dirigeants de TPE
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-blue-300 text-xs sm:text-sm whitespace-nowrap">
                    16h vidéos<br />+ <strong>5h coaching 1-to-1</strong>
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold whitespace-nowrap">
                      Certif. RS6776
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    OPCO, FAF, CPF<br />via partenaire
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Automatisation de vos contenus, prompts sur-mesure et gain de 5 à 10h / semaine (selon votre activité)
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-indigo-400 block text-xs uppercase mb-1">Parcours 2</span>
                    Intégration de l&apos;IA en Entreprise &amp; Workflows
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Dirigeants de TPE/PME, managers et leurs équipes
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-indigo-300 text-xs sm:text-sm whitespace-nowrap">
                    14h à 35h<br />sur-mesure
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold whitespace-nowrap">
                      Certif. RS7344
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-emerald-400 font-medium">
                    Plan de dev. compétences, OPCO, FAF
                  </td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm">
                    Feuille de route d&apos;automatisation, charte éthique et conformité AI Act
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white">
                    <span className="text-pink-400 block text-xs uppercase mb-1">Parcours 3</span>
                    Communication &amp; Réseaux Sociaux
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

          <p className="mt-4 text-center text-xs text-slate-400">
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
              Ô&apos;TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l&apos;accord de l&apos;organisme financeur.
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
              <h3 className="font-bold text-white text-base mb-2">Montage avec Eloqone</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Notre partenaire porteur prépare la convention normée, le programme et le devis pour soumission à votre financeur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-white text-base mb-2">Démarrage &amp; 5h Coaching</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dès l&apos;accord de prise en charge, accès immédiat à la plateforme et planification de vos 5h d&apos;accompagnement 1-to-1.
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

      {/* ─── 8. CTA CONVERSION IMMÉDIATE (DIRIGEANTS PRESSÉS) ───────────── */}
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
              Réserver mon diagnostic (15 min) ⚡
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


      {/* ─── 9. PASSERELLE VERS LE PÔLE MÉTHODE TOP® & SANTÉ MENTALE ──────── */}
      <section className="py-14 px-4 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border-b border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <span>🧘</span> Univers Complémentaire : Santé Mentale &amp; Prévention du Stress
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                La Méthode TOP® : Endurance Cognitive &amp; Régulation Émotionnelle
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Issue des armées et du sport de haut niveau (méthode Édith Perrault-Pierre), la Méthode TOP® permet aux dirigeants, soignants et forces de l&apos;ordre d&apos;optimiser leur sommeil, désamorcer l&apos;épuisement et décider avec lucidité sous pression.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/methode"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                Découvrir les 9 Piliers TOP →
              </Link>
              <Link
                href="/respirez"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm text-center border border-slate-700 transition-all whitespace-nowrap"
              >
                Toutes nos formations bien-être
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
              <h3 className="font-bold text-white text-base mb-2">Comment s&apos;organisent les 5 heures de coaching individuel ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Vous planifiez vos sessions de coaching 1-to-1 en visioconférence selon vos disponibilités. Nous travaillons directement sur vos propres documents, vos processus d&apos;entreprise et vos outils pour débloquer chaque point d&apos;automatisation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Comment fonctionne le financement via votre partenaire Eloqone ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                SAS Ô&apos;TOP Formation est en cours de déclaration d&apos;activité (DREETS PACA). Les conventions, programmes et facturations sont instruits et portés par notre organisme partenaire certifié Qualiopi Eloqone auprès de votre OPCO, FAF ou CPF.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-2">Quelle est la valeur des certifications obtenues ?</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Les certifications (RS6776, RS7344, préparation RS7351) sont enregistrées au Répertoire Spécifique de France Compétences. Elles attestent officiellement de vos compétences opérationnelles auprès de vos clients, banques et partenaires.
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
