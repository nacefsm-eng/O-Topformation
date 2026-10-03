'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  CheckCircle2, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  FileText, 
  Building2, 
  User, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface FormationOption {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  installmentsPrice: string;
  originalPrice?: number;
  duration: string;
  badge?: string;
  isPack?: boolean;
}

const OFFERS: Record<string, FormationOption> = {
  'rs6776': {
    id: 'rs6776',
    title: 'IA Générative : Contenus Responsables (RS6776)',
    subtitle: 'Prépare à la certification RS6776 • 100 % en ligne',
    price: 600,
    installmentsPrice: '3 × 200 €',
    duration: '21 h dont 2 h d’accompagnement',
    badge: 'Prix de lancement jusqu’au 31/10',
  },
  'rs7344': {
    id: 'rs7344',
    title: 'Développer son Activité avec l’IA (RS7344)',
    subtitle: 'Prépare à la certification RS7344 • 100 % en ligne',
    price: 1490,
    installmentsPrice: '3 × 496,67 €',
    duration: '21 h dont 2 h d’accompagnement',
  },
  'rs7351': {
    id: 'rs7351',
    title: 'Communication Digitale & Réseaux Sociaux (RS7351)',
    subtitle: 'Prépare à la certification RS7351 • 100 % en ligne',
    price: 1490,
    installmentsPrice: '3 × 496,67 €',
    duration: '21 h dont 2 h d’accompagnement',
  },
  'top': {
    id: 'top',
    title: 'Méthode TOP® — Conduite du Changement',
    subtitle: 'Techniques d’Optimisation du Potentiel • Présentiel ou Visio',
    price: 890,
    installmentsPrice: '3 × 296,67 €',
    duration: '21 h (3 jours)',
  },
  'duo': {
    id: 'duo',
    title: 'Pack Duo — 2 Formations au Choix',
    subtitle: 'Combinaison de 2 cursus complets avec accompagnement expert',
    price: 1790, // dynamique selon sélection
    installmentsPrice: '3 × 596,67 €',
    duration: '42 h dont 4 h d’accompagnement',
    isPack: true,
  },
  'trio': {
    id: 'trio',
    title: 'Pack Trio — Les 3 Formations IA & Réseaux Sociaux',
    subtitle: 'RS6776 + RS7344 + RS7351 (Cursus intégral 63 h)',
    price: 2890,
    originalPrice: 3580,
    installmentsPrice: '3 × 963,33 €',
    duration: '63 h dont 6 h d’accompagnement',
    badge: 'Économie de 690 € jusqu’au 31/10',
    isPack: true,
  },
  'entreprise': {
    id: 'entreprise',
    title: 'Formule Entreprise 40 h',
    subtitle: 'Cursus 21 h + accompagnement renforcé sur mesure pour équipes',
    price: 3200,
    installmentsPrice: 'Sur devis',
    duration: '40 h',
    isPack: true,
  },
};

const STRIPE_LINKS: Record<string, string> = {
  'rs6776': 'https://buy.stripe.com/bJebJ3gmUgVWdWJ5rXb7y0c', // 600 €
  'rs7344': 'https://buy.stripe.com/3cI4gBfiQ9tubOB8E9b7y03', // 1 490 €
  'rs7351': 'https://buy.stripe.com/6oUaEZb2A0WY5qd6w1b7y04', // 1 490 €
  'top': 'https://buy.stripe.com/00w3cxc6E7lm7yldYtb7y02', // 890 €
  'duo-with-6776': 'https://buy.stripe.com/bJebJ3gmUgVWdWJ5rXb7y0c', // à matcher ou checkout
  'duo-without-6776': 'https://buy.stripe.com/14AaEZ7QodJK7yl07Db7y06', // 2 490 €
  'trio': 'https://buy.stripe.com/3cI6oJ5Ig8pq19X2fLb7y07', // 2 890 €
};

