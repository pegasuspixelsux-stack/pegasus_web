"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

/** Scroll-into-view fade/rise used by every section on the marketing pages. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  amount = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
