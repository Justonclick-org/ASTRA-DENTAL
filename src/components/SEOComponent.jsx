/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Helmet } from 'react-helmet-async'
import { defaultSeo } from '../seo/defaultSeo'
import { siteConfig } from '../constants/siteConfig'

function SEOComponent({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  schema = [],
}) {
  const pageTitle = title || defaultSeo.title
  const pageDescription = description || defaultSeo.description
  const canonical = `${siteConfig.canonicalBaseUrl}${path}`
  const ogImage = image || defaultSeo.image

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.brandName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {schema.map((schemaItem) => (
        <script
          key={`${schemaItem['@type'] || 'schema'}-${schemaItem.name || schemaItem.headline || 'item'}`}
          type="application/ld+json"
        >
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEOComponent
