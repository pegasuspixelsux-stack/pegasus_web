/**
 * Full-bleed band with the shared max-width / padding and one of the two
 * alternating background tones (A = #0A0A0A, B = #0F0F0F).
 */
export function Section({
  children,
  tone = "a",
  id,
  className,
}: {
  children: React.ReactNode;
  tone?: "a" | "b";
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b border-white/10 ${
        tone === "b" ? "bg-surface" : "bg-background"
      } ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-24 lg:py-28">
        {children}
      </div>
    </section>
  );
}
