/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import FaqAccordion from '../components/FaqAccordion'
import CTASection from '../components/CTASection'
import { faqs } from '../data/faqData'
import { buildFaqSchema } from '../services/schemaService'

const bannerImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80'

function FaqPage() {
  return (
    <>
      <SEOComponent
        title="Dental FAQ | Astra Dental Clinic Chembur | Dr. Amit Pawar"
        description="Common questions about dental implants, root canal, braces, aligners, child dentistry and preventive care — answered by Dr. Amit Pawar, MDS at Astra Dental Clinic, Chembur Mumbai."
        keywords="dental FAQ Chembur, dental implant questions Mumbai, root canal FAQ, braces FAQ Mumbai, dentist FAQ Chembur, Dr Amit Pawar FAQ"
        path="/faqs"
        schema={[buildFaqSchema(faqs)]}
      />

      <PageBanner
        eyebrow="FAQs"
        title="Common"
        accentTitle="Questions Answered"
        description="Clear, honest answers to the most frequently asked dental questions."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle eyebrow="All Questions" title="Everything You" accentTitle="Need To Know" />
        <FaqAccordion items={faqs} />
      </section>

      <CTASection />
    </>
  )
}

export default FaqPage
