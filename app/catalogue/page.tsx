'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CheckoutModal from '@/components/ui/checkout-modal';
import { Bot, Sparkles, Share2, Brain, Clock, CheckCircle2, ArrowRight, MessageCircle, CreditCard, ShieldCheck } from 'lucide-react';

const formations = [
  {
    id: 'fi-top',
    icon: <Brain size={28} />,
    badge: 'Méthode TOP®',
    badgeColor: 'amber',
    title: 'FI-TOP® — Gestion du Stress & Prévention des RPS',
    subtitle: 'Formation Initiale Méthode TOP®',
    duration: '21h',
    price: 890,
    priceDisplay: '890 €',
    href: '/formations/fi-top',
    stripeOffer: 'Formation FI-TOP® Gestion du Stress (21h)',
    description: "Maîtrisez les 9 leviers de régulation du stress et de prévention des risques psychosociaux (RPS) issus des armées et du sport de haut niveau. 21h de formation + 2h d'accompagnement expert incluses.",
    highlights: [
      '9 modules — 21h en e-learning',
      '2h accompagnement expert incluses',
      'Financement OPCO & FAF étudié',
      'Évaluation finale (certification facultative)',
    ],
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 'ia-rs6776',
    icon: <Sparkles size={28} />,
    badge: 'RS6776 — Promo 600 €',
    badgeColor: 'cyan',
    title: 'Exploiter une IA Générative pour son Activité',
    subtitle: 'Certification RS6776 — Pour indépendants & freelances',
    duration: '21h',
    price: 1490,
    promoPrice: 600,
    priceDisplay: '1 490 €',
    promoPriceDisplay: '600 €',
    href: '/formations/ia',
    stripeOffer: 'Offre Promo RS6776 (Durée limitée)',
    stripeOfferFull: 'Formation IA Générative RS6776 (21h)',
    description: "Prompt engineering, ChatGPT, Claude, automatisation n8n & Make. 21h certifiantes + 2h accompagnement expert. Offre promo durée limitée : 600 € (au lieu de 1 490 €).",
    highlights: [
      '21h e-learning + 2h accompagnement expert',
      'Prompt engineering & outils IA avancés',
      'Automatisation avec n8n & Make',
      'Offre promo : 600 € (durée limitée)',
    ],
    color: 'from-cyan-600 to-blue-600',
    isPromo: true,
  },
  {
    id: 'ia-rs7344',
    icon: <Bot size={28} />,
    badge: 'RS7344',
    badgeColor: 'indigo',
    title: 'Piloter un Projet de Création de Site Internet',
    subtitle: 'Certification RS7344 — Pour dirigeants & équipes',
    duration: '21h',
    price: 1490,
    priceDisplay: '1 490 €',
    href: '/formations/ia',
    stripeOffer: 'Formation IA RS7344 Dirigeants (21h)',
    description: "Maîtrisez la création d'un site web professionnel, le SEO, la sécurité numérique et les outils IA pour dirigeants. 21h certifiantes + 2h accompagnement expert incluses.",
    highlights: [
      '21h e-learning + 2h accompagnement expert',
      'Création site web & SEO local',
      'Sécurité numérique & conformité IA',
      'Financement OPCO & FAF étudié',
    ],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'rs7351',
    icon: <Share2 size={28} />,
    badge: 'RS7351',
    badgeColor: 'pink',
    title: 'Gérer la Communication Digitale via les Réseaux Sociaux',
    subtitle: 'Certification RS7351 — Communication & prospection',
    duration: '21h',
    price: 1490,
    priceDisplay: '1 490 €',
    href: '/formations/reseaux-sociaux',
    stripeOffer: 'Formation Réseaux Sociaux RS7351 (21h)',
    description: "Ligne éditoriale, contenu vidéo Canva/CapCut, prospection LinkedIn & social selling. 21h certifiantes + 2h accompagnement expert incluses.",
    highlights: [
      '21h e-learning + 2h accompagnement expert',
      'Ligne éditoriale & stratégie contenu',
      'Création vidéo Canva / CapCut',
      'Social selling & prospection LinkedIn',
    ],
    color: 'from-pink-600 to-rose-600',
  },
];

