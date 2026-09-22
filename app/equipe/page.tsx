'use client';

import React from 'react';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/ui/team-member-card';

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
            L&apos;Équipe des Experts
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Une synergie humaine et technique dédiée à l&apos;élévation de vos compétences et à la protection durable de votre activité.
          </p>
        </div>
      </section>

      {/* ── Team Cards ── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          {/* 1. Mélissa */}
          <TeamMemberCard
            position="left"
            firstName="Mélissa"
            lastName="JENNADI"
            imageUrl="/team-melyssa.png"
            description="Rigueur scientifique, sens aigu de la transmission et dévouement absolu pour faire grandir vos équipes et pérenniser votre activité."
            onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
          />

          {/* 2. Renaud */}
          <TeamMemberCard
            position="right"
            firstName="Renaud"
            lastName=""
            imageUrl="/team-renaud.jpg"
            description="Passionné par l&apos;impact technologique et l&apos;efficacité opérationnelle, pour transformer des outils complexes en leviers de croissance concrets."
            onCtaClick={() => window.open('https://wa.me/33674797509?text=Bonjour%20Renaud%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
          />

          {/* 3. Régis */}
          <TeamMemberCard
            position="left"
            firstName="Régis"
            lastName=""
            imageUrl="/team-regis.png"
            description="Excellence opérationnelle forgée sur le terrain, sang-froid et vision stratégique pour sécuriser chaque étape de votre transition."
            onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20R%C3%A9gis%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous.', '_blank')}
          />

          {/* 4. Med Aly Garma */}
          <TeamMemberCard
            position="right"
            firstName="Med Aly"
            lastName="GARMA"
            imageUrl="/team-med-aly.jpg"
            description="Expertise pointue en cybersécurité, résilience des infrastructures critiques et sécurisation avancée des environnements d&apos;intelligence artificielle."
            onCtaClick={() => window.open('https://wa.me/33767246825?text=Bonjour%20Med%20Aly%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20sur%20la%20cybers%C3%A9curit%C3%A9.', '_blank')}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
