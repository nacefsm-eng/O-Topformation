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
                  <tr><th>Statut</th><td>Organisme de formation déclaré (NDA en cours d&apos;attribution DREETS PACA) · Actions de formation portées par l&apos;organisme partenaire certifié Qualiopi Eloqone</td></tr>
                  <tr><th>Présidente</th><td>Mélissa Jennadi</td></tr>
                  <tr><th>Siège social</th><td>Ollioules (Var) — PACA</td></tr>
                  <tr><th>Email</th><td>contact@otopformation.fr</td></tr>
                  <tr><th>Téléphone</th><td>07 67 24 68 25</td></tr>
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
              <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos données. Pour exercer ces droits : <a href="mailto:contact@otopformation.fr" style={{ color: 'var(--blue-700)' }}>contact@otopformation.fr</a></p>
              <p style={{ marginTop: '1rem' }}><Link href="/politique-confidentialite" style={{ color: 'var(--blue-700)' }}>Voir notre Politique de Confidentialité</Link></p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>5. Droit applicable</h2>
              <p>Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
