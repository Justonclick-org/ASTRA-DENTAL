import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { trackEvent } from './gtm'

const SERVICE_PAGES = {
  '/dental-implants': 'Dental Implants',
  '/root-canal-treatment': 'RCT',
  '/teeth-whitening': 'Teeth Whitening',
}

function AnalyticsTracker() {
  const { pathname } = useLocation()
  const lastTrackedPath = useRef('')

  useEffect(() => {
    if (lastTrackedPath.current === pathname) return
    lastTrackedPath.current = pathname
    trackEvent('page_view', {
      page_path: pathname,
      page_location: globalThis.location.href,
    })

    if (SERVICE_PAGES[pathname]) {
      trackEvent('service_page_view', {
        service_name: SERVICE_PAGES[pathname],
        page_path: pathname,
      })
    }
  }, [pathname])

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!anchor) return
      if (anchor.dataset.analyticsEvent) return

      const url = new URL(anchor.href, globalThis.location.href)
      if (url.protocol === 'tel:') {
        trackEvent('phone_call_click', { link_url: `${url.protocol}${url.pathname}` })
      } else if (/^(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)$/.test(url.hostname)) {
        trackEvent('whatsapp_click', { link_url: `${url.origin}${url.pathname}` })
      } else if (
        url.hostname === 'maps.google.com' ||
        url.hostname === 'maps.app.goo.gl' ||
        (url.hostname.includes('google.') && url.pathname.startsWith('/maps'))
      ) {
        trackEvent('google_maps_click', { link_url: `${url.origin}${url.pathname}` })
      }
    }

    document.addEventListener('click', handleDocumentClick, true)
    return () => document.removeEventListener('click', handleDocumentClick, true)
  }, [])

  return null
}

export default AnalyticsTracker