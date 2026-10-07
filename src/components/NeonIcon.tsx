'use client';

import { useState, ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiTypescript, SiHtml5, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiDocker, SiElasticsearch, SiKibana, SiTensorflow, SiJupyter, SiPostman,
} from 'react-icons/si';

const ICON_MAP: Record<string, ElementType> = {
  SiPython, SiCplusplus, SiTypescript, SiHtml5, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiDocker, SiElasticsearch, SiKibana, SiTensorflow, SiJupyter, SiPostman,
};

const NEON_COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff', '#39ff14', '#ff0080'];

interface NeonIconProps {
  iconKey: string;
  label: string;
  size?: number;
  colorIndex?: number;
}

export function NeonIcon({ iconKey, label, size = 28, colorIndex = 0 }: NeonIconProps) {
  const [wiggling, setWiggling] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const IconComponent = ICON_MAP[iconKey];
  const color = NEON_COLORS[colorIndex % NEON_COLORS.length];

  if (!IconComponent) return null;

  const handleHoverStart = () => {
    setWiggling(true);
    setShowTooltip(true);
  };
  const handleHoverEnd = () => {
    setWiggling(false);
    setShowTooltip(false);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center gap-2 cursor-none"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => { setWiggling(true); setTimeout(() => setWiggling(false), 400); }}
    >
      <motion.div
        animate={
          wiggling
            ? {
                rotate: [0, -10, 10, -8, 8, -4, 4, 0],
                scale: [1, 1.18, 1.18, 1.18, 1.18, 1.18, 1.18, 1.1],
              }
            : { rotate: 0, scale: 1 }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          filter: wiggling ? `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color}80)` : 'none',
          color: wiggling ? color : '#6b7280',
          transition: 'color 0.2s, filter 0.2s',
        }}
        whileTap={{ scale: 0.85 }}
      >
        <IconComponent size={size} aria-hidden="true" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-7 text-xs font-mono whitespace-nowrap px-2 py-0.5 rounded"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}40`,
              color,
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
