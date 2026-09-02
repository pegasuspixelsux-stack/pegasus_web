"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  [{ text: "Infraestructura digital", accent: true }],
  [{ text: "de adquisición y conversión automatizada." }],
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden border-b border-white/10 pb-12 pt-28 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_55%,rgba(56,189,248,0.18)_0%,rgba(56,189,248,0.06)_38%,transparent_72%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-6 lg:px-24">
        <div className="my-auto max-w-5xl py-16">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-sky-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            Estándares globales.
          </motion.p>
          <h1 className="text-pretty text-[2.25rem] font-light leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-h1">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={i}
                className="block pb-[0.05em]"
                initial={reduce ? false : { opacity: 0, y: "0.3em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE }}
              >
                {line.map((seg, j) => (
                  <span key={j} className={seg.accent ? "text-sky-400" : undefined}>
                    {seg.text}
                  </span>
                ))}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="flex flex-col items-start gap-6 text-base text-muted md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-pretty">
            Ingeniería y arquitectura de aplicaciones, velocidad extrema y
            conversión directa sin fricción visual.
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
