'use client';

import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip on Desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Une question ? Échangez avec Mélissa</span>
      </div>

      {/* Floating 52x52px Button */}
      <a
        href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20O%27TOP."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Mélissa sur WhatsApp"
        className="w-[52px] h-[52px] rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-current text-white"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.822 6.012-1.577c1.714.933 3.682 1.467 5.774 1.467 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  );
}
