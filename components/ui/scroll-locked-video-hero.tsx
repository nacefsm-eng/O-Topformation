'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface MetroHeroProps {
  videoSrc?: string;
  title?: string;
  scrollHint?: string;
  tagline?: string;
  signature?: { name: string; url: string } | false;
  /** Total input distance (px) needed to scrub the full video. Tune to taste. */
  scrubDistance?: number;
  className?: string;
  style?: React.CSSProperties;
  onUnlocked?: () => void;
}

const DEFAULT_VIDEO = 'https://cdn.21st.dev/assets/mirror/21/21a77eac28eacbb7e142016eefeaa0b4a766619e51113629a3bc6df6af066c0f.mp4';
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const COL_BG = '#030712';
const COL_TEXT = '#f8fafc';

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function MetroHero({
  videoSrc = DEFAULT_VIDEO,
  title = "DOMINEZ L'IA & LE DIGITAL",
  scrollHint = "DÉFILEZ POUR DÉCOUVRIR",
  tagline = "L'excellence certifiée France Compétences & Qualiopi pour transformer votre avenir.",
  signature = false,
  scrubDistance = 2400,
  className,
  style,
  onUnlocked,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let duration = 0;
    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let hasStartedScrolling = false;
    let isSeeking = false;
    let pendingTime: number | null = null;
    let locked = false;
    let lockedScrollY = 0;
    let touchStartY = 0;

    const onLoadedData = () => {
      duration = video.duration || 0;
      setReady(true);
      if (reduceMotion) {
        video.currentTime = duration * 0.92;
      }
    };
    video.addEventListener('loadeddata', onLoadedData);

    const kickstartLoad = () => {
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(() => video.pause()).catch(() => {});
      } else {
        video.pause();
      }
    };
    kickstartLoad();

    const onSeeked = () => {
      isSeeking = false;
      if (pendingTime !== null) {
        const t = pendingTime;
        pendingTime = null;
        isSeeking = true;
        video.currentTime = t;
      }
    };
    video.addEventListener('seeked', onSeeked);

    function seekTo(t: number) {
      if (!video) return;
      if (isSeeking) {
        pendingTime = t;
        return;
      }
      isSeeking = true;
      video.currentTime = t;
    }

    function engageLock() {
      if (locked || typeof document === 'undefined') return;
      locked = true;
      lockedScrollY = window.scrollY;
      const b = document.body.style;
      b.position = 'fixed';
      b.top = `-${lockedScrollY}px`;
      b.left = '0';
      b.right = '0';
      b.width = '100%';
      b.height = '100%';
      b.overscrollBehavior = 'none';
      setIsUnlocked(false);
    }

    function releaseLock() {
      if (!locked || typeof document === 'undefined') return;
      locked = false;
      const y = lockedScrollY;
      const b = document.body.style;
      b.position = '';
      b.top = '';
      b.left = '';
      b.right = '';
      b.width = '';
      b.height = '';
      b.overscrollBehavior = '';
      window.scrollTo(0, y);
      setIsUnlocked(true);
      if (onUnlocked) onUnlocked();
    }

    engageLock();

    function addDelta(deltaY: number) {
      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
      targetProgress = next;
      if (targetProgress > 0.001) hasStartedScrolling = true;

      // Unlock when video ends and user scrolls down further
      if (targetProgress >= 0.98 && deltaY > 0) {
        releaseLock();
        return false;
      }
      return true;
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        const keepLocked = addDelta(e.deltaY);
        if (keepLocked) {
          e.preventDefault();
        }
      } else {
        // Re-lock if user scrolls back to the very top
        if (window.scrollY <= 10 && e.deltaY < 0) {
          engageLock();
          e.preventDefault();
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!locked) return;
      const y = e.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - y;
      touchStartY = y;
      const keepLocked = addDelta(deltaY);
      if (keepLocked) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    section.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    section.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.18;

      if (duration > 0) {
        seekTo(currentProgress * duration);
      }

      if (videoRef.current) {
        const scale = 1 + currentProgress * 0.06;
        videoRef.current.style.transform = `scale(${scale})`;
      }
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.35, 0, 1);
        titleRef.current.style.opacity = String(t);
        titleRef.current.style.transform = `translateY(${(1 - t) * -24}px) scale(${0.96 + t * 0.04})`;
        titleRef.current.style.filter = `blur(${(1 - t) * 10}px)`;
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? '0' : '1';
      }
      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.75) / 0.25, 0, 1);
        taglineRef.current.style.opacity = String(t);
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px) scale(${0.97 + t * 0.03})`;
        taglineRef.current.style.filter = `blur(${(1 - t) * 8}px)`;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      rafId = requestAnimationFrame(frame);
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame);
    }

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      section.removeEventListener('touchstart', onTouchStart, true);
      section.removeEventListener('touchmove', onTouchMove, true);
      cancelAnimationFrame(rafId);
      releaseLock();
    };
  }, [scrubDistance, onUnlocked]);

  const handleSkip = () => {
    const b = document.body.style;
    b.position = '';
    b.top = '';
    b.left = '';
    b.right = '';
    b.width = '';
    b.height = '';
    b.overscrollBehavior = '';
    setIsUnlocked(true);
    const target = document.getElementById('formations') || document.getElementById('methodologie');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        overflow: 'hidden',
        background: COL_BG,
        touchAction: 'none',
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: ready ? 1 : 0,
          transformOrigin: 'center center',
          willChange: 'transform',
          transition: 'opacity 0.6s ease',
          touchAction: 'none',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(3,7,18,0.45) 0%, rgba(3,7,18,0.1) 40%, rgba(3,7,18,0.75) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Skip button so visitors can smoothly jump directly to content */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: 40,
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: 'white',
          padding: '8px 18px',
          borderRadius: '50px',
          fontSize: '0.8rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        Passer l&apos;introduction ➔
      </button>

      {/* Title */}
      <div
        ref={titleRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 6%',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: 'clamp(28px, 6.5vw, 84px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: COL_TEXT,
            textShadow: '0 4px 40px rgba(0,0,0,0.7)',
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
            maxWidth: '1000px',
          }}
        >
          {title}
        </span>
        <span style={{ fontSize: 'clamp(12px, 1.6vw, 18px)', color: '#38bdf8', fontWeight: 700, marginTop: '16px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Ô&apos;TOP FORMATION • ORGANISME DÉCLARÉ (NDA EN COURS) · PORTÉ PAR ELOQONE
        </span>
      </div>

      {/* Tagline on complete scroll */}
      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 8%',
            textAlign: 'center',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 48px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: COL_TEXT,
              textShadow: '0 4px 30px rgba(0,0,0,0.8)',
              maxWidth: '900px',
            }}
          >
            {tagline}
          </span>
          <div style={{ marginTop: '24px', pointerEvents: 'auto' }}>
            <button
              onClick={handleSkip}
              style={{
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '16px',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
              }}
            >
              Découvrir nos 3 Formations Certifiantes ➔
            </button>
          </div>
        </div>
      )}

      {/* Scroll Hint */}
      <div
        ref={hintRef}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 'clamp(20px, 6vh, 48px)',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(240,244,248,0.8)',
          fontFamily: SANS,
          fontSize: 'clamp(10px, 1.4vw, 12px)',
          fontWeight: 700,
          letterSpacing: '0.25em',
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }}
      >
        <span>{scrollHint}</span>
        <svg width="14" height="18" viewBox="0 0 14 18" style={{ animation: 'metro-hero-bounce 1.6s ease-in-out infinite' }}>
          <style>{`
            @keyframes metro-hero-bounce {
              0%, 100% { transform: translateY(0); opacity: 0.5; }
              50% { transform: translateY(5px); opacity: 1; }
            }
          `}</style>
          <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  );
}
