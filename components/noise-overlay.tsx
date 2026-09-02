const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>`;

/**
 * Single fixed grain layer for the whole page. Kept on one
 * `pointer-events-none` fixed element so the browser never repaints it while
 * scrolling (see performance guidance for noise filters).
 */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="noise-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
