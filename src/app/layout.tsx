import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abdur Rafey — AI Automation & Agentic Systems',
  description:
    'Portfolio of Abdur Rafey, a Computer Science graduate from FAST-NUCES Lahore specialised in AI automation, agentic systems, DevOps and full-stack development.',
  keywords: ['AI Automation', 'Agentic AI', 'DevOps', 'Full Stack Developer', 'FAST-NUCES', 'Lahore'],
  authors: [{ name: 'Abdur Rafey', url: 'https://linkedin.com/in/abdur-rafey-malik' }],
  openGraph: {
    title: 'Abdur Rafey — AI Automation & Agentic Systems',
    description: 'Building agentic systems that replace manual processes with intelligent autonomy.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-dark-900 text-white font-sans antialiased overflow-x-hidden">
        <CustomCursor />
        <ParticleBackground />
        {/* CRT scan-line overlay */}
        <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
          <div className="absolute inset-0 bg-neon-grid bg-[size:50px_50px] opacity-100" />
        </div>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
