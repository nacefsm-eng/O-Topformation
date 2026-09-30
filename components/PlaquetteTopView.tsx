'use client';

import React, { useState } from 'react';
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
  HelpCircle,
  Compass,
  Smile,
  Activity,
  Layers,
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

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande Plaquette FI-TOP — ${formState.nom} ${formState.prenom}`);
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
      subtitle: 'La météo intérieure & la cartographie des signaux',
      content: [
        'Comprendre les mécanismes neurophysiologiques et endocriniens du stress (phase d’alarme, résistance, épuisement).',
        'Identifier sa « météo intérieure » et cartographier ses propres signaux corporels d’alerte.',
        'Intégrer les trois piliers fondamentaux des TOP : respiration, relaxation, imagerie mentale.',
        'Différencier le stress stimulant du stress toxique et apprendre à stopper la spirale d’emballement.',
      ],
    },
    {
      num: 'Module 2',
      title: 'Reprendre le contrôle de ses émotions par le souffle',
      icon: Compass,
      subtitle: 'Passer du mode automatique au mode conscient',
      content: [
        'Le pouvoir régulateur de la respiration sur le système nerveux autonome (sympathique / parasympathique).',
        'La respiration réflexe versus la respiration consciente contrôlée.',
        'La technique de respiration "4-6" et la cohérence cardiaque pour désamorcer l’anxiété en 90 secondes.',
        'Ajuster sa ventilation en temps réel selon les exigences de la situation opérationnelle.',
      ],
    },
    {
      num: 'Module 3',
      title: 'Récupérer et se régénérer',
      icon: Clock,
      subtitle: 'Sommeil, micro-siestes & restauration cognitive',
      content: [
        'Techniques de récupération flash : apprendre à faire une micro-sieste régénératrice de 5 à 15 minutes.',
        'Restauration active des capacités physiques et de la vigilance après un pic de tension.',
        'Gestion de la fatigue chronique et hygiène des cycles de sommeil pour éviter le burn-out.',
        'Protocoles de décompression de fin de journée pour couper véritablement entre vie pro et vie perso.',
      ],
    },
    {
      num: 'Module 4',
      title: 'Se dynamiser avant l’action',
      icon: Zap,
      subtitle: 'Le pouvoir de la posture & l’activation psychomotrice',
      content: [
        'Utiliser le corps et la posture pour induire un état mental d’assurance et d’alerte positive.',
        'Protocoles de dynamisation psychomotrice rapide avant une prise de parole, un rendez-vous à enjeu ou une crise.',
        'Restauration immédiate de l’énergie vitale lors des baisses de régime en milieu de journée.',
        'Activation ciblée de la vigilance sans générer de tension musculaire parasite.',
      ],
    },
    {
      num: 'Module 5',
      title: 'Renforcer sa confiance en soi & son estime',
      icon: Heart,
      subtitle: 'L’ancrage positif & la solidité intérieure',
      content: [
        'Retrouver le positif et neutraliser les pensées automatiques dévalorisantes.',
        'Renouer avec l’estime de soi à travers la capitalisation sur les réussites passées.',
        'Création d’un ancrage ressource : un réflexe conditionné pour retrouver instantanément calme et assurance.',
        'Préserver son intégrité émotionnelle face aux critiques et aux environnements déstabilisants.',
      ],
    },
    {
      num: 'Module 6',
      title: 'Se motiver et se programmer à la réussite',
      icon: Target,
      subtitle: 'Visualisation efficace & clarification de l’objectif',
      content: [
        'Définir le véritable objectif : clair, réaliste, motivant et aligné avec ses valeurs.',
        'Organiser et mobiliser l’ensemble de ses ressources personnelles et collectives.',
        'L’imagerie mentale de projection : s’entraîner mentalement à dérouler une action avec succès avant de la vivre.',
        'Développer une attitude proactive et résiliente face aux imprévus et aux échecs temporaires.',
      ],
    },
    {
      num: 'Module 7',
      title: 'Mise en pratique, boîte à outils & évaluation',
      icon: Award,
      subtitle: 'Autonomie totale & certification de fin de cursus',
      content: [
        'Construction de votre boîte à outils TOP personnalisée, adaptée à vos contraintes quotidiennes.',
        'Jeux de rôles et simulations de situations réelles complexes (conflits, surcharges, urgences).',
        'Évaluation continue des acquis pratiques et posturaux par les formateurs.',
        'Remise de l’attestation officielle de compétences en Formation Initiale TOP® (21h).',
      ],
    },
  ];

  const applications = [
    {
      title: 'Entreprises & Dirigeants',
      category: 'Performance & QVT',
      icon: Building2,
      desc: 'Prévention des risques psycho-sociaux (RPS) et du burn-out. Permet aux managers et équipes de décider avec lucidité sous pression et de maintenir un climat de travail serein et fédérateur.',
      points: [
        'Régulation de la surcharge mentale des cadres et dirigeants',
        'Désamorçage des tensions relationnelles et conflits internes',
        'Maintien d’un niveau d’énergie constant sur la durée',
      ],
    },
    {
      title: 'Milieu Scolaire & Éducatif',
      category: 'Programme pHARe & Climat Scolaire',
      icon: GraduationCap,
      badge: 'Spécialité Terrain',
      desc: 'Déployé avec succès dans les collèges et lycées dans le cadre de la lutte contre le harcèlement scolaire (programme pHARe) et pour le soutien aux enseignants et personnels de direction.',
      points: [
        'Protocoles "5 minutes TOP" en classe pour calmer et recentrer les élèves',
        'Soutien aux élèves victimes (sécurité intérieure, restauration de l’estime)',
        'Canalisation de l’impulsivité et travail d’empathie avec les témoins et auteurs',
        'Soutien à la posture éducative et prévention de l’épuisement des enseignants',
      ],
    },
    {
      title: 'Métiers sous Haute Pression',
      category: 'Santé, Secours & Sécurité',
      icon: Shield,
      desc: 'Médecins, soignants, pompiers, forces de l’ordre : ceux qui portent les autres au quotidien. Les TOP permettent de rester lucide dans l’urgence et de couper immédiatement une fois la garde terminée.',
      points: [
        'Techniques de micro-récupération entre deux interventions critiques',
        'Protection contre l’usure de compassion et la fatigue émotionnelle',
        'Clarté cognitive maintenue lors des décisions vitales en urgence',
      ],
    },
    {
      title: 'Gestion du Sommeil & Fatigue',
      category: 'Santé & Équilibre',
      icon: Sparkles,
      desc: 'Rétablir des nuits réparatrices en désactivant le mode hypervigilance. Reprenez le contrôle de votre horloge biologique grâce à des exercices de respiration et de décontraction ciblés.',
      points: [
        'Endormissement facilité et élimination des ruminations nocturnes',
        'Restauration de la vigilance diurne sans excès d’excitants',
        'Régulation des rythmes décalés (travail de nuit, gardes, astreintes)',
      ],
    },
    {
      title: 'Adolescents & Neuroatypiques',
      category: 'Accompagnement Spécifique',
      icon: Smile,
      desc: 'Outils sensoriels et concrets particulièrement adaptés aux jeunes profils neuroatypiques (TDAH, HPI, hypersensibilité, troubles DYS) pour canaliser l’attention et apaiser l’anxiété.',
      points: [
        'Auto-régulation émotionnelle sans sentiment de contrainte',
        'Amélioration de la concentration lors des devoirs et examens',
        'Renforcement de la confiance en ses capacités singulières',
      ],
    },
    {
      title: 'Particuliers en Quête d’Équilibre',
      category: 'Épanouissement Personnel',
      icon: Users,
      desc: 'Pour toute personne traversant une période de transition, de surcharge familiale ou souhaitant acquérir une méthode scientifiquement validée pour vivre plus sereinement.',
      points: [
        'Méthode 100% autonome et utilisable discrètement en tout lieu',
        'Fin des sensations d’oppression et d’angoisse diffuse',
        'Alignement entre ses aspirations et ses actions quotidiennes',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sophie M.',
      role: 'Principale adjointe de collège (Var)',
      text: 'L’intervention de Mélissa et Régis sur le programme pHARe a transformé l’ambiance de nos classes de 4e. Les rituels de 5 minutes de respiration TOP avant les cours ont diminué de moitié les incidents de couloir. Indispensable pour tous les éducateurs.',
      note: 5,
    },
    {
      name: 'Thomas D.',
      role: 'Directeur Général PME Logistique (PACA)',
      text: 'Régis apporte cette rigueur opérationnelle issue de son parcours militaire qui rassure immédiatement les chefs d’entreprise, tandis que Mélissa apporte une finesse incroyable sur la gestion du sommeil et du stress. La formation FI-TOP de 3 jours a été le meilleur investissement pour notre comité de direction.',
      note: 5,
    },
    {
      name: 'Dr. Valérie B.',
      role: 'Médecin urgentiste & Cheffe de service',
      text: 'Dans un service d’urgences, le stress est constant. Les micro-siestes et la respiration 4-6 apprises en formation FI-TOP font désormais partie de mon quotidien. Je recommande cette formation à tous les professionnels de santé qui frôlent l’épuisement.',
      note: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* ─── BANDEAU SUPÉRIEUR TOP ─── */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              <strong>Sessions 2026 ouvertes :</strong> Ollioules (Var) & Intra-entreprise sur toute la France
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+33767246825"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition"
            >
              <Phone size={13} />
              <span>07 67 24 68 25</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="/livret-top.pdf"
              download="Livret-Accueil-TOP.pdf"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition"
            >
              <Download size={13} />
              <span>Livret officiel PDF (34 p.)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── HEADER EXCLUSIF TOP (ISOLATION ABSOLUE) ─── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Marque */}
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.png"
              alt="Ô'TOP Formations"
              className="w-12 h-12 rounded-full object-contain p-0.5 shadow-md bg-stone-50 border border-stone-200"
            />
            <div>
              <div className="text-lg font-black tracking-tight text-slate-950 flex items-center gap-1.5">
                Ô&apos;TOP <span className="text-orange-600">FORMATIONS</span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Pôle Bien-être & Performance • Méthode TOP®
              </div>
            </div>
          </div>

          {/* Navigation Rapide (Ancres) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#methode" className="hover:text-orange-600 transition">
              La Méthode TOP®
            </a>
            <a href="#piliers" className="hover:text-orange-600 transition">
              Les 3 Piliers
            </a>
            <a href="#applications" className="hover:text-orange-600 transition">
              Applications & pHARe
            </a>
            <a href="#programme" className="hover:text-orange-600 transition">
              Programme FI-TOP (3j)
            </a>
            <a href="#formateurs" className="hover:text-orange-600 transition">
              Vos Formateurs
            </a>
            <a href="#modalites" className="hover:text-orange-600 transition">
              Modalités & Financement
            </a>
          </nav>

          {/* CTA Header */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp Mélissa</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-700/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Devis & Diagnostic</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-orange-50/60 via-stone-50 to-[#fafaf9]">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Colonne Gauche : Pitch & Appel à l'action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold border border-orange-200 shadow-sm">
                <Sparkles size={14} className="text-orange-600" />
                <span>Plaquette Officielle • Formation Initiale FI-TOP® (3 jours / 21h)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                Les Techniques d&apos;Optimisation du Potentiel{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  (Méthode TOP®)
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-slate-800">
                « 2 Voix, 1 Mission : former pour transformer. »
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Conçues initialement pour les environnements extrêmes (forces armées, pilotes, sportifs de haut niveau),
                les TOP® sont une boîte à outils psycho-physiologique pragmatique pour{' '}
                <strong>réguler le stress, optimiser la récupération et préserver sa lucidité</strong> sans s’épuiser.
                Une formation courte et concrète animée par <strong>Mélissa Jennadi</strong> et{' '}
                <strong>Régis Domergue</strong>.
              </p>

              {/* Points forts livret */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">100% Autonome en 3 jours</strong>
                    <span className="text-slate-600">Des outils de 2 à 5 min utilisables en poste de travail.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">Expertise Terrain Éprouvée</strong>
                    <span className="text-slate-600">10 ans Armée de l’Air & accompagnement éducatif pHARe.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">Petits Groupes (Max 12)</strong>
                    <span className="text-slate-600">Suivi individualisé et 70% d&apos;exercices pratiques.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">Prise en Charge Possible</strong>
                    <span className="text-slate-600">Éligible OPCO, FAFCEA, FIF-PL & plan employeur.</span>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm shadow-xl shadow-orange-600/25 transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  <span>Réserver un diagnostic offert (15 min)</span>
                </a>

                <a
                  href="/livret-top.pdf"
                  download="Livret-Accueil-TOP.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-slate-800 font-bold text-sm border border-stone-300 shadow-sm transition hover:border-slate-400"
                >
                  <Download size={17} className="text-orange-600" />
                  <span>Télécharger le livret PDF (34 p.)</span>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition hover:scale-105"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Colonne Droite : Carte Visuelle des 2 Formateurs */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-stone-200/80">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-black uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                  Tandem d&apos;Experts Certifiés
                </div>

                <div className="text-center pb-4 border-b border-stone-100">
                  <h3 className="text-lg font-black text-slate-900">Ô&apos;TOP FORMATIONS</h3>
                  <p className="text-xs text-orange-600 font-semibold">« Former pour transformer durablement »</p>
                </div>

                <div className="grid grid-cols-2 gap-4 my-5">
                  {/* Régis */}
                  <div className="text-center p-3 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="relative w-24 h-24 mx-auto mb-2.5">
                      <img
                        src="/team-regis.png"
                        alt="Régis Domergue"
                        className="w-full h-full rounded-2xl object-cover shadow-md border-2 border-orange-500"
                      />
                    </div>
                    <div className="font-extrabold text-sm text-slate-900 leading-tight">Régis DOMERGUE</div>
                    <div className="text-[10px] text-orange-700 font-bold uppercase tracking-wide mt-0.5">
                      Co-fondateur & Expert TOP
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      10 ans Armée de l&apos;Air et de l&apos;Espace • Facteurs humains & performance
                    </p>
                  </div>

                  {/* Mélissa */}
                  <div className="text-center p-3 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="relative w-24 h-24 mx-auto mb-2.5">
                      <img
                        src="/team-melyssa.png"
                        alt="Mélissa Jennadi"
                        className="w-full h-full rounded-2xl object-cover shadow-md border-2 border-amber-500"
                      />
                    </div>
                    <div className="font-extrabold text-sm text-slate-900 leading-tight">Mélissa JENNADI</div>
                    <div className="text-[10px] text-amber-700 font-bold uppercase tracking-wide mt-0.5">
                      Fondatrice & Pédagogie
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Spécialiste Stress, Sommeil & Fatigue • Accompagnement terrain éducatif
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-2xl p-3.5 border border-orange-200 text-xs text-slate-700 space-y-1.5">
                  <div className="font-bold text-orange-950 flex items-center gap-1.5">
                    <Award size={14} className="text-orange-600" />
                    <span>Cursus Unique : FI-TOP (3 jours / 21h)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Nous ne proposons pas de long cursus théorique de « maître praticien » : notre choix assumé est la{' '}
                    <strong>Formation Initiale de 3 jours</strong>, intensive, pragmatique et immédiatement opérationnelle.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Star size={13} className="text-amber-500 fill-amber-500" /> 5.0/5 Satisfaction
                  </span>
                  <span>Ollioules & Déplacements France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1 : QU'EST-CE QUE LES TOP® ? ─── */}
      <section id="methode" className="py-16 sm:py-24 bg-white border-y border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Origine & Méthodologie
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Qu&apos;est-ce que la Méthode TOP® ?
            </h2>
            <p className="text-slate-600 mt-4 text-base leading-relaxed">
              Les Techniques d’Optimisation du Potentiel (TOP®) ont été créées dans les années 1990 par le Dr Édith
              Perreaut-Pierre pour le personnel des forces armées et les sportifs de haut niveau. Aujourd’hui, elles
              constituent la référence absolue de la préparation mentale et de la régulation du stress dans le monde
              civil et professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-orange-300 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-600 flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Simplicité & Autonomie</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aucun équipement sophistiqué n’est nécessaire. Les outils s’intègrent discrètement et naturellement dans
                le rythme de travail habituel : en marchant, assis au bureau, ou quelques secondes avant une intervention
                critique.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-orange-300 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Scientifiquement Éprouvé</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fondée sur la physiologie du stress, la chrono-biologie et les neurosciences comportementales. Les TOP®
                agissent directement sur la variabilité de la fréquence cardiaque et l’abaissement du taux de cortisol.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-orange-300 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Action Immédiate</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contrairement aux approches de relaxation passive, les TOP® s’utilisent dans l’action et sous pression.
                Elles vous apprennent à mobiliser instantanément votre énergie ou au contraire à décompresser en quelques
                minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 : LES 3 PILIERS FONDAMENTAUX ─── */}
      <section id="piliers" className="py-16 sm:py-24 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Fondations Pédagogiques
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Les 3 Piliers de la Méthode TOP®
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Tout le cursus repose sur l’apprentissage croisé de trois leviers d’action physiologique et cognitive :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pilier 1 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -z-0 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-orange-600/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">La Respiration</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Le levier physiologique le plus rapide pour reprendre le contrôle de son système nerveux autonome.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Respiration relaxante « 4-6 » :</strong> abaissement immédiat du rythme cardiaque et de la
                      sensation d&apos;oppression.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Respiration dynamisante :</strong> réactivation de la vigilance sans palpitation avant une
                      prise de parole.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Cohérence cardiaque intégrée :</strong> régulation durable de l’humeur et du cortisol.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-semibold text-orange-700">
                Effet : Apaisement en moins de 90 secondes
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -z-0 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-emerald-600/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">La Relaxation & la Récupération</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Restaurer ses réserves d’énergie physique et nerveuse au fil de la journée pour éviter l’épuisement.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Relaxation neuromusculaire différentielle :</strong> relâcher les tensions des trapèzes et
                      de la mâchoire tout en restant assis.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Micro-siestes flash (5 à 15 min) :</strong> technique militaire de sommeil court pour
                      récupérer 2h de fraîcheur mentale.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Régulation de la météo intérieure :</strong> identification précoce de la fatigue avant le
                      point de rupture.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-semibold text-emerald-700">
                Effet : Regain d’énergie & élimination des toxines de stress
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -z-0 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-amber-600/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">L’Imagerie Mentale</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Programmer son cerveau à la réussite et désamorcer les scénarios catastrophes par la répétition mentale.
                </p>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Répétition mentale pré-action :</strong> visualiser le déroulement parfait d’un entretien,
                      d’un cours ou d’un appel délicat.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Ancrage ressource :</strong> conditionnement psycho-émotionnel pour activer calme et
                      détermination sur commande.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Débriefing positif :</strong> capitaliser sur ce qui a fonctionné pour consolider la
                      confiance en soi.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-semibold text-amber-700">
                Effet : Clarté mentale & confiance inébranlable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 : OÙ S'APPLIQUENT LES TOP ? (AVEC FOCUS PROGRAMME PHARE) ─── */}
      <section id="applications" className="py-16 sm:py-24 bg-white border-t border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Champs d&apos;Application
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Où s&apos;appliquent les Techniques TOP® ?
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Issues du livret officiel Ô&apos;TOP Formations : les contextes réels où nos outils transforment le quotidien
              des professionnels et des institutions.
            </p>
          </div>

          {/* Grille des 6 applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {applications.map((app, idx) => {
              const IconComp = app.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 border transition-all shadow-sm flex flex-col justify-between ${
                    app.badge
                      ? 'bg-orange-50/70 border-orange-300 ring-2 ring-orange-500/20'
                      : 'bg-stone-50 border-stone-200 hover:border-orange-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-sm">
                        <IconComp size={20} />
                      </div>
                      {app.badge ? (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white px-2.5 py-1 rounded-full">
                          {app.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-500">{app.category}</span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{app.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">{app.desc}</p>

                    <ul className="space-y-2 text-xs text-slate-700">
                      {app.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check size={14} className="text-orange-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── ENCADRÉ FOCUS CAS CONCRET : LE PROGRAMME PHARE & MILIEU SCOLAIRE ── */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/30 mb-4">
                <GraduationCap size={15} />
                <span>Cas d&apos;Application Réel • Extrait du Livret d&apos;Accueil</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-white">
                Milieu Scolaire & Lutte contre le Harcèlement (Programme pHARe)
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Les Techniques d’Optimisation du Potentiel sont déployées par Ô&apos;TOP Formations dans les
                établissements scolaires pour <strong>prévenir et gérer le harcèlement</strong>, restaurer un climat de
                classe serein et soutenir les élèves comme les équipes pédagogiques.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-amber-400 font-bold mb-1 text-sm">Soutien aux Victimes</strong>
                  <p className="text-slate-300 leading-relaxed">
                    Réduction immédiate de l’angoisse, restauration du sentiment de sécurité intérieure, travail sur
                    l’affirmation de soi et préparation sereine au retour en classe.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-orange-400 font-bold mb-1 text-sm">Auteurs & Témoins</strong>
                  <p className="text-slate-300 leading-relaxed">
                    Canalisation de l’impulsivité et de la réactivité émotionnelle, renforcement de l’empathie, prise de
                    conscience des actes et médiation apaisée.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <strong className="block text-emerald-400 font-bold mb-1 text-sm">Personnel Éducatif</strong>
                  <p className="text-slate-300 leading-relaxed">
                    Posture calme et cohérente lors d’entretiens conflictuels, désamorçage de l’épuisement professionnel
                    et intégration de protocoles de « 5 minutes TOP » en début de cours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-lg transition"
                >
                  <span>Mettre en place une intervention dans mon établissement</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="tel:+33767246825"
                  className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition"
                >
                  <Phone size={13} className="text-orange-400" />
                  <span>Échanger avec Mélissa Jennadi : 07 67 24 68 25</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 : LE PROGRAMME OFFICIEL FI-TOP (3 JOURS / 21H) ─── */}
      <section id="programme" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Programme Pédagogique Officiel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Formation Initiale FI-TOP® (3 jours / 21h)
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Un parcours intensif, structuré en 7 modules progressifs pour vous rendre 100% autonome dans l’usage des
              techniques. Pas de théorie superflue : vous pratiquez dès la première heure.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-orange-800 bg-orange-200/60 px-3.5 py-1.5 rounded-full border border-orange-300">
              <AlertCircle size={14} />
              <span>Cursus centré sur l’autonomie opérationnelle (pas de cursus long « maître praticien »)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Liste des Modules (Onglets / Boutons) */}
            <div className="lg:col-span-5 space-y-2.5">
              {modules.map((mod, idx) => {
                const IconComp = mod.icon;
                const isSelected = activeModule === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-600/20 scale-[1.02]'
                        : 'bg-white text-slate-800 border-stone-200 hover:border-orange-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-orange-50 text-orange-600'
                        }`}
                      >
                        <IconComp size={20} />
                      </div>
                      <div>
                        <div className={`text-[11px] font-extrabold uppercase ${isSelected ? 'text-orange-200' : 'text-orange-600'}`}>
                          {mod.num}
                        </div>
                        <div className="text-sm font-bold leading-snug">{mod.title}</div>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-transform ${isSelected ? 'text-white translate-x-1' : 'text-slate-400'}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Détail du Module Actif */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200 shadow-xl min-h-[460px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-black uppercase text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {modules[activeModule].num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-2">
                      {modules[activeModule].title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1">{modules[activeModule].subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                    Objectifs & Compétences acquises :
                  </h4>
                  <ul className="space-y-3">
                    {modules[activeModule].content.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50 p-4 rounded-2xl">
                <div className="text-xs text-slate-600">
                  <strong>Modalités :</strong> 70% exercices pratiques • Mises en situation réelles • Remise du manuel
                  stagiaire
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-500 transition"
                >
                  <span>Demander le syllabus complet</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 : LES FORMATEURS (2 VOIX, 1 MISSION) ─── */}
      <section id="formateurs" className="py-16 sm:py-24 bg-white border-t border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              L’Équipe Pédagogique
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Vos Formateurs : 2 Voix, 1 Mission
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              L’alliance rare entre la rigueur opérationnelle des milieux extrêmes et l’accompagnement bienveillant du
              stress et du sommeil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Profil Régis Domergue */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <img
                    src="/team-regis.png"
                    alt="Régis Domergue - Expert TOP"
                    className="w-28 h-28 rounded-2xl object-cover shadow-lg border-2 border-orange-500 shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-black text-slate-950">Régis DOMERGUE</h3>
                    <div className="text-xs font-extrabold text-orange-600 uppercase tracking-wide mt-1">
                      Co-fondateur & Expert T.O.P • Conférencier
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      Plus de 10 ans au sein de l’Armée de l’Air et de l’Espace
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed space-y-3 mb-6">
                  Fort de plus de dix années d’expérience opérationnelle dans l’Armée de l’Air et de l’Espace, Régis
                  apporte une expertise unique sur la performance humaine, la gestion des facteurs de risque et la prise
                  de décision sous contrainte intense.
                  <br />
                  <br />
                  Aujourd’hui conférencier et formateur, il adapte les méthodes militaires les plus éprouvées aux
                  exigences concrètes des entreprises, des dirigeants et des équipes de direction pour bâtir une résilience
                  durable.
                </p>

                <div className="space-y-2 text-xs text-slate-700 border-t border-stone-200 pt-4">
                  <div className="font-bold text-slate-900">Domaines d&apos;intervention clés :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Facteurs humains
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Gestion de crise
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Leadership & Cohésion
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Préparation mentale opérationnelle
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profil Mélissa Jennadi */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <img
                    src="/team-melyssa.png"
                    alt="Mélissa Jennadi - Fondatrice Ô'TOP"
                    className="w-28 h-28 rounded-2xl object-cover shadow-lg border-2 border-amber-500 shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-black text-slate-950">Mélissa JENNADI</h3>
                    <div className="text-xs font-extrabold text-amber-600 uppercase tracking-wide mt-1">
                      Fondatrice & Responsable Pédagogique
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      Formatrice TOP® • Spécialiste Stress, Sommeil & Fatigue
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed space-y-3 mb-6">
                  Formatrice en Techniques d’Optimisation du Potentiel (T.O.P), Mélissa est animée par la conviction
                  profonde que la performance ne doit jamais se faire au détriment de la santé.
                  <br />
                  <br />
                  Spécialiste de la régulation de l’épuisement, de la fatigue chronique et des troubles du sommeil, elle
                  accompagne sur le terrain dirigeants, managers, enseignants et particuliers avec une pédagogie
                  chaleureuse, bienveillante et résolument axée sur des outils immédiatement actionnables.
                </p>

                <div className="space-y-2 text-xs text-slate-700 border-t border-stone-200 pt-4">
                  <div className="font-bold text-slate-900">Domaines d&apos;intervention clés :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Régulation du stress & burn-out
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Cycles de sommeil & micro-siestes
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Milieu scolaire & pHARe
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 font-medium">
                      Accompagnement handicap & inclusion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 : TÉLÉCHARGEMENT DU LIVRET D'ACCUEIL OFFICIEL (34 PAGES) ─── */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-700 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                <FileText size={14} />
                <span>Document Pédagogique Officiel</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Téléchargez le Livret d’Accueil Complet (34 pages)
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Retrouvez l’intégralité des fiches pédagogiques, la grille détaillée des modules, le protocole
                d’intervention en milieu scolaire (programme pHARe), l’organigramme, la démarche qualité et les
                conditions d’accessibilité aux personnes en situation de handicap.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/livret-top.pdf"
                download="Livret-Accueil-TOP-OTOP.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm shadow-2xl hover:bg-stone-100 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={18} className="text-orange-600" />
                <span>Télécharger le PDF (34 pages)</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition"
              >
                <MessageCircle size={18} />
                <span>Demander par WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 : MODALITÉS PRATIQUES & FINANCEMENT ─── */}
      <section id="modalites" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Organisation & Financement
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-3 tracking-tight">
              Modalités et Délais d’Accès
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Toutes les informations pratiques extraites directement de notre livret d’accueil pour préparer votre
              session en toute sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Durée & Format</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>3 jours (21 heures)</strong> en présentiel. Sessions inter-entreprises ou intra sur site client
                (Var, PACA, France entière, Suisse, Belgique).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <Users size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Public & Prérequis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Aucun prérequis.</strong> Ouvert à tous : salariés, dirigeants, enseignants, soignants,
                particuliers. Groupe limité à 10-12 participants max.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <Building2 size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Financement Possible</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Éligible OPCO (salariés), FAFCEA (artisans), FIF-PL / AGEFICE (indépendants) et plan de formation.
                Mélissa vous accompagne dans le montage du dossier.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <Shield size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Délais & Inscription</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accès sous 7 à 15 jours après signature de la convention. Questionnaire préalable d’analyse des besoins
                pour adapter le contenu à vos objectifs.
              </p>
            </div>
          </div>

          {/* Mentions Accessibilité Handicap */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-700">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-slate-700 flex items-center justify-center shrink-0">
              <Heart size={20} />
            </div>
            <div className="flex-1">
              <strong className="block text-slate-900 font-bold mb-0.5">
                Accessibilité & Référent Handicap (extrait livret p.4 & p.20) :
              </strong>
              <span>
                Nos formations sont ouvertes à tous. Un entretien préalable permet d’adapter le contenu, les supports et
                les conditions d’accueil aux besoins spécifiques des personnes en situation de handicap. Référente dédiée :
                Mélissa Jennadi.
              </span>
            </div>
            <a
              href="mailto:formation.rmcf@gmail.com?subject=Demande%20Accessibilit%C3%A9%20Handicap%20TOP"
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-slate-800 shrink-0 transition"
            >
              Signaler un besoin
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 : AVIS & TÉMOIGNAGES (CONFIANCE TOP) ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Une Confiance TOP®
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Retours d&apos;expérience de participants à nos formations et interventions de terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.note)].map((_, n) => (
                      <Star key={n} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-6">« {t.text} »</p>
                </div>
                <div className="border-t border-stone-200 pt-3">
                  <div className="font-extrabold text-xs text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 9 : FAQ DÉDIÉE MÉTHODE TOP ─── */}
      <section className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Foire Aux Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3 tracking-tight">
              Questions Fréquentes sur la FI-TOP
            </h2>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "Pourquoi seulement la Formation Initiale (FI-TOP 3 jours) et pas de cursus maître praticien ?",
                a: "Parce que notre objectif chez Ô'TOP Formations est l'efficacité concrète et immédiate. La FI-TOP de 3 jours (21h) vous donne 100% des outils nécessaires pour réguler votre stress, récupérer votre énergie et performer au quotidien en toute autonomie. Les formations longues théoriques ne correspondent pas aux besoins opérationnels des entreprises et des personnes actives.",
              },
              {
                q: "Les techniques sont-elles utilisables discrètement au travail ?",
                a: "Absolument. Les exercices de respiration (comme la respiration 4-6) et de relaxation différentielle s'exécutent les yeux ouverts, assis à votre bureau, en marchant ou pendant une réunion tendue, sans que personne autour de vous ne s'en rende compte.",
              },
              {
                q: "Comment se déroule la prise en charge financière ?",
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
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform ${activeFaq === fIdx ? 'rotate-180 text-orange-600' : ''}`}
                  />
                </button>
                {activeFaq === fIdx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 : CONTACT, DEVIS & DIAGNOSTIC OFFERT ─── */}
      <section id="contact" className="py-16 sm:py-24 bg-white border-t border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Coordonnées Directes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  Contact & Inscription
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3 tracking-tight">
                  Échangeons sur Votre Projet
                </h2>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  Réservez un échange téléphonique bienveillant de 15 minutes avec <strong>Mélissa Jennadi</strong> pour
                  clarifier vos besoins, valider le calendrier des sessions et étudier vos financements disponibles.
                </p>
              </div>

              {/* Coordonnées officielles du livret */}
              <div className="space-y-3.5 bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <a
                  href="tel:+33767246825"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-orange-300 text-slate-800 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-600/10 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Téléphone direct</div>
                    <div className="text-sm font-extrabold text-slate-900">07 67 24 68 25 / 07 49 23 94 23</div>
                  </div>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-emerald-300 text-slate-800 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp direct</div>
                    <div className="text-sm font-extrabold text-emerald-700">Discuter avec Mélissa Jennadi</div>
                  </div>
                </a>

                <a
                  href="mailto:formation.rmcf@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-stone-200 hover:border-orange-300 text-slate-800 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Email officiel</div>
                    <div className="text-sm font-extrabold text-slate-900">formation.rmcf@gmail.com</div>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-orange-950">Siège Ô&apos;TOP Formations :</div>
                <div className="text-slate-600">
                  Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules
                  <br />
                  SIRET : 990 443 186 00012 – NAF : 8559A – RCS Toulon
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <div className="lg:col-span-7 bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-xl">
              <h3 className="text-lg font-black text-slate-900 mb-1">Demande de Devis & Diagnostic Offert (15 min)</h3>
              <p className="text-xs text-slate-500 mb-6">
                Remplissez ce formulaire et Mélissa vous recontactera sous 24h avec une proposition sur mesure.
              </p>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-3">
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                  <div className="font-bold text-base">Votre message a été préparé avec succès !</div>
                  <p className="text-xs text-emerald-800">
                    Votre client mail a été ouvert. Vous pouvez également nous joindre directement par WhatsApp au{' '}
                    <strong>07 67 24 68 25</strong> pour une réponse immédiate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nom *</label>
                      <input
                        type="text"
                        required
                        value={formState.nom}
                        onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                        placeholder="Ex: Dupont"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formState.prenom}
                        onChange={(e) => setFormState({ ...formState, prenom: e.target.value })}
                        placeholder="Ex: Pierre"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email professionnel *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="pierre.dupont@entreprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Numéro de téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formState.telephone}
                        onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Votre profil / structure</label>
                      <select
                        value={formState.profil}
                        onChange={(e) => setFormState({ ...formState, profil: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
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
                      <label className="block font-bold text-slate-700 mb-1">Nombre estimé de participants</label>
                      <select
                        value={formState.participants}
                        onChange={(e) => setFormState({ ...formState, participants: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                      >
                        <option value="1 personne (individuel)">1 personne (individuel)</option>
                        <option value="2 à 5 personnes">2 à 5 personnes</option>
                        <option value="6 à 12 personnes (groupe complet)">6 à 12 personnes (groupe complet)</option>
                        <option value="Plus de 12 personnes (programme intra sur mesure)">
                          Plus de 12 personnes (sur mesure)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Votre message ou vos attentes spécifiques</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Précisez votre contexte (gestion du stress, harcèlement scolaire, QVT entreprise, prise en charge OPCO...)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-slate-900 text-xs focus:outline-none focus:border-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs shadow-lg shadow-orange-600/25 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
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

      {/* ─── FOOTER EXCLUSIF Ô'TOP BIEN-ÊTRE & PERFORMANCE (ISOLÉ) ─── */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src="/logo.png" alt="Ô'TOP Formations" className="w-10 h-10 rounded-full object-contain" />
                <div className="font-extrabold text-sm text-white">
                  Ô&apos;TOP <span className="text-orange-500">FORMATIONS</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                Pôle Bien-être & Performance. Organisme spécialisé dans les Techniques d’Optimisation du Potentiel
                (TOP®) pour particuliers, entreprises et institutions éducatives.
              </p>
              <div className="text-[11px] text-orange-400 font-semibold italic">
                « 2 Voix, 1 Mission : former pour transformer. »
              </div>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Formation Phare
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-400">
                <li>• Formation Initiale FI-TOP® (3 jours / 21h)</li>
                <li>• Modules de régulation du stress & sommeil</li>
                <li>• Application milieu scolaire & programme pHARe</li>
                <li>• Prévention des RPS et burn-out en entreprise</li>
                <li>• Accompagnement individualisé et petits groupes</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Coordonnées & Informations Légales
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-400">
                <li>📍 Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules</li>
                <li>📞 07 67 24 68 25 / 07 49 23 94 23</li>
                <li>📧 formation.rmcf@gmail.com</li>
                <li>🏢 SIRET : 990 443 186 00012 – RCS Toulon</li>
                <li>
                  📄{' '}
                  <a href="/livret-top.pdf" download className="text-orange-400 hover:underline">
                    Télécharger le Livret d’Accueil PDF (34 pages)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3 text-center sm:text-left">
            <div>© {new Date().getFullYear()} Ô&apos;TOP FORMATIONS. Tous droits réservés.</div>
            <div className="text-slate-400">
              Formation dispensée par Mélissa Jennadi & Régis Domergue • Pôle Bien-être & Performance
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
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-2xl shadow-emerald-800/40 transition hover:scale-105"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp Mélissa</span>
        </a>

        <a
          href="tel:+33767246825"
          aria-label="Appeler Mélissa"
          className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition hover:scale-105"
        >
          <Phone size={17} className="text-amber-400" />
        </a>
      </div>
    </div>
  );
}
