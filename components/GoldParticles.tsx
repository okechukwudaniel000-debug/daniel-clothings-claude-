"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  dAlpha: number;
}

interface GoldParticlesProps {
  count?: number;
}

export default function GoldParticles({ count = 55 }: GoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-0.22, 0.22),
        vy: rand(-0.4, -0.1),
        r: rand(1, 2.5),
        alpha: rand(0.1, 0.7),
        dAlpha: rand(0.003, 0.008) * (Math.random() > 0.5 ? 1 : -1),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.dAlpha;

        if (p.alpha <= 0.05 || p.alpha >= 0.75) p.dAlpha *= -1;
        if (p.y < -10) p.y = H + 10;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grd.addColorStop(0, "#F5D67B");
        grd.addColorStop(1, "#D4AF37");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#D4AF37";
        ctx.fill();
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    init();
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