function CommanderContent() {
  const searchParams = useSearchParams();
  const initialOffre = searchParams.get('offre') || 'rs6776';
  const initialMode = searchParams.get('mode') || '';

  const [selectedOffre, setSelectedOffre] = useState<string>(
    OFFERS[initialOffre] ? initialOffre : 'rs6776'
  );

  // Duo selection sub-options
  const [duoChoice1, setDuoChoice1] = useState('rs6776');
  const [duoChoice2, setDuoChoice2] = useState('rs7344');

  // Profil
  const [profil, setProfil] = useState<'pro' | 'particulier' | 'finance'>(
    initialMode === 'financement' ? 'finance' : 'pro'
  );

  // Questionnaire court
  const [siret, setSiret] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objectif, setObjectif] = useState('Gagner du temps sur les tâches récurrentes');
  const [niveau, setNiveau] = useState('Débutant');
  const [handicap, setHandicap] = useState<'non' | 'oui'>('non');
  const [rgpdConsent, setRgpdConsent] = useState(false);

  // Legal checks
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [accessChoice, setAccessChoice] = useState<'immediate' | 'retractation' | null>(null);

  // Financement details
  const [financeurType, setFinanceurType] = useState('OPCO');
  const [financeurName, setFinanceurName] = useState('');
  const [desiredDate, setDesiredDate] = useState('');

  // Payment installment
  const [paymentType, setPaymentType] = useState<'1x' | '3x'>('1x');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [financeSubmitted, setFinanceSubmitted] = useState(false);

  // Dynamically compute Duo Price
  const isDuoWith6776 = duoChoice1 === 'rs6776' || duoChoice2 === 'rs6776';
  const duoPrice = isDuoWith6776 ? 1790 : 2490;
  const duoInstallments = isDuoWith6776 ? '3 × 596,67 €' : '3 × 830 €';

  const currentOffer = OFFERS[selectedOffre];
  const finalPrice = selectedOffre === 'duo' ? duoPrice : currentOffer.price;
  const finalInstallments = selectedOffre === 'duo' ? duoInstallments : currentOffer.installmentsPrice;

  const handleProceedPayment = async () => {
    if (!rgpdConsent) {
      alert('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }
    if (!acceptConditions) {
      alert('Veuillez accepter les CGV et le règlement intérieur.');
      return;
    }
    if (profil === 'particulier' && !accessChoice) {
      alert('Veuillez choisir votre modalité d’accès (immédiat ou après le délai de 14 jours).');
      return;
    }
    if (profil === 'pro' && !siret.trim()) {
      alert('Veuillez renseigner votre numéro SIRET.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Log lead to API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${prenom} ${nom}`,
          email,
          phone,
          statut: profil,
          siret: profil === 'pro' ? siret : undefined,
          companyName: profil === 'pro' ? companyName : undefined,
          parcours: currentOffer.title,
          accessChoice,
          price: finalPrice,
          paymentType,
          objectif,
          niveau,
          handicap,
          source: 'Tunnel de commande /commander',
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      console.error(e);
    }

    // Determine Stripe Link
    let stripeUrl = STRIPE_LINKS[selectedOffre] || STRIPE_LINKS['rs6776'];
    if (selectedOffre === 'duo') {
      stripeUrl = isDuoWith6776 ? STRIPE_LINKS['duo-with-6776'] : STRIPE_LINKS['duo-without-6776'];
    }

    // Redirect to Stripe checkout
    window.location.href = stripeUrl;
  };

  const handleFinanceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpdConsent) {
      alert('Veuillez accepter le traitement de vos données.');
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${prenom} ${nom}`,
          email,
          phone,
          statut: 'financement',
          companyName,
          financeurType,
          financeurName,
          desiredDate,
          parcours: currentOffer.title,
          objectif,
          niveau,
          handicap,
          source: 'Demande financement via /commander',
          submittedAt: new Date().toISOString(),
        }),
      });
      setFinanceSubmitted(true);
    } catch (e) {
      console.error(e);
      setFinanceSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Ô'TOP Formations" className="w-10 h-10 rounded-full object-contain" />
            <span className="font-extrabold text-white text-base tracking-tight">
              Ô&apos;TOP <span className="text-[#38bdf8]">FORMATIONS</span>
            </span>
          </Link>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="hidden sm:inline">Besoin d’aide ?</span>
            <a href="tel:+33767246825" className="text-white font-bold hover:text-blue-400">07 67 24 68 25</a>
            <span className="text-slate-600">•</span>
            <a 
              href="https://calendly.com/formation-rmcf/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 font-semibold shadow-sm"
            >
              Échanger 15 min
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="container mx-auto max-w-5xl px-4 pt-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Lock size={13} />
            <span>Inscription &amp; Paiement Sécurisé</span>
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Finalisez votre inscription en 2 minutes
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Accès garanti sous 24 h • 2 h d’accompagnement avec un expert incluses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column : Selection & Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Étape 1 : Choix de la formation */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-blue-400 uppercase tracking-wider">
                  Étape 1 • Votre Formation
                </span>
                <span className="text-xs text-slate-400">21 h dont 2 h d’accompagnement</span>
              </div>

              <div className="space-y-3">
                {Object.values(OFFERS).map((off) => (
                  <label
                    key={off.id}
                    className={`block p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedOffre === off.id
                        ? 'bg-blue-600/15 border-blue-500 shadow-md shadow-blue-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="offre"
                          value={off.id}
                          checked={selectedOffre === off.id}
                          onChange={() => setSelectedOffre(off.id)}
                          className="mt-1 accent-blue-500"
                        />
                        <div>
                          <div className="font-bold text-sm text-white flex items-center gap-2">
                            <span>{off.title}</span>
                            {off.badge && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                {off.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{off.subtitle}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-black text-white text-base">
                          {off.id === 'duo' ? `${duoPrice} €` : `${off.price} €`}
                        </div>
                        {off.originalPrice && (
                          <div className="text-[11px] text-slate-500 line-through">
                            {off.originalPrice} €
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Sub-selector for Pack Duo */}
              {selectedOffre === 'duo' && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-blue-500/30 space-y-3">
                  <div className="text-xs font-bold text-cyan-300">
                    Sélectionnez vos 2 formations pour le Pack Duo :
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Formation 1 :</label>
                      <select
                        value={duoChoice1}
                        onChange={(e) => setDuoChoice1(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                      >
                        <option value="rs6776">IA Générative (RS6776)</option>
                        <option value="rs7344">Développer son activité (RS7344)</option>
                        <option value="rs7351">Réseaux Sociaux (RS7351)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Formation 2 :</label>
                      <select
                        value={duoChoice2}
                        onChange={(e) => setDuoChoice2(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                      >
                        <option value="rs7344">Développer son activité (RS7344)</option>
                        <option value="rs7351">Réseaux Sociaux (RS7351)</option>
                        <option value="rs6776">IA Générative (RS6776)</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    {isDuoWith6776 ? (
                      <span>✓ Avec la formation IA générative : <strong>1 790 €</strong> au lieu de 2 090 € (économie de 300 €)</span>
                    ) : (
                      <span>✓ RS7344 + RS7351 : <strong>2 490 €</strong> au lieu de 2 980 € (économie de 490 €)</span>
                    )}
                  </div>
                </div>
              )}

              {/* Mention Trio bonus */}
              {selectedOffre === 'trio' && (
                <div className="mt-3 p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300">
                  💡 <strong>Avantage Pack :</strong> La 3e formation pour 400 € de plus que le Duo RS7344 + RS7351.
                </div>
              )}
            </div>

            {/* Étape 2 : Votre profil */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider block mb-3">
                Étape 2 • Vous vous inscrivez en tant que :
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setProfil('pro')}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    profil === 'pro'
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 size={16} className={profil === 'pro' ? 'text-blue-400' : 'text-slate-500'} />
                    <span className="font-bold text-xs">Professionnel</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Indépendant, Dirigeant (avec SIRET)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProfil('particulier')}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    profil === 'particulier'
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <User size={16} className={profil === 'particulier' ? 'text-blue-400' : 'text-slate-500'} />
                    <span className="font-bold text-xs">Particulier</span>
                  </div>
                  <span className="text-[11px] text-slate-400">À titre personnel (sans SIRET)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProfil('finance')}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    profil === 'finance'
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck size={16} className={profil === 'finance' ? 'text-emerald-400' : 'text-slate-500'} />
                    <span className="font-bold text-xs">Financement</span>
                  </div>
                  <span className="text-[11px] text-slate-400">OPCO, FAF, France Travail</span>
                </button>
              </div>
            </div>

            {/* Étape 3 : Questionnaire court & Coordonnées */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider block">
                Étape 3 • Questionnaire Court (1 min) &amp; Coordonnées
              </span>

              {profil === 'pro' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Numéro SIRET *</label>
                    <input
                      type="text"
                      required
                      placeholder="14 chiffres"
                      value={siret}
                      onChange={(e) => setSiret(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom de l’entreprise / Raison sociale</label>
                    <input
                      type="text"
                      placeholder="Nom de votre structure"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Prénom *</label>
                  <input
                    type="text"
                    required
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nom *</label>
                  <input
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">E-mail * (pour réception des accès sous 24 h)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Téléphone (facultatif)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 00 00 00 00"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Votre objectif principal *</label>
                <select
                  value={objectif}
                  onChange={(e) => setObjectif(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="Gagner du temps sur les tâches récurrentes">Gagner du temps sur les tâches récurrentes</option>
                  <option value="Produire du contenu">Produire du contenu rédactionnel & visuel</option>
                  <option value="Automatiser devis, relances et suivi">Automatiser devis, relances et suivi commercial</option>
                  <option value="Former mon équipe">Former mon équipe & acculturation IA</option>
                  <option value="Sécuriser l'usage de l'IA">Sécuriser l’usage de l’IA (AI Act, RGPD)</option>
                  <option value="Autre">Autre objectif</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Votre niveau actuel avec l’IA *</label>
                  <select
                    value={niveau}
                    onChange={(e) => setNiveau(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="Débutant">Débutant (peu ou pas de pratique)</option>
                    <option value="Intermédiaire">Intermédiaire (utilisation occasionnelle)</option>
                    <option value="Avancé">Avancé (utilisation quotidienne)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Besoin d’aménagement handicap ?</label>
                  <select
                    value={handicap}
                    onChange={(e) => setHandicap(e.target.value as 'non' | 'oui')}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option value="non">Non</option>
                    <option value="oui">Oui (Mélissa vous contacte pour adapter le parcours)</option>
                  </select>
                </div>
              </div>

              {/* RGPD checkbox */}
              <label className="flex items-start gap-2.5 pt-2 text-xs text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rgpdConsent}
                  onChange={(e) => setRgpdConsent(e.target.checked)}
                  className="mt-0.5 accent-blue-500"
                />
                <span>
                  J’accepte que O’TOP Formation traite mes données pour gérer mon inscription et mon parcours. En savoir plus :{' '}
                  <Link href="/politique-confidentialite" target="_blank" className="text-blue-400 hover:underline">
                    politique de confidentialité
                  </Link>.
                </span>
              </label>
            </div>

            {/* Parcours C : Spécifique Financement */}
            {profil === 'finance' && (
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Dossier de Financement OPCO / FAF / France Travail</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aucun paiement n’est requis aujourd’hui. Mélissa ou Renaud vous recontacte sous 48 h ouvrées. Notre partenaire <strong>Eloq-One</strong>, organisme certifié Qualiopi, établit la convention normée et le devis à soumettre à votre financeur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Type de financeur *</label>
                    <select
                      value={financeurType}
                      onChange={(e) => setFinanceurType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                    >
                      <option value="OPCO">OPCO (Salariés de TPE/PME)</option>
                      <option value="FAFCEA">FAFCEA (Artisans)</option>
                      <option value="FIF-PL">FIF-PL (Professions Libérales)</option>
                      <option value="AGEFICE">AGEFICE (Commerçants & Dirigeants)</option>
                      <option value="France Travail">France Travail (Demandeurs d’emploi)</option>
                      <option value="Employeur">Plan de formation employeur</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nom du financeur / OPCO (si connu)</label>
                    <input
                      type="text"
                      placeholder="Ex: Atlas, Akto, Opco EP..."
                      value={financeurName}
                      onChange={(e) => setFinanceurName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Date de démarrage souhaitée</label>
                  <input
                    type="date"
                    value={desiredDate}
                    onChange={(e) => setDesiredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {financeSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-bold">
                    ✓ Demande bien enregistrée ! Mélissa vous recontacte sous 48 h ouvrées avec la convention Eloq-One.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinanceSubmit}
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? 'Transmission en cours...' : 'Transmettre ma demande de prise en charge →'}
                  </button>
                )}
              </div>
            )}

          </div>

          {/* Right Column : Order Summary & Final Step */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            <div className="p-6 rounded-2xl bg-slate-900 border-2 border-blue-500/30 shadow-xl space-y-4">
              <h2 className="text-base font-black text-white flex items-center justify-between">
                <span>Récapitulatif de commande</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  Accès 24 h
                </span>
              </h2>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-white text-sm">{currentOffer.title}</div>
                <div className="text-xs text-slate-400">{currentOffer.duration}</div>
                <div className="text-xs text-slate-400">Accès illimité à vie aux contenus vidéo &amp; quiz</div>
                <div className="text-xs text-cyan-300">2 h d’accompagnement individuel en visio incluses</div>
              </div>

              {/* Price display */}
              <div className="py-2 border-y border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Total à régler</div>
                  <div className="text-xs text-slate-500">TVA non applicable (art. 293 B ou 261 CGI)</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white">{finalPrice} €</div>
                  <div className="text-xs text-slate-400">{finalInstallments}</div>
                </div>
              </div>

              {/* Installment toggle for pro & particulier */}
              {profil !== 'finance' && (
                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-bold text-slate-300">Modalité de règlement :</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentType('1x')}
                      className={`py-2 px-3 rounded-lg border font-bold text-center cursor-pointer transition ${
                        paymentType === '1x'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      Paiement en 1 fois ({finalPrice} €)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentType('3x')}
                      className={`py-2 px-3 rounded-lg border font-bold text-center cursor-pointer transition ${
                        paymentType === '3x'
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      3× sans frais ({finalInstallments})
                    </button>
                  </div>
                </div>
              )}

              {/* Particulier Specific : Retractation choice (art. L221-28) */}
              {profil === 'particulier' && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2.5 text-xs">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    <span>Droit de rétractation (Code de la consommation)</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Veuillez choisir votre modalité d’accès aux contenus numériques :
                  </p>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="access"
                      checked={accessChoice === 'immediate'}
                      onChange={() => setAccessChoice('immediate')}
                      className="mt-0.5 accent-amber-500"
                    />
                    <span className="text-[11px] text-slate-300">
                      <strong>Option 1 :</strong> Je demande l’accès immédiat à ma formation et je renonce expressément à mon droit de rétractation (art. L221-28 13° du Code de la consommation).
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="access"
                      checked={accessChoice === 'retractation'}
                      onChange={() => setAccessChoice('retractation')}
                      className="mt-0.5 accent-amber-500"
                    />
                    <span className="text-[11px] text-slate-300">
                      <strong>Option 2 :</strong> Je souhaite accéder à ma formation à l’issue du délai légal de rétractation de 14 jours.
                    </span>
                  </label>
                </div>
              )}

              {/* CGV & Règlement Intérieur acceptance */}
              {profil !== 'finance' && (
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptConditions}
                      onChange={(e) => setAcceptConditions(e.target.checked)}
                      className="mt-0.5 accent-blue-500"
                    />
                    <span>
                      {profil === 'pro' ? (
                        <>J’ai lu et j’accepte les <Link href="/cgv" target="_blank" className="text-blue-400 hover:underline">CGV</Link> et le <Link href="/reglement-interieur" target="_blank" className="text-blue-400 hover:underline">Règlement Intérieur</Link>.</>
                      ) : (
                        <>J’accepte le contrat de formation, les <Link href="/cgv" target="_blank" className="text-blue-400 hover:underline">CGV</Link> et le <Link href="/reglement-interieur" target="_blank" className="text-blue-400 hover:underline">Règlement Intérieur</Link>.</>
                      )}
                    </span>
                  </label>
                </div>
              )}

              {/* Action Button */}
              {profil !== 'finance' && (
                <button
                  type="button"
                  onClick={handleProceedPayment}
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-sm shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <CreditCard size={18} />
                  <span>
                    {isSubmitting ? 'Redirection sécurisée...' : `Régler ma formation — ${finalPrice} €`}
                  </span>
                </button>
              )}

              <div className="text-[11px] text-slate-500 text-center space-y-1">
                <div>Paiement sécurisé crypté SSL via Stripe</div>
                <div>Facture officielle O’TOP Formation générée après confirmation</div>
              </div>
            </div>

            {/* Reassurance Badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Ce qui se passe après votre paiement :</span>
              </div>
              <ul className="space-y-1 text-[11px] list-disc list-inside">
                <li>Confirmation immédiate et facture par e-mail</li>
                <li>Questionnaire d’analyse des besoins envoyé pour personnaliser vos cas</li>
                <li>Ouverture de vos accès illimités sous 24 h</li>
                <li>Lien direct pour réserver vos 2 h d’accompagnement avec l’expert</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function CommanderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-white p-12 text-center">Chargement du tunnel...</div>}>
      <CommanderContent />
    </Suspense>
  );
}
