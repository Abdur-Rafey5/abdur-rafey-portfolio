'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload,
  FiCode, FiCpu, FiZap,
} from 'react-icons/fi';

import { Section, SectionHeading } from '@/components/Section';
import { Card } from '@/components/Card';
import { Timeline } from '@/components/Timeline';
import { SkillGrid } from '@/components/SkillGrid';
import { ProjectCard } from '@/components/ProjectCard';
import { profile, stats, oLevels, aLevels, fast, experiences, projects } from '@/data/content';

// ─── Hero ────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/4 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-violet/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neon-magenta/3 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          Available for opportunities · Lahore, Pakistan
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-none"
        >
          <span className="shimmer-text">Abdur Rafey</span>
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold mb-6 min-h-[2.5rem]"
        >
          <span className="text-gray-400">I build </span>
          <TypeAnimation
            sequence={profile.taglines.flatMap((t) => [t, 2000])}
            repeat={Infinity}
            className="neon-text-cyan"
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="neon-icon group flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-semibold hover:bg-neon-cyan/20 transition-all duration-200"
          >
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="neon-icon flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-neon-violet/50 hover:text-neon-violet transition-all duration-200"
          >
            <FiMail size={16} /> Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center gap-5"
        >
          {[
            { href: profile.github, icon: FiGithub, color: '#00f5ff', label: 'GitHub' },
            { href: profile.linkedin, icon: FiLinkedin, color: '#8b5cf6', label: 'LinkedIn' },
            { href: `mailto:${profile.email}`, icon: FiMail, color: '#ff00ff', label: 'Email' },
          ].map(({ href, icon: Icon, color, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="neon-icon p-3 rounded-xl border border-gray-800 text-gray-400 hover:border-opacity-50 transition-all duration-200"
              style={{ ['--hover-color' as string]: color }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = color;
                (e.currentTarget as HTMLElement).style.borderColor = color + '50';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '';
                (e.currentTarget as HTMLElement).style.borderColor = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs"
        >
          <span className="font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-neon-cyan/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────
function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4 mb-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass-card rounded-xl p-5 text-center"
        >
          <div className="text-3xl font-black gradient-text">
            {inView ? <CountUp end={s.value} duration={2} suffix={s.suffix} /> : '0'}
          </div>
          <div className="text-xs text-gray-500 mt-1 font-mono">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Education Snapshot ──────────────────────────────────────
const educationCards = [
  {
    href: '/olevels',
    icon: FiCode,
    title: 'O Levels',
    subtitle: 'Ames Cambridge',
    highlight: '6 A*',
    color: '#00f5ff',
    desc: 'Cambridge O Levels · Sciences Group',
  },
  {
    href: '/alevels',
    icon: FiZap,
    title: 'A Levels',
    subtitle: 'Roots Ivy, Faisalabad',
    highlight: 'Straight A\'s',
    color: '#8b5cf6',
    desc: 'Physics · Mathematics · Computer Science',
  },
  {
    href: '/fast',
    icon: FiCpu,
    title: 'FAST-NUCES',
    subtitle: 'BS Computer Science',
    highlight: '2022–2026',
    color: '#ff00ff',
    desc: 'AI/ML · Systems · Software Engineering',
  },
];

function EducationSnapshot() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {educationCards.map((ed, i) => (
        <motion.div
          key={ed.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <Link href={ed.href} className="block group">
            <Card glowColor={ed.color} className="h-full cursor-none">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-2 rounded-lg neon-icon"
                  style={{ background: `${ed.color}15`, color: ed.color }}
                >
                  <ed.icon size={20} />
                </div>
                <span
                  className="text-sm font-bold font-mono"
                  style={{ color: ed.color }}
                >
                  {ed.highlight}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg mb-0.5 group-hover:text-neon-cyan transition-colors">{ed.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{ed.subtitle}</p>
              <p className="text-xs text-gray-500">{ed.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-mono" style={{ color: ed.color }}>
                View details <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Contact ─────────────────────────────────────────────────
function ContactSection() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card glowColor="#00f5ff">
        <p className="text-gray-400 mb-6 text-lg">
          Interested in agentic systems, AI automation, or just want to connect?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="neon-icon flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-semibold hover:bg-neon-cyan/20 transition-all duration-200"
          >
            <FiMail /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon flex items-center gap-2 px-6 py-3 rounded-lg border border-neon-violet/30 text-neon-violet font-semibold hover:bg-neon-violet/10 transition-all duration-200"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </Card>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats */}
      <div className="py-4">
        <StatsSection />
      </div>

      {/* About */}
      <Section id="about">
        <SectionHeading label="// about me" title="Who I Am" accent="cyan" />
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          <p>
            I'm a Computer Science graduate from{' '}
            <span className="neon-text-cyan font-semibold">FAST-NUCES Lahore</span>, focused on
            the intersection of{' '}
            <span className="neon-text-violet font-semibold">AI automation</span> and{' '}
            <span className="neon-text-magenta font-semibold">agentic systems</span>. I love
            building systems that connect disparate tools, reason about their environment and act
            autonomously to replace tedious manual workflows.
          </p>
          <p className="mt-4">
            My experience spans DevOps infrastructure, ML-driven observability pipelines, and
            full-stack web applications — all unified by a love for clean, purposeful engineering.
          </p>
        </div>
      </Section>

      {/* Education Snapshot */}
      <Section id="education">
        <SectionHeading label="// education" title="Academic Journey" accent="violet" />
        <EducationSnapshot />
      </Section>

      {/* Experience */}
      <Section id="experience">
        <SectionHeading label="// experience" title="Technical Experience" accent="magenta" />
        <Timeline items={experiences} />
      </Section>

      {/* Leadership & Activities */}
      <Section id="leadership">
        <SectionHeading label="// impact & leadership" title="Leadership & Activities" accent="cyan" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {fast.leadership.map((item, i) => (
            <motion.div
              key={item.organization + item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card glowColor={i % 2 === 0 ? '#00f5ff' : '#8b5cf6'} className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-neon-cyan uppercase tracking-wider block mb-1">{item.organization}</span>
                  <h3 className="font-bold text-white text-base mb-1.5">{item.role}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/5">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies Bar */}
        <div className="glass-card rounded-xl p-5 border border-white/5 max-w-4xl mx-auto">
          <div className="text-xs font-mono text-center text-gray-400 uppercase tracking-widest mb-3">
            // Core Leadership & Soft Skills Developed
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {fast.coreSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-gray-200"
              >
                ✦ {skill}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <SectionHeading label="// projects" title="What I've Built" accent="lime" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionHeading label="// skills" title="Tech Stack" accent="cyan" />
        <SkillGrid />
      </Section>

      {/* Contact */}
      <Section id="contact">
        <SectionHeading label="// contact" title="Get In Touch" accent="violet" />
        <ContactSection />
      </Section>
    </>
  );
}
