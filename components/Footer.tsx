import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <img src="/logo.png" alt="O'TOP Formation" style={{ height: '52px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }} />
            <p>Ô&apos;TOP Formation — Organisme de formation déclaré (NDA en cours d&apos;attribution DREETS PACA) · Actions de formation certifiantes et finançables portées par l&apos;organisme partenaire certifié Qualiopi Eloqone. Formations préparant aux certifications du Répertoire Spécifique de France Compétences.</p>
            <p className="footer-brand-tagline">&quot;Former pour transformer : optimiser le potentiel humain & décupler la performance digitale.&quot;</p>
            
            <ul className="footer-contact" style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.4rem' }}><span>📞</span> <strong>Mélissa (Inscriptions & Diagnostic) :</strong> <a href="tel:+33767246825">07 67 24 68 25</a></li>
              <li style={{ marginBottom: '0.4rem' }}><span>📞</span> <strong>Renaud (Expert Digital & IA) :</strong> <a href="tel:+33674797509">06 74 79 75 09</a></li>
              <li style={{ marginBottom: '0.4rem' }}><span>📧</span> <a href="mailto:contact@otopformation.fr">contact@otopformation.fr</a></li>
              <li><span>📍</span> Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var)</li>
            </ul>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', transition: 'background 0.2s' }}>in</a>
              <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', transition: 'background 0.2s' }}>IG</a>
              <a href="https://www.facebook.com/835767209621029" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', transition: 'background 0.2s' }}>f</a>
            </div>
          </div>

          {/* Column 2: Formations */}
          <div className="footer-col">
            <h4>Formations Certifiantes</h4>
            <ul className="footer-links">
              <li><Link href="/formations/fi-top">🧘 Formation FI TOP® (21h - Santé & Stress)</Link></li>
              <li><Link href="/brochure" style={{ color: '#38bdf8', fontWeight: 600 }}>📄 Télécharger la Brochure Officielle</Link></li>
              <li><Link href="/respirez" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>✨ Le Grand Récap : Toutes Nos Formations</Link></li>
              <li><Link href="/formations/ia">🤖 IA pour Dirigeants (RS7344)</Link></li>
              <li><Link href="/formations/ia">⚡ IA Générative pour Indépendants (RS6776)</Link></li>
              <li><Link href="/formations/reseaux-sociaux">📱 Réseaux Sociaux & Acquisition (RS7351)</Link></li>
              <li><Link href="/methode">La Méthode TOP® & 9 Piliers</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions Entreprises */}
          <div className="footer-col">
            <h4>Solutions Digitales & B2B</h4>
            <ul className="footer-links">
              <li><Link href="/entreprises">Création de Sites Web & Apps</Link></li>
              <li><Link href="/entreprises">Digitalisation & Automatisation de Process</Link></li>
              <li><Link href="/entreprises">Formations Intra-Entreprise</Link></li>
              <li><Link href="/entreprises">Sensibilisation Cybersécurité</Link></li>
              <li><Link href="/contact">Demande de Diagnostic Gratuit</Link></li>
            </ul>
          </div>

          {/* Column 4: Légal & Qualité */}
          <div className="footer-col">
            <h4>L&apos;Organisme &amp; Qualité</h4>
            <ul className="footer-links">
              <li><Link href="/a-propos">À Propos d&apos;Ô&apos;TOP</Link></li>
              <li><Link href="/ressources/blog">Blog &amp; Guides Stratégiques</Link></li>
              <li><Link href="/financement">Financement (OPCO, FAF, CPF)</Link></li>
              <li><Link href="/financement">Démarche Qualité &amp; Handicap</Link></li>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgv">CGV</Link></li>
              <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/contact">Contact Direct</Link></li>
            </ul>
          </div>
        </div>

        {/* Accreditation & Eloqone Qualiopi Partner Strip */}
        <div style={{ margin: '2.5rem 0 1.5rem', padding: '1.25rem 1.5rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1 1 320px' }}>
            <div style={{ padding: '0.5rem 0.75rem', background: 'white', borderRadius: '8px', color: '#0f172a', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '-0.02em', border: '1.5px solid #2563eb', flexShrink: 0 }}>
              <span style={{ color: '#0284c7' }}>Qualiopi</span>
              <span style={{ fontSize: '0.62rem', display: 'block', color: '#475569', fontWeight: 600 }}>RÉPUBLIQUE FRANÇAISE</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: 'white', fontSize: '0.9rem' }}>
                Financement Garanti • Portage Qualiopi par <a href="https://eloqone.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Eloqone</a>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4, marginTop: '2px' }}>
                Actions de formation certifiées et éligibles aux prises en charge à 100% OPCO (Atlas, Akto, EP), FAF (FIF-PL, AGEFICE, FAFCEA) sans avance de frais.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#7dd3fc', fontSize: '0.75rem', fontWeight: 700 }}>
              🇫🇷 France Compétences RS6776
            </span>
            <span style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#d8b4fe', fontSize: '0.75rem', fontWeight: 700 }}>
              🇫🇷 France Compétences RS7351
            </span>
            <span style={{ padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'rgba(234, 179, 8, 0.15)', border: '1px solid rgba(234, 179, 8, 0.3)', color: '#fde047', fontSize: '0.75rem', fontWeight: 700 }}>
              🇫🇷 France Compétences RS7344
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ô&apos;TOP Formation — SAS Ô&apos;TOP Formation • SIRET : 990 443 186 00012 • NAF : 8559A • RCS Toulon. Tous droits réservés.</p>
          <span className="footer-nda" style={{ color: 'var(--gold-light)' }}>
            🏆 Organisme de formation déclaré (NDA en cours) · démarche Qualiopi portée par Eloqone · Certifications Répertoire Spécifique France Compétences
          </span>
        </div>
      </div>
    </footer>
  );
}
