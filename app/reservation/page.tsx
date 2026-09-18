'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function RedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = searchParams.toString();
    router.replace(params ? `/contact?${params}` : '/contact');
  }, [router, searchParams]);

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ fontSize: '2rem' }}>⚡</div>
      <p style={{ color: 'var(--blue-900)', fontWeight: 600 }}>Redirection vers le diagnostic en direct...</p>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <RedirectContent />
    </Suspense>
  );
}
