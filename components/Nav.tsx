'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from '@/components/ThemeToggle';

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
    label: '📋 Catalogue & Inscriptions', 
    desc: 'Récapitulatif des cursus, modalités de règlement & inscription en ligne',
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
      {/* Main Glass Nav */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          
          {/* Logo with circular badge and brand typography */}
          <Link href="/" className="nav-logo-wrap" aria-label="Accueil O'TOP Formation" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img 
                src="/logo.png" 
                alt="O'TOP Formation" 
                style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '9999px' }} 
              />
              <span className="brand-text" style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
                Ô&apos;TOP <span style={{ color: '#38bdf8' }}>FORMATION</span>
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="menubar">
            <li role="none">
              <Link href="/" className={pathname === '/' ? 'active' : ''} role="menuitem">
                Accueil
              </Link>
            </li>

            <li role="none">
              <Link href="/a-propos" className={pathname === '/a-propos' ? 'active' : ''} role="menuitem">
                À Propos
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
                href="/brochure"
                className={pathname === '/brochure' ? 'active' : ''}
                role="menuitem"
              >
                Brochure 📄
              </Link>
            </li>

            <li role="none">
              <Link
                href="/respirez"
                className={pathname === '/respirez' ? 'active' : ''}
                role="menuitem"
              >
                Nos Offres
              </Link>
            </li>
          </ul>

          {/* Desktop actions with Theme Toggle only */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />
          </div>

          {/* Mobile hamburger button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="md:hidden">
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

      {/* Mobile menu overlay */}
      <div
        className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}
        aria-hidden={!mobileOpen}
        style={{ background: '#030712', color: 'white' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/logo.png" alt="O'TOP Formation" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#fff' }} />
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>Ô&apos;TOP FORMATION</span>
          </div>
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
          <li><Link href="/a-propos" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700 }}>À Propos d&apos;Ô&apos;TOP</Link></li>
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
          <li><Link href="/brochure" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Brochure & Plaquette 📄</Link></li>
          <li><Link href="/respirez" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Nos Offres & Tarifs</Link></li>
          <li style={{ marginTop: '1rem' }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full block py-3.5 text-center rounded-xl bg-blue-600 text-white font-bold">
              Demander un diagnostic (15 min) ⚡
            </Link>
          </li>
          <li style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </>
  );
}
