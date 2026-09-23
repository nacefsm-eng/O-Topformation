'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CongratulationsModal from '@/components/ui/congratulations-modal';
import NinePillarsSection from '@/components/sections/NinePillarsSection';
import { 
  Brain, 
  Clock, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  Award, 
  Users, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Utensils,
  BookOpen
} from 'lucide-react';

export default function FiTopPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [showModal, setShowModal] = useState(false);

  const modules = [
    {
      title: 'Module 1 — Connaissances de base, Régulation & Respiration',
      subtitle: 'Poser le socle fondamental des Techniques d’Optimisation du Potentiel',
      items: [
        'La méthode TOP® : origines et historique, champ d’applications, objectifs',
        'La respiration : objectifs physiologiques et techniques TOP®',
        'Pratique guidée des différentes respirations',
        'La Relaxation Musculaire Directe (RMD)',
        'Les mécanismes du stress et la charge mentale',
        'La météo TOP® : auto-diagnostic de son état interne',
        'La respiration régulatrice pour calmer l\'activation émotionnelle immédiate',
      ],
    },
    {
      title: 'Module 2 — Récupération, Fatigue, Sommeil & Décharge Émotionnelle',
      subtitle: 'Optimiser la récupération physique et psychique en situation exigeante',
      items: [
        'La Relaxation Paradoxale (RPa)',
        'La boîte à tracas : technique d’extériorisation des ruminations',
        'La Relaxation Musculaire Indirecte (RMI)',
        'Comprendre les cycles du sommeil et gérer la dette de fatigue',
        'Pratique avancée des respirations de récupération',
        'La balade sensorielle réelle : ancrage dans l’instant présent',
        'La balade sensorielle imaginaire : régénération par l’évocation mentale',
      ],
    },
    {
      title: 'Module 3 — Motivation, Dynamisation & Préparation Mentale à la Réussite',
      subtitle: 'Mobiliser son potentiel maximal au moment clé',
      items: [
        'Le Renforcement Positif (R+) et l’auto-efficacité',
        'La Dynamisation Psycho-Physiologique Personnalisée (DPP)',
        'La Relaxation Psycho-Physiologique Personnalisée (R3P)',
        'Les leviers profonds de la motivation individuelle et collective',
        'La Préparation Mentale de la Réussite (PMR) : protocole d\'imagerie prospective',
        'Le Signal d’Ajustement Réflexe (SAR) : switch attentionnel rapide',
        'La Répétition Mentale (RM) des gestes techniques et prises de parole',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* ── HERO FORMATION FI TOP ── */}
      <section className="pt-24 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/30 via-slate-950 to-slate-950 border-b border-slate-800 px-4">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <Brain size={16} />
              Cursus Développement Personnel &amp; Prérequis pour Intégrer le Praticien TOP
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Régulez votre stress, préservez votre énergie et renforcez votre lucidité sous pression.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              Formation Initiale aux Techniques d’Optimisation du Potentiel (FI TOP® — 21h). Une boîte à outils concrète et éprouvée pour mieux récupérer, réguler vos émotions et maintenir votre efficacité au quotidien dans vos contextes professionnels et personnels les plus exigeants.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-left">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Durée</div>
                <div className="text-lg font-bold text-white">21h (3 jours)</div>
                <div className="text-xs text-amber-400">1 week-end complet</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Format</div>
                <div className="text-lg font-bold text-white">Présentiel ou Visio</div>
                <div className="text-xs text-blue-400">Ollioules ou Distanciel</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Prérequis</div>
                <div className="text-lg font-bold text-emerald-400">Aucun</div>
                <div className="text-xs text-slate-400">Ouvert à tous</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Financements</div>
                <div className="text-lg font-bold text-white">OPCO / FIF-PL</div>
                <div className="text-xs text-emerald-400">Prise en charge selon éligibilité</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-sm sm:text-base shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Réserver mon diagnostic gratuit de 15 min ⚡</span>
              </Link>

              <a
                href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20sur%20la%20formation%20FI%20TOP%C2%AE%20(21h)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>Être rappelé(e) par Mélissa (Formatrice TOP®)</span>
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3 MODULES DU PROGRAMME (ACCORDION) ── */}
      <section className="py-20 px-4 border-b border-slate-850">
        <div className="container mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Structure du Cursus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Programme Pédagogique Détaillé
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Un apprentissage progressif alliant théorie scientifique, mises en situation et boîtes à outils concrètes.
            </p>
          </div>

          <div className="space-y-4">
            {modules.map((mod, index) => {
              const isOpen = openModule === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                        Étape {index + 1} • 7 Heures
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        {mod.subtitle}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40">
                      <ul className="space-y-2.5 text-sm text-slate-300">
                        {mod.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── LES 9 PILIERS DE LA FORMATION TOP ── */}
      <NinePillarsSection 
        title="Les 9 Piliers Développés en Formation TOP®"
        subtitle="Chaque participant expérimente ces 9 piliers pour passer de la réaction automatique à la maîtrise de ses états internes."
      />

      {/* ── MODALITÉS PÉDAGOGIQUES, HORAIRES & REPAS ── */}
      <section className="py-20 px-4 bg-slate-900/60 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Organisation & Logistique
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Modalités et Déroulement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Horaires & Rythme</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                De <strong>9h00 à 18h00</strong> : cours théoriques et pratiques de 9h à 12h et de 14h à 17h, suivis d&apos;exercices d&apos;application guidée de 17h à 18h.
              </p>
              <div className="pt-2 text-xs text-amber-400 font-semibold">
                1 week-end de 3 jours : Vendredi, Samedi & Dimanche
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Utensils size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Restauration sur Place</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pause déjeuner de 12h00 à 14h00. Possibilité d&apos;apporter son repas : <strong>micro-onde, réfrigérateur et salle à manger</strong> disponibles en intérieur comme en extérieur.
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-semibold">
                Cadre agréable et convivial à Ollioules
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Supports envoyés à J-5</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Supports de cours complets (cours PDF et slides de présentation) transmis 5 jours avant le début pour préparer sereinement votre entrée en formation.
              </p>
              <div className="pt-2 text-xs text-indigo-400 font-semibold">
                Inscriptions jusqu&apos;à 48h avant
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── MODALITÉS D'ÉVALUATIONS & CERTIFICATION ── */}
      <section className="py-20 px-4 border-b border-slate-850">
        <div className="container mx-auto max-w-5xl">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Award size={14} />
                  Validation des Compétences
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Modalités d&apos;Évaluation &amp; Suivi
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <span><strong>En début :</strong> Questionnaire d&apos;analyse des besoins pour apprécier le niveau initial et définir le profil de progression.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <span><strong>En cours :</strong> QCM formatif à mi-parcours pour vérifier l&apos;assimilation des techniques respiratoires et de relaxation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <span><strong>En fin :</strong> QCM sommatif (seuil de réussite supérieur à 70%) donnant droit à la <strong>délivrance de l&apos;Attestation / Certificat de compétences</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                    <span><strong>Satisfaction à chaud :</strong> Recueil continu de la qualité perçue à la fin de chaque module et du stage.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
                <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Financements &amp; Prise en Charge
                </div>
                <h3 className="text-xl font-bold text-white">
                  Financement étudié selon votre statut
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dossier instruit selon votre statut (OPCO, AFDAS, FIF PL, AGEFICE, AGEFIPH, employeur). Accompagnement complet au montage de votre dossier administratif.
                </p>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>Partenaire Qualiopi :</span>
                    <strong className="text-white">Portage certifié via Eloqone</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Contact Direct :</span>
                    <strong className="text-emerald-400">07 67 24 68 25 (Mélissa)</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic text-left">
                  Ô’TOP Formation intervient avec son partenaire Eloqone, organisme certifié Qualiopi, qui porte les actions de formation et accompagne les démarches de financement. Les possibilités de prise en charge sont étudiées selon votre statut et restent soumises à l’accord de l’organisme financeur.
                </p>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-sm transition-all shadow-lg cursor-pointer"
                >
                  Étudier mes possibilités de financement ⚡
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Pop-up de Félicitations innovant */}
      <CongratulationsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        candidateName=""
        courseTitle="Formation Initiale TOP® (FI TOP — 21h)"
        onWhatsAppClick={() => {
          window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20viens%20de%20d%C3%A9poser%20ma%20candidature%20pour%20la%20formation%20FI%20TOP%C2%AE%20(21h).', '_blank');
        }}
      />

      <Footer />
    </main>
  );
}
