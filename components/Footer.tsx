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
            <h4>Qualité & Légal</h4>
            <ul className="footer-links">
              <li><Link href="/financement">Financement (OPCO, FAF, CPF)</Link></li>
              <li><Link href="/financement">Démarche Qualité & Handicap</Link></li>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgv">CGV</Link></li>
              <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/contact">Contact Direct</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ô'TOP Formation — SAS Ô'TOP Formation • SIRET : 990 443 186 00012 • NAF : 8559A • RCS Toulon. Tous droits réservés.</p>
          <span className="footer-nda" style={{ color: 'var(--gold-light)' }}>
            🏆 Organisme de formation déclaré (NDA en cours) · démarche Qualiopi en cours (portage Eloqone) · Certifications Répertoire Spécifique France Compétences
          </span>
        </div>
      </div>
    </footer>
  );
}
