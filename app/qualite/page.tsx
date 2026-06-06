import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Qualité & Handicap | Ô\'TOP Formation',
  description: 'Notre démarche qualité et notre politique d\'accessibilité handicap. NDA en cours d\'obtention auprès de la DREETS PACA.',
};

export default function QualitePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <h1>Qualité &amp; Handicap</h1>
          <p className="hero-subtitle">
            Notre engagement envers l'excellence pédagogique et l'accessibilité de nos formations
            à tous les publics, en cours de certification Qualiopi.
          </p>
        </div>
      </section>

      {/* ── NDA / Enregistrement ── */}
      <section className="section">
        <div className="container">
          <div className="quality-badge-wrapper">
            <div className="quality-badge">
              <div className="quality-badge-icon" aria-hidden="true">🏛️</div>
              <div className="quality-badge-text">
                <strong>Organisme de formation enregistré</strong>
                <span>NDA en cours d'obtention auprès de la DREETS PACA</span>
              </div>
            </div>
          </div>

          <div className="two-col-text">
            <div>
              <h2>Notre démarche qualité</h2>
              <p>
                Ô'TOP Formation est en cours d'enregistrement officiel en tant qu'organisme de
                formation professionnelle. Le Numéro de Déclaration d'Activité (NDA) est actuellement
                en cours d'obtention auprès de la Direction Régionale de l'Économie, de l'Emploi,
                du Travail et des Solidarités (DREETS) de la région PACA.
              </p>
              <p>
                Cette démarche administrative est la première étape indispensable avant l'engagement
                dans le processus de certification Qualiopi, référentiel national qualité reconnu
                par l'État pour les prestataires de formation professionnelle.
              </p>
            </div>
            <div>
              <h2>Vers la certification Qualiopi</h2>
              <p>
                Dès l'obtention de notre NDA, nous engagerons formellement le processus de
                certification Qualiopi. Cette certification atteste de la qualité des processus
                mis en œuvre par les prestataires d'actions concourant au développement des
                compétences.
              </p>
              <p>
                En attendant, nous appliquons d'ores et déjà les principes du Référentiel National
                Qualité dans l'ensemble de nos pratiques pédagogiques et administratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6-Step Process ── */}
      <section className="stats-bar">
        <div className="container">
          <h2 className="section-title section-title-light">Notre processus qualité en 6 étapes</h2>
          <p className="section-subtitle section-subtitle-light">
            Chaque formation suit un processus rigoureux pour garantir votre satisfaction et
            l'efficacité pédagogique.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3 className="step-title">Analyse des besoins</h3>
              <p className="step-desc">
                Entretien préalable approfondi pour identifier vos objectifs, vos contraintes
                et adapter la formation à votre contexte spécifique.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3 className="step-title">Positionnement</h3>
              <p className="step-desc">
                Évaluation du niveau initial du stagiaire afin d'adapter le contenu pédagogique
                et de définir des objectifs de progression réalistes.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3 className="step-title">Animation</h3>
              <p className="step-desc">
                Séquences pédagogiques dynamiques alternant apports théoriques, exercices pratiques
                et mises en situation concrètes.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">4</div>
              <h3 className="step-title">Évaluation</h3>
              <p className="step-desc">
                Évaluations formatives tout au long du parcours (QCM mi-parcours) et sommative
                en fin de formation (QCM final avec seuil de réussite à 70 %).
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">5</div>
              <h3 className="step-title">Satisfaction</h3>
              <p className="step-desc">
                Questionnaire de satisfaction à chaud remis à l'issue de chaque formation pour
                mesurer la qualité perçue et recueillir vos retours.
              </p>
            </div>
            <div className="step-card">
              <div className="step-num">6</div>
              <h3 className="step-title">Amélioration continue</h3>
              <p className="step-desc">
                Analyse systématique des retours pour faire évoluer nos contenus, nos méthodes
                et nos pratiques en permanence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accessibilité & Handicap ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Accessibilité &amp; Handicap</h2>
          <p className="section-subtitle">
            Ô'TOP Formation s'engage à rendre ses formations accessibles à tous les publics,
            quelles que soient les situations de handicap. Nous étudions chaque demande individuellement
            pour proposer les adaptations pédagogiques nécessaires.
          </p>

          <div className="accessibility-grid">
            <div className="accessibility-card">
              <div className="accessibility-card-header">
                <span className="accessibility-icon" aria-hidden="true">♿</span>
                <h3>Référente handicap</h3>
              </div>
              <p>
                Pour toute question relative à l'accessibilité de nos formations ou pour demander
                un aménagement adapté à votre situation de handicap, contactez notre référente.
              </p>
              <dl className="contact-dl">
                <dt>Référente</dt>
                <dd><strong>Mélyssa Jennadi</strong></dd>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:formation.rmcf@gmail.com" className="contact-link">
                    formation.rmcf@gmail.com
                  </a>
                </dd>
                <dt>Téléphone</dt>
                <dd>
                  <a href="tel:+33767246825" className="contact-link">
                    07 67 24 68 25
                  </a>
                </dd>
              </dl>
            </div>

            <div className="accessibility-card">
              <div className="accessibility-card-header">
                <span className="accessibility-icon" aria-hidden="true">📩</span>
                <h3>Réclamations</h3>
              </div>
              <p>
                Toute réclamation concernant nos formations ou nos services peut être adressée
                directement à notre équipe. Nous nous engageons à y répondre dans les meilleurs délais.
              </p>
              <dl className="contact-dl">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:formation.rmcf@gmail.com" className="contact-link">
                    formation.rmcf@gmail.com
                  </a>
                </dd>
                <dt>Téléphone</dt>
                <dd>
                  <a href="tel:+33767246825" className="contact-link">
                    07 67 24 68 25
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ce que garantit Qualiopi ── */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Ce que la certification Qualiopi garantira</h2>
          <p className="section-subtitle">
            La certification Qualiopi est le gage d'une démarche d'amélioration continue
            reconnue par l'État. Elle ouvre notamment l'accès aux financements publics et mutualisés.
          </p>

          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">✅</div>
              <h3>Qualité des processus</h3>
              <p>
                Qualiopi atteste que nos processus de formation — de l'accueil du stagiaire à
                la délivrance de l'attestation — respectent le Référentiel National Qualité
                en 7 indicateurs clés.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">💰</div>
              <h3>Accès aux financements</h3>
              <p>
                La certification Qualiopi est obligatoire pour accéder aux fonds publics et
                mutualisés (OPCO, CPF, Pôle Emploi, Région). Elle facilite concrètement le
                financement de vos formations.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">🔍</div>
              <h3>Transparence &amp; confiance</h3>
              <p>
                Un audit indépendant et régulier par un organisme certificateur accrédité garantit
                l'objectivité de l'évaluation et donne une assurance forte aux entreprises
                et aux stagiaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Des questions sur notre démarche qualité ?</h2>
          <p>
            Notre équipe est disponible pour vous renseigner sur notre processus de formation
            et nos engagements qualité.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contactez-nous
            </Link>
            <Link href="/ressources/documents" className="btn btn-outline-light btn-lg">
              Télécharger nos documents
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
