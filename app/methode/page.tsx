import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import NinePillarsSection from '@/components/sections/NinePillarsSection';

export const metadata: Metadata = {
  title: "Conduite du changement : la Méthode TOP® au service de l’adoption de l’IA | Ô’TOP Formations",
  description: "Conduite du changement : gestion de la pression, concentration, adaptabilité et récupération active pour réussir la transition IA de vos équipes.",
  alternates: {
    canonical: "https://otopformations.com/methode",
  },
};

export default function MethodeTop() {
  return (
    <main>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--blue-900) 0%, #03142e 100%)', color: 'white', padding: '8rem 0 5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--blue-100)', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'white' }}>Accueil</Link>
            <span className="breadcrumb-sep" style={{ margin: '0 0.5rem' }}>›</span>
            <span>Conduite du changement &amp; Méthode TOP®</span>
          </div>
          <div className="mb-4">
            <span 
              style={{ backgroundColor: '#ffffff', color: '#021842', borderColor: '#cbd5e1' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-md border"
            >
              <span style={{ color: '#021842' }}>🧭 Conduite du changement • Méthode TOP® (21 h)</span>
            </span>
          </div>
          <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2 }}>
            Conduite du changement : la Méthode TOP® au service de l’adoption de l’IA
          </h1>
          <p className="hero-subtitle text-base sm:text-lg mb-6 leading-relaxed" style={{ maxWidth: '850px' }}>
            Gestion de la pression • Concentration • Adaptabilité • Récupération active. Des techniques concrètes pour garder la lucidité décisionnelle et réussir la transformation de vos équipes.
          </p>

          <div className="hero-funding-info p-4 rounded-xl max-w-3xl mb-8 border">
            <p style={{ margin: 0, fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              « Selon le Boston Consulting Group, la réussite d’une transformation par l’IA tient pour 10 % aux algorithmes, 20 % à la technologie et aux données, et 70 % aux personnes et aux processus. »
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/commander?offre=top" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', padding: '1rem 2rem', fontWeight: 800 }}>
              Commencer mon inscription — 890 € →
            </Link>
            <Link href="/commander?offre=entreprise" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
              Demander un devis « IA &amp; Humain »
            </Link>
            <a 
              href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20des%20informations%20sur%20la%20M%C3%A9thode%20TOP%C2%AE." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#25D366', color: 'white', fontWeight: 700 }}
            >
              WhatsApp 💬
            </a>
          </div>
        </div>
      </div>

      {/* Historique */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="label">Historique &amp; Origines</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--blue-900)' }}>Une méthode éprouvée pour les situations exigeantes</h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', fontSize: '1rem' }}>
                Créées dans les années 1990 par le Dr Édith Perreaut-Pierre au sein du service de santé des armées, les TOP® ont d’abord été conçues pour préparer les militaires et les sportifs de haut niveau aux situations d’exception.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', fontSize: '1rem' }}>
                Aujourd’hui, ces techniques éprouvées sur le terrain sont parfaitement adaptées au monde professionnel. Elles permettent à chacun de mobiliser ses ressources cognitives, physiologiques et attentionnelles pour faire face aux transitions technologiques.
              </p>
              <p style={{ lineHeight: 1.7, color: 'var(--gray-700)', fontSize: '1rem' }}>
                L’approche est pragmatique, brève et personnalisable. Elle vise l’autonomie rapide du collaborateur dans la gestion de son énergie et de sa concentration.
              </p>
            </div>
            <div>
              <img src="/formation-presentiel.png" alt="Formation TOP en présentiel" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Piliers */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Les 4 leviers</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Les fondamentaux des TOP®</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto', color: 'var(--gray-700)', fontSize: '1.05rem' }}>Quatre familles d’outils complémentaires pour agir sur la régulation émotionnelle et physique.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🌬️</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-600)' }}>01</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Respiration</h3>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La respiration est le premier levier de contrôle du système nerveux autonome. Les protocoles TOP® permettent de réguler l’état de stress, de restaurer l’attention et de stabiliser l’énergie en temps réel.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🧘</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-600)' }}>02</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Relaxation</h3>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La Relaxation Musculaire Directe (RMD), Indirecte (RMI) et Paradoxale permettent de relâcher les tensions physiques résiduelles et de faciliter une récupération active rapide.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🌟</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-600)' }}>03</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Imagerie mentale</h3>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                La Préparation Mentale de la Réussite (PMR) et la Répétition Mentale (RM) préparent le cerveau à l’action et à l’adoption de nouveaux processus métiers par la visualisation guidée.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>💬</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-600)' }}>04</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Dialogue interne</h3>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Le Signal d’Ajustement Réflexe (SAR), le Renforcement Positif (R+) et la Dynamisation (DPP) transforment le discours interne en levier de lucidité, de confiance et d’adhésion collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Piliers */}
      <NinePillarsSection 
        title="9 Piliers pour Accompagner l’Humain"
        subtitle="Intégrés à la Méthode TOP®, ces 9 leviers structurent l’accompagnement individuel et collectif pour faciliter la conduite du changement et mobiliser le potentiel de vos équipes."
      />

      {/* Bénéfices Concrets */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="label">Bénéfices Concrets</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--blue-900)' }}>Les résultats de la méthode</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              ['🛡️', 'Gestion de la pression', 'Réguler son niveau de tension face aux flux de travail accélérés et aux imprévus.'],
              ['🎯', 'Concentration', 'Maintenir un haut niveau d’attention et limiter la dispersion cognitive.'],
              ['🔋', 'Récupération active', 'Optimiser son temps de repos pour maintenir une énergie durable sur la durée.'],
              ['🤝', 'Adhésion d’équipe', 'Faciliter l’acceptation des nouveaux outils technologiques et désamorcer les craintes.'],
              ['💡', 'Lucidité décisionnelle', 'Conserver son discernement dans les moments complexes ou à forts enjeux.'],
              ['💪', 'Motivation pérenne', 'Mobiliser son engagement au quotidien avec une dynamique positive.'],
              ['🧠', 'Adaptabilité', 'Développer sa flexibilité mentale pour aborder sereinement les transitions métiers.'],
              ['🧭', 'Autonomie durable', 'Acquérir des protocoles courts de 2 à 5 minutes utilisables en toute discrétion.']
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'var(--gray-50)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>{title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-section" style={{ background: 'var(--blue-900)', color: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="cta-inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="label" style={{ color: 'var(--gold-light)' }}>Passez à l’action</span>
            <h2 className="cta-title" style={{ color: 'white', fontSize: '2.4rem', margin: '1rem 0 1.5rem' }}>
              Prêt(e) à intégrer la Méthode TOP® dans votre organisation ?
            </h2>
            <p style={{ color: 'var(--blue-100)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Financement OPCO / FAF possible via notre partenaire Eloq-One, sous réserve d’accord du financeur.
            </p>
            <div className="cta-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link href="/commander?offre=top" className="btn btn-primary" style={{ background: 'var(--red-600)', color: 'white', fontWeight: 800, padding: '1rem 2rem' }}>
                Commencer mon inscription — 890 € →
              </Link>
              <Link href="/commander?offre=entreprise" className="btn btn-ghost" style={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
                Demander un devis « IA &amp; Humain »
              </Link>
              <a 
                href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20des%20informations%20sur%20la%20M%C3%A9thode%20TOP%C2%AE." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn" 
                style={{ background: '#25D366', color: 'white', fontWeight: 700 }}
              >
                WhatsApp 💬
              </a>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
