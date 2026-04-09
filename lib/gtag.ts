declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends a GA4 custom event. Safe on the server and before gtag.js loads.
 */
export function gtagEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return
  window.gtag?.("event", name, params)
}
