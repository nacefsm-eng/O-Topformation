'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Sparkles,
  Heart,
  Clock,
  CheckCircle2,
  Download,
  Phone,
  MessageCircle,
  Users,
  Building2,
  GraduationCap,
  Award,
  ChevronDown,
  ArrowRight,
  Star,
  Zap,
  Target,
  FileText,
  Compass,
  Smile,
  Activity,
  Check,
  Send,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function PlaquetteTopView() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState<number>(0);
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    profil: 'Entreprise / RH',
    participants: '1 à 5 personnes',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  // Forcer le thème clair sur cette landing page pour garantir 100% de lisibilité
  useEffect(() => {
    try {
      const prevTheme = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', 'clair');
      return () => {
        if (prevTheme) {
          document.documentElement.setAttribute('data-theme', prevTheme);
        }
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande FI-TOP — ${formState.nom} ${formState.prenom}`);
    const body = encodeURIComponent(
      `Nom complet: ${formState.nom} ${formState.prenom}\nEmail: ${formState.email}\nTéléphone: ${formState.telephone}\nProfil: ${formState.profil}\nNombre de personnes: ${formState.participants}\n\nMessage ou besoin spécifique:\n${formState.message}`
    );
    window.location.href = `mailto:formation.rmcf@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const whatsappDirectUrl =
    'https://wa.me/33767246825?text=' +
    encodeURIComponent(
      "Bonjour Mélissa, j'ai consulté la plaquette de la Formation Initiale FI-TOP® (3 jours) et je souhaite échanger sur nos besoins et les prochaines sessions."
    );

  const modules = [
    {
      num: 'Module 1',
      title: 'Comprendre le stress pour mieux le gérer',
      icon: Activity,
      subtitle: 'La météo intérieure & la cartographie des signaux d’alerte',
      content: [
        'Mécanismes neurophysiologiques et hormonaux du stress (alarme, résistance, épuisement).',
        'Identifier sa propre « météo intérieure » et cartographier ses signaux corporels précoces.',
        'Compréhension des 3 piliers TOP : Respiration, Relaxation neuromusculaire, Imagerie mentale.',
        'Stopper l’emballement émotionnel avant d’atteindre le stade de surchauffe ou de blocage.',
      ],
    },
    {
      num: 'Module 2',
      title: 'Reprendre le contrôle de ses émotions par le souffle',
      icon: Compass,
      subtitle: 'Passer du mode automatique au mode conscient',
      content: [
        'Régulation immédiate du système nerveux autonome (sympathique / parasympathique).',
        'Différence fondamentale entre respiration réflexe et respiration consciente régulée.',
        'Protocole de respiration relaxante « 4-6 » et cohérence cardiaque : retour au calme en 90 secondes.',
        'Ajuster sa ventilation en direct selon le contexte opérationnel sans attirer l’attention.',
      ],
    },
    {
      num: 'Module 3',
      title: 'Récupérer et se régénérer',
      icon: Clock,
      subtitle: 'Sommeil, micro-siestes & restauration de la vigilance',
      content: [
        'Technique militaire de la micro-sieste flash : 5 à 15 minutes pour restaurer 2h d’énergie cognitive.',
        'Restauration active des capacités physiques et mentales après une situation exigeante.',
        'Désactiver l’hypervigilance le soir pour favoriser un sommeil profond et réparateur.',
        'Rituel de décompression de fin de journée pour couper sereinement entre travail et vie personnelle.',
      ],
    },
    {
      num: 'Module 4',
      title: 'Se dynamiser avant l’action',
      icon: Zap,
      subtitle: 'Le pouvoir de la posture & l’activation psychomotrice',
      content: [
        'L’impact direct de la posture corporelle sur l’état d’esprit et l’assurance.',
        'Activation psychomotrice rapide avant une intervention, une réunion à enjeu ou un examen.',
        'Sortir de l’hypovigilance et des coups de fatigue de milieu de journée sans excès de caféine.',
        'Mobiliser son tonus musculaire et sa vivacité d’esprit de façon ciblée.',
      ],
    },
    {
      num: 'Module 5',
      title: 'Renforcer sa confiance en soi & son estime',
      icon: Heart,
      subtitle: 'L’ancrage positif & la solidité intérieure',
      content: [
        'Neutraliser le discours interne négatif et les pensées parasites déstabilisantes.',
        'Renouer avec l’estime de soi en s’appuyant sur ses réussites et ses forces réelles.',
        'Création d’un « ancrage ressource » personnalisé : activer calme et détermination sur commande.',
        'Garder sa solidité émotionnelle face aux critiques et aux environnements déstabilisants.',
      ],
    },
    {
      num: 'Module 6',
      title: 'Se motiver et se programmer à la réussite',
      icon: Target,
      subtitle: 'Visualisation mentale efficace & clarification de l’objectif',
      content: [
        'Définir des objectifs clairs, réalistes, motivants et porteurs de sens.',
        'Organiser et mobiliser l’ensemble de ses ressources personnelles et collectives.',
        'Répétition mentale pré-action : s’entraîner dans sa tête à dérouler l’action avec succès avant de la vivre.',
        'Développer une résilience durable face aux imprévus et aux difficultés.',
      ],
    },
    {
      num: 'Module 7',
      title: 'Mises en situation pratiques, boîte à outils & évaluation',
      icon: Award,
      subtitle: 'Autonomie complète & attestation officielle',
      content: [
        'Construction de votre boîte à outils TOP personnalisée pour votre environnement professionnel.',
        'Jeux de rôles et simulations de situations réelles complexes (conflits, surcharges, urgences).',
        'Validation continue des compétences pratiques par les formateurs.',
        'Remise de l’attestation officielle de fin de formation (21h) délivrée par Ô’TOP Formations.',
      ],
    },
  ];

  const applications = [
    {
      title: 'Entreprises & Dirigeants',
      category: 'Performance Durable & QVT',
      icon: Building2,
      img: '/entreprise-focus-top.jpg',
      desc: 'Prévention des risques psycho-sociaux (RPS) et du burn-out. Permet aux dirigeants, cadres et collaborateurs de décider avec lucidité sous pression et de maintenir un climat de travail serein.',
      points: [
        'Régulation de la charge mentale des managers et salariés',
        'Désamorçage des conflits internes et amélioration de la cohésion',
        'Maintien d’une haute efficacité sans compromettre la santé',
      ],
    },
    {
      title: 'Milieu Scolaire & Éducatif',
      category: 'Programme pHARe & Climat de Classe',
      icon: GraduationCap,
      img: '/ecole-phare-top.jpg',
      badge: 'Spécialité Terrain Ô’TOP',
      desc: 'Déployé dans les collèges et lycées pour prévenir le harcèlement scolaire (programme pHARe), soutenir les enseignants face au stress et apaiser les tensions chez les élèves.',
      points: [
        'Protocoles flash "5 minutes TOP" en classe pour calmer les esprits',
        'Soutien aux élèves victimes (sécurité intérieure, restauration de l’estime)',
        'Canalisation de l’impulsivité et travail d’empathie avec auteurs et témoins',
        'Posture éducative sereine et prévention de l’épuisement des enseignants',
      ],
    },
    {
      title: 'Métiers sous Haute Pression',
      category: 'Soignants, Secours & Sécurité',
      icon: Shield,
      img: '/soignants-pause-top.jpg',
      desc: 'Médecins, soignants, pompiers, agents de sécurité : ceux qui portent les autres au quotidien. Les TOP permettent de rester lucide dans l’urgence et de couper véritablement une fois la garde terminée.',
      points: [
        'Techniques de micro-récupération entre deux interventions critiques',
        'Protection contre l’usure de compassion et la fatigue émotionnelle',
        'Clarté cognitive et concentration maintenue lors des décisions vitales',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sophie M.',
      role: 'Principale adjointe de collège (Var)',
      text: 'L’intervention de Mélissa et Régis sur le programme pHARe a transformé nos classes. Les 5 minutes de respiration TOP avant les cours ont diminué considérablement les tensions de couloir. Indispensable pour l’équipe pédagogique.',
      note: 5,
    },
    {
      name: 'Thomas D.',
      role: 'Directeur Général PME (Région PACA)',
      text: 'Régis apporte la rigueur de l’Armée de l’Air et Mélissa apporte une écoute et une précision remarquables sur le sommeil et le stress. Notre comité de direction a été conquis. Une formation utile dès le lendemain.',
      note: 5,
    },
    {
      name: 'Dr. Valérie B.',
      role: 'Médecin urgentiste & Cheffe de service',
      text: 'Aux urgences, la pression est permanente. Les micro-siestes et la respiration relaxante apprises lors des 3 jours font partie intégrante de mon quotidien. Je la recommande à tous les soignants.',
      note: 5,
    },
  ];

  return (
    <div
      id="plaquette-top-root"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
      className="min-h-screen selection:bg-[#dc2626] selection:text-white"
    >
      {/* ─── BANDEAU SUPÉRIEUR TRICOLORE Ô'TOP ─── */}
      <div
        style={{ backgroundColor: '#002b7a', borderBottom: '2px solid #dc2626' }}
        className="text-white text-xs py-2.5 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ef4444] animate-pulse"></span>
            <span className="font-semibold text-white">
              <strong>Sessions 2026 :</strong> Ollioules (Var) & Intra-entreprise sur toute la France | Financement OPCO & FAF
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold">
            <a
              href="tel:+33767246825"
              className="text-white hover:text-[#93c5fd] flex items-center gap-1.5 transition"
            >
              <Phone size={13} className="text-[#ef4444]" />
              <span>07 67 24 68 25</span>
            </a>
            <span className="text-blue-300">|</span>
            <a
              href="/livret-top.pdf"
              download="Livret-Accueil-TOP.pdf"
              className="text-white hover:text-[#93c5fd] flex items-center gap-1 transition"
            >
              <Download size={13} className="text-[#ef4444]" />
              <span>Télécharger le Livret PDF (34 p.)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── HEADER STANDALONE Ô'TOP (BLEU & ROUGE, AUCUN LIEN SITE GLOBAL) ─── */}
      <header
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="sticky top-0 z-40 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Officiel Ô'TOP */}
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.png"
              alt="Ô'TOP Formations"
              className="w-12 h-12 rounded-full object-contain p-0.5 shadow-sm border-2 border-[#003492]"
            />
            <div>
              <div className="text-lg font-black tracking-tight text-[#003492] flex items-center gap-1.5">
                Ô&apos;TOP <span className="text-otop-red" style={{ color: '#dc2626' }}>FORMATIONS</span>
              </div>
              <div
                style={{ color: '#475569' }}
                className="text-[11px] font-bold uppercase tracking-wider"
              >
                Pôle Bien-être & Performance • Méthode TOP®
              </div>
            </div>
          </div>

          {/* Navigation Ancres Internes */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-[#1e293b]">
            <a href="#methode" className="hover:text-[#003492] transition">
              La Méthode TOP®
            </a>
            <a href="#piliers" className="hover:text-[#003492] transition">
              Les 3 Piliers
            </a>
            <a href="#applications" className="hover:text-[#003492] transition">
              Applications & pHARe
            </a>
            <a href="#programme" className="hover:text-[#003492] transition">
              Programme FI-TOP (3j)
            </a>
            <a href="#formateurs" className="hover:text-[#003492] transition">
              Vos Formateurs
            </a>
            <a href="#modalites" className="hover:text-[#003492] transition">
              Modalités & Financement
            </a>
          </nav>

          {/* Boutons d'Action Header */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs shadow-md transition-all hover:scale-105"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp Mélissa</span>
            </a>
            <a
              href="#contact"
              style={{ backgroundColor: '#dc2626' }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-[#b91c1c] text-white font-extrabold text-xs shadow-md transition-all hover:scale-105"
            >
              <span>Devis & Diagnostic</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO SECTION AVEC CONTRASTE TOTAL & COULEURS BLEU / BLANC / ROUGE ─── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Colonne Gauche : Pitch & Appel à l'action */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div
                style={{
                  backgroundColor: '#dbeafe',
                  color: '#003492',
                  border: '1px solid #bfdbfe',
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black shadow-sm"
              >
                <Sparkles size={14} className="text-[#dc2626]" />
                <span>Plaquette Officielle • Formation Initiale FI-TOP® (3 jours / 21h)</span>
              </div>

              <h1
                style={{ color: '#0a1128' }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18]"
              >
                Les Techniques d&apos;Optimisation du Potentiel{' '}
                <span style={{ color: '#003492' }}>(Méthode </span>
                <span style={{ color: '#dc2626' }}>TOP®)</span>
              </h1>

              <p
                style={{ color: '#003492' }}
                className="text-lg sm:text-xl font-black"
              >
                « 2 Voix, 1 Mission : former pour transformer. »
              </p>

              <p
                style={{ color: '#1e293b' }}
                className="text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Conçues initialement pour les forces armées et les pilotes, les TOP® sont une boîte à outils
                psycho-physiologique concrète pour{' '}
                <strong style={{ color: '#003492' }}>
                  réguler le stress, optimiser la récupération et préserver sa lucidité
                </strong>{' '}
                sans s’épuiser. Animée par le tandem <strong>Mélissa Jennadi</strong> et{' '}
                <strong>Régis Domergue</strong>.
              </p>

              {/* 4 Avantages Clés Livret */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                <div
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-start gap-2.5 p-3 rounded-xl shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-[#003492] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong style={{ color: '#0a1128' }} className="block font-bold">
                      100% Autonome en 3 jours
                    </strong>
                    <span style={{ color: '#475569' }}>Des outils de 2 à 5 min utilisables en poste de travail.</span>
                  </div>
                </div>

                <div
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-start gap-2.5 p-3 rounded-xl shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong style={{ color: '#0a1128' }} className="block font-bold">
                      Expertise Opérationnelle
                    </strong>
                    <span style={{ color: '#475569' }}>10 ans Armée de l’Air & accompagnement éducatif pHARe.</span>
                  </div>
                </div>

                <div
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-start gap-2.5 p-3 rounded-xl shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-[#003492] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong style={{ color: '#0a1128' }} className="block font-bold">
                      Petits Groupes (Max 12)
                    </strong>
                    <span style={{ color: '#475569' }}>70% de pratique et suivi individualisé bienveillant.</span>
                  </div>
                </div>

                <div
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-start gap-2.5 p-3 rounded-xl shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-[#dc2626] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong style={{ color: '#0a1128' }} className="block font-bold">
                      Financement Pris en Charge
                    </strong>
                    <span style={{ color: '#475569' }}>Éligible OPCO, FAFCEA, FIF-PL & plan employeur.</span>
                  </div>
                </div>
              </div>

              {/* Boutons d'Action Principaux */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#contact"
                  style={{ backgroundColor: '#dc2626' }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl hover:bg-[#b91c1c] text-white font-extrabold text-sm shadow-lg shadow-red-700/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Réserver mon diagnostic offert (15 min)</span>
                </a>

                <a
                  href="/livret-top.pdf"
                  download="Livret-Accueil-TOP.pdf"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#003492',
                    border: '2px solid #003492',
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-sm shadow-sm transition hover:bg-blue-50"
                >
                  <Download size={17} className="text-[#dc2626]" />
                  <span>Livret officiel PDF (34 p.)</span>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-md transition hover:scale-105"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Colonne Droite : Carte Visuelle des 2 Formateurs avec Photos & Badges */}
            <div className="lg:col-span-5">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #dbeafe',
                  boxShadow: '0 20px 45px -10px rgba(0, 52, 146, 0.15)',
                }}
                className="relative mx-auto max-w-md rounded-3xl p-6"
              >
                {/* Badge en haut */}
                <div
                  style={{ backgroundColor: '#003492', border: '1px solid #1e40af' }}
                  className="absolute -top-3.5 right-6 text-white text-[11px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
                  <span>Tandem d&apos;Experts Certifiés</span>
                </div>

                <div className="text-center pb-4 border-b border-slate-100">
                  <h3 style={{ color: '#003492' }} className="text-lg font-black">
                    Ô&apos;TOP FORMATIONS
                  </h3>
                  <p style={{ color: '#dc2626' }} className="text-xs font-bold">
                    « Former pour transformer durablement »
                  </p>
                </div>

                {/* Les 2 Formateurs côte à côte */}
                <div className="grid grid-cols-2 gap-4 my-5">
                  {/* Régis Domergue */}
                  <div
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
                    className="text-center p-3 rounded-2xl"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-2.5">
                      <img
                        src="/team-regis.png"
                        alt="Régis Domergue"
                        className="w-full h-full rounded-2xl object-cover shadow-md border-2 border-[#003492]"
                      />
                    </div>
                    <div style={{ color: '#0a1128' }} className="font-black text-sm leading-tight">
                      Régis DOMERGUE
                    </div>
                    <div
                      style={{ color: '#003492' }}
                      className="text-[10px] font-black uppercase tracking-wide mt-0.5"
                    >
                      Co-fondateur & Expert TOP
                    </div>
                    <p style={{ color: '#475569' }} className="text-[11px] mt-1 leading-snug font-medium">
                      10 ans Armée de l&apos;Air et de l&apos;Espace • Facteurs humains & performance
                    </p>
                  </div>

                  {/* Mélissa Jennadi */}
                  <div
                    style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
                    className="text-center p-3 rounded-2xl"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-2.5">
                      <img
                        src="/team-melyssa.png"
                        alt="Mélissa Jennadi"
                        className="w-full h-full rounded-2xl object-cover shadow-md border-2 border-[#dc2626]"
                      />
                    </div>
                    <div style={{ color: '#0a1128' }} className="font-black text-sm leading-tight">
                      Mélissa JENNADI
                    </div>
                    <div
                      style={{ color: '#dc2626' }}
                      className="text-[10px] font-black uppercase tracking-wide mt-0.5"
                    >
                      Fondatrice & Pédagogie
                    </div>
                    <p style={{ color: '#475569' }} className="text-[11px] mt-1 leading-snug font-medium">
                      Spécialiste Stress, Sommeil & Fatigue • Accompagnement terrain éducatif
                    </p>
                  </div>
                </div>

                {/* Encadré d'affirmation du cursus */}
                <div
                  style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                  }}
                  className="rounded-2xl p-3.5 text-xs space-y-1"
                >
                  <div
                    style={{ color: '#003492' }}
                    className="font-black flex items-center gap-1.5"
                  >
                    <Award size={15} className="text-[#dc2626]" />
                    <span>Cursus Unique : FI-TOP (3 jours / 21h)</span>
                  </div>
                  <p style={{ color: '#334155' }} className="leading-relaxed text-[11px] font-medium">
                    Nous ne faisons pas de long cursus de « maître praticien » : notre choix engagé est la{' '}
                    <strong>Formation Initiale de 3 jours</strong>, intensive, pragmatique et immédiatement applicable.
                  </p>
                </div>

                <div
                  style={{ color: '#64748b' }}
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold"
                >
                  <span className="flex items-center gap-1" style={{ color: '#003492' }}>
                    <Star size={13} className="text-[#dc2626] fill-[#dc2626]" /> 5.0/5 Satisfaction
                  </span>
                  <span>Ollioules (Var) & France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1 : QU'EST-CE QUE LES TOP® ? AVEC VRAIE PHOTO DU MANUEL OFFICIEL ─── */}
      <section
        id="methode"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-5">
              <span
                style={{
                  backgroundColor: '#eff6ff',
                  color: '#003492',
                  border: '1px solid #bfdbfe',
                }}
                className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
              >
                Origine & Méthodologie
              </span>
              <h2
                style={{ color: '#0a1128' }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
              >
                Qu&apos;est-ce que la Méthode TOP® ?
              </h2>
              <p
                style={{ color: '#1e293b' }}
                className="text-base sm:text-lg leading-relaxed font-medium"
              >
                Créées dans les années 1990 par le Dr Édith Perreaut-Pierre au sein des forces armées et du sport de
                haut niveau, les Techniques d’Optimisation du Potentiel (TOP®) constituent la méthode de référence pour{' '}
                <strong style={{ color: '#003492' }}>faire face à la pression, récupérer vite et décider avec clarté</strong>.
              </p>
              <p style={{ color: '#334155' }} className="text-sm leading-relaxed font-medium">
                Ce n’est ni de la relaxation passive ni de la théorie abstraite : c’est une véritable boîte à outils
                psycho-physiologique d’action immédiate, utilisable en tenue de travail, les yeux ouverts, en quelques
                secondes ou minutes.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div className="border-l-4 border-[#003492] pl-4">
                  <div className="text-2xl font-black text-[#003492]">30+ ans</div>
                  <div className="text-xs font-bold text-[#64748b]">D&apos;expérimentation terrain</div>
                </div>
                <div className="border-l-4 border-[#dc2626] pl-4">
                  <div className="text-2xl font-black text-[#dc2626]">70%</div>
                  <div className="text-xs font-bold text-[#64748b]">Pratique & mises en situation</div>
                </div>
                <div className="border-l-4 border-[#003492] pl-4">
                  <div className="text-2xl font-black text-[#003492]">21h</div>
                  <div className="text-xs font-bold text-[#64748b]">Autonomie totale en 3 jours</div>
                </div>
              </div>
            </div>

            {/* Photo Réelle du Manuel / Guide TOP Officiel */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/manuel-top-guide.jpg"
                  alt="Guide et manuel officiel de formation aux Techniques d'Optimisation du Potentiel (TOP)"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span
                      style={{ backgroundColor: '#dc2626' }}
                      className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 inline-block"
                    >
                      Supports Inclus
                    </span>
                    <h4 className="text-base sm:text-lg font-bold">
                      Le Manuel Pédagogique Officiel remis à chaque stagiaire
                    </h4>
                    <p className="text-xs text-slate-200 mt-1">
                      Fiches protocoles prêtes à l’emploi, grilles d’auto-évaluation et exercices quotidiens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Cartes de Valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm hover:border-[#003492] transition"
            >
              <div
                style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              >
                <Compass size={24} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-lg font-bold mb-2">
                Simplicité & Autonomie
              </h3>
              <p style={{ color: '#334155' }} className="text-xs sm:text-sm leading-relaxed font-medium">
                Aucun équipement nécessaire. Les exercices s’exécutent discrètement : assis à votre poste, en marchant ou
                avant un rendez-vous à fort enjeu.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm hover:border-[#dc2626] transition"
            >
              <div
                style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              >
                <Shield size={24} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-lg font-bold mb-2">
                Validation Scientifique
              </h3>
              <p style={{ color: '#334155' }} className="text-xs sm:text-sm leading-relaxed font-medium">
                Fondée sur la neurophysiologie, la chronobiologie et la variabilité cardiaque. Des résultats mesurables
                sur la baisse du cortisol et la régulation du sommeil.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm hover:border-[#003492] transition"
            >
              <div
                style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              >
                <Zap size={24} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-lg font-bold mb-2">
                Action dans l’Instant
              </h3>
              <p style={{ color: '#334155' }} className="text-xs sm:text-sm leading-relaxed font-medium">
                Contrairement au yoga ou à la méditation passive, les TOP s’activent dans le feu de l’action pour
                mobiliser votre lucidité quand chaque seconde compte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 : LES 3 PILIERS FONDAMENTAUX (BLEU / BLANC / ROUGE) ─── */}
      <section
        id="piliers"
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Fondations Pédagogiques
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 tracking-tight"
            >
              Les 3 Piliers de la Méthode TOP®
            </h2>
            <p style={{ color: '#334155' }} className="mt-4 text-base font-medium">
              Tout le cursus repose sur l’apprentissage de trois leviers physiologiques et cognitifs complémentaires :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pilier 1 : Respiration */}
            <div
              style={{ backgroundColor: '#ffffff', border: '2px solid #bfdbfe' }}
              className="rounded-3xl p-8 shadow-md flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ backgroundColor: '#003492' }}
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black text-xl mb-6 shadow-md"
                >
                  1
                </div>
                <h3 style={{ color: '#003492' }} className="text-xl font-black mb-3">
                  La Respiration
                </h3>
                <p style={{ color: '#334155' }} className="text-sm font-medium leading-relaxed mb-6">
                  Le levier physiologique le plus rapide pour calmer le cœur et réoxygéner le cerveau sous pression.
                </p>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#003492] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Respiration relaxante « 4-6 » :</strong> abaissement immédiat du rythme cardiaque et de
                      l’angoisse.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#003492] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Respiration dynamisante :</strong> réactivation de la vigilance sans palpitations avant un
                      défi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#003492] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Cohérence cardiaque intégrée :</strong> régulation durable de l’humeur et du cortisol.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                style={{ color: '#003492', borderTop: '1px solid #e2e8f0' }}
                className="mt-6 pt-4 text-[11px] font-black"
              >
                ⚡ Effet : Apaisement physiologique en 90 secondes
              </div>
            </div>

            {/* Pilier 2 : Relaxation & Récupération */}
            <div
              style={{ backgroundColor: '#ffffff', border: '2px solid #fecaca' }}
              className="rounded-3xl p-8 shadow-md flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ backgroundColor: '#dc2626' }}
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black text-xl mb-6 shadow-md"
                >
                  2
                </div>
                <h3 style={{ color: '#dc2626' }} className="text-xl font-black mb-3">
                  Relaxation & Récupération
                </h3>
                <p style={{ color: '#334155' }} className="text-sm font-medium leading-relaxed mb-6">
                  Restaurer ses réserves d’énergie physique et nerveuse au fil de la journée pour éliminer la fatigue.
                </p>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#dc2626] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Relaxation neuromusculaire différentielle :</strong> relâcher les trapèzes et la mâchoire
                      assis à son bureau.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#dc2626] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Micro-siestes flash (5 à 15 min) :</strong> technique militaire pour récupérer 2h de
                      lucidité.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#dc2626] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Régulation de la météo intérieure :</strong> repérer la fatigue avant d’atteindre le
                      point de rupture.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                style={{ color: '#dc2626', borderTop: '1px solid #e2e8f0' }}
                className="mt-6 pt-4 text-[11px] font-black"
              >
                ⚡ Effet : Regain d’énergie & élimination des toxines de stress
              </div>
            </div>

            {/* Pilier 3 : Imagerie Mentale */}
            <div
              style={{ backgroundColor: '#ffffff', border: '2px solid #bfdbfe' }}
              className="rounded-3xl p-8 shadow-md flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ backgroundColor: '#002b7a' }}
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black text-xl mb-6 shadow-md"
                >
                  3
                </div>
                <h3 style={{ color: '#002b7a' }} className="text-xl font-black mb-3">
                  L’Imagerie Mentale
                </h3>
                <p style={{ color: '#334155' }} className="text-sm font-medium leading-relaxed mb-6">
                  Programmer son cerveau à la réussite et désamorcer le stress anticipatoire par la visualisation.
                </p>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#002b7a] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Répétition mentale pré-action :</strong> visualiser le déroulement idéal d’un entretien ou
                      d’un cours.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#002b7a] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Ancrage ressource :</strong> conditionnement pour convoquer instantanément le calme sur
                      commande.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#002b7a] shrink-0 mt-0.5" />
                    <span style={{ color: '#1e293b' }} className="font-medium">
                      <strong>Débriefing positif :</strong> ancrer ce qui a marché pour bâtir une confiance
                      inébranlable.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                style={{ color: '#002b7a', borderTop: '1px solid #e2e8f0' }}
                className="mt-6 pt-4 text-[11px] font-black"
              >
                ⚡ Effet : Clarté cognitive & assurance en situation critique
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 : OÙ S'APPLIQUENT LES TOP ? AVEC 3 IMAGES DIFFÉRENCIÉES ─── */}
      <section
        id="applications"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Champs d&apos;Application Concrets
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 tracking-tight"
            >
              Où s&apos;appliquent les Techniques TOP® ?
            </h2>
            <p style={{ color: '#334155' }} className="mt-4 text-base font-medium">
              Extraits directs du livret d’accueil Ô&apos;TOP Formations : les contextes où nos outils font la différence.
            </p>
          </div>

          {/* Grille des 3 Grands Domaines avec Images Uniques */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {applications.map((app, idx) => {
              const IconComp = app.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: app.badge ? '2px solid #003492' : '1px solid #cbd5e1',
                  }}
                  className="rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition"
                >
                  <div>
                    {/* Image d'illustration spécifique */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={app.img}
                        alt={app.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="text-xs font-black flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                          <IconComp size={14} className="text-[#ef4444]" />
                          <span>{app.title}</span>
                        </span>
                        {app.badge && (
                          <span
                            style={{ backgroundColor: '#dc2626' }}
                            className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm"
                          >
                            {app.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div style={{ color: '#003492' }} className="text-xs font-extrabold uppercase mb-1">
                        {app.category}
                      </div>
                      <p style={{ color: '#334155' }} className="text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                        {app.desc}
                      </p>

                      <ul className="space-y-2 text-xs">
                        {app.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <Check size={14} className="text-[#003492] shrink-0 mt-0.5 font-bold" />
                            <span style={{ color: '#1e293b' }} className="font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── ENCADRÉ FOCUS DU LIVRET : PROGRAMME PHARE & MILIEU SCOLAIRE ── */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid #003492',
              boxShadow: '0 20px 45px -10px rgba(0, 52, 146, 0.12)',
            }}
            className="rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
          >
            <div className="max-w-6xl">
              <div
                style={{ backgroundColor: '#dc2626' }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-black uppercase tracking-wider mb-4 shadow-sm"
              >
                <GraduationCap size={16} />
                <span>Cas Réel • Pages 13 à 16 du Livret d&apos;Accueil Officiel</span>
              </div>

              <h3 style={{ color: '#0a1128' }} className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
                Milieu Scolaire & Lutte contre le Harcèlement (Programme pHARe)
              </h3>

              <p style={{ color: '#1e293b' }} className="text-sm sm:text-base leading-relaxed mb-8 font-medium max-w-4xl">
                Les Techniques d’Optimisation du Potentiel sont déployées par Ô&apos;TOP Formations dans les
                collèges, lycées et rectorats pour <strong style={{ color: '#003492' }}>prévenir et désamorcer le harcèlement scolaire</strong>, restaurer un climat de
                classe serein et apporter des outils concrets et immédiatement applicables aux élèves, enseignants et personnels de direction.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Pilier 1 */}
                <div
                  style={{ backgroundColor: '#f8fafc', border: '1.5px solid #bfdbfe' }}
                  className="p-5 rounded-2xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#003492]"></span>
                      <strong style={{ color: '#003492' }} className="text-sm font-black">
                        1. Soutien aux Victimes
                      </strong>
                    </div>
                    <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                      Réduction immédiate de l’angoisse, sentiment de sécurité intérieure retrouvé, affirmation de soi et
                      préparation sereine au retour en classe.
                    </p>
                  </div>
                  <div style={{ color: '#003492' }} className="mt-4 pt-3 border-t border-blue-100 text-[11px] font-bold">
                    Outils : Respiration 4-6 & Ancrage
                  </div>
                </div>

                {/* Pilier 2 */}
                <div
                  style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fecaca' }}
                  className="p-5 rounded-2xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]"></span>
                      <strong style={{ color: '#dc2626' }} className="text-sm font-black">
                        2. Auteurs & Témoins
                      </strong>
                    </div>
                    <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                      Canalisation de l’impulsivité, prise de recul avant d’agir, renforcement de l’empathie et
                      responsabilisation bienveillante.
                    </p>
                  </div>
                  <div style={{ color: '#dc2626' }} className="mt-4 pt-3 border-t border-red-100 text-[11px] font-bold">
                    Outils : Stop Émotionnel & Relaxation
                  </div>
                </div>

                {/* Pilier 3 */}
                <div
                  style={{ backgroundColor: '#eff6ff', border: '1.5px solid #bfdbfe' }}
                  className="p-5 rounded-2xl shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#003492]"></span>
                      <strong style={{ color: '#003492' }} className="text-sm font-black">
                        3. Équipes Éducatives
                      </strong>
                    </div>
                    <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                      Posture calme lors d’entretiens délicats, désamorçage de la fatigue professionnelle et protocoles « 5
                      minutes TOP » en début de cours.
                    </p>
                  </div>
                  <div style={{ color: '#003492' }} className="mt-4 pt-3 border-t border-blue-100 text-[11px] font-bold">
                    Outils : SAS de décompression & Focus
                  </div>
                </div>
              </div>

              {/* Photo d'intervention pHARe & Contact */}
              <div
                style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                className="rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-full md:w-56 h-36 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                  <img
                    src="/ecole-phare-top.jpg"
                    alt="Atelier TOP en classe pour le programme pHARe"
                    className="w-full h-full object-cover"
                  />
                  <div
                    style={{ backgroundColor: '#003492' }}
                    className="absolute top-2 left-2 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow"
                  >
                    Atelier en classe
                  </div>
                </div>
                <div className="space-y-1.5 text-center md:text-left">
                  <div style={{ color: '#0a1128' }} className="font-black text-sm">
                    Intervention terrain animée par Mélissa Jennadi & Régis Domergue
                  </div>
                  <p style={{ color: '#475569' }} className="text-xs leading-relaxed">
                    Déplacements sur site dans les établissements scolaires (collèges, lycées, cités scolaires) en région PACA et partout en France. Séances adaptées aux élèves comme aux équipes pédagogiques.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  style={{ backgroundColor: '#dc2626' }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl hover:bg-[#b91c1c] text-white font-black text-xs shadow-lg transition hover:scale-105"
                >
                  <span>Mettre en place une intervention dans mon établissement</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="tel:+33767246825"
                  style={{ color: '#003492' }}
                  className="text-xs hover:underline flex items-center gap-1.5 transition font-extrabold"
                >
                  <Phone size={14} className="text-[#dc2626]" />
                  <span>Contacter directement Mélissa Jennadi : 07 67 24 68 25</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 : LE PROGRAMME OFFICIEL FI-TOP (3 JOURS / 21H) ─── */}
      <section
        id="programme"
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Programme Pédagogique Officiel
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 tracking-tight"
            >
              Formation Initiale FI-TOP® (3 jours / 21h)
            </h2>
            <p style={{ color: '#334155' }} className="mt-4 text-base font-medium">
              Un cursus intensif structuré en 7 modules concrets pour une autonomie totale et immédiate.
            </p>
            <div
              style={{
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                border: '1px solid #fecaca',
              }}
              className="mt-4 inline-flex items-center gap-2 text-xs font-black px-4 py-2 rounded-full"
            >
              <AlertCircle size={14} className="text-[#dc2626]" />
              <span>Cursus orienté résultats opérationnels (pas de cursus long « maître praticien »)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Onglets des 7 Modules */}
            <div className="lg:col-span-5 space-y-2.5">
              {modules.map((mod, idx) => {
                const IconComp = mod.icon;
                const isSelected = activeModule === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModule(idx)}
                    style={{
                      backgroundColor: isSelected ? '#003492' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#0f172a',
                      border: isSelected ? '2px solid #003492' : '1px solid #cbd5e1',
                    }}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected ? 'shadow-lg scale-[1.01]' : 'hover:border-[#003492]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : '#eff6ff',
                          color: isSelected ? '#ffffff' : '#003492',
                        }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      >
                        <IconComp size={20} />
                      </div>
                      <div>
                        <div
                          style={{ color: isSelected ? '#93c5fd' : '#dc2626' }}
                          className="text-[11px] font-black uppercase"
                        >
                          {mod.num}
                        </div>
                        <div className="text-sm font-black leading-snug">{mod.title}</div>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`shrink-0 ${isSelected ? 'text-white translate-x-1' : 'text-slate-400'}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Contenu Détaillé du Module Sélectionné */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid #dbeafe',
                boxShadow: '0 15px 35px -5px rgba(0, 52, 146, 0.1)',
              }}
              className="lg:col-span-7 rounded-3xl p-8 min-h-[460px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <span
                      style={{ backgroundColor: '#dc2626' }}
                      className="text-xs font-black uppercase text-white px-3 py-1 rounded-full"
                    >
                      {modules[activeModule].num}
                    </span>
                    <h3 style={{ color: '#003492' }} className="text-xl sm:text-2xl font-black mt-2">
                      {modules[activeModule].title}
                    </h3>
                    <p style={{ color: '#64748b' }} className="text-xs font-bold mt-1">
                      {modules[activeModule].subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 style={{ color: '#0a1128' }} className="text-xs font-black uppercase tracking-wider">
                    Points Clés & Compétences Pratiques :
                  </h4>
                  <ul className="space-y-3">
                    {modules[activeModule].content.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm font-medium leading-relaxed">
                        <CheckCircle2 size={18} className="text-[#003492] shrink-0 mt-0.5" />
                        <span style={{ color: '#1e293b' }} className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                className="mt-8 pt-4 pb-4 px-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div style={{ color: '#334155' }} className="text-xs font-medium">
                  <strong>Pédagogie active :</strong> 70% exercices réels • Livret stagiaire remis • Attestation de compétences
                </div>
                <a
                  href="#contact"
                  style={{ color: '#dc2626' }}
                  className="inline-flex items-center gap-1.5 text-xs font-black hover:underline"
                >
                  <span>Demander le calendrier des sessions</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 : LES FORMATEURS (PHOTOS OFFICIELLES) ─── */}
      <section
        id="formateurs"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Équipe Pédagogique
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 tracking-tight"
            >
              Vos Formateurs : 2 Voix, 1 Mission
            </h2>
            <p style={{ color: '#334155' }} className="mt-4 text-base font-medium">
              L’alliance de la rigueur opérationnelle militaire et de l’écoute bienveillante sur la gestion du sommeil
              et de l’épuisement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Profil Régis Domergue */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '2px solid #bfdbfe',
              }}
              className="rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <img
                    src="/team-regis.png"
                    alt="Régis Domergue - Expert TOP"
                    className="w-28 h-28 rounded-2xl object-cover shadow-lg border-2 border-[#003492] shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 style={{ color: '#0a1128' }} className="text-xl font-black">
                      Régis DOMERGUE
                    </h3>
                    <div
                      style={{ color: '#003492' }}
                      className="text-xs font-black uppercase tracking-wide mt-1"
                    >
                      Co-fondateur & Expert T.O.P • Conférencier
                    </div>
                    <div style={{ color: '#64748b' }} className="text-xs font-bold mt-1">
                      Plus de 10 ans au sein de l’Armée de l’Air et de l’Espace
                    </div>
                  </div>
                </div>

                <p style={{ color: '#334155' }} className="text-sm leading-relaxed mb-6 font-medium">
                  Fort de plus de dix années d’expérience opérationnelle dans l’Armée de l’Air et de l’Espace, Régis
                  apporte une expertise unique sur la performance humaine, la gestion des facteurs de risque et la prise
                  de décision sous contrainte intense.
                  <br />
                  <br />
                  Aujourd’hui conférencier et formateur, il adapte les méthodes militaires les plus exigeantes au monde de
                  l’entreprise et des collectivités pour bâtir une résilience collective durable.
                </p>

                <div className="space-y-2 text-xs border-t border-slate-200 pt-4">
                  <div style={{ color: '#0a1128' }} className="font-bold">
                    Domaines d&apos;expertise clés :
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#003492]">
                      Facteurs humains & sécurité
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#003492]">
                      Gestion de crise
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#003492]">
                      Leadership opérationnel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profil Mélissa Jennadi */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '2px solid #fecaca',
              }}
              className="rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <img
                    src="/team-melyssa.png"
                    alt="Mélissa Jennadi - Fondatrice Ô'TOP"
                    className="w-28 h-28 rounded-2xl object-cover shadow-lg border-2 border-[#dc2626] shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 style={{ color: '#0a1128' }} className="text-xl font-black">
                      Mélissa JENNADI
                    </h3>
                    <div
                      style={{ color: '#dc2626' }}
                      className="text-xs font-black uppercase tracking-wide mt-1"
                    >
                      Fondatrice & Responsable Pédagogique
                    </div>
                    <div style={{ color: '#64748b' }} className="text-xs font-bold mt-1">
                      Formatrice TOP® • Spécialiste Stress, Sommeil & Fatigue
                    </div>
                  </div>
                </div>

                <p style={{ color: '#334155' }} className="text-sm leading-relaxed mb-6 font-medium">
                  Formatrice en Techniques d’Optimisation du Potentiel (T.O.P), Mélissa est animée par la conviction
                  profonde que la performance ne doit jamais se faire au prix de la santé et de l&apos;épuisement.
                  <br />
                  <br />
                  Spécialiste de la régulation de l’épuisement, de la fatigue chronique et des troubles du sommeil, elle
                  accompagne sur le terrain dirigeants, managers, enseignants et particuliers avec une pédagogie
                  chaleureuse, concrète et immédiatement applicable.
                </p>

                <div className="space-y-2 text-xs border-t border-slate-200 pt-4">
                  <div style={{ color: '#0a1128' }} className="font-bold">
                    Domaines d&apos;expertise clés :
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#dc2626]">
                      Régulation du stress & burn-out
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#dc2626]">
                      Cycles de sommeil & micro-siestes
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-semibold text-[#dc2626]">
                      Milieu scolaire & pHARe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 : TÉLÉCHARGEMENT DU LIVRET D'ACCUEIL OFFICIEL (34 PAGES) ─── */}
      <section
        style={{ backgroundColor: '#003492', borderBottom: '3px solid #dc2626' }}
        className="py-16 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black">
                <FileText size={14} className="text-[#fca5a5]" />
                <span>Document Pédagogique Officiel</span>
              </span>
              <h3 style={{ color: '#ffffff' }} className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Téléchargez le Livret d’Accueil Complet (34 pages)
              </h3>
              <p style={{ color: '#ffffff' }} className="text-sm leading-relaxed font-medium text-white force-text-white">
                Retrouvez l’intégralité des fiches pédagogiques, la grille détaillée des modules, le protocole
                d’intervention en milieu scolaire (programme pHARe), l’organigramme, la démarche qualité et les
                conditions d’accessibilité aux personnes en situation de handicap.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/livret-top.pdf"
                download="Livret-Accueil-TOP-OTOP.pdf"
                style={{ backgroundColor: '#ffffff', color: '#003492' }}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-black text-sm shadow-2xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={18} className="text-[#dc2626]" />
                <span>Télécharger le PDF (34 pages)</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm shadow-xl transition hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>Demander par WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 : MODALITÉS PRATIQUES & FINANCEMENT ─── */}
      <section
        id="modalites"
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Organisation & Prise en Charge
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 tracking-tight"
            >
              Modalités et Délais d’Accès
            </h2>
            <p style={{ color: '#334155' }} className="mt-4 text-base font-medium">
              Informations pratiques extraites du livret d’accueil pour préparer votre session :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div
              style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm"
            >
              <div
                style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              >
                <Clock size={20} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-sm font-bold mb-1">
                Durée & Format
              </h3>
              <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                <strong style={{ color: '#003492' }}>3 jours (21 heures)</strong> en présentiel. Sessions inter ou
                intra sur site client (Var, PACA, France entière, Suisse, Belgique).
              </p>
            </div>

            <div
              style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm"
            >
              <div
                style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              >
                <Users size={20} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-sm font-bold mb-1">
                Public & Prérequis
              </h3>
              <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                <strong style={{ color: '#dc2626' }}>Aucun prérequis.</strong> Ouvert à tous : salariés, dirigeants,
                enseignants, soignants, particuliers. Effectif limité à 10-12 max.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm"
            >
              <div
                style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              >
                <Building2 size={20} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-sm font-bold mb-1">
                Financement Possible
              </h3>
              <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                Éligible OPCO (salariés), FAFCEA (artisans), FIF-PL / AGEFICE (indépendants) et plan de compétences.
                Montage du dossier accompagné par Mélissa.
              </p>
            </div>

            <div
              style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
              className="rounded-2xl p-6 shadow-sm"
            >
              <div
                style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              >
                <Shield size={20} />
              </div>
              <h3 style={{ color: '#0a1128' }} className="text-sm font-bold mb-1">
                Délais d’Accès
              </h3>
              <p style={{ color: '#334155' }} className="text-xs leading-relaxed font-medium">
                Accès sous 7 à 15 jours après signature de la convention. Questionnaire préalable des besoins pour
                adapter le cursus.
              </p>
            </div>
          </div>

          {/* Accessibilité Handicap */}
          <div
            style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
            className="rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-xs"
          >
            <div
              style={{ backgroundColor: '#eff6ff', color: '#003492' }}
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            >
              <Heart size={20} />
            </div>
            <div className="flex-1">
              <strong style={{ color: '#0a1128' }} className="block font-black mb-0.5 text-sm">
                Accessibilité & Référent Handicap (extrait livret p.4 & p.20) :
              </strong>
              <span style={{ color: '#334155' }} className="font-medium">
                Formations ouvertes à tous. Un entretien préalable permet d’adapter le contenu et les conditions
                d’accueil aux personnes en situation de handicap. Référente dédiée : Mélissa Jennadi.
              </span>
            </div>
            <a
              href="mailto:formation.rmcf@gmail.com?subject=Demande%20Accessibilit%C3%A9%20Handicap%20TOP"
              style={{ color: '#003492', border: '1px solid #bfdbfe' }}
              className="px-4 py-2 rounded-xl bg-blue-50 font-black shrink-0 transition hover:bg-blue-100"
            >
              Signaler un besoin
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 : AVIS & TÉMOIGNAGES (CONFIANCE TOP) ─── */}
      <section
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-[#dc2626] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#dc2626] text-[#dc2626]" />
              ))}
            </div>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
            >
              Une Confiance TOP®
            </h2>
            <p style={{ color: '#334155' }} className="mt-2 text-base font-medium">
              Retours d&apos;expérience de participants à nos formations et interventions de terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
                className="rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#dc2626] mb-3">
                    {[...Array(t.note)].map((_, n) => (
                      <Star key={n} size={14} className="fill-[#dc2626]" />
                    ))}
                  </div>
                  <p style={{ color: '#1e293b' }} className="text-xs sm:text-sm italic leading-relaxed mb-6 font-medium">
                    « {t.text} »
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <div style={{ color: '#0a1128' }} className="font-black text-xs">
                    {t.name}
                  </div>
                  <div style={{ color: '#64748b' }} className="text-[11px] font-semibold">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9 : FAQ DÉDIÉE MÉTHODE TOP ─── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
        className="py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: '#003492',
                border: '1px solid #bfdbfe',
              }}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
            >
              Foire Aux Questions
            </span>
            <h2
              style={{ color: '#0a1128' }}
              className="text-2xl sm:text-3xl font-black mt-3 tracking-tight"
            >
              Questions Fréquentes sur la FI-TOP
            </h2>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "Pourquoi seulement la Formation Initiale (FI-TOP 3 jours) et pas de cursus maître praticien ?",
                a: "Parce que notre priorité chez Ô'TOP Formations est l'efficacité concrète et immédiate. La FI-TOP de 3 jours (21h) vous transmet 100% des techniques nécessaires pour réguler votre stress, récupérer votre énergie et performer au quotidien en toute autonomie. Les formations longues théoriques ne correspondent pas aux besoins opérationnels des entreprises et des personnes sous pression.",
              },
              {
                q: "Les techniques sont-elles utilisables discrètement en poste de travail ?",
                a: "Absolument. Les exercices de respiration (comme la respiration 4-6) et de relaxation neuromusculaire s'exécutent les yeux ouverts, assis à votre bureau, en marchant ou pendant une réunion tendue, sans que personne autour de vous ne s'en rende compte.",
              },
              {
                q: "Comment se passe la prise en charge financière ?",
                a: "Mélissa Jennadi monte personnellement votre dossier. Si vous êtes salarié, la formation peut être financée à 100% par votre OPCO. Si vous êtes indépendant, artisan ou profession libérale, nous mobilisons vos droits FAFCEA, FIF-PL ou AGEFICE. Contactez-nous pour une vérification immédiate de vos droits.",
              },
              {
                q: "Peut-on organiser la formation au sein de notre établissement ou entreprise ?",
                a: "Oui, nous nous déplaçons régulièrement en format intra-entreprise dans toute la région PACA, en France métropolitaine, ainsi qu'en Belgique et en Suisse pour les collectivités, collèges/lycées et entreprises.",
              },
              {
                q: "Quels sont les prérequis pour s'inscrire ?",
                a: "Aucun prérequis de diplôme ou d'expérience n'est exigé. La formation est ouverte à toute personne souhaitant améliorer sa résistance à la pression, sa vitalité et sa clarté mentale.",
              },
            ].map((faq, fIdx) => (
              <div
                key={fIdx}
                style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                className="rounded-2xl overflow-hidden shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-black text-sm text-[#0a1128] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      activeFaq === fIdx ? 'rotate-180 text-[#dc2626]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {activeFaq === fIdx && (
                  <div
                    style={{ color: '#334155' }}
                    className="px-4 pb-5 sm:px-5 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 font-medium"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 : CONTACT, DEVIS & DIAGNOSTIC OFFERT ─── */}
      <section
        id="contact"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
        className="py-16 sm:py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Coordonnées Directes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span
                  style={{
                    backgroundColor: '#eff6ff',
                    color: '#003492',
                    border: '1px solid #bfdbfe',
                  }}
                  className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block"
                >
                  Contact & Inscription
                </span>
                <h2
                  style={{ color: '#0a1128' }}
                  className="text-2xl sm:text-3xl font-black mt-3 tracking-tight"
                >
                  Échangeons sur Votre Projet
                </h2>
                <p style={{ color: '#334155' }} className="mt-2 text-sm leading-relaxed font-medium">
                  Réservez un échange téléphonique bienveillant de 15 minutes avec <strong>Mélissa Jennadi</strong> pour
                  clarifier vos besoins, valider le calendrier des sessions et étudier vos financements disponibles.
                </p>
              </div>

              {/* Coordonnées Officielles du Livret */}
              <div
                style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }}
                className="space-y-3.5 p-6 rounded-2xl"
              >
                <a
                  href="tel:+33767246825"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:border-[#003492] text-slate-800 transition"
                >
                  <div
                    style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b' }} className="text-[10px] font-bold uppercase">
                      Téléphone direct
                    </div>
                    <div style={{ color: '#0a1128' }} className="text-sm font-black">
                      07 67 24 68 25 / 07 49 23 94 23
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:border-[#25D366] text-slate-800 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b' }} className="text-[10px] font-bold uppercase">
                      WhatsApp direct
                    </div>
                    <div className="text-sm font-black text-emerald-700">
                      Discuter avec Mélissa Jennadi
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:formation.rmcf@gmail.com"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:border-[#003492] text-slate-800 transition"
                >
                  <div
                    style={{ backgroundColor: '#eff6ff', color: '#003492' }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  >
                    <FileText size={18} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b' }} className="text-[10px] font-bold uppercase">
                      Email officiel
                    </div>
                    <div style={{ color: '#0a1128' }} className="text-sm font-black">
                      formation.rmcf@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              <div
                style={{
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1e3a8a',
                }}
                className="p-4 rounded-2xl text-xs space-y-1"
              >
                <div className="font-black text-[#003492]">Siège Ô&apos;TOP Formations :</div>
                <div className="font-medium text-slate-700">
                  Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules
                  <br />
                  SIRET : 990 443 186 00012 – NAF : 8559A – RCS Toulon
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '2px solid #dbeafe',
                boxShadow: '0 20px 45px -10px rgba(0, 52, 146, 0.12)',
              }}
              className="lg:col-span-7 rounded-3xl p-8"
            >
              <h3 style={{ color: '#003492' }} className="text-lg font-black mb-1">
                Demande de Devis & Diagnostic Offert (15 min)
              </h3>
              <p style={{ color: '#64748b' }} className="text-xs mb-6 font-semibold">
                Remplissez ce formulaire et Mélissa vous répondra sous 24h ouvrées.
              </p>

              {formSent ? (
                <div
                  style={{
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#065f46',
                  }}
                  className="p-6 rounded-2xl text-center space-y-3"
                >
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                  <div className="font-black text-base">Votre message a été préparé avec succès !</div>
                  <p className="text-xs text-emerald-800">
                    Votre messagerie a été ouverte. Vous pouvez également échanger avec Mélissa par WhatsApp au{' '}
                    <strong>07 67 24 68 25</strong> pour une réponse immédiate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.nom}
                        onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                        placeholder="Ex: Dupont"
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      />
                    </div>
                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.prenom}
                        onChange={(e) => setFormState({ ...formState, prenom: e.target.value })}
                        placeholder="Ex: Pierre"
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="pierre.dupont@structure.com"
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      />
                    </div>
                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.telephone}
                        onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Votre profil / structure
                      </label>
                      <select
                        value={formState.profil}
                        onChange={(e) => setFormState({ ...formState, profil: e.target.value })}
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      >
                        <option value="Entreprise / RH / CSE">Entreprise / RH / CSE</option>
                        <option value="Établissement scolaire / pHARe">Établissement scolaire / pHARe</option>
                        <option value="Collectivité / Institution publique">Collectivité / Institution publique</option>
                        <option value="Professionnel de santé / Soignant">Professionnel de santé / Soignant</option>
                        <option value="Indépendant / Dirigeant">Indépendant / Dirigeant</option>
                        <option value="Particulier">Particulier</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                        Nombre estimé de participants
                      </label>
                      <select
                        value={formState.participants}
                        onChange={(e) => setFormState({ ...formState, participants: e.target.value })}
                        style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                        className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                      >
                        <option value="1 personne (individuel)">1 personne (individuel)</option>
                        <option value="2 à 5 personnes">2 à 5 personnes</option>
                        <option value="6 à 12 personnes (groupe complet)">6 à 12 personnes (groupe complet)</option>
                        <option value="Plus de 12 personnes (sur mesure)">Plus de 12 personnes (sur mesure)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ color: '#0a1128' }} className="block font-bold mb-1">
                      Votre message ou vos attentes spécifiques
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Précisez votre contexte (gestion du stress, harcèlement scolaire, QVT entreprise, prise en charge OPCO...)"
                      style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1' }}
                      className="w-full px-3.5 py-2.5 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#003492]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: '#dc2626' }}
                    className="w-full py-3.5 px-6 rounded-xl hover:bg-[#b91c1c] text-white font-extrabold text-xs shadow-lg shadow-red-700/25 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Envoyer ma demande à Mélissa Jennadi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER STANDALONE Ô'TOP (BLEU & ROUGE, AUCUN LIEN SITE GLOBAL) ─── */}
      <footer
        style={{ backgroundColor: '#0a1128', borderTop: '2px solid #dc2626' }}
        className="text-slate-300 text-xs py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/logo.png"
                  alt="Ô'TOP Formations"
                  className="w-10 h-10 rounded-full object-contain p-0.5 bg-white border border-[#003492]"
                />
                <div className="font-black text-sm text-white">
                  Ô&apos;TOP <span style={{ color: '#dc2626' }}>FORMATIONS</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                Pôle Bien-être & Performance. Organisme spécialisé dans les Techniques d’Optimisation du Potentiel
                (TOP®) pour particuliers, entreprises et institutions éducatives.
              </p>
              <div style={{ color: '#93c5fd' }} className="text-[11px] font-bold italic">
                « 2 Voix, 1 Mission : former pour transformer. »
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Formation Phare
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-400 font-medium">
                <li>• Formation Initiale FI-TOP® (3 jours / 21h)</li>
                <li>• Modules de régulation du stress & du sommeil</li>
                <li>• Application milieu scolaire & programme pHARe</li>
                <li>• Prévention des RPS et burn-out en entreprise</li>
                <li>• Accompagnement individualisé et petits groupes</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Coordonnées & Informations Légales
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-400 font-medium">
                <li>📍 Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules</li>
                <li>📞 07 67 24 68 25 / 07 49 23 94 23</li>
                <li>📧 formation.rmcf@gmail.com</li>
                <li>🏢 SIRET : 990 443 186 00012 – RCS Toulon</li>
                <li>
                  📄{' '}
                  <a href="/livret-top.pdf" download style={{ color: '#dc2626' }} className="hover:underline font-bold">
                    Télécharger le Livret d’Accueil PDF (34 pages)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3 text-center sm:text-left">
            <div>© {new Date().getFullYear()} Ô&apos;TOP FORMATIONS. Tous droits réservés.</div>
            <div className="text-slate-300 font-medium">
              Formation animée par Mélissa Jennadi & Régis Domergue • Pôle Bien-être & Performance
            </div>
          </div>
        </div>
      </footer>

      {/* ─── BARRE FLOTTANTE DISCRÈTE (MOBILE & DESKTOP) ─── */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Mélissa sur WhatsApp"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs shadow-2xl shadow-emerald-800/40 transition hover:scale-105"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp Mélissa</span>
        </a>

        <a
          href="tel:+33767246825"
          aria-label="Appeler Mélissa"
          style={{ backgroundColor: '#002b7a', border: '1px solid #1e40af' }}
          className="p-3 rounded-full text-white shadow-xl transition hover:scale-105 hover:bg-[#003492]"
        >
          <Phone size={17} className="text-[#ef4444]" />
        </a>
      </div>
    </div>
  );
}
