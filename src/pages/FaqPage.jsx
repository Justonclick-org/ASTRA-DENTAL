/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import SectionTitle from '../components/SectionTitle'
import FaqAccordion from '../components/FaqAccordion'
import { faqs } from '../data/faqData'
import { buildFaqSchema } from '../services/schemaService'

function FaqPage() {
  return (
    <>
      <SEOComponent
        title="Frequently Asked Questions | Astra Dental Clinic"
        description="Get answers to common questions about root canal, implants, braces, aligners, child dentistry and preventive oral care."
        path="/faqs"
        schema={[buildFaqSchema(faqs)]}
      />
      <section className="container inner-page">
        <SectionTitle eyebrow="FAQs" title="Common Patient Questions" />
        <FaqAccordion items={faqs} />
      </section>
    </>
  )
}

export default FaqPage
