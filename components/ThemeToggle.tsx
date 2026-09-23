'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full backdrop-blur-md transition-all duration-300 ${
        theme === 'clair' 
          ? 'bg-slate-200/90 border border-slate-300 shadow-inner' 
          : 'bg-slate-900/90 border border-slate-700/80 shadow-inner'
      }`}
      role="radiogroup"
      aria-label="Thème d'affichage"
    >
      {/* Bouton Nuit / Sombre */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'sombre'}
        onClick={() => setTheme('sombre')}
        title="Activer le mode sombre"
        aria-label="Mode sombre"
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          theme === 'sombre'
            ? 'bg-slate-800 text-cyan-400 shadow-md shadow-cyan-950/40 border border-cyan-500/40 scale-105'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
        }`}
      >
        <Moon size={15} />
      </button>

      {/* Bouton Jour / Clair */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'clair'}
        onClick={() => setTheme('clair')}
        title="Activer le mode clair"
        aria-label="Mode clair"
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          theme === 'clair'
            ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/30 border border-amber-300 scale-105'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
        }`}
      >
        <Sun size={15} />
      </button>
    </div>
  );
}
