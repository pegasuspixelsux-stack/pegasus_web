import type { LucideIcon } from "lucide-react";

/** Raised #161616 card with an optional sky-400 icon, an H3 title and body. */
export function FeatureCard({
  title,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-foreground/10 bg-surface-card p-6 lg:p-8 ${
        className ?? ""
      }`}
    >
      {Icon ? (
        <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
      ) : null}
      <h3
        className={`text-h3 font-light tracking-tight text-foreground ${
          Icon ? "mt-4" : ""
        }`}
      >
        {title}
      </h3>
      <p className="mt-3 text-base text-muted">{children}</p>
    </div>
  );
}
