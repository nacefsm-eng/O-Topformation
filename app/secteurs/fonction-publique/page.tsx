import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Formation TOP® Fonction Publique | Ô'TOP Formation",
  description: "Accompagnement des agents territoriaux, mairies et collectivités. Outils de gestion du stress et prévention RPS dans la fonction publique.",
};

export default function FonctionPubliquePage() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #2a52be 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Secteur Fonction Publique</span>
          </div>
          <h1>Efficacité et bien-être dans le service public</h1>
          <p>
            Des formations pragmatiques pour accompagner les agents territoriaux et les cadres 
            dans la gestion des incivilités et la conduite du changement.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="two-col" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="label label-red">Les enjeux</span>
              <h2 style={{ color: 'var(--blue-900)' }}>Accompagner le changement</h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Les collectivités et mairies font face à des réorganisations constantes, une pression croissante des usagers et la nécessité de maintenir un service public de qualité malgré des contraintes fortes.
              </p>
              <ul className="check-list">
                <li>Gérer l'agressivité des usagers en guichet</li>
                <li>Prévenir l'absentéisme et les risques psychosociaux</li>
                <li>Renforcer la résilience des équipes face au changement</li>
                <li>Accompagner le management de proximité</li>
              </ul>
            </div>
            <div style={{ background: 'var(--gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ color: 'var(--blue-900)', marginBottom: '1rem' }}>La solution TOP®</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Des protocoles simples (respiration tactique, dialogue interne) qui permettent aux agents de prendre du recul, de faire redescendre la pression face à un usager agressif, et de restaurer leur bien-être au travail.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contactez-nous pour votre collectivité →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
