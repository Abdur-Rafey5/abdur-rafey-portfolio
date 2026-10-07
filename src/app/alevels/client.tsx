'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiActivity, FiCheckCircle } from 'react-icons/fi';
import { Section, SectionHeading } from '@/components/Section';
import { Card } from '@/components/Card';
import { aLevels } from '@/data/content';

export function ALevelsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-neon-violet/4 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="font-mono text-neon-violet text-sm tracking-widest uppercase">// education · stage 2</span>
          <h1 className="mt-2 text-5xl sm:text-6xl font-black gradient-text leading-tight">A Levels</h1>
          <p className="mt-4 text-gray-400 text-xl max-w-2xl">
            {aLevels.institution} · {aLevels.location} · {aLevels.period}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-violet/30 bg-neon-violet/5 text-neon-violet text-sm font-bold font-mono">
            <FiAward size={14} /> Result: {aLevels.result}
          </div>
        </motion.div>
      </section>

      {/* Subjects */}
      <Section id="subjects">
        <SectionHeading label="// subjects" title="Subjects & Grades" accent="violet" />
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {aLevels.subjects.map((s, i) => (
            <motion.div
              key={s.subject}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card glowColor="#8b5cf6">
                <div className="flex items-center gap-2 mb-3">
                  <FiBookOpen className="text-neon-violet" size={14} />
                  <p className="text-sm text-gray-300 font-medium">{s.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-neon-lime" size={16} />
                  <span className="text-neon-lime font-bold font-mono text-lg">{s.grade}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Extracurricular & Societies */}
      <Section id="activities">
        <SectionHeading label="// beyond the books" title="Activities & Societies" accent="magenta" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card glowColor="#ff00ff">
            <div className="flex items-center gap-2 mb-3">
              <FiActivity className="text-neon-magenta" size={18} />
              <h3 className="font-bold text-white">Extracurricular Activities</h3>
            </div>
            <span className="placeholder-badge">{aLevels.extracurricular}</span>
          </Card>
          <Card glowColor="#8b5cf6">
            <div className="flex items-center gap-2 mb-3">
              <FiUsers className="text-neon-violet" size={18} />
              <h3 className="font-bold text-white">Societies Joined</h3>
            </div>
            <span className="placeholder-badge">{aLevels.societies}</span>
          </Card>
        </div>
      </Section>
    </>
  );
}
