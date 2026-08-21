"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <motion.a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.55)]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </motion.a>

      <motion.a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.65 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-white shadow-[0_12px_28px_-8px_rgba(12,72,120,0.55)]"
      >
        <PhoneIcon className="h-5 w-5" />
      </motion.a>
    </div>
  );
}
