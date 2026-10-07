'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = ['#00f5ff', '#8b5cf6', '#ff00ff', '#39ff14', '#ff0080'];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Spawn particles near cursor occasionally
      if (Math.random() < 0.3) spawnParticle(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Spawn ambient particles
    const spawnInterval = setInterval(() => {
      for (let i = 0; i < 2; i++) {
        spawnParticle(Math.random() * canvas.width, canvas.height + 10, true);
      }
    }, 500);

    function spawnParticle(x: number, y: number, ambient = false) {
      const maxLife = ambient ? 120 + Math.random() * 180 : 40 + Math.random() * 60;
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * (ambient ? 0.5 : 2),
        vy: ambient ? -(0.3 + Math.random() * 0.8) : (Math.random() - 0.5) * 2,
        size: ambient ? 1 + Math.random() * 2 : 2 + Math.random() * 3,
        opacity: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 0,
        maxLife,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.life < p.maxLife);

      for (const p of particles.current) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 120).toString(16).padStart(2, '0');
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(spawnInterval);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
