/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import { legalPages } from '../data/legalData'

function CookiePolicyPage() {
  const data = legalPages.cookie
  return (
    <>
      <SEOComponent title="Cookie Policy | Astra Dental Clinic" path="/cookie-policy" />
      <section className="container inner-page legal-page">
        <h1>{data.title}</h1>
        {data.sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </section>
    </>
  )
}

export default CookiePolicyPage
