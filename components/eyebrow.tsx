import { Sparkle } from "lucide-react";

/**
 * Section overline: a small uppercase, letter-spaced sky-400 label with either
 * a Sparkle glyph or a pulsing status dot.
 */
export function Eyebrow({
  children,
  icon = "sparkle",
  className,
}: {
  children: React.ReactNode;
  icon?: "sparkle" | "dot";
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-accent ${
        className ?? ""
      }`}
    >
      {icon === "dot" ? (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      ) : (
        <Sparkle className="h-3.5 w-3.5 fill-current" />
      )}
      {children}
    </p>
  );
}
