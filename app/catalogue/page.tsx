'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, Sparkles, Share2, Compass, Clock, CheckCircle2, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import Footer from '@/components/Footer';

const formations = [
  {
    id: 'ia-rs6776',
    icon: <Sparkles size={28} />,
    badge: 'Prépare à la certification RS6776 (passage en option)',
    badgeColor: 'cyan',
    title: 'IA générative : création de contenus rédactionnels et visuels responsables',
    subtitle: 'RS6776 — Pour indépendants, créateurs & professionnels',
    duration: '21 h dont 2 h d’accompagnement',
    priceDisplay: '600 €',
    paymentTerms: 'ou 3 × 200 € sans frais',
    launchOffer: 'Prix de lancement jusqu’au 31 octobre 2026',
    href: '/formations/ia',
    orderHref: '/commander?offre=rs6776',
    description: 'Identifiez les usages pertinents, créez vos premiers processus assistés par l’IA et bénéficiez de 2 heures d’accompagnement individuel en visioconférence.',
    highlights: [
      'Durée : 21 h, dont 2 h d’accompagnement individuel avec un expert',
      'Format : 100 % en ligne, accessible sous 24 h, à vie',
      'Confidentialité des données, conformité AI Act & RGPD',
      'Financement OPCO / FAF possible sous réserve d’accord',
    ],
    color: 'from-cyan-600 to-blue-600',
    isPromo: true,
  },
  {
    id: 'ia-rs7344',
    icon: <Bot size={28} />,
    badge: 'Prépare à la certification RS7344 (passage en option)',
    badgeColor: 'indigo',
    title: 'Développer son activité avec l’IA',
    subtitle: 'RS7344 — Pour dirigeants, managers & collaborateurs',
    duration: '21 h dont 2 h d’accompagnement',
    priceDisplay: '1 490 €',
    paymentTerms: 'ou 3 × 496,67 € sans frais',
    href: '/formations/ia',
    orderHref: '/commander?offre=rs7344',
    description: 'Structurez et pilotez l’intégration de l’IA dans vos processus : audit des opportunités, conformité AI Act et conduite du changement.',
    highlights: [
      'Durée : 21 h, dont 2 h d’accompagnement individuel avec un expert',
      'Format : 100 % en ligne (intra-entreprise possible)',
      'Conduite du changement, acculturation et ateliers Méthode TOP®',
      'Financement OPCO / FAF possible sous réserve d’accord',
    ],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'rs7351',
    icon: <Share2 size={28} />,
    badge: 'Prépare à la certification RS7351 (passage en option)',
    badgeColor: 'pink',
    title: 'Gérer la communication digitale d’une entreprise via les réseaux sociaux',
    subtitle: 'RS7351 — Communication, visuels & prospection',
    duration: '21 h dont 2 h d’accompagnement',
    priceDisplay: '1 490 €',
    paymentTerms: 'ou 3 × 496,67 € sans frais',
    href: '/formations/reseaux-sociaux',
    orderHref: '/commander?offre=rs7351',
    description: 'Structurez votre présence, produisez du contenu avec Canva et CapCut, et prospectez efficacement sur LinkedIn avec premières campagnes Meta Ads.',
    highlights: [
      'Durée : 21 h, dont 2 h d’accompagnement individuel avec un expert',
      'Format : 100 % en ligne avec ateliers concrets sur vos comptes',
      'Tableau de reporting pour piloter votre stratégie dans la durée',
      'Financement OPCO / FAF possible sous réserve d’accord',
    ],
    color: 'from-pink-600 to-rose-600',
  },
  {
    id: 'top',
    icon: <Compass size={28} />,
    badge: 'Méthode TOP® — conduite du changement',
    badgeColor: 'amber',
    title: 'Conduite du changement : la Méthode TOP® au service de l’adoption de l’IA',
    subtitle: 'Mélissa Jennadi & Régis Domergue • Formateurs certifiés TOP®',
    duration: '21 h (3 jours)',
    priceDisplay: '890 €',
    paymentTerms: 'ou 3 × 296,67 € sans frais',
    href: '/methode',
    orderHref: '/commander?offre=top',
    description: 'Face au flux d’informations et à l’accélération technologique, apprenez des techniques concrètes pour rester concentré, gérer la pression du changement et garder votre lucidité décisionnelle.',
    highlights: [
      '21 h en présentiel ou distanciel (visio)',
      'Gestion de la pression, concentration, adaptabilité et récupération',
      'Financement OPCO / FAF possible sous réserve d’accord',
      'Attestation de fin de formation officielle',
    ],
    color: 'from-amber-600 to-orange-600',
  },
];

