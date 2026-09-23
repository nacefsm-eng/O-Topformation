'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const formationsLinks = [
  { 
    label: '🤖 IA & Automatisation Business (RS7344)', 
    desc: 'Intégration de l\'IA dans l\'entreprise, workflows & conformité IA Act',
    href: '/formations/ia' 
  },
  { 
    label: '⚡ IA Générative pour Indépendants (RS6776)', 
    desc: '16h vidéos, prompts avancés, GPT sur-mesure & gain de 15h/semaine',
    href: '/formations/ia' 
  },
  { 
    label: '📱 Préparation Certification Réseaux Sociaux (RS7351)', 
    desc: 'Formation préparant à la certification RS7351 • 11h+ vidéos, LinkedIn, Waalaxy, Instagram & Meta Ads',
    href: '/formations/reseaux-sociaux' 
  },
  { 
    label: '🧘 Méthode TOP® & Santé Mentale', 
    desc: 'Régulation du stress, prévention du burnout & endurance cognitive',
    href: '/formations/fi-top' 
  },
  { 
    label: '✨ Le Grand Récap : Toutes Nos Formations', 
    desc: 'IA, Réseaux Sociaux, Méthode TOP® & Financement selon statut',
    href: '/respirez' 
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

  return (
    <>
      {/* Top Bar Contact & Socials (Luxury Dark) */}
      <div className="top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="top-bar-socials">
            <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/835767209621029" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
          <div className="top-bar-contact">
            <a href="tel:+33767246825">📞 Mélissa : 07 67 24 68 25</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="tel:+33674797509">📞 Renaud : 06 74 79 75 09</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="mailto:contact@otopformation.fr">✉️ contact@otopformation.fr</a>
          </div>
        </div>
      </div>

      {/* Main Glass Nav */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Accueil O'TOP Formation" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo.png" alt="O'TOP Formation" height={44} style={{ height: '44px', width: 'auto' }} />
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="menubar">
            <li role="none">
              <Link href="/" className={pathname === '/' ? 'active' : ''} role="menuitem">
                Accueil
              </Link>
            </li>

            {/* Formations dropdown */}
            <li className="nav-dropdown" role="none">
              <button
                className="nav-dropdown-trigger"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                Formations Certifiantes <span aria-hidden="true" style={{ fontSize: '0.7rem' }}>▾</span>
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
              <Link
                href="/entreprises"
                className={pathname === '/entreprises' ? 'active' : ''}
                role="menuitem"
              >
                Entreprises & B2B
              </Link>
            </li>

            <li role="none">
              <Link
                href="/methode"
                className={pathname === '/methode' ? 'active' : ''}
                role="menuitem"
              >
                Méthode TOP®
              </Link>
            </li>

            <li role="none">
              <Link
                href="/financement"
                className={pathname === '/financement' ? 'active' : ''}
                role="menuitem"
              >
                Financement
              </Link>
            </li>

            <li role="none">
              <Link
                href="/equipe"
                className={pathname === '/equipe' ? 'active' : ''}
                role="menuitem"
              >
                Équipe
              </Link>
            </li>
          </ul>

          {/* Desktop actions */}
          <div className="nav-actions">
            <a
              href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20formations%20O%27TOP."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all"
              style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399' }}
            >
              <span>💬 WhatsApp</span>
            </a>

            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-full text-xs font-bold text-white transition-all shadow-lg hover:shadow-blue-500/25"
              style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}
            >
              Diagnostic 15 min ⚡
            </Link>
          </div>

          {/* Mobile hamburger button */}
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
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-hidden={!mobileOpen}
        style={{ background: '#030712', color: 'white' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="O'TOP Formation" height={44} />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            style={{ background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', color: '#cbd5e1' }}
          >
            ✕
          </button>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <li><Link href="/" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700 }}>Accueil</Link></li>
          <li style={{ padding: '0.75rem 0', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Formations Certifiantes :</div>
            {formationsLinks.map(f => (
              <Link key={f.label} href={f.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.4rem 0', color: '#cbd5e1', fontSize: '0.95rem' }}>
                {f.label}
              </Link>
            ))}
          </li>
          <li><Link href="/entreprises" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Entreprises & B2B</Link></li>
          <li><Link href="/methode" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>La Méthode TOP®</Link></li>
          <li><Link href="/financement" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Financement</Link></li>
          <li><Link href="/equipe" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Équipe</Link></li>
          <li style={{ marginTop: '1rem' }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full block py-3.5 text-center rounded-xl bg-blue-600 text-white font-bold">
              Demander un diagnostic (15 min) ⚡
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
