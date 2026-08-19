"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroHeadline() {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-4 max-w-xl text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[40px] lg:text-[46px]"
    >
      <motion.span variants={item} className="block">
        Power Your Life
      </motion.span>
      <motion.span
        variants={item}
        className="mt-4 block bg-[linear-gradient(110deg,#f5e8c8_0%,#c9963a_35%,#fff6d8_50%,#b8862a_75%,#e8b84a_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-headline-shimmer"
      >
        With the Sun
      </motion.span>
    </motion.h1>
  );
}
