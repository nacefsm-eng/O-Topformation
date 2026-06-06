'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Qu'est-ce que les TOP® ?",
    answer:
      "Les Techniques d'Optimisation du Potentiel (TOP®) sont un ensemble de méthodes issues de la psychologie du sport et de la préparation mentale militaire, développées à l'origine par l'Armée de l'Air française dans les années 1990. Elles regroupent des techniques de relaxation, de respiration, d'imagerie mentale, de fixation d'objectifs et de gestion du stress. Reconnues scientifiquement et validées par des années de pratique opérationnelle, les TOP® ont progressivement été adaptées à de nombreux contextes : monde professionnel, sport de haut niveau, santé, éducation. Leur particularité est d'être concrètes, immédiatement applicables et accessibles à tous, quel que soit le niveau de départ.",
  },
  {
    id: 2,
    question: "Y a-t-il des prérequis pour suivre une formation ?",
    answer:
      "Non, il n'y a aucun prérequis pour suivre nos formations. Les TOP® sont conçues pour être accessibles à tout public, quelle que soit votre profession, votre niveau d'études ou votre expérience préalable en développement personnel. Que vous soyez manager, sportif, soignant, enseignant ou simplement en quête d'outils pour mieux gérer votre quotidien, vous pouvez intégrer nos formations. Un entretien de positionnement est réalisé en amont pour adapter le parcours à votre profil et à vos objectifs spécifiques.",
  },
  {
    id: 3,
    question: "La formation est-elle certifiante ?",
    answer:
      "À l'issue de la Formation Initiale TOP® (FI TOP®), les stagiaires ayant validé l'évaluation finale (QCM avec un seuil de réussite à 70 %) reçoivent une Attestation de Compétences. Ce document officiel atteste de l'acquisition des compétences liées aux Techniques d'Optimisation du Potentiel. Il est distinct d'une certification inscrite au Répertoire National des Certifications Professionnelles (RNCP) ou au Répertoire Spécifique (RS), mais constitue une preuve reconnue de formation dans le domaine de la préparation mentale et de la gestion du stress.",
  },
  {
    id: 4,
    question: "Peut-on financer la formation via un OPCO ou le CPF ?",
    answer:
      "Oui, plusieurs dispositifs de financement sont mobilisables selon votre situation professionnelle. Les salariés peuvent solliciter leur OPCO (Opérateur de Compétences) dans le cadre du plan de développement des compétences de leur entreprise. Le financement via le CPF (Compte Personnel de Formation) sera possible dès lors que notre formation sera référencée sur la plateforme Mon Compte Formation, ce qui sera engagé après l'obtention de notre NDA et la certification Qualiopi. Les demandeurs d'emploi peuvent se rapprocher de leur conseiller France Travail. Pour toute question sur le financement, contactez-nous directement, nous vous accompagnons dans vos démarches.",
  },
  {
    id: 5,
    question: "Proposez-vous des formations intra-entreprise ?",
    answer:
      "Oui, absolument. Nous proposons des formations intra-entreprise sur mesure, directement dans vos locaux ou à distance. Chaque formation intra fait l'objet d'un devis personnalisé en fonction du nombre de participants, de la durée souhaitée, des objectifs spécifiques et du contenu adapté à votre secteur d'activité. Nous pouvons également concevoir des programmes hybrides combinant formations collectives et accompagnements individuels. N'hésitez pas à nous contacter pour discuter de votre projet et obtenir une proposition adaptée.",
  },
  {
    id: 6,
    question: "Les TOP® sont-elles réellement efficaces ?",
    answer:
      "Oui. Les Techniques d'Optimisation du Potentiel ont été développées par l'Armée de l'Air française pour des contextes à haute exigence, où les erreurs ne sont pas permises. Des décennies de pratique opérationnelle et de recherche en psychologie du sport et du travail confirment leur efficacité. Elles ont été adoptées par des sportifs de haut niveau (équipes olympiques), des personnels soignants en milieux intensifs, des forces de l'ordre et des cadres dirigeants. Ce qui fait la force des TOP®, c'est leur caractère pragmatique : elles ne proposent pas de recettes magiques, mais des techniques concrètes, entraînables et mesurables pour optimiser ses ressources mentales et physiques.",
  },
  {
    id: 7,
    question: "Quelle est la durée de la FI TOP® ?",
    answer:
      "La Formation Initiale TOP® (FI TOP®) se déroule sur 3 jours consécutifs (ou non consécutifs selon les modalités choisies), pour un volume total de 21 heures de formation. Ces 21 heures comprennent les apports théoriques, les ateliers pratiques, les exercices guidés, les mises en situation et les évaluations. Une organisation sur des journées complètes de 7 heures est possible, tout comme une organisation en demi-journées selon les contraintes des participants. Contactez-nous pour organiser un calendrier adapté à votre emploi du temps.",
  },
  {
    id: 8,
    question: "Comment se déroule l'évaluation en formation ?",
    answer:
      "L'évaluation est structurée en plusieurs étapes. Avant la formation, un questionnaire de positionnement permet d'évaluer votre niveau initial et d'identifier vos besoins prioritaires. À mi-parcours, un QCM formatif est proposé pour faire le point sur les apprentissages en cours et ajuster si nécessaire. En fin de formation, un QCM sommatif évalue l'acquisition des compétences. Le seuil de réussite est fixé à 70 %. En cas d'échec, une possibilité de rattrapage est organisée. Les stagiaires qui valident l'évaluation finale reçoivent leur Attestation de Compétences.",
  },
  {
    id: 9,
    question: "Peut-on suivre la formation à distance (en visioconférence) ?",
    answer:
      "Oui, toutes nos formations peuvent être suivies en présentiel ou en distanciel via visioconférence. La modalité en visio est proposée via des outils stables et sécurisés (Zoom, Teams ou équivalent). Le format à distance a été spécialement pensé pour maintenir l'interactivité et la qualité pédagogique : les exercices pratiques sont adaptés, des temps de pause sont planifiés et les participants bénéficient du même accompagnement qu'en présentiel. Pour les formations en visio, vous recevrez en amont un lien de connexion, le programme détaillé et les ressources pédagogiques nécessaires.",
  },
  {
    id: 10,
    question: "Qui sont les formateurs ?",
    answer:
      "Vos formations sont animées par les deux fondateurs d'Ô'TOP Formation : Melyssa Jennadi, Docteure en Sciences Humaines et formatrice certifiée TOP®, et Régis, expert TOP® avec plus de 15 ans d'expérience, ancien de l'Armée de l'Air et formateur de praticiens. Tous deux sont passionnés par la transmission et s'engagent à offrir une expérience de formation à la fois rigoureuse sur le plan scientifique et accessible dans la pratique. Leur complémentarité (expertise académique et expérience opérationnelle) garantit une formation complète et équilibrée.",
  },
  {
    id: 11,
    question: "Puis-je organiser une conférence TOP® dans mon entreprise ?",
    answer:
      "Oui, nous proposons des conférences de sensibilisation aux TOP® destinées aux entreprises, associations, établissements de santé ou structures sportives. Ces conférences, d'une durée de 1h à 2h30, permettent de découvrir les principes des Techniques d'Optimisation du Potentiel, leurs applications concrètes au quotidien et les bénéfices attendus. Elles constituent souvent un excellent point d'entrée avant d'envisager des formations plus approfondies. Contactez-nous pour un devis personnalisé et pour vérifier les disponibilités de nos intervenants.",
  },
  {
    id: 12,
    question: "Où se déroulent les formations en présentiel ?",
    answer:
      "Nos formations en présentiel se déroulent principalement à Ollioules, dans le département du Var (83). Les locaux sont accessibles en voiture depuis Toulon, Marseille et la côte d'Azur. Pour les formations intra-entreprise, nous pouvons nous déplacer dans vos locaux, en France métropolitaine, sur devis. Le distanciel reste disponible pour tous les participants ne pouvant se déplacer à Ollioules. Pour connaître les prochaines dates de sessions inter-entreprises, consultez notre calendrier ou contactez-nous directement.",
  },
];

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <h1>Foire aux questions</h1>
          <p className="hero-subtitle">
            Toutes les réponses à vos questions sur les TOP®, nos formations, les modalités
            pédagogiques et les financements disponibles.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="section">
        <div className="container">
          <div className="faq-wrapper">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-body-${item.id}`}
                  >
                    <span className="faq-number">{String(item.id).padStart(2, '0')}</span>
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-chevron" aria-hidden="true">
                      {isOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-body-${item.id}`}
                    className="faq-body"
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    hidden={!isOpen}
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="faq-cta">
            <div className="faq-cta-inner">
              <div className="faq-cta-icon" aria-hidden="true">💬</div>
              <h2>Vous avez une autre question ?</h2>
              <p>
                Notre équipe est disponible pour répondre à toutes vos questions spécifiques
                sur nos formations, les modalités de financement ou l'organisation d'un événement.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
