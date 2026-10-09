'use client';

import { useState, ElementType } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiTypescript, SiHtml5, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiDocker, SiElasticsearch, SiKibana, SiTensorflow, SiJupyter, SiPostman,
} from 'react-icons/si';
import { skillCategories } from '@/data/content';

const ICON_MAP: Record<string, ElementType> = {
  SiPython, SiCplusplus, SiTypescript, SiHtml5, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiDocker, SiElasticsearch, SiKibana, SiTensorflow, SiJupyter, SiPostman,
};

const NEON_COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff', '#39ff14', '#ff0080'];

// Category accent colours (cycling through neon palette)
const CAT_COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff', '#39ff14', '#ff0080'];

interface SkillPillProps {
  iconKey: string;
  label: string;
  color: string;
}

function SkillPill({ iconKey, label, color }: SkillPillProps) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = ICON_MAP[iconKey];
  if (!IconComponent) return null;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-none select-none"
      style={{
        borderColor: hovered ? `${color}70` : `${color}25`,
        background: hovered ? `${color}12` : `${color}06`,
        boxShadow: hovered ? `0 0 18px ${color}30, inset 0 0 10px ${color}08` : `0 0 0px transparent`,
        transition: 'border-color 0.2s, background 0.2s, box-shadow 0.25s',
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{
          color: hovered ? color : '#6b7280',
          filter: hovered
            ? `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color}60)`
            : 'none',
        }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent size={18} aria-hidden="true" />
      </motion.div>

      {/* Label — always visible */}
      <span
        className="text-sm font-semibold font-mono tracking-wide transition-colors duration-200"
        style={{ color: hovered ? '#ffffff' : '#9ca3af' }}
      >
        {label}
      </span>

      {/* Dot indicator */}
      <span
        className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
        style={{
          background: hovered ? color : '#374151',
          boxShadow: hovered ? `0 0 8px ${color}` : 'none',
        }}
      />
    </motion.div>
  );
}

export function SkillGrid() {
  return (
    <div className="space-y-10">
      {skillCategories.map((cat, catIndex) => {
        const catColor = CAT_COLORS[catIndex % CAT_COLORS.length];
        return (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: catColor, boxShadow: `0 0 8px ${catColor}` }}
              />
              <h3
                className="text-xs font-mono font-bold tracking-[0.2em] uppercase"
                style={{ color: catColor }}
              >
                {cat.category}
              </h3>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${catColor}30, transparent)` }} />
            </div>

            {/* Skill Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {cat.skills.map((skill, i) => (
                <SkillPill
                  key={skill.name}
                  iconKey={skill.icon}
                  label={skill.name}
                  color={NEON_COLORS[(catIndex * 3 + i) % NEON_COLORS.length]}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
