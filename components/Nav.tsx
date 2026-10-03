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
      {/* ─── Top Bar Institutionnelle & Contact ─── */}
      <div className="top-bar hidden md:block bg-[#021435] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
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

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">Suivez-nous :</span>
            <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xs font-semibold">LinkedIn</a>
            <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xs font-semibold">Instagram</a>
            <a href="https://www.facebook.com/835767209621029" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xs font-semibold">Facebook</a>
          </div>
        </div>
      </div>

      {/* ─── Main Sticky / Fixed Navigation ─── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          
          {/* Logo with circular badge and brand typography */}
          <Link href="/" className="nav-logo-wrap" aria-label="Accueil Ô'TOP Formations" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img 
                src="/logo.png" 
                alt="Ô'TOP Formations" 
                style={{ width: '42px', height: '42px', objectFit: 'contain', borderRadius: '9999px', boxShadow: '0 0 12px rgba(56, 189, 248, 0.25)' }} 
              />
              <span className="brand-text" style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                Ô&apos;TOP <span style={{ color: '#38bdf8' }}>FORMATIONS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Links (Un seul menu simplifié conforme au cahier des charges) */}
          <ul className="nav-links" role="menubar">
            {/* Dropdown Nos Formations */}
            <li className="nav-dropdown" role="none">
              <button
                className="nav-dropdown-trigger"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                Nos formations <span aria-hidden="true" style={{ fontSize: '0.7rem' }}>▾</span>
              </button>
              <ul className="nav-dropdown-menu" role="menu" style={{ width: '380px' }}>
                {formationsLinks.map((item) => (
                  <li key={item.label} role="none">
                    <Link
                      href={item.href}
                      className={pathname === item.href ? 'active' : ''}
                      role="menuitem"
                    >
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>{item.label}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li role="none">
              <Link href="/catalogue#packs" className={pathname === '/catalogue' ? 'active' : ''} role="menuitem">
                Packs
              </Link>
            </li>

            <li role="none">
              <Link href="/entreprises" className={pathname === '/entreprises' ? 'active' : ''} role="menuitem">
                Entreprises
              </Link>
            </li>

            <li role="none">
              <Link href="/methode" className={pathname === '/methode' ? 'active' : ''} role="menuitem">
                Conduite du changement
              </Link>
            </li>

            <li role="none">
              <Link href="/financement" className={pathname === '/financement' ? 'active' : ''} role="menuitem">
                Financement
              </Link>
            </li>

            <li role="none">
              <Link href="/equipe" className={pathname === '/equipe' ? 'active' : ''} role="menuitem">
                Équipe
              </Link>
            </li>

            <li role="none">
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} role="menuitem">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Actions : Calendly RDV + Bouton Rouge Inscription + Espace Stagiaire + Theme Toggle */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Link
              href="/connexion"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/80 transition"
            >
              <Lock size={12} className="text-cyan-400" />
              <span>Espace Stagiaire</span>
            </Link>

            <a
              href="https://calendly.com/otop-formation"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
            >
              <Calendar size={13} className="text-cyan-400" />
              <span>Prendre RDV</span>
            </a>

            <Link
              href="/commander"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs shadow-lg shadow-red-600/25 transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Commencer mon inscription →</span>
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile hamburger button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="lg:hidden">
            <button
              className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              <span className="nav-hamburger-bar" />
              <span className="nav-hamburger-bar" />
              <span className="nav-hamburger-bar" />
            </button>
          </div>
        </div>
      </nav>
      <div style={{ height: '60px' }} />

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-hidden={!mobileOpen}
        style={{ background: '#030712', color: 'white' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <img src="/logo.png" alt="Ô'TOP Formations" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>Ô&apos;TOP <span style={{ color: '#38bdf8' }}>FORMATIONS</span></span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            style={{ background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', color: '#cbd5e1' }}
          >
            ✕
          </button>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><Link href="/" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>Accueil</Link></li>
          
          <li style={{ padding: '0.75rem 0', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Nos Formations :</div>
            {formationsLinks.map(f => (
              <Link key={f.label} href={f.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.35rem 0', color: '#cbd5e1', fontSize: '0.88rem' }}>
                {f.label}
              </Link>
            ))}
          </li>

          <li><Link href="/catalogue#packs" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Packs &amp; Tarifs</Link></li>
          <li><Link href="/entreprises" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Entreprises</Link></li>
          <li><Link href="/methode" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Conduite du changement</Link></li>
          <li><Link href="/financement" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Financement</Link></li>
          <li><Link href="/equipe" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Équipe</Link></li>
          <li><Link href="/contact" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1rem' }}>Contact</Link></li>

          <li style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link 
              href="/connexion" 
              onClick={() => setMobileOpen(false)} 
              className="w-full block py-3 text-center rounded-xl bg-slate-900 text-cyan-300 font-bold text-xs border border-cyan-500/30"
            >
              🔐 Espace Stagiaire (Connexion)
            </Link>
            <Link 
              href="/commander" 
              onClick={() => setMobileOpen(false)} 
              className="w-full block py-3.5 text-center rounded-xl bg-red-600 text-white font-black text-xs shadow-lg"
            >
              Commencer mon inscription →
            </Link>
            <a 
              href="https://calendly.com/otop-formation" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setMobileOpen(false)} 
              className="w-full block py-3 text-center rounded-xl bg-slate-800 text-slate-200 font-bold text-xs"
            >
              Prendre RDV (15 min)
            </a>
          </li>

          <li style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
            <ThemeToggle />
          </li>
        </ul>
      </div>

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
