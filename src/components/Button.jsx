/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'

function Button({ children, to, href, type = 'button', variant = 'primary', fullWidth = false }) {
  const className = `btn btn-${variant}${fullWidth ? ' btn-full' : ''}`
  const isExternalLink = typeof href === 'string' && /^https?:\/\//i.test(href)

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return isExternalLink ? (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}

export default Button
