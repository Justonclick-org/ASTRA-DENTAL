/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
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
