import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formation TOP® Éducation Nationale | Ô'TOP Formation",
  description: "Accompagnement des enseignants, CPE et personnels administratifs. Gestion du stress en classe et prévention des violences grâce aux TOP®.",
};

export default function EducationPage() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #2a52be 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Secteur Éducation & Enseignement</span>
          </div>
          <h1>Sérénité en classe et prévention des risques psychosociaux</h1>
          <p>
            Des stratégies mentales pour aider les enseignants et les personnels éducatifs 
            à faire face à la charge mentale et aux tensions scolaires.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="label label-red">Les enjeux</span>
              <h2 style={{ color: 'var(--blue-900)' }}>Un métier de plus en plus exigeant</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Face à des classes hétérogènes, des incivilités croissantes et une forte charge administrative, les professionnels de l'éducation (enseignants, CPE, directions) sont exposés à une fatigue émotionnelle intense.
              </p>
              <ul className="check-list">
                <li>Gérer le stress face à une classe difficile</li>
                <li>Prévenir l'usure professionnelle et la perte de sens</li>
                <li>Favoriser un climat scolaire apaisé</li>
                <li>Développer la confiance en soi et l'autorité naturelle</li>
              </ul>
            </div>
            <div style={{ background: 'var(--gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>La solution TOP®</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                La méthode TOP® offre des respirations régulatrices et des ancrages positifs faciles à utiliser juste avant d'entrer en classe, ou pour récupérer efficacement après une journée intense.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Programmer une session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
