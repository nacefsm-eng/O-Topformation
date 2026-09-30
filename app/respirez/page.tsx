'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Download, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Users, 
  Building2, 
  User, 
  Brain, 
  Zap, 
  ChevronDown, 
  ArrowRight, 
  Star,
  Award,
  Calendar,
  AlertTriangle,
  SunMedium,
  Moon
} from 'lucide-react';

export default function RespirezPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'particulier',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande Diagnostic FI-TOP — ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nProfil: ${formData.role}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@otopformations.fr?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const faqItems = [
    {
      q: "Ça va vraiment changer quelque chose pour moi ?",
      a: "Oui, car la Méthode TOP® n'est ni du bien-être passif ni de la théorie abstraite. C'est une boîte à outils psycho-physiologique pragmatique (respiration rythmée, relaxation différentielle, imagerie mentale) conçue par le Service de santé des armées pour fonctionner immédiatement sous haute pression. Vous repartez avec des protocoles de 2 à 5 minutes directement utilisables à votre poste de travail."
    },
    {
      q: "Pourquoi cette formation est différente des autres stages anti-stress ?",
      a: "Parce que nous ne vous demandons pas de « lâcher prise » ou de vous isoler dans un endroit calme. Les TOP® s'utilisent les yeux ouverts, en situation réelle : avant une réunion tendue, après une confrontation difficile, ou pour récupérer un sommeil profond en quelques minutes entre deux gardes ou journées chargées."
    },
    {
      q: "C'est pour qui vraiment ?",
      a: "Pour tous ceux qui portent une charge mentale lourde au quotidien : soignants, enseignants, éducateurs, chefs d'établissement, cadres territoriaux, dirigeants de PME, artisans et indépendants. Que vous soyez en phase de prévention ou au bord de l'épuisement, la méthode s'adapte à votre réalité."
    },
    {
      q: "Combien ça coûte et comment est-ce financé ?",
      a: "La formation initiale FI-TOP® (3 jours / 21 h) est au tarif de 890 €. Elle est finançable par les OPCO pour les salariés et entreprises, et par les FAF (FIF-PL, AGEFICE, FAFCEA pour les artisans) pour les indépendants grâce au portage certifié Qualiopi de notre partenaire Eloq-One. Mélissa vous accompagne de A à Z dans le montage du dossier."
    },
    {
      q: "Ça prend combien de temps ? Est-ce que je peux m'absenter ?",
      a: "Le cursus complet dure 21 heures réparties sur 3 jours (en présentiel dans le Var ou en distanciel). Les sessions sont planifiées pour respecter vos contraintes d'activité. Des formats intra-entreprise sur site sont également organisés sur mesure pour les mairies, hôpitaux et structures éducatives."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* ─── 1. HEADER ÉPURÉ SPÉCIAL DÉMO (AUCUN MENU POLLUANT) ─── */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Ô'TOP Formations" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain shadow-md shadow-amber-500/20 bg-white/5 p-0.5" 
            />
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                Ô&apos;TOP <span className="text-amber-400">FORMATIONS</span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium hidden sm:block">
                Plaquette Officielle Méthode TOP® • FI-TOP (3 jours)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+33767246825" 
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
            >
              <Phone size={13} className="text-amber-400" />
              <span>07 67 24 68 25</span>
            </a>

            <a
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20viens%20de%20consulter%20la%20page%20Respirez%20et%20je%20souhaite%20un%20diagnostic%20offert."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition hover:scale-105 active:scale-95"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#diagnostic"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition hover:scale-105 active:scale-95"
            >
              <span>Diagnostic Offert (15 min) →</span>
            </a>
          </div>
        </div>
      </header>


      {/* ─── 2. HERO SECTION : RESPIREZ À NOUVEAU ─── */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 border-b border-slate-800/80">
        
        {/* Glow de fond subtil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles size={14} className="text-amber-400" />
            Formation Initiale TOP® (FI-TOP) • 3 Jours (21 h)
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Respirez à nouveau.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-400 to-cyan-300">
              Ô&apos;TOP redonne souffle et clarté
            </span><br />
            à ceux qui portent les autres.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Vous donnez tout. Mais à force de tenir pour les autres, vous oubliez comment tenir pour vous. 
            <span className="text-white font-semibold block mt-1">Ô&apos;TOP remet les compteurs à zéro.</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
            <a
              href="#diagnostic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Je découvre mon diagnostic offert →</span>
            </a>

            <a
              href="/livret-top.pdf"
              download="Livret-Officiel-FITOP-OTOP.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm shadow-lg transition-all"
            >
              <Download size={16} className="text-amber-400" />
              <span>Télécharger le Livret PDF 📄</span>
            </a>
          </div>

          {/* 4 Badges de réassurance clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Clock size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">3 Jours (21 h)</div>
                <div className="text-[11px] text-slate-400">Présentiel ou visio</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Users size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Duo Certifié</div>
                <div className="text-[11px] text-slate-400">Mélissa &amp; Régis</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Shield size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Finançable</div>
                <div className="text-[11px] text-slate-400">OPCO, FAF &amp; FAFCEA</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <Award size={18} className="text-purple-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Qualiopi</div>
                <div className="text-[11px] text-slate-400">Portage Eloq-One</div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─── 3. DANS CETTE HISTOIRE, VOUS ÊTES PEUT-ÊTRE... (LES 3 TEMPS) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Dans cette histoire, vous êtes peut-être...
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              L&apos;usure mentale ne prévient pas d&apos;un coup. Elle s&apos;installe par étapes successives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phase 1 : En Avant */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <SunMedium size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Étape 1</span>
                <h3 className="text-xl font-bold text-white mb-3">En Avant</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tout semble sous contrôle. Vous gérez. Vous tenez la cadence. Mais cette tension dans la nuque, ce sommeil qui s&apos;allège, cette fatigue qui ne part plus au réveil... 
                  vous le sentez : quelque chose commence à peser. 
                  Vous vous dites <em>« c&apos;est normal, je tiendrai »</em>. C&apos;est ce que tout le monde se dit avant que ça craque.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-amber-300">
                ⚠️ Vigilance : accumulation silencieuse
              </div>
            </div>

            {/* Phase 2 : Pendant */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border-2 border-amber-500/50 hover:border-amber-400 transition-all flex flex-col justify-between shadow-2xl relative">
              <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase">
                Zone Critique
              </span>
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-5">
                  <Zap size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Étape 2</span>
                <h3 className="text-xl font-bold text-white mb-3">Pendant</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Vous êtes en plein dedans. Le terrain n&apos;attend pas. Chaque minute compte, chaque décision pèse. 
                  Le corps exécute, le mental encaisse. L&apos;instinct prend le relais. 
                  Vous tenez. Vous agissez. Mais à force d&apos;être en mode survie perpétuel, quelque chose brûle à l&apos;intérieur.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-amber-300">
                ⚡ Surchauffe : fonctionnement à flux tendu
              </div>
            </div>

            {/* Phase 3 : Après */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                  <Moon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">Étape 3</span>
                <h3 className="text-xl font-bold text-white mb-3">Après</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Le calme revient dehors, mais pas en vous. Les images restent. Le cerveau rejoue la mission, la réunion, les conflits. 
                  Les sons, les visages, les injustices. Vous dites <em>« ça va »</em> alors que ça ne va pas. 
                  Vous rentrez chez vous sans vraiment revenir. Et demain, il faudra recommencer.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-cyan-300">
                🛑 Blocage : incapacité à déconnecter
              </div>
            </div>

          </div>

          <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-white">
              Peu importe où vous en êtes. Le résultat est le même : <br />
              <span className="text-amber-400">vous portez trop, depuis trop longtemps.</span>
            </p>
          </div>

        </div>
      </section>


      {/* ─── 4. VOILÀ CE QUI SE PASSE VRAIMENT (TERRAIN & ORGANISATIONS) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">Constat Sans Fard</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Voilà ce qui se passe vraiment :
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Côté Humain / Professionnels */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                <User size={15} /> Pour les personnes &amp; professionnels de terrain
              </div>
              <h3 className="text-xl font-bold text-white">
                Votre corps sature et votre système nerveux ne coupe jamais.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hypervigilance le jour, insomnie la nuit. Et quand enfin vous dormez, votre cerveau rejoue la salle de classe, le couloir de l&apos;hôpital, le conflit client ou le bureau.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ce n&apos;est pas réservé aux métiers d&apos;urgence. Les enseignants, soignants, éducateurs, encadrants et libéraux vivent le même épuisement silencieux. 
                Eux ne voient pas le sang, mais ils encaissent la charge mentale, les tensions relationnelles et les injonctions paradoxales jour après jour.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-300">
                Vous continuez parce que c&apos;est ce que vous avez toujours fait : tenir debout.
              </p>
            </div>

            {/* Côté Institutions & Entreprises */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                <Building2 size={15} /> Pour les institutions, mairies &amp; directions
              </div>
              <h3 className="text-xl font-bold text-white">
                Derrière chaque indicateur dégradé, ce sont des équipes qui flanchent.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dirigeants, responsables RH, élus, chefs de service : vous le voyez au quotidien. 
                La tension monte, la fatigue s&apos;installe, les arrêts maladie se multiplient. Vous tenez les structures debout, mais vos équipes s&apos;épuisent en silence.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Absentéisme record, démotivation, perte de sens, démissions en cascade. 
                Mettre en place la Méthode TOP®, ce n&apos;est pas du bien-être gadget : c&apos;est une <strong>stratégie de performance humaine et de continuité de service</strong>.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                Des équipes qui régulent la pression sont plus fiables, plus soudées et plus lucides.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 5. C'EST POUR ÇA QUE Ô'TOP EXISTE & CE QU'ON OBSERVE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-950/30 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              C&apos;est pour ça que Ô&apos;TOP existe.
            </h2>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-1">
              <p>Pour rouvrir le corps.</p>
              <p>Pour rendre le calme opérationnel.</p>
              <p>Pour rendre à chacun ce qu&apos;il a donné sans compter.</p>
              <p className="font-bold text-amber-300 pt-2">Pour vous rendre à vous-même.</p>
            </div>
          </div>

          <div className="mb-10 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Ce qu&apos;on observe concrètement après nos interventions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sur les personnes */}
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Sur les Personnes</h3>
              </div>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Réduction mesurable du stress perçu</strong> dès les 2 premières semaines de mise en pratique</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sommeil récupérateur :</strong> endormissement accéléré et baisse des réveils nocturnes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Calme mental retrouvé :</strong> diminution des ruminations et capacité à « couper » le soir</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Regain d&apos;énergie vitale :</strong> retour de la concentration, de la patience et de l&apos;élan personnel</span>
                </li>
              </ul>
            </div>

            {/* Sur les équipes & organisations */}
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Building2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Sur les Équipes &amp; Organisations</h3>
              </div>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Baisse des arrêts maladie</strong> et des erreurs répétitives liées à l&apos;épuisement cognitif</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Meilleure communication interne :</strong> désamorçage des conflits relationnels et cohésion renforcée</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Clarté décisionnelle :</strong> maintien de la lucidité managériale sous forte contrainte</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Climat de travail apaisé :</strong> satisfaction des agents et performance durable des services</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-lg sm:text-xl font-black uppercase tracking-wider text-amber-300">
              Ô&apos;TOP n&apos;est pas une formation de plus.
            </p>
            <p className="text-xs text-slate-400 mt-1">C&apos;est un protocole opérationnel de reconquête de soi.</p>
          </div>

        </div>
      </section>


      {/* ─── 6. QUI SOMMES-NOUS ? (MÉLISSA JENNADI & RÉGIS DOMERGUE) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">Les Intervenants</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Qui sommes-nous ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              « Pas des coachs bien-être. Pas des facilitateurs de sérénité. Pas des marchands de respiration consciente. »
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profil Mélissa Jennadi */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-amber-400/40 transition-all">
              <div>
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img 
                    src="/team-melyssa.png" 
                    alt="Mélissa Jennadi" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold backdrop-blur-md">
                    Formatrice certifiée Méthode TOP®
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-bold text-white">Mélissa Jennadi</h3>
                  <div className="text-xs font-semibold text-amber-400">
                    Terrain éducatif, encadrement &amp; accompagnement de crise
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Issue du terrain éducatif, engagée là où les nerfs lâchent en silence. 
                    Formatrice certifiée, au contact direct de celles et ceux qui encaissent sans jamais s&apos;autoriser à flancher : 
                    enseignants, encadrants, personnels d&apos;accompagnement, équipes épuisées mais debout.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Elle a eu à accompagner des dizaines de situations de haute tension pour restaurer la sécurité intérieure et l&apos;équilibre personnel.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80">
                <a
                  href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20concernant%20la%20formation%20TOP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare size={14} className="text-emerald-400" />
                  <span>Échanger directement avec Mélissa</span>
                </a>
              </div>
            </div>

            {/* Profil Régis Domergue */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-blue-400/40 transition-all">
              <div>
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img 
                    src="/team-regis.png" 
                    alt="Régis Domergue" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold backdrop-blur-md">
                    Formateur certifié Méthode TOP®
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-2xl font-bold text-white">Régis Domergue</h3>
                  <div className="text-xs font-semibold text-blue-400">
                    Exigence opérationnelle &amp; préparation mentale sous haute pression
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Formé à l&apos;exigence militaire. Ancien moniteur TOP. 
                    Habitué aux environnements où l&apos;on n&apos;a pas le luxe de craquer. 
                    Là où chaque seconde compte et où maîtriser son système nerveux n&apos;est pas un confort, mais une condition de survie et d&apos;efficacité.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Il transmet avec rigueur et bienveillance les protocoles d&apos;imagerie motrice et de récupération modulée indispensables aux décideurs et équipes.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80">
                <a
                  href="#diagnostic"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Calendar size={14} className="text-blue-400" />
                  <span>Planifier une intervention avec Régis</span>
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="#diagnostic"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition hover:scale-105"
            >
              <span>Je m&apos;offre un diagnostic avec eux →</span>
            </a>
          </div>

        </div>
      </section>


      {/* ─── 7. LE CURSUS OFFICIEL : FORMATION INITIALE TOP® (FI-TOP 3 JOURS) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">Notre Offre Unique &amp; Ciblée</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Formation Initiale TOP® (FI-TOP) — 3 Jours
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nous formons des professionnels et des collaborateurs à l&apos;autonomie complète, pas des maîtres praticiens. 
              En 3 jours (21 h), vous intégrez l&apos;intégralité de la boîte à outils officielle.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                  Programme Référence • Aucun prérequis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
                  21 heures d&apos;ancrage pratique et d&apos;entraînement guidé
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Présentiel (Var / Ollioules ou sur site intra) ou Classe virtuelle interactive
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center sm:text-right">
                <div className="text-xs text-slate-400">Tarif officiel</div>
                <div className="text-3xl font-black text-emerald-400">890 €</div>
                <div className="text-[11px] text-amber-300 font-semibold mt-0.5">Finançable OPCO, FAF &amp; FAFCEA</div>
              </div>
            </div>

            {/* Déroulé 3 jours */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Jour 1 (7 h)</span>
                <h4 className="text-base font-bold text-white">Cartographie &amp; Physiologie</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">✓ Comprendre le cycle du stress aigu et chronique</li>
                  <li className="flex items-start gap-1.5">✓ Diagnostic individuel des signaux d&apos;alerte</li>
                  <li className="flex items-start gap-1.5">✓ Respiration relaxante (diminuer le rythme cardiaque)</li>
                  <li className="flex items-start gap-1.5">✓ Respiration dynamisante (activer l&apos;énergie)</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Jour 2 (7 h)</span>
                <h4 className="text-base font-bold text-white">Relaxation &amp; Récupération</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">✓ Relaxation différentielle (relâcher sans s&apos;endormir)</li>
                  <li className="flex items-start gap-1.5">✓ Récupération Flash en 5 minutes</li>
                  <li className="flex items-start gap-1.5">✓ Gestion du sommeil et des micro-siestes</li>
                  <li className="flex items-start gap-1.5">✓ Évacuation de la charge mentale en fin de journée</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Jour 3 (7 h)</span>
                <h4 className="text-base font-bold text-white">Imagerie &amp; Lucidité Opérationnelle</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">✓ Répétition mentale des gestes et interventions clés</li>
                  <li className="flex items-start gap-1.5">✓ Pré-activation mentale avant les temps forts</li>
                  <li className="flex items-start gap-1.5">✓ Plan d&apos;autonomie personnalisé</li>
                  <li className="flex items-start gap-1.5">✓ Remise du livret technique &amp; attestation de fin</li>
                </ul>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Award size={16} className="text-amber-400 shrink-0" />
                <span>Validation par mise en pratique guidée et QCM final (seuil 70%)</span>
              </div>
              <a
                href="#diagnostic"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition"
              >
                Vérifier mon éligibilité de financement →
              </a>
            </div>

          </div>

          {/* Formats de déploiement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Building2 size={20} />
              </div>
              <h4 className="text-base font-bold text-white">Pour les Institutions</h4>
              <p className="text-xs text-slate-400">Mairies, hôpitaux, collectivités, PME</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formation d&apos;équipes complètes sur votre site. Ateliers pour agents en première ligne et accompagnement des encadrants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <User size={20} />
              </div>
              <h4 className="text-base font-bold text-white">Pour les Particuliers</h4>
              <p className="text-xs text-slate-400">Soignants, enseignants, indépendants</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sessions inter-entreprises ou à distance. Rythme progressif et suivi individuel bienveillant avec Mélissa ou Régis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles size={20} />
              </div>
              <h4 className="text-base font-bold text-white">Format Sur Mesure</h4>
              <p className="text-xs text-slate-400">Sessions flash ou intensives</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Intervention modulée selon votre agenda : présentiel dans nos locaux varois ou déplacements partout en France.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 8. UNE CONFIANCE TOP® (AVIS REELS & PREUVE SOCIALE) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">Témoignages &amp; Retours Terrain</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Une Confiance TOP®
            </h2>
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-sm">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-white ml-2 text-xs">Excellence Pédagogique vérifiée</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  « En service d&apos;urgence hospitalier, on ne s&apos;arrête jamais. Les protocoles de respiration relaxante et la récupération flash m&apos;ont permis d&apos;éviter le craquage. C&apos;est du concret absolu. »
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-xs">Aurélie B.</div>
                <div className="text-[11px] text-slate-400">Infirmière DE • Milieu hospitalier</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  « Régis et Mélissa sont d&apos;une rigueur exceptionnelle. Aucun blabla ésotérique. Tout s&apos;explique par la physiologie. Toute notre équipe de direction a suivi la session 3 jours. »
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-xs">Yohan D.</div>
                <div className="text-[11px] text-slate-400">Directeur Général • PME Services</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                  « Le livret officiel est toujours sur mon bureau. En cas de pic de stress avant un comité difficile, je prends 3 minutes pour appliquer la routine TOP. L&apos;effet est bluffant. »
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-xs">Nathalie M.</div>
                <div className="text-[11px] text-slate-400">Responsable RH • Collectivité territoriale</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 9. FOIRE AUX QUESTIONS (FAQ INTERACTIVE) ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Questions Fréquentes
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Tout ce que vous devez savoir avant de débuter votre parcours TOP®.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-400 transition"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─── 10. TUNNEL DE CONTACT & RÉSERVATION DE DIAGNOSTIC OFFERT ─── */}
      <section id="diagnostic" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto">
          
          <div className="rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 uppercase tracking-wider">
                Échange Direct • Sans Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
                Réservez votre Diagnostic Offert (15 min)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mélissa vous répond directement au téléphone ou sur WhatsApp pour évaluer votre niveau d&apos;urgence, étudier vos droits de financement (OPCO / FAF) et vous orienter vers la session la plus adaptée.
              </p>
            </div>

            {/* Quick Contact Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <a
                href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20r%C3%A9server%20mon%20diagnostic%20offert%20de%2015%20minutes%20pour%20la%20formation%20FI-TOP."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition hover:scale-102"
              >
                <MessageSquare size={18} />
                <span>Échanger sur WhatsApp avec Mélissa</span>
              </a>

              <a
                href="tel:+33767246825"
                className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition hover:scale-102"
              >
                <Phone size={18} className="text-amber-400" />
                <span>Appeler le 07 67 24 68 25</span>
              </a>
            </div>

            <div className="relative flex py-2 items-center mb-8">
              <div className="flex-grow border-t border-slate-800" />
              <span className="flex-shrink mx-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                ou laissez vos coordonnées ci-dessous
              </span>
              <div className="flex-grow border-t border-slate-800" />
            </div>

            {/* Formulaire simple et direct */}
            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Merci pour votre message !</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Votre messagerie s&apos;est ouverte pour envoyer votre demande. Mélissa vous répondra personnellement sous 24 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nom et Prénom *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex : Sophie Martin"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Adresse Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sophie@exemple.fr"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vous êtes ?</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none transition"
                    >
                      <option value="particulier">Particulier (soignant, enseignant, libéral)</option>
                      <option value="institution">Institution / Mairie / Collectivité</option>
                      <option value="entreprise">Entreprise / Direction RH</option>
                      <option value="autre">Autre situation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Votre situation / Vos attentes</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez brièvement votre contexte ou votre besoin..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-sm outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
                >
                  Envoyer ma demande de diagnostic offert (15 min) →
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Vos données restent strictement confidentielles. Aucun démarchage commercial agressif.
                </p>
              </form>
            )}

            {/* Téléchargement Livret en bas de page */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <a
                href="/livret-top.pdf"
                download="Livret-Officiel-FITOP-OTOP.pdf"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition"
              >
                <Download size={14} />
                <span>Télécharger également la plaquette livret officielle au format PDF</span>
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 11. FOOTER DÉDIÉ ET ÉPURÉ (AUCUN LIEN POLLUANT) ─── */}
      <footer className="py-8 px-4 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-2">
          <p>© {new Date().getFullYear()} Ô&apos;TOP Formations • SAS O&apos;TOP FORMATION (SIRET 990 443 186 00012) — Ollioules (Var).</p>
          <p>
            Formations certifiantes portées par <strong>Eloq-One</strong>, organisme certifié Qualiopi. 
            La Méthode TOP® est une marque déposée enseignée dans un cadre de formation professionnelle.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-400">
            <Link href="/cgv" className="hover:underline">Conditions Générales de Vente</Link>
            <span>•</span>
            <Link href="/mentions-legales" className="hover:underline">Mentions Légales</Link>
            <span>•</span>
            <Link href="/politique-confidentialite" className="hover:underline">Politique de Confidentialité</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
