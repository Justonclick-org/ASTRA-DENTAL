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
  keywords,
  path = '/',
  image,
  type = 'website',
  schema = [],
}) {
  const pageTitle = title || defaultSeo.title
  const pageDescription = description || defaultSeo.description
  const pageKeywords = keywords || defaultSeo.keywords
  const canonical = `${siteConfig.canonicalBaseUrl}${path}`
  const ogImage = image || defaultSeo.image

  return (
    <Helmet>
      {/* Core */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Dr. Amit Pawar, Astra Dental Clinic" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      {/* Geo */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Chembur, Mumbai, Maharashtra" />
      <meta name="geo.position" content="19.0611;72.8997" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteConfig.brandName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
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
