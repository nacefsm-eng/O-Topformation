import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | Ô’TOP Formations",
  description: "Conditions Générales de Vente applicables aux formations et prestations de la société O’TOP Formation.",
  alternates: {
    canonical: 'https://otopformations.com/cgv',
  },
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
          <p>Version en vigueur au 1er octobre 2026 — O’TOP Formation</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 1 — Identification de l’organisme de formation</h2>
              <p>
                <strong>O’TOP Formation</strong>, Société par Actions Simplifiée (SAS) au capital de 1 000 €.<br />
                Siège social : Espace Gamma 1, 139 Chemin des 2 Frères, 83190 Ollioules (Var), France.<br />
                RCS Toulon 990 443 186 — SIRET : 990 443 186 00012 — Code NAF : 8559A.<br />
                Déclaration d’activité enregistrée sous le numéro [NDA] auprès du préfet de région Provence-Alpes-Côte d’Azur (cet enregistrement ne vaut pas agrément de l’État).<br />
                Présidente : Melissa-Lola Jennadi.<br />
                Email : <a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a> — Téléphone : 07 67 24 68 25.
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                Pour les formations financées par un OPCO, un FAF ou France Travail, la convention de formation et la facturation sont assurées par notre partenaire <strong>Eloq-One</strong> (SAS EloqOne, SIREN 944 063 635, déclaration d’activité n° 76300595630), organisme certifié Qualiopi au titre de la catégorie Actions de formation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 2 — Droit de rétractation (clients consommateurs)</h2>
              <p>
                Le client consommateur dispose d’un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation (art. L221-18 du Code de la consommation), par e-mail à <a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a>.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Le client qui demande l’accès immédiat aux contenus numériques de la formation et reconnaît expressément renoncer à son droit de rétractation ne peut plus l’exercer une fois l’accès ouvert (art. L221-28 13° du Code de la consommation).
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Le client qui ne renonce pas à ce droit accède à la formation à l’expiration du délai de 14 jours ; en cas de rétractation régulière, il est intégralement remboursé dans un délai de 14 jours.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 3 — Tarifs</h2>
              <p>
                Les prix sont indiqués en euros nets. TVA non applicable, art. 261-4-4° a du CGI (exonération des actions de formation professionnelle continue). Le passage de la certification n’est pas inclus dans le tarif de la formation et reste facultatif.
              </p>
              <p style={{ marginTop: '0.75rem' }}><strong>Grille tarifaire au 1er octobre 2026 :</strong></p>
              <ul className="check-list" style={{ marginTop: '0.5rem' }}>
                <li>IA générative (RS6776) : <strong>600 €</strong> — prix de lancement jusqu’au 31 octobre 2026 (ou 3 × 200 € sans frais)</li>
                <li>Développer son activité avec l’IA (RS7344) : <strong>1 490 €</strong> (ou 3 × 496,67 € sans frais)</li>
                <li>Réseaux sociaux (RS7351) : <strong>1 490 €</strong> (ou 3 × 496,67 € sans frais)</li>
                <li>Conduite du changement — Méthode TOP® (21 h) : <strong>890 €</strong> (ou 3 × 296,67 € sans frais)</li>
                <li>Pack Duo (avec RS6776) : <strong>1 790 €</strong> (au lieu de 2 090 € séparément, économie 300 €)</li>
                <li>Pack Duo (RS7344 + RS7351) : <strong>2 490 €</strong> (au lieu de 2 980 € séparément, économie 490 €)</li>
                <li>Pack Trio (RS6776 + RS7344 + RS7351) : <strong>2 890 €</strong> (au lieu de 3 580 € séparément, économie 690 €) — jusqu’au 31/10/2026</li>
                <li>Formule Entreprise 40 h : <strong>3 200 €</strong> (sur devis et convention)</li>
                <li>Accompagnement individuel complémentaire : 1 h = 120 € · 5 h = 550 € · 10 h = 1 000 €</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 4 — Modalités de règlement</h2>
              <p>
                Le règlement s’effectue par carte bancaire sécurisée (Stripe) en 1 fois ou en 3 fois sans frais, ou par virement bancaire.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Pour les formations financées par un OPCO, un FAF ou France Travail, la convention est établie par notre partenaire Eloq-One qui facture directement l’organisme financeur après accord préalable écrit.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 5 — Accès à la plateforme et durée</h2>
              <p>
                Les identifiants d’accès à la plateforme e-learning sont adressés par e-mail dans un délai de 24 heures suivant la validation de l’inscription et du questionnaire d’analyse des besoins.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                L’accès aux contenus e-learning est personnel et illimité dans le temps (« à vie »), pour toute la durée d’exploitation de la plateforme par O’TOP Formation. Les identifiants sont strictement confidentiels et ne peuvent être cédés ni partagés.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 6 — Accompagnement individuel et report</h2>
              <p>
                Chaque formation intègre 2 heures d’accompagnement individuel en visioconférence avec un expert.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Les créneaux réservés peuvent être reportés sans frais jusqu’à 24 heures avant l’horaire fixé via l’outil de prise de rendez-vous. Toute séance non honorée ou annulée moins de 24 heures à l’avance est réputée réalisée.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 7 — Certification en option</h2>
              <p>
                Nos formations préparent aux certifications enregistrées au Répertoire spécifique de France Compétences. Le passage de l’évaluation certificative devant le jury est facultatif, non inclus dans le tarif de la formation et organisé séparément par notre partenaire Eloq-One selon les modalités du référentiel. La délivrance du certificat dépend exclusivement de la décision souveraine du jury d’évaluation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 8 — Propriété intellectuelle</h2>
              <p>
                L’ensemble des contenus, supports pédagogiques, vidéos, modèles et documents mis à disposition sont la propriété exclusive d’O’TOP Formation ou de ses partenaires. Ils sont réservés à l’usage individuel et professionnel du stagiaire. Toute reproduction, distribution ou diffusion publique est interdite sans autorisation préalable écrite.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Article 9 — Réclamations et médiation de la consommation</h2>
              <p>
                Toute réclamation doit être adressée par e-mail à : <a href="mailto:contact@otopformations.com" style={{ color: 'var(--blue-700)' }}>contact@otopformations.com</a>. Un accusé de réception est adressé sous 2 jours ouvrés et une réponse écrite sous 5 jours ouvrés.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                En cas de litige de consommation non résolu à l’amiable, le client consommateur peut saisir gratuitement le médiateur de la consommation :<br />
                <strong>CNPM — Médiation de la Consommation</strong><br />
                27, avenue de la Libération, 42400 Saint-Chamond<br />
                Site internet : <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-700)' }}>www.cnpm-mediation-consommation.eu</a>
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                À défaut d’accord amiable, les tribunaux compétents sont ceux du ressort de Toulon (Var).
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
