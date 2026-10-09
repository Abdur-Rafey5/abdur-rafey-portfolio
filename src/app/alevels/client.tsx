'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiActivity, FiCheckCircle, FiCheck, FiTrendingUp } from 'react-icons/fi';
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
            <FiAward size={14} /> Result: {aLevels.result} (Sciences Group)
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

      {/* Extracurricular Achievements & Leadership */}
      <Section id="activities">
        <SectionHeading label="// competitions & leadership" title="Extracurricular Achievements" accent="magenta" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Business Idea Challenge Winner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card glowColor="#39ff14" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-neon-lime uppercase tracking-wider">Competition · 1st Place</span>
                  <FiTrendingUp className="text-neon-lime" size={18} />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Won Business Idea Challenge</h3>
                <p className="text-xs text-neon-lime font-mono mb-3">Roots Ivy International School</p>
                <ul className="space-y-2 text-xs text-gray-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-lime flex-shrink-0 mt-0.5" size={13} />
                    <span>Participated in the competitive Business Idea Challenge at Roots Ivy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-lime flex-shrink-0 mt-0.5" size={13} />
                    <span>Presented full business model, product viability, and strategic vision to a distinguished judging panel.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-lime flex-shrink-0 mt-0.5" size={13} />
                    <span>Won the challenge, demonstrating entrepreneurial thinking, creativity, problem-solving, and persuasive presentation skills.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/5">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-neon-lime/10 text-neon-lime font-mono">#Entrepreneurship</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">#ProblemSolving</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">#Pitching</span>
              </div>
            </Card>
          </motion.div>

          {/* Leadership Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card glowColor="#ff00ff" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-neon-magenta uppercase tracking-wider">Leadership · Roots Ivy</span>
                  <FiUsers className="text-neon-magenta" size={18} />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Head of Social Events — IYLO</h3>
                <p className="text-xs text-neon-magenta font-mono mb-3">Student Body Leadership</p>
                <ul className="space-y-2 text-xs text-gray-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-magenta flex-shrink-0 mt-0.5" size={13} />
                    <span>Directed large-scale campus social gatherings and cultural functions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-magenta flex-shrink-0 mt-0.5" size={13} />
                    <span>Led delegation logistics and preparations for competitive Model United Nations (IYLO MUN).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiCheck className="text-neon-magenta flex-shrink-0 mt-0.5" size={13} />
                    <span>Coordinated cross-functional student teams and executive schedules.</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/5">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-neon-magenta/10 text-neon-magenta font-mono">#EventManagement</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">#MUN</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">#Leadership</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Societies Joined */}
      <Section id="societies">
        <SectionHeading label="// student life" title="Societies Joined" accent="cyan" />
        <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-neon-cyan">
            <FiActivity size={22} />
            <h3 className="font-bold text-lg text-white">Societies & Clubs</h3>
          </div>
          <p className="text-xs text-gray-400 mb-6 max-w-lg mx-auto">
            Actively engaged in creative, athletic, and exploratory campus societies at Roots Ivy:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {aLevels.societies.map((soc, idx) => {
              const colors = ['#00f5ff', '#ff00ff', '#8b5cf6', '#39ff14'];
              const color = colors[idx % colors.length];
              return (
                <motion.div
                  key={soc}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-xl border text-sm font-semibold tracking-wide"
                  style={{
                    borderColor: `${color}40`,
                    background: `${color}08`,
                    color: '#ffffff',
                    boxShadow: `0 0 15px ${color}15`,
                  }}
                >
                  <span style={{ color }}>✦</span> {soc}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
