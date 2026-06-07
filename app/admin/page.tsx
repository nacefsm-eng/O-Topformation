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
  const [activeTab, setActiveTab] = useState<'reservations' | 'contacts'>('reservations');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [cRes, rRes] = await Promise.all([
          fetch('/api/contact'),
          fetch('/api/reservation'),
        ]);
        const cData = await cRes.json();
        const rData = await rRes.json();
        setContacts((cData.contacts || []).reverse());
        setReservations((rData.reservations || []).reverse());
      } catch {}
      setLoading(false);
    };
    fetchData();
  }, []);

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

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1a3c8f', color: 'white', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🏛️</span>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Ô'TOP Formation — Dashboard</h1>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>Espace de gestion privé</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="/admin/studio" style={{ background: 'var(--gold)', color: 'var(--blue-900)', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700 }}>🤖 Content Studio</a>
          <a href="/contact" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Site public</a>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '4px solid #1a3c8f' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1a3c8f' }}>{reservations.length}</div>
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
          <button onClick={() => setActiveTab('reservations')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'reservations' ? '#1a3c8f' : 'white', color: activeTab === 'reservations' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            📅 Réservations ({reservations.length})
          </button>
          <button onClick={() => setActiveTab('contacts')} style={{ padding: '0.8rem 1.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', background: activeTab === 'contacts' ? '#1a3c8f' : 'white', color: activeTab === 'contacts' ? 'white' : '#64748b', transition: 'all 0.2s' }}>
            ✉️ Messages ({contacts.length})
          </button>
        </div>

        {loading && <p style={{ color: '#64748b', textAlign: 'center', padding: '3rem' }}>Chargement...</p>}

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

        <div style={{ height: '3rem' }} />
      </div>
    </div>
  );
}
