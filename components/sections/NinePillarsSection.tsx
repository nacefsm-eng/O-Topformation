'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Smile, 
  Megaphone, 
  Heart, 
  ShieldAlert, 
  Users, 
  Scale, 
  Boxes, 
  Eye, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';

export const PILLARS_DATA = [
  {
    number: "01",
    title: "Changer",
    subtitle: "Sortir des schémas automatiques",
    desc: "Identifier les boucles réflexes toxiques qui consument votre énergie mentale. Reprendre la main sur ses choix d'action avant l'emballement du système nerveux.",
    icon: Brain,
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/40",
    tag: "Neuro-Cognition"
  },
  {
    number: "02",
    title: "Comportements de Croissance",
    subtitle: "Comprendre les moteurs de progression",
    desc: "Transformer l'adversité et l'effort continu en leviers de montée en compétence, sans basculer dans l'épuisement ou la culpabilisation.",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/40",
    tag: "Motivation Durable"
  },
  {
    number: "03",
    title: "Acceptation Positive",
    subtitle: "Transformer le regard sur soi et sur les autres",
    desc: "Distinguer ce qui dépend de vous de ce qui ne dépend pas de vous. Cesser d'absorber l'anxiété collective pour préserver sa lucidité opérationnelle.",
    icon: Smile,
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/40",
    tag: "Détachement Lucidité"
  },
  {
    number: "04",
    title: "Dire c'est Grandir",
    subtitle: "Oser s'exprimer pour avancer",
    desc: "Rompre le silence qui détruit les professionnels de terrain. Exprimer ses limites, poser ses alertes avec fermeté, calme et impact sans agressivité.",
    icon: Megaphone,
    color: "from-rose-500/20 to-orange-500/20",
    border: "border-rose-500/40",
    tag: "Expression Stratégique"
  },
  {
    number: "05",
    title: "L'Intelligence Émotionnelle",
    subtitle: "Comprendre et gérer ses émotions",
    desc: "Ne plus subir la montée de cortisol ou l'engourdissement émotionnel. Reconnaître les signaux avant-coureurs pour réajuster sa physiologie en direct.",
    icon: Heart,
    color: "from-red-500/20 to-pink-500/20",
    border: "border-red-500/40",
    tag: "Physio-Régulation"
  },
  {
    number: "06",
    title: "Atelier Colère & Peur",
    subtitle: "Que faire face à la colère • Que faire face à la peur",
    desc: "Protocoles d'action d'urgence : techniques de respiration bloquée, ancrage somatique et désactivation des tempêtes émotionnelles en plein cœur de l'action.",
    icon: ShieldAlert,
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/40",
    tag: "Gestion de Crise"
  },
  {
    number: "07",
    title: "Atelier Communication Cognitive",
    subtitle: "S'exercer pour mieux communiquer",
    desc: "Mises en situation sous stress simulé : synchronisation verbale et non-verbale, clarté des consignes en urgence et écoute active désamorçante.",
    icon: Users,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/40",
    tag: "Dynamique d'Équipe"
  },
  {
    number: "08",
    title: "Régler le Conflit",
    subtitle: "Transformer les tensions en opportunités",
    desc: "Désamorcer l'escalade conflictuelle dans les services hospitaliers, les écoles, les brigades ou les comités de direction par la méthode des faits et du recadrage.",
    icon: Scale,
    color: "from-amber-500/20 to-amber-600/20",
    border: "border-amber-500/40",
    tag: "Médiation & Cadre"
  },
  {
    number: "09",
    title: "Théorie des 3 C",
    subtitle: "Cadre simple pour mieux comprendre et agir",
    desc: "Le modèle d'alignement O'TOP : Corps (physiologie), Cœur (émotions), Cerveau (cognition). Un canevas d'intervention simple, ultra-mémorisable et immédiatement applicable.",
    icon: Boxes,
    color: "from-emerald-500/20 to-amber-500/20",
    border: "border-emerald-500/40",
    tag: "Alignement Total"
  }
];

export default function NinePillarsSection({ 
  showImageModalBtn = true,
  title = "Les 9 Piliers pour Mieux Comprendre l'Humain",
  subtitle = "L'architecture cognitive & comportementale enseignée dans nos formations TOP®"
}: { 
  showImageModalBtn?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [showInfographic, setShowInfographic] = useState(false);

  return (
    <section className="relative py-20 bg-slate-950 text-white overflow-hidden border-y border-slate-800/80">
      {/* Background ambient halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Méthodologie Opérationnelle T.O.P
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>

          {showImageModalBtn && (
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowInfographic(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 text-sm font-medium transition-all shadow-lg shadow-black/40 group"
              >
                <Eye className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Voir l&apos;infographie originale officielle</span>
              </button>
            </div>
          )}
        </div>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS_DATA.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedPillar(isSelected ? null : idx)}
                className={`relative rounded-2xl bg-slate-900/80 backdrop-blur-md border p-6 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                  isSelected 
                    ? `${pillar.border} ring-2 ring-amber-500/30 shadow-xl shadow-amber-500/10` 
                    : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6 text-amber-300" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                        PILIER #{pillar.number}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 mt-1 uppercase tracking-wide">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom link indication */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Intégré au cursus TOP
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform text-slate-400 flex items-center gap-1">
                    Détail <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>🎯</span> Une méthode éprouvée sur le terrain, pas des gadgets théoriques
            </h4>
            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              Chacun de ces 9 piliers fait l&apos;objet d&apos;exercices pratiques (respiration RMD, relaxation paradoxale, imagerie PMR, scénarios sous tension) pour un ancrage durable par la pratique.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa,%20je%20souhaite%20en%20savoir%20plus%20sur%20les%209%20piliers%20TOP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Échanger avec Mélissa sur WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Infographic */}
      <AnimatePresence>
        {showInfographic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowInfographic(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">Infographie Officielle</span>
                  <span className="text-slate-400 text-xs">— 9 Piliers pour Mieux Comprendre l&apos;Humain</span>
                </div>
                <button
                  onClick={() => setShowInfographic(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                <img
                  src="/9-piliers-top.png"
                  alt="9 Piliers pour mieux comprendre l'humain - O'TOP Formation"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowInfographic(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
