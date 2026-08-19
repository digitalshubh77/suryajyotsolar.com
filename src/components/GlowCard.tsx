"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
  dark = false,
  ring = true,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  ring?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`tilt-card spotlight ${dark ? "spotlight-dark" : ""} ${
        ring ? "gradient-ring" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
