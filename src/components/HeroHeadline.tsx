"use client";

import { motion, type Variants } from "framer-motion";
import { site } from "@/lib/content";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroHeadline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-6 w-full text-left"
    >
      <motion.p
        variants={item}
        className="text-left font-display text-[13px] font-semibold uppercase tracking-[0.28em] text-sun-400 sm:text-sm"
      >
        {site.name}
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-3 max-w-3xl text-left text-[36px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[56px]"
      >
        <span className="block text-left">Power Your Life</span>
        <span className="mt-1 block text-left bg-[linear-gradient(110deg,#fcfc00_0%,#fca818_35%,#fff9b0_50%,#00a830_78%,#0c4878_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-headline-shimmer">
          With the Sun
        </span>
      </motion.h1>
    </motion.div>
  );
}
