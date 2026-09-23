'use client';

import React, { useRef } from 'react';
import { TimelineContent } from '@/components/ui/timeline-animation';

export default function ClientFeedback({ limit }: { limit?: number }) {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(8px)',
      y: 20,
      opacity: 0,
    },
  };

  const isThree = limit === 3;

  return (
    <div className="w-full bg-slate-950 text-white py-20 px-4 relative overflow-hidden" ref={testimonialRef}>
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <article className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs uppercase tracking-widest font-semibold">
            ⭐ Études de cas &amp; retours d&apos;expérience types
          </div>
          <TimelineContent
            as="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Ce que nos apprenants mettent en place
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Exemples concrets d&apos;automatisations, de gains de temps et de régulation du stress mis en œuvre dans les entreprises et activités indépendantes.
          </TimelineContent>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">Formation IA (RS6776)</span>
                </div>
                <div className="text-xs space-y-1.5 text-slate-300">
                  <div><strong className="text-slate-200">Défi :</strong> 8h/semaine passées sur la rédaction manuelle de devis et propositions clients.</div>
                  <div><strong className="text-slate-200">Automatisation :</strong> Création d&apos;un GPT sur-mesure connecté à leurs modèles types et matrice de calcul.</div>
                  <div><strong className="text-emerald-400 font-semibold">Résultat mesuré :</strong> Gain moyen de 6h/semaine dès le premier mois, sans coder.</div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-bold text-white text-sm">
                    AR
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Alexandre Royer</h3>
                    <p className="text-slate-400 text-[11px]">Directeur d’Agence Conseil en Stratégie — PACA</p>
                  </div>
                </div>
              </div>
            </TimelineContent>

            {!isThree && (
              <TimelineContent
                animationNum={2}
                customVariants={revealVariants}
                timelineRef={testimonialRef}
                className="flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-300 text-sm">★★★★★</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-blue-700/80 px-2 py-0.5 rounded">5h Coaching 1-to-1</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-blue-50">
                    <div><strong className="text-white">Défi :</strong> Structurer l&apos;usage de l&apos;IA pour l&apos;analyse de profils sans risquer de fuite de données confidentielles.</div>
                    <div><strong className="text-white">Solution :</strong> 5h en tête-à-tête avec Renaud pour paramétrer un environnement sécurisé et des prompts d&apos;évaluation.</div>
                    <div><strong className="text-cyan-200 font-semibold">Résultat :</strong> Temps de synthèse divisé par 3, dossier de financement FIF-PL instruit via le partenaire porteur.</div>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-blue-500/60">
                    <div className="w-10 h-10 rounded-full bg-white text-blue-900 flex items-center justify-center font-black text-sm">
                      SC
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Sophie Caron</h3>
                      <p className="text-blue-100 text-[11px]">Consultante Indépendante en Management &amp; RH</p>
                    </div>
                  </div>
                </div>
              </TimelineContent>
            )}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">Formation IA Entreprise (RS7344)</span>
                </div>
                <div className="text-xs space-y-1.5 text-slate-300">
                  <div><strong className="text-slate-200">Défi :</strong> Cadrer l&apos;usage des outils IA dans les équipes sans enfreindre le cadre réglementaire (AI Act).</div>
                  <div><strong className="text-slate-200">Mise en place :</strong> Rédaction d&apos;une charte interne éthique et sécurisation des accès aux LLMs professionnels.</div>
                  <div><strong className="text-emerald-400 font-semibold">Résultat :</strong> Équipes formées à la méthode STEP, zéro donnée sensible transmise dans les modèles ouverts.</div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 text-sm">
                    MD
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Marc Delorme</h3>
                    <p className="text-slate-400 text-[11px]">Directeur des Opérations &amp; Systèmes d&apos;Information</p>
                  </div>
                </div>
              </div>
            </TimelineContent>

            {!isThree && (
              <TimelineContent
                animationNum={4}
                customVariants={revealVariants}
                timelineRef={testimonialRef}
                className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">★★★★★</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">Pôle TOP® (21h)</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-slate-300">
                    <div><strong className="text-slate-200">Défi :</strong> Charge mentale élevée, tensions d&apos;équipe et sommeil altéré en période de clôture.</div>
                    <div><strong className="text-slate-200">Outils TOP :</strong> Techniques de Respiration Relaxante (RR), RMP et gestion des pics de stress avant prise de parole.</div>
                    <div><strong className="text-emerald-400 font-semibold">Résultat :</strong> Lucidité préservée dans les urgences, récupération flash efficace en journée.</div>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-blue-400 text-sm">
                      CL
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Céline Laurent</h3>
                      <p className="text-slate-400 text-[11px]">Responsable Ressources Humaines — Industrie &amp; Logistique</p>
                    </div>
                  </div>
                </div>
              </TimelineContent>
            )}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-300 text-sm">★★★★★</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-blue-700/80 px-2 py-0.5 rounded">Réseaux Sociaux (RS7351)</span>
                </div>
                <div className="text-xs space-y-1.5 text-blue-50">
                  <div><strong className="text-white">Défi :</strong> Visibilité B2B inexistante et publication aléatoire sur LinkedIn sans stratégie de conversion.</div>
                  <div><strong className="text-white">Mise en place :</strong> Ligne éditoriale Canva Pro + automatisation des prises de contacts qualifiées avec Waalaxy.</div>
                  <div><strong className="text-cyan-200 font-semibold">Résultat :</strong> Flux régulier de prospects entrants et validation de la certification RS7351.</div>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-blue-500/60">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-900 flex items-center justify-center font-black text-sm">
                    NV
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Nicolas V.</h3>
                    <p className="text-blue-100 text-[11px]">Consultant Indépendant en Acquisition B2B</p>
                  </div>
                </div>
              </div>
            </TimelineContent>

            {!isThree && (
              <TimelineContent
                animationNum={6}
                customVariants={revealVariants}
                timelineRef={testimonialRef}
                className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">★★★★★</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">Accompagnement Sur-Mesure</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-slate-300">
                    <div><strong className="text-slate-200">Défi :</strong> Former l&apos;encadrement à la transition digitale sans jargon informatique rébarbatif.</div>
                    <div><strong className="text-slate-200">Approche :</strong> Pédagogie active, ateliers pratiques en direct et montage rapide du dossier OPCO.</div>
                    <div><strong className="text-emerald-400 font-semibold">Résultat :</strong> Équipes autonomes, gain d&apos;efficacité immédiat et zéro friction technique.</div>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center font-bold text-white text-sm">
                      EK
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Élodie Klein</h3>
                      <p className="text-slate-400 text-[11px]">Directrice Générale — Distribution Spécialisée</p>
                    </div>
                  </div>
                </div>
              </TimelineContent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
