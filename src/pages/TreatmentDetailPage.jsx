/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { Navigate } from 'react-router-dom'
import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import FaqAccordion from '../components/FaqAccordion'
import CTASection from '../components/CTASection'
import { treatments } from '../data/treatmentData'
import { buildFaqSchema } from '../services/schemaService'

function TreatmentDetailPage({ slug }) {
  const treatment = treatments.find((item) => item.slug === slug)

  if (!treatment) {
    return <Navigate to="/treatments" replace />
  }

  return (
    <>
      <SEOComponent
        title={`${treatment.title} | Astra Dental Clinic`}
        description={treatment.shortDescription}
        path={`/${slug}`}
        schema={[buildFaqSchema(treatment.faqs)]}
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="Treatment Detail" title={treatment.title} description={treatment.shortDescription} />
        <div className="detail-grid">
          <article className="card simple-card">
            <h3>What Is The Treatment</h3>
            <p>{treatment.whatIs}</p>
          </article>
          <article className="card simple-card">
            <h3>Benefits</h3>
            <ul>
              {treatment.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
          <article className="card simple-card">
            <h3>Who Needs It</h3>
            <p>{treatment.whoNeedsIt}</p>
          </article>
          <article className="card simple-card">
            <h3>Procedure</h3>
            <p>{treatment.procedure}</p>
          </article>
          <article className="card simple-card">
            <h3>Recovery</h3>
            <p>{treatment.recovery}</p>
          </article>
        </div>
      </section>
      <section className="container inner-page">
        <SectionTitle title="Treatment FAQs" />
        <FaqAccordion items={treatment.faqs} />
      </section>
      <CTASection />
    </>
  )
}

export default TreatmentDetailPage
