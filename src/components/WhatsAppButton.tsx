"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1f8b4c] text-white shadow-[0_12px_28px_-8px_rgba(31,139,76,0.55)]"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </motion.a>
  );
}
