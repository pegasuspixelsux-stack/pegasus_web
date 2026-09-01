"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col border-b border-white/10 pb-12 pt-28 lg:pt-32"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-6 lg:px-24">
        <div className="my-auto max-w-5xl py-16">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            Infraestructura digital y sistemas de captación autónoma para los
            referentes del mercado en Punta del Este.
          </motion.h1>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-end"
        >
          <p className="max-w-md">
            Ingeniería de software, velocidad extrema y conversión directa sin
            fricción visual.
          </p>
          <a
            href="#sectores"
            className="flex items-center gap-2 text-white transition-opacity hover:opacity-70"
          >
            <span>Explorar sectores</span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
