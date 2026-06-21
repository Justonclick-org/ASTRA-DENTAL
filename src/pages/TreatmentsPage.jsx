/**
 * Astra Dental Clinic Website
 * Author: Justonclik Team
 * Copyright (c) Justonclik 2026
 * All Rights Reserved
 * Contact: justonclick@2026
 */

import { motion } from 'framer-motion'
import SEOComponent from '../components/SEOComponent'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import TreatmentCard from '../components/TreatmentCard'
import CTASection from '../components/CTASection'
import { treatments } from '../data/treatmentData'
import { fadeUp, staggerContainer } from '../animations/motionVariants'

const bannerImg = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80'

function TreatmentsPage() {
  return (
    <>
      <SEOComponent
        title="Dental Treatments in Chembur Mumbai | Astra Dental Clinic | Dr. Amit Pawar"
        description="Dental implants, root canal, braces, clear aligners, teeth whitening, pediatric dentistry and smile makeovers at Astra Dental Clinic, Chembur Mumbai. Led by Dr. Amit Pawar, BDS MDS."
        keywords="dental treatments Chembur, dental implants Chembur Mumbai, root canal treatment Chembur, braces Chembur, clear aligners Mumbai, teeth whitening Chembur, smile makeover Mumbai, pediatric dentistry Chembur"
        path="/treatments"
      />

      <PageBanner
        eyebrow="Treatments"
        title="Personalized"
        accentTitle="Treatment Plans"
        description="Every treatment begins with careful diagnosis, transparent explanation and patient-first planning."
        bgImage={bannerImg}
      />

      <section className="container inner-page">
        <SectionTitle
          eyebrow="All Services"
          title="What We"
          accentTitle="Offer"
          description="From routine check-ups to complex smile makeovers — all under one roof."
        />
        <motion.div
          className="grid grid-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {treatments.map((treatment) => (
            <motion.div key={treatment.slug} variants={fadeUp}>
              <TreatmentCard treatment={treatment} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}

export default TreatmentsPage
