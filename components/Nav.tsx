'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const formationsLinks = [
  { label: 'Formation FI TOP®', href: '/formations/fi-top' },
  { label: 'Formation FB-TOP', href: '/formations/fb-top' },
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Éducation Nationale', href: '/formations/fb-top' },
];

const ressourcesLinks = [
  { label: 'Blog', href: '/ressources/blog' },
  { label: 'FAQ', href: '/ressources/faq' },
  { label: 'Documents', href: '/ressources/documents' },
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
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Accueil O'TOP Formation">
          <img src="/logo.png" alt="O'TOP Formation" height={52} />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="menubar">
          <li role="none">
            <Link href="/" className={pathname === '/' ? 'active' : ''} role="menuitem">
              Accueil
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

          {/* Formations dropdown */}
          <li className="nav-dropdown" role="none">
            <button
              className="nav-dropdown-trigger"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              Formations <span aria-hidden="true">▾</span>
            </button>
            <ul className="nav-dropdown-menu" role="menu">
              {formationsLinks.map((item) => (
                <li key={item.href + item.label} role="none">
                  <Link
                    href={item.href}
                    className={pathname === item.href ? 'active' : ''}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li role="none">
            <Link
              href="/sous-traitance"
              className={pathname === '/sous-traitance' ? 'active' : ''}
              role="menuitem"
            >
              Sous-traitance
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

          <li role="none">
            <Link
              href="/qualite"
              className={pathname === '/qualite' ? 'active' : ''}
              role="menuitem"
            >
              Qualité
            </Link>
          </li>

          {/* Ressources dropdown */}
          <li className="nav-dropdown" role="none">
            <button
              className="nav-dropdown-trigger"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              Ressources <span aria-hidden="true">▾</span>
            </button>
            <ul className="nav-dropdown-menu" role="menu">
              {ressourcesLinks.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className={pathname === item.href ? 'active' : ''}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li role="none">
            <Link
              href="/contact"
              className={pathname === '/contact' ? 'active' : ''}
              role="menuitem"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary">
            Demander un devis →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile-menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="nav-mobile-menu"
        className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Menu de navigation"
      >
        <button
          className="nav-mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Fermer le menu"
          type="button"
        >
          ✕
        </button>

        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Accueil
            </Link>
          </li>

          <li>
            <Link href="/methode" className={pathname === '/methode' ? 'active' : ''}>
              La Méthode TOP®
            </Link>
          </li>

          {/* Formations – expanded inline */}
          <li className="nav-mobile-group">
            <span className="nav-mobile-group-label">Formations</span>
            <ul>
              {formationsLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/sous-traitance" className={pathname === '/sous-traitance' ? 'active' : ''}>
              Sous-traitance
            </Link>
          </li>

          <li>
            <Link href="/equipe" className={pathname === '/equipe' ? 'active' : ''}>
              Équipe
            </Link>
          </li>

          <li>
            <Link href="/qualite" className={pathname === '/qualite' ? 'active' : ''}>
              Qualité
            </Link>
          </li>

          {/* Ressources – expanded inline */}
          <li className="nav-mobile-group">
            <span className="nav-mobile-group-label">Ressources</span>
            <ul>
              {ressourcesLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile actions */}
        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary">
            Demander un devis →
          </Link>
        </div>
      </div>
    </>
  );
}
