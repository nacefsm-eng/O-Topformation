'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  position?: 'left' | 'right';
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
  onCtaClick?: () => void;
}

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = '',
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
              'mb-4 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase',
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
            'relative h-[380px] sm:h-[440px] md:h-[480px] w-full max-w-[340px] shrink-0 overflow-hidden rounded-2xl shadow-2xl border border-zinc-200/50 bg-zinc-900',
            isPositionRight && 'md:order-1'
          )}
        >
          {/* Subtle overlay for contrast */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover object-center duration-500 ease-out hover:scale-105"
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
          {/* Display name — large editorial type */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-zinc-100 max-w-lg">
            <p className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-light tracking-tight text-zinc-900">
              {firstName}
              <br />
              <span className="font-extrabold text-blue-900">{lastName}</span>
            </p>

            {/* Details row — toggle + bio */}
            <div className="flex items-center gap-5 mt-6 pt-5 border-t border-zinc-100">
              {/* Circular CTA with hover pulse */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="group flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-blue-900/20 bg-blue-50/50 hover:bg-blue-900 transition-colors duration-300 shadow-sm"
              >
                <ArrowRight
                  size={20}
                  className="text-blue-900 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white"
                />
              </motion.div>

              {/* Bio copy — restrained body text */}
              <div>
                <p className="text-sm sm:text-base leading-[1.6] text-zinc-600 font-medium">
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
