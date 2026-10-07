'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiActivity, FiCpu } from 'react-icons/fi';
import { Section, SectionHeading } from '@/components/Section';
import { Card } from '@/components/Card';
import { fast } from '@/data/content';

function GradeTag({ grade }: { grade: string }) {
  const isPlaceholder = grade === '[TO FILL]';
  return isPlaceholder ? (
    <span className="placeholder-badge">{grade}</span>
  ) : (
    <span className="text-neon-lime font-bold font-mono">{grade}</span>
  );
}

export function FASTClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-neon-magenta/3 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="font-mono text-neon-magenta text-sm tracking-widest uppercase">// education · stage 3</span>
          <h1 className="mt-2 text-5xl sm:text-6xl font-black gradient-text leading-tight">FAST-NUCES</h1>
          <p className="mt-4 text-gray-400 text-xl max-w-2xl">
            {fast.degree} · {fast.campus} Campus · {fast.period}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/30 bg-neon-magenta/5 text-neon-magenta text-sm font-bold font-mono">
              <FiCpu size={14} /> BS Computer Science
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-mono">
              <FiAward size={14} /> CGPA: <GradeTag grade={fast.cgpa} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Courses */}
      <Section id="courses">
        <SectionHeading label="// coursework" title="Relevant Courses" accent="magenta" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fast.courses.map((c, i) => (
            <motion.div
              key={c.course}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Card glowColor="#ff00ff" tilt={false}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="text-neon-magenta flex-shrink-0" size={14} />
                    <p className="text-sm text-gray-300 font-medium">{c.course}</p>
                  </div>
                  <GradeTag grade={c.grade} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Extracurricular & Societies */}
      <Section id="activities">
        <SectionHeading label="// beyond the books" title="Activities & Societies" accent="cyan" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card glowColor="#00f5ff">
            <div className="flex items-center gap-2 mb-3">
              <FiActivity className="text-neon-cyan" size={18} />
              <h3 className="font-bold text-white">Extracurricular Activities</h3>
            </div>
            <span className="placeholder-badge">{fast.extracurricular}</span>
          </Card>
          <Card glowColor="#8b5cf6">
            <div className="flex items-center gap-2 mb-3">
              <FiUsers className="text-neon-violet" size={18} />
              <h3 className="font-bold text-white">Societies Joined</h3>
            </div>
            <span className="placeholder-badge">{fast.societies}</span>
          </Card>
        </div>
      </Section>
    </>
  );
}
