'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// ─── Horaires : 9h00 → 17h30, par tranches de 30 min ───────────────────────
const ALL_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const DAY_LABELS = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
// getDay() renvoie 0=dim…6=sam → on veut lundi en 1er
function getFirstDayOfMonth(y: number, m: number) {
  const d = new Date(y, m, 1).getDay(); // 0=sun
  return d === 0 ? 6 : d - 1; // 0=lun…6=dim
}

function toDateStr(y: number, m: number, d: number) {
  return `${String(d).padStart(2,'0')}/${String(m+1).padStart(2,'0')}/${y}`;
}

export default function ReservationPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear]   = useState(today.getFullYear());
  const [selectedDate, setSelectedDate]  = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot]  = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [form, setForm] = useState({ prenom:'', nom:'', email:'', tel:'', besoin:'', message:'' });
  const [loading, setLoading]  = useState(false);
  const [error, setError]      = useState<string | null>(null);

  // Créneaux déjà confirmés chargés depuis l'API
  const [bookedSlots, setBookedSlots] = useState<{ date: string; heure: string }[]>([]);

  useEffect(() => {
    fetch('/api/reservation')
      .then(r => r.json())
      .then(data => {
        const confirmed = (data.reservations || [])
          .filter((r: { status: string }) => r.status === 'confirmed')
          .map((r: { date: string; heure: string }) => ({ date: r.date, heure: r.heure }));
        setBookedSlots(confirmed);
      })
      .catch(() => {});
  }, []);

  const daysInMonth  = getDaysInMonth(currentYear, currentMonth);
  const firstDayIdx  = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y-1); } else setCurrentMonth(m => m-1); };
  const nextMonth = () => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y+1); } else setCurrentMonth(m => m+1); };

  const isPast = (day: number) => {
    const d = new Date(currentYear, currentMonth, day); d.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t;
  };

  const isWeekend = (day: number) => {
    return false; // Weekends allowed
  };

  const isSlotBooked = (slot: string) =>
    selectedDate ? bookedSlots.some(b => b.date === selectedDate && b.heure === slot) : false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: selectedDate, heure: selectedSlot, createdAt: new Date().toISOString() }),
      });
      if (res.status === 409) {
        setError('Ce créneau vient d\'être réservé. Veuillez en choisir un autre.');
        setStep('calendar');
        setSelectedSlot(null);
        // Recharger les créneaux confirmés
        fetch('/api/reservation').then(r => r.json()).then(data => {
          setBookedSlots((data.reservations || []).filter((r: { status: string }) => r.status === 'confirmed').map((r: { date: string; heure: string }) => ({ date: r.date, heure: r.heure })));
        });
      } else {
        setStep('success');
      }
    } catch {
      setStep('success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Réserver un entretien</span>
          </div>
          <h1>Réserver un entretien découverte</h1>
          <p>15 minutes pour nous parler de votre projet. Sans engagement, sans frais.</p>
          <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap', marginTop:'1rem' }}>
            {['🗓 Lundi – Dimanche', '⏰ 9h00 – 17h30', '📍 En visioconférence', '✅ Gratuit & sans engagement'].map(t => (
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', borderRadius:'50px', padding:'0.3rem 0.9rem', fontSize:'0.8rem', fontWeight:600, color:'white', border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ background:'var(--gray-50)', minHeight:'70vh' }}>
        <div className="container" style={{ maxWidth:'860px' }}>

          {error && (
            <div style={{ background:'#fef2f2', border:'1px solid #fecaca', borderRadius:'var(--radius)', padding:'1rem 1.5rem', marginBottom:'1.5rem', color:'#dc2626', fontWeight:600, display:'flex', alignItems:'center', gap:'0.75rem' }}>
              ⚠️ {error}
            </div>
          )}

          {/* ── SUCCESS ── */}
          {step === 'success' && (
            <div style={{ background:'white', borderRadius:'var(--radius-lg)', padding:'4rem 2rem', textAlign:'center', boxShadow:'var(--shadow-md)' }}>
              <div style={{ fontSize:'5rem', marginBottom:'1.5rem' }}>✅</div>
              <h2 style={{ fontSize:'2rem', marginBottom:'1rem', color:'var(--blue-900)' }}>Demande envoyée !</h2>
              <p style={{ fontSize:'1.1rem', color:'var(--gray-600)', marginBottom:'0.75rem' }}>
                Votre demande pour le <strong>{selectedDate}</strong> à <strong>{selectedSlot}</strong> est bien enregistrée.
              </p>
              <p style={{ color:'var(--gray-500)', marginBottom:'2rem' }}>
                Mélyssa ou Régis vous contactera sur <strong>{form.email}</strong> pour confirmer votre entretien sous 24h.
              </p>
              <div style={{ background:'#fffbeb', border:'1px solid #fde68a', borderRadius:'var(--radius)', padding:'1rem', marginBottom:'2rem', fontSize:'0.9rem', color:'#92400e' }}>
                💡 Pour accélérer la confirmation, vous pouvez aussi nous envoyer un WhatsApp !
              </div>
              <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
                <Link href="/" className="btn btn-primary">Retour à l'accueil</Link>
                <a href={`https://wa.me/33767246825?text=Bonjour%2C%20j'ai%20r%C3%A9serv%C3%A9%20un%20entretien%20le%20${selectedDate}%20%C3%A0%20${selectedSlot}%20sur%20votre%20site.%20Pouvez-vous%20confirmer%20%3F`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ background:'#25D366', color:'white', padding:'0.875rem 2rem', borderRadius:'50px', textDecoration:'none', fontWeight:700 }}>
                  💬 Confirmer sur WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* ── CALENDAR ── */}
          {step === 'calendar' && (
            <div style={{ background:'white', borderRadius:'var(--radius-lg)', padding:'2.5rem', boxShadow:'var(--shadow-md)' }}>
              {/* Step indicator */}
              <div style={{ display:'flex', gap:'0.5rem', marginBottom:'2rem' }}>
                {['1. Date & heure', '2. Vos coordonnées'].map((s, i) => (
                  <div key={i} style={{ flex:1, padding:'0.6rem', textAlign:'center', borderRadius:'var(--radius)', background: i === 0 ? 'var(--blue-900)' : 'var(--gray-100)', color: i === 0 ? 'white' : 'var(--gray-400)', fontWeight:700, fontSize:'0.85rem' }}>{s}</div>
                ))}
              </div>

              <h2 style={{ fontSize:'1.4rem', color:'var(--blue-900)', marginBottom:'0.4rem' }}>Choisissez une date</h2>
              <p style={{ color:'var(--gray-500)', marginBottom:'1.75rem', fontSize:'0.9rem' }}>
                Disponible du <strong>lundi au dimanche</strong>, de <strong>9h00 à 17h30</strong>. Les jours passés sont grisés.
              </p>

              {/* Month nav */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem' }}>
                <button onClick={prevMonth} style={{ background:'none', border:'1px solid var(--gray-200)', borderRadius:'var(--radius)', padding:'0.5rem 1rem', cursor:'pointer', fontWeight:700, fontSize:'1.2rem', color:'var(--blue-900)' }}>‹</button>
                <span style={{ fontWeight:800, fontSize:'1.15rem', color:'var(--blue-900)' }}>{MONTHS[currentMonth]} {currentYear}</span>
                <button onClick={nextMonth} style={{ background:'none', border:'1px solid var(--gray-200)', borderRadius:'var(--radius)', padding:'0.5rem 1rem', cursor:'pointer', fontWeight:700, fontSize:'1.2rem', color:'var(--blue-900)' }}>›</button>
              </div>

              {/* Day labels — Lun to Dim */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', textAlign:'center', marginBottom:'0.5rem', gap:'4px' }}>
                {DAY_LABELS.map((d, i) => (
                  <div key={d} style={{ fontSize:'0.78rem', fontWeight:700, color: i >= 5 ? 'var(--gray-300)' : 'var(--gray-500)', padding:'0.4rem 0' }}>{d}</div>
                ))}
              </div>

              {/* Days grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap:'4px' }}>
                {Array(firstDayIdx).fill(null).map((_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                  const disabled = isPast(day) || isWeekend(day);
                  const dateStr  = toDateStr(currentYear, currentMonth, day);
                  const selected = selectedDate === dateStr;
                  return (
                    <button
                      key={day}
                      disabled={disabled}
                      onClick={() => { setSelectedDate(dateStr); setSelectedSlot(null); setError(null); }}
                      style={{
                        padding:'0.65rem 0',
                        borderRadius:'var(--radius)',
                        border: selected ? '2px solid var(--blue-900)' : '1px solid transparent',
                        background: selected ? 'var(--blue-900)' : disabled ? 'transparent' : 'var(--gray-50)',
                        color: selected ? 'white' : disabled ? 'var(--gray-300)' : isWeekend(day) ? 'var(--gray-200)' : 'var(--blue-900)',
                        fontWeight: selected ? 700 : 500,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        fontSize:'0.95rem',
                        transition:'all 0.15s',
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div style={{ marginTop:'2rem', paddingTop:'2rem', borderTop:'1px solid var(--gray-100)' }}>
                  <h3 style={{ fontSize:'1.1rem', color:'var(--blue-900)', marginBottom:'0.5rem' }}>
                    Créneaux disponibles — {selectedDate}
                  </h3>
                  <p style={{ fontSize:'0.83rem', color:'var(--gray-400)', marginBottom:'1rem' }}>
                    🔴 = déjà réservé (confirmé par l'équipe)
                  </p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'0.6rem' }}>
                    {ALL_SLOTS.map(slot => {
                      const booked   = isSlotBooked(slot);
                      const selected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          disabled={booked}
                          onClick={() => setSelectedSlot(slot)}
                          title={booked ? 'Ce créneau est déjà réservé' : `Choisir ${slot}`}
                          style={{
                            padding:'0.55rem 1.1rem',
                            borderRadius:'var(--radius)',
                            border: booked ? '1px solid #fecaca' : selected ? '2px solid var(--blue-900)' : '1px solid var(--gray-300)',
                            background: booked ? '#fef2f2' : selected ? 'var(--blue-900)' : 'white',
                            color: booked ? '#fca5a5' : selected ? 'white' : 'var(--blue-900)',
                            fontWeight: 600,
                            cursor: booked ? 'not-allowed' : 'pointer',
                            fontSize:'0.9rem',
                            transition:'all 0.15s',
                            position:'relative',
                          }}
                        >
                          {booked ? `🔴 ${slot}` : slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedDate && selectedSlot && (
                <div style={{ marginTop:'2rem', textAlign:'right' }}>
                  <button
                    onClick={() => setStep('form')}
                    className="btn btn-primary"
                    style={{ padding:'0.9rem 2rem', fontSize:'1.05rem' }}
                  >
                    Continuer → {selectedDate} à {selectedSlot}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── FORM ── */}
          {step === 'form' && (
            <div style={{ background:'white', borderRadius:'var(--radius-lg)', padding:'2.5rem', boxShadow:'var(--shadow-md)' }}>
              {/* Step indicator */}
              <div style={{ display:'flex', gap:'0.5rem', marginBottom:'2rem' }}>
                {['1. Date & heure', '2. Vos coordonnées'].map((s, i) => (
                  <div key={i} style={{ flex:1, padding:'0.6rem', textAlign:'center', borderRadius:'var(--radius)', background: i === 1 ? 'var(--blue-900)' : 'var(--gray-100)', color: i === 1 ? 'white' : 'var(--gray-400)', fontWeight:700, fontSize:'0.85rem' }}>{s}</div>
                ))}
              </div>

              <button onClick={() => setStep('calendar')} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--blue-700)', fontWeight:600, marginBottom:'1.5rem', display:'flex', alignItems:'center', gap:'0.5rem', padding:0 }}>
                ← Changer de créneau
              </button>

              {/* Selected slot banner */}
              <div style={{ background:'var(--blue-50)', borderRadius:'var(--radius)', padding:'1rem 1.25rem', marginBottom:'2rem', display:'flex', alignItems:'center', gap:'1rem', border:'1px solid rgba(26,60,143,0.1)' }}>
                <span style={{ fontSize:'1.75rem' }}>📅</span>
                <div>
                  <div style={{ fontWeight:700, color:'var(--blue-900)', fontSize:'0.95rem' }}>Entretien sélectionné</div>
                  <div style={{ color:'var(--blue-700)', fontWeight:600 }}>{selectedDate} à {selectedSlot} (15 min)</div>
                </div>
              </div>

              <h2 style={{ fontSize:'1.4rem', color:'var(--blue-900)', marginBottom:'0.4rem' }}>Vos coordonnées</h2>
              <p style={{ color:'var(--gray-500)', marginBottom:'2rem', fontSize:'0.9rem' }}>Pour confirmer votre réservation et vous envoyer les informations.</p>

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <div>
                    <label htmlFor="res-prenom" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Prénom *</label>
                    <input id="res-prenom" type="text" required value={form.prenom} onChange={e => setForm({...form, prenom:e.target.value})} placeholder="Votre prénom" style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', fontFamily:'inherit' }} />
                  </div>
                  <div>
                    <label htmlFor="res-nom" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Nom *</label>
                    <input id="res-nom" type="text" required value={form.nom} onChange={e => setForm({...form, nom:e.target.value})} placeholder="Votre nom" style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', fontFamily:'inherit' }} />
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                  <div>
                    <label htmlFor="res-email" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Email *</label>
                    <input id="res-email" type="email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="votre@email.com" style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', fontFamily:'inherit' }} />
                  </div>
                  <div>
                    <label htmlFor="res-tel" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Téléphone</label>
                    <input id="res-tel" type="tel" value={form.tel} onChange={e => setForm({...form, tel:e.target.value})} placeholder="06 xx xx xx xx" style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', fontFamily:'inherit' }} />
                  </div>
                </div>
                <div>
                  <label htmlFor="res-besoin" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Objet de l'entretien</label>
                  <select id="res-besoin" value={form.besoin} onChange={e => setForm({...form, besoin:e.target.value})} style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', background:'white', fontFamily:'inherit' }}>
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="Formation individuelle">S'inscrire à une formation (FI-TOP / FB-TOP)</option>
                    <option value="Formation entreprise">Organiser une formation en entreprise</option>
                    <option value="Sous-traitance">Proposition de partenariat</option>
                    <option value="Renseignement">Simple renseignement</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="res-message" style={{ display:'block', fontSize:'0.88rem', fontWeight:600, color:'var(--blue-900)', marginBottom:'0.4rem' }}>Un mot sur votre situation (optionnel)</label>
                  <textarea id="res-message" rows={3} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Expliquez en 2 lignes ce que vous cherchez..." style={{ width:'100%', padding:'0.85rem', borderRadius:'var(--radius)', border:'1px solid var(--gray-300)', resize:'vertical', fontFamily:'inherit' }} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading} style={{ width:'100%', justifyContent:'center', padding:'1.1rem', fontSize:'1.05rem' }}>
                  {loading ? 'Envoi en cours...' : '✓ Confirmer la demande →'}
                </button>
                <p style={{ fontSize:'0.78rem', color:'var(--gray-400)', textAlign:'center', margin:0 }}>
                  Votre créneau sera confirmé par Mélyssa ou Régis sous 24h ouvrées.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
