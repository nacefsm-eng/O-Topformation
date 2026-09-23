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
      title: "FI TOP® — Formation Initiale TOP®",
      subtitle: "Cursus Référence Préparation Mentale & Gestion du Stress",
      duration: "21 heures (3 jours)",
      format: "Présentiel (Var / PACA) ou Distanciel (Visio synchrone)",
      price: "890 € net de taxe",
      funding: "Éligible OPCO & FAF (FIF-PL, AGEFICE)",
      badge: "Formation Phare",
      badgeColor: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      description: "Munissez-vous de l'essentiel de la boîte à outils TOP pour vous auto-gérer au quotidien. Prérequis obligatoire pour accéder au cursus de Praticien TOP®.",
      points: [
        "Régulation du stress aigu et prévention de l'épuisement professionnel (burn-out)",
        "Techniques respiratoires dynamisantes et relaxantes ciblées",
        "Imagerie mentale et répétition mentale des actions réussies",
        "Récupération flash (SRF) et gestion du sommeil"
      ]
    },
    {
      title: "FB-TOP — Fondamentaux & Gestion de Crise",
      subtitle: "Format court intensif pour décideurs pressés",
      duration: "7 heures (1 jour)",
      format: "Intra-entreprise ou Inter-entreprises",
      price: "390 € net de taxe",
      funding: "Prise en charge OPCO 100%",
      badge: "Format Express",
      badgeColor: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
      description: "Acquérez les réflexes mentaux immédiats pour garder son sang-froid face aux situations d'urgence, négociations tendues ou prises de parole à fort enjeu.",
      points: [
        "Désamorçage instantané du pic de stress émotionnel",
        "Maintien de la lucidité décisionnelle sous haute pression",
        "Exercices pratiques d'ancrage somatique",
        "Plan d'action personnalisé pour le quotidien professionnel"
      ]
    },
    {
      title: "Massage Bien-Être & Magnétisme / Aimants",
      subtitle: "Récupération physique, somatique et décharge nerveuse",
      duration: "14 heures (2 jours)",
      format: "Présentiel exclusivement (Ollioules, 83)",
      price: "650 € net de taxe",
      funding: "Facilités 3x sans frais",
      badge: "Bien-Être Somatique",
      badgeColor: "bg-purple-600/20 text-purple-400 border-purple-500/30",
      description: "Techniques manuelles et biomagnétiques de récupération profonde pour libérer les tensions myofasciales et restaurer l'harmonie posturale.",
      points: [
        "Protocoles de détente des trapèzes, nuque et région dorsale",
        "Application ciblée des aimants biomagnétiques thérapeutiques",
        "Techniques d'ancrage et de recentrage énergétique",
        "Idéal en complément de la régulation mentale TOP®"
      ]
    },
    {
      title: "RS6776 — IA Générative & Automatisation Métier",
      subtitle: "Cursus Certifiant France Compétences",
      duration: "21 heures (3 jours)",
      format: "Distanciel synchrone ou Présentiel",
      price: "1 250 € net de taxe",
      funding: "Financement OPCO / FAF intégral",
      badge: "Certifiant RS6776",
      badgeColor: "bg-amber-600/20 text-amber-400 border-amber-500/30",
      description: "Passez de spectateur à pilote de l'intelligence artificielle. Automatisez vos tâches chronophages et créez vos propres agents IA sur-mesure.",
      points: [
        "Maîtrise opérationnelle de ChatGPT, Claude 3.5 et outils multimodaux",
        "Automatisation de workflows métiers sans coder (Make, Zapier, n8n)",
        "Création de bases de connaissances internes et GPTs métiers",
        "Gain de productivité prouvé de 5 à 10 heures par semaine"
      ]
    },
    {
      title: "RS7344 — Création de Site Web Moderne & SEO",
      subtitle: "Cursus Certifiant France Compétences",
      duration: "28 heures (4 jours)",
      format: "Distanciel synchrone ou Présentiel",
      price: "1 450 € net de taxe",
      funding: "Financement OPCO / FAF",
      badge: "Certifiant RS7344",
      badgeColor: "bg-cyan-600/20 text-cyan-400 border-cyan-500/30",
      description: "Concevez un site web professionnel, rapide, sécurisé et taillé pour convertir vos visiteurs en rendez-vous qualifiés et ventes directes.",
      points: [
        "Architecture d'un site web à fort taux de conversion",
        "Référencement naturel (SEO) local et technique",
        "Gestion autonome des contenus et de la conformité RGPD",
        "Mise en place d'un tunnel de vente et de prise de rendez-vous"
      ]
    },
    {
      title: "RS7351 — Stratégie Réseaux Sociaux & Social Selling",
      subtitle: "Cursus Certifiant France Compétences",
      duration: "21 heures (3 jours)",
      format: "Distanciel synchrone ou Présentiel",
      price: "1 150 € net de taxe",
      funding: "Financement OPCO / FAF",
      badge: "Certifiant RS7351",
      badgeColor: "bg-rose-600/20 text-rose-400 border-rose-500/30",
      description: "Transformez vos réseaux sociaux (LinkedIn & Instagram) en un canal régulier et prédictible d'acquisition de clients qualifiés.",
      points: [
        "Positionnement éditorial et personal branding d'autorité",
        "Création de formats engageants (carrousels, vidéos courtes, posts texte)",
        "Techniques de prospection douce et closing par messagerie directe",
        "Plan de publication trimestriel prêt à l'emploi"
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
                <div className="font-bold text-white text-sm">5h de Coaching</div>
                <div className="text-xs text-slate-400">Inclus dans chaque formation</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="text-emerald-400 shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-bold text-white text-sm">100% Finançable</div>
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
              Sommaire de nos 6 Formations Professionnelles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Chaque cursus a été conçu par des experts terrain pour offrir un transfert de compétences direct et immédiatement actionnable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="text-sm text-blue-400 font-medium mb-4">
                    {f.subtitle}
                  </div>

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {f.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compétences acquises :</div>
                    {f.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-slate-400">Tarif net de taxe</div>
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
