/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { buildBreadcrumbSchema } from '../services/schemaService'

const ROUTE_LABELS = {
  '/about': 'About',
  '/our-team': 'Our Team',
  '/treatments': 'Treatments',
  '/gallery': 'Gallery',
  '/pricing': 'Pricing',
  '/faqs': 'FAQs',
  '/contact': 'Contact',
  '/book-appointment': 'Book Appointment',
  '/privacy-policy': 'Privacy Policy',
  '/terms-conditions': 'Terms & Conditions',
  '/medical-disclaimer': 'Medical Disclaimer',
  '/cookie-policy': 'Cookie Policy',
  '/dental-implants': 'Dental Implants',
  '/root-canal-treatment': 'Root Canal Treatment',
  '/braces-aligners': 'Braces & Aligners',
  '/teeth-whitening': 'Teeth Whitening',
  '/smile-makeover': 'Smile Makeover',
  '/smile-makeover-chembur': 'Smile Makeover in Chembur',
  '/pediatric-dentistry': 'Pediatric Dentistry',
  '/cosmetic-dentistry': 'Cosmetic Dentistry',
}

function Breadcrumb() {
  const { pathname } = useLocation()
  const label = ROUTE_LABELS[pathname] || pathname.split('/').findLast(Boolean)
    ?.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const items = pathname === '/' ? [] : [
    { label: 'Home', path: '/' },
    { label, path: pathname },
  ]
  const breadcrumbSchema = items.length > 1
    ? JSON.stringify(buildBreadcrumbSchema(items))
    : null

  useEffect(() => {
    if (!breadcrumbSchema) return undefined

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.breadcrumbSchema = 'true'
    script.textContent = breadcrumbSchema
    document.head.appendChild(script)

    return () => script.remove()
  }, [breadcrumbSchema])

  if (!items || items.length <= 1) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-wrap">
      <ol className="container breadcrumb-list">
        {items.map((item, index) => (
          <li key={item.path}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
