'use client';

import React from 'react';
import { FileText, Download, MessageCircle, X, ShieldCheck } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
  pdfUrl?: string;
}

export default function PdfModal({
  isOpen,
  onClose,
  documentTitle = 'Programme & Plaquette de Formation',
  pdfUrl = '/Programme_de_Formation_TOP3.0.pdf',
}: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 text-white shadow-2xl shadow-blue-900/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Modal Icon & Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <FileText size={24} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={12} />
              Certifié Qualiopi
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {documentTitle}
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Consultez la plaquette officielle d&apos;Ô&apos;TOP Formation avec le détail des modules, les modalités d&apos;évaluation et les options de financement étudiées selon votre situation via notre partenaire Eloqone (OPCO, FAF, CPF).
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={pdfUrl}
            download
            onClick={onClose}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-blue-500/25 cursor-pointer text-sm"
          >
            <Download size={18} />
            <span>Télécharger le document maintenant (PDF)</span>
          </a>

          <a
            href={`https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20recevoir%20la%20plaquette%20compl%C3%A8te%20et%20le%20programme%20de%20formation%20par%20message.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-emerald-400 font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer text-sm"
          >
            <MessageCircle size={18} />
            <span>Recevoir par WhatsApp avec Mélissa (07 67 24 68 25)</span>
          </a>
        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          Accès instantané et gratuit • Sans engagement
        </p>
      </div>
    </div>
  );
}
