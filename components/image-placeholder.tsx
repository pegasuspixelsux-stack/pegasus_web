import Image from "next/image";
import { ImagePlus } from "lucide-react";

/**
 * Renders an <Image> when `src` is set, otherwise a styled empty container
 * with an upload hint (the file path to drop the asset at).
 */
export function ImagePlaceholder({
  src,
  alt = "",
  label,
  hint,
  className,
  aspect = "aspect-[16/10]",
  fit = "cover",
}: {
  src?: string;
  alt?: string;
  label: string;
  hint?: string;
  className?: string;
  aspect?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-2xl bg-surface-card ${
        src ? "border border-foreground/10" : "border border-dashed border-foreground/20"
      } ${className ?? ""}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <ImagePlus className="h-7 w-7 text-muted" strokeWidth={1.5} />
          <p className="text-sm text-muted">{label}</p>
          {hint ? (
            <p className="font-mono text-xs text-muted/50">{hint}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
