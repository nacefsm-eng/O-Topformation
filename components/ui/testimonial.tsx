'use client';

import React, { useRef } from 'react';
import { TimelineContent } from '@/components/ui/timeline-animation';

export default function ClientFeedback() {
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

  return (
    <div className="w-full bg-slate-950 text-white py-20 px-4 relative overflow-hidden" ref={testimonialRef}>
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <article className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs uppercase tracking-widest font-semibold">
            ⭐ Retours d&apos;expérience de nos apprenants
          </div>
          <TimelineContent
            as="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Recommandé par les dirigeants, indépendants et professionnels
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Découvrez comment nos formations certifiées en IA, Cybersécurité et Méthode TOP® ont transformé leur quotidien professionnel.
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
              <div className="relative z-10">
                <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-200 text-base leading-relaxed mb-6">
                  « La formation IA a été un véritable accélérateur : nous avons automatisé nos relances clients et la rédaction de nos propositions. Nous avons récupéré plus de 6 heures par semaine dès le premier mois, sans écrire une seule ligne de code. »
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-bold text-white text-lg">
                    AR
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Alexandre Royer</h3>
                    <p className="text-slate-400 text-xs">Directeur d’Agence Conseil — PACA</p>
                  </div>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-xl"
            >
              <div className="flex text-amber-300 text-sm mb-3">★★★★★</div>
              <p className="text-white text-base font-medium leading-relaxed mb-6">
                « Les 5 heures de coaching 1-to-1 incluses font toute la différence. On a configuré nos propres automatisations directement sur nos outils en direct. Prise en charge FIF-PL instruite rapidement via leur partenaire porteur. »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-blue-500/60">
                <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center font-black text-lg">
                  SC
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Sophie Caron</h3>
                  <p className="text-blue-100 text-xs">Consultante Indépendante & Formatrice</p>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                « Côté cybersécurité, Régis nous a ouvert les yeux sur les vulnérabilités de nos boîtes mails et de nos outils cloud. Une pédagogie limpide, rassurante et redoutablement efficace. »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 text-base">
                  MD
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Marc Delorme</h3>
                  <p className="text-slate-400 text-xs">Co-fondateur & CTO — Éditeur SaaS</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                « La méthode TOP® combinée aux outils digitaux m'a permis de retrouver une clarté mentale et un sommeil réparateur en pleine période de pic de charge. Indispensable pour tout entrepreneur sous tension. »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-blue-400 text-base">
                  CL
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Céline Laurent</h3>
                  <p className="text-slate-400 text-xs">Responsable Ressources Humaines</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                « Réactivité impressionnante. Réponse sur WhatsApp en moins de 15 minutes, dossier administratif géré clé en main et accès à la plateforme dans la journée. »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-purple-400 text-base">
                  TB
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Thomas Bernard</h3>
                  <p className="text-slate-400 text-xs">Avocat d’affaires & Dirigeant</p>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500/50 p-6 shadow-xl"
            >
              <div className="flex text-amber-300 text-sm mb-3">★★★★★</div>
              <p className="text-white text-base font-medium leading-relaxed mb-6">
                « Grâce à la certification RS6776, j'ai valorisé mon profil auprès de mes clients et augmenté mon taux horaire de 35% en intégrant des automatisations IA. »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-blue-500/60">
                <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center font-black text-lg">
                  NV
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Nicolas V.</h3>
                  <p className="text-blue-100 text-xs">Growth Marketer & Freelance</p>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={7}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-slate-900/90 text-white overflow-hidden rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-200 text-base leading-relaxed mb-6">
                  « Une équipe humaine, passionnée et experte. On sent immédiatement que ce ne sont pas des vendeurs de vent, mais des professionnels de terrain. Je recommande les yeux fermés. »
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center font-bold text-white text-lg">
                    EK
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Élodie Klein</h3>
                    <p className="text-slate-400 text-xs">Directrice Générale — Retail</p>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </div>
  );
}
