'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#021435] text-slate-100">
      {/* Hero Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>📅 Agenda en ligne officiel</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Réservez votre entretien découverte avec <span className="text-cyan-400">Mélissa ou Renaud</span>
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Choisissez directement le créneau de 15 à 30 minutes qui vous convient le mieux. Nous ferons le point sur votre projet professionnel et vos possibilités de prise en charge (OPCO, FAF, France Travail).
        </p>

        {/* Contact rapide direct */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/33767246825?text=Bonjour%20M%C3%A9lissa%2C%20je%20souhaite%20r%C3%A9server%20un%20cr%C3%A9neau%20d%27%C3%A9change."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
          >
            <span>💬 Échanger tout de suite sur WhatsApp</span>
          </a>
          <a
            href="tel:+33767246825"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition-all"
          >
            <span>📞 07 67 24 68 25</span>
          </a>
        </div>
      </section>

      {/* Calendly Embed Frame */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-2 sm:p-4 shadow-2xl border border-slate-200 overflow-hidden">
          <iframe
            src="https://calendly.com/formation-rmcf/30min?embed_domain=otopformations.com&embed_type=Inline"
            width="100%"
            height="750"
            frameBorder="0"
            title="Prendre rendez-vous avec Ô'TOP Formations"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          Un imprévu ou un créneau particulier indisponible ? Contactez directement Mélissa à{' '}
          <a href="mailto:formation.rmcf@gmail.com" className="text-cyan-400 underline">
            formation.rmcf@gmail.com
          </a>
          .
        </div>
      </section>

      <Footer />
    </main>
  );
}
