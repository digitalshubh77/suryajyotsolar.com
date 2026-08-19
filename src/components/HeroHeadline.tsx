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
      className="mt-6 max-w-xl text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[46px] lg:text-[54px]"
    >
      <motion.span variants={item} className="block">
        Power Your Life
      </motion.span>
      <motion.span variants={item} className="block text-sun-400">
        With the Sun
      </motion.span>
    </motion.h1>
  );
}
