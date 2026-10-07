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

      {/* Leadership & Activities */}
      <Section id="leadership">
        <SectionHeading label="// student organizations" title="Leadership & Activities" accent="cyan" />
        <div className="grid md:grid-cols-2 gap-6">
          {fast.leadership.map((item, i) => (
            <motion.div
              key={item.organization + item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card glowColor={i % 2 === 0 ? '#00f5ff' : '#8b5cf6'} className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">{item.organization}</span>
                    <FiAward className="text-neon-violet" size={16} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.role}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Core Skills Developed */}
      <Section id="skills-developed">
        <SectionHeading label="// competencies" title="Core Skills Developed" accent="lime" />
        <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/10">
          <p className="text-sm text-gray-400 mb-6 text-center max-w-2xl mx-auto">
            Practical executive, interpersonal, and managerial competencies honed through leading student bodies, national delegations, and university initiatives:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {fast.coreSkills.map((skill, idx) => {
              const colors = ['#00f5ff', '#ff00ff', '#8b5cf6', '#39ff14'];
              const color = colors[idx % colors.length];
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-xl border text-sm font-semibold tracking-wide transition-all shadow-sm"
                  style={{
                    borderColor: `${color}40`,
                    background: `${color}08`,
                    color: '#ffffff',
                    boxShadow: `0 0 12px ${color}15`,
                  }}
                >
                  <span style={{ color }}>✦</span> {skill}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
