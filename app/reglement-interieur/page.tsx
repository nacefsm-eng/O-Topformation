import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ShieldCheck, FileText, ArrowLeft, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Règlement Intérieur | Ô’TOP Formations',
  description: 'Règlement intérieur applicable aux stagiaires d’Ô’TOP Formations (actions de formation professionnelle continue en ligne et en présentiel).',
};

export default function ReglementInterieurPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header Banner */}
      <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition mb-6"
          >
            <ArrowLeft size={14} />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText size={14} />
            <span>Document Réglementaire Officiel</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Règlement Intérieur
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Applicable aux stagiaires de Ô’TOP Formations (formations en ligne et en présentiel).
          </p>
          <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <strong>O’TOP Formation</strong>, SAS au capital de 1 000 €, Espace Gamma 1, 139 chemin des 2 Frères, 83190 Ollioules — RCS Toulon 990 443 186 — Déclaration d’activité enregistrée sous le numéro [NDA] auprès du préfet de la région Provence-Alpes-Côte d’Azur. Cet enregistrement ne vaut pas agrément de l’État.
            <br />
            Établi conformément aux articles L6352-3 à L6352-5 et R6352-1 à R6352-15 du Code du travail.
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8 text-sm leading-relaxed text-slate-300">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 1 — Objet et champ d’application</h2>
            <p>
              Le présent règlement s’applique à toute personne inscrite à une action de formation organisée par O’TOP Formation (ci-après « le stagiaire »), pendant toute la durée de la formation, qu’elle se déroule à distance (plateforme e-learning, classes virtuelles, séances d’accompagnement en visioconférence) ou en présentiel.
            </p>
            <p className="mt-2">
              Il définit les règles d’hygiène et de sécurité, les règles de discipline, la nature et l’échelle des sanctions ainsi que les garanties de procédure dont bénéficie le stagiaire. Il est remis au stagiaire avant son inscription et consultable à tout moment sur otopformations.com.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 2 — Hygiène et sécurité</h2>
            <p>
              Pour les séances en présentiel, chaque stagiaire respecte les consignes d’hygiène et de sécurité en vigueur dans les locaux où se déroule la formation. Lorsque la formation a lieu dans une entreprise ou un établissement disposant déjà d’un règlement intérieur, ce sont les règles d’hygiène et de sécurité de ce règlement qui s’appliquent.
            </p>
            <p className="mt-2">
              Pour les séances à distance, le stagiaire suit la formation dans un environnement adapté et reste responsable de la sécurité de son poste de travail. Tout accident survenu pendant une séance de formation est signalé sans délai à l’organisme.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 3 — Accès à la plateforme et identifiants</h2>
            <p>
              Les accès à la plateforme e-learning sont transmis dans un délai de 24 heures après la validation de l’inscription. Ils sont strictement personnels : le stagiaire ne peut ni les céder ni les partager. Toute utilisation anormale (connexions simultanées, partage de compte) peut entraîner la suspension de l’accès.
            </p>
            <p className="mt-2">
              L’accès aux contenus est illimité dans le temps (« à vie »), pour toute la durée d’exploitation de la plateforme par O’TOP Formation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 4 — Assiduité et suivi</h2>
            <p>
              Le stagiaire s’engage à suivre l’intégralité du parcours, à réaliser les activités et quiz prévus et à se présenter aux séances d’accompagnement réservées. Les temps de connexion, la progression et les résultats aux quiz sont enregistrés par la plateforme : ils servent à attester la réalisation de la formation auprès du stagiaire et, le cas échéant, de son employeur ou de son financeur.
            </p>
            <p className="mt-2">
              Toute séance d’accompagnement réservée et non honorée sans prévenir au moins 24 heures à l’avance peut être considérée comme réalisée.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 5 — Comportement</h2>
            <p>
              Le stagiaire adopte une attitude respectueuse envers les formateurs, l’équipe et les autres stagiaires, y compris dans les échanges écrits, les forums et les visioconférences. Sont notamment interdits : les propos injurieux, discriminatoires ou harcelants ; l’enregistrement d’une séance sans l’accord des participants ; la diffusion de données personnelles d’autrui.
            </p>
            <p className="mt-2">
              Lors des séances en visioconférence, le stagiaire veille à être identifiable et à suivre les consignes du formateur.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 6 — Propriété intellectuelle</h2>
            <p>
              Les contenus de formation (vidéos, supports, quiz, modèles, documents) sont la propriété d’O’TOP Formation ou de ses partenaires. Ils sont mis à disposition du stagiaire pour son usage personnel et professionnel dans le cadre de la formation. Toute reproduction, diffusion ou revente, totale ou partielle, est interdite sans autorisation écrite.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 7 — Usage des outils d’intelligence artificielle</h2>
            <p>
              Les exercices utilisant des outils d’IA se font dans le respect du RGPD et du règlement européen sur l’intelligence artificielle (AI Act). Le stagiaire s’engage à ne pas saisir dans ces outils de données personnelles de tiers ni d’informations confidentielles de son entreprise ou de ses clients sans y être autorisé.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 8 — Sanctions</h2>
            <p>
              Tout manquement du stagiaire à l’une des prescriptions du présent règlement peut faire l’objet d’une sanction. Constitue une sanction toute mesure, autre que les observations verbales, prise par la direction de l’organisme à la suite d’un agissement considéré comme fautif, de nature à affecter immédiatement ou non la présence du stagiaire dans la formation ou à mettre en cause la continuité de la formation qu’il reçoit.
            </p>
            <p className="mt-2">
              Selon la gravité du manquement, la sanction peut consister en : un avertissement écrit ; une suspension temporaire de l’accès à la plateforme ; une exclusion définitive de la formation. Les amendes et autres sanctions pécuniaires sont interdites.
            </p>
            <p className="mt-2">
              Lorsque la formation est financée par un employeur ou un financeur, la direction l’informe de la sanction prise.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 9 — Garanties disciplinaires</h2>
            <p>
              Aucune sanction ne peut être infligée au stagiaire sans qu’il ait été informé au préalable, par écrit, des griefs retenus contre lui.
            </p>
            <p className="mt-2">
              Lorsqu’une sanction autre qu’un avertissement est envisagée, le stagiaire est convoqué par lettre recommandée ou remise contre décharge, indiquant l’objet, la date, l’heure et le lieu (ou les modalités de la visioconférence) de l’entretien. Il peut se faire assister par une personne de son choix, stagiaire ou salarié de l’organisme. Au cours de l’entretien, le motif de la sanction envisagée lui est indiqué et ses explications sont recueillies.
            </p>
            <p className="mt-2">
              La sanction ne peut intervenir moins d’un jour franc ni plus de quinze jours après l’entretien. Elle fait l’objet d’une décision écrite et motivée, notifiée au stagiaire.
            </p>
            <p className="mt-2">
              Lorsque l’agissement a rendu indispensable une mesure conservatoire de suspension à effet immédiat, aucune sanction définitive ne peut être prise sans que la procédure ci-dessus ait été respectée.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 10 — Représentation des stagiaires</h2>
            <p>
              Les actions de formation proposées ayant une durée inférieure à 500 heures, les dispositions relatives à l’élection d’un délégué des stagiaires (articles R6352-9 et suivants du Code du travail) ne s’appliquent pas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 11 — Accessibilité, réclamations et contacts</h2>
            <ul className="space-y-2 mt-2">
              <li>
                <strong>Référente handicap, référente pédagogique et relations stagiaires :</strong> Mélissa Jennadi —{' '}
                <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 hover:underline">formation.rmcf@gmail.com</a> — 07 67 24 68 25.
              </li>
              <li>
                <strong>Assistance technique et pédagogique :</strong>{' '}
                <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 hover:underline">formation.rmcf@gmail.com</a>, réponse sous 24 heures ouvrées.
              </li>
              <li>
                <strong>Réclamations :</strong> toute réclamation peut être adressée à{' '}
                <a href="mailto:formation.rmcf@gmail.com" className="text-blue-400 hover:underline">formation.rmcf@gmail.com</a>. Un accusé de réception est envoyé sous 2 jours ouvrés et une réponse écrite sous 5 jours ouvrés.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">Article 12 — Publicité et entrée en vigueur</h2>
            <p>
              Le présent règlement est remis à chaque stagiaire avant son inscription et publié sur le site otopformations.com. Il entre en vigueur à sa date de mise en ligne.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Fait à Ollioules, le 1er octobre 2026. Melissa-Lola Jennadi, Présidente.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
