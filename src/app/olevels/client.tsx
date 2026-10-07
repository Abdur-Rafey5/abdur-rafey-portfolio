'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiActivity } from 'react-icons/fi';
import { Section, SectionHeading } from '@/components/Section';
import { Card } from '@/components/Card';
import { oLevels } from '@/data/content';

function GradeTag({ grade }: { grade: string }) {
  const isPlaceholder = grade === '[TO FILL]';
  return isPlaceholder ? (
    <span className="placeholder-badge">{grade}</span>
  ) : (
    <span className="text-neon-lime font-bold font-mono text-sm">{grade}</span>
  );
}

export function OLevelsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-cyan/4 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">// education · stage 1</span>
          <h1 className="mt-2 text-5xl sm:text-6xl font-black gradient-text leading-tight">O Levels</h1>
          <p className="mt-4 text-gray-400 text-xl max-w-2xl">
            {oLevels.institution} · {oLevels.qualification} · {oLevels.group} Group
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-lime/30 bg-neon-lime/5 text-neon-lime text-sm font-bold font-mono">
            <FiAward size={14} /> Result: {oLevels.result}
          </div>
        </motion.div>
      </section>

      {/* Subjects Grid */}
      <Section id="subjects">
        <SectionHeading label="// subjects" title="Subjects & Grades" accent="cyan" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {oLevels.subjects.map((s, i) => (
            <motion.div
              key={s.subject}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Card glowColor="#00f5ff" tilt={false}>
                <div className="flex items-center gap-2 mb-2">
                  <FiBookOpen className="text-neon-cyan" size={14} />
                  <p className="text-sm text-gray-300 font-medium">{s.subject}</p>
                </div>
                <GradeTag grade={s.grade} />
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-600 font-mono">{oLevels.note}</p>
      </Section>

      {/* Extracurricular & Societies */}
      <Section id="activities">
        <SectionHeading label="// beyond the books" title="Activities & Societies" accent="violet" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card glowColor="#8b5cf6">
            <div className="flex items-center gap-2 mb-3">
              <FiActivity className="text-neon-violet" size={18} />
              <h3 className="font-bold text-white">Extracurricular Activities</h3>
            </div>
            <span className="text-xs text-neon-cyan font-mono bg-neon-cyan/10 px-3 py-1.5 rounded-lg border border-neon-cyan/20 inline-block">
              {oLevels.extracurricular}
            </span>
          </Card>
          <Card glowColor="#ff00ff">
            <div className="flex items-center gap-2 mb-3">
              <FiUsers className="text-neon-magenta" size={18} />
              <h3 className="font-bold text-white">Societies Joined</h3>
            </div>
            <span className="placeholder-badge">{oLevels.societies}</span>
          </Card>
        </div>
      </Section>
    </>
  );
}
