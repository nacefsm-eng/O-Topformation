'use client';
import { useState } from 'react';
import Link from 'next/link';

type Post = { platform: string; text: string };

const PLATFORM_ICONS: Record<string, string> = {
  linkedin: '💼',
  facebook: '📘',
  instagram: '📸',
};

const PLATFORM_COLORS: Record<string, string> = {
  linkedin: '#0A66C2',
  facebook: '#1877F2',
  instagram: '#E1306C',
};

export default function ContentStudio() {
  const [topic, setTopic] = useState('');
  const [platforms, setPlatforms] = useState({ linkedin: true, facebook: true, instagram: false });
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    const selected = Object.entries(platforms).filter(([, v]) => v).map(([k]) => k);
    if (!selected.length) { setError('Sélectionnez au moins un réseau.'); return; }
    setLoading(true); setError(''); setPosts([]);

    try {
      const res = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platforms: selected }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue.');
      setPosts(data.posts || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f1f5c 0%, #1a3c8f 50%, #0f1f5c 100%)' }}>
      {/* Header */}
      <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '2rem' }}>🤖</span>
          <div>
            <h1 style={{ color: 'white', margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>Content Studio IA</h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0, fontSize: '0.85rem' }}>Générez vos posts en 1 clic • O'TOP Formation</p>
          </div>
        </div>
        <Link href="/admin" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '8px', transition: 'background 0.2s' }}>
          ← Dashboard
        </Link>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: '380px 1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Left Panel — Form */}
        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255,255,255,0.12)', position: 'sticky', top: '2rem' }}>
          <form onSubmit={handleGenerate}>
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 700 }}>
                💡 Sujet du post
              </label>
              <textarea
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="Ex : Comment la méthode TOP aide les managers à réduire le burn-out de leurs équipes..."
                required
                style={{ width: '100%', padding: '1rem', minHeight: '130px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: 'white', fontFamily: 'inherit', fontSize: '0.9rem', resize: 'vertical', outline: 'none', boxSizing: 'border-box', lineHeight: 1.6 }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 700 }}>
                📱 Réseaux cibles
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(platforms).map(([key, checked]) => (
                  <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', padding: '0.75rem 1rem', borderRadius: '10px', background: checked ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)', border: `1.5px solid ${checked ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)'}`, transition: 'all 0.2s' }}>
                    <input type="checkbox" checked={checked} onChange={e => setPlatforms({ ...platforms, [key]: e.target.checked })} style={{ display: 'none' }} />
                    <span style={{ fontSize: '1.25rem' }}>{PLATFORM_ICONS[key]}</span>
                    <span style={{ color: 'white', fontWeight: 600, textTransform: 'capitalize', fontSize: '0.95rem' }}>{key}</span>
                    {checked && <span style={{ marginLeft: 'auto', color: '#4ade80', fontSize: '1rem' }}>✓</span>}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', padding: '1rem', background: loading ? 'rgba(212,175,55,0.4)' : 'linear-gradient(135deg, #d4af37, #f0d060)', color: '#0f1f5c', fontWeight: 800, fontSize: '1rem', borderRadius: '12px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s', boxShadow: loading ? 'none' : '0 4px 20px rgba(212,175,55,0.4)' }}
            >
              {loading ? (
                <>
                  <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid #0f1f5c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  Génération en cours...
                </>
              ) : (
                <>✨ Générer les posts</>
              )}
            </button>

            {error && (
              <div style={{ marginTop: '1rem', padding: '0.85rem 1rem', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '10px', color: '#fca5a5', fontSize: '0.875rem' }}>
                ⚠️ {error}
              </div>
            )}
          </form>
        </div>

        {/* Right Panel — Results */}
        <div>
          {!loading && posts.length === 0 && !error && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem', opacity: 0.4 }}>✍️</div>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Vos posts apparaîtront ici</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Saisissez un sujet et cliquez sur Générer</p>
            </div>
          )}

          {loading && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', gap: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', border: '3px solid rgba(212,175,55,0.3)', borderTopColor: '#d4af37', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '1rem' }}>L'IA rédige vos posts...</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>Cela prend environ 5-10 secondes</p>
            </div>
          )}

          {posts.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {posts.map((post, idx) => {
                const platformKey = post.platform.toLowerCase();
                const color = PLATFORM_COLORS[platformKey] || '#1a3c8f';
                const icon = PLATFORM_ICONS[platformKey] || '📣';
                return (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden' }}>
                    {/* Card Header */}
                    <div style={{ background: color, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '1.05rem', textTransform: 'capitalize' }}>{post.platform}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(post.text, idx)}
                        style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '0.4rem 1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        {copiedIdx === idx ? '✅ Copié !' : '📋 Copier'}
                      </button>
                    </div>

                    {/* Card Body */}
                    <div style={{ padding: '1.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.8, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                      {post.text}
                    </div>

                    {/* Card Footer */}
                    <div style={{ padding: '0.75rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
                        {post.text.length} caractères · Généré par Gemini IA
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        textarea::placeholder { color: rgba(255,255,255,0.3); }
        textarea:focus { border-color: rgba(212,175,55,0.6) !important; box-shadow: 0 0 0 3px rgba(212,175,55,0.15); }
      `}</style>
    </div>
  );
}
