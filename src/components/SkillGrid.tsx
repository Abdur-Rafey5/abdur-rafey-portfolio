'use client';

import { motion } from 'framer-motion';
import { NeonIcon } from '@/components/NeonIcon';
import { skillCategories } from '@/data/content';

export function SkillGrid() {
  return (
    <div className="space-y-10">
      {skillCategories.map((cat, catIndex) => (
        <motion.div
          key={cat.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
        >
          <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-5">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-8">
            {cat.skills.map((skill, i) => (
              <div key={skill.name} className="flex flex-col items-center gap-5 pb-3">
                <NeonIcon
                  iconKey={skill.icon}
                  label={skill.name}
                  size={32}
                  colorIndex={(catIndex * 3 + i) % 5}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
