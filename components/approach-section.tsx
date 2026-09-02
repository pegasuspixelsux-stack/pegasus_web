"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const POINTS = [
  "Arquitectura a medida, sin plantillas ni mantenimiento innecesario.",
  "Velocidad extrema y Core Web Vitals en verde desde el primer deploy.",
  "Captación autónoma: cada consulta de alto valor llega directo a su equipo.",
];

export function ApproachSection() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-white/10 px-6 py-24 lg:px-24 lg:py-32">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sky-400">
            Enfoque
          </p>
          <h2 className="text-3xl font-light leading-[1.15] tracking-tight text-white/90 md:text-4xl lg:text-5xl">
            Sistemas comerciales de alta conversión
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-white/60">
            Creamos infraestructura digital enfocada en resultados comerciales
            directos, optimizada para empresas consolidadas que exigen
            rendimiento y efectividad.
          </p>
          <ul className="space-y-3 border-t border-white/15 pt-6">
            {POINTS.map((point) => (
              <li
                key={point}
                className="text-base leading-relaxed text-white/70"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
