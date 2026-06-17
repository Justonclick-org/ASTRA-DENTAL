/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import { legalPages } from '../data/legalData'

function MedicalDisclaimerPage() {
  const data = legalPages.medicalDisclaimer
  return (
    <>
      <SEOComponent title="Medical Disclaimer | Astra Dental Clinic" path="/medical-disclaimer" />
      <section className="container inner-page legal-page">
        <h1>{data.title}</h1>
        {data.sections.map((section) => (
          <p key={section}>{section}</p>
        ))}
      </section>
    </>
  )
}

export default MedicalDisclaimerPage
