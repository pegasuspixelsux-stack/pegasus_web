"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { SECTORS } from "@/lib/sectors";

type Target = { label: string; href: string };

const TARGETS: Target[] = [
  { label: "Inicio", href: "/#top" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Sectores", href: "/#sectores" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
  ...SECTORS.map((sector) => ({
    label: sector.title,
    href: `/${sector.slug}`,
  })),
  { label: "Privacidad", href: "/legal/privacidad" },
  { label: "Términos", href: "/legal/terminos" },
  { label: "Cookies", href: "/legal/cookies" },
];

const DIACRITICS = /[̀-ͯ]/g;

const normalize = (value: string) =>
  value.toLowerCase().normalize("NFD").replace(DIACRITICS, "");

export function NavSearch({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    return TARGETS.filter((target) => normalize(target.label).includes(q)).slice(
      0,
      6,
    );
  }, [query]);

  const reset = () => {
    setQuery("");
    setOpen(false);
    onNavigate?.();
  };

  const isMobile = variant === "mobile";

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.03] px-3.5 py-2 transition-colors focus-within:border-foreground/40">
        <Search className="h-4 w-4 shrink-0 text-muted" strokeWidth={1.5} />
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            blurTimer.current = setTimeout(() => setOpen(false), 120);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && results[0]) {
              event.preventDefault();
              reset();
              router.push(results[0].href);
            }
            if (event.key === "Escape") setOpen(false);
          }}
          placeholder="Buscar"
          aria-label="Buscar en el sitio"
          className={`bg-transparent text-sm text-foreground placeholder:text-muted/60 focus:outline-none ${
            isMobile ? "w-full" : "w-32 focus:w-44"
          } transition-[width]`}
        />
      </div>

      {open && results.length > 0 && (
        <ul
          className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-foreground/10 bg-surface-card py-1 shadow-2xl"
          onMouseDown={(event) => {
            event.preventDefault();
            if (blurTimer.current) clearTimeout(blurTimer.current);
          }}
        >
          {results.map((target) => (
            <li key={target.href}>
              <Link
                href={target.href}
                onClick={reset}
                className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {target.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
