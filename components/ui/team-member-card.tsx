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
 * Editorial-style team member card with flawless contrast
 * in both Dark Mode and Light Mode.
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
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`.trim();
  const isPositionRight = position === 'right';

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
              'mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-slate-400',
              isPositionRight && 'text-right'
            )}
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
            'team-member-portrait relative h-[380px] sm:h-[440px] md:h-[480px] w-full max-w-[340px] shrink-0 overflow-hidden rounded-2xl shadow-2xl border-2 border-slate-700/60 bg-slate-900',
            isPositionRight && 'md:order-1'
          )}
        >
          {/* Subtle overlay for contrast */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
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
          <div className="team-member-info-card p-6 sm:p-8 rounded-2xl max-w-lg transition-all w-full">
            {roleTitle ? (
              <span className="team-member-badge text-xs font-extrabold uppercase tracking-widest inline-block mb-3 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-300">
                {roleTitle}
              </span>
            ) : null}

            {/* Display full name with absolute high contrast */}
            <div className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight mb-2">
              <span className="team-member-name-first font-extrabold block">
                {firstName}
              </span>
              {lastName ? (
                <span className="team-member-name-last font-black block mt-0.5">
                  {lastName}
                </span>
              ) : null}
            </div>

            {/* Details row — toggle + bio */}
            <div className="team-member-divider flex items-center gap-5 mt-5 pt-5 border-t border-slate-700/60">
              {/* Circular CTA with hover pulse */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="team-member-btn group flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 shadow-md"
              >
                <ArrowRight
                  size={20}
                  className="transition-all duration-300 group-hover:-rotate-45"
                />
              </motion.div>

              {/* Bio copy — guaranteed visible high-contrast typography */}
              <div>
                <p className="team-member-desc text-sm sm:text-base leading-relaxed font-normal">
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
