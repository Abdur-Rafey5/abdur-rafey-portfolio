'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ id, children, className = '', delay = 0 }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  accent?: 'cyan' | 'violet' | 'magenta' | 'lime';
}

export function SectionHeading({ label, title, subtitle, accent = 'cyan' }: SectionHeadingProps) {
  const accentClasses = {
    cyan: 'text-neon-cyan',
    violet: 'text-neon-violet',
    magenta: 'text-neon-magenta',
    lime: 'text-neon-lime',
  };
  return (
    <div className="mb-12 text-center">
      <span className={`font-mono text-sm font-semibold tracking-widest uppercase ${accentClasses[accent]}`}>
        {label}
      </span>
      <h2 className="mt-2 text-4xl sm:text-5xl font-bold gradient-text leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="section-divider mt-6 max-w-xs mx-auto" />
    </div>
  );
}
