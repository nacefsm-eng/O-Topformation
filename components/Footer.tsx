import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-[#021435] text-slate-300 pt-16 pb-20 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand */}
          <div className="footer-brand space-y-4">
            <img 
              src="/logo.png" 
              alt="Ô'TOP Formations" 
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
            />
            <p className="text-xs text-slate-300 leading-relaxed">
              Ô’TOP Formations prépare aux certifications RS6776, RS7344 et RS7351, enregistrées au Répertoire spécifique de France Compétences. Formations financées : conventions et facturation assurées par notre partenaire Eloq-One, organisme certifié Qualiopi au titre de la catégorie Actions de formation. Ô’TOP Formations est en cours de certification Qualiopi.
            </p>
            <p className="text-xs text-[#38bdf8] font-bold italic">
              « 2 voix, 1 mission : Former pour transformer. »
            </p>
            
            <ul className="footer-contact space-y-2 text-xs text-slate-200 list-none pt-2">
              <li>📞 <strong className="text-white font-bold">07 67 24 68 25</strong> <span className="text-slate-300">(Mélissa Jennadi)</span></li>
              <li>📧 <a href="mailto:contact@otopformations.com" className="text-[#38bdf8] hover:text-white font-semibold transition">contact@otopformations.com</a></li>
              <li>📍 <span className="text-slate-300">Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var)</span></li>
            </ul>

            <div className="flex gap-2.5 pt-2">
              <a href="https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white text-xs transition">in</a>
              <a href="https://www.instagram.com/otop.formations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white text-xs transition">IG</a>
              <a href="https://www.facebook.com/835767209621029" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-700 flex items-center justify-center text-white text-xs transition">f</a>
            </div>
          </div>

          {/* Column 2: Formations */}
          <div className="footer-col space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Nos formations</h4>
            <ul className="footer-links space-y-2 text-xs list-none">
              <li>
                <Link href="/formations/ia#rs6776" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">⚡</span>
                  <span>IA générative (RS6776) — 600 €</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/ia#rs7344" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">🤖</span>
                  <span>Développer son activité avec l’IA (RS7344)</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/reseaux-sociaux" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">📱</span>
                  <span>Réseaux sociaux (RS7351)</span>
                </Link>
              </li>
              <li>
                <Link href="/methode" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">🧭</span>
                  <span>Méthode TOP® — conduite du changement (21 h)</span>
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">✨</span>
                  <span>Catalogue et packs dégressifs</span>
                </Link>
              </li>
              <li>
                <Link href="/commander" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
                  <span className="w-4 text-center shrink-0">💳</span>
                  <span>Inscription &amp; Paiement en ligne</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions Entreprises */}
          <div className="footer-col space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Entreprises &amp; prestations</h4>
            <ul className="footer-links space-y-2 text-xs list-none">
              <li><Link href="/entreprises" className="text-slate-200 hover:text-white transition">Création de Sites &amp; Applications</Link></li>
              <li><Link href="/entreprises" className="text-slate-200 hover:text-white transition">Prestations digitales (hors formation)</Link></li>
              <li><Link href="/entreprises" className="text-slate-200 hover:text-white transition">Formations Intra-Entreprise</Link></li>
              <li><Link href="/entreprises" className="text-slate-200 hover:text-white transition">Sécurisation des Données &amp; Conformité IA</Link></li>
              <li><Link href="/contact" className="text-slate-200 hover:text-white transition">Demander un devis sur mesure</Link></li>
            </ul>
          </div>

          {/* Column 4: Légal, Qualité & Règlements */}
          <div className="footer-col space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Légal &amp; Conformité</h4>
            <ul className="footer-links space-y-2 text-xs list-none">
              <li><Link href="/financement" className="text-slate-200 hover:text-white transition">Financement (OPCO, FAF, France Travail)</Link></li>
              <li><Link href="/accessibilite" className="text-slate-200 hover:text-white transition">Accessibilité &amp; handicap</Link></li>
              <li><Link href="/reglement-interieur" className="text-slate-200 hover:text-white transition">Règlement intérieur</Link></li>
              <li><Link href="/reclamations" className="text-slate-200 hover:text-white transition">Réclamations (SLA 2/5 jours)</Link></li>
              <li><Link href="/mentions-legales" className="text-slate-200 hover:text-white transition">Mentions légales</Link></li>
              <li><Link href="/cgv" className="text-slate-200 hover:text-white transition">CGV</Link></li>
              <li><Link href="/politique-confidentialite" className="text-slate-200 hover:text-white transition">Politique de confidentialité</Link></li>
              <li><Link href="/a-propos" className="text-slate-200 hover:text-white transition">À Propos d’Ô’TOP</Link></li>
            </ul>
          </div>
        </div>

        {/* Bloc Partenaire Unique Conforme Qualiopi (Section 5.4) */}
        <div className="mt-12 p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="shrink-0 bg-white p-1 flex items-center justify-center">
              <img 
                src="/qualiopi.png" 
                alt="Qualiopi Processus Certifié - République Française - Actions de formation" 
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-extrabold text-[#021842] text-sm sm:text-base">
                Partenaire financements : Eloq-One (organisme certifié Qualiopi au titre des Actions de formation)
              </div>
              <div className="text-xs text-slate-700 mt-1 max-w-2xl leading-relaxed font-medium">
                Pour les formations financées (OPCO, FAF, France Travail), notre partenaire Eloq-One établit la convention normée et assure la facturation.
              </div>
            </div>
          </div>

          <div 
            style={{ color: '#021842', backgroundColor: '#f1f5f9', borderColor: '#cbd5e1' }}
            className="shrink-0 text-xs font-black px-4 py-2.5 rounded-xl border shadow-sm"
          >
            <span style={{ color: '#021842', fontWeight: 800 }}>🏛️ Ô’TOP Formations : en cours de certification Qualiopi</span>
          </div>
        </div>

        {/* Copyright conforme Section 5.4 */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400 space-y-2">
          <p>
            © 2026 Ô’TOP Formations — O’TOP Formation, SAS au capital de 1 000 € • SIRET 990 443 186 00012 • NAF 8559A • RCS Toulon 990 443 186 • Enregistré sous le numéro [NDA] auprès du préfet de la région Provence-Alpes-Côte d’Azur. Cet enregistrement ne vaut pas agrément de l’État.
          </p>
        </div>
      </div>
    </footer>
  );
}