export default function CataloguePage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [selectedDesc, setSelectedDesc] = useState('');

  const handleOpenCheckout = (offer: string, amount: number, desc: string) => {
    setSelectedOffer(offer);
    setSelectedAmount(amount);
    setSelectedDesc(desc);
    setCheckoutOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-slate-950 pt-24 pb-20">
        {/* Hero */}
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-wider mb-6">
              ✨ Catalogue Officiel 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Toutes Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Formations</span>
              <br />Certifiantes
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              4 formations certifiantes France Compétences — 21h chacune, 2h d&apos;accompagnement expert incluses. Financements OPCO & FAF étudiés selon votre statut.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck size={16} className="text-emerald-400" />
                Porté par Eloq-One (certifié Qualiopi)
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400" />
                France Compétences RS6776 · RS7344 · RS7351
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Clock size={16} className="text-amber-400" />
                21h par formation — 100% en ligne
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
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider animate-pulse">
                      ⏱ Offre limitée
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
                    <div className="flex items-baseline gap-3">
                      {f.isPromo ? (
                        <>
                          <span className="text-3xl font-black text-amber-400">{f.promoPriceDisplay}</span>
                          <span className="text-lg text-slate-500 line-through">{f.priceDisplay}</span>
                          <span className="text-xs text-slate-400">· ou 3 × 200 €</span>
                        </>
                      ) : (
                        <span className="text-3xl font-black text-white">{f.priceDisplay}</span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      {f.isPromo ? (
                        <>
                          <button
                            onClick={() => handleOpenCheckout(f.stripeOffer, f.promoPrice!, '21h de formation certifiante en e-learning + 2h accompagnement expert individuel - Tarif promotionnel')}
                            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 hover:from-amber-400 hover:to-emerald-400 transition-all cursor-pointer"
                          >
                            <CreditCard size={15} /> Profiter de l&apos;offre 600 €
                          </button>
                          <button
                            onClick={() => handleOpenCheckout(f.stripeOfferFull!, f.price, '21h de formation certifiante en e-learning + 2h accompagnement expert individuel')}
                            className="py-3 px-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 hover:border-blue-500 hover:text-white transition-all cursor-pointer"
                          >
                            <CreditCard size={15} /> Tarif plein 1 490 €
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleOpenCheckout(f.stripeOffer, f.price, `21h de formation certifiante en e-learning + 2h accompagnement expert individuel — ${f.badge}`)}
                          className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <CreditCard size={15} /> S&apos;inscrire — {f.priceDisplay}
                        </button>
                      )}
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

        {/* Packs */}
        <section className="py-12 px-4 mt-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-black text-white text-center mb-3">Packs Multi-Formations</h2>
            <p className="text-center text-slate-400 mb-8">Combinez plusieurs formations pour maximiser l&apos;impact et réduire le coût.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { name: 'Pack Duo', desc: '2 formations au choix', price: 2490, offer: 'Pack Duo 2 formations' },
                { name: 'Pack Trio', desc: '3 formations au choix', price: 3390, offer: 'Pack Trio 3 formations', highlight: true },
                { name: 'Entreprise OPCO', desc: '3 formations — montage OPCO', price: 3200, offer: 'Entreprise OPCO 3 formations' },
              ].map((pack) => (
                <div key={pack.name} className={`rounded-2xl p-6 border flex flex-col gap-4 ${pack.highlight ? 'border-blue-500/50 bg-blue-900/20' : 'border-slate-700 bg-slate-900'}`}>
                  {pack.highlight && <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">⭐ Plus populaire</div>}
                  <div>
                    <div className="text-xl font-black text-white">{pack.name}</div>
                    <div className="text-sm text-slate-400">{pack.desc}</div>
                  </div>
                  <div className="text-2xl font-black text-white">{pack.price.toLocaleString('fr-FR')} €</div>
                  <button
                    onClick={() => handleOpenCheckout(pack.offer, pack.price, pack.desc)}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <CreditCard size={14} /> Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-black text-white text-center mb-2">Accompagnement Complémentaire</h2>
            <p className="text-center text-slate-400 mb-6 text-sm">2h incluses dans chaque formation. Besoin de plus ? Réservez des heures supplémentaires.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: '1h d\'accompagnement', price: 120, offer: 'Accompagnement 1h expert', amount: 120 },
                { label: 'Forfait 5h', price: 550, offer: 'Accompagnement forfait 5h', amount: 550 },
                { label: 'Forfait 10h', price: 1000, offer: 'Accompagnement forfait 10h', amount: 1000 },
              ].map((c) => (
                <div key={c.label} className="rounded-xl p-5 border border-slate-700 bg-slate-900 flex flex-col gap-3">
                  <div className="font-bold text-white">{c.label}</div>
                  <div className="text-2xl font-black text-amber-400">{c.price} €</div>
                  <button
                    onClick={() => handleOpenCheckout(c.offer, c.amount, c.label)}
                    className="py-2 px-4 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-sm transition-all cursor-pointer"
                  >
                    Réserver
                  </button>
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
              <h3 className="text-2xl font-black text-white mb-3">Financement OPCO & FAF</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Nos formations sont potentiellement finançables via votre OPCO, FAF ou FIF-PL. Notre partenaire certifié Qualiopi Eloq-One étudie vos droits et monte votre dossier complet. Prise en charge soumise à l&apos;accord de l&apos;organisme financeur.
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

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        defaultPlan={{
          title: selectedOffer,
          price: selectedAmount,
          description: selectedDesc,
        }}
      />
    </>
  );
}
