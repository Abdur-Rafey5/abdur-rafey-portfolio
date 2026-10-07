import type { Metadata } from 'next';
import { OLevelsClient } from './client';

export const metadata: Metadata = {
  title: 'O Levels — Abdur Rafey',
  description: 'Cambridge O Levels at Ames Cambridge — 6 A* in Sciences group. Subjects, grades, activities and societies.',
};

export default function OLevelsPage() {
  return <OLevelsClient />;
}
