"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type Slide = {
  /** Headline shown in the overlay. */
  title: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  body?: string;
  src: string;
  /** External link; renders a "Ver <title>" affordance when set. */
  href?: string;
};

/**
 * Cross-fading image slideshow with a two-column overlay row pinned to the
 * bottom edge (info left, link + counter right). Auto-advances, pauses on
 * hover, respects `prefers-reduced-motion`, and is theme-aware.
 */
export function Slideshow({
  slides,
  aspect = "aspect-[4/5] sm:aspect-[3/2] lg:aspect-[2/1]",
  interval = 5500,
  className,
}: {
  slides: Slide[];
  aspect?: string;
  interval?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce || slides.length < 2) return;
    const id = setInterval(
      () => setIndex((n) => (n + 1) % slides.length),
      interval,
    );
    return () => clearInterval(id);
  }, [paused, reduce, slides.length, interval]);

  const slide = slides[index];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-foreground/10 ${aspect} ${
        className ?? ""
      }`}
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
            alt={slide.title}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/65 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-6 pb-4 pt-16 sm:px-8 lg:px-10 lg:pb-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            className="min-w-0"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {slide.eyebrow ? (
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {slide.eyebrow}
              </p>
            ) : null}
            <h3 className="mt-1.5 text-[1.75rem] font-normal leading-[1.1] tracking-tight text-foreground md:text-4xl">
              {slide.title}
            </h3>
            {slide.body ? (
              <p className="mt-2 hidden max-w-md text-sm text-foreground/80 sm:block">
                {slide.body}
              </p>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="flex shrink-0 flex-col items-end gap-4">
          {slide.href ? (
            <a
              href={slide.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-hover"
            >
              Ver {slide.title}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {slides.length > 1 ? (
            <div className="flex gap-2">
              {slides.map((s, n) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setIndex(n)}
                  aria-label={`Ver ${s.title}`}
                  aria-current={n === index}
                  className={`h-1.5 rounded-full transition-all ${
                    n === index
                      ? "w-8 bg-accent"
                      : "w-4 bg-foreground/25 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
