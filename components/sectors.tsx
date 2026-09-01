"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Sparkle } from "lucide-react";
import { SECTORS } from "@/lib/sectors";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Sectors() {
  const reduce = useReducedMotion();

  return (
    <section id="sectores" className="border-b border-white/10">
      <div className="bg-white text-black">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-[1440px] px-6 pb-16 pt-24 lg:px-24"
        >
          <h2 className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-600">
            <Sparkle className="h-3.5 w-3.5 fill-current" />
            Verticales Principales
          </h2>
          <p className="text-4xl font-light leading-[1.1] tracking-tight text-black md:text-5xl lg:text-6xl">
            Soluciones específicas diseñadas
            <br />
            para el estándar local.
          </p>
        </motion.div>
      </div>

      <div>
        {SECTORS.map((sector) => {
          const Icon = sector.icon;
          return (
          <article
            key={sector.id}
            className="relative isolate flex min-h-[68vh] flex-col justify-end overflow-hidden border-t border-white/10 md:min-h-[75vh]"
          >
            <Image
              src={sector.image}
              alt=""
              fill
              sizes="100vw"
              style={{ objectPosition: sector.imagePosition ?? "50% 50%" }}
              className="object-cover opacity-80"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"
            />

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-28 pt-16 lg:px-24">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="lg:max-w-[33%]">
                  <h3 className="flex items-center gap-3 text-2xl font-light leading-[1.15] tracking-tight md:text-3xl lg:whitespace-nowrap lg:text-4xl">
                    <Icon
                      className="h-7 w-7 shrink-0 text-sky-400"
                      strokeWidth={1.5}
                    />
                    {sector.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-sky-400 md:text-base">
                    {sector.subtitle}
                  </p>

                  {sector.body && (
                    <p className="mt-8 border-t border-white/15 pt-8 text-sm leading-relaxed text-white/70">
                      {sector.body}
                    </p>
                  )}
                </div>

                <div className="mt-8 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-3">
                  {sector.samples.map((sample, i) => (
                    <motion.div
                      key={sample.title}
                      className="space-y-2"
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                    >
                      <h4 className="text-sm font-medium text-sky-400">
                        {sample.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-white/60">
                        {sample.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <Link
              href={`/${sector.slug}`}
              aria-label={`Ver ${sector.title}`}
              className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95 lg:bottom-10 lg:right-10"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </article>
          );
        })}
      </div>

      <motion.a
        href="#contacto"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="group flex items-center justify-center gap-3 border-t border-white/10 px-6 py-14 text-center transition-colors hover:bg-white/[0.03] lg:px-24"
      >
        <Plus className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:rotate-90 group-hover:text-white" />
        <span className="text-sm text-white/50 transition-colors group-hover:text-white md:text-base">
          ¿Busca algo diferente? Desarrollos a medida para otros sectores
          selectos.
        </span>
      </motion.a>
    </section>
  );
}
