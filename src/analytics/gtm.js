const DEFAULT_GTM_ID = import.meta.env.VITE_GTM_ID

export function trackEvent(eventName, parameters = {}) {
  globalThis.dataLayer = globalThis.dataLayer || []
  globalThis.dataLayer.push({ event: eventName, ...parameters })
}

export function initializeGtm(containerId = DEFAULT_GTM_ID) {
  globalThis.dataLayer = globalThis.dataLayer || []
  if (!containerId || globalThis.__astraGtmInitialized) return

  globalThis.__astraGtmInitialized = true
  globalThis.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`
  document.head.appendChild(script)
}