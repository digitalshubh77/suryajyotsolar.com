"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";
import { WaveDivider } from "./WaveDivider";
import { AnimatedCounter } from "./AnimatedCounter";
import { SolarBackground } from "./SolarBackground";
import { site } from "@/lib/content";

type ButtonVariant = "primary" | "outline" | "dark";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-[13px] font-semibold tracking-[0.02em] transition-all duration-200";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-sun-500 text-white hover:bg-sun-600",
    outline:
      "border border-navy-900/15 bg-white text-navy-800 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
    dark: "bg-navy-900 text-white hover:bg-navy-800",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-sun-400" : "text-sun-700"
      }`}
    >
      <span className={`h-px w-7 ${light ? "bg-sun-400" : "bg-sun-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "mx-0 text-left"}`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-[28px] font-semibold leading-[1.18] sm:text-[34px] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 text-[15px] leading-relaxed ${
            light ? "text-navy-300" : "text-navy-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28">
      <div className="mesh-navy absolute inset-0" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/78 to-navy-900" />
      <div className="grid-texture absolute inset-0 opacity-20" />
      <SolarBackground compact />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="section-container relative max-w-3xl text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <span className="hero-badge">{eyebrow}</span>
        </motion.div>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[32px] font-semibold tracking-tight text-white sm:text-[46px] sm:leading-[1.12]"
        >
          {title}
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: { opacity: 1, scaleX: 1 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 h-px w-16 origin-center bg-sun-500"
        />
        {description && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-navy-200 sm:text-base"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      <WaveDivider className="absolute bottom-0 left-0 text-background" />
    </section>
  );
}

export function PageCta({
  eyebrow = "Get Started",
  title,
  description,
  primaryLabel = "Book Free Site Visit",
  primaryHref = site.whatsappHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-10 sm:px-12 sm:py-12">
      <SolarBackground compact />
      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-[28px]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-300">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          <Button
            href={site.phoneHref}
            variant="outline"
            className="!border-white/25 !bg-transparent !text-white hover:!bg-white hover:!text-navy-900"
          >
            Call {site.phone}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-6 text-center">
      <AnimatedCounter
        value={value}
        className="block text-[28px] font-semibold text-sun-400 sm:text-[32px]"
      />
      <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
        {label}
      </div>
    </div>
  );
}
