import React from 'react';
import { Clock, Laptop, MapPin, Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

interface PracticalInfoProps {
  duration?: string;
  format?: string;
  location?: string;
  certification?: string;
  funding?: string;
  prerequisites?: string;
}

export default function PracticalInfoBlock({
  duration = "21 heures (dont 2 h d'accompagnement individuel avec un expert)",
  format = "E-learning tutoré à distance ou présentiel / distanciel synchrone",
  location = "En ligne sur plateforme sécurisée ou Espace Gamma 1, 83190 Ollioules",
  certification = "Préparation à la certification France Compétences (évaluation facultative sur demande)",
  funding = "Prise en charge possible OPCO (salariés) ou FAF / FIF-PL (indépendants) via notre partenaire porteur certifié Qualiopi Eloq-One",
  prerequisites = "Aucun prérequis technique ou informatique obligatoire"
}: PracticalInfoProps) {
  return (
    <section className="py-12 px-4 bg-slate-900/80 border-t border-b border-slate-800 my-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            Cadre de formation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Informations Pratiques &amp; Modalités
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Clock size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Durée</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{duration}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <Laptop size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Format &amp; Modalités</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{format}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                <MapPin size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Lieu / Accès</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{location}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Award size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Certification &amp; Évaluation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{certification}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Financements</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{funding}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Prérequis &amp; Public</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{prerequisites}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
