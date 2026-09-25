'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from '@/components/ThemeToggle';

const formationsLinks = [
  { 
    label: '⏱ Développer son activité avec l\'IA (RS7344)', 
    desc: 'Intégrer l\'IA dans l\'entreprise, conduite du changement & AI Act',
    href: '/formations/ia#rs7344' 
  },
  { 
    label: '⚡ IA générative : contenus rédactionnels et visuels (RS6776)', 
    desc: '21 h dont 2 h d\'accompagnement, 5 à 10 h gagnées par semaine selon votre activité',
    href: '/formations/ia#rs6776' 
  },
  { 
    label: '⏱ Communication digitale & réseaux sociaux (RS7351)', 
    desc: '21 h dont 2 h d\'accompagnement : LinkedIn, Instagram, Meta Ads',
    href: '/formations/reseaux-sociaux' 
  },
  { 
    label: '⏱ Méthode TOP® & conduite du changement', 
    desc: 'Gestion du stress, efficacité des équipes, adoption des nouveaux outils',
    href: '/formations/fi-top' 
  },
  { 
    label: '📋 Catalogue & Inscriptions', 
    desc: 'Récapitulatif des cursus, modalités de règlement & inscription en ligne',
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
                href="/equipe"
                className={pathname === '/equipe' ? 'active' : ''}
                role="menuitem"
              >
                Équipe
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
                href="/catalogue"
                className={pathname === '/catalogue' ? 'active' : ''}
                role="menuitem"
              >
                Catalogue
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
          <li><Link href="/equipe" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Notre Équipe</Link></li>
          <li><Link href="/brochure" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Brochure & Plaquette 📄</Link></li>
          <li><Link href="/catalogue" onClick={() => setMobileOpen(false)} style={{ color: 'white', fontSize: '1.1rem' }}>Catalogue Officiel</Link></li>
          <li style={{ marginTop: '1rem' }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full block py-3.5 text-center rounded-xl bg-blue-600 text-white font-bold">
              Demander un diagnostic <span className="whitespace-nowrap">15 min ⚡</span>
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
