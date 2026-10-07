'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { profile } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon-cyan/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-xl font-bold gradient-text">Abdur Rafey</span>
            <span className="text-xs text-gray-500 font-mono">AI Automation · Agentic Systems</span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {[
                { href: '/', label: 'Home' },
                { href: '/olevels', label: 'O Levels' },
                { href: '/alevels', label: 'A Levels' },
                { href: '/fast', label: 'FAST' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-200 neon-icon"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
              className="neon-icon text-gray-400 hover:text-neon-cyan p-2" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              className="neon-icon text-gray-400 hover:text-neon-violet p-2" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`}
              className="neon-icon text-gray-400 hover:text-neon-magenta p-2" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-8 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} Abdur Rafey. Built with Next.js & Tailwind CSS.
          </span>
          <span className="flex items-center gap-1">
            Made with <FiHeart className="text-neon-magenta animate-pulse-neon" size={12} /> in Lahore, Pakistan
          </span>
        </div>
      </div>
    </footer>
  );
}
