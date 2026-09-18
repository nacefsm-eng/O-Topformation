'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const formationsLinks = [
  { 
    label: '🧘 Santé Mentale & Méthode TOP®', 
    desc: 'Gestion du stress, sommeil, prévention RPS (21h / 7h)',
    href: '/formations/fi-top' 
  },
  { 
    label: '🤖 Intelligence Artificielle (RS7344 / RS6776)', 
    desc: 'Intégration IA pour dirigeants & IA Générative pour indépendants',
    href: '/formations/ia' 
  },
  { 
    label: '📱 Communication & Réseaux Sociaux (RS7351)', 
    desc: 'Meta, Canva, CapCut, stratégie de diffusion & acquisition',
    href: '/formations/reseaux-sociaux' 
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar Contact & Socials */}
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
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="tel:+33674797509">📞 Renaud : 06 74 79 75 09</a>
            <span style={{ opacity: 0.4 }}>|</span>
            <a href="mailto:formation.rmcf@gmail.com">✉️ formation.rmcf@gmail.com</a>
          </div>
        </div>
      </div>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`} style={{ padding: '0.75rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Accueil O'TOP Formation">
            <img src="/logo.png" alt="O'TOP Formation" height={48} style={{ height: '48px', width: 'auto' }} />
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
              Nos Formations Certifiantes <span aria-hidden="true">▾</span>
            </button>
            <ul className="nav-dropdown-menu" role="menu" style={{ width: '380px' }}>
              {formationsLinks.map((item) => (
                <li key={item.href + item.label} role="none" style={{ padding: '0.5rem 0' }}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? 'active' : ''}
                    role="menuitem"
                    style={{ display: 'block', padding: '0.5rem 1rem' }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--blue-900)' }}>{item.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: '2px' }}>{item.desc}</div>
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
              🏢 Solutions Entreprises & Digital
            </Link>
          </li>

          <li role="none">
            <Link
              href="/methode"
              className={pathname === '/methode' ? 'active' : ''}
              role="menuitem"
            >
              La Méthode TOP®
            </Link>
          </li>

          <li role="none">
            <Link
              href="/qualite"
              className={pathname === '/qualite' ? 'active' : ''}
              role="menuitem"
            >
              Qualité Qualiopi
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
            href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20un%20diagnostic%20pour%20une%20formation%20ou%20un%20projet."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ color: '#25D366', fontWeight: 700 }}
          >
            <span>💬 WhatsApp</span>
          </a>

          <Link href="/contact" className="btn btn-primary" style={{ background: 'var(--blue-900)', color: 'white' }}>
            Diagnostic Gratuit ⚡
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
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="O'TOP Formation" height={44} />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer le menu"
            style={{ background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', color: 'var(--blue-900)' }}
          >
            ✕
          </button>
        </div>

        <ul className="nav-mobile-links">
          <li>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Accueil
            </Link>
          </li>

          <li style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
            Nos Formations
          </li>

          {formationsLinks.map((item) => (
            <li key={item.href} style={{ paddingLeft: '0.75rem', marginBottom: '0.5rem' }}>
              <Link href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}

          <li style={{ marginTop: '1rem' }}>
            <Link href="/entreprises" onClick={() => setMobileOpen(false)}>
              🏢 Solutions Entreprises & Digital
            </Link>
          </li>

          <li>
            <Link href="/methode" onClick={() => setMobileOpen(false)}>
              La Méthode TOP®
            </Link>
          </li>

          <li>
            <Link href="/qualite" onClick={() => setMobileOpen(false)}>
              Qualité & Certifications
            </Link>
          </li>

          <li>
            <Link href="/equipe" onClick={() => setMobileOpen(false)}>
              Notre Équipe
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact & Diagnostic
            </Link>
          </li>
        </ul>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="https://wa.me/33767246825"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ width: '100%', justifyContent: 'center', background: '#25D366', color: 'white' }}
          >
            💬 Discuter sur WhatsApp
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Demander un Diagnostic (15 min) ⚡
          </Link>
        </div>
      </div>
    </>
  );
}
