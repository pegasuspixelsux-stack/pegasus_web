"use client";

import {
  ArrowRight,
  Clock,
  Gauge,
  Heart,
  MessagesSquare,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { AgenteData } from "@/lib/verticals";
import { Eyebrow } from "@/components/eyebrow";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

const H2 =
  "text-balance text-[1.75rem] font-light leading-[1.2] tracking-tight md:text-h2";

const ADVANTAGE_ICONS: Record<string, LucideIcon> = {
  target: Target,
  clock: Clock,
  messages: MessagesSquare,
  sparkles: Sparkles,
  heart: Heart,
  gauge: Gauge,
};

export function AgenteSection({
  eyebrow,
  h2,
  intro,
  advantages,
  screenshot,
  screenshotHint,
}: AgenteData) {
  const launch = () => {
    window.dispatchEvent(new Event("pegasus:open-agente"));
  };

  return (
    <Section tone="b">
      <Reveal className="max-w-3xl">
        <Eyebrow icon="dot">{eyebrow}</Eyebrow>
        <h2 className={`mt-5 ${H2}`}>{h2}</h2>
        <p className="mt-5 text-base text-muted">{intro}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {advantages.map((adv) => {
              const Icon = ADVANTAGE_ICONS[adv.icon] ?? Sparkles;
              return (
                <li key={adv.title} className="flex gap-4 py-5">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-sky-400"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {adv.title}
                    </h3>
                    <p className="mt-1.5 text-base text-muted">{adv.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
          <ImagePlaceholder
            src={screenshot}
            alt="Agente — embudo de calificación interactivo"
            label="Captura del embudo de calificación de Agente"
            hint={screenshotHint}
            aspect="aspect-[385/341]"
            fit="contain"
          />
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <button
          type="button"
          onClick={launch}
          className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-4 text-base font-medium text-black transition duration-150 ease-out hover:bg-sky-300 active:scale-[0.98] motion-reduce:active:scale-100"
        >
          Probar Agente ahora
          <ArrowRight className="h-4 w-4" />
        </button>
      </Reveal>
    </Section>
  );
}
