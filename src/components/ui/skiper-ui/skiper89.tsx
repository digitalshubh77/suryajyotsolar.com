"use client";

import NumberFlow from "@number-flow/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Skiper 89 Scroll Progress — trimmed to the floating dial only
 * (source demo also included a lorem-ipsum scroll section, removed here).
 * Free to use and modify. Attribution to Skiper UI required for the free tier.
 * https://skiper-ui.com/v1/skiper89
 */
const Skiper89 = () => {
  const { scrollYProgress } = useScroll();
  const [progressPercent, setProgressPercent] = useState(0);

  const clampedProgress = useTransform(scrollYProgress, (value) =>
    Math.min(Math.max(value, 0), 1),
  );
  const progressAsPercent = useTransform(clampedProgress, (value) =>
    Math.round(value * 100),
  );

  useMotionValueEvent(progressAsPercent, "change", (value) => {
    setProgressPercent(value);
  });

  const svgRadius = 18;
  const circumference = 2 * Math.PI * svgRadius;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.15}
      className={cn(
        "group fixed bottom-6 left-4 z-40 hidden cursor-grab items-center gap-1 active:cursor-grabbing sm:flex lg:left-6",
      )}
    >
      <NumberFlow
        value={progressPercent}
        className={cn(
          "absolute top-1 flex h-8 -translate-y-full items-center justify-center px-4 text-xs font-medium tabular-nums text-navy-900/50 opacity-0 group-hover:opacity-100",
        )}
        suffix="%"
      />
      <div className="flex size-12 items-center justify-center rounded-2xl border border-navy-900/10 bg-white/70 text-sun-600 shadow-card backdrop-blur">
        <svg className={cn("size-10")} viewBox="0 0 48 48" role="presentation">
          <circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            className={cn("opacity-20")}
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            style={{
              pathLength: clampedProgress,
              rotate: -90,
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export { Skiper89 };