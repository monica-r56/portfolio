import { analyticsConfig } from "./analyticsConfig";
import { initGA4 } from "./ga4";
import { initClarity } from "./clarity";
import { trackPageView } from "./events";
import { PAGE_ID } from "./analyticsConfig";

let initialized = false;

export function initAnalytics(): void {
  if (initialized) return;
  if (!analyticsConfig.enabled) return;

  try {
    initGA4();
    initClarity();
    trackPageView(PAGE_ID);
    initialized = true;
  } catch {
    // fail silently - portfolio must continue
  }
}
