import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV)",
};

export default function CGV() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>CGV</span>
          </div>
          <h1>Conditions Générales de Vente</h1>
          <p>Conditions applicables aux formations dispensées par Ô&apos;TOP Formation.</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Identification de l&apos;organisme</h2>
              <p>SAS Ô&apos;TOP Formation — Présidente : Melyssa Jennadi.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. Inscription et admission</h2>
              <p>Toute inscription est validée à réception du bulletin d&apos;inscription complété et signé, accompagné du règlement ou de la prise en charge de l&apos;OPCO. L&apos;inscription est confirmée par écrit (email).</p>
              <p style={{ marginTop: '1rem' }}>Les inscriptions sont acceptées jusqu&apos;à 48 heures avant le début de la formation, sous réserve des places disponibles.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Tarifs</h2>
              <p>Les tarifs sont indiqués en euros HT sur le programme de formation. Une convention de formation ou un devis est établi conformément aux articles L.6353-1 et suivants du Code du travail.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>4. Modalités de paiement</h2>
              <ul className="check-list">
                <li>Virement bancaire (coordonnées communiquées sur la convention)</li>
                <li>Chèque à l&apos;ordre de SAS Ô&apos;TOP Formation</li>
                <li>Prise en charge OPCO (bon de commande à fournir avant le début)</li>
                <li>Paiement en 3 fois sans frais (sur demande)</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>5. Annulation et report</h2>
              <p>Annulation par le participant :</p>
              <ul className="check-list" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                <li>Plus de 15 jours avant : remboursement intégral</li>
                <li>Entre 8 et 15 jours : 50% du montant retenu</li>
                <li>Moins de 8 jours : 100% du montant dû</li>
              </ul>
              <p>Ô&apos;TOP Formation se réserve le droit de reporter ou d&apos;annuler une formation en cas de force majeure ou d&apos;effectif insuffisant (minimum 4 participants), avec remboursement intégral ou report sans frais.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>6. Propriété intellectuelle</h2>
              <p>Les supports de formation (PDF, slides, exercices) sont la propriété exclusive d&apos;Ô&apos;TOP Formation. Ils sont fournis pour usage personnel du participant uniquement. Toute reproduction ou diffusion sans autorisation est interdite.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>7. Responsabilité</h2>
              <p>Ô&apos;TOP Formation s&apos;engage à dispenser la formation avec tout le soin requis. Sa responsabilité est limitée au montant de la formation. Les TOP® sont des techniques de développement personnel et ne se substituent pas à un suivi médical ou psychologique.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>8. Réclamations</h2>
              <p>Toute réclamation doit être adressée à : <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>formation.rmcf@gmail.com</a> — Téléphone : 07 67 24 68 25. Nous nous engageons à y répondre sous 5 jours ouvrés.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>9. Droit applicable</h2>
              <p>Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l&apos;amiable, les tribunaux compétents sont ceux du ressort de Toulon (Var).</p>
            </div>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
