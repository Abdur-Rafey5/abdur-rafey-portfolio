'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Card } from '@/components/Card';
import { Project } from '@/data/content';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const GLOW_COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff', '#39ff14', '#ff0080'];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const color = GLOW_COLORS[index % GLOW_COLORS.length];
  const hasGithub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card glowColor={color} className="h-full flex flex-col">
        {/* Accent line */}
        <div className="h-0.5 w-12 rounded-full mb-4" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />

        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded font-mono"
              style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(hasGithub || hasDemo) && (
          <div className="flex items-center gap-3 mt-auto">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-neon-cyan neon-icon transition-colors"
                aria-label={`GitHub for ${project.title}`}
              >
                <FiGithub size={14} /> Code
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-neon-lime neon-icon transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <FiExternalLink size={14} /> Demo
              </a>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}
