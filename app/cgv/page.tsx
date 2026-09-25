import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | Ô'TOP Formations",
  description: "Conditions générales de vente des formations certifiantes dispensées par SAS O'TOP FORMATION (SIRET 990 443 186 00012), en partenariat avec Eloq-One (certifié Qualiopi).",
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
          <p>Version en vigueur au 1er octobre 2026 — Formations certifiantes France Compétences</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Identification de l&apos;organisme</h2>
              <p>
                <strong>SAS O&apos;TOP FORMATION</strong><br />
                Présidente : Mélissa Jennadi<br />
                SIRET : 990 443 186 00012 — NAF : 8559A<br />
                RCS Toulon — Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var)<br />
                Email : <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>formation.rmcf@gmail.com</a> — Tél. : 07 67 24 68 25
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Les actions de formation certifiantes (inscrites au Répertoire Spécifique de France Compétences) sont dispensées sous convention de portage avec l&apos;organisme certifié Qualiopi <strong>Eloq-One</strong>, garant de la qualité et des démarches de financement OPCO & FAF.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. Inscription, admission et délai de rétractation</h2>
              <p>Toute inscription est validée à réception du bulletin d&apos;inscription complété et signé, accompagné du règlement ou de la prise en charge OPCO/FAF. La confirmation est transmise par email.</p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Droit de rétractation (art. L.221-18 du Code de la consommation) :</strong> Pour tout achat en ligne (paiement Stripe), le participant dispose d&apos;un délai de <strong>14 jours calendaires</strong> à compter de la date de souscription pour exercer son droit de rétractation, sans motif ni pénalité, en adressant un email à <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>formation.rmcf@gmail.com</a> ou en renvoyant le formulaire de rétractation joint à la confirmation. Le remboursement intervient sous 14 jours. <strong>Exception :</strong> si le participant a expressément demandé à commencer la formation avant l&apos;expiration du délai, le droit de rétractation est perdu.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Les inscriptions sont acceptées jusqu&apos;à 48h avant l&apos;ouverture des accès, sous réserve des places disponibles.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Tarifs et modalités de paiement</h2>
              <p>Les tarifs sont indiqués en euros (toutes taxes comprises selon le régime applicable). Une convention de formation ou un devis est établi conformément aux articles L.6353-1 et suivants du Code du travail.</p>
              <p style={{ marginTop: '0.75rem' }}><strong>Tarifs au 1er octobre 2026 :</strong></p>
              <ul className="check-list" style={{ marginTop: '0.5rem' }}>
                <li>FI-TOP® Gestion du Stress & Prévention des RPS (21h) : <strong>890 €</strong></li>
                <li>RS6776 — IA Générative pour son Activité (21h) : <strong>1 490 €</strong> (offre promo : <strong>600 €</strong> durée limitée — 3 × 200 € possible)</li>
                <li>RS7344 — Piloter un Projet de Création de Site Internet (21h) : <strong>1 490 €</strong></li>
                <li>RS7351 — Communication Digitale via les Réseaux Sociaux (21h) : <strong>1 490 €</strong></li>
                <li>Accompagnement expert supplémentaire : 1h = 120 € · Forfait 5h = 550 € · Forfait 10h = 1 000 €</li>
                <li>Pack Duo (2 formations) : <strong>2 490 €</strong></li>
                <li>Pack Trio (3 formations) : <strong>3 390 €</strong></li>
                <li>Pack Entreprise OPCO (3 formations) : <strong>3 200 €</strong></li>
              </ul>
              <p style={{ marginTop: '1rem' }}><strong>Moyens de paiement acceptés :</strong></p>
              <ul className="check-list" style={{ marginTop: '0.5rem' }}>
                <li>Paiement sécurisé en ligne via Stripe (CB, Visa, Mastercard — 3D-Secure 2)</li>
                <li>Virement bancaire (coordonnées communiquées sur la convention)</li>
                <li>Prise en charge OPCO/FAF (bon de commande à fournir avant le début)</li>
                <li>Paiement en 3 fois : 3 × 200 € pour l&apos;offre promo RS6776</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>4. Accompagnement expert & certification</h2>
              <p>
                Chaque formation certifiante inclut <strong>2 heures d&apos;accompagnement individuel avec un expert</strong> (planifiées après l&apos;accès à la plateforme e-learning, sur rendez-vous avec Mélissa ou Renaud).
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong>Évaluation et certification :</strong> Une évaluation finale est proposée à l&apos;issue de chaque formation. La présentation à la certification France Compétences (Répertoire Spécifique RS6776, RS7344, RS7351) est <em>facultative</em> et soumise aux conditions d&apos;éligibilité définies par France Compétences. L&apos;obtention de la certification n&apos;est pas garantie.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>5. Annulation et report</h2>
              <p><strong>Annulation par le participant (hors délai légal de rétractation) :</strong></p>
              <ul className="check-list" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                <li>Plus de 15 jours avant le début : remboursement intégral</li>
                <li>Entre 8 et 15 jours avant : 50% du montant retenu</li>
                <li>Moins de 8 jours avant : 100% du montant dû</li>
              </ul>
              <p>SAS O&apos;TOP FORMATION se réserve le droit de reporter une session en cas de force majeure, avec remboursement intégral ou report sans frais.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>6. Propriété intellectuelle</h2>
              <p>Les supports de formation (PDF, slides, exercices, vidéos) sont la propriété exclusive de SAS O&apos;TOP FORMATION. Ils sont fournis pour usage personnel du participant uniquement. Toute reproduction ou diffusion sans autorisation écrite est interdite.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>7. Responsabilité</h2>
              <p>SAS O&apos;TOP FORMATION s&apos;engage à dispenser la formation avec tout le soin requis. Sa responsabilité est limitée au montant de la formation. La Méthode TOP® est une technique de gestion du stress et de prévention des risques psychosociaux ; elle ne se substitue pas à un suivi médical ou psychologique.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>8. Réclamations</h2>
              <p>Toute réclamation doit être adressée à : <a href="mailto:formation.rmcf@gmail.com" style={{ color: 'var(--blue-700)' }}>formation.rmcf@gmail.com</a> — Tél. : 07 67 24 68 25. Nous nous engageons à y répondre sous 5 jours ouvrés.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>9. Médiation et litiges (art. L.612-1 du Code de la consommation)</h2>
              <p>
                En cas de litige non résolu à l&apos;amiable dans un délai de 60 jours, le consommateur peut recourir gratuitement à un médiateur de la consommation. Médiateur compétent : <strong>CNPM — Médiation de la Consommation</strong> — <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-700)' }}>www.cnpm-mediation-consommation.eu</a>. À défaut, les tribunaux compétents sont ceux du ressort de Toulon (Var).
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
