/**
 * Shared motion primitives so every entrance across the site uses the same
 * curve, distance and timing. Emil Kowalski's bar: ease-out on entrances,
 * short travel, sub-600ms.
 */

/** Expo-style ease-out — snappy start, soft settle. Entrances only. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** One scroll-into-view fade+rise, tuned once. */
export const REVEAL_Y = 16;
export const REVEAL_DURATION = 0.5;
export const REVEAL_TRANSITION = {
  duration: REVEAL_DURATION,
  ease: EASE,
} as const;
