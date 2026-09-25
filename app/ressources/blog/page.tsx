import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Blog & Ressources : IA Générative, Méthode TOP® & Financements OPCO | Ô'TOP Formation",
  description:
    "Guides pratiques, décryptages et conseils d'experts sur l'Intelligence Artificielle en entreprise, l'AI Act européen, la régulation du stress (TOP®) et le financement OPCO à 100%.",
  alternates: {
    canonical: 'https://o-topformation.vercel.app/ressources/blog',
  },
};

const articles = [
  {
    slug: 'comment-choisir-formation-ia-2026',
    title: "Comment choisir sa formation en Intelligence Artificielle en 2026 sans jargon ?",
    category: "Intelligence Artificielle",
    categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    readTime: "6 min de lecture",
    date: "18 Mars 2026",
    author: "Renaud — Directeur Pédagogique Digital & IA",
    image: "/formation-ai-dev.jpg",
    excerpt:
      "Entre formations théoriques sur YouTube et promesses d'enrichissement rapide, comment identifier une formation professionnelle sérieuse qui transforme réellement votre quotidien d'artisan, dirigeant ou libéral ?",
    content: [
      "Le premier piège à éviter : les cours magistraux passifs. L'IA générative (ChatGPT, Claude, Mistral) ne s'apprend pas en regardant quelqu'un d'autre taper des prompts. Vous devez pratiquer sur vos propres devis, vos propres mails et vos propres fiches clients.",
      "Le deuxième critère essentiel : le coaching individuel 1-to-1. Chez Ô'TOP Formation, chaque apprenant bénéficie de 5h d'accompagnement direct en visio. Nous prenons vos fichiers, nous installons vos assistants et nous automatisons vos tâches récurrentes ensemble.",
      "Le troisième critère : la certification officielle France Compétences. Privilégiez des parcours préparant à un titre officiel du Répertoire Spécifique (comme la RS6776 ou RS7344), gages de sérieux et condition sine qua non pour une prise en charge à 100% par les OPCO et FAF."
    ],
  },
  {
    slug: 'ai-act-europeen-entreprises-tpe-pme',
    title: "AI Act Européen : ce qui change concrètement pour les TPE, PME et indépendants",
    category: "Réglementation & Sécurité",
    categoryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    readTime: "5 min de lecture",
    date: "10 Mars 2026",
    author: "Renaud & Équipe Juridique",
    image: "/hero-ai-workspace.jpg",
    excerpt:
      "L'entrée en vigueur du règlement européen sur l'IA (AI Act) impose de nouvelles règles de conformité, de transparence et de confidentialité des données. Voici les réflexes à adopter dès maintenant.",
    content: [
      "Beaucoup de chefs d'entreprise ignorent qu'en utilisant des versions grand public gratuites d'outils d'IA, ils exposent potentiellement le secret commercial ou les données de leurs clients à l'entraînement des modèles américains.",
      "L'AI Act classe les usages selon leur niveau de risque. Pour les TPE et PME qui utilisent l'IA pour la communication, l'automatisation administrative ou le support client, le risque est faible mais exige une transparence et un contrôle humain obligatoire.",
      "Notre module dédié à la sécurité dans la certification RS6776 vous apprend à paramétrer des environnements sécurisés (opt-out d'entraînement, pseudonymisation des documents et hébergement souverain avec des modèles européens comme Mistral)."
    ],
  },
  {
    slug: 'financement-opco-faf-guide-remboursement-100',
    title: "Financement OPCO & FAF : le guide étape par étape pour être financé à 100%",
    category: "Financement & Droits",
    categoryColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    readTime: "4 min de lecture",
    date: "2 Mars 2026",
    author: "Mélissa JENNADI — Directrice des Admissions",
    image: "/formation-social-growth.jpg",
    excerpt:
      "Chaque année, des milliers de professionnels cotisent à la formation professionnelle sans jamais utiliser leur budget disponible. Découvrez comment obtenir une prise en charge intégrale sans aucune avance de trésorerie.",
    content: [
      "Que vous soyez travailleur indépendant (inscrit à l'URSSAF, affilié FIF-PL, AGEFICE ou FAFCEA) ou dirigeant / collaborateur d'entreprise (rattaché à un OPCO comme Atlas, Akto, Opco EP), vous disposez d'une enveloppe de formation annuelle qui se renouvelle chaque 1er janvier.",
      "Si vous ne l'utilisez pas avant la fin de l'année, ce budget est définitivement perdu : il n'est pas reportable !",
      "Grâce à notre portage certifié Qualiopi avec Eloq-One, Mélissa monte votre dossier de demande de prise en charge de A à Z. Dans 95% des cas avec subrogation de paiement, vous ne déboursez rien : votre financeur règle directement l'organisme."
    ],
  },
];

export default function BlogPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Ressources &amp; Blog</span>
          </div>
          <h1>Le Blog &amp; Guides Stratégiques Ô&apos;TOP</h1>
          <p>
            Retrouvez nos analyses pratiques, nos tutoriels sans jargon et nos guides pour réussir votre transition vers l&apos;IA et préserver votre énergie mentale.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between shadow-xl hover:border-blue-500/40 transition-all group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md ${art.categoryColor}`}>
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {art.excerpt}
                    </p>

                    <div className="space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-300">
                      {art.content.slice(0, 2).map((p, idx) => (
                        <p key={idx} className="line-clamp-2 text-slate-400 text-[11px] leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(art.title)}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Poser une question sur ce sujet</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Section d'accompagnement direct */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Vous souhaitez monter en compétences avec un expert ?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Nos formateurs adaptent le programme à vos objectifs réels et vous accompagnent pas à pas avec 5h de coaching individuel.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all"
              >
                Diagnostic Offert (15 min) →
              </Link>
              <Link
                href="/brochure"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition-all"
              >
                Brochure PDF 📄
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
