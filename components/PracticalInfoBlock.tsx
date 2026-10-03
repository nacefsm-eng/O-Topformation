import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  Laptop, 
  Mail, 
  Award, 
  HelpCircle, 
  ShieldCheck, 
  Users, 
  Accessibility, 
  CreditCard, 
  FileText 
} from 'lucide-react';

interface PracticalInfoProps {
  certificationTitle?: string;
  certificationCode?: string;
  certificationLink?: string;
  duration?: string;
  format?: string;
  location?: string;
  certification?: string;
  funding?: string;
  prerequisites?: string;
}

export default function PracticalInfoBlock({
  certificationTitle = "Communication digitale ou Intelligence Artificielle",
  certificationCode = "RS6776 / RS7344 / RS7351",
  certificationLink = "https://www.francecompetences.fr",
  duration,
  format,
  location,
  certification,
  funding,
  prerequisites
}: PracticalInfoProps) {
  return (
    <section className="py-16 px-4 bg-slate-900/90 border-t border-b border-slate-800 my-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            Cadre réglementaire &amp; pédagogique
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Informations Pratiques
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Modalités d&apos;accueil, délais, accessibilité et organisation de nos formations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          
          {/* 1. Durée et format */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Clock size={16} className="text-cyan-400 shrink-0" />
              <span>Durée et format</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {duration ? `${duration} ${format ? `(${format})` : ''}` : "21 h, 100 % en ligne, dont 2 h d’accompagnement individuel en visio (ou en présentiel selon disponibilités). Supports téléchargeables, vidéos sur la plateforme."}
            </p>
          </div>

          {/* 2. Délai et durée d'accès */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Laptop size={16} className="text-indigo-400 shrink-0" />
              <span>Délai et durée d’accès</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Accès sous 24 h après l’inscription et la validation du questionnaire. Accès illimité (à vie) aux contenus, pour toute la durée d’exploitation de la plateforme.
            </p>
          </div>

          {/* 3. Assistance */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Mail size={16} className="text-blue-400 shrink-0" />
              <span>Assistance technique &amp; pédagogique</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Réponse sous 24 h ouvrées à <a href="mailto:formation.rmcf@gmail.com" className="text-cyan-300 underline">formation.rmcf@gmail.com</a>.
            </p>
          </div>

          {/* 4. Évaluation */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Award size={16} className="text-amber-400 shrink-0" />
              <span>Évaluation &amp; suivi</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Questionnaire d’analyse des besoins ; quiz intégrés à chaque module ; évaluation de fin de parcours ; questionnaire de satisfaction.
            </p>
          </div>

          {/* 5. Formateurs & contact */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Users size={16} className="text-emerald-400 shrink-0" />
              <span>Formateurs &amp; Contact stagiaires</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Mélissa Jennadi, référente pédagogique (<a href="mailto:formation.rmcf@gmail.com" className="text-cyan-300 underline">formation.rmcf@gmail.com</a> · 07 67 24 68 25) et formateurs certifiés.
            </p>
          </div>

          {/* 6. Accessibilité handicap */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <Accessibility size={16} className="text-purple-400 shrink-0" />
              <span>Accessibilité &amp; Handicap</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Référente handicap : Mélissa Jennadi (<a href="mailto:formation.rmcf@gmail.com" className="text-cyan-300 underline">formation.rmcf@gmail.com</a>). Adaptations étudiées au cas par cas. <Link href="/accessibilite" className="text-cyan-300 underline">Voir notre politique d&apos;accueil</Link>.
            </p>
          </div>

          {/* 7. Certification */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <ShieldCheck size={16} className="text-yellow-400 shrink-0" />
              <span>Validation / Certification</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {certification ? certification : `Cette formation prépare à la certification « ${certificationTitle} », enregistrée au Répertoire spécifique de France Compétences sous le n° ${certificationCode}. Le passage est facultatif, non inclus dans le prix et organisé séparément par notre partenaire Eloq-One. Les modalités et le tarif sont communiqués sur demande.`}
            </p>
          </div>

          {/* 8. Tarif & Financement */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <CreditCard size={16} className="text-emerald-400 shrink-0" />
              <span>Tarif &amp; Modalités de règlement</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Prix en euros, TVA non applicable (art. 261-4-4° a du CGI). Paiement par carte en 1 fois ou en 3 fois sans frais.
            </p>
          </div>

          {/* 9. Financement public / OPCO */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 font-bold text-white mb-1.5">
              <ShieldCheck size={16} className="text-cyan-400 shrink-0" />
              <span>Financement (OPCO / FAF / France Travail)</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {funding ? funding : "Financement possible par votre OPCO, votre FAF ou France Travail, selon leurs critères et sous réserve de leur accord. Conventions établies par Eloq-One, organisme certifié Qualiopi. Formation non éligible au CPF."}
            </p>
          </div>

        </div>

        {/* 10. Documents légaux */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-wrap justify-center gap-4">
          <span>Documents à disposition :</span>
          <Link href="/cgv" className="text-cyan-400 hover:underline">CGV</Link>
          <span>•</span>
          <Link href="/reglement-interieur" className="text-cyan-400 hover:underline">Règlement intérieur</Link>
          <span>•</span>
          <Link href="/reclamations" className="text-cyan-400 hover:underline">Procédure de réclamations</Link>
          <span>•</span>
          <Link href="/accessibilite" className="text-cyan-400 hover:underline">Accessibilité handicap</Link>
        </div>
      </div>
    </section>
  );
}
