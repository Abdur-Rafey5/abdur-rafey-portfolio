'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiActivity, FiMic, FiCheck, FiCpu } from 'react-icons/fi';
import { Section, SectionHeading } from '@/components/Section';
import { Card } from '@/components/Card';
import { oLevels } from '@/data/content';

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
            <FiAward size={14} /> Result: {oLevels.result} (Sciences Group)
          </div>
        </motion.div>
      </section>

      {/* Subjects Grid */}
      <Section id="subjects">
        <SectionHeading label="// curriculum" title="Subjects Studied" accent="cyan" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {oLevels.subjects.map((subject, i) => (
            <motion.div
              key={subject}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card glowColor="#00f5ff" tilt={false}>
                <div className="flex items-center gap-3 py-1">
                  <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                    <FiBookOpen size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold">{subject}</p>
                    <span className="text-[11px] font-mono text-gray-500">Cambridge Curriculum</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-400 font-mono">{oLevels.note}</p>
      </Section>

      {/* Extracurricular Activities */}
      <Section id="extracurricular">
        <SectionHeading label="// beyond the books" title="Extracurricular Activities" accent="violet" />
        <div className="grid md:grid-cols-3 gap-6">
          {oLevels.extracurricular.map((act, i) => {
            const icons = [FiMic, FiActivity, FiCpu];
            const Icon = icons[i % icons.length];
            const colors = ['#00f5ff', '#ff00ff', '#8b5cf6'];
            const color = colors[i % colors.length];

            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card glowColor={color} className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg" style={{ background: `${color}15`, color }}>
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-white text-base">{act.title}</h3>
                    </div>
                    <ul className="space-y-2 mt-4 text-xs text-gray-400 leading-relaxed">
                      {act.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <FiCheck className="flex-shrink-0 mt-0.5" style={{ color }} size={13} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Societies Joined */}
      <Section id="societies">
        <SectionHeading label="// student life" title="Societies Joined" accent="magenta" />
        <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-neon-magenta">
            <FiUsers size={22} />
            <h3 className="font-bold text-lg text-white">Active Society Memberships</h3>
          </div>
          <p className="text-xs text-gray-400 mb-6 max-w-lg mx-auto">
            Participated actively in student-led co-curricular societies, contributing to debate delegations, athletic tournaments, and literary showcases:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {oLevels.societies.map((soc, idx) => {
              const colors = ['#00f5ff', '#ff00ff', '#39ff14'];
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
