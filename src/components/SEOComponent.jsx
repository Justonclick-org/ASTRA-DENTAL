/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useEffect } from 'react'
import { defaultSeo } from '../seo/defaultSeo'
import { siteConfig } from '../constants/siteConfig'

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function SEOComponent({
  title,
  description,
  keywords,
  path = '/',
  image,
  type = 'website',
  schema = [],
  noindex = false,
}) {
  const pageTitle = title || defaultSeo.title
  const pageDescription = description || defaultSeo.description
  const pageKeywords = keywords || defaultSeo.keywords
  const canonical = `${siteConfig.canonicalBaseUrl}${path}`
  const ogImage = image || defaultSeo.image

  useEffect(() => {
    document.title = pageTitle
    setMeta('name', 'description', pageDescription)
    setMeta('name', 'keywords', pageKeywords)
    setMeta('name', 'author', 'Dr. Amit Pawar, Astra Dental Clinic')
    setMeta(
      'name',
      'robots',
      `${noindex ? 'noindex' : 'index'}, follow, max-snippet:-1, max-image-preview:large`,
    )
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:locale', 'en_IN')
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', pageDescription)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:site_name', siteConfig.brandName)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', pageDescription)
    setMeta('name', 'twitter:image', ogImage)

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonical

    document.head.querySelectorAll('[data-page-schema]').forEach((element) => element.remove())
    schema.forEach((schemaItem, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.pageSchema = String(index)
      script.textContent = JSON.stringify(schemaItem)
      document.head.appendChild(script)
    })
  }, [canonical, noindex, ogImage, pageDescription, pageKeywords, pageTitle, schema, type])

  return null
}

export default SEOComponent
