'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: string;
}

export function Card({ children, className = '', tilt = true, glowColor = '#00f5ff' }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className={`glass-card rounded-xl p-6 transition-all duration-300 ${className}`}
      style={tilt ? { rotateX, rotateY, transformPerspective: 800 } : {}}
      animate={{
        boxShadow: isHovered
          ? `0 0 30px ${glowColor}20, 0 0 60px ${glowColor}10, 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${glowColor}30`
          : `0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,245,255,0.08)`,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
