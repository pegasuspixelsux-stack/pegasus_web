/** Raised #161616 card with an H3 title and muted body copy. */
export function FeatureCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface-card p-6 lg:p-8 ${
        className ?? ""
      }`}
    >
      <h3 className="text-h3 font-light tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-base text-muted">{children}</p>
    </div>
  );
}
