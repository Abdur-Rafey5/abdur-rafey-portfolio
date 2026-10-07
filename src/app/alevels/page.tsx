import type { Metadata } from 'next';
import { ALevelsClient } from './client';

export const metadata: Metadata = {
  title: 'A Levels — Abdur Rafey',
  description: 'Cambridge A Levels at Roots Ivy, Faisalabad — Straight A\'s in Physics, Mathematics and Computer Science.',
};

export default function ALevelsPage() {
  return <ALevelsClient />;
}
