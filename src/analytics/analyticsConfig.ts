export const analyticsConfig = {
  enabled: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
  debug: import.meta.env.VITE_ANALYTICS_DEBUG === "true",
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined,
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined,
};

export const PAGE_ID = "portfolio_home";

export const SECTION_IDS = [
  "hero",
  "impact",
  "about",
  "experience",
  "projects",
  "research",
  "tech-talks",
  "community",
  "technology",
  "contact",
] as const;
