'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsHovering(
        el?.closest('a, button, [role="button"], .neon-icon, input, textarea') !== null
      );
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkHover);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isClicking ? 0.4 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.5 }}
        style={{
          border: '1px solid rgba(0,245,255,0.8)',
          boxShadow: '0 0 12px rgba(0,245,255,0.5), inset 0 0 8px rgba(0,245,255,0.1)',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-neon-cyan"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{
          width: 8,
          height: 8,
          boxShadow: '0 0 10px #00f5ff, 0 0 20px rgba(0,245,255,0.6)',
        }}
      />
    </>
  );
}
