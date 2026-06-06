'use client';
import { useState, useEffect, useRef } from 'react';

export default function FloatingButtons() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="floating-contact" ref={menuRef}>
      {/* Menu Popup */}
      <div className={`floating-menu ${isOpen ? 'open' : ''}`}>
        <div className="floating-menu-header">
          <h4>Besoin d'échanger ?</h4>
          <p>Nous répondons rapidement</p>
        </div>
        
        <div className="floating-menu-links">
          <a href="https://wa.me/33767246825" target="_blank" rel="noopener noreferrer" className="fm-link fm-wa">
            <span className="fm-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </span>
            Message WhatsApp
          </a>
          
          <a href="/reservation" target="_blank" rel="noopener noreferrer" className="fm-link fm-cal">
            <span className="fm-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            Réserver un appel
          </a>

          <a href="tel:+33767246825" className="fm-link fm-tel">
            <span className="fm-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            07 67 24 68 25
          </a>
        </div>
      </div>

      {/* Main Trigger Button */}
      <button 
        className={`floating-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Options de contact"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        )}
      </button>

      <style jsx>{`
        .floating-contact {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .floating-trigger {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--blue-900);
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(26, 60, 143, 0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .floating-trigger:hover {
          transform: scale(1.05);
          background: var(--blue-700);
        }
        
        .floating-trigger.active {
          background: var(--red);
          box-shadow: 0 4px 12px rgba(200, 35, 26, 0.4);
        }

        .floating-menu {
          position: absolute;
          bottom: 75px;
          right: 0;
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          width: 280px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.95);
          transform-origin: bottom right;
          transition: all 0.2s ease-out;
          overflow: hidden;
          border: 1px solid var(--gray-200);
        }

        .floating-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .floating-menu-header {
          background: var(--gray-50);
          padding: 1.25rem;
          border-bottom: 1px solid var(--gray-100);
        }

        .floating-menu-header h4 {
          margin: 0 0 0.25rem 0;
          color: var(--blue-900);
          font-size: 1.05rem;
        }

        .floating-menu-header p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--gray-500);
        }

        .floating-menu-links {
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
        }

        .fm-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.95rem;
          border-radius: var(--radius);
          transition: background 0.2s;
        }

        .fm-link:hover {
          background: var(--gray-50);
          color: var(--blue-900);
        }

        .fm-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 0.75rem;
          color: white;
        }

        .fm-wa .fm-icon { background: #25D366; }
        .fm-cal .fm-icon { background: var(--blue-900); }
        .fm-tel .fm-icon { background: var(--gray-300); color: var(--blue-900); }

        @media (max-width: 768px) {
          .floating-contact {
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
