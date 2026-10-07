import type { Metadata } from 'next';
import { FASTClient } from './client';

export const metadata: Metadata = {
  title: 'FAST-NUCES — Abdur Rafey',
  description: 'BS Computer Science at FAST-NUCES Lahore (2022–2026). Courses, grades, extracurriculars and societies.',
};

export default function FASTPage() {
  return <FASTClient />;
}
