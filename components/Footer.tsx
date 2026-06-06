import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <img src="/logo.png" alt="Ô'TOP Formation" style={{ height: '52px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }} />
            <p>Ô'TOP Formation — Organisme de formation spécialisé dans les Techniques d'Optimisation du Potentiel (TOP®) pour les professionnels, les entreprises et les collectivités.</p>
            <p className="footer-brand-tagline">"Optimiser son potentiel pour mieux agir, mieux décider et mieux vivre."</p>
            <ul className="footer-contact" style={{ marginTop: '1.5rem' }}>
              <li><span>📧</span> formation.rmcf@gmail.com</li>
              <li><span>📞</span> 07 67 24 68 25</li>
              <li><span>📍</span> Ollioules (Var) — PACA</li>
            </ul>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', transition: 'background 0.2s' }}>in</a>
              <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', transition: 'background 0.2s' }}>IG</a>
              <a href="https://www.facebook.com/835767209621029" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', transition: 'background 0.2s' }}>f</a>
            </div>
          </div>

          {/* Column 2: Formations */}
          <div className="footer-col">
            <h4>Formations</h4>
            <ul className="footer-links">
              <li><Link href="/formations/fi-top">Formation FI TOP® (21h)</Link></li>
              <li><Link href="/formations/fb-top">Formation FB-TOP (7h)</Link></li>
              <li><Link href="/entreprises">Entreprises</Link></li>
              <li><Link href="/sous-traitance">Sous-traitance</Link></li>
            </ul>
          </div>

          {/* Column 3: Organisme */}
          <div className="footer-col">
            <h4>L'organisme</h4>
            <ul className="footer-links">
              <li><Link href="/methode">La Méthode TOP®</Link></li>
              <li><Link href="/equipe">Notre Équipe</Link></li>
              <li><Link href="/qualite">Qualité & Handicap</Link></li>
              <li><Link href="/ressources/blog">Blog</Link></li>
              <li><Link href="/ressources/faq">FAQ</Link></li>
              <li><Link href="/ressources/documents">Documents</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="footer-col">
            <h4>Légal</h4>
            <ul className="footer-links">
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgv">CGV</Link></li>
              <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/qualite">Accessibilité handicap</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ô'TOP Formation — SAS Ô'TOP Formation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
