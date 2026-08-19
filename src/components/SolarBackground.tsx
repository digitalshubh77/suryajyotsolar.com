"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const RAY_COUNT = 16;

const particles = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  left: 4 + ((i * 37) % 92),
  size: 2 + ((i * 5) % 4),
  duration: 7 + ((i * 3) % 6),
  delay: -((i * 1.7) % 8),
}));

/**
 * Animated solar-themed hero background: a slowly rotating sun with rays,
 * a pulsing glowing core, and small energy particles drifting upward —
 * evokes sunlight and generated power rather than abstract color blobs.
 */
export function SolarBackground() {
  const rays = useMemo(
    () =>
      Array.from({ length: RAY_COUNT }).map((_, i) => {
        const angle = (i / RAY_COUNT) * Math.PI * 2;
        return {
          key: i,
          x1: 100 + Math.cos(angle) * 62,
          y1: 100 + Math.sin(angle) * 62,
          x2: 100 + Math.cos(angle) * (i % 2 === 0 ? 96 : 84),
          y2: 100 + Math.sin(angle) * (i % 2 === 0 ? 96 : 84),
        };
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sun assembly, top-right */}
      <div className="absolute -right-28 -top-28 h-[300px] w-[300px] sm:-right-24 sm:-top-24 sm:h-[360px] sm:w-[360px]">
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <g stroke="rgba(212,176,106,0.45)" strokeWidth="2.5" strokeLinecap="round">
            {rays.map((r) => (
              <line key={r.key} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
            ))}
          </g>
        </motion.svg>

        <motion.div
          className="absolute inset-[62px] rounded-full bg-sun-400/60 blur-2xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-[78px] rounded-full bg-gradient-to-br from-sun-200 to-sun-500 opacity-90 blur-[2px]" />
      </div>

      {/* Rising energy particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-sun-300/80 shadow-[0_0_6px_1px_rgba(212,176,106,0.6)]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -520], opacity: [0, 0.9, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Cool ambient counter-glow, bottom-left, keeps the hero from feeling one-note */}
      <motion.div
        className="absolute -bottom-24 -left-16 h-[320px] w-[320px] rounded-full bg-navy-300/25 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
