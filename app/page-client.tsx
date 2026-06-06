'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePageClient() {
  const [annDismissed, setAnnDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof sessionStorage !== 'undefined') {
      setAnnDismissed(sessionStorage.getItem('otop_ann') === '1');
    }
  }, []);

  const dismissAnn = () => { sessionStorage.setItem('otop_ann', '1'); setAnnDismissed(true); };

  const faqData = [
    { q: "Qu'est-ce que les Techniques d'Optimisation du Potentiel (TOP®) ?", a: "Les TOP® sont des stratégies mentales (respiration, relaxation, imagerie mentale, dialogue interne) développées dans l'armée française. Pragmatiques et immédiatement applicables, elles sont utilisées dans les contextes à haute exigence : santé, sport de haut niveau, milieux industriels." },
    { q: "Y a-t-il des prérequis pour suivre la formation ?", a: "Aucun prérequis. Les TOP® sont accessibles à tous, quel que soit votre niveau ou votre secteur. Un entretien de positionnement est réalisé en amont pour adapter le parcours à votre profil." },
    { q: "La formation peut-elle être financée ?", a: "Oui. Plusieurs dispositifs sont mobilisables selon votre situation : OPCO pour les salariés via le plan de développement des compétences de votre entreprise, financement personnel, ou dispositifs spécifiques (France Travail, FIFPL...). Contactez-nous pour étudier la solution la plus adaptée." },
    { q: "Proposez-vous des formations dans nos locaux ?", a: "Oui, nous proposons des formations intra-entreprise directement dans vos locaux, adaptées à vos équipes et votre secteur. Chaque programme fait l'objet d'un devis personnalisé." },
    { q: "La formation est-elle certifiante ?", a: "À l'issue de la FI TOP®, les stagiaires ayant validé l'évaluation finale reçoivent une Attestation de Compétences. Nous sommes en démarche Qualiopi pour permettre un financement CPF." },
    { q: "Peut-on suivre la formation à distance ?", a: "Oui, toutes nos formations sont disponibles en présentiel (Ollioules, Var) ou en distanciel via visioconférence. Les exercices pratiques sont entièrement adaptés au format en ligne." },
  ];

  const testimonials = [
    { initials: 'SB', name: 'Sandrine B.', role: 'Infirmière cadre', org: 'CHU de Toulon', stars: 5, text: 'Après 12 ans en soins intensifs, j\'étais épuisée. La méthode TOP® m\'a redonné des outils concrets pour récupérer entre les gardes et gérer les situations de crise sans m\'effondrer. Une vraie révélation professionnelle.' },
    { initials: 'PM', name: 'Pierre-Marc D.', role: 'DRH', org: 'Collectivité territoriale — 350 agents', stars: 5, text: 'Nous avons déployé la formation TOP® sur nos équipes de direction suite à une forte hausse des arrêts maladie. Après 6 mois, le taux d\'absentéisme a baissé de façon notable. Mélyssa et Régis ont su adapter le contenu à notre culture interne.' },
    { initials: 'NF', name: 'Nathalie F.', role: 'Directrice d\'école primaire', org: 'Académie de Nice', stars: 5, text: 'J\'ai suivi la FB-TOP avant la rentrée. Les outils de respiration que j\'ai appris, je les réutilise chaque matin avant d\'entrer dans la classe. Mon équipe pédagogique m\'a demandé à suivre la formation à leur tour !' },
  ];

  const sectors = [
    { icon: '🏥', title: 'Santé & Médico-social', link: '/secteurs/sante', items: ['Soignants & Infirmiers', 'Prévention burn-out', 'Gestion de l\'urgence', 'EHPAD & CHU'] },
    { icon: '🎓', title: 'Éducation & Enseignement', link: '/secteurs/education', items: ['Enseignants & CPE', 'Prévention violence', 'Sérénité en classe', 'Académies'] },
    { icon: '🏛️', title: 'Fonction publique', link: '/secteurs/fonction-publique', items: ['Agents territoriaux', 'Management public', 'RPS', 'Mairies'] },
    { icon: '💼', title: 'PME & Dirigeants', link: '/secteurs/pme-dirigeants', items: ['Performance', 'Leadership', 'QVT & Fidélisation', 'Entreprises'] },
  ];

  return (
    <>
      {/* ===== ANNOUNCEMENT BAR ===== */}
      {mounted && !annDismissed && (
        <div style={{ background: 'linear-gradient(90deg, var(--blue-900), var(--blue-800))', color: 'white', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', position: 'relative', zIndex: 1100, fontSize: '0.875rem', fontWeight: 600 }}>
          <span style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '50px', padding: '0.2rem 0.7rem', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em' }}>🌟 PROCHAINE SESSION</span>
          <span style={{ textAlign: 'center', maxWidth: '600px' }}>Formation Initiale TOP® à Ollioules (PACA). Places limitées !</span>
          <a href="/reservation" style={{ background: 'white', color: 'var(--blue-900)', borderRadius: '50px', padding: '0.3rem 1rem', fontSize: '0.78rem', fontWeight: 800, whiteSpace: 'nowrap', textDecoration: 'none' }}>Réserver un appel →</a>
          <button onClick={dismissAnn} aria-label="Fermer" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1 }}>✕</button>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section className="hero container" style={{ paddingTop: '5rem', minHeight: 'auto', paddingBottom: '4rem' }}>
        <div className="hero-text" style={{ paddingLeft: 0, maxWidth: '660px' }}>

          {/* WHO badge */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span style={{ background: 'var(--blue-50)', color: 'var(--blue-700)', borderRadius: '50px', padding: '0.3rem 0.9rem', fontSize: '0.78rem', fontWeight: 700, border: '1px solid rgba(26,60,143,0.15)' }}>Pour DRH & managers</span>
            <span style={{ background: 'var(--red-100)', color: 'var(--red-600)', borderRadius: '50px', padding: '0.3rem 0.9rem', fontSize: '0.78rem', fontWeight: 700, border: '1px solid rgba(200,35,26,0.15)' }}>Soignants</span>
            <span style={{ background: 'rgba(201,168,76,0.1)', color: '#8b6914', borderRadius: '50px', padding: '0.3rem 0.9rem', fontSize: '0.78rem', fontWeight: 700, border: '1px solid rgba(201,168,76,0.2)' }}>Éducation & Fonction publique</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Optimisez votre <span className="accent">potentiel</span> face à l'exigence
          </h1>

          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.6, color: 'var(--gray-700)', fontWeight: 600 }}>
            Formations certifiantes TOP® pour gérer le stress, prévenir le burn-out et améliorer la performance dans les organisations exigeantes.
          </p>

          {/* Formats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['🏫 Présentiel', '💻 Distanciel', '🏢 Intra-entreprise'].map(f => (
              <span key={f} style={{ background: 'var(--gray-100)', color: 'var(--gray-700)', borderRadius: '50px', padding: '0.3rem 0.9rem', fontSize: '0.8rem', fontWeight: 600 }}>{f}</span>
            ))}
          </div>

          {/* SINGLE main CTA */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link href="/reservation" className="btn btn-primary" style={{ padding: '1.1rem 2rem', fontSize: '1.1rem', boxShadow: '0 4px 20px rgba(26,60,143,0.35)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              📅 Réserver un entretien gratuit (15 min)
            </Link>
            <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: 'var(--gray-400)' }}>Sans engagement · Réponse sous 24h · Financement OPCO possible</div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--gray-200)', paddingTop: '1.5rem' }}>
            <div style={{ paddingRight: '1.5rem', borderRight: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--blue-900)' }}>15+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>ans d'expertise</div>
            </div>
            <div style={{ paddingRight: '1.5rem', borderRight: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--blue-900)' }}>500+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>professionnels formés</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--gold)' }}>100%</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>satisfaction</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" style={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/hero-top.png" alt="Formation TOP® Ô'TOP Formation" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', maxHeight: '520px', objectFit: 'cover' }} />
        </div>
      </section>

      {/* ===== IN-PAGE NAV ANCHORS ===== */}
      <div style={{ borderTop: '1px solid var(--gray-100)', borderBottom: '1px solid var(--gray-100)', background: 'white', position: 'sticky', top: '75px', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '0.75rem 0', WebkitOverflowScrolling: 'touch' }}>
          {[['#methode', 'La Méthode'], ['#comment', 'Comment ça marche'], ['#formations', 'Programmes'], ['#secteurs', 'Secteurs'], ['#temoignages', 'Témoignages'], ['#faq', 'FAQ']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: 'var(--gray-600)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{label}</a>
          ))}
        </div>
      </div>

      {/* ===== SOCIAL PROOF BAND ===== */}
      <div style={{ background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ils nous font confiance</span>
          {['CHU & Hôpitaux', 'Académies', 'Collectivités', 'Mairies', 'PME & ETI', 'Sport de haut niveau'].map(org => (
            <span key={org} style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: '8px', padding: '0.4rem 1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)' }}>{org}</span>
          ))}
        </div>
      </div>

      {/* ===== METHODE ===== */}
      <section className="section" id="methode" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Les Fondements</span>
            <h2>La Méthode TOP® en 4 piliers</h2>
            <p>Conçues par le Dr Edith Perreaut-Pierre pour l'armée française, les TOP® sont des stratégies mentales pragmatiques immédiatement applicables en situation réelle.</p>
          </div>
          <div className="pillars-grid">
            {[
              { num: '01', icon: '🌬️', title: 'Respiration', desc: 'Réguler le système nerveux et retrouver le calme en 2 minutes, même en situation d\'urgence.' },
              { num: '02', icon: '🧘', title: 'Relaxation', desc: 'Restaurer l\'énergie physique et mentale. Prévenir l\'accumulation de fatigue chronique.' },
              { num: '03', icon: '🌟', title: 'Imagerie mentale', desc: 'Préparer mentalement une situation difficile pour y faire face avec clarté et efficacité.' },
              { num: '04', icon: '💬', title: 'Dialogue interne', desc: 'Renforcer la confiance, stopper les pensées parasites, développer un mental constructif.' },
            ].map((p, i) => (
              <div key={i} className="pillar-card" style={{ background: 'var(--gray-50)' }}>
                <span className="pillar-num">{p.num}</span>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{p.icon}</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--gray-600)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/methode" className="btn btn-ghost">En savoir plus sur la méthode TOP® →</Link>
          </div>
        </div>
      </section>

      {/* ===== 3-STEP PROCESS ===== */}
      <section className="section" id="comment" style={{ background: 'var(--blue-900)', color: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="label" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>Votre parcours</span>
            <h2 style={{ color: 'white' }}>En 3 étapes, de la découverte à la maîtrise</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>Un accompagnement clair, sans jargon, centré sur vos résultats concrets.</p>
          </div>
          <div className="steps-grid">
            {[
              { num: '01', icon: '🤝', title: 'Échangez', sub: 'Entretien découverte gratuit', desc: 'Un appel de 15 minutes pour comprendre vos enjeux, votre secteur et vous orienter vers la formation la plus adaptée.', cta: 'Réserver maintenant', href: '/reservation', color: 'var(--gold)' },
              { num: '02', icon: '📋', title: 'Choisissez', sub: 'Votre programme sur mesure', desc: 'FI TOP® (21h certifiante), FB-TOP (7h découverte) ou formation intra-entreprise adaptée à vos équipes. Financement OPCO possible.', cta: 'Voir les programmes', href: '/formations/fi-top', color: 'rgba(255,255,255,0.9)' },
              { num: '03', icon: '🚀', title: 'Transformez', sub: 'Des résultats durables', desc: 'Vos équipes maîtrisent des outils concrets. Vous mesurez la baisse du stress, de l\'absentéisme et la hausse de la performance.', cta: 'Voir les secteurs', href: '#secteurs', color: 'rgba(255,255,255,0.9)' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', background: s.color === 'var(--gold)' ? 'var(--gold)' : 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto' }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>ÉTAPE {s.num}</div>
                  <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.75rem' }}>{s.sub}</div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                <a href={s.href} className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', alignSelf: 'center', marginTop: 'auto' }}>{s.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section className="section" id="formations" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Nos Formations</span>
            <h2>Des programmes adaptés à vos besoins</h2>
            <p>Tous nos formats sont finançables via votre OPCO. Demandez un devis personnalisé.</p>
          </div>
          <div className="three-col">
            {[
              { tag: 'tag-blue', tagLabel: 'FORMATION PHARE', title: 'Formation Initiale TOP® — FI TOP®', duration: '21h', format: 'Présentiel ou distanciel', img: '/formation-presentiel.png', desc: '3 modules progressifs pour maîtriser l\'ensemble des outils TOP® : respiration, relaxation, imagerie mentale, motivation. Attestation de compétences délivrée.', meta: ['⏱ 21h', '👥 Max 12 pers.', '📍 Ollioules / Visio'], href: '/formations/fi-top' },
              { tag: 'tag-red', tagLabel: 'DÉCOUVERTE', title: 'Formation de Base TOP® — FB-TOP', duration: '7h', format: 'Présentiel ou distanciel', img: '/hero-top.png', desc: 'Une journée intense pour découvrir les fondamentaux TOP® et repartir avec 3 techniques immédiatement applicables dans votre quotidien professionnel.', meta: ['⏱ 7h', '👥 Groupe', '📍 Ollioules'], href: '/formations/fb-top' },
              { tag: 'tag-gold', tagLabel: 'SUR-MESURE', title: 'Formations Intra-Entreprise', duration: 'Sur devis', format: 'Dans vos locaux', img: '/entreprises-equipe.png', desc: 'Déploiement sur-mesure dans vos locaux, adapté à la réalité terrain de vos équipes. Programme co-construit avec vous. Financement OPCO facilité.', meta: ['⏱ Sur devis', '👥 Vos équipes', '📍 Vos locaux'], href: '/entreprises' },
            ].map((f, i) => (
              <Link href={f.href} key={i} className="formation-card" style={{ background: 'white' }}>
                <img src={f.img} alt={f.title} className="formation-img" style={{ height: '180px' }} />
                <div className="formation-body">
                  <span className={`formation-tag ${f.tag}`}>{f.tagLabel}</span>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--blue-900)', lineHeight: 1.3 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: '1.25rem', flex: 1, color: 'var(--gray-600)', lineHeight: 1.6 }}>{f.desc}</p>
                  <div className="formation-meta">
                    {f.meta.map(m => <span key={m} className="formation-meta-item">{m}</span>)}
                  </div>
                  <div style={{ marginTop: '1rem', padding: '0.6rem', background: 'var(--blue-50)', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--blue-700)', fontWeight: 600, textAlign: 'center' }}>
                    💶 Financement OPCO possible — Demandez un devis
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTORS ===== */}
      <section className="section" id="secteurs" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Publics cibles</span>
            <h2>Des solutions spécifiques par secteur</h2>
            <p>Notre approche s'adapte à la culture et aux contraintes de votre métier. Cliquez sur votre secteur pour voir les cas d'usage concrets.</p>
          </div>
          <div className="auto-grid">
            {sectors.map((s, i) => (
              <Link href={s.link} key={i} style={{ background: 'var(--gray-50)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue-500)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gray-200)'; (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>{s.title}</h3>
                <ul className="check-list" style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <div style={{ marginTop: '1.5rem', color: 'var(--blue-700)', fontSize: '0.9rem', fontWeight: 600 }}>Voir les solutions →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" id="temoignages" style={{ background: 'var(--blue-900)' }}>
        <div className="container">
          <div className="section-header">
            <span className="label" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>Témoignages</span>
            <h2 style={{ color: 'white' }}>Ils ont transformé leur quotidien avec TOP®</h2>
          </div>
          <div className="three-col" style={{ gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius)', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.1em' }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue-700), var(--red-600))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'white', fontSize: '0.9rem', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{t.role} — {t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '600px', margin: '3rem auto 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💬</div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Rejoignez les 500+ professionnels qui ont déjà transformé leur approche du stress.</p>
            <Link href="/reservation" className="btn" style={{ background: 'white', color: 'var(--blue-900)', fontWeight: 700 }}>📅 Réserver mon entretien gratuit</Link>
          </div>
        </div>
      </section>

      {/* ===== QUALITY ===== */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎯', title: 'Démarche Qualiopi', desc: 'Indicateurs de qualité rigoureux appliqués à chaque formation. Certification en cours.', tag: 'Excellence' },
              { icon: '♿', title: 'Accessibilité Handicap', desc: 'Nos formations sont accessibles à toutes et tous. Référent handicap disponible sur demande.', tag: 'Inclusion' },
              { icon: '💶', title: 'Financement OPCO', desc: 'Vos formations peuvent être financées via votre OPCO, plan de formation ou autres dispositifs.', tag: 'Financement' },
              { icon: '📜', title: 'Attestation de compétences', desc: 'À l\'issue de la FI TOP®, une attestation officielle vous est délivrée après validation.', tag: 'Certification' },
            ].map((q, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--gray-200)' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{q.icon}</span>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--blue-700)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{q.tag}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--blue-900)' }}>{q.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="label">FAQ</span>
            <h2>Vos questions, nos réponses</h2>
            <p>Tout ce que vous devez savoir avant de vous lancer.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqData.map((faq, i) => (
              <div key={i} style={{ border: `1px solid ${openFaq === i ? 'var(--blue-700)' : 'var(--gray-200)'}`, borderRadius: 'var(--radius)', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openFaq === i ? 'var(--blue-50)' : 'var(--gray-50)', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 700, fontSize: '0.97rem', color: 'var(--blue-900)', gap: '1rem' }}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span style={{ flexShrink: 0, fontSize: '1.5rem', fontWeight: 300, lineHeight: 1, color: 'var(--blue-700)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '1.25rem 1.5rem', background: 'white', fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.75, borderTop: '1px solid var(--gray-100)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/ressources/faq" style={{ color: 'var(--blue-700)', fontWeight: 600, fontSize: '0.95rem' }}>Voir toutes les questions →</Link>
          </div>
        </div>
      </section>

      {/* ===== EXPRESS CONTACT BOTTOM ===== */}
      <section className="section" style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--blue-900)' }}>Prêt à passer à l'action ?</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2.5rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            Un entretien de 15 minutes suffit pour comprendre vos enjeux et vous proposer la solution la mieux adaptée. Sans engagement.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label htmlFor="home-nom" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.4rem', textAlign: 'left' }}>Votre nom</label>
                <input id="home-nom" type="text" placeholder="Jean Dupont" style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', width: '100%', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label htmlFor="home-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.4rem', textAlign: 'left' }}>Votre email</label>
                <input id="home-email" type="email" placeholder="jean@entreprise.fr" style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', width: '100%', fontFamily: 'inherit' }} />
              </div>
            </div>
            <div>
              <label htmlFor="home-org" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--blue-900)', marginBottom: '0.4rem', textAlign: 'left' }}>Organisation / Secteur</label>
              <input id="home-org" type="text" placeholder="CHU de Lyon • Mairie de... • PME..." style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', width: '100%', fontFamily: 'inherit' }} />
            </div>
            <Link href="/reservation" className="btn btn-primary" style={{ justifyContent: 'center', padding: '1rem', fontSize: '1.05rem' }}>
              📅 Je réserve mon entretien gratuit →
            </Link>
            <p style={{ fontSize: '0.78rem', color: 'var(--gray-400)', margin: 0 }}>
              Financement OPCO possible · Réponse sous 24h · Sans engagement
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
