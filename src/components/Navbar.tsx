'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '@/data/content';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/olevels', label: 'O Levels' },
  { href: '/alevels', label: 'A Levels' },
  { href: '/fast', label: 'FAST' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-neon-cyan/10 shadow-neon-cyan/5' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 neon-icon" aria-label="Go to home">
          <span className="font-mono text-lg font-bold gradient-text">AR</span>
          <span className="text-sm text-gray-400 group-hover:text-neon-cyan transition-colors duration-200">
            .dev
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 neon-icon ${
                    active
                      ? 'text-neon-cyan'
                      : 'text-gray-400 hover:text-neon-cyan'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-neon-cyan/5 border border-neon-cyan/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon text-gray-400 hover:text-neon-cyan p-2 rounded-lg"
            aria-label="GitHub profile"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon text-gray-400 hover:text-neon-violet p-2 rounded-lg"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="neon-icon text-gray-400 hover:text-neon-magenta p-2 rounded-lg"
            aria-label="Send email"
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden neon-icon text-gray-400 hover:text-neon-cyan p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-b border-neon-cyan/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/20'
                        : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/5'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 mt-3 px-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                  className="neon-icon text-gray-400 hover:text-neon-cyan" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                  className="neon-icon text-gray-400 hover:text-neon-violet" aria-label="LinkedIn">
                  <FiLinkedin size={18} />
                </a>
                <a href={`mailto:${profile.email}`}
                  className="neon-icon text-gray-400 hover:text-neon-magenta" aria-label="Email">
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
