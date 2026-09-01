"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="flex min-h-[50vh] items-center border-b border-white/10 bg-surface px-6 py-28 lg:px-24 lg:py-32"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto max-w-3xl space-y-6 text-center"
      >
        <h2 className="text-xs uppercase tracking-[0.2em] text-white/40">
          Quiénes Somos
        </h2>
        <p className="text-4xl font-light leading-[1.1] tracking-tight text-white/90 md:text-5xl lg:text-6xl">
          Ingeniería de software y diseño de alto rendimiento con base en
          Maldonado.
        </p>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          Pegasus Pixels es un estudio de ingeniería de software y diseño de
          alta gama con base en Maldonado, especializado en crear
          infraestructura digital, velocidad extrema y sistemas de captación
          autónoma. No utilizamos plantillas genéricas ni mantenimiento
          innecesario; desarrollamos tecnología a medida que elimina la
          fricción visual y convierte el tráfico de alto valor en operaciones
          concretas.
        </p>
      </motion.div>
    </section>
  );
}
