"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
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
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={container}
      className="mt-5 text-[42px] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[62px]"
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
