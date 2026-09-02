"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const SLIDES = [
  {
    name: "Oceanus",
    character: "Editorial y patrimonial",
    body: "Azul profundo, dorado y tipografía serif. Para marcas consolidadas, desarrollos de referencia y carteras de lujo que comunican trayectoria.",
    src: "/sectores/oceanus_1.png",
    url: "https://oceanus-kappa.vercel.app/",
  },
  {
    name: "Calypso",
    character: "Costero y contemporáneo",
    body: "Luz, aire y alto contraste. Para propuestas frente al mar, obra nueva y públicos internacionales que buscan una estética fresca y directa.",
    src: "/sectores/calypso_1.png",
    url: "https://calypso-six.vercel.app/",
  },
];

export function EditionsSlideshow() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(
      () => setIndex((n) => (n + 1) % SLIDES.length),
      5500,
    );
    return () => clearInterval(id);
  }, [paused, reduce]);

  const slide = SLIDES[index];

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[3/2] lg:aspect-[2/1]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={slide.src}
            alt={`Edición ${slide.name} de la plataforma`}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.name}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
              {slide.character}
            </p>
            <h3 className="mt-2 text-[2rem] font-light leading-[1.1] tracking-tight text-white md:text-5xl">
              {slide.name}
            </h3>
            <p className="mt-3 max-w-lg text-base text-white/80">{slide.body}</p>
            <a
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-sky-400 transition-colors hover:text-sky-300"
            >
              Ver {slide.name}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex gap-2">
          {SLIDES.map((s, n) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setIndex(n)}
              aria-label={`Ver edición ${s.name}`}
              aria-current={n === index}
              className={`h-1.5 rounded-full transition-all ${
                n === index
                  ? "w-8 bg-sky-400"
                  : "w-4 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
