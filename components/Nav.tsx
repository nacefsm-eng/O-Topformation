'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { Phone, Mail, Calendar, ArrowRight, Lock } from 'lucide-react';

const formationsLinks = [
  { 
    label: '🤖 Développer son activité avec l’IA (RS7344)', 
    desc: '21 h dont 2 h d’accompagnement • Prépare à la certification RS7344',
    href: '/formations/ia#rs7344' 
  },
  { 
    label: '⚡ IA générative (RS6776)', 
    desc: 'Prix de lancement 600 € jusqu’au 31/10 • 21 h dont 2 h d’accompagnement',
    href: '/formations/ia#rs6776' 
  },
  { 
    label: '📱 Réseaux sociaux (RS7351)', 
    desc: '21 h dont 2 h d’accompagnement • Prépare à la certification RS7351',
    href: '/formations/reseaux-sociaux' 
  },
  { 
    label: '🧭 Méthode TOP® — conduite du changement (21 h)', 
    desc: 'Techniques d’Optimisation du Potentiel pour équipes & dirigeants',
    href: '/methode' 
  },
  { 
    label: '📋 Catalogue, prix et inscriptions', 
    desc: 'Grille tarifaire officielle, packs dégressifs & inscription en ligne',
    href: '/catalogue' 
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isIsolated = ['/respirez', '/formation-top', '/plaquette-top'].some(
    (p) => pathname === p || pathname?.startsWith(p + '/')
  );
  if (isIsolated) {
    return null;
  }

  return (
    <>
      {/* ─── Header Global Fixé en Haut ─── */}
      <header className="site-header fixed top-0 left-0 right-0 z-50 w-full transition-all">
        
        {/* ─── Top Bar Institutionnelle & Contact ─── */}
        <div className="top-bar hidden md:block bg-[#011438] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:+33767246825" className="flex items-center gap-1.5 hover:text-white transition">
                <Phone size={13} className="text-[#38bdf8]" />
                <span>07 67 24 68 25</span>
              </a>
              <a href="mailto:contact@otopformations.com" className="flex items-center gap-1.5 hover:text-white transition">
                <Mail size={13} className="text-[#38bdf8]" />
                <span>contact@otopformations.com</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://calendly.com/formation-rmcf/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition font-semibold"
              >
                <Calendar size={13} />
                <span>Prendre RDV (15 min gratuit)</span>
              </a>
              <span className="text-slate-600">•</span>
              <Link
                href="/connexion"
                className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition font-semibold"
              >
                <Lock size={12} />
                <span>Espace Stagiaire</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Main Navigation Bar ─── */}
        <nav
          className={`site-nav w-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#021435]/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-2.5'
              : 'bg-[#021435]/90 backdrop-blur-sm border-b border-slate-800/60 py-3'
          }`}
        >
          <div className="container mx-auto px-4 flex items-center justify-between gap-4">
            
            {/* Logo avec white-space nowrap pour éviter tout chevauchement */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 whitespace-nowrap text-decoration-none group"
              aria-label="Accueil Ô'TOP Formations"
            >
              <img 
                src="/logo.png" 
                alt="Ô'TOP Formations" 
                className="w-10 h-10 object-contain rounded-full shadow-md group-hover:scale-105 transition"
              />
              <span className="font-extrabold text-white text-base tracking-tight whitespace-nowrap brand-name">
                Ô&apos;TOP <span className="text-[#38bdf8] brand-highlight">FORMATIONS</span>
              </span>
            </Link>

            {/* Desktop Links (Bien espacés, sans wrap) */}
            <ul className="site-nav-links hidden lg:flex items-center gap-5 text-[13px] font-medium text-slate-300 whitespace-nowrap list-none m-0 p-0" role="menubar">
              
              {/* Dropdown Nos Formations */}
              <li className="relative group" role="none">
                <button
                  className="site-nav-dropdown-btn flex items-center gap-1 hover:text-white transition py-2 bg-transparent border-0 cursor-pointer text-slate-300 font-medium text-[13px]"
                  type="button"
                  aria-haspopup="true"
                >
                  <span>Nos formations</span>
                  <span className="text-[10px] opacity-70">▾</span>
                </button>
                
                {/* Menu déroulant */}
                <ul className="site-dropdown-menu absolute top-full left-0 hidden group-hover:block w-80 p-2 rounded-2xl bg-[#031538] border border-slate-700 shadow-2xl list-none z-50">
                  {formationsLinks.map((item) => (
                    <li key={item.label} role="none">
                      <Link
                        href={item.href}
                        className="site-dropdown-item block p-2.5 rounded-xl hover:bg-slate-800/80 transition"
                        role="menuitem"
                      >
                        <div className="site-dropdown-title font-bold text-white text-xs">{item.label}</div>
                        <div className="site-dropdown-desc text-[11px] text-slate-400 mt-0.5 leading-snug">{item.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li role="none">
                <Link href="/catalogue#packs" className="hover:text-white transition" role="menuitem">
                  Packs
                </Link>
              </li>

              <li role="none">
                <Link href="/entreprises" className="hover:text-white transition" role="menuitem">
                  Entreprises
                </Link>
              </li>

              <li role="none">
                <Link href="/methode" className="hover:text-white transition" role="menuitem">
                  Conduite du changement
                </Link>
              </li>

              <li role="none">
                <Link href="/financement" className="hover:text-white transition" role="menuitem">
                  Financement
                </Link>
              </li>

              <li role="none">
                <Link href="/equipe" className="hover:text-white transition" role="menuitem">
                  Équipe
                </Link>
              </li>

              <li role="none">
                <Link href="/contact" className="hover:text-white transition" role="menuitem">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop Actions : Bouton Rouge Inscription + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/commander"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/25 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Commencer mon inscription →</span>
              </Link>

              <ThemeToggle />
            </div>

            {/* Mobile hamburger button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className={`p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* Spacer pour éviter que le contenu ne passe sous le header fixe */}
      <div className="h-[102px] hidden md:block" />
      <div className="h-[64px] md:hidden" />

      {/* ─── Mobile Menu Overlay ─── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#020b1f] text-white p-6 flex flex-col justify-between overflow-y-auto"
          aria-hidden={!mobileOpen}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="Ô'TOP" className="w-9 h-9 rounded-full object-contain" />
                <span className="font-extrabold text-base text-white">
                  Ô&apos;TOP <span className="text-[#38bdf8]">FORMATIONS</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
                className="text-2xl text-slate-300 bg-transparent border-0 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-3 list-none p-0 m-0 text-sm">
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)} className="block py-1 text-white font-bold">
                  Accueil
                </Link>
              </li>

              <li className="py-2 border-t border-b border-slate-800">
                <div className="text-xs font-bold text-cyan-400 uppercase mb-2">Nos Formations :</div>
                <div className="space-y-1.5 pl-2">
                  {formationsLinks.map((f) => (
                    <Link
                      key={f.label}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-xs text-slate-300"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li><Link href="/catalogue#packs" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Packs &amp; Tarifs</Link></li>
              <li><Link href="/entreprises" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Entreprises</Link></li>
              <li><Link href="/methode" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Conduite du changement</Link></li>
              <li><Link href="/financement" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Financement</Link></li>
              <li><Link href="/equipe" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Équipe</Link></li>
              <li><Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-300">Contact</Link></li>
              <li>
                <Link
                  href="/connexion"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-cyan-400 font-bold border-t border-slate-800"
                >
                  🔐 Espace Stagiaire (Connexion)
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <Link
              href="/commander"
              onClick={() => setMobileOpen(false)}
              className="w-full block py-3 text-center rounded-xl bg-red-600 text-white font-black text-xs shadow-lg"
            >
              Commencer mon inscription →
            </Link>
            <a
              href="https://calendly.com/otop-formation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full block py-2.5 text-center rounded-xl bg-slate-900 text-slate-200 font-bold text-xs border border-slate-800"
            >
              Prendre RDV (15 min gratuit)
            </a>
          </div>
        </div>
      )}

      {/* ─── Barre Basse Fixe sur Mobile (« S’inscrire » / « RDV ») ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#021435]/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center gap-2.5 lg:hidden">
        <Link
          href="/commander"
          className="flex-1 py-3 px-3 rounded-xl bg-red-600 text-white font-black text-xs text-center shadow-lg"
        >
          S’inscrire →
        </Link>
        <a
          href="https://calendly.com/otop-formation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs text-center border border-slate-700"
        >
          Prendre RDV (15 min)
        </a>
      </div>
    </>
  );
}
