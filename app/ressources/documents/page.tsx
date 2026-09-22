'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PdfModal from '@/components/ui/pdf-modal';
import { FileText, Download, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Documents() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({ title: '', url: '' });

  const handleOpenDoc = (title: string, url: string) => {
    setSelectedDoc({ title, url });
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 border-b border-slate-800 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Ressources Officielles
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Documents & Plaquettes
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Téléchargez nos plaquettes pédagogiques, référentiels de compétences et documents légaux en libre accès.
          </p>
        </div>
      </section>

      {/* ── Document List ── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-5">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Programme Officiel des Formations IA & Réseaux Sociaux
                </h3>
                <p className="text-slate-400 text-sm">
                  Détail des certifications RS6776, RS7344, RS7351 (durées, modules, prérequis et évaluations).
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOpenDoc('Programme des Formations IA & Réseaux', '/Programme_de_Formation_TOP3.0.pdf')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-lg"
            >
              <Download size={16} />
              <span>Télécharger (PDF)</span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Plaquette Méthode TOP® (Techniques d&apos;Optimisation du Potentiel)
                </h3>
                <p className="text-slate-400 text-sm">
                  Le programme complet de notre formation initiale (21h) et formation de base (7h).
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOpenDoc('Plaquette Méthode TOP® (21h / 7h)', '/Programme_de_Formation_TOP3.0.pdf')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
            >
              <Download size={16} />
              <span>Télécharger (PDF)</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Livret d&apos;Accueil Stagiaire & Règlement Intérieur
                </h3>
                <p className="text-slate-400 text-sm">
                  Informations pratiques, engagements qualité Qualiopi et modalités d&apos;accueil des personnes en situation de handicap.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOpenDoc('Livret d\'Accueil & Règlement Intérieur', '/Programme_de_Formation_TOP3.0.pdf')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
            >
              <Download size={16} />
              <span>Télécharger (PDF)</span>
            </button>
          </div>

        </div>
      </section>

      {/* Modern Modal Popup */}
      <PdfModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        documentTitle={selectedDoc.title}
        pdfUrl={selectedDoc.url}
      />

      <Footer />
    </main>
  );
}
