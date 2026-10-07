'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { Experience } from '@/data/content';

interface TimelineProps {
  items: Experience[];
}

const ACCENT_COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff'];

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px timeline-line opacity-30" />

      <div className="space-y-10">
        {items.map((item, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Dot */}
              <div
                className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: color,
                  boxShadow: `0 0 10px ${color}60, 0 0 20px ${color}30`,
                  background: `${color}15`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: color }}
                />
              </div>

              {/* Card */}
              <div
                className="glass-card rounded-xl p-6 hover:border-opacity-40 transition-all duration-300"
                style={{ borderColor: `${color}20` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="font-semibold text-sm" style={{ color }}>{item.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                      <FiCalendar size={12} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FiMapPin size={12} /> {item.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
