import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Ô'TOP Formation",
};

export default function MentionsLegales() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Mentions légales</span>
          </div>
          <h1>Mentions Légales</h1>
          <p>Informations légales obligatoires relatives au site Ô&apos;TOP Formation.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>1. Identité de l&apos;éditeur</h2>
              <table className="info-table">
                <tbody>
                  <tr><th>Raison sociale</th><td>SAS Ô&apos;TOP Formation</td></tr>
                  <tr><th>Forme juridique</th><td>Société par Actions Simplifiée (SAS)</td></tr>
                  <tr><th>Capital social</th><td>1 000 €</td></tr>
                  <tr><th>SIRET</th><td>990 443 186 00012</td></tr>
                  <tr><th>Numéro RCS</th><td>RCS Toulon 990 443 186</td></tr>
                  <tr><th>Code NAF / APE</th><td>8559A (Formation continue d&apos;adultes)</td></tr>
                  <tr><th>Directrice de la publication</th><td>Mélissa JENNADI (Présidente)</td></tr>
                  <tr><th>Partenaire Qualiopi</th><td>Ô&apos;TOP Formation intervient avec l&apos;organisme partenaire <strong>Eloq-One</strong>, certifié Qualiopi, qui porte les actions de formation certifiantes et les démarches de financement OPCO & FAF.</td></tr>
                  <tr><th>Siège social &amp; Centre</th><td>Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var), France</td></tr>
                  <tr><th>Email officiel</th><td><a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>Formation.rmcf@gmail.com</a></td></tr>
                  <tr><th>Téléphone</th><td><a href="tel:+33767246825" style={{ color: 'var(--blue-700)' }}>07 67 24 68 25</a></td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>2. Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>3. Propriété intellectuelle</h2>
              <p>L&apos;ensemble du contenu de ce site (textes, images, logos, structure) est la propriété exclusive de SAS Ô&apos;TOP Formation, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.</p>
              <p style={{ marginTop: '1rem' }}>La marque TOP® est la propriété de ses auteurs (Méthode Perrault-Pierre). Ô&apos;TOP Formation l&apos;utilise dans le cadre de son activité de formation.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>4. Données personnelles</h2>
              <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos données. Pour exercer ces droits : <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>Formation.rmcf@gmail.com</a></p>
              <p style={{ marginTop: '1rem' }}><Link href="/politique-confidentialite" style={{ color: 'var(--blue-700)' }}>Voir notre Politique de Confidentialité</Link></p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>5. Médiation et droit applicable</h2>
              <p>Le présent site est soumis au droit français. En cas de litige non résolu à l&apos;amiable dans un délai de 60 jours, le consommateur peut recourir gratuitement à un médiateur de la consommation :</p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong>CNPM — Médiation de la Consommation</strong><br />
                <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-700)' }}>www.cnpm-mediation-consommation.eu</a>
              </p>
              <p style={{ marginTop: '0.75rem' }}>À défaut, les tribunaux compétents sont ceux du ressort de Toulon (Var).</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
