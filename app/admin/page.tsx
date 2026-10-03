'use client';
import { useState, useEffect } from 'react';

interface Contact {
  id: number;
  prenom?: string;
  nom?: string;
  email: string;
  tel?: string;
  besoin?: string;
  message?: string;
  createdAt: string;
  read?: boolean;
}

interface Reservation {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  tel?: string;
  besoin?: string;
  message?: string;
  date: string;
  heure: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<'reservations' | 'contacts' | 'documents' | 'students'>('reservations');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentNom, setNewStudentNom] = useState('');
  const [newStudentPrenom, setNewStudentPrenom] = useState('');
  const [newStudentCourse, setNewStudentCourse] = useState('rs6776');
  const [studentActionMsg, setStudentActionMsg] = useState('');
  const [loading, setLoading] = useState(true);

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth');
        if (res.ok) {
          const data = await res.json();
          setIsAuthenticated(data.authenticated === true);
        }
      } catch {}
      setAuthChecking(false);
    };
    checkAuth();
  }, []);

  // Charger les données quand authentifié
  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const [cRes, rRes, sRes] = await Promise.all([
          fetch('/api/contact'),
          fetch('/api/reservation'),
          fetch('/api/admin/students'),
        ]);
        const cData = await cRes.json();
        const rData = await rRes.json();
        const sData = await sRes.json();
        
        const serverContacts = cData.contacts || [];
        let localLeads: any[] = [];
        if (typeof window !== 'undefined') {
          try {
            localLeads = JSON.parse(localStorage.getItem('otop_admin_leads') || '[]');
          } catch {}
        }
        
        const mergedContacts = [...serverContacts];
        localLeads.forEach(lead => {
          if (!mergedContacts.some(c => c.id === lead.id || (c.email === lead.email && c.createdAt === lead.createdAt))) {
            mergedContacts.unshift(lead);
          }
        });

        setContacts(mergedContacts.reverse());
        setReservations((rData.reservations || []).reverse());
        setStudents(sData.students || []);
      } catch {}
      setLoading(false);
    };
    fetchData();
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setAuthError(data.error || 'Mot de passe incorrect');
      }
    } catch {
      setAuthError('Erreur de connexion. Veuillez réessayer.');
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setPassword('');
  };

  // Écran de chargement de la vérification d'auth
  if (authChecking) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid #d4af37', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Vérification de l&apos;accès...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  // Écran de connexion
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a3c8f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '3rem', maxWidth: '420px', width: '100%', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}>
          <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem', boxShadow: '0 8px 24px rgba(212,175,55,0.3)' }}>🔒</div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem' }}>Espace Administration</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>Ô&apos;TOP Formation — Accès restreint</p>

          <form onSubmit={handleLogin}>
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe administrateur"
                required
                style={{
                  width: '100%', padding: '0.9rem 1.25rem', background: 'rgba(255,255,255,0.08)',
                  border: authError ? '1.5px solid #ef4444' : '1.5px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px', color: 'white', fontSize: '0.95rem', outline: 'none',
                  transition: 'border-color 0.2s', boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#d4af37'; }}
                onBlur={(e) => { e.target.style.borderColor = authError ? '#ef4444' : 'rgba(255,255,255,0.15)'; }}
              />
            </div>

            {authError && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '0.75rem', marginBottom: '1rem', color: '#fca5a5', fontSize: '0.85rem', fontWeight: 600 }}>
                ⚠️ {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              style={{
                width: '100%', padding: '0.9rem', background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1e293b', border: 'none', borderRadius: '12px', fontSize: '0.95rem', fontWeight: 800,
                cursor: authLoading ? 'wait' : 'pointer', transition: 'all 0.2s',
                opacity: authLoading ? 0.7 : 1, boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
              }}
            >
              {authLoading ? 'Vérification...' : 'Accéder au dashboard →'}
            </button>
          </form>

          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '2rem' }}>
            Accès réservé aux administrateurs autorisés.<br />En cas de problème, contactez le support technique.
          </p>
        </div>
      </div>
    );
  }

  const formatDate = (iso: string) => {
    try { return new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
    catch { return iso; }
  };

  const Badge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      pending: '#f59e0b',
      confirmed: '#22c55e',
      cancelled: '#ef4444',
    };
    const labels: Record<string, string> = {
      pending: 'En attente',
      confirmed: 'Confirmé',
      cancelled: 'Annulé',
    };
    return (
      <span style={{ background: colors[status] || '#6b7280', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {labels[status] || status}
      </span>
    );
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentEmail) return;
    try {
      const res = await fetch('/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_manual',
          email: newStudentEmail,
          nom: newStudentNom,
          prenom: newStudentPrenom,
          courseId: newStudentCourse,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStudentActionMsg('✅ Stagiaire ajouté avec succès !');
        setNewStudentEmail('');
        setNewStudentNom('');
        setNewStudentPrenom('');
        // Recharger stagiaires
        const sRes = await fetch('/api/admin/students');
        const sData = await sRes.json();
        setStudents(sData.students || []);
      } else {
        setStudentActionMsg(`⚠️ ${data.error}`);
      }
    } catch {
      setStudentActionMsg('⚠️ Erreur lors de l’ajout du stagiaire.');
    }
  };

  const handleAddCourse = async (studentId: string, courseId: string) => {
    try {
      const res = await fetch('/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add_course', studentId, courseId }),
      });
      const data = await res.json();
      if (data.success) {
        setStudentActionMsg('✅ Formation attribuée avec succès !');
        const sRes = await fetch('/api/admin/students');
        const sData = await sRes.json();
        setStudents(sData.students || []);
      }
    } catch {
      setStudentActionMsg('⚠️ Erreur lors de l’attribution de la formation.');
    }
  };

  const handleDeleteStudent = async (studentId: string) => {
    if (!confirm('Supprimer définitivement ce compte stagiaire ?')) return;
    try {
      await fetch(`/api/admin/students?id=${studentId}`, { method: 'DELETE' });
      setStudents(students.filter((s) => s.id !== studentId));
      setStudentActionMsg('Stagiaire supprimé.');
    } catch {}
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1a3c8f', color: 'white', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🏛️</span>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Ô'TOP Formations — Dashboard</h1>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>Espace de gestion privé</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="/admin/studio" style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700 }}>🤖 Content Studio</a>
          <a href="/contact" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Site public</a>
          <button onClick={handleLogout} style={{ background: 'rgba(239,68,68,0.2)', color: '#fca5a5', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.3)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>🚪 Déconnexion</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '4px solid #1a3c8f' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a3c8f' }}>{students.length}</div>
          <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Stagiaires inscrits</div>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '4px solid #10b981' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>{reservations.length}</div>
          <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Réservations totales</div>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b' }}>{reservations.filter(r => r.status === 'pending').length}</div>
          <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>En attente de confirmation</div>
        </div>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '4px solid #c8231a' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#c8231a' }}>{contacts.length}</div>
          <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Messages reçus</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', gap: '0', background: 'white', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', width: 'fit-content' }}>
          <button onClick={() => setActiveTab('students')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'students' ? '#1a3c8f' : 'white', color: activeTab === 'students' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            🎓 Stagiaires &amp; Accès ({students.length})
          </button>
          <button onClick={() => setActiveTab('reservations')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'reservations' ? '#1a3c8f' : 'white', color: activeTab === 'reservations' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            📅 Réservations ({reservations.length})
          </button>
          <button onClick={() => setActiveTab('contacts')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'contacts' ? '#1a3c8f' : 'white', color: activeTab === 'contacts' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            ✉️ Messages ({contacts.length})
          </button>
          <button onClick={() => setActiveTab('documents')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'documents' ? '#1a3c8f' : 'white', color: activeTab === 'documents' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            📁 Documents PDF
          </button>
        </div>

        {loading && <p style={{ color: '#64748b', textAlign: 'center', padding: '3rem' }}>Chargement...</p>}

        {/* STUDENTS TAB */}
        {!loading && activeTab === 'students' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {studentActionMsg && (
              <div style={{ padding: '0.85rem 1.25rem', borderRadius: '10px', background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', fontSize: '0.9rem', fontWeight: 600 }}>
                {studentActionMsg}
              </div>
            )}

            {/* Inscription manuelle */}
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}>
                ➕ Inscrire un Stagiaire Manuellement
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Créez un compte pour un stagiaire financé (OPCO, FAF, France Travail) ou un client ayant réglé par virement.
              </p>

              <form onSubmit={handleAddStudent} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', alignItems: 'flex-end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>Prénom</label>
                  <input
                    type="text"
                    required
                    value={newStudentPrenom}
                    onChange={(e) => setNewStudentPrenom(e.target.value)}
                    placeholder="Jean"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>Nom</label>
                  <input
                    type="text"
                    required
                    value={newStudentNom}
                    onChange={(e) => setNewStudentNom(e.target.value)}
                    placeholder="Dupont"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>Email</label>
                  <input
                    type="email"
                    required
                    value={newStudentEmail}
                    onChange={(e) => setNewStudentEmail(e.target.value)}
                    placeholder="jean.dupont@entreprise.fr"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>Formation initiale</label>
                  <select
                    value={newStudentCourse}
                    onChange={(e) => setNewStudentCourse(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box', background: 'white' }}
                  >
                    <option value="rs6776">IA Générative (RS6776)</option>
                    <option value="rs7344">Développer son activité IA (RS7344)</option>
                    <option value="rs7351">Réseaux Sociaux (RS7351)</option>
                    <option value="top">Méthode TOP® (21h)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ padding: '0.7rem 1.25rem', borderRadius: '8px', background: '#1a3c8f', color: 'white', fontWeight: 700, fontSize: '0.85rem', border: 'none', cursor: 'pointer', height: '38px' }}
                >
                  Ajouter le stagiaire →
                </button>
              </form>
            </div>

            {/* Liste des stagiaires */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {students.length === 0 ? (
                <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', color: '#94a3b8' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                  <p style={{ margin: 0 }}>Aucun stagiaire inscrit pour le moment.</p>
                </div>
              ) : (
                students.map((s) => (
                  <div key={s.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      <div style={{ width: '52px', height: '52px', background: '#e0e7ff', color: '#3730a3', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, flexShrink: 0 }}>
                        {s.prenom?.[0] || 'S'}{s.nom?.[0] || 'T'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1e293b' }}>
                          {s.prenom} {s.nom}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.15rem' }}>
                          {s.email} • Créé le {formatDate(s.createdAt)}
                        </div>

                        {/* Formations assignées */}
                        <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569' }}>Formations actives :</span>
                          {(s.courses || []).map((c: any) => (
                            <span key={c.id} style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px' }}>
                              ✓ {c.title} ({c.progress || 0}%)
                            </span>
                          ))}
                        </div>

                        {/* Attribuer une nouvelle formation */}
                        <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          <button onClick={() => handleAddCourse(s.id, 'rs6776')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
                            + IA RS6776
                          </button>
                          <button onClick={() => handleAddCourse(s.id, 'rs7344')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
                            + IA RS7344
                          </button>
                          <button onClick={() => handleAddCourse(s.id, 'rs7351')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
                            + RS7351 Réseaux
                          </button>
                          <button onClick={() => handleAddCourse(s.id, 'top')} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.25rem 0.5rem', borderRadius: '6px', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
                            + FI-TOP®
                          </button>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <a
                          href={`https://wa.me/33767246825?text=Bonjour%20${encodeURIComponent(s.prenom)}%2C%20bienvenue%20sur%20votre%20espace%20de%20formation%20%C3%94'TOP.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ background: '#25D366', color: 'white', padding: '0.4rem 0.9rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}
                        >
                          💬 WhatsApp
                        </a>
                        <button
                          onClick={() => handleDeleteStudent(s.id)}
                          style={{ background: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                        >
                          🗑️ Révoquer
                        </button>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        Méthode : {s.authProvider || 'password'}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* Reservations */}
        {!loading && activeTab === 'reservations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {reservations.length === 0 ? (
              <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                <p style={{ margin: 0 }}>Aucune réservation pour le moment.</p>
              </div>
            ) : (
              reservations.map(r => (
                <div key={r.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📅</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1e293b' }}>{r.prenom} {r.nom}</div>
                      <div style={{ fontSize: '0.85rem', color: '#1a3c8f', fontWeight: 600, marginTop: '0.15rem' }}>
                        {r.date} à {r.heure}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.25rem' }}>
                        {r.email} {r.tel && `• ${r.tel}`}
                      </div>
                      {r.besoin && <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.15rem' }}>Objet : {r.besoin}</div>}
                      {r.message && <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic', maxWidth: '500px' }}>"{r.message}"</div>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
                    <Badge status={r.status} />
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a href={`https://wa.me/33${r.tel?.replace(/[^0-9]/g, '').substring(1) || ''}?text=Bonjour%20${r.prenom}%2C%20je%20confirme%20votre%20entretien%20du%20${r.date}%20%C3%A0%20${r.heure}.`}
                        target="_blank" rel="noopener noreferrer"
                        style={{ background: '#25D366', color: 'white', padding: '0.4rem 0.9rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>
                        💬 WhatsApp
                      </a>
                      <a href={`mailto:${r.email}?subject=Confirmation entretien TOP® du ${r.date}&body=Bonjour ${r.prenom}%2C%0A%0AJe confirme votre entretien découverte du ${r.date} à ${r.heure}.%0A%0ACordialement%2C%0AMélyssa`}
                        style={{ background: '#f1f5f9', color: '#1a3c8f', padding: '0.4rem 0.9rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>
                        📧 Email
                      </a>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Reçu le {formatDate(r.createdAt)}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Contacts */}
        {!loading && activeTab === 'contacts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contacts.length === 0 ? (
              <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                <p style={{ margin: 0 }}>Aucun message pour le moment.</p>
              </div>
            ) : (
              contacts.map(c => (
                <div key={c.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{ width: '50px', height: '50px', background: '#fef2f2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>✉️</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1e293b' }}>{c.prenom || ''} {c.nom || ''}</div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.15rem' }}>{c.email} {c.tel && `• ${c.tel}`}</div>
                      {c.besoin && <div style={{ fontSize: '0.82rem', color: '#1a3c8f', fontWeight: 600, marginTop: '0.25rem' }}>Objet : {c.besoin}</div>}
                      {c.message && <div style={{ fontSize: '0.9rem', color: '#334155', marginTop: '0.75rem', lineHeight: 1.6, maxWidth: '500px' }}>"{c.message}"</div>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a href={`https://wa.me/33767246825?text=Bonjour%20${c.prenom}%2C%20suite%20%C3%A0%20votre%20message%20sur%20notre%20site...`}
                        target="_blank" rel="noopener noreferrer"
                        style={{ background: '#25D366', color: 'white', padding: '0.4rem 0.9rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>
                        💬 WhatsApp
                      </a>
                      <a href={`mailto:${c.email}?subject=Suite à votre message&body=Bonjour ${c.prenom}%2C%0A%0AMerci pour votre message.%0A%0ACordialement%2C%0AMélyssa`}
                        style={{ background: '#f1f5f9', color: '#1a3c8f', padding: '0.4rem 0.9rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700 }}>
                        📧 Répondre
                      </a>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Reçu le {formatDate(c.createdAt)}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.25rem' }}>📁 Gestion des Documents PDF</h2>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Gérez les fichiers PDF disponibles en téléchargement sur la page Ressources.</p>
              </div>
              <a href="/ressources/documents" target="_blank" style={{ background: '#1a3c8f', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700 }}>👁️ Voir la page publique</a>
            </div>

            {/* Info banner */}
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>ℹ️</span>
              <div>
                <strong style={{ color: '#1e40af', display: 'block', marginBottom: '0.25rem' }}>Comment mettre à jour un PDF ?</strong>
                <p style={{ color: '#3b82f6', fontSize: '0.875rem', margin: 0 }}>Les PDFs sont stockés dans le dossier <code style={{ background: '#dbeafe', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>public/docs/</code> de votre projet. Pour mettre à jour un fichier, remplacez-le dans ce dossier avec le même nom, puis faites un <strong>git push</strong>. Le changement sera en ligne en 1 minute.</p>
              </div>
            </div>

            {/* Document list */}
            {[{ name: 'programme-fi-top.pdf', label: 'Programme FI TOP® (21h)', color: '#1a3c8f' },
              { name: 'catalogue-otop-2025.pdf', label: 'Catalogue de formations 2025', color: '#c8231a' },
              { name: 'livret-accueil.pdf', label: "Livret d'accueil stagiaire", color: '#d4af37' },
              { name: 'reglement-interieur.pdf', label: 'Règlement intérieur', color: '#374151' },
              { name: 'charte-qualite.pdf', label: 'Charte Qualité & Qualiopi', color: '#059669' },
              { name: 'convention-formation.pdf', label: 'Modèle de convention de formation', color: '#7c3aed' },
            ].map((doc, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: `4px solid ${doc.color}` }}>
                <span style={{ fontSize: '1.75rem' }}>📄</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{doc.label}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem', fontFamily: 'monospace' }}>public/docs/{doc.name}</div>
                </div>
                <a href={`/docs/${doc.name}`} target="_blank" rel="noopener noreferrer" style={{ background: '#f1f5f9', color: '#1a3c8f', padding: '0.45rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 700 }}>👁️ Aperçu</a>
              </div>
            ))}

            <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: '12px', padding: '1.25rem 1.5rem', marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '1.25rem' }}>💡</span>
              <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}><strong>Prochainement :</strong> Upload direct de PDF depuis cette interface, sans passer par GitHub. En attendant, déposez vos fichiers dans <code>public/docs/</code> de votre projet local et faites un push.</p>
            </div>
          </div>
        )}

        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}
