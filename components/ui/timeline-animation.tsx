'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TimelineContentProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  [key: string]: any;
}

export function TimelineContent({
  children,
  as: Component = 'div',
  className = '',
  animationNum = 0,
  customVariants,
  timelineRef,
  ...props
}: TimelineContentProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={animationNum}
      variants={customVariants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
