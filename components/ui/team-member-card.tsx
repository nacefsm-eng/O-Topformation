'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  position?: 'left' | 'right';
  jobPosition?: string;
  roleTitle?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
  onCtaClick?: () => void;
  themeVariant?: 'default' | 'white' | 'black';
}

/**
 * Editorial-style team member card with high-contrast typography,
 * explicit text colors for guaranteed visibility, and pixel-perfect alignment.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = '',
  roleTitle = '',
  firstName = 'Mélissa',
  lastName = 'JENNADI',
  imageUrl = '/team-melyssa.png',
  description = 'Accompagnement de haut niveau, exigence pédagogique et engagement total pour le développement de vos compétences.',
  className,
  onCtaClick,
  themeVariant = 'default',
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`.trim();
  const isPositionRight = position === 'right';
  const isWhite = themeVariant === 'white';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-8 md:my-14 flex flex-col justify-center w-full max-w-5xl mx-auto', className)}
    >
      {/* jobPosition label — only if provided */}
      {jobPosition ? (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            className={cn(
              'mb-4 text-xs font-semibold tracking-[0.25em] uppercase',
              isPositionRight && 'text-right'
            )}
            style={{ color: isWhite ? '#475569' : '#94a3b8' }}
          >
            {jobPosition}
          </p>
        </motion.div>
      ) : null}

      <div className={cn(
        'flex flex-col md:flex-row items-center',
        isPositionRight ? 'md:justify-start' : 'md:justify-end'
      )}>
        {/* Portrait image with reveal animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[380px] sm:h-[440px] md:h-[480px] w-full max-w-[340px] shrink-0 overflow-hidden rounded-2xl shadow-2xl',
            isPositionRight && 'md:order-1'
          )}
          style={{
            backgroundColor: isWhite ? '#ffffff' : '#0f172a',
            border: isWhite ? '2px solid #cbd5e1' : '2px solid #334155',
            boxShadow: isWhite ? '0 20px 40px -10px rgba(0,0,0,0.12)' : '0 25px 50px -12px rgba(0,0,0,0.7)',
          }}
        >
          {/* Subtle overlay for contrast */}
          <div 
            className="pointer-events-none absolute inset-0 z-10" 
            style={{
              background: isWhite 
                ? 'linear-gradient(to top, rgba(15, 23, 42, 0.15), transparent)' 
                : 'linear-gradient(to top, rgba(2, 6, 23, 0.6), transparent)'
            }}
          />
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover object-top duration-500 ease-out hover:scale-105"
          />
        </motion.div>

        {/* Info block — overlaps image on desktop via negative margin */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-20 flex flex-col gap-6 md:gap-10 w-full mt-6 md:mt-0',
            isPositionRight
              ? 'md:right-8 md:items-start text-left'
              : 'md:-left-8 md:items-start text-left'
          )}
        >
          {/* Display name & description card */}
          <div 
            className="p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg transition-all w-full"
            style={{
              backgroundColor: isWhite ? '#ffffff' : '#0f172a',
              border: isWhite ? '2px solid #cbd5e1' : '2px solid #334155',
              boxShadow: isWhite ? '0 20px 40px -10px rgba(0,0,0,0.15)' : '0 25px 50px -12px rgba(0,0,0,0.8)',
            }}
          >
            {roleTitle ? (
              <span 
                className="text-xs font-extrabold uppercase tracking-widest inline-block mb-3 px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: isWhite ? '#eff6ff' : 'rgba(56, 189, 248, 0.15)',
                  color: isWhite ? '#1d4ed8' : '#38bdf8',
                  borderColor: isWhite ? '#bfdbfe' : 'rgba(56, 189, 248, 0.35)',
                }}
              >
                {roleTitle}
              </span>
            ) : null}

            {/* Display full name with absolute high contrast */}
            <div className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-2">
              <span 
                className="font-extrabold block"
                style={{ color: isWhite ? '#0f172a' : '#ffffff' }}
              >
                {firstName}
              </span>
              {lastName ? (
                <span 
                  className="font-black block mt-0.5"
                  style={{ color: isWhite ? '#003492' : '#38bdf8' }}
                >
                  {lastName}
                </span>
              ) : null}
            </div>

            {/* Details row — toggle + bio */}
            <div 
              className="flex items-center gap-5 mt-5 pt-5 border-t"
              style={{
                borderColor: isWhite ? '#e2e8f0' : '#1e293b'
              }}
            >
              {/* Circular CTA with hover pulse */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="group flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 shadow-md"
                style={{
                  backgroundColor: isWhite ? '#003492' : '#1e293b',
                  borderColor: isWhite ? '#003492' : '#475569',
                }}
              >
                <ArrowRight
                  size={20}
                  className="transition-all duration-300 group-hover:-rotate-45"
                  style={{ color: '#ffffff' }}
                />
              </motion.div>

              {/* Bio copy — guaranteed visible high-contrast typography */}
              <div>
                <p 
                  className="text-sm sm:text-base leading-relaxed font-normal"
                  style={{ color: isWhite ? '#1e293b' : '#f1f5f9' }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
