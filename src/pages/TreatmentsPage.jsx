/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import TreatmentCard from '../components/TreatmentCard'
import CTASection from '../components/CTASection'
import { treatments } from '../data/treatmentData'

function TreatmentsPage() {
  return (
    <>
      <SEOComponent
        title="Dental Treatments | Astra Dental Clinic"
        description="Explore Astra Dental Clinic treatments including implants, root canal, braces, aligners, whitening, pediatric and cosmetic dentistry."
        path="/treatments"
      />
      <section className="container inner-page">
        <SectionTitle
          eyebrow="Treatments"
          title="Personalized Treatment Plans"
          description="Every treatment begins with careful diagnosis, transparent explanation and patient-first planning."
        />
        <div className="grid grid-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}

export default TreatmentsPage
