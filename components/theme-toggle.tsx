"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "pegasus-theme";
const EVENT = "pegasus:theme";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* private mode / storage blocked — toggle still works for this page */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Dark ⇆ light switch. Rendered in both the nav and the footer; instances
 *  stay in sync via a window event, and the choice is persisted. */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={
        next === "light" ? "Activar modo claro" : "Activar modo oscuro"
      }
      title={next === "light" ? "Modo claro" : "Modo oscuro"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 text-muted transition-colors hover:text-foreground ${
        className ?? ""
      }`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      )}
    </button>
  );
}

/** Inline, render-blocking script — sets the theme before first paint so
 *  a light-mode visitor never sees a dark flash. Rendered in the layout. */
export function ThemeScript() {
  const js = `try{if(localStorage.getItem('${STORAGE_KEY}')==='light'){document.documentElement.dataset.theme='light';}}catch(e){}`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
