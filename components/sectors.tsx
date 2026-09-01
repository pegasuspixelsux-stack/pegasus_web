"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronRight, Plus } from "lucide-react";
import { SECTORS } from "@/lib/sectors";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Sectors() {
  const reduce = useReducedMotion();
  const [activeSector, setActiveSector] = useState<string | null>(null);

  return (
    <section id="sectores" className="border-b border-white/10">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-[1440px] px-6 pb-16 pt-24 lg:px-24"
      >
        <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
          Verticales Principales
        </h2>
        <p className="text-4xl font-light leading-[1.1] tracking-tight text-white/90 md:text-5xl lg:text-6xl">
          Soluciones específicas diseñadas para el estándar local.
        </p>
      </motion.div>

      <div>
        {SECTORS.map((sector) => {
          const open = activeSector === sector.id;
          return (
            <article
              key={sector.id}
              className="group relative isolate flex min-h-[68vh] flex-col justify-end overflow-hidden border-t border-white/10 md:min-h-[75vh]"
            >
              <Image
                src={sector.image}
                alt=""
                fill
                sizes="100vw"
                style={{ objectPosition: sector.imagePosition ?? "50% 50%" }}
                className={`object-cover transition-opacity duration-700 ease-out ${
                  open ? "opacity-100" : "opacity-90"
                }`}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />

              <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-24">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <h3 className="text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                    {sector.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                    {sector.subtitle}
                  </p>

                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`samples-${sector.id}`}
                    onClick={() => setActiveSector(open ? null : sector.id)}
                    className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-white"
                  >
                    <span>{open ? "Ocultar muestras" : "Ver muestras"}</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`samples-${sector.id}`}
                        initial={
                          reduce ? { opacity: 0 } : { opacity: 0, height: 0 }
                        }
                        animate={
                          reduce
                            ? { opacity: 1 }
                            : { opacity: 1, height: "auto" }
                        }
                        exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-3">
                          {sector.samples.map((sample) => (
                            <div key={sample.title} className="space-y-2">
                              <h4 className="text-sm font-medium text-white">
                                {sample.title}
                              </h4>
                              <p className="text-xs leading-relaxed text-white/60">
                                {sample.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </article>
          );
        })}
      </div>

      <a
        href="#contacto"
        className="group flex items-center justify-center gap-3 border-t border-white/10 px-6 py-14 text-center transition-colors hover:bg-white/[0.03] lg:px-24"
      >
        <Plus className="h-4 w-4 text-white/40 transition-colors group-hover:text-white" />
        <span className="text-sm text-white/50 transition-colors group-hover:text-white md:text-base">
          ¿Busca algo diferente? Desarrollos a medida para otros sectores
          selectos.
        </span>
      </a>
    </section>
  );
}
