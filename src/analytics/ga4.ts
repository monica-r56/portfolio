import { analyticsConfig } from "./analyticsConfig";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

let loaded = false;

export function initGA4(): void {
  if (!analyticsConfig.enabled || !analyticsConfig.gaMeasurementId) return;
  if (loaded) return;

  const id = analyticsConfig.gaMeasurementId;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  script.onerror = () => console.warn("[Analytics] GA4 script failed to load");
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", id, {
    send_page_view: false,
  });

  loaded = true;
}

export function sendGA4Event(eventName: string, params: Record<string, unknown>): void {
  if (!analyticsConfig.enabled || !analyticsConfig.gaMeasurementId) return;
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag("event", eventName, params);
  } catch {
    // fail silently
  }
}
