'use client';

import React from 'react';
import { CheckCircle2, Sparkles, X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CongratulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName?: string;
  courseTitle?: string;
  trainingTitle?: string;
  onWhatsAppClick?: () => void;
}

export default function CongratulationsModal({
  isOpen,
  onClose,
  candidateName = 'Cher(e) stagiaire',
  courseTitle,
  trainingTitle,
  onWhatsAppClick,
}: CongratulationsModalProps) {
  if (!isOpen) return null;

  const displayTitle = courseTitle || trainingTitle || 'Formation Certifiante';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-10 text-white shadow-2xl shadow-blue-600/30 overflow-hidden text-center"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/20 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[90px] pointer-events-none rounded-full" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>

          {/* Big Celebration Icon */}
          <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40"
            >
              <CheckCircle2 size={42} strokeWidth={2.5} />
            </motion.div>
            <div className="absolute -top-2 -right-2 text-amber-300 animate-bounce">
              <Sparkles size={24} />
            </div>
          </div>

          {/* Tag badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} />
            Dossier &amp; Candidature Reçus
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
            FÉLICITATIONS !
          </h2>
          <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            TA CANDIDATURE A BIEN ÉTÉ PRISE EN COMPTE
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            {candidateName ? `Merci ${candidateName} ! ` : ''}
            Votre demande pour <strong>{displayTitle}</strong> est enregistrée. Mélissa et Renaud préparent l&apos;étude de vos financements (OPCO, FIF-PL) sous 24h ouvrées.
          </p>

          {/* Action Cards */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => {
                if (onWhatsAppClick) onWhatsAppClick();
                onClose();
              }}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-600/30 cursor-pointer text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              <span>Accélérer mon dossier sur WhatsApp (15 min) 💬</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Continuer ma visite sur le site
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2">
            <span>📞 Ligne directe :</span>
            <strong className="text-white">07 67 24 68 25</strong>
            <span>(Mélissa)</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
