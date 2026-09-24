'use client';

import React from 'react';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/ui/team-member-card';
import { Code, Share2 } from 'lucide-react';

export default function EquipePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* ── Hero ── */}
      <section className="pt-24 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 border-b border-slate-800 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            L&apos;Équipe
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            L&apos;Équipe des Experts &amp; Pôle Digital
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Une synergie humaine, pédagogique et technologique dédiée à l&apos;élévation de vos compétences et à la réussite de votre transformation.
          </p>
        </div>
      </section>

      {/* ── Section 1 : Formateurs & Direction Pédagogique ── */}
      <section className="pt-16 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 block mb-2">Pôle Formation &amp; Conseil</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Formateurs &amp; Direction Pédagogique</h2>
          </div>

          <div className="space-y-12">
            {/* 1. Mélissa */}
            <TeamMemberCard
              position="left"
              roleTitle="Fondatrice & Formatrice Certifiée TOP®"
              firstName="Mélissa"
              lastName="JENNADI"
              imageUrl="/team-melyssa.png"
              description="Rigueur scientifique, sens aigu de la transmission et dévouement absolu pour faire grandir vos équipes et pérenniser votre activité."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 2. Renaud */}
            <TeamMemberCard
              position="right"
              roleTitle="Consultant Expert IA & Systèmes d'Information"
              firstName="Renaud"
              lastName=""
              imageUrl="/team-renaud.jpg"
              description="Accompagnement des dirigeants et collaborateurs dans la conduite du changement, l'adoption concrète des bénéfices de l'IA et l'optimisation des processus opérationnels."
              onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 3. Régis */}
            <TeamMemberCard
              position="left"
              roleTitle="Stratégie Opérationnelle & Gestion"
              firstName="Régis"
              lastName=""
              imageUrl="/team-regis.png"
              description="Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique pour sécuriser chaque étape de votre transition."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
            />

            {/* 4. Med Aly Garma */}
            <TeamMemberCard
              position="right"
              roleTitle="Expert Cybersécurité & Résilience IA"
              firstName="Med Aly"
              lastName="GARMA"
              imageUrl="/team-med-aly.jpg"
              description="Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des environnements d'intelligence artificielle."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Med%20Aly%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20cybers%C3%A9curit%C3%A9.', '_blank')}
            />
          </div>
        </div>
      </section>

      {/* ── Section 2 : Équipe Technique & Digitale ── */}
      <section className="py-20 px-4 bg-slate-900/40 border-t border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Code size={14} />
              Pôle Ingénierie &amp; Croissance Digitale
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              L&apos;Équipe Technique &amp; Web
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              L&apos;équipe dédiée à la conception, au développement de l&apos;infrastructure web de pointe et à l&apos;animation de nos communautés.
            </p>
          </div>

          <div className="space-y-12">
            {/* 5. Nacef - Lead Tech Web (Thème Blanc Luminous) */}
            <TeamMemberCard
              position="left"
              themeVariant="white"
              roleTitle="Lead Développeur & Architecte Web"
              firstName="Nacef"
              lastName=""
              imageUrl="/team-nacef.jpg"
              description="Architecte technique & concepteur de la plateforme web Ô'TOP Formation. Expert en ingénierie logicielle full-stack, optimisation des performances, automatisation et expérience utilisateur moderne."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Nacef%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20le%20site%20web.', '_blank')}
            />

            {/* 6. Hamouda - Community Manager (Thème Noir Stealth) */}
            <TeamMemberCard
              position="right"
              themeVariant="black"
              roleTitle="Community Manager & Social Media"
              firstName="Hamouda"
              lastName=""
              imageUrl="/team-hamouda.jpg"
              description="Stratège de la communication et des réseaux sociaux. En charge de l'engagement des apprenants, de l'animation de nos communautés d'alumni et du rayonnement digital de la marque Ô'TOP."
              onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Hamouda%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20communication.', '_blank')}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