export default function CataloguePage() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 pt-24 pb-20">
        {/* Hero */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-wider mb-6">
              📋 Catalogue, prix et inscriptions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Catalogue de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">nos formations</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Des formations 100 % en ligne : 21 h dont 2 h d’accompagnement avec un expert. Paiement en 3 fois sans frais ou financement possible selon votre statut.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck size={16} className="text-emerald-400" />
                Partenaire Eloq-One certifié Qualiopi
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400" />
                Prépare aux certifications RS6776 · RS7344 · RS7351 (option)
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Clock size={16} className="text-amber-400" />
                21 h par formation · 2 h accompagnement expert
              </span>
            </div>
          </div>
        </section>

        {/* Grille formations */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formations.map((f) => (
              <div key={f.id} className="relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col shadow-xl">
                {f.isPromo && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider">
                      🚀 Prix de lancement
                    </span>
                  </div>
                )}

                <div className={`p-6 bg-gradient-to-r ${f.color} text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider opacity-80">{f.badge}</div>
                      <div className="text-lg font-black leading-tight">{f.title}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm opacity-90 leading-relaxed">{f.description}</p>
                </div>

                <div className="p-6 flex flex-col flex-1 gap-5">
                  <ul className="space-y-2.5">
                    {f.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-slate-800 flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                      {f.isPromo ? (
                        <>
                          <div className="text-xs text-amber-300 font-semibold">
                            ⏰ {f.launchOffer}
                          </div>
                          <div className="flex items-baseline gap-3 mt-1">
                            <span className="text-3xl font-black text-emerald-400">{f.priceDisplay}</span>
                            <span className="text-xs text-slate-300">· {f.paymentTerms}</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-baseline gap-3">
                          <span className="text-3xl font-black text-white">{f.priceDisplay}</span>
                          <span className="text-xs text-slate-300">· {f.paymentTerms}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={f.orderHref}
                        className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                      >
                        Commencer mon inscription — {f.priceDisplay} →
                      </Link>
                      <Link
                        href={f.href}
                        className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <ArrowRight size={15} /> Détails
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packs Multi-Formations */}
        <section className="py-12 px-4 mt-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-black text-white text-center mb-3">Packs Duo, Trio et Formule Entreprise</h2>
            <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
              Des tarifs dégressifs, 2 h d’accompagnement par formation. Préparation aux certifications RS (passage en option).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pack Duo */}
              <div className="rounded-2xl p-6 border border-slate-700 bg-slate-900 flex flex-col gap-4">
                <div>
                  <div className="text-xl font-black text-white">Pack Duo</div>
                  <div className="text-sm text-slate-400 mt-1">
                    2 formations au choix parmi IA générative (RS6776), Développer son activité avec l’IA (RS7344) et Réseaux sociaux (RS7351).
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-emerald-400 font-semibold mb-1">Dès 1 790 € avec RS6776 (au lieu de 2 090 €)</div>
                  <div className="text-2xl font-black text-white">Dès 1 790 €</div>
                  <div className="text-xs text-slate-400 mt-0.5">ou 2 490 € (RS7344 + RS7351)</div>
                </div>
                <Link
                  href="/commander?offre=duo-6776-7344"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  Choisir mon Pack Duo →
                </Link>
              </div>

              {/* Pack Trio */}
              <div className="rounded-2xl p-6 border border-blue-500/50 bg-blue-900/20 flex flex-col gap-4 relative">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">⭐ Plus complet</div>
                <div>
                  <div className="text-xl font-black text-white">Pack Trio</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Les 3 formations : IA générative + Développer son activité avec l’IA + Réseaux sociaux.
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-amber-300 font-semibold mb-1">
                    Au lieu de 3 580 € séparément (économie 690 €)
                  </div>
                  <div className="text-2xl font-black text-white">2 890 €</div>
                  <div className="text-xs text-emerald-400 font-semibold mt-1">
                    La 3e formation pour 400 € de plus que le Duo RS7344 + RS7351.
                  </div>
                </div>
                <Link
                  href="/commander?offre=trio"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  Choisir mon Pack Trio →
                </Link>
              </div>

              {/* Formule Entreprise 40 h */}
              <div className="rounded-2xl p-6 border border-slate-700 bg-slate-900 flex flex-col gap-4">
                <div>
                  <div className="text-xl font-black text-white">Formule Entreprise 40 h</div>
                  <div className="text-sm text-slate-400 mt-1">
                    40 h au total : l’une de nos formations (21 h) complétée par des heures d’accompagnement avec un expert, pensée pour votre plan de développement des compétences.
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-slate-400 mb-1">Convention établie par Eloq-One, certifié Qualiopi</div>
                  <div className="text-2xl font-black text-white">3 200 €</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sur devis &amp; convention</div>
                </div>
                <Link
                  href="/commander?offre=entreprise"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  Demander un devis entreprise →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accompagnement Complémentaire */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-black text-white text-center mb-2">Accompagnement Complémentaire</h2>
            <p className="text-center text-slate-400 mb-6 text-sm">2 h incluses dans chaque formation. Besoin de séances supplémentaires ?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: '1 h d’accompagnement', price: '120 €', href: '/commander?offre=coaching-1h' },
                { label: 'Forfait 5 h', price: '550 €', href: '/commander?offre=coaching-5h' },
                { label: 'Forfait 10 h', price: '1 000 €', href: '/commander?offre=coaching-10h' },
              ].map((c) => (
                <div key={c.label} className="rounded-xl p-5 border border-slate-700 bg-slate-900 flex flex-col gap-3">
                  <div className="font-bold text-white">{c.label}</div>
                  <div className="text-2xl font-black text-amber-400">{c.price}</div>
                  <Link
                    href={c.href}
                    className="py-2 px-4 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-sm transition-all text-center"
                  >
                    Réserver
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Financement */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="rounded-3xl p-8 bg-slate-900 border border-slate-700">
              <ShieldCheck size={36} className="text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Financement OPCO, FAF &amp; France Travail</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Pour les formations financées par un OPCO, un FAF ou France Travail, notre partenaire Eloq-One, organisme certifié Qualiopi, établit la convention et assure la facturation. La prise en charge reste soumise à l’accord du financeur. Nos formations ne sont pas éligibles au CPF.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/financement" className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm inline-flex items-center gap-2 transition-all">
                  <ArrowRight size={16} /> En savoir plus sur le financement
                </Link>
                <a href="https://wa.me/33767246825" target="_blank" rel="noopener noreferrer" className="py-3 px-6 rounded-xl border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/20 font-bold text-sm inline-flex items-center gap-2 transition-all">
                  <MessageCircle size={16} /> Parler à Mélissa sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
