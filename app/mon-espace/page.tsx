'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  Calendar,
  FileText,
  Video,
  MessageCircle,
  LogOut,
  Clock,
  CheckCircle2,
  Download,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Award,
  PlayCircle,
  HelpCircle,
  User,
  ArrowRight
} from 'lucide-react';
import { Student } from '@/types/student';

export default function MonEspacePage() {
  const router = useRouter();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCourseId, setActiveCourseId] = useState<string>('rs6776');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('/api/auth/student');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.student) {
            setStudent(data.student);
            if (data.student.courses && data.student.courses.length > 0) {
              setActiveCourseId(data.student.courses[0].id);
            }
          } else {
            router.push('/connexion');
          }
        } else {
          router.push('/connexion');
        }
      } catch {
        router.push('/connexion');
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/student', { method: 'DELETE' });
      router.push('/connexion');
    } catch {
      router.push('/connexion');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mb-4" />
        <p className="text-sm text-slate-400 font-medium">Chargement de votre espace apprenant...</p>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  const courses = student.courses || [];
  const currentCourse = courses.find((c) => c.id === activeCourseId) || courses[0];

  return (
    <main className="min-h-screen bg-[#020b1f] text-slate-100">
      
      {/* ── TOP NAV BAR APPRENANT ── */}
      <header className="sticky top-0 z-40 bg-[#031538]/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3.5">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Ô'TOP" className="w-9 h-9 rounded-full object-contain shadow-md" />
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                Ô&apos;TOP <span className="text-cyan-400">ESPACE APPRENANT</span>
              </span>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-[11px] font-bold">
              Stagiaire Officiel
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs font-bold text-white">
                {student.prenom} {student.nom}
              </span>
              <span className="text-[11px] text-slate-400">{student.email}</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-semibold transition"
            >
              <LogOut size={14} className="text-rose-400" />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>

        </div>
      </header>

      {/* ── HERO BANNER APPRENANT ── */}
      <section className="bg-gradient-to-r from-blue-950 via-[#041a4a] to-indigo-950 border-b border-slate-800/80 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-3">
                <Sparkles size={13} />
                <span>Plateforme d&apos;Apprentissage Active</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ravi de vous retrouver, {student.prenom} !
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Retrouvez l&apos;intégralité de vos modules vidéos, programmez vos 2 h d&apos;accompagnement 1-to-1 avec Mélissa et téléchargez vos documents légaux.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://calendly.com/formation-rmcf/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs shadow-lg shadow-cyan-900/30 transition flex items-center gap-2"
              >
                <Calendar size={15} />
                <span>Réserver mon Coaching (2h)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENU DASHBOARD EN 2 COLONNES ── */}
      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLONNE GAUCHE (8 COLS) : FORMATIONS & VIDÉOS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. 🎓 MES FORMATIONS SOUSCRITES */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                    <GraduationCap size={18} />
                  </div>
                  <h2 className="text-lg font-extrabold text-white">
                    Mes Formations Souscrites
                  </h2>
                </div>
                <span className="text-xs text-slate-400 font-semibold">
                  {courses.length} parcours actif{courses.length > 1 ? 's' : ''}
                </span>
              </div>

              {courses.length === 0 ? (
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <p className="text-xs text-slate-400 mb-3">Aucune formation active pour le moment.</p>
                  <Link
                    href="/catalogue"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs"
                  >
                    <span>Découvrir le catalogue</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      onClick={() => setActiveCourseId(course.id)}
                      className={`p-5 rounded-2xl border transition cursor-pointer ${
                        activeCourseId === course.id
                          ? 'bg-slate-950 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-800">
                              {course.badge}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Accès Illimité à Vie
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-sm sm:text-base">
                            {course.title}
                          </h3>
                        </div>

                        <span className="text-xs font-black text-cyan-400 self-start sm:self-center">
                          {course.progress}% complété
                        </span>
                      </div>

                      {/* Barre de Progression */}
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-3">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                        <div className="flex items-center gap-4 text-[11px]">
                          <span>⏱ 21 h de contenu</span>
                          <span>•</span>
                          <span>🤝 2 h de visio incluses</span>
                        </div>

                        <a
                          href="https://systeme.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold text-xs"
                        >
                          <span>Lancer le module sur la plateforme</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 2. 🎥 ACCÈS AUX MODULES VIDÉO */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">
                    <Video size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-white">
                      Modules Vidéos &amp; Pratiques
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Cursus : {currentCourse ? currentCourse.title : 'Formation Ô’TOP'}
                    </p>
                  </div>
                </div>

                <a
                  href="https://systeme.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-lg shadow-purple-900/30"
                >
                  <PlayCircle size={15} />
                  <span>Ouvrir le lecteur vidéo</span>
                </a>
              </div>

              {/* Liste des modules types du parcours */}
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-white">Module 1 : Cadrage &amp; Fondamentaux</div>
                      <div className="text-slate-400 text-[11px]">Vidéo introductive (45 min) + Fiche mémo PDF</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                    Complété
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="font-bold text-white">Module 2 : Méthodes Pratiques &amp; Automatisation</div>
                      <div className="text-slate-400 text-[11px]">Cas concrets appliqués à votre activité (2h 15 min)</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                    En cours
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between opacity-85">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="font-bold text-white">Module 3 : Sécurisation &amp; Préparation au Jury</div>
                      <div className="text-slate-400 text-[11px]">Quiz de validation + passage devant les jurys</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-semibold bg-slate-900 px-2 py-0.5 rounded">
                    À débloquer
                  </span>
                </div>
              </div>
            </section>

          </div>

          {/* COLONNE DROITE (4 COLS) : COACHING 2H, DOCS, ASSISTANCE */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 3. 📅 MES 2 H D'ACCOMPAGNEMENT EXPERT */}
            <section className="bg-gradient-to-b from-[#092257] to-slate-900 border border-blue-500/40 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase tracking-wider mb-3">
                <Sparkles size={12} />
                <span>Inclus dans votre formule</span>
              </div>

              <h2 className="text-base font-extrabold text-white mb-2">
                Mes 2 h d&apos;Accompagnement 1-to-1
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Une session individuelle en visio avec Mélissa Jennadi pour auditer vos prompts, calibrer vos outils et sécuriser votre réussite.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  MJ
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Mélissa Jennadi</div>
                  <div className="text-[11px] text-slate-400">Référente Pédagogique &amp; Handicap</div>
                </div>
              </div>

              <a
                href="https://calendly.com/formation-rmcf/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition"
              >
                <Calendar size={14} />
                <span>Choisir mon créneau visio →</span>
              </a>
            </section>

            {/* 4. 📂 MES DOCUMENTS & LIVRET OFFICIEL */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-bold">
                  <FileText size={18} />
                </div>
                <h2 className="text-base font-extrabold text-white">
                  Documents &amp; Livret
                </h2>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Téléchargez vos pièces officielles au format PDF conforme :
              </p>

              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href="/livret-accueil.pdf"
                    download
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center justify-between transition group"
                  >
                    <span className="flex items-center gap-2">
                      <Download size={14} className="text-cyan-400 group-hover:scale-110 transition" />
                      <span>Livret d&apos;accueil officiel (34 pages)</span>
                    </span>
                    <span className="text-[10px] text-slate-500">PDF</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/reglement-interieur"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center justify-between transition group"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      <span>Règlement Intérieur (12 articles)</span>
                    </span>
                    <span className="text-[10px] text-slate-500">Consulter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cgv"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center justify-between transition group"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={14} className="text-blue-400" />
                      <span>Conditions Générales de Vente</span>
                    </span>
                    <span className="text-[10px] text-slate-500">Consulter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reclamations"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white flex items-center justify-between transition group"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle size={14} className="text-purple-400" />
                      <span>Procédure de Réclamation</span>
                    </span>
                    <span className="text-[10px] text-slate-500">Consulter</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 5. 💬 ASSISTANCE DIRECTE & CONTACT DÉDIÉ */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                  <MessageCircle size={18} />
                </div>
                <h2 className="text-base font-extrabold text-white">
                  Support Stagiaire Prioritaire
                </h2>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Une question sur un module ou un blocage technique ? Notre équipe vous répond sous 24h ouvrées.
              </p>

              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/33767246825?text=${encodeURIComponent(
                    `Bonjour Mélissa, je suis ${student.prenom} ${student.nom} (apprenant Ô'TOP) et j'ai une question sur mon parcours de formation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp direct avec Mélissa</span>
                </a>

                <a
                  href="mailto:contact@otopformations.com"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>contact@otopformations.com</span>
                </a>
              </div>
            </section>

          </div>

        </div>
      </div>

    </main>
  );
}
