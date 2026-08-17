import { analyticsConfig } from "./analyticsConfig";

let loaded = false;

export function initClarity(): void {
  if (!analyticsConfig.enabled || !analyticsConfig.clarityProjectId) return;
  if (analyticsConfig.clarityProjectId === "YOUR_CLARITY_PROJECT_ID") return;
  if (loaded) return;

  const projectId = analyticsConfig.clarityProjectId;

  try {
    window.clarity = function (...args: unknown[]) {
      (window.clarity.q = window.clarity.q || []).push(args);
    };
    window.clarity("set", "portfolio", "init");
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${projectId}`;
    script.onerror = () => console.warn("[Analytics] Clarity script failed to load");
    document.head.appendChild(script);
    loaded = true;
  } catch {
    // fail silently
  }
}

export function setClarityTag(key: string, value: string): void {
  if (!analyticsConfig.enabled || !analyticsConfig.clarityProjectId) return;
  if (typeof window.clarity !== "function") return;
  try {
    window.clarity("set", key, value);
  } catch {
    // fail silently
  }
}
