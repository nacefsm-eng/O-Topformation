import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, CheckCircle2, Phone, Mail, Sparkles, Brain, Award, Clock, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Plaquette & Brochure Officielle 2026 | Ô'TOP Formation",
  description: "Téléchargez la plaquette officielle Ô'TOP Formation 2026. Découvrez nos cursus en Techniques d'Optimisation du Potentiel (TOP®), IA générative et digital business.",
};

export default function BrochurePage() {
  const formations = [
    {
      title: "RS6776 — IA Générative & Automatisation Métier",
      subtitle: "Cursus Certifiant France Compétences • Pôle IA N°1",
      duration: "21 heures (e-learning + 2h coaching expert)",
      format: "100% e-learning à votre rythme + accompagnement 1-to-1",
      price: "1 490 € TTC",
      specialOffer: "Offre spéciale durée limitée : 610 € TTC",
      funding: "Éligible OPCO, FAF (FIF-PL, AGEFICE, FAFCEA)",
      badge: "Formation Star • IA Métier",
      badgeColor: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      description: "Maîtrisez l'intelligence artificielle générative pour booster votre productivité. Intégrez ChatGPT, Claude, créez vos GPTs personnalisés et automatisez vos flux avec tuteur IA et quiz de validation.",
      points: [
        "Fondamentaux de l'IA & prompt engineering avancé",
        "Automatisation de workflows métiers sans coder (Make, n8n)",
        "Création de bases de données internes & GPTs sur mesure",
        "Cas pratiques guidés, quiz de validation à chaque module & conformité AI Act"
      ]
    },
    {
      title: "RS7351 — Stratégie Réseaux Sociaux & Social Selling",
      subtitle: "Cursus Certifiant France Compétences (remplace RS6240)",
      duration: "21 heures (e-learning + 5h coaching expert)",
      format: "Distanciel avec accompagnement individuel",
      price: "1 490 € TTC",
      funding: "Éligible OPCO, FAF (FIF-PL, AGEFICE)",
      badge: "Certifiant RS7351",
      badgeColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
      description: "Transformez vos réseaux sociaux (LinkedIn & Instagram) en un levier d'acquisition régulier et rentable sans dépendre de la publicité payante.",
      points: [
        "Ligne éditoriale d'autorité et personal branding percutant",
        "Création de visuels et vidéos engageantes avec Canva & CapCut",
        "Prospection éthique et conversion en messagerie directe",
        "Cas pratiques métier, quiz de validation et calendrier trimestriel prêt à l'emploi"
      ]
    },
    {
      title: "RS7344 — Création de Site Web Moderne & SEO",
      subtitle: "Cursus Certifiant France Compétences • Développer son activité avec l'IA",
      duration: "21 heures (e-learning + 5h coaching expert)",
      format: "Distanciel ou Présentiel",
      price: "1 490 € TTC",
      funding: "Éligible OPCO, FAF (FIF-PL, AGEFICE)",
      badge: "Certifiant RS7344",
      badgeColor: "bg-cyan-600/20 text-cyan-400 border-cyan-500/30",
      description: "Développez votre activité grâce aux leviers web modernes : site professionnel, tunnel de conversion, SEO local optimisé et intégration de l'IA.",
      points: [
        "Architecture d'un site web taillé pour la conversion",
        "Référencement naturel (SEO) local et technique",
        "Cartographie des processus et feuilles de route IA",
        "Cas pratiques guidés, quiz d'évaluation et soutenance de certification"
      ]
    },
    {
      title: "FI TOP® — Formation Initiale TOP®",
      subtitle: "Cursus Référence Préparation Mentale & Gestion du Stress",
      duration: "21 heures (3 jours)",
      format: "Présentiel (Var / PACA) ou Distanciel (Visio synchrone)",
      price: "890 € TTC",
      funding: "Éligible OPCO & FAF (FIF-PL, AGEFICE)",
      badge: "Méthode TOP®",
      badgeColor: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      description: "Munissez-vous de l'essentiel de la boîte à outils TOP pour vous auto-gérer au quotidien. Prérequis obligatoire pour accéder au cursus de Praticien TOP®.",
      points: [
        "Régulation du stress aigu et prévention de l'épuisement professionnel (burn-out)",
        "Techniques respiratoires dynamisantes et relaxantes ciblées",
        "Imagerie mentale et répétition mentale des actions réussies (RMA)",
        "Récupération flash (SRF) et gestion du sommeil"
      ]
    },
    {
      title: "FB-TOP — Fondamentaux & Gestion de Crise",
      subtitle: "Format court intensif pour décideurs et équipes",
      duration: "7 heures (1 jour)",
      format: "Intra-entreprise ou Inter-entreprises",
      price: "390 € TTC",
      funding: "Prise en charge OPCO possible",
      badge: "Format Express",
      badgeColor: "bg-amber-600/20 text-amber-400 border-amber-500/30",
      description: "Acquérez les réflexes mentaux immédiats pour garder votre lucidité décisionnelle face aux situations d'urgence, négociations tendues ou prises de parole à fort enjeu.",
      points: [
        "Désamorçage instantané du pic de stress émotionnel",
        "Maintien de la concentration et de la lucidité sous haute pression",
        "Exercices pratiques d'ancrage somatique",
        "Fiches réflexes prêtes à l'emploi pour le quotidien professionnel"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── HEADER DE LA BROCHURE ── */}
      <section className="pt-28 pb-16 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <FileText size={16} />
            Document Officiel 2026 • Format PDF &amp; Web
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Plaquette &amp; Catalogue des Formations<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Ô&apos;TOP FORMATION 2026
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Consultez le détail complet de nos parcours certifiants et spécialisés. 
            Téléchargez la plaquette complète au format PDF (A4) prête à être imprimée ou transmise à votre OPCO.
          </p>

          {/* Quick Action Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/catalogue-otop.pdf"
              download="Catalogue-Formations-OTOP-2026.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-900/30 transition transform hover:-translate-y-0.5"
            >
              <Download size={20} />
              <span>Télécharger la Brochure PDF (A4 - 4 pages)</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold text-base transition"
            >
              <Mail size={18} className="text-blue-400" />
              <span>Demander un devis personnalisé</span>
            </Link>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <Award className="text-amber-400 shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-bold text-white text-sm">Portage Qualiopi</div>
                <div className="text-xs text-slate-400">Via notre partenaire ELOQONE</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <Sparkles className="text-blue-400 shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-bold text-white text-sm">2h à 5h de Coaching</div>
                <div className="text-xs text-slate-400">1-to-1 individuel inclus</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-bold text-white text-sm">Financement Possible</div>
                <div className="text-xs text-slate-400">OPCO, FAF, FIF-PL &amp; AGEFICE</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <Users className="text-purple-400 shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-bold text-white text-sm">Groupes Réduits</div>
                <div className="text-xs text-slate-400">Max 8 à 10 participants</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CATALOGUE INTERACTIF ── */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Sommaire de nos 5 Formations Professionnelles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Chaque cursus a été conçu par des experts terrain pour offrir un transfert de compétences direct, des cas pratiques guidés et des quiz de validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {formations.map((f, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Clock size={14} />
                      {f.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {f.title}
                  </h3>
                  <div className="text-sm text-blue-400 font-medium mb-3">
                    {f.subtitle}
                  </div>

                  {f.specialOffer && (
                    <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
                      ⏱ {f.specialOffer}
                    </div>
                  )}

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {f.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compétences &amp; Validation :</div>
                    {f.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-slate-400">Tarif officiel TTC</div>
                      <div className="text-xl font-bold text-white">{f.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400">Prise en charge</div>
                      <div className="text-xs font-semibold text-emerald-400">{f.funding}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition"
                    >
                      S&apos;inscrire à cette session
                    </Link>
                    <a
                      href="/catalogue-otop.pdf"
                      download="Programme-OTOP.pdf"
                      title="Télécharger la fiche"
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ── GRILLE TARIFAIRE OFFICIELLE : PACKS DE COUPLAGE & MODULES D'ACCOMPAGNEMENT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Tableau 1 : Offres de couplage (Packs Duo & Trio) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="text-amber-400" size={24} />
                <h3 className="text-xl font-bold text-white">Offres de Couplage (Packs Duo / Trio)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Formules combinées pour les indépendants et dirigeants souhaitant coupler IA, Réseaux Sociaux et Web.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-3 font-semibold">Formule combinée</th>
                      <th className="pb-3 font-semibold text-center">Prix cumulé</th>
                      <th className="pb-3 font-semibold text-right">Tarif Pack TTC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="py-3 text-white font-medium">Pack Duo (2 formations au choix)</td>
                      <td className="py-3 text-center text-slate-400 line-through">2 980 €</td>
                      <td className="py-3 text-right text-emerald-400 font-bold text-base">2 490 € TTC</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white font-medium">Pack Trio (les 3 formations)</td>
                      <td className="py-3 text-center text-slate-400 line-through">4 470 €</td>
                      <td className="py-3 text-right text-emerald-400 font-bold text-base">3 390 € TTC</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white font-medium">Formule Entreprise (OPCO - 40h total)</td>
                      <td className="py-3 text-center text-slate-400">-</td>
                      <td className="py-3 text-right text-blue-400 font-bold text-base">3 200 € TTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tableau 2 : Modules d'accompagnement supplémentaires */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-white">Modules d&apos;Accompagnement Expert</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Heures additionnelles de coaching 1-to-1 en visio avec Renaud ou Mélissa sur vos propres outils et flux.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-3 font-semibold">Module</th>
                      <th className="pb-3 font-semibold text-center">Tarif TTC</th>
                      <th className="pb-3 font-semibold text-right">Équivalent horaire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="py-3 text-white font-medium">Heure additionnelle (à l&apos;unité)</td>
                      <td className="py-3 text-center text-white font-bold">120 € TTC</td>
                      <td className="py-3 text-right text-slate-400">120 € / h</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white font-medium">Forfait 5 heures d&apos;accompagnement</td>
                      <td className="py-3 text-center text-emerald-400 font-bold">550 € TTC</td>
                      <td className="py-3 text-right text-slate-400">110 € / h</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-white font-medium">Forfait 10 heures d&apos;accompagnement</td>
                      <td className="py-3 text-center text-emerald-400 font-bold">1 000 € TTC</td>
                      <td className="py-3 text-right text-slate-400">100 € / h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── BLOC PORTAGE QUALIOPI & DISPOSITIFS LÉGAUX ── */}
      <section className="py-12 px-4 bg-slate-900/40 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
            Informations Administratives &amp; Démarche Qualité
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl mx-auto mb-6">
            Ô&apos;TOP Formation est une marque exploitée par nos intervenants certifiés. 
            Afin de permettre la prise en charge financière de vos formations auprès des organismes financeurs (OPCO, FIF-PL, AGEFICE, FAFCEA), 
            nos actions de formation s&apos;effectuent sous le portage certifié <strong>Qualiopi de la société ELOQONE</strong>.
            SIREN : 935 241 247 • Déclaration d&apos;activité de formation en cours d&apos;enregistrement auprès de la DREETS PACA.
          </p>
          <div className="inline-flex items-center gap-6 justify-center text-xs font-semibold text-slate-300">
            <span>✅ Audit et conformité pédagogique</span>
            <span>✅ Conventions de formation conformes</span>
            <span>✅ Attestations de fin de formation</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Besoin d&apos;un conseil sur le choix de votre formation ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Nos formateurs vous répondent directement sans intermédiaire commercial. 
            Échangez par téléphone ou convenez d&apos;un créneau en visio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+33767246825"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
            >
              <Phone size={18} />
              <span>07 67 24 68 25</span>
            </a>
            <a
              href="https://wa.me/33767246825?text=Bonjour%2C%20je%20souhaite%20des%20renseignements%20sur%20la%20brochure%20des%20formations%20O%27TOP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 font-bold text-sm transition"
            >
              <span>Discuter sur WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
