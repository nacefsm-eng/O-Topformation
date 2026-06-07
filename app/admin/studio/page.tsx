'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContentStudio() {
  const [topic, setTopic] = useState('');
  const [platforms, setPlatforms] = useState({
    linkedin: true,
    facebook: true,
    instagram: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');

    const selectedPlatforms = Object.entries(platforms)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);

    if (selectedPlatforms.length === 0) {
      setError('Veuillez sélectionner au moins un réseau social.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platforms: selectedPlatforms })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la génération.');
      }

      setResult(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('Contenu copié dans le presse-papier !');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <Link href="/admin" style={{ color: 'var(--blue-700)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              ← Retour au Dashboard
            </Link>
            <h1 style={{ color: 'var(--blue-900)', fontSize: '2.5rem' }}>🤖 Content Studio</h1>
            <p style={{ color: 'var(--gray-600)', marginTop: '0.5rem' }}>Générez vos posts réseaux sociaux en 1 clic grâce à l'Intelligence Artificielle.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Left Column: Form */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)' }}>
            <form onSubmit={handleGenerate}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--blue-900)' }}>De quoi voulez-vous parler ?</label>
                <textarea 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ex: Les bienfaits de la respiration au travail pour les managers..."
                  style={{ width: '100%', padding: '1rem', minHeight: '120px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-300)', fontFamily: 'inherit', resize: 'vertical' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, color: 'var(--blue-900)' }}>Réseaux cibles</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={platforms.linkedin} onChange={(e) => setPlatforms({...platforms, linkedin: e.target.checked})} />
                    🔵 LinkedIn
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={platforms.facebook} onChange={(e) => setPlatforms({...platforms, facebook: e.target.checked})} />
                    🔵 Facebook
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" checked={platforms.instagram} onChange={(e) => setPlatforms({...platforms, instagram: e.target.checked})} />
                    📸 Instagram
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
              >
                {loading ? '⏳ Génération en cours...' : '✨ Générer le contenu'}
              </button>
              
              {error && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#fee2e2', color: '#991b1b', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Result */}
          <div style={{ background: 'var(--blue-900)', color: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--gold)' }}>Résultat</h2>
              {result && (
                <button onClick={handleCopy} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }}>
                  📋 Copier
                </button>
              )}
            </div>
            
            <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', overflowY: 'auto', maxHeight: '500px', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--gold)', animation: 'pulse 1.5s infinite' }}>
                  Analyse de la demande par l'IA...
                </div>
              ) : result ? (
                result
              ) : (
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Le texte généré apparaîtra ici...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
