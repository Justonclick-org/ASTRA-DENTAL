/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { siteConfig } from '../constants/siteConfig'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.brandName,
    image: `${siteConfig.canonicalBaseUrl}/og-image.svg`,
    url: siteConfig.canonicalBaseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bldg. No. 123, Chembur Mayur CHSL, Dakshata Housing Society, Chembur West, Tilak Nagar',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400089',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0611',
      longitude: '72.8997',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
    employee: {
      '@type': 'Person',
      name: 'Dr. Amit Pawar',
      jobTitle: 'Principal Dentist',
      hasCredential: 'BDS, MDS',
      worksFor: siteConfig.brandName,
    },
    medicalSpecialty: [
      'Dentistry',
      'Implantology',
      'Cosmetic Dentistry',
      'Endodontics',
      'Orthodontics',
      'Pediatric Dentistry',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.youtube,
    ],
  }
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteConfig.canonicalBaseUrl}${item.path}`,
    })),
  }
}

export function buildArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      worksFor: {
        '@type': 'MedicalOrganization',
        name: siteConfig.brandName,
        url: siteConfig.canonicalBaseUrl,
      },
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: siteConfig.brandName,
      url: siteConfig.canonicalBaseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.canonicalBaseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.canonicalBaseUrl}/blog/${post.slug}`,
    },
    about: {
      '@type': 'MedicalCondition',
      name: post.category,
    },
  }
}

export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
