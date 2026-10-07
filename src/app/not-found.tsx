import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Abdur Rafey',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="font-mono text-8xl font-black gradient-text mb-4">404</div>
      <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-semibold hover:bg-neon-cyan/20 transition-all duration-200"
      >
        Go Home
      </a>
    </div>
  );
}
