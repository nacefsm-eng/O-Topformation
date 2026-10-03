import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Ô’TOP Formations",
  description: "Mentions légales et informations réglementaires obligatoires de la société Ô’TOP Formation.",
  alternates: {
    canonical: 'https://otopformations.com/mentions-legales',
  },
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
          <p>Informations légales et réglementaires relatives au site otopformations.com.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>1. Identité de l’éditeur</h2>
              <table className="info-table">
                <tbody>
                  <tr><th>Dénomination</th><td>O’TOP Formation — Société par actions simplifiée (SAS) au capital de 1 000 €</td></tr>
                  <tr><th>Siège social</th><td>Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var), France</td></tr>
                  <tr><th>SIREN / SIRET</th><td>990 443 186 00012 (RCS Toulon 990 443 186)</td></tr>
                  <tr><th>Code NAF / APE</th><td>8559A (Formation continue d’adultes)</td></tr>
                  <tr><th>Déclaration d’activité</th><td>Enregistré sous le numéro [NDA] auprès du préfet de la région Provence-Alpes-Côte d’Azur. Cet enregistrement ne vaut pas agrément de l’État.</td></tr>
                  <tr><th>TVA intracommunautaire</th><td>TVA non applicable, art. 261-4-4° a du CGI (exonération des prestations de formation professionnelle continue).</td></tr>
                  <tr><th>Direction de publication</th><td>Melissa-Lola JENNADI (Présidente)</td></tr>
                  <tr><th>Email officiel</th><td><a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a></td></tr>
                  <tr><th>Téléphone</th><td><a href="tel:+33767246825" style={{ color: 'var(--blue-700)' }}>07 67 24 68 25</a></td></tr>
                  <tr>
                    <th>Partenaire financier &amp; Qualiopi</th>
                    <td>
                      Les formations financées par un OPCO, un FAF ou France Travail font l’objet d’une convention établie par <strong>Eloq-One</strong> (SAS Eloq-One, SIREN 944 063 635, déclaration d’activité n° 76300595630), organisme certifié Qualiopi au titre de la catégorie Actions de formation.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>2. Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (contact@vercel.com — https://vercel.com/legal).</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>3. Propriété intellectuelle</h2>
              <p>L’ensemble du contenu de ce site (textes, graphismes, logos, vidéos, structure, éléments visuels) est la propriété exclusive d’O’TOP Formation ou de ses partenaires techniques. Toute reproduction, distribution ou diffusion, totale ou partielle, sans autorisation préalable écrite est formellement interdite.</p>
              <p style={{ marginTop: '1rem' }}>TOP® est une marque déposée. Les formations Méthode TOP® d’Ô’TOP Formations sont dispensées par des formateurs certifiés.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>4. Données personnelles &amp; RGPD</h2>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données personnelles.</p>
              <p style={{ marginTop: '0.75rem' }}>Pour toute demande, contactez notre délégué à la protection des données : <a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a></p>
              <p style={{ marginTop: '1rem' }}><Link href="/politique-confidentialite" style={{ color: 'var(--blue-700)', fontWeight: 600 }}>Consulter notre Politique de Confidentialité complète →</Link></p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>5. Réclamations et médiation de la consommation</h2>
              <p>En cas de réclamation, le stagiaire ou client peut s’adresser par e-mail à <a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a>. Un accusé de réception est adressé sous 2 jours ouvrés et une réponse écrite sous 5 jours ouvrés.</p>
              <p style={{ marginTop: '1rem' }}>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige de consommation non résolu à l’amiable, le client consommateur peut recourir gratuitement au médiateur de la consommation compétent :
              </p>
              <p style={{ marginTop: '0.75rem', background: 'var(--gray-50)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }}>
                <strong>CNPM — Médiation de la Consommation</strong><br />
                27, avenue de la Libération, 42400 Saint-Chamond<br />
                Site internet : <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-700)' }}>www.cnpm-mediation-consommation.eu</a>
              </p>
              <p style={{ marginTop: '1rem' }}>À défaut d’accord amiable, les tribunaux compétents sont ceux du ressort du Tribunal judiciaire de Toulon (Var).</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
