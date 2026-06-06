import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Notre Équipe | Ô\'TOP Formation',
  description: 'Découvrez l\'équipe d\'experts certifiés TOP® d\'Ô\'TOP Formation : Melyssa Jennadi et Régis, des professionnels engagés pour votre développement.',
};

export default function EquipePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <h1>Notre Équipe</h1>
          <p className="hero-subtitle">
            Des experts certifiés TOP® passionnés par le développement humain et la performance durable,
            à votre service pour transformer votre rapport au stress et à la performance.
          </p>
        </div>
      </section>

      {/* ── Team Cards ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Les fondateurs</h2>
          <p className="section-subtitle">
            Une équipe soudée par des valeurs communes et une expertise reconnue dans les Techniques
            d'Optimisation du Potentiel.
          </p>

          <div className="team-grid">
            {/* ── Card Melyssa ── */}
            <div className="team-card">
              <div className="team-card-image-wrapper">
                <img
                  src="/team-melyssa.png"
                  alt="Melyssa Jennadi — Présidente Ô'TOP Formation"
                  className="team-card-image"
                />
              </div>
              <div className="team-card-body">
                <h3 className="team-card-name">Melyssa Jennadi</h3>
                <p className="team-card-title">
                  Présidente — Docteure en Sciences Humaines — Formatrice TOP®
                </p>
                <div className="team-card-tags">
                  <span className="tag">Docteure en Sciences Humaines</span>
                  <span className="tag">Formatrice TOP®</span>
                  <span className="tag">Référente Qualité</span>
                  <span className="tag">Référente Handicap</span>
                </div>
                <p className="team-card-bio">
                  Docteure en Sciences Humaines, Melyssa Jennadi a consacré sa carrière au développement
                  des compétences humaines et à la prévention des risques psychosociaux. Formatrice
                  certifiée TOP®, elle préside Ô'TOP Formation avec une vision claire : rendre
                  accessibles à tous les outils de la préparation mentale et de la gestion du stress.
                  Référente qualité et référente handicap de l'organisme.
                </p>
                <a
                  href="https://www.linkedin.com/in/melyssa-jennadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Profil LinkedIn
                </a>
              </div>
            </div>

            {/* ── Card Régis ── */}
            <div className="team-card">
              <div className="team-card-image-wrapper">
                <img
                  src="/team-regis.png"
                  alt="Régis Domergue — Expert TOP®"
                  className="team-card-image"
                />
              </div>

              <div className="team-card-body">
                <h3 className="team-card-name">Régis</h3>
                <p className="team-card-title">
                  Expert TOP® - Conférencier - Formateur
                </p>
                <div className="team-card-tags">
                  <span className="tag">15 ans d'expertise</span>
                  <span className="tag">Ex-Armée de l'Air</span>
                  <span className="tag">Formateur Expert</span>
                </div>
                <p className="team-card-bio">
                  Fort de plus de 15 ans d'expertise dans les Techniques d'Optimisation du Potentiel,
                  Régis a forgé son expérience au sein de l'Armée de l'Air française, berceau des
                  méthodes TOP®. Conférencier recherché et formateur de formateurs, il transmet avec
                  pédagogie et authenticité les outils de la préparation mentale à des publics aussi
                  variés que des sportifs de haut niveau, des managers, des soignants et des équipes
                  militaires. Sa conviction profonde : chaque individu dispose en lui du potentiel
                  nécessaire pour exceller — les TOP® sont la clé pour le libérer.
                </p>
                <a
                  href="https://www.linkedin.com/in/regis-top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Profil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Nos valeurs</h2>
          <p className="section-subtitle">
            Les principes qui guident chacune de nos formations et chacune de nos interactions.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon" aria-hidden="true">💡</div>
              <h3>Innovation</h3>
              <p>
                Nous puisons dans des méthodes éprouvées par l'armée et le sport de haut niveau pour
                les adapter aux réalités du monde professionnel et civil d'aujourd'hui.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon" aria-hidden="true">⚖️</div>
              <h3>Équilibre</h3>
              <p>
                Performance et bien-être ne s'opposent pas — ils se nourrissent mutuellement. Nos
                formations visent un équilibre durable entre exigence et bienveillance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon" aria-hidden="true">🏆</div>
              <h3>Performance durable</h3>
              <p>
                Contrairement aux solutions rapides, les TOP® ancrent des habitudes mentales
                profondes qui produisent des résultats mesurables et pérennes sur le long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Vous souhaitez nous contacter ?</h2>
          <p>
            Notre équipe est disponible pour répondre à toutes vos questions sur nos formations
            et adapter nos programmes à vos besoins spécifiques.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Nous contacter
            </Link>
            <Link href="/formations" className="btn btn-outline-light btn-lg">
              Voir nos formations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
