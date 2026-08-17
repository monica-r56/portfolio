import { analyticsConfig } from "./analyticsConfig";
import { sendGA4Event } from "./ga4";
import { setClarityTag } from "./clarity";

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (!analyticsConfig.enabled) return;

  if (analyticsConfig.debug) {
    console.log("[Analytics]", eventName, params);
  }

  sendGA4Event(eventName, params);
}

export function trackPageView(page: string): void {
  trackEvent("page_view", { page });
}

export function trackSectionView(section: string, sectionIndex: number, page: string): void {
  trackEvent("portfolio_section_view", { section, section_index: sectionIndex, page });
  setClarityTag("section", section);
}

export function trackSectionTime(section: string, durationSeconds: number): void {
  if (durationSeconds < 2) return;
  trackEvent("portfolio_section_time", { section, duration_seconds: Math.round(durationSeconds) });
}

export function trackNavigationClick(params: {
  navigation_item: string;
  destination_section: string;
  navigation_location: string;
}): void {
  trackEvent("portfolio_navigation_click", params);
}

export function trackButtonClick(params: {
  button_id: string;
  button_label: string;
  section: string;
  destination?: string;
  item_id?: string;
  item_type?: string;
}): void {
  trackEvent("portfolio_button_click", params);
}

export function trackProjectView(params: { project_id: string; project_name: string; section: string }): void {
  trackEvent("portfolio_project_view", params);
  setClarityTag("project", params.project_id);
}

export function trackProjectLink(params: {
  project_id: string;
  project_name: string;
  destination: string;
  section: string;
}): void {
  trackEvent("portfolio_project_link", params);
}

export function trackExternalLink(params: {
  destination: string;
  item?: string;
  section: string;
  link_type?: string;
}): void {
  trackEvent("portfolio_external_link", params);
}

export function trackEmailClick(params: { location: string; button_id: string; section: string }): void {
  trackEvent("portfolio_email_click", params);
}

export function trackResumeDownload(params: { location: string; button_label: string; section: string }): void {
  trackEvent("portfolio_resume_download", params);
}

export function trackScrollDepth(depthPercentage: number): void {
  trackEvent("portfolio_scroll_depth", { depth_percentage: depthPercentage });
}

export function trackEndReached(): void {
  trackEvent("portfolio_end_reached", {});
}

export function trackWorkshopViewPost(params: {
  item_id: string;
  item_name: string;
  organization: string;
  section: string;
  destination: string;
}): void {
  trackEvent("portfolio_workshop_view_post", params);
}

export function trackEventViewPost(params: {
  item_id: string;
  item_name: string;
  organization: string;
  section: string;
  destination: string;
}): void {
  trackEvent("portfolio_event_view_post", params);
}

export function trackPublicationClick(params: {
  publication_id: string;
  publication_name: string;
  destination: string;
  section: string;
}): void {
  trackEvent("portfolio_publication_click", params);
}
