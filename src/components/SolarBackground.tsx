"use client";

import { useReducedMotion } from "framer-motion";

/**
 * CSS-driven cinematic solar atmosphere. Framer is only used for
 * reduced-motion detection so the hero stays smooth and professional.
 */
export function SolarBackground({
  compact = false,
}: {
  compact?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const motionOff = reduceMotion ? "motion-off" : "";

  return (
    <div
      className={`hero-atmosphere pointer-events-none absolute inset-0 overflow-hidden ${motionOff}`}
      aria-hidden
    >
      <div className="hero-grid-drift absolute inset-0" />
      <div className="hero-stars absolute inset-0" />
      <div className="hero-wash absolute inset-x-0 bottom-0 h-1/2" />

      <div className="hero-orb hero-orb-gold absolute -left-24 top-1/4 hidden h-[420px] w-[420px] lg:block" />
      <div className="hero-orb hero-orb-cool absolute -bottom-16 right-1/4 h-[300px] w-[300px]" />
      <div className="hero-orb hero-orb-mid absolute left-1/3 top-0 h-[220px] w-[220px]" />

      <div
        className={`hero-sun absolute ${
          compact
            ? "-right-20 -top-24 h-[280px] w-[280px]"
            : "right-[-18%] top-[-8%] h-[280px] w-[280px] sm:right-[-10%] sm:h-[340px] sm:w-[340px] lg:right-[2%] lg:top-[6%] lg:h-[460px] lg:w-[460px]"
        }`}
      >
        <div className="hero-sun-halo" />
        <div className="hero-sun-rays" />
        <div className="hero-sun-core" />
        <div className="hero-sun-disc" />
      </div>

      <div className="hero-shafts absolute inset-0" />
      <div className="hero-scan absolute inset-0" />

      {!compact && (
        <>
          <span className="hero-mote" style={{ left: "8%", animationDelay: "0s", animationDuration: "10s" }} />
          <span className="hero-mote" style={{ left: "18%", animationDelay: "1.6s", animationDuration: "12s" }} />
          <span className="hero-mote" style={{ left: "29%", animationDelay: "3.1s", animationDuration: "9s" }} />
          <span className="hero-mote" style={{ left: "41%", animationDelay: "0.7s", animationDuration: "13s" }} />
          <span className="hero-mote" style={{ left: "52%", animationDelay: "4.2s", animationDuration: "11s" }} />
          <span className="hero-mote" style={{ left: "63%", animationDelay: "2.4s", animationDuration: "14s" }} />
          <span className="hero-mote" style={{ left: "74%", animationDelay: "5s", animationDuration: "10s" }} />
          <span className="hero-mote" style={{ left: "85%", animationDelay: "1.1s", animationDuration: "12.5s" }} />
          <span className="hero-mote" style={{ left: "93%", animationDelay: "3.8s", animationDuration: "9.5s" }} />
        </>
      )}
    </div>
  );
}
