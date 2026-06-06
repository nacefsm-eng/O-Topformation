import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PolitiqueConfidentialite() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Politique de confidentialité</span>
          </div>
          <h1>Politique de Confidentialité</h1>
          <p>Protection de vos données personnelles — Conformément au RGPD et à la loi Informatique et Libertés.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Responsable du traitement</h2>
              <p>SAS Ô&apos;TOP Formation — Présidente : Melyssa Jennadi — Email : formation.rmcf@gmail.com — Téléphone : 07 67 24 68 25</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. Données collectées</h2>
              <p style={{ marginBottom: '1rem' }}>Nous collectons les données suivantes via nos formulaires de contact :</p>
              <ul className="check-list">
                <li>Données d&apos;identité : nom, prénom</li>
                <li>Coordonnées : email, téléphone, adresse (optionnel)</li>
                <li>Données professionnelles : société, fonction</li>
                <li>Contenu des messages envoyés</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Finalités du traitement</h2>
              <p style={{ marginBottom: '1rem' }}>Vos données sont collectées pour :</p>
              <ul className="check-list">
                <li>Répondre à vos demandes de renseignements</li>
                <li>Établir des devis et conventions de formation</li>
                <li>Gérer les inscriptions aux formations</li>
                <li>Améliorer nos services pédagogiques</li>
                <li>Respecter nos obligations légales (Qualiopi, DREETS)</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>4. Base légale</h2>
              <p>Le traitement est fondé sur votre consentement explicite (case RGPD cochée lors de l&apos;envoi des formulaires) et sur l&apos;exécution du contrat de formation.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>5. Durée de conservation</h2>
              <p>Vos données sont conservées :</p>
              <ul className="check-list">
                <li>Prospects : 3 ans à compter du dernier contact</li>
                <li>Apprenants : 5 ans (obligations légales formation professionnelle)</li>
                <li>Documents comptables : 10 ans</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>6. Vos droits</h2>
              <p style={{ marginBottom: '1rem' }}>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="check-list">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit de retirer votre consentement à tout moment</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>Pour exercer ces droits : <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>formation.rmcf@gmail.com</a></p>
              <p style={{ marginTop: '0.75rem' }}>En cas de réclamation non résolue, vous pouvez saisir la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-700)' }}>www.cnil.fr</a></p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>7. Sécurité des données</h2>
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</p>
            </div>

            <div style={{ background: 'var(--gray-50)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-400)' }}>Dernière mise à jour : Juin 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
