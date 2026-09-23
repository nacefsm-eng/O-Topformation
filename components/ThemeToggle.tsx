'use client';

import React from 'react';
import { useTheme, ThemeMode } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes: { id: ThemeMode; label: string; icon: React.ReactNode; tooltip: string }[] = [
    { 
      id: 'sombre', 
      label: 'Sombre', 
      icon: <Moon size={14} className="transition-transform group-hover:-rotate-12" />, 
      tooltip: 'Mode Nuit / Sombre' 
    },
    { 
      id: 'clair', 
      label: 'Clair', 
      icon: <Sun size={14} className="transition-transform group-hover:rotate-45" />, 
      tooltip: 'Mode Clair / Lumineux' 
    },
  ];

  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full backdrop-blur-md shadow-inner ${
        theme === 'clair' ? 'bg-slate-200/80 border-slate-300' : 'bg-slate-900/80 border-slate-700/60'
      }`}
      role="group"
      aria-label="Sélecteur d'apparence et de couleurs"
    >
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            title={t.tooltip}
            className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
              isActive
                ? t.id === 'clair'
                  ? 'bg-amber-100 text-amber-950 shadow-md border border-amber-300'
                  : 'bg-slate-800 text-cyan-300 shadow-md border border-slate-600'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {t.icon}
            <span className="hidden sm:inline text-[11px]">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
