/**
 * GA4 Analytics via gtag.js
 * Measurement ID is loaded via the gtag snippet in index.html (G-HHF14WMV6B)
 * trackEvent pushes to dataLayer which gtag reads automatically.
 */

export function trackEvent(eventName, parameters = {}) {
  globalThis.dataLayer = globalThis.dataLayer || []
  globalThis.dataLayer.push({ event: eventName, ...parameters })
}

/**
 * @deprecated GTM removed — GA4 gtag is loaded directly in index.html.
 * Kept as no-op so existing imports don't break.
 */
export function initializeGtm() {
  // No-op: GA4 gtag.js is loaded in index.html <head>
}
